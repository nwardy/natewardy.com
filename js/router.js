// ─── Project data ─────────────────────────────────────────────────────────────

var PROJECTS = {
  'caliber-fraud-detection': {
    title: 'Caliber Collision Fraud Detection',
    image: 'assets/images/projects/caliber.jpg',
    description: 'After one month as a Shop Helper, a regional VP recognized something and handed me a problem nobody had solved: the shop was bleeding money and nobody knew why. I was given millions of lines of repair order data from CCC1, the industry-standard repair order management system, and told to figure it out. Rather than go through it line by line, I taught myself Python and Excel VBA from scratch in 2021 to build a tool that could do it for me. The program cross-referenced insurance payout amounts against what the shop actually received per repair order, automatically flagging any discrepancy for audit. It recovered $70,000 for the shop and was adopted across the region. This was the project that put me on the path to computer engineering. It was the moment I realized I could combine my hands-on mechanical background with software to solve real problems at scale.',
    details: [
      'Promoted from Shop Helper after one month when a regional VP identified potential and assigned me an open-ended revenue recovery investigation.',
      'Faced with millions of rows of repair order data from CCC1, I self-taught Python and Excel VBA in 2021 (before AI coding tools existed) to automate what would have taken months by hand.',
      'Built a cross-referencing pipeline that ingested CCC1 repair order exports and compared insurance remittance amounts against shop-side records, flagging every discrepancy.',
      'The program identified systemic underpayments across the shop\'s repair history, recovering $70,000 in revenue that had quietly slipped through.',
      'The process was recognized by regional leadership and rolled out across multiple shops in the region as a standard audit workflow.',
      'This project was the turning point: combining my automotive and mechanical roots with software, it set the course for a career in computer engineering.',
    ],
  },
  'tracerbot': {
    title: 'TracerBot',
    image: 'assets/images/projects/tracerbot.jpg',
    description: 'Designed and built an autonomous, 3D-printed tank robot with tracked drive and turret using Raspberry Pi. Integrated OpenCV with a custom image classification model for real-time target locking and tracking. Enabled multi-interface control via SSH, HTTP server, and custom radio-based communication module.',
    details: [
      'Designed and 3D-printed the full chassis: tracked drive system, rotating turret, and enclosure.',
      'Raspberry Pi-powered with OpenCV computer vision pipeline for real-time object detection and target locking.',
      'Trained a custom image classification model to distinguish and track targets in live camera feed.',
      'Multi-interface control: SSH command line, browser-based HTTP server, and a custom radio communication module.',
      'Entire hardware and software stack built from scratch, mechanical design through embedded control.',
    ],
  },
  'vulnerability-remediation': {
    title: 'Vulnerability Remediation',
    image: 'assets/images/projects/vuln.png',
    description: 'Developed an AI/ML pipeline using AWS SageMaker and Google T5 NLP to automatically generate actionable remediation instructions for security vulnerabilities. Reduced manual triage time by transforming raw CVE data into structured, context-aware guidance for engineering teams across Centene Corporation\'s enterprise infrastructure.',
    details: [
      'Built on AWS SageMaker with Google T5 NLP fine-tuned on security vulnerability datasets.',
      'Transformed raw CVE and vulnerability scanner output into structured, human-readable remediation steps.',
      'Reduced manual triage time for security engineering teams across Centene\'s enterprise infrastructure.',
      'Integrated into existing SRE tooling to surface actionable guidance automatically during vulnerability reviews.',
      'Handled ambiguous and incomplete CVE data gracefully, generating context-aware instructions even from sparse input.',
    ],
  },
  'oasis-shield': {
    title: 'Oasis Shield',
    image: 'assets/images/projects/oasisSheild.png',
    description: 'Led the migration of critical on-premise mail service infrastructure to AWS, consolidating multiple microservices into a scalable cloud architecture. Supported enterprise workflows including fax, document scanning, and prior authorizations across Centene Corporation, improving reliability, maintainability, and system scalability.',
    details: [
      'Delivered an OAuth 2.0 / JWT authentication service unifying identity across all Oasis mail operations microservices.',
      'Built an S3 Document API using AWS S3 multipart uploads, Lambda, DynamoDB, and Step Functions for secure PHI file handling.',
      'Migrated on-premise mail infrastructure to AWS, improving reliability across fax, document scanning, and prior authorization workflows.',
      'Partnered with Radiant Logic and Axway to modernize identity and data integration in the platform.',
      'Led a team of 5 interns as Intern Team Lead, running Agile standups and presenting roadmaps to executive leadership.',
    ],
  },
  'centag': {
    title: 'CenTag',
    image: 'assets/images/projects/centag2.png',
    video: 'https://www.youtube.com/embed/w-2ZRhZeyfw',
    description: 'Designed and built a secure QR-based attendance system using Angular, Python, and AWS to replace manual check-ins at corporate events. Successfully pitched the project to HR leadership, resulting in corporate funding and adoption by Centene Corporation in June 2025 for enterprise-wide event management.',
    details: [
      'Full-stack Angular frontend with Python backend deployed on AWS for scalable, secure event attendance tracking.',
      'QR code generation and validation system replacing error-prone manual sign-in sheets at corporate events.',
      'Pitched directly to HR leadership, project received corporate funding and was adopted enterprise-wide.',
      'Productionalized and deployed by Centene Corporation in June 2025 for use across the organization.',
      'Designed with security and auditability in mind: tamper-resistant QR codes, real-time attendance records.',
    ],
  },
  'cenmap': {
    title: 'CenMap',
    image: 'assets/images/projects/cenmap.jpg',
    description: 'Developed an essential internal tool leveraging graph theory to map and visualize all of Centene\'s resources across systems. Designed to provide service owners, managers, and executive leadership with clear insight into resource relationships, enabling more effective optimization and decision-making. Widely adopted across the organization, CenMap has proven invaluable at scale.',
    details: [
      'Graph-theory-based resource mapping engine that models relationships between 480+ Centene product owner resources.',
      'Interactive visualization layer for service owners, managers, and executive leadership to explore system dependencies.',
      'Designed to surface optimization opportunities and support data-driven decision-making at the enterprise scale.',
      'Integrated across IT, HR, Finance, and Operations application domains within Centene\'s infrastructure.',
      'Productionalized alongside CenTag, both tools now in active enterprise use across the organization.',
    ],
  },
  'wardy-foundation': {
    title: 'Wardy Foundation',
    image: 'assets/images/projects/thewardyfoundation.jpg',
    description: 'A 501(c)(3) nonprofit dedicated to bringing access to STEM education across North and South Carolina. Focused on creating opportunities and resources to bridge the educational gap in underserved communities, empowering students with the tools and knowledge needed to pursue careers in science, technology, engineering, and mathematics.',
    details: [
      'Founded and registered as a 501(c)(3) nonprofit organization.',
      'Mission: bridge the STEM education gap in underserved communities across North and South Carolina.',
      'Focused on hands-on programming, workshops, and mentorship to make technical education accessible.',
      'Building partnerships with schools, universities, and corporate sponsors to expand reach and resources.',
      'Driven by the belief that access to STEM education is a right, not a privilege.',
    ],
  },
  'electronics-education': {
    title: 'Electronics Education',
    image: 'assets/images/projects/electron.jpeg',
    description: 'Founded and led a first-of-its-kind initiative at the University of South Carolina to bridge the gap in electronics education for non-electrical engineering students. Launched with a 35+ student workshop where participants, many starting from zero experience, left capable of soldering and integrating hardware into their own projects. Secured over $7,000 in equipment through cross-department collaboration.',
    details: [
      'First-of-its-kind electronics education program at the University of South Carolina targeting non-EE students.',
      'Launched with a workshop attended by 35+ students, many with zero prior electronics experience.',
      'Participants completed the session capable of soldering and integrating hardware into their own projects.',
      'Secured over $7,000 in equipment through cross-department collaboration spanning computer, electrical, and mechanical engineering.',
      'Designed curriculum from scratch: component theory, hands-on soldering, and real project integration.',
    ],
  },
  'window-project': {
    title: 'Window Project',
    image: 'assets/images/projects/window.jpg',
    description: 'Developed a system to analyze foot traffic and engagement outside the lab by distinguishing between passersby and individuals actively observing the space. Generated actionable marketing data quantifying impressions per hour, enabling the lab to position itself as a high-value advertising and engagement location.',
    details: [
      'Computer vision system mounted at a lab window to passively analyze external foot traffic.',
      'Classified individuals as passersby vs. active observers using pose and dwell-time heuristics.',
      'Generated quantified impression-per-hour metrics, creating actionable data for marketing and sponsorship pitches.',
      'Enabled the lab to demonstrate its value as a high-visibility advertising and engagement location.',
      'Ran continuously without human intervention, producing ongoing analytics with minimal overhead.',
    ],
  },
  'first-pitch': {
    title: 'Project First Pitch',
    image: 'assets/images/projects/ProjectFirstPitch.png',
    video: 'https://www.youtube.com/embed/X-lk02Rgg8s',
    description: 'Developing a high-pressure launch system integrating the Boston Dynamics Spot API, ESP32 microcontrollers, and a custom air cannon to execute a ceremonial first pitch at a USC Night minor league baseball game. A complex, high-risk system combining robotics, embedded control, and mechanical design under real-world constraints.',
    details: [
      'Integrating the Boston Dynamics Spot robot as the primary delivery platform for a live ceremonial first pitch.',
      'Custom air cannon designed and built to achieve accurate, consistent baseball delivery at game-ready speeds.',
      'ESP32 microcontrollers managing pneumatic control, triggering, and safety interlock systems.',
      'Synchronized Spot\'s motion with cannon firing sequence via the Boston Dynamics API.',
      'High-stakes live performance context, system must be reliable, safe, and visually impressive under pressure.',
    ],
  },
  'caelus': {
    title: 'CAELUS',
    image: 'assets/images/projects/caelus.png',
    description: 'Building an autonomous drone capable of executing missions from start to finish without GPS or human intervention. Focused on real-time perception, onboard decision-making, and fully independent navigation in constrained environments.',
    details: [
      'University-funded autonomous drone initiative under the UofSC Center for Industry Solutions.',
      'GPS-denied navigation: all localization and pathfinding done onboard using sensor fusion and computer vision.',
      'Real-time perception pipeline for obstacle detection and environment mapping in constrained spaces.',
      'Onboard decision-making system capable of planning and executing full missions autonomously.',
      'Multidisciplinary team across avionics, software, and mechanical design, leading as Project Lead Engineer.',
      'Driving domestic procurement of critical drone components and managing supplier engagement.',
    ],
  },
};

// ─── Router ───────────────────────────────────────────────────────────────────

(function () {
  var mainContent  = document.getElementById('main-content');
  var projectPage  = document.getElementById('project-page');

  function showMain() {
    mainContent.style.display  = '';
    projectPage.style.display  = 'none';
    projectPage.setAttribute('aria-hidden', 'true');
    mainContent.removeAttribute('aria-hidden');
    document.title = 'Nathan Wardy - Software Engineer';
    var hash = window.location.hash;
    if (hash && hash.length > 1) {
      var target = document.querySelector(hash);
      if (target) {
        setTimeout(function() { target.scrollIntoView(); }, 0);
        return;
      }
    }
    window.scrollTo(0, 0);
  }

  function showProject(slug) {
    var data = PROJECTS[slug];
    if (!data) { showMain(); return; }

    // Build page HTML
    var videoHTML = data.video
      ? (function () {
          var videoId = data.video.replace('https://www.youtube.com/embed/', '');
          var thumb   = 'https://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg';
          var link    = 'https://www.youtube.com/watch?v=' + videoId;
          return '<a class="pp-video-thumb" href="' + link + '" target="_blank" rel="noopener noreferrer">' +
                   '<img class="pp-video-img" src="' + thumb + '" alt="Watch on YouTube">' +
                   '<div class="pp-video-play"><svg viewBox="0 0 68 48" width="68" height="48"><path d="M66.5 7.7c-.8-2.9-3-5.1-5.8-5.9C55.8.5 34 .5 34 .5S12.2.5 7.3 1.8C4.5 2.6 2.3 4.8 1.5 7.7.2 12.7.2 24 .2 24s0 11.3 1.3 16.3c.8 2.9 3 5.1 5.8 5.9C12.2 47.5 34 47.5 34 47.5s21.8 0 26.7-1.3c2.8-.8 5-3 5.8-5.9 1.3-5 1.3-16.3 1.3-16.3s0-11.3-1.3-16.3z" fill="#f00"/><path d="M27.2 34.2l17.8-10.2-17.8-10.2v20.4z" fill="#fff"/></svg></div>' +
                   '<div class="pp-video-label">WATCH ON YOUTUBE ↗</div>' +
                 '</a>';
        }())
      : '';

    projectPage.innerHTML =
      '<header class="header">' +
        '<div class="container">' +
          '<div class="content-wrapper">' +
            '<nav class="nav">' +
              '<img src="assets/images/favicon/logolight.png" alt="Nathan Wardy" id="pp-logo" class="logo">' +
              '<ul class="nav-links">' +
                '<li><a href="#technical">TECHNICAL</a></li>' +
                '<li><a href="#projects">INITIATIVES</a></li>' +
                '<li><a href="#experience">EXPERIENCE</a></li>' +
                '<li><a href="#education">EDUCATION</a></li>' +
              '</ul>' +
            '</nav>' +
          '</div>' +
        '</div>' +
      '</header>' +
      '<div class="pp-wrap">' +
        '<button class="pp-back" id="pp-back">← BACK</button>' +
        '<h1 class="pp-title">' + data.title + '</h1>' +
        '<div class="pp-body">' +
          '<div class="pp-image-col">' +
            '<canvas class="pp-canvas" id="pp-canvas"></canvas>' +
          '</div>' +
        '</div>' +
        '<div class="pp-divider"></div>' +
        '<p class="pp-description">' + data.description + '</p>' +
        videoHTML +
      '</div>';

    mainContent.style.display  = 'none';
    mainContent.setAttribute('aria-hidden', 'true');
    projectPage.style.display  = '';
    projectPage.removeAttribute('aria-hidden');
    document.title = data.title + ' - Nathan Wardy';
    projectPage.scrollTop = 0;

    // Back button
    document.getElementById('pp-back').addEventListener('click', function () {
      window.location.hash = '';
    });

    // Project page logo returns to main
    document.getElementById('pp-logo').addEventListener('click', function () {
      window.location.hash = '';
    });

    // Load + pixelate project image
    initProjectPageImage(data.image);

    // Scramble text on project page
    initProjectPageScramble();
  }

  // ── Image pixelation for project sub-page ─────────────────────────────────

  function initProjectPageImage(src) {
    var canvas = document.getElementById('pp-canvas');
    if (!canvas) return;

    var img = new Image();
    img.onload = function () {
      // Size canvas to natural aspect
      var w = canvas.offsetWidth || 520;
      var h = Math.round(w * img.naturalHeight / img.naturalWidth);
      canvas.width        = w;
      canvas.height       = h;
      canvas.style.height = h + 'px';

      // Animate in: depixelate from full block → clear
      var startTime = null;
      var duration  = 900;

      function frame(ts) {
        if (!startTime) startTime = ts;
        var t   = Math.min((ts - startTime) / duration, 1);
        var ease = 1 - Math.pow(1 - t, 3); // ease-out cubic
        drawPixelated(canvas, img, 1 - ease);
        if (t < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    };
    img.src = src;
  }

  function drawPixelated(canvas, img, pixelation) {
    var ctx = canvas.getContext('2d');
    var w   = canvas.width;
    var h   = canvas.height;
    if (!w || !h) return;

    var MAX_BLOCK = 36;
    var block = Math.max(1, Math.round(MAX_BLOCK * pixelation));

    ctx.clearRect(0, 0, w, h);

    if (block <= 1) {
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, w, h);
      return;
    }

    var sw  = Math.max(1, Math.floor(w / block));
    var sh  = Math.max(1, Math.floor(h / block));
    var off = document.createElement('canvas');
    off.width  = sw;
    off.height = sh;
    off.getContext('2d').drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, sw, sh);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(off, 0, 0, sw, sh, 0, 0, w, h);
  }

  // ── Text scramble for project sub-page ────────────────────────────────────

  function initProjectPageScramble() {
    // Stagger each text element with TextScramble
    var targets = [
      { sel: '.pp-title',       delay: 200  },
      { sel: '.pp-description', delay: 500  },
    ];

    targets.forEach(function (t) {
      var els = projectPage.querySelectorAll(t.sel);
      els.forEach(function (el, i) {
        var original = el.textContent;
        el.textContent = scrambleString(original);
        var fx = new TextScramble(el);
        fx.setText(original, t.delay + i * 80);
      });
    });
  }

  // scrambleString is defined in scramble-text.js but we need it here too
  // (router.js loads after scramble-text.js so the global is available)
  function scrambleString(text) {
    var CHARS = '!<>-_\\/[]{}—=+*^?#@';
    return text.split('').map(function (c) {
      return c === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)];
    }).join('');
  }

  // ── Hash routing ──────────────────────────────────────────────────────────

  function route() {
    var hash = window.location.hash; // e.g. "#project/caelus"
    if (hash && hash.indexOf('#project/') === 0) {
      var slug = hash.slice('#project/'.length);
      showProject(slug);
    } else {
      showMain();
    }
  }

  window.addEventListener('hashchange', route);
  // Run on load — DOMContentLoaded already fired by the time scripts run,
  // but we need the DOM ready; placing script at bottom of body ensures this.
  route();
}());
