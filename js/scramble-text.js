// Pretext loaded dynamically so a CDN failure never blocks the scramble animation.
// lockDimensions uses DOM measurement immediately, then upgrades to pretext if it loads.
let _pretext = null;
(function () {
  try {
    import('https://cdn.jsdelivr.net/npm/@chenglou/pretext@0.0.4/dist/layout.js')
      .then(m => { _pretext = m; })
      .catch(() => {});
  } catch (_) {}
}());

const CHARS = '!<>-_\\/[]{}—=+*^?#@';

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function scrambleString(text) {
  return text.split('').map(c => (c === ' ' ? ' ' : randomChar())).join('');
}

// ─── Core scramble class ──────────────────────────────────────────────────────
// Timestamp-based so it's frame-rate-independent.
// Characters resolve left-to-right in a wave; unresolved chars dim & flip fast
// near the wave front, slow far from it.

class TextScramble {
  constructor(el) {
    this.el = el;
    this._raf = null;
    this._delay = null;
    this.update = this.update.bind(this);
  }

  setText(newText, delay) {
    delay = delay || 0;
    return new Promise(resolve => {
      clearTimeout(this._delay);
      cancelAnimationFrame(this._raf);

      this._delay = setTimeout(() => {
        this.resolve   = resolve;
        this.newText   = newText;

        // Duration scales with text length — short labels feel snappy,
        // long paragraphs have room to breathe.
        var charCount  = newText.replace(/ /g, '').length;
        this.duration  = Math.max(480, Math.min(1300, charCount * 14));
        this.startTime = null;

        this.queue = newText.split('').map(function (char, i, arr) {
          return {
            char: char,
            // Left-to-right wave with ±3 % per-character jitter
            resolveAt: (i / Math.max(arr.length - 1, 1)) * 0.82
                     + (Math.random() * 0.06 - 0.03)
                     + 0.06,
            current: randomChar(),
          };
        });

        this._raf = requestAnimationFrame(this.update);
      }, delay);
    });
  }

  update(ts) {
    if (!this.startTime) this.startTime = ts;
    var raw  = Math.min((ts - this.startTime) / this.duration, 1);

    // Ease-in-out quad
    var wave = raw < 0.5
      ? 2 * raw * raw
      : 1 - Math.pow(-2 * raw + 2, 2) / 2;

    var out = '';
    for (var i = 0; i < this.queue.length; i++) {
      var item = this.queue[i];
      if (item.char === ' ') {
        out += ' ';
      } else if (wave >= item.resolveAt) {
        out += item.char;
      } else {
        if (Math.random() < 0.22) item.current = randomChar();
        out += item.current;
      }
    }

    this.el.textContent = out;

    if (raw >= 1) {
      this.el.textContent = this.newText;
      this.resolve();
    } else {
      this._raf = requestAnimationFrame(this.update);
    }
  }

  cancel() {
    cancelAnimationFrame(this._raf);
    clearTimeout(this._delay);
  }
}

// ─── Rotating subtitle ────────────────────────────────────────────────────────

class RotatingSubtitle {
  constructor(el, roles) {
    this.el      = el;
    this.roles   = roles;
    this.idx     = 0;
    this.fx      = new TextScramble(el);
    this.running = false;
    this._timer  = null;
  }

  start() {
    if (this.running) return;
    this.running = true;
    this._next();
  }

  _next() {
    if (!this.running) return;
    var self = this;
    this.fx.setText(this.roles[this.idx]).then(function () {
      self._timer = setTimeout(function () {
        self.idx = (self.idx + 1) % self.roles.length;
        self._next();
      }, 2200);
    });
  }

  stop() {
    this.running = false;
    this.fx.cancel();
    clearTimeout(this._timer);
  }
}

// ─── Dimension locking ────────────────────────────────────────────────────────
// Must be called BEFORE text is mutated — real layout is still in the DOM.
// Uses pretext (canvas, no reflow) when available; falls back to getBoundingClientRect.

function lockDimensions(el) {
  var rect = el.getBoundingClientRect();
  if (rect.height <= 0) return;

  var height = rect.height;

  if (_pretext) {
    try {
      var style      = window.getComputedStyle(el);
      var font       = style.fontWeight + ' ' + style.fontSize + ' ' + style.fontFamily;
      var lhPx       = parseFloat(style.lineHeight);
      var fsPx       = parseFloat(style.fontSize);
      var lineHeight = (isNaN(lhPx) || isNaN(fsPx)) ? 1.2 : lhPx / fsPx;
      var prepared   = _pretext.prepare(el.textContent, font);
      var result     = _pretext.layout(prepared, rect.width, lineHeight);
      if (result && result.height > 0) height = result.height;
    } catch (_) {}
  }

  el.style.minHeight = height + 'px';
}

function unlockDimensions(el) {
  el.style.minHeight = '';
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {

  var SELECTORS = [
    // Hero
    '.hero-contact a',
    // Technical
    '.section-title',
    '.skill-group-title',
    '.skill-name',
    // Projects
    '.proj-count',
    '.proj-slide-title',
    '.proj-slide-desc',
    '.proj-read-more',
    // Experience
    '.role-title',
    '.role-duration',
    '.role-duties li',
    // Education
    '.degree-title',
    '.duration',
    '.gpa',
    '.activities-label',
    '.coursework',
    '.achievements-title',
    '.awards-list li',
    '.volunteering-title',
    '.volunteer-list li',
  ];

  var store = new Map();
  var seen  = new Set();

  // Lock → scramble each element (lock uses real text, so measurement is exact)
  SELECTORS.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      if (!el.textContent.trim()) return;
      var original = el.textContent;
      lockDimensions(el);
      store.set(el, original);
      el.textContent = scrambleString(original);
    });
  });

  // One-shot TextScramble reveal: fires once per element as it enters view,
  // then stops. Text stays clear for the rest of the session.
  var observer = new IntersectionObserver(function (entries) {
    var batch = entries.filter(function (e) {
      return e.isIntersecting && !seen.has(e.target);
    });
    // Sort top-to-bottom so the reveal flows naturally down the section
    batch.sort(function (a, b) {
      return a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top;
    });
    batch.forEach(function (entry, i) {
      seen.add(entry.target);
      observer.unobserve(entry.target);
      var original = store.get(entry.target);
      if (!original) return;
      var fx = new TextScramble(entry.target);
      // Cap stagger at 300ms so large sections don't drag on too long
      fx.setText(original, Math.min(i * 35, 300)).then(function () {
        unlockDimensions(entry.target);
      });
    });
  }, { threshold: 0.1, rootMargin: '0px 0px 0px 0px' });

  store.forEach(function (_, el) { observer.observe(el); });

  // ── Subtitle ──────────────────────────────────────────────────────────────
  var subtitleRole   = document.querySelector('.subtitle-role');
  var subtitleSuffix = document.querySelector('.subtitle-engineer');
  if (!subtitleRole) return;

  var roles = [
    { prefix: 'SOFTWARE',         engineer: true  },
    { prefix: 'SYSTEMS',          engineer: true  },
    { prefix: 'SITE RELIABILITY', engineer: true  },
    { prefix: 'COMPUTER',         engineer: true  },
    { prefix: 'PCB',              engineer: true  },
    { prefix: 'CAD',              engineer: true  },
    { prefix: 'SERVANT LEADER',   engineer: false },
  ];

  subtitleRole.textContent = 'SITE RELIABILITY'; // widest role — lock to this height
  lockDimensions(subtitleRole);
  subtitleRole.textContent = scrambleString(roles[0].prefix);

  var roleFx      = new TextScramble(subtitleRole);
  var roleIdx     = 0;
  var roleRunning = false;
  var roleTimer   = null;

  function showNextRole() {
    if (!roleRunning) return;
    var role = roles[roleIdx];
    if (subtitleSuffix) subtitleSuffix.style.display = role.engineer ? '' : 'none';
    roleFx.setText(role.prefix).then(function () {
      roleTimer = setTimeout(function () {
        roleIdx = (roleIdx + 1) % roles.length;
        showNextRole();
      }, 2200);
    });
  }

  new IntersectionObserver(function (entries, obs) {
    if (entries[0].isIntersecting) {
      setTimeout(function () { roleRunning = true; showNextRole(); }, 800);
      obs.disconnect();
    }
  }, { threshold: 0.3 }).observe(subtitleRole);
});
