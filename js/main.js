
// Nathan Wardy Resume Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the website
    init();
});

function init() {
    // Initialize dark mode (system preference + logo click toggle)
    initDarkMode();

    // Initialize smooth scrolling for navigation links
    initSmoothScrolling();

    // Initialize header scroll effects
    initHeaderEffects();

    // Initialize external links
    initExternalLinks();

    // Initialize hero on-load effects
    initHero();

    // Initialize skill bar chart
    initSkillsChart();

    // Initialize project image pixelation
    initProjectPixelation();

    // Initialize project horizontal carousel + lightbox
    initProjectCarousel();

    // Initialize slide navigation dots
    initSlideDots();

    // Initialize JS scroll carousel (gives resistance / eased transitions)
    initScrollCarousel();

    // Extend fork PCB trace up to the preceding role's title
    initForkOffset();

    console.log('Nathan Wardy Resume Website Initialized');
}

// ── Dark mode — system preference + logo click toggle ─────────────────────────
function initDarkMode() {
    var body    = document.body;
    var logoEl      = document.getElementById('site-logo');
    var footerLogo  = document.getElementById('footer-logo');
    var favicon     = document.getElementById('favicon');
    var favApple    = document.getElementById('favicon-apple');

    var LIGHT = 'assets/images/favicon/logolight.png';
    var DARK  = 'assets/images/favicon/logodark.png';

    function applyMode(dark) {
        body.classList.toggle('dark', dark);
        if (logoEl)      logoEl.src      = dark ? DARK  : LIGHT;
        if (footerLogo)  footerLogo.src  = dark ? DARK  : LIGHT;
        if (favicon)  favicon.href   = dark ? DARK  : LIGHT;
        if (favApple) favApple.href  = dark ? DARK  : LIGHT;
        try { localStorage.setItem('nw-dark', dark ? '1' : '0'); } catch(_) {}
    }

    // Restore saved preference, fall back to system preference
    var saved = null;
    try { saved = localStorage.getItem('nw-dark'); } catch(_) {}
    var dark = saved !== null
        ? saved === '1'
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyMode(dark);

    // Follow system changes only when no manual override is stored
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        try { if (localStorage.getItem('nw-dark') !== null) return; } catch(_) {}
        applyMode(e.matches);
    });

    // Click logo to toggle
    if (logoEl) {
        logoEl.addEventListener('click', function() {
            applyMode(!body.classList.contains('dark'));
        });
    }
}

// Smooth scrolling for internal navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .slide-nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = 80; // Fixed header height
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header effects on scroll
function initHeaderEffects() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add subtle background change on scroll
        if (currentScroll > 10) {
            header.style.backgroundColor = 'var(--color-hover-bg)';
        } else {
            header.style.backgroundColor = 'var(--color-white)';
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    }, { passive: true });
}

// Handle external links
function initExternalLinks() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
        // Add security attributes for external links
        link.setAttribute('rel', 'noopener noreferrer');
        
        // Optional: Add external link indicator
        if (!link.querySelector('.external-icon')) {
            const icon = document.createElement('span');
            icon.className = 'external-icon';
            icon.innerHTML = ' ↗';
            icon.style.fontSize = '0.8em';
            icon.style.opacity = '0.7';
            link.appendChild(icon);
        }
    });
}

// ── Project image pixelation ──────────────────────────────────────────────
// True pixelation: draws the image at a tiny resolution then scales it back
// up with imageSmoothingEnabled = false, giving hard pixel blocks.
// Block size shrinks as the element scrolls into the viewport.

function initProjectPixelation() {
    var items = [];

    document.querySelectorAll('.project-canvas').forEach(function(canvas) {
        var item = { canvas: canvas, img: null, loaded: false };
        items.push(item);

        var img = new Image();
        img.onload = function() {
            item.img = img;
            item.loaded = true;
            sizeCanvas(canvas);
            renderProjectItem(item);
        };
        // Silently skip missing images — canvas stays blank
        img.src = canvas.dataset.src;
    });

    var ticking = false;

    function onScroll() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(function() {
                items.forEach(function(item) {
                    if (item.loaded) renderProjectItem(item);
                });
                ticking = false;
            });
        }
    }

    // Listen on the reel clip (project carousel scroll) and window
    var clip = document.querySelector('.proj-reel-clip');
    if (clip) clip.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // Smooth depixelate when the projects section slides into view
    window.addEventListener('projectSectionActive', function() {
        var startTime = null;
        var duration  = 900;
        function frame(ts) {
            if (!startTime) startTime = ts;
            var t    = Math.min((ts - startTime) / duration, 1);
            var ease = 1 - Math.pow(1 - t, 3); // ease-out cubic
            items.forEach(function(item) {
                if (item.loaded) drawPixelated(item.canvas, item.img, 1 - ease);
            });
            if (t < 1) {
                requestAnimationFrame(frame);
            } else {
                // Hand off to scroll-driven rendering
                items.forEach(function(item) {
                    if (item.loaded) renderProjectItem(item);
                });
            }
        }
        requestAnimationFrame(frame);
    });

    window.addEventListener('resize', function() {
        items.forEach(function(item) {
            if (item.loaded) {
                sizeCanvas(item.canvas);
                renderProjectItem(item);
            }
        });
    });
}

function sizeCanvas(canvas) {
    var parent = canvas.parentElement;
    var w = parent ? parent.offsetWidth  : (canvas.offsetWidth  || 220);
    var h = parent ? parent.offsetHeight : (canvas.offsetHeight || 220);
    canvas.width  = w || 220;
    canvas.height = h || 220;
}

function renderProjectItem(item) {
    var rect  = item.canvas.getBoundingClientRect();
    var viewH = window.innerHeight;

    // Entering from bottom: 0 → 1 as element scrolls up into view
    var enterProgress = (viewH - rect.top) / (viewH * 0.65);
    // Exiting through top: 1 → 0 as element's bottom approaches viewport top
    var exitProgress  = rect.bottom / (viewH * 0.35);
    var progress = Math.min(1, Math.max(0, Math.min(enterProgress, exitProgress)));

    drawPixelated(item.canvas, item.img, 1 - progress);
}

function drawPixelated(canvas, img, pixelation) {
    var ctx = canvas.getContext('2d');
    var w   = canvas.width;
    var h   = canvas.height;
    if (!w || !h) return;

    var MAX_BLOCK = 36;
    var block = Math.max(1, Math.round(MAX_BLOCK * pixelation));

    ctx.clearRect(0, 0, w, h);

    // Compute object-fit:contain rect
    var scale = Math.min(w / img.naturalWidth, h / img.naturalHeight);
    var dw = img.naturalWidth  * scale;
    var dh = img.naturalHeight * scale;
    var dx = (w - dw) / 2;
    var dy = (h - dh) / 2;

    if (block <= 1) {
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, dx, dy, dw, dh);
        return;
    }

    // Draw at tiny resolution then scale up for pixel-block effect
    var sw = Math.max(1, Math.floor(dw / block));
    var sh = Math.max(1, Math.floor(dh / block));

    var off    = document.createElement('canvas');
    off.width  = sw;
    off.height = sh;
    off.getContext('2d').drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, sw, sh);

    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(off, 0, 0, sw, sh, dx, dy, dw, dh);
}

// ── Slide carousel — CSS-transform-based swipe transitions ────────────────────
// Sections are position:fixed and stacked. Transitioning means moving them with
// translateY so one slides out while the next slides in, driven by CSS transitions
// with a fast ease-out curve for the velocity / throw feel.

function initScrollCarousel() {
    var sections = Array.from(document.querySelectorAll('section[id]'));
    if (!sections.length) return;

    var current    = 0;
    var locked     = false;
    var wheelAccum = 0;
    var THRESHOLD  = 50; // px of wheel delta required to commit (resistance feel)

    // ── Silence transitions during initial positioning ────────────────────────
    sections.forEach(function(sec, i) {
        sec.style.transition = 'none';
        sec.style.transform  = i === 0 ? 'translateY(0)' : 'translateY(110vh)';
    });

    // Re-enable the CSS transition (defined by .slide-transitioning) after paint
    requestAnimationFrame(function() {
        requestAnimationFrame(function() {
            sections.forEach(function(sec) {
                sec.style.transition = ''; // hand back to CSS class rule
                sec.classList.add('slide-transitioning');
            });
        });
    });

    // ── Dot sync ──────────────────────────────────────────────────────────────
    function syncDots(idx) {
        var id = sections[idx].id;
        document.querySelectorAll('.slide-dot').forEach(function(d) {
            d.classList.toggle('active', d.dataset.section === id);
        });
    }
    syncDots(0);

    // ── Core transition ───────────────────────────────────────────────────────
    function goTo(idx) {
        if (idx < 0 || idx >= sections.length || locked) return;
        locked     = true;
        wheelAccum = 0;
        current    = idx;

        // Stack: slides before current slide up (-110vh), after slide down (110vh)
        sections.forEach(function(sec, i) {
            if      (i < idx)  sec.style.transform = 'translateY(-110vh)';
            else if (i === idx) sec.style.transform = 'translateY(0)';
            else                sec.style.transform = 'translateY(110vh)';
        });

        syncDots(idx);

        // Notify skill chart if technical section is now active
        if (sections[idx] && sections[idx].id === 'technical') {
            window.dispatchEvent(new Event('skillSectionActive'));
        }

        // Notify project images if projects section is now active
        if (sections[idx] && sections[idx].id === 'projects') {
            window.dispatchEvent(new Event('projectSectionActive'));
        }

        // Unlock once the incoming slide finishes its transition.
        // Safety timeout in case transitionend doesn't fire (common on mobile/reduced-motion).
        var target      = sections[idx];
        var unlockTimer = setTimeout(function() { locked = false; }, 900);
        target.addEventListener('transitionend', function onDone(e) {
            if (e.propertyName !== 'transform') return;
            clearTimeout(unlockTimer);
            target.removeEventListener('transitionend', onDone);
            locked = false;
        });
    }

    // ── Nav / dot link clicks use the carousel ────────────────────────────────
    document.querySelectorAll('.nav-links a[href^="#"], .slide-nav a[href^="#"]')
        .forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                var id  = link.getAttribute('href').slice(1);
                var idx = sections.findIndex(function(s) { return s.id === id; });
                if (idx !== -1) goTo(idx);
            });
        });

    // ── Wheel ─────────────────────────────────────────────────────────────────
    window.addEventListener('wheel', function(e) {
        var pp = document.getElementById('project-page');
        if (pp && pp.style.display !== 'none') return;
        if (locked) { e.preventDefault(); return; }

        var sec = sections[current];
        var goingDown = e.deltaY > 0;

        if (sec && sec.id === 'projects') {
            var projectList = sec.querySelector('.proj-reel-clip');
            if (projectList) {
                var projectAtTop = projectList.scrollTop <= 0;
                var projectAtBottom = projectList.scrollTop + projectList.clientHeight >= projectList.scrollHeight - 5;

                if (goingDown && !projectAtBottom) {
                    e.preventDefault();
                    projectList.scrollTop += e.deltaY;
                    return;
                }

                if (!goingDown && !projectAtTop) {
                    e.preventDefault();
                    projectList.scrollTop += e.deltaY;
                    return;
                }
            }
        }

        var hasRoom  = sec.scrollHeight > sec.clientHeight + 5;
        var atTop    = sec.scrollTop <= 0;
        var atBottom = sec.scrollTop + sec.clientHeight >= sec.scrollHeight - 5;

        // Let the section scroll internally when it has room in that direction
        if (hasRoom && goingDown && !atBottom) return;
        if (hasRoom && !goingDown && !atTop)   return;

        // At edge (or short slide) — accumulate for resistance then commit
        e.preventDefault();
        if (wheelAccum !== 0 && (goingDown !== (wheelAccum > 0))) wheelAccum = 0;
        wheelAccum += e.deltaY;
        if (Math.abs(wheelAccum) >= THRESHOLD) goTo(current + (goingDown ? 1 : -1));

    }, { passive: false });

    // ── Touch swipe ───────────────────────────────────────────────────────────
    var touchY0 = 0;
    window.addEventListener('touchstart', function(e) {
        touchY0 = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchend', function(e) {
        var pp = document.getElementById('project-page');
        if (pp && pp.style.display !== 'none') return;
        if (locked) return;
        var dy       = touchY0 - e.changedTouches[0].clientY;
        if (Math.abs(dy) < 50) return;
        var sec      = sections[current];
        if (sec && sec.id === 'projects') {
            var projectList = sec.querySelector('.proj-reel-clip');
            if (projectList) {
                var projectAtTop = projectList.scrollTop <= 0;
                var projectAtBottom = projectList.scrollTop + projectList.clientHeight >= projectList.scrollHeight - 5;
                if (dy > 0 && !projectAtBottom) return;
                if (dy < 0 && !projectAtTop) return;
            }
        }

        var atTop    = sec.scrollTop <= 0;
        var atBottom = sec.scrollTop + sec.clientHeight >= sec.scrollHeight - 5;
        if (dy > 0 && atBottom) goTo(current + 1);
        if (dy < 0 && atTop)    goTo(current - 1);
    }, { passive: true });
}

// ── Shared text scramble (used by hero + project carousel) ────────────────────
var SCRAMBLE_CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789';
var CHAR_CYCLE_MS  = 60;

function scramble(el, finalText, duration) {
    el.textContent    = finalText;
    el.style.height   = el.offsetHeight + 'px';
    el.style.overflow = 'hidden';
    var len = finalText.length, startTime = null, lastCycle = 0, randChars = [];
    for (var k = 0; k < len; k++) {
        randChars[k] = SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
    }
    function frame(t) {
        if (!startTime) startTime = t;
        var progress = Math.min((t - startTime) / duration, 1);
        var revealed = Math.floor(progress * len);
        if (t - lastCycle >= CHAR_CYCLE_MS) {
            lastCycle = t;
            for (var j = revealed; j < len; j++) {
                randChars[j] = SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            }
        }
        var out = '';
        for (var i = 0; i < len; i++) {
            if (finalText[i] === ' ') out += ' ';
            else if (i < revealed)    out += finalText[i];
            else                      out += randChars[i];
        }
        el.textContent = out;
        if (progress < 1) {
            requestAnimationFrame(frame);
        } else {
            el.textContent    = finalText;
            el.style.height   = '';
            el.style.overflow = '';
        }
    }
    requestAnimationFrame(frame);
}

// ── Projects: vertical carousel inside the main slide carousel ─────────────
function initProjectCarousel() {
    var reel    = document.getElementById('proj-reel');
    var clip    = reel ? reel.parentElement : null;
    var scrollThumb = document.getElementById('proj-scroll-thumb');
    var prevBtn = document.querySelector('.proj-arrow--prev');
    var nextBtn = document.querySelector('.proj-arrow--next');
    if (!reel || !clip) return;

    var slides  = Array.from(reel.querySelectorAll('.proj-slide'));
    if (!slides.length) return;

    slides.forEach(function(slide) {
        slide.classList.remove('active');
        slide.removeAttribute('aria-hidden');
    });

    function updateScrollProgress() {
        if (!scrollThumb) return;
        var maxScroll = Math.max(1, clip.scrollHeight - clip.clientHeight);
        var progress = Math.min(1, Math.max(0, clip.scrollTop / maxScroll));
        scrollThumb.style.transform = 'scaleX(' + progress + ')';
    }

    clip.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);
    requestAnimationFrame(updateScrollProgress);

    // ── Arrow buttons ─────────────────────────────────────────────────────
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            clip.scrollBy({ top: -clip.clientHeight * 0.75, behavior: 'smooth' });
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            clip.scrollBy({ top: clip.clientHeight * 0.75, behavior: 'smooth' });
        });
    }
}

// Slide navigation dot tracking
// Dots are synced by goTo() in initScrollCarousel — nothing to do here.
function initSlideDots() {
    // Initial active state is set by syncDots(0) inside initScrollCarousel.
}

// ── Hero: scramble text + depixelate photo on page load ──────────────────────
function initHero() {
    // Scramble text elements with staggered delays
    var title    = document.querySelector('.hero-title');
    var subtitle = document.querySelector('.hero-subtitle');
    var aboutLines = document.querySelectorAll('.hero-about p');

    if (title) setTimeout(function() { scramble(title, title.textContent, 1500); }, 80);
    aboutLines.forEach(function(line, i) {
        setTimeout(function() {
            scramble(line, line.textContent, 1300);
        }, 550 + i * 140);
    });

    // Cycling subtitle
    var CYCLE_PHRASES = [
        'Software Engineer',
        'Systems Engineer',
        'Electronics Engineer',
        'Robotics Engineer',
        'Electromechanical Engineer',
        'Engineer.',
        'Innovator.',
        'Leader.'
    ];
    var CYCLE_SCRAMBLE_MS = 1000;
    var CYCLE_HOLD_MS     = 2600;
    var cycleIdx = 0;

    if (subtitle) {
        setTimeout(function loop() {
            scramble(subtitle, CYCLE_PHRASES[cycleIdx], CYCLE_SCRAMBLE_MS);
            cycleIdx = (cycleIdx + 1) % CYCLE_PHRASES.length;
            setTimeout(loop, CYCLE_SCRAMBLE_MS + CYCLE_HOLD_MS);
        }, 300);
    }

    // Depixelate hero photo
    var img  = document.querySelector('.hero-canvas');
    var wrap = img && img.parentElement;
    if (!img || !wrap) return;

    var canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;image-rendering:pixelated;filter:grayscale(1);';
    wrap.appendChild(canvas);

    function run() {
        var w = img.offsetWidth, h = img.offsetHeight;
        if (!w || !h) return;
        canvas.width  = w;
        canvas.height = h;
        canvas.style.width  = w + 'px';
        canvas.style.height = h + 'px';
        canvas.style.opacity    = '1';
        canvas.style.transition = 'none';

        var ctx = canvas.getContext('2d'), startTime = null;
        var DURATION = 900, START_PX = 6;

        function drawAtRes(res) {
            var rh = Math.max(1, Math.round(res * h / w));
            var off = document.createElement('canvas');
            off.width = res; off.height = rh;
            var oc = off.getContext('2d');
            oc.imageSmoothingEnabled = false;
            oc.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, res, rh);
            ctx.imageSmoothingEnabled = false;
            ctx.clearRect(0, 0, w, h);
            ctx.drawImage(off, 0, 0, res, rh, 0, 0, w, h);
        }

        function frame(t) {
            if (!startTime) startTime = t;
            var p = Math.min((t - startTime) / DURATION, 1);
            var eased = p < 0.5 ? 2*p*p : 1 - Math.pow(-2*p+2, 2)/2;
            drawAtRes(Math.round(START_PX + (w - START_PX) * eased));
            if (p < 1) {
                requestAnimationFrame(frame);
            } else {
                canvas.style.transition = 'opacity 0.2s ease-in';
                canvas.style.opacity    = '0';
            }
        }
        requestAnimationFrame(frame);
    }

    if (img.complete && img.naturalWidth > 0) {
        run();
    } else {
        img.addEventListener('load', run, { once: true });
    }
}

// ── Technical Skills: horizontal bar chart with drag-to-edit ─────────────────
function initSkillsChart() {
    var STORAGE_KEY = 'nw_skillValues';

    var SKILL_GROUPS = [
        { title: 'PROGRAMMING & FRAMEWORKS', skills: [
            { name: 'Python',     value: 96.4 },
            { name: 'YAML',       value: 57.4 },
            { name: 'TypeScript', value: 74.1 },
            { name: 'C++',        value: 49   },
            { name: 'Shell',      value: 55.8 },
            { name: 'C',          value: 47.6 },
            { name: 'Java',       value: 34.1 },
        ]},
        { title: 'INFRASTRUCTURE & OBSERVABILITY', skills: [
            { name: 'AWS',         value: 87.5 },
            { name: 'Kubernetes',  value: 17.7 },
            { name: 'Dynatrace',   value: 33.8 },
            { name: 'Splunk',      value: 25.6 },
            { name: 'Spring Boot', value: 65.5 },
            { name: 'VMware',      value: 34.3 },
            { name: 'CytoScape',   value: 34.6 },
        ]},
        { title: 'SYSTEMS & TOOLS', skills: [
            { name: 'GitLab',     value: 69.2 },
            { name: 'Jira',       value: 57.5 },
            { name: 'Postman',    value: 48   },
            { name: 'ServiceNow', value: 93.1 },
            { name: 'MobaXterm',  value: 34.2 },
            { name: 'WireShark',  value: 19.7 },
            { name: 'Neo4j',      value: 62   },
        ]},
        { title: 'HARDWARE & DESIGN', skills: [
            { name: 'Fusion360', value: 93.1 },
            { name: 'KiCAD',     value: 53.7 },
            { name: 'Quartus',   value: 27.8 },
            { name: 'Verilog',   value: 7.1  },
        ]},
    ];

    // Merge saved values from localStorage
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            var savedVals = JSON.parse(saved);
            SKILL_GROUPS.forEach(function(g) {
                g.skills.forEach(function(s) {
                    if (savedVals[s.name] !== undefined) s.value = savedVals[s.name];
                });
            });
        } catch(e) {}
    }

    var chart = document.getElementById('skills-chart');
    if (!chart) return;

    // Build DOM
    function buildChart() {
        chart.innerHTML = '';
        SKILL_GROUPS.forEach(function(group) {
            var groupEl = document.createElement('div');
            groupEl.className = 'skill-group';

            var titleEl = document.createElement('div');
            titleEl.className = 'skill-group-title';
            titleEl.textContent = group.title;
            groupEl.appendChild(titleEl);

            var barsEl = document.createElement('div');
            barsEl.className = 'skill-bars';

            group.skills.forEach(function(skill) {
                var row = document.createElement('div');
                row.className = 'skill-bar-row';
                row.dataset.skill = skill.name;

                var nameEl = document.createElement('span');
                nameEl.className = 'skill-name';
                nameEl.textContent = skill.name;

                var track = document.createElement('div');
                track.className = 'skill-bar-track';

                var fill = document.createElement('div');
                fill.className = 'skill-bar-fill';
                fill.style.width = '0%';
                fill.style.transition = 'none';
                fill.dataset.value = skill.value;

                var handle = document.createElement('div');
                handle.className = 'skill-bar-handle';
                fill.appendChild(handle);

                track.appendChild(fill);
                row.appendChild(nameEl);
                row.appendChild(track);
                barsEl.appendChild(row);
            });

            groupEl.appendChild(barsEl);
            chart.appendChild(groupEl);
        });
    }

    buildChart();

    // Animate bars in with stagger
    function animateIn() {
        var fills = chart.querySelectorAll('.skill-bar-fill');
        fills.forEach(function(fill, i) {
            setTimeout(function() {
                fill.style.transition = 'width 0.8s cubic-bezier(0.4,0,0.2,1)';
                fill.style.width = fill.dataset.value + '%';
            }, i * 35);
        });
    }

    // Trigger animation when the technical slide becomes active
    // (IntersectionObserver doesn't fire reliably on position:fixed + translated sections)
    var animated = false;
    window.addEventListener('skillSectionActive', function() {
        if (!animated) { animated = true; animateIn(); }
    });

}

// Utility function to handle responsive navigation (if needed later)
function toggleMobileNav() {
    // Placeholder for mobile navigation toggle if you want to add a hamburger menu later
    console.log('Mobile navigation toggle');
}

// Contact form handler (if you add a form later)
function handleContactForm(formElement) {
    formElement.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle form submission here
        console.log('Contact form submitted');
    });
}

// Lazy loading for images (if you add images later)
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

function initForkOffset() {
    var fork = document.querySelector('.timeline-fork');
    if (!fork) return;
    var prevStep = fork.previousElementSibling;
    if (!prevStep) return;
    var roleTitle = prevStep.querySelector('.role-title');
    if (!roleTitle) return;

    function measure() {
        var forkTop      = fork.getBoundingClientRect().top;
        var titleTop     = roleTitle.getBoundingClientRect().top;
        var offset       = Math.max(0, forkTop - titleTop - 3);
        fork.style.setProperty('--fork-top-offset', offset + 'px');
    }

    measure();
    window.addEventListener('resize', measure);
}

// Export functions if using modules (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        init,
        initSmoothScrolling,
        initHeaderEffects,
        toggleMobileNav,
        handleContactForm
    };
}
