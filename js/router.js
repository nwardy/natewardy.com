// ─── Stories data ─────────────────────────────────────────────────────────────
// Each story has an `origin` that defines where it comes from.
// origin: 'project' | 'recommendation' | 'photo' | 'linkedin'
//
// All entries:
// { origin, date (YYYY-MM-DD, used for sort), label (display),
//   body, image (optional),
//   parentLink (href back to parent page), parentLabel (link text) }
//
// Recommendation-only extras: from, fromTitle
// LinkedIn-only extras:        link (external URL)

// Array order controls feed order — no automatic sort.
// Top of array = top of feed (most recent). Bottom = oldest.
var STORIES = [
  {
    origin: 'recommendation',
    label: 'JUN 2026',
    image: 'assets/images/reqDan.png',
    body: '"Nate is the kind of person who will be energized by a new challenge and dedicate the time needed to learn whatever topic or skill is necessary in order to meet that challenge head-on... Simply put: Nate has the attitude and the aptitude. I recommend him without reservation."',
    parentLink: '#project/rec-dan',
    parentLabel: 'VIEW RECOMMENDATION',
    from: 'Dan Kalaf',
    fromTitle: 'Problem Solver, Servant Leader · Mentor, Centene Corporation',
  },
  {
    origin: 'youtube',
    label: 'JUN 2026',
    image: 'assets/images/ad11.gif',
    link: 'https://www.youtube.com/shorts/khsQ3AYuVvM',
    linkLabel: 'WATCH ON YOUTUBE',
  },
  {
    origin: 'instagram',
    label: 'MAY 2026',
    image: 'assets/images/storygcemar.png',
    link: 'https://www.instagram.com/p/DXhXAeUDuzL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    linkLabel: 'VIEW ON INSTAGRAM',
  },
  {
    origin: 'linkedin',
    label: 'MAY 2026',
    image: 'assets/images/may26story.png',
    link: 'https://www.linkedin.com/posts/summer-internship-spotlight-nathan-wardy-share-7459960584998998017-NJ49/',
    linkLabel: 'VIEW ON LINKEDIN',
  },
  {
    origin: 'recommendation',
    label: 'MAY 2026',
    body: '"Nathan consistently exceeded expectations in both technical execution and problem-solving... Beyond the technical delivery, Nathan demonstrated strong analytical thinking, initiative, and an ability to quickly understand complex operational and data management concepts. I would highly recommend Nathan."',
    image: 'assets/images/reqJen.png',
    parentLink: '#project/rec-jen',
    parentLabel: 'VIEW RECOMMENDATION',
    from: 'Jennifer Halverson',
    fromTitle: 'Results-Driven Leader, Centene Corporation',
  },
  {
    origin: 'project',
    label: 'JUN 2026',
    body: 'CenMap queries ServiceNow across tens of millions of records, maps the full organizational hierarchy using a graph theory algorithm I developed, and renders it as an interactive visualization now used by 480+ product owners and executive leadership. Think Google Maps for your organization.',
    image: 'assets/images/projects/cenmap.jpg',
    parentLink: '#project/cenmap',
    parentLabel: 'VIEW PROJECT',
  },
  {
    origin: 'project',
    label: 'MAY 2026',
    body: 'CAELUS went from a four-person team to fifteen over one semester, and crossed the finish line with a fully autonomous GPS-denied drone: NVIDIA Jetson Orin Nano, SpeedyBee F405, 2-DOF 360° LiDAR, and a closed-loop ground charging station. It started because someone said we couldn\'t do it.',
    image: 'assets/images/projects/caelus.png',
    parentLink: '#project/caelus',
    parentLabel: 'VIEW PROJECT',
  },
  {
    origin: 'project',
    label: 'MAY 2026',
    body: 'Built a pneumatically powered, electronically controlled baseball cannon mounted on Boston Dynamics Spot, wrote the physics documentation to get approval from the Columbia Fireflies and UofSC athletics, and delivered the first pitch live in front of a real audience. One attempt. It worked.',
    image: 'assets/images/projects/ProjectFirstPitch.png',
    parentLink: '#project/first-pitch',
    parentLabel: 'VIEW PROJECT',
  },
  {
    origin: 'linkedin',
    label: 'APR 2026',
    image: 'assets/images/apr26.png',
    link: 'https://www.linkedin.com/posts/robots-and-baseball-absolutely-prior-ugcPost-7453479019112710144-7IJk/',
    linkLabel: 'VIEW ON LINKEDIN',
  },
  {
    origin: 'project',
    label: 'APR 2026',
    body: 'Behind the scenes of Project First Pitch.',
    image: 'assets/images/carstory1.jpg',
    parentLink: '#project/first-pitch',
    parentLabel: 'VIEW PROJECT',
  },
  {
    origin: 'linkedin',
    label: 'MAR 2026',
    image: 'assets/images/mar26lecturestory.png',
    link: 'https://www.linkedin.com/posts/nathanwardy_today-sebastian-boscan-and-i-had-the-chance-ugcPost-7435133376375726080-jua3/',
    linkLabel: 'VIEW ON LINKEDIN',
  },
  {
    origin: 'article',
    label: 'MAR 2026',
    image: 'assets/images/mar26story.png',
    link: 'https://research.cec.sc.edu/c4is/news/building-skills-ground-hands-soldering-workshop-c4is',
    linkLabel: 'READ ARTICLE',
  },
  {
    origin: 'instagram',
    label: 'FEB 2026',
    video: 'assets/images/ad12.mp4',
    link: 'https://www.instagram.com/reel/DWRKVmAgLA1/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==',
    linkLabel: 'VIEW ON INSTAGRAM',
  },
  {
    origin: 'project',
    label: 'JAN 2026',
    body: 'Computer vision system pointed at the lab window that measures foot traffic and classifies active observers vs. passersby, generating a real impression-per-hour metric for the space. Find the places where data already exists and nobody is collecting it yet.',
    image: 'assets/images/projects/window.jpg',
    parentLink: '#project/window-project',
    parentLabel: 'VIEW PROJECT',
  },
  {
    origin: 'project',
    label: 'AUG 2025',
    body: 'Rebuilt Centene\'s on-premise Oasis mail platform in AWS: OAuth 2.0 / JWT identity service with Ping Federate, Axway, and Radiant Logic, plus a production S3 Document API handling secure PHI file ingestion at enterprise scale. Led a team of four interns through the whole thing.',
    image: 'assets/images/projects/oasisSheild.png',
    parentLink: '#project/oasis-shield',
    parentLabel: 'VIEW PROJECT',
  },
  {
    origin: 'project',
    label: 'AUG 2025',
    body: 'CenTag shipped at the 2025 Centene Intern Summit. 200 interns, 3D printed QR keychains, a fully serverless AWS checkpoint app, and zero Excel sheets. Five additional teams requested it for their own events after the summit.',
    image: 'assets/images/projects/centag2.png',
    parentLink: '#project/centag',
    parentLabel: 'VIEW PROJECT',
  },
  {
    origin: 'linkedin',
    label: 'MAY 2025',
    image: 'assets/images/may25story.png',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7333535923252379648/',
    linkLabel: 'VIEW ON LINKEDIN',
  },
  {
    origin: 'project',
    label: 'JUN 2026',
    body: '35 students, 24 hours to source $7,000 in equipment across four department chairs, and every single attendee was a mechanical, civil, or chemical engineering major who had never soldered before. They all left with a working device. Got emails after saying it opened up career directions they didn\'t know existed.',
    embed: 'https://www.youtube.com/embed/qjC6O1Eb0kw',
    parentLink: '#project/electronics-education',
    parentLabel: 'VIEW PROJECT',
  },
  {
    origin: 'project',
    label: 'JAN 2025',
    body: 'A 501(c)(3) nonprofit bringing STEM education to underserved communities across the Carolinas. Not about building something huge. About making the most impact we can with what we have, for kids who are exactly where I was.',
    image: 'assets/images/projects/thewardyfoundation.jpg',
    parentLink: '#project/wardy-foundation',
    parentLabel: 'VIEW PROJECT',
  },
  {
    origin: 'project',
    label: 'AUG 2024',
    body: 'Presented the vulnerability remediation pipeline to 200 company leaders at a Centene intersection call. The system ingests ServiceNow scans, checks Jira for existing tickets, creates or updates them automatically, and uses Google T5 NLP to write the descriptions. Adopted by several additional server-owning teams.',
    image: 'assets/images/projects/vuln.png',
    parentLink: '#project/vulnerability-remediation',
    parentLabel: 'VIEW PROJECT',
  },
  {
    origin: 'recommendation',
    label: 'JUN 2025',
    body: '"Nathan is sponge. He has an extraordinary ability to quickly learn whatever is put in front of him... He truly is a joy with which to work. I have no doubt that he will bring a very positive and productive energy to whomever he decides to work after he completes his education."',
    image: 'assets/images/reqDrew.png',
    parentLink: '#project/rec-drew',
    parentLabel: 'VIEW RECOMMENDATION',
    from: 'Drew Rhodes',
    fromTitle: 'IT Leadership, Centene Corporation',
  },
  {
    origin: 'project',
    label: 'MAY 2024',
    body: 'TracerBot: a 3D-printed tracked robot on Raspberry Pi with a pitch-and-yaw turret, a hijacked Orbeez blaster, and an image classification model trained to center on human-shaped targets and fire. Built from scratch by three freshmen who just wanted to move faster than the curriculum.',
    image: 'assets/images/projects/tracerbot.jpg',
    parentLink: '#project/tracerbot',
    parentLabel: 'VIEW PROJECT',
  },
  {
    origin: 'project',
    label: 'OCT 2021',
    body: 'Taught myself Python and Excel VBA from scratch to build a cross-referencing tool that caught $70,000 in insurance underpayments hiding in millions of repair order records. It was adopted across the region. This was the project that put me on the path to engineering.',
    image: 'assets/images/projects/caliber.jpg',
    parentLink: '#project/caliber-fraud-detection',
    parentLabel: 'VIEW PROJECT',
  },
];

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
    meta: 'JAN 2023 - MAY 2024  ·  USC LANCASTER',
    description: 'In January of 2023, sitting through freshman Computer Science classes at USC Lancaster, three of us, myself Joshua Gould and Riya Patel, agreed that the curriculum wasn\'t moving fast enough. We were aiming to transfer to the University of South Carolina\'s main campus by fall 2024, and we needed to be ready. TracerBot was our answer. Not a class project, not an assignment: a deliberate decision to learn everything at once by building something real. The robot was a tracked tank with a pitch-and-yaw turret, designed entirely in TinkerCAD from scratch and printed part-by-part on a Creality Ender V2: every bracket, every enclosure, every track link. The drivetrain ran two DC motors through a twin-stacked Adafruit motor HAT on a Raspberry Pi; the turret used two NEMA steppers for independent axis control. We reverse-engineered an Orbeez blaster and wired its firing mechanism into the HAT so it could be triggered in code. At the end of the build, we mounted a camera, trained a small image classification model, and wrote a control loop with one instruction: if a human-shaped target appears in frame, center it, and when it\'s centered at the right distance, shoot. Working on USC\'s protected network forced us into real networking by necessity: SSH, nmap, Linux, git, and bash, all learned because the project simply didn\'t function without them. Every line of code was self-taught, YouTube and early ChatGPT when it still wasn\'t that good, corrected by the only curriculum that actually works: things breaking and needing to be fixed. TracerBot was not sophisticated engineering. It was a budget-constrained, self-imposed crash course in what real engineering actually is: blocked problems, team pressure, and no option to leave it broken. It opened a door, and everything since has been on the other side of it.',
    details: [
      'Raspberry Pi with twin-stacked Adafruit DC / Stepper Motor HATs: two DC motors driving independent tracks, two NEMA steppers controlling turret pitch and yaw.',
      'Full chassis and turret designed in TinkerCAD, printed part-by-part on a Creality Ender V2 using R/C suspension hardware, bearings, and rivets.',
      'Reverse-engineered Orbeez blaster firing mechanism hijacked and wired into the motor HAT for fully programmatic trigger control.',
      'Camera-mounted turret running an image classification model: detect human-signature pixels, then center target at set distance, then shoot, then loop.',
      'USC\'s protected network forced hands-on mastery of SSH, nmap, network configuration, Linux, git, and bash, learned by necessity, not curriculum.',
      'Entire software stack self-taught in Python: library specialization, embedded hardware control, and systems-level debugging from scratch.',
    ],
  },
  'vulnerability-remediation': {
    title: 'Vulnerability Remediation',
    image: 'assets/images/projects/vuln.png',
    meta: 'SUMMER 2024  ·  CENTENE CORPORATION  ·  SITE RELIABILITY ENGINEERING',
    description: 'My first real internship project, and it did not start small. As a Site Reliability Engineer intern at Centene Corporation in the summer of 2024, I was tasked with solving a problem that was quietly consuming engineering hours across the organization: vulnerabilities identified by the vulnerability governance team\'s ServiceNow scans were piling up with no efficient path to resolution. Teams were manually triaging scan results, duplicating effort, and losing track of what was already being worked on. I built a system to fix that. The pipeline ingests raw vulnerability data from ServiceNow and runs it through a decision-making network that queries the Jira API to determine whether an existing ticket already covers that vulnerability. If one does, the new vulnerability is automatically appended to it. If nothing exists, the system creates a new Jira ticket from scratch, with a description written by Google\'s T5 NLP model. Every ticket was generated with context-aware, human-readable language, not raw scanner output. The system also pulled supplementary data from Dynatrace and Splunk to enrich the context before ticket generation. This project forced me to learn things I had never touched before: full CRUD operations against real enterprise APIs, HTTP tooling with Postman, remote development with MobaXterm, GitLab version control, CI/CD pipelines, deployment environments, and standard engineering team processes, all for the first time. The result mattered. Me and the lead project engineer, Cody Schluenz, were asked to present the work at an intersection call in front of 200 company leaders. The system was subsequently adopted by several additional server-owning teams across the organization. It was the project that taught me what real-world engineering actually looks like: complex systems, unfamiliar APIs, cross-team coordination, and a presentation in front of people who hold the decisions.',
    details: [
      'Ingested ServiceNow vulnerability scan results and routed them through a decision network to check for existing Jira tickets before creating new ones, eliminating duplicate work across teams.',
      'Integrated the Jira API for full CRUD operations: querying existing tickets, appending new vulnerabilities to open work, and programmatically creating net-new tickets with structured descriptions.',
      'Used Google T5 NLP to generate context-aware, human-readable ticket descriptions and edits, replacing raw scanner output with language engineers could immediately act on.',
      'Pulled enrichment data from Dynatrace and Splunk to add system context before ticket generation, improving the accuracy and relevance of each remediation record.',
      'Consumed the ServiceNow API to extract structured vulnerability data from governance team scans, connecting the security reporting pipeline directly to engineering workflows.',
      'First exposure to standard industry engineering practices: Postman for API testing, MobaXterm for remote development, GitLab for version control, CI/CD pipelines, and deployment environments.',
      'Co-presented the system with lead engineer Cody Schluenz at a company-wide intersection call in front of 200 leaders, resulting in adoption across multiple additional server-owning teams.',
    ],
  },
  'oasis-shield': {
    title: 'Oasis Shield',
    image: 'assets/images/projects/oasisSheild.png',
    meta: 'APR 2025 - AUG 2025  ·  CENTENE CORPORATION  ·  INTERN TEAM LEAD',
    description: 'Every project before this one was about building something new. Oasis Shield was the first time I got to fix something old, and at a scale that made the challenge completely different. Centene Corporation serves 26 million members, and for years the infrastructure managing its mail operations, including fax processing, document scanning, and prior authorizations, ran on expensive, company-maintained on-premise servers. With cloud computing reaching the cost-effectiveness tipping point for enterprises, Centene had been pushing hard to move workloads to AWS, and this was my corner of that migration. As a second-year intern with a track record, I stepped into the lead role on a team of four other interns, and together we rebuilt the Oasis mail platform from the ground up in AWS. The work split into two major pillars. The first was authentication and authorization: we built an OAuth 2.0 / JWT-based identity service integrating Ping Federate, Axway, and Radiant Logic for Active Directory federation, unifying identity across all Oasis microservices for the first time. The second was the document infrastructure itself: a production-grade S3 Document API built on AWS S3 multipart uploads, Lambda, API Gateway, DynamoDB, EC2, and Load Balancing, designed to handle secure PHI file ingestion at enterprise scale. Both systems had to be production-ready, secure, and capable of surviving the volume and compliance demands of a healthcare company this size. On top of the technical depth, I was running the team: daily scrums, weekly sprint planning, roadmap definition, deliverable ownership, and serving as the direct point of contact for upper management and four other internal Centene teams we depended on for coordination. This was the project that showed me I could handle ambiguity, guide a team through hard technical problems, and deliver under real organizational pressure, all at once.',
    details: [
      'Built an OAuth 2.0 / JWT authentication and authorization service integrating Ping Federate, Axway, and Radiant Logic for Active Directory federation, unifying identity across all Oasis mail operations microservices.',
      'Designed and delivered a production S3 Document API using AWS S3 multipart uploads, Lambda, API Gateway, DynamoDB, EC2, and Load Balancing for secure, scalable PHI file handling.',
      'Migrated Centene\'s on-premise Oasis mail infrastructure to AWS, modernizing fax processing, document scanning, and prior authorization workflows serving 26 million members.',
      'Led a team of 4 interns, running daily scrums, weekly sprint planning, and owning all deliverables and roadmap definition.',
      'Served as the intern team\'s point of contact for upper management and coordinated cross-functionally with 4 other internal Centene teams throughout the project lifecycle.',
      'Deep technical work in Java Spring Boot, Spring Security, SQL, Axway, Ping Federate, Radiant Logic, AWS S3, DynamoDB, Lambda, API Gateway, EC2, and Load Balancing.',
    ],
  },
  'centag': {
    title: 'CenTag',
    image: 'assets/images/projects/centag2.png',
    video: 'https://www.youtube.com/embed/w-2ZRhZeyfw',
    meta: 'APR 2025 - AUG 2025  ·  CENTENE CORPORATION',
    description: 'This one started with 300 keychains. In the summer of 2024, Centene flew out all of its interns for a first-of-its-kind company event, an Intern Summit, where 200 interns from top universities across the country came to St. Louis for three days. I wanted to stand out, so I 3D printed 300 custom keychains to hand out. It was a hit with interns and executives alike. When I was invited back for 2025, I went to the University Relations team and asked if I could do keychains again, but maybe do a little more. That conversation uncovered a real problem. Every year, Centene flies in 200 interns and has no reliable way to verify attendance. Not for merch handouts, not for off-site bus departures, not for anything. The current solution was a manual Excel sheet. They knew they had to solve it. After looking at event management vendors, the cheapest quote came back at $5,000 per day for identifiers and scanning stations. I thought there had to be a better way, so I built it. CenTag is a smart event management system built around a 3D printed keychain. Each keychain has a QR code that maps to a unique token tied to an individual in a database. Event staff use a companion checkpoint app, hosted entirely on AWS serverless infrastructure, to log in and scan keychains in real time, replacing the Excel sheet with instant, accurate verification. Before I ever pitched it to HR or my own leadership, I built the full application myself, tested it end-to-end at a local elementary school where attendance actually matters, and recorded the whole thing. I walked into the pitch not with a concept, but with a working product, live footage, and a cost comparison showing it was cheaper than anything on the market. That homework made it easy for them to say yes. Centene Corporation provided corporate funding for CenTag to be used at the 2025 Intern Summit. The event went off without a problem, and by the end, five additional teams had reached out about using it for their own group summits. What made it even more interesting was the timing: this was built in parallel to leading a team of four interns on a separate project. The only reason I got internal approval for CenTag was that I proposed building it on the exact same AWS infrastructure my other team was using, making the work directly transferable. That argument worked. This project lit something in me. It was the first time I had an idea, turned it into a real product, and put it in front of decision-makers with the confidence to make the ask. I learned what it means to make it easier to say yes than no.',
    details: [
      'Identified a real operational gap: Centene had no reliable way to verify intern attendance at events, relying on manual Excel sheets for 200 interns flown in from universities nationwide.',
      '3D printed custom QR keychains: each encoding a unique token tied to an individual in a database, replacing expensive vendor hardware with a $0 physical identifier.',
      'Built a full-stack checkpoint application on AWS serverless infrastructure: event staff log in and scan keychains in real time, replacing manual tracking with instant, accurate verification.',
      'Before pitching to HR, built the complete application, tested it at a local elementary school, and recorded the results, walking into the pitch with a working product, not a concept.',
      'Secured corporate funding from Centene Corporation for use at the 2025 Intern Summit; the deployment was successful and 5 additional teams expressed interest for their own events.',
      'Built on the same AWS infrastructure as the concurrent Oasis Shield project, and used this alignment to win internal approval while making himself a more capable resource across both efforts.',
      'First experience pitching a product to corporate decision-makers: learned firsthand what it means to make it easier to say yes than no.',
    ],
  },
  'cenmap': {
    title: 'CenMap',
    image: 'assets/images/projects/cenmap.jpg',
    meta: 'JAN 2026 - JUN 2026  ·  CENTENE CORPORATION  ·  SYSTEMS ENGINEER',
    description: 'Centene\'s whole business model is acquire, acquire, acquire. The result of that is an organization that is inherently complex, with dozens of health plans each running differently, varying state to state and constantly changing. My team\'s job was to keep inventory on all of Centene\'s IT resources across that entire landscape. The problem we kept running into was this: when a new service owner or VP comes in, they have no way to understand what they actually own. Every time we needed to explain it to someone, we had to manually query multiple databases, stitch together relationships that weren\'t stored as direct properties but instead buried in separate relationship tables that had to be matched one by one to individual nodes across every table. Once we had all that, we\'d draw it out in a Miro board. A slow, tedious, and completely unscalable process. I built CenMap to replace it. The application queries ServiceNow, pulls from across tens of millions of records, transforms that data into a usable structure, and loads it into Neo4j. From there, a graph theory algorithm I developed maps the full organizational hierarchy: business applications connected to their servers, servers connected to their support teams, support teams connected to parent management, and so on, rendering the entire thing as an interactive, navigable visualization. The math itself is not new. I want to be clear about that. What is novel is the framework: the work of precisely defining how Centene\'s resources relate to each other, discretely, so that a general-purpose algorithm can actually make sense of it. That definitional work, the schema, the hierarchy model, the relationship mapping, is what makes the whole thing run, and it is specific enough to Centene\'s structure that it required real organizational understanding to get right. The best analogy I have for what CenMap does is Google Maps for your organization. If something goes down, you can see immediately what it connects to, what depends on it, and where resources can be rerouted based on importance. This is now used by 480+ product owners and executive leadership across the company. Of all the projects I\'ve done at Centene, this one pushed me the hardest technically, had the widest organizational reach, and is the one I\'m most proud of.',
    details: [
      'Built an ETL pipeline that queries ServiceNow across tens of millions of records, transforms raw resource data, and loads it into Neo4j for graph-based processing.',
      'Developed a graph theory algorithm to map Centene\'s four-tier organizational hierarchy: business applications to servers to support teams to parent management, including all downstream resource and employee relationships.',
      'Solved the core data problem: resources in Centene\'s systems have no direct relationship properties; relationships live in separate junction tables that must be matched node-by-node across multiple databases.',
      'Replaced the previous process of manual database queries and hand-drawn Miro boards with a single application that renders the full resource graph as an interactive visualization.',
      'The novel contribution is not new math, it\'s the precise definition of how Centene\'s resources connect to each other, which provides the structural groundwork the algorithm needs to operate correctly.',
      'Functions like Google Maps for the organization: if a resource goes down, the graph immediately surfaces what depends on it and where equivalent resources can be rerouted based on hierarchy and importance.',
      'Adopted by 480+ product owners and executive leadership across Centene\'s IT, HR, Finance, and Operations domains.',
    ],
  },
  'wardy-foundation': {
    title: 'Wardy Foundation',
    image: 'assets/images/projects/thewardyfoundation.jpg',
    meta: '2025 - PRESENT  ·  501(c)(3) NONPROFIT',
    description: 'My mom was a teacher. Then a principal. Now she is in library school, at an opposing school, for the record, so: Go Gamecocks, Boo Tigers. My weekends growing up were spent at her school. Volunteering was just what we did. That was the environment I was raised in. What I did not have growing up was anyone who showed me what engineering actually was. Not the version of engineering that is math worksheets and abstract formulas. The real version. The one where you look at a problem, any problem, and you have the tools to build a solution for it. Where you are learning the language of the universe and the limit of what you can create is only what you can imagine. I genuinely believe that if I had understood engineering that way in middle school, I would have had a head start I cannot put a number on. And I think about the people who eventually did show me that, the ones whose belief in this stuff is why I care about it so much, and it became really clear to me that passing that down was something I needed to do. My mom, now working in a school library with a maker space, gave me the first real opening. I knew the community around that school had parents who wanted to invest in their kids\' futures, who wanted their kids excited about STEM. So I started there, focused on getting equipment donated to the maker space, running programming, and working directly with Elon Park Elementary School on a regular basis. I registered the Wardy Foundation as a 501(c)(3). The goal between now and when I graduate in 2027 is to see how far we can build this out across North and South Carolina. But I want to be honest about what drives it: this is not about building something huge. It is about making the most impact we can with what we have, for kids who are exactly where I was.',
    details: [
      'Founded and registered as a 501(c)(3) nonprofit dedicated to expanding STEM education access across North and South Carolina.',
      'Rooted in a personal belief: engineering is not the subject you take if you\'re good at math, it\'s the language of the universe and the ability to build anything you can imagine. That framing matters, especially for kids who have never been shown it.',
      'Primary focus is Elon Park Elementary School, where ongoing programming and equipment donation efforts are centered around the school\'s maker space.',
      'Identified a real community of parents invested in their kids\' STEM futures and built the foundation\'s early outreach around converting that energy into equipment, resources, and programming.',
      'Operating and expanding through 2027 alongside undergraduate studies at the University of South Carolina, with the goal of deepening impact rather than chasing scale.',
      'Driven by the people who passed this passion down, and by the belief that the next generation deserves the same chance to find it.',
    ],
  },
  'electronics-education': {
    title: 'Electronics Education',
    image: 'assets/images/projects/electron.jpeg',
    video: 'https://www.youtube.com/embed/qjC6O1Eb0kw',
    meta: '2025  ·  USC CENTER FOR INDUSTRY SOLUTIONS  ·  MOLINAROLI COLLEGE OF ENGINEERING AND COMPUTING',
    description: 'Something I noticed pretty quickly as a computer engineer at the Molinaroli College of Engineering and Computing was that electronics knowledge, real hands-on electronics, stops at the border of the EE department. And that is a problem, because sensors, motors, wiring, basic circuitry: those things show up everywhere. Mechanical engineers need them. Civil engineers need them. Chemical engineers need them. Any major that touches physical systems in any way is better for having them. The gap was obvious. I decided to do something about it. Through my work with the UofSC Center for Industry Solutions, I organized an electronics education workshop, open to anyone, no prerequisites, no experience required. We filled every spot. Thirty-five students signed up, and when I looked at the list, every single one of them was a mechanical, civil, or chemical engineering major. Not a single EE. That told me everything I needed to know about where the gap actually was. The workshop itself was straightforward in concept: every student would learn to solder, build a working device from scratch, and walk out with something they made themselves. Getting there was not simple. Registration hit capacity within 24 hours, which meant I had 24 hours to source enough equipment for 35 people. I went to the department chairs, computer engineering, electrical engineering, mechanical engineering, and nuclear engineering, and made the case for cross-department support. Within a day, we had pulled together 35 Weller 1010 soldering stations, ventilation fans, soldering mats, iron holders, solder wire, flux, and the boards themselves. Over $7,000 in equipment, sourced across four departments in under 24 hours. The event went well. But the part that stuck with me was what came after. I got emails from students saying the workshop had opened up an entire career direction they did not know existed for them. People who came in not knowing what a soldering iron was left with a working device in their hands and a new way to think about what they could build. That is the part that made the logistical chaos worth it.',
    details: [
      'Identified a systemic gap in electronics education at the Molinaroli College of Engineering and Computing: hands-on electronics knowledge was largely inaccessible to non-EE majors despite being directly relevant to mechanical, civil, chemical, and other engineering disciplines.',
      'Organized and ran the first electronics workshop of its kind at UofSC through the Center for Industry Solutions, open to all majors, no prerequisites required.',
      'Every one of the 35 attendees was a mechanical, civil, or chemical engineering major, validating exactly where the educational gap existed.',
      'Sourced $7,000+ in equipment within 24 hours of registration closing: 35 Weller 1010 soldering stations, ventilation fans, soldering mats, iron holders, solder wire, flux, and project boards, coordinated across the computer, electrical, mechanical, and nuclear engineering department chairs.',
      'Every participant entered with zero soldering experience and left with a working, self-built device they took home.',
      'Received follow-up emails from students saying the workshop had opened up career directions they did not know existed, the kind of outcome that makes the logistics worth it.',
    ],
  },
  'window-project': {
    title: 'Window Project',
    image: 'assets/images/projects/window.jpg',
    meta: 'IN DEVELOPMENT  ·  USC CENTER FOR INDUSTRY SOLUTIONS',
    description: 'My desk sits right up against the window. The robot arms are visible from outside, and because of that, people just tend to look in. It\'s one of those spots where foot traffic naturally turns into attention. I noticed it enough times that it started to feel like a data problem, one that had a pretty clean answer. If you can measure how many people walk by a location and what percentage of them actually stop and look, you have a real, quantifiable impression metric. The kind of number that means something to an advertiser. Not estimated reach, not projected engagement, but actual observed attention, per hour, at a specific physical location. That\'s what the Window Project is. A computer vision system pointed at the window that distinguishes passersby from people who actively engage with what\'s inside, and turns that distinction into marketing data. If 20 people walk by in 10 minutes and 15 of them look, that is a number with value. This is still in development, but the core idea is simple: find the places where data already exists and nobody is measuring it yet.',
    details: [
      'Currently in development: a computer vision system mounted at a lab window to passively measure foot traffic and active engagement from the outside.',
      'Distinguishes between passersby and individuals who actively stop and look in, using pose and dwell-time classification.',
      'Converts that distinction into a quantifiable impression-per-hour metric, actual observed attention at a specific physical location, not estimated reach.',
      'Designed to give the lab a concrete, data-backed case for advertising value to potential sponsors and partners.',
      'The broader idea: find the places where data already exists and nobody is collecting it yet.',
    ],
  },
  'first-pitch': {
    title: 'Project First Pitch',
    image: 'assets/images/projects/ProjectFirstPitch.png',
    video: 'https://www.youtube.com/embed/X-lk02Rgg8s',
    meta: 'SPRING 2026  ·  USC CENTER FOR INDUSTRY SOLUTIONS',
    description: 'The year before, we threw the first pitch using Boston Dynamics Spot\'s arm. It worked. This year, we decided to build a cannon. Project First Pitch was my biggest project with the UofSC Center for Industry Solutions and the one with the least margin for error of anything I have ever built. The venue was a live Columbia Fireflies baseball game. The audience was real. There was no second attempt. The system had to work. I owned the entire thing end to end: mechanical engineering of the cannon itself, electrical engineering of the control systems, controller design, and all the embedded firmware that tied it together. The cannon was pneumatically powered and electronically controlled. Two ESP32 microcontrollers handled the system: one managing the actuation of the cannon, the other running the launch mechanism, communicating with each other over a custom wireless link driven by a purpose-built physical controller I designed. The Boston Dynamics Spot robot carried the cannon, and coordinating Spot\'s motion with the launch sequence required precise timing between the robot API and the embedded control layer. Before any of this could be approved for a live game, I had to do the physics. I worked out the ballistics: pressure, barrel length, launch angle, and projectile velocity, and put together the documentation to prove to the Columbia Fireflies and to UofSC\'s athletics and event management teams that this system was safe and predictable. That required real cross-team coordination under real institutional pressure, with people who needed to be convinced, not just told. The whole system was written in C++. The pitch landed. One of the coolest things I have ever built.',
    details: [
      'Designed and built a pneumatically powered, electronically controlled baseball cannon mounted on Boston Dynamics Spot, an upgrade from the prior year\'s arm-throw approach.',
      'Owned the full system: mechanical cannon design, electrical control systems, embedded firmware, physical controller hardware, and Boston Dynamics Spot API integration.',
      'Two ESP32 microcontrollers communicating over a custom wireless link: one managing cannon actuation, the other controlling the launch mechanism, coordinated through a purpose-built physical controller.',
      'Worked out the full ballistics: pressure, barrel length, launch angle, and projectile velocity, then compiled that documentation to satisfy safety review with the Columbia Fireflies and UofSC athletics and event management.',
      'Synchronized Spot\'s motion sequence with the cannon firing cycle via the Boston Dynamics API, requiring precise timing across the robot and embedded control layers.',
      'Delivered live at a Columbia Fireflies baseball game in front of a real audience: one attempt, no fallback, no second chance.',
      'Entire embedded system written in C++.',
    ],
  },
  'caelus': {
    title: 'CAELUS',
    image: 'assets/images/projects/caelus.png',
    meta: 'JAN 2026 - MAY 2026  ·  USC CENTER FOR INDUSTRY SOLUTIONS',
    description: 'It started with a door lock. We were pitching ideas for the Center for Industry Solutions Fellowship, a program where you develop a concept over a semester and present it to industry, and a door lock was on the table. We decided it was boring. I suggested a drone, a fully autonomous one, which even I knew was ambitious. Someone in the room said: has anyone here actually ever built a drone? There\'s no way you can do that. We went ahead and built the drone. CAELUS grew from a four-person team in January 2026 to a fifteen-person team by the end of the semester, with dedicated subteams for mechanical design, software, and electronics. We went through three full iterations. What we finished with is a fully autonomous drone that operates GPS-denied from mission start to finish with zero human interaction required. The brain is an NVIDIA Jetson Orin Nano. The flight controller is a SpeedyBee F405 Mini. Navigation and world mapping is handled by a two-degree-of-freedom, 360-degree LiDAR, and a significant part of our work went into data compression and point cloud machine learning to separate what matters from what doesn\'t in real time. The ground station handles autonomous charging, which closes the loop: the drone launches, executes, returns, charges, and is ready again without a human touching it. By May 2026 we had a working system. Over the summer I handed the project off to the Center to continue development while I went to Bank of America, but CAELUS is still going. This one, alongside Project First Pitch, is one of the two projects I point to when I want to show what I am capable of when the scope is wide open and the stakes are real.',
    details: [
      'Grew from a 4-person team to 15 over a single semester with dedicated subteams for mechanical design, software, and electronics, going through three full hardware iterations.',
      'Fully autonomous GPS-denied flight from mission start to finish: zero human interaction required at any stage of operation.',
      'NVIDIA Jetson Orin Nano as the onboard compute brain; SpeedyBee F405 Mini as the flight controller.',
      'Two-degree-of-freedom, 360-degree LiDAR for real-time world mapping, paired with data compression and point cloud machine learning to classify and prioritize targets in the environment.',
      'Ground station manages autonomous drone charging, completing the full closed-loop mission cycle without human intervention.',
      'Born from a direct challenge: "there\'s no way you can do that," and delivered in one semester as part of the UofSC Center for Industry Solutions Fellowship.',
      'Handed off to the Center for continued development in summer 2026; the project is ongoing.',
    ],
  },
  'rec-dan': {
    title: 'Dan Kalaf',
    image: 'assets/images/reqDan.png',
    meta: 'JUN 2026  ·  PROBLEM SOLVER, SERVANT LEADER  ·  MENTOR, CENTENE CORPORATION',
    description: 'Attitude and Aptitude. While there\'s a ton that Nate Wardy brings to the table from a technical skillset perspective, it is those two characteristics that I think stand out the most. His attitude goes beyond just a "can do" mindset. He is passionate about both delivering excellence in whatever he does, but even more importantly he\'s passionate about having a positive impact on those around him. His drive in everything he does is inspirational and infectious. His aptitude is plainly visible through all of his accomplishments, but they don\'t tell the whole story. Nate is the kind of person who will be energized by a new challenge and dedicate the time needed to learn whatever topic or skill is necessary in order to meet that challenge head-on. I am honored that I had the privilege of mentoring Nate while he was an intern at Centene, and I am excited to watch as his career progresses. I am confident that he will find success and have a lasting impact on those around him wherever his path may lead. Simply put: Nate has the attitude and the aptitude. I recommend him without reservation.',
    details: [],
  },
  'rec-drew': {
    title: 'Drew Rhodes',
    image: 'assets/images/reqDrew.png',
    meta: 'JUN 2025  ·  IT LEADERSHIP  ·  CENTENE CORPORATION',
    description: 'I had the privilege of hiring and managing Nathan at Centene as an intern for my Site Reliability Engineering team. His performance exceeded expectations in every way. Nathan is a sponge. He absorbs everything he touches and turns it into something real. His natural curiosity drives him to go beyond what is asked, and his ability to collaborate and communicate with senior engineers and leadership from day one set him apart from other interns I have worked with. He took on an open-ended problem, built a system that solved it, and presented it in front of 200 company leaders. That is not typical intern work. I would not hesitate to hire Nathan again.',
    details: [],
  },
  'rec-jen': {
    title: 'Jennifer Halverson',
    image: 'assets/images/reqJen.png',
    meta: 'MAY 2026  ·  RESULTS-DRIVEN LEADER  ·  CENTENE CORPORATION',
    description: 'I had the opportunity to work with Nathan during his time supporting my team at Centene Corporation. I brought him two complex, open-ended problem statements: one involving cross-referencing Active Directory with ServiceNow to improve employee termination workflows, and one involving dynamically representing Centene\'s Configuration and Service Data Model as an interactive visual in ServiceNow. Both were high-ambiguity, high-impact asks. Nathan consistently exceeded expectations in both technical execution and problem-solving. Beyond the delivery itself, he demonstrated strong analytical thinking, real initiative, and an ability to quickly understand complex operational and data management concepts that most engineers take much longer to internalize. I would highly recommend Nathan.',
    details: [],
  },
};

// ─── Router ───────────────────────────────────────────────────────────────────

(function () {
  var mainContent  = document.getElementById('main-content');
  var projectPage  = document.getElementById('project-page');
  var storiesPage  = document.getElementById('stories-page');
  var spacexPage   = document.getElementById('spacex-page');

  function hideSpacex() {
    if (!spacexPage) return;
    spacexPage.style.display = 'none';
    spacexPage.setAttribute('aria-hidden', 'true');
  }

  function showMain() {
    mainContent.style.display  = '';
    projectPage.style.display  = 'none';
    projectPage.setAttribute('aria-hidden', 'true');
    storiesPage.style.display  = 'none';
    storiesPage.setAttribute('aria-hidden', 'true');
    hideSpacex();
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

    // Normal project pages follow the global theme (BIM pages force light).
    projectPage.classList.remove('bim-page');

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

    var detailsHTML = '';
    if (data.details && data.details.length) {
      detailsHTML =
        '<div class="pp-highlights">' +
          '<p class="pp-highlights-label">HIGHLIGHTS</p>' +
          '<ul class="pp-details">' +
            data.details.map(function (d) {
              return '<li class="pp-detail">' + d + '</li>';
            }).join('') +
          '</ul>' +
        '</div>';
    }

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
                '<li><a href="#stories">STORIES</a></li>' +
              '</ul>' +
            '</nav>' +
          '</div>' +
        '</div>' +
      '</header>' +
      '<div class="pp-wrap">' +
        '<button class="pp-back" id="pp-back">← BACK</button>' +
        (slug === 'vulnerability-remediation' || slug.indexOf('rec-') === 0
          ? '<h1 class="pp-title">' + data.title + '</h1>' +
            (data.meta ? '<p class="pp-meta">' + data.meta + '</p>' : '') +
            '<div class="pp-body pp-body--stacked">' +
              '<div class="pp-image-col">' +
                '<canvas class="pp-canvas" id="pp-canvas"></canvas>' +
              '</div>' +
            '</div>'
          : '<div class="pp-body">' +
              '<div class="pp-image-col">' +
                '<canvas class="pp-canvas" id="pp-canvas"></canvas>' +
              '</div>' +
              '<div class="pp-title-col">' +
                '<h1 class="pp-title">' + data.title + '</h1>' +
                (data.meta ? '<p class="pp-meta">' + data.meta + '</p>' : '') +
              '</div>' +
            '</div>') +
        '<div class="pp-divider"></div>' +
        '<p class="pp-description">' + data.description + '</p>' +
        detailsHTML +
        videoHTML +
      '</div>';

    mainContent.style.display  = 'none';
    mainContent.setAttribute('aria-hidden', 'true');
    storiesPage.style.display  = 'none';
    storiesPage.setAttribute('aria-hidden', 'true');
    hideSpacex();
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
      { sel: '.pp-title',            delay: 200 },
      { sel: '.pp-meta',             delay: 350 },
      { sel: '.pp-description',      delay: 500 },
      { sel: '.pp-highlights-label', delay: 700 },
      { sel: '.pp-detail',           delay: 750 },
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

  // ── Stories page ──────────────────────────────────────────────────────────

  var MONTH_NUM = {JAN:1,FEB:2,MAR:3,APR:4,MAY:5,JUN:6,JUL:7,AUG:8,SEP:9,OCT:10,NOV:11,DEC:12};
  function labelToNum(label) {
    var p = (label || '').split(' ');
    return (parseInt(p[1]) || 0) * 100 + (MONTH_NUM[p[0]] || 0);
  }

  function showStories() {
    var sorted = STORIES.slice().sort(function (a, b) {
      return labelToNum(b.label) - labelToNum(a.label);
    });

    var feedHTML;
    if (sorted.length === 0) {
      feedHTML = '<p class="sp-empty">MORE COMING SOON.</p>';
    } else {
      feedHTML =
        '<div class="sp-feed">' +
          sorted.map(function (s) {
            var imgHTML = s.embed
              ? '<iframe class="sp-card-img sp-card-embed" src="' + s.embed + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
              : s.video
              ? '<video class="sp-card-img" src="' + s.video + '" autoplay loop muted playsinline></video>'
              : (s.image ? '<img class="sp-card-img" src="' + s.image + '" alt="">' : '');
            var badgeClass  = 'sp-badge--' + s.origin;
            var logoSrc     = s.origin === 'linkedin'  ? 'assets/images/icons/linkedinlogo.png'
                            : s.origin === 'instagram' ? 'assets/images/icons/instalogo.png'
                            : s.origin === 'youtube'   ? 'assets/images/icons/ytlogo.png'
                            : null;
            var badgeLabel  = logoSrc
              ? '<img class="sp-badge-logo" src="' + logoSrc + '" alt="' + s.origin + '">'
              : s.origin.toUpperCase();
            var fromHTML    = (s.origin === 'recommendation' && s.from)
              ? '<div class="sp-card-from"><span class="sp-from-name">' + s.from + '</span><span class="sp-from-title">' + s.fromTitle + '</span></div>'
              : '';
            var parentHTML  = s.parentLink
              ? '<a class="sp-card-link" href="' + s.parentLink + '">' + (s.parentLabel || 'VIEW ↗') + ' ↗</a>'
              : (s.link
                ? '<a class="sp-card-link" href="' + s.link + '" target="_blank" rel="noopener noreferrer">' + (s.linkLabel || 'READ ARTICLE') + ' ↗</a>'
                : '');
            return '<div class="sp-card">' +
              imgHTML +
              '<div class="sp-card-header">' +
                '<span class="sp-badge ' + badgeClass + '">' + badgeLabel + '</span>' +
                '<span class="sp-date">' + s.label + '</span>' +
              '</div>' +
              (s.body ? '<p class="sp-card-body">' + s.body + '</p>' : '') +
              fromHTML +
              parentHTML +
            '</div>';
          }).join('') +
        '</div>';
    }

    var navHTML =
      '<header class="header">' +
        '<div class="container">' +
          '<div class="content-wrapper">' +
            '<nav class="nav">' +
              '<img src="assets/images/favicon/logolight.png" alt="Nathan Wardy" id="sp-logo" class="logo">' +
              '<ul class="nav-links">' +
                '<li><a href="#technical">TECHNICAL</a></li>' +
                '<li><a href="#projects">INITIATIVES</a></li>' +
                '<li><a href="#experience">EXPERIENCE</a></li>' +
                '<li><a href="#education">EDUCATION</a></li>' +
                '<li><a href="#stories">STORIES</a></li>' +
              '</ul>' +
            '</nav>' +
          '</div>' +
        '</div>' +
      '</header>';

    storiesPage.innerHTML =
      navHTML +
      '<div class="sp-wrap">' +
        '<button class="sp-back" id="sp-back">← BACK</button>' +
        '<h1 class="sp-title">STORIES</h1>' +
        '<div class="sp-divider"></div>' +
        feedHTML +
      '</div>';

    mainContent.style.display  = 'none';
    mainContent.setAttribute('aria-hidden', 'true');
    projectPage.style.display  = 'none';
    projectPage.setAttribute('aria-hidden', 'true');
    hideSpacex();
    storiesPage.style.display  = '';
    storiesPage.removeAttribute('aria-hidden');
    document.title = 'Stories - Nathan Wardy';
    storiesPage.scrollTop = 0;

    document.getElementById('sp-back').addEventListener('click', function () {
      window.location.hash = '';
    });

    var spLogo = document.getElementById('sp-logo');
    spLogo.addEventListener('click', function () {
      window.location.hash = '';
    });

    // Sync logo to current dark mode state
    var LIGHT = 'assets/images/favicon/logolight.png';
    var DARK  = 'assets/images/favicon/logodark.png';
    spLogo.src = document.body.classList.contains('dark') ? DARK : LIGHT;
  }

  // ── Project BIM (hidden initiative + sub-pages) ───────────────────────────
  //
  // Routes:
  //   #project/bim              overview (pitch + 01..05 + links to sub-pages)
  //   #project/bim/key-data     Harrisburg Elementary area key data
  //   #project/bim/funding      LCSD public project funding and approval process
  //   #project/bim/permitting   permitting, approvals and public land process
  //
  // The BIM pages force light mode (see .bim-page in project-page.css) and
  // contain no dash characters in visible copy, by request.

  var BIM_NAV = [
    { slug: 'key-data',   title: 'KEY DATA',              desc: 'Harrisburg Road traffic count, Harrisburg Elementary enrollment, and the school to park distance.' },
    { slug: 'funding',    title: 'DUE PROCESS', desc: 'How a privately funded improvement moves through district approval, procurement, and ownership.' },
    { slug: 'permitting', title: 'PERMITTING &amp; APPROVALS', desc: 'Public land process, agency approval map, environmental review, and full project sequence.' },
  ];

  // Each item below gets its own sub page at #project/bim/<group>/<slug>.
  var BIM_PARTIES = [
    { slug: 'lcsd',         name: 'Lancaster County School District', body: 'Owns the bridge side property, existing approach, and nearby utility infrastructure.', images: [ { src: 'gis1.png', small: true } ] },
    { slug: 'parks',        name: 'Lancaster County Parks &amp; Recreation', body: 'Manages the run up after the trail connecting the connector to the park, along with potential relocation of the existing waste disposal infrastructure.', images: [ { src: 'gis2.png', small: true } ] },
    { slug: 'nathan-wardy', name: 'Nathan Wardy', body: 'Coordinates the proposal, partnerships, fundraising, and documentation.' },
    { slug: 'sponsors',     name: 'Project sponsors', body: 'The project must operate through an approved public entity, nonprofit, fiscal sponsor, or other insured organization. It cannot depend on one individual for liability, contracting, or long term continuity.', detail: [
      { t: 'h', text: 'SPONSOR CANDIDATES' },
      { t: 'raw', html: '<div class="bim-sponsors">' +
        '<div class="bim-sponsor-slot"><img class="bim-sponsor-logo" src="assets/images/sponsor1.png" alt="Sponsor candidate"></div>' +
        '<div class="bim-sponsor-slot"><img class="bim-sponsor-logo" src="assets/images/sponsor2.png" alt="Sponsor candidate"></div>' +
        '<div class="bim-sponsor-slot"><img class="bim-sponsor-logo" src="assets/images/sponsor3.png" alt="Sponsor candidate"></div>' +
        '<div class="bim-sponsor-slot"><img class="bim-sponsor-logo" src="assets/images/sponsor4.png" alt="Sponsor candidate"></div>' +
      '</div>' },
    ] },
    { slug: 'partners',     name: 'Technical partners', body: 'May provide funding, materials, equipment, professional services, reduced cost labor, or volunteer support.' },
  ];

  var BIM_SCOPE = [
    { slug: 'bridge',              name: 'Bridge', body: 'A professionally engineered, reviewed, and constructed pedestrian bridge across the stream. Scope covers surveying, engineering, permitting, foundations, construction, inspection, ownership, and maintenance.', detail: [
      { t: 'h', text: 'FUNDING CERTAINTY' },
      { t: 'note', text: '<strong>100%.</strong>' },
      { t: 'note', text: 'Bridge material and design options are not listed here yet. They follow once professional review determines what is feasible.' },
    ] },
    { slug: 'trail',               name: 'Trail', body: 'Alignment, width, surface, drainage, erosion control, grading, accessibility, and the final park connection.', images: [ { src: 'trail1.png' }, { src: 'trail2.png', caption: 'Sample final project render' } ], detail: [
      { t: 'h', text: 'SURFACE OPTIONS' },
      { t: 'kv', items: [
        { k: 'Compacted gravel', v: 'Moderate durability; good accessibility when well compacted; strong drainage; periodic regrading to maintain; natural, informal appearance.' },
        { k: 'Asphalt', v: 'High durability; smooth accessibility; sheds water and needs edge drainage; occasional sealing and crack repair; uniform path appearance.' },
        { k: 'Concrete', v: 'Highest durability; excellent accessibility; needs runoff drainage design; very low maintenance; clean, formal appearance.' },
        { k: 'Natural surface', v: 'Lower durability; variable accessibility; drains in place but can erode; frequent upkeep after weather; most natural appearance.' },
      ]},
      { t: 'note', text: 'No final surface is selected; the choice follows engineering and accessibility review.' },
    ] },
    { slug: 'grade-transition',    name: 'Grade transition', body: 'A safe transition up the existing grade into the park.', images: [ { src: 'hill.png' } ], detail: [
      { t: 'h', text: 'OPTIONS' },
      { t: 'ul', items: ['Wood steps', 'Concrete steps', 'Retaining wall with steps', 'Graded switchback', 'Accessible ramp', 'Combined solution'] },
      { t: 'note', text: 'The final option depends on slope, accessibility, drainage, available space, and engineering review.' },
    ] },
    { slug: 'site-preparation',    name: 'Site preparation', body: 'Preparing the corridor for construction access while protecting the stream.', images: [ { src: 'site1.png' } ], detail: [
      { t: 'h', text: 'SCOPE' },
      { t: 'ul', items: ['Vegetation clearing', 'Debris removal', 'Minor grading', 'Equipment access', 'Streambank protection'] },
    ] },
    { slug: 'dumpster-enclosure',  name: 'Dumpster enclosure', body: 'Determine how the existing waste disposal enclosure is handled for the connection.', images: [ { src: 'dumpster.png' } ], detail: [
      { t: 'h', text: 'OPTIONS' },
      { t: 'ul', items: ['Keep the existing enclosure in place', 'Relocate the enclosure', 'Rebuild the enclosure', 'Reuse existing posts or materials where appropriate'] },
    ] },
    { slug: 'lighting-power',      name: 'Lighting &amp; power', body: 'Lighting and power for the connection, with the property line transition and long term responsibility defined.', images: [ { src: 'lights.png' } ], detail: [
      { t: 'h', text: 'OPTIONS' },
      { t: 'ul', items: ['Standard pole mounted lighting', 'Bollard lighting', 'Solar lighting', 'Connection to school power', 'Connection to park infrastructure', 'Hybrid lighting approach'] },
    ] },
    { slug: 'security-access',     name: 'Security &amp; access control', body: 'Passive security measures for the connection.', detail: [
      { t: 'h', text: 'MEASURES' },
      { t: 'ul', items: ['Vehicle barriers', 'Clear sightlines', 'Cameras where approved'] },
    ] },
    { slug: 'construction-safety', name: 'Construction safety', body: 'Basic construction safety provisions during the work.', images: [ { src: 'safezone.png' } ], detail: [
      { t: 'h', text: 'MEASURES' },
      { t: 'ul', items: ['Warning signs', 'Rented temporary fencing'] },
    ] },
    { slug: 'funding-labor',       name: 'Funding &amp; labor', body: 'How the work gets funded and staffed.', detail: [
      { t: 'h', text: 'SOURCES' },
      { t: 'ul', items: ['Private funding', 'Donated materials', 'Equipment support', 'Volunteer work where appropriate', 'Reduced cost professional services', 'Licensed contractors where required'] },
    ] },
    { slug: 'liability-governance',name: 'Liability &amp; governance', body: 'Before site work begins, confirm the sponsoring entity, landowner permissions, insurance, volunteer coverage, contractor requirements, waivers, supervision, maintenance duties, and ownership of every completed asset.' },
  ];

  var BIM_PHASES = [
    { slug: 'phase-1', name: 'Phase 1 &middot; Project structure', body: 'Confirm property boundaries, landowner representatives, sponsoring entity, liability structure, insurance requirements, and decision authority.', detail: [
      { t: 'h', text: 'ESTABLISH OWNERSHIP &amp; DELIVERY' },
      { t: 'p', text: 'Before engineering, LCSD and Lancaster County should decide:' },
      { t: 'ul', items: ['Formal project owner', 'Permit applicant', 'Holder of donated funds', 'Designer contracting party', 'Construction contracting party', 'Construction insurance responsibility', 'Who accepts the completed bridge', 'Post construction owner', 'Future inspection responsibility', 'Maintenance and replacement responsibility', 'Property rights across the LCSD and County line', 'Authority to close the connector'] },
      { t: 'note', text: 'Expect an MOU, easement, license, intergovernmental agreement, or similar instrument. LCSD and County counsel should determine the exact form.' },
      { t: 'h', text: 'OPEN THE REGULATORY FILE' },
      { t: 'ul', items: ['Ask LCSD Facilities to create the OSF Portal project or obtain an early OSF scope determination.', 'Have Lancaster County Parks &amp; Recreation coordinate a joint preapplication discussion with Development Services and Stormwater.'] },
    ] },
    { slug: 'phase-2', name: 'Phase 2 &middot; Feasibility', body: 'Site measurements, preliminary engineering review, environmental and permitting guidance, utility review, access analysis, and concept options for the bridge, trail, grade, lighting, security, and dumpster enclosure.', detail: [
      { t: 'h', text: 'COLLECT EXISTING INFORMATION' },
      { t: 'ul', items: ['Boundary survey', 'Deeds', 'Easements', 'Existing topographic survey', 'Utility and as built plans', 'Harrisburg school civil plans', 'Indian Land Soccer Complex civil plans', 'NPDES SCR10Z7LA file', 'County permit 202302445 file', 'Previous drainage study', 'Previous wetlands studies', 'FEMA and flood studies', 'Previous environmental correspondence', 'Prior geotechnical information'] },
      { t: 'h', text: 'ENVIRONMENTAL FEASIBILITY' },
      { t: 'ul', items: ['Perform wetland and stream delineation', 'Check floodplain and floodway', 'Obtain Carolina Heelsplitter Overlay determination', 'Generate USFWS IPaC review', 'Request SCDNR review', 'Check utilities and easements', 'Check road right of way ownership'] },
      { t: 'note', text: 'Use these results to locate the bridge where regulated impacts are minimized.' },
    ] },
    { slug: 'phase-3', name: 'Phase 3 &middot; Cost &amp; funding', body: 'Build a component level budget; separate donated, volunteer, discounted, and contracted work; secure preliminary partner commitments; prepare the sponsorship package.', detail: [
      { t: 'h', text: 'PROCUREMENT &amp; DELIVERY MODEL' },
      { t: 'p', text: 'Proceed only after LCSD and Lancaster County determine how the project will legally be delivered. The two primary models:' },
      { t: 'ul', items: ['Donated cash, with LCSD and Lancaster County procuring the designer and construction.', 'A privately designed or built improvement that the public owners formally authorize and later accept.'] },
      { t: 'note', text: 'The delivery model can change procurement, contracting, insurance, bonding, and donation acceptance requirements even when the physical permits are the same.' },
    ] },
    { slug: 'phase-4', name: 'Phase 4 &middot; Design &amp; approvals', body: 'Engineering, permits, agreements, maintenance assignments, contractor scopes, construction safety plans, and final funding commitments.', detail: [
      { t: 'h', text: 'PRELIMINARY ENGINEERING' },
      { t: 'p', text: 'A South Carolina PE should develop:' },
      { t: 'ul', items: ['Survey and base plan', 'Alignment', 'Bridge type', 'Foundations and abutments', 'Structural loads', 'Grading', 'Accessible route', 'Drainage', 'Erosion control', 'Preliminary hydraulics', 'Utilities', 'Construction access'] },
      { t: 'h', text: 'PERMIT DETERMINATIONS' },
      { t: 'p', text: 'For every agency or category, obtain one documented outcome: permit or approval required, or no permit and not applicable.' },
      { t: 'h', text: 'FINAL CONSTRUCTION DOCUMENTS' },
      { t: 'ul', items: ['Complete signed and sealed drawings and specifications', 'Update OSF Form F8', 'Submit County plans, SCDES and Corps materials, and OSF construction documents'] },
      { t: 'h', text: 'PRECONSTRUCTION' },
      { t: 'p', text: 'Do not disturb the site until:' },
      { t: 'ul', items: ['Owner agreements are executed', 'OSF approval is complete', 'County approvals are complete', 'Stormwater authorization or exemption is complete', 'Corps and &sect;401 authorization is complete if applicable', 'Floodplain approval is complete if applicable', 'Species conditions are satisfied', 'Contractor licensing is verified', 'Insurance and bonds are complete', 'SC811 locate requirements are complete', 'Erosion controls are installed', 'Inspection responsibilities are assigned'] },
    ] },
    { slug: 'phase-5', name: 'Phase 5 &middot; Construction &amp; closeout', body: 'Clearing, utility preparation, bridge work, trail construction, grade connection, enclosure work, lighting, security, barriers, signage, landscaping, and inspections; then accept the completed work, document ownership, set inspection and maintenance schedules, recognize partners, and open the connection to the public.', detail: [
      { t: 'h', text: 'CONSTRUCTION &amp; CLOSEOUT' },
      { t: 'p', text: 'Maintain required inspections and environmental controls during construction. Before opening the connector for normal public use, collect:' },
      { t: 'ul', items: ['Final inspection', 'As builts', 'Structural inspection records', 'Engineer certification', 'Warranties', 'NPDES Notice of Termination if applicable', 'Corps completion documentation if applicable', 'OSF closeout', 'County acceptance', 'Maintenance and operations documentation', 'Formal transfer or acceptance of donated improvements'] },
    ] },
  ];

  var BIM_GROUPS = {
    parties: { label: 'PARTIES', items: BIM_PARTIES },
    scope:   { label: 'SCOPE',   items: BIM_SCOPE },
    phases:  { label: 'PHASES',  items: BIM_PHASES },
  };

  // Clickable list of items, each linking to its own sub page.
  function bimLinkList(group, items) {
    return '<div class="bim-linklist">' + items.map(function (i) {
      return '<a class="bim-linkrow" href="#project/bim/' + group + '/' + i.slug + '">' +
        '<span class="bim-linkrow-name">' + i.name + '</span>' +
        '<span class="bim-linkrow-go">&rarr;</span></a>';
    }).join('') + '</div>';
  }

  // Render an array of content blocks into HTML. Recursive for accordions.
  function bimBlocks(blocks) {
    return blocks.map(function (b) {
      switch (b.t) {
        case 'lead':    return '<p class="bim-lead">' + b.text + '</p>';
        case 'p':       return '<p class="bim-prose">' + b.text + '</p>';
        case 'note':    return '<p class="bim-note">' + b.text + '</p>';
        case 'h':       return '<p class="bim-sub">' + b.text + '</p>';
        case 'because': return '<p class="bim-because">' + b.text + '</p>';
        case 'divider': return '<div class="pp-divider"></div>';
        case 'figure':  return '<figure class="bim-figure' + (b.small ? ' bim-figure--small' : '') + '"><img class="bim-detail-img" src="assets/images/' + b.src + '" alt="">' +
                          (b.caption ? '<figcaption class="bim-figcaption">' + b.caption + '</figcaption>' : '') + '</figure>';
        case 'raw':     return b.html;
        case 'ul':      return '<ul class="bim-ul">' + b.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>';
        case 'ol':      return '<ol class="bim-ol">' + b.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ol>';
        case 'kv':      return '<div class="bim-kv">' + b.items.map(function (i) {
                          return '<div class="bim-kv-row"><span class="bim-kv-k">' + i.k + '</span><span class="bim-kv-v">' + i.v + '</span></div>';
                        }).join('') + '</div>';
        case 'stats':   return '<div class="bim-stats">' + b.items.map(function (s) {
                          return '<div class="bim-stat"><span class="bim-stat-num">' + s.num + '</span><span class="bim-stat-label">' + s.label + '</span></div>';
                        }).join('') + '</div>';
        case 'callouts':return '<div class="bim-callouts">' + b.items.map(function (c) {
                          return '<div class="bim-callout"><span class="bim-callout-label">' + c.label + '</span><p class="bim-callout-body">' + c.body + '</p></div>';
                        }).join('') + '</div>';
        case 'approval':return '<div class="bim-approval">' + b.items.map(function (i) {
                          return '<div class="bim-appr-row"><span class="bim-appr-item">' + i.item + '</span><span class="bim-appr-tag bim-appr-' + i.level + '">' + i.status + '</span></div>';
                        }).join('') + '</div>';
        case 'acc':     return b.items.map(function (a) {
                          return '<details class="bim-acc"><summary class="bim-acc-sum">' + a.title + '<span class="bim-acc-icon">+</span></summary><div class="bim-acc-body">' + bimBlocks(a.blocks) + '</div></details>';
                        }).join('');
        default:        return '';
      }
    }).join('');
  }

  // ── Overview content ──
  function bimOverviewBlocks() {
    var navgrid = '<div class="bim-navgrid">' + BIM_NAV.map(function (n) {
      return '<a class="bim-navcard" href="#project/bim/' + n.slug + '">' +
        '<span class="bim-navcard-title">' + n.title + ' &rarr;</span>' +
        '<span class="bim-navcard-desc">' + n.desc + '</span></a>';
    }).join('') + '</div>';

    return [
      { t: 'raw', html: '<video class="bim-hero-video" src="assets/images/bimvid2.mp4" autoplay loop muted playsinline></video>' },
      { t: 'lead', text: 'A privately funded public access connection between Lancaster County School District property and Lancaster County Parks &amp; Recreation land.' },
      { t: 'p', text: 'Harrisburg Elementary School and the nearby park are separated by roughly 100 yards of overgrown land and a stream. Today, reaching the park means walking along a busy road. This project creates another option.' },
      { t: 'callouts', items: [
        { label: 'THE PLAN', body: 'Build a pedestrian bridge, trail, and safe grade connection between the school and the park. Add lighting, visibility, security, and long term maintenance planning so the route is useful, durable, and safe.' },
        { label: 'MORE THAN A BRIDGE', body: 'Every Harrisburg Elementary student will be invited to imagine the bridge. Students will learn how engineering can improve their own communities, draw their ideas, and vote on the bridge that a student made with the most support. Engineering students across the state of South Carolina who went to school in Indian Land will then help translate that vision into a buildable design. After engineering review from professional engineers, that design goes to local contractors to bring it to life with private funding.' },
      ]},
      { t: 'raw', html: '<video class="bim-hero-video" src="assets/images/process.mp4" autoplay loop muted playsinline></video>' },
      { t: 'callouts', items: [
        { label: 'HOW IT HAPPENS', body: 'Private funding. Donated materials. Corporate partners. Volunteer support where appropriate. Licensed professionals where required. Public benefit without construction costs to taxpayers.' },
        { label: 'WHY IT MATTERS', body: 'A safer connection solves an immediate problem. The process can do something larger: show students that ideas are not limited by age, title, or experience. A good idea can come from anyone. A community can build something useful today and inspire the people who will build what comes next.' },
      ]},
      { t: 'because', text: 'Because it matters.' },
      { t: 'divider' },
      { t: 'h', text: 'PROJECT OUTLINE' },
      { t: 'acc', items: [
        { title: '01 &middot; IDEA', blocks: [
          { t: 'p', text: 'Create a safe public pedestrian connection between Lancaster County School District property and Lancaster County Parks &amp; Recreation land. The connection includes a bridge across the stream, approximately 100 yards of trail, and a safe route up the existing grade into the park.' },
        ]},
        { title: '02 &middot; PURPOSE', blocks: [
          { t: 'p', text: 'Deliver a privately funded public improvement that expands access between the school and park without placing avoidable construction costs on taxpayers. The project will prioritize safety, professional design, long term maintenance, accessibility, and clear ownership.' },
        ]},
        { title: '03 &middot; PARTIES', blocks: [
          { t: 'note', text: 'Select a party to open its detail page.' },
          { t: 'raw', html: bimLinkList('parties', BIM_PARTIES) },
        ]},
        { title: '04 &middot; SCOPE', blocks: [
          { t: 'note', text: 'Select a scope area to open its detail page.' },
          { t: 'raw', html: bimLinkList('scope', BIM_SCOPE) },
        ]},
        { title: '05 &middot; PHASES', blocks: [
          { t: 'note', text: 'Select a phase to open its detail page.' },
          { t: 'raw', html: bimLinkList('phases', BIM_PHASES) },
        ]},
      ]},
      { t: 'divider' },
      { t: 'h', text: 'OVERVIEW' },
      { t: 'raw', html: '<div class="bim-imgpair">' +
        '<img class="bim-img" src="assets/images/overview.png" alt="Project overview">' +
        '<img class="bim-img" src="assets/images/overview1.png" alt="Project overview">' +
      '</div>' },
      { t: 'divider' },
      { t: 'h', text: 'PROJECT RECORD' },
      { t: 'note', text: 'The detailed working record is organized into the sections below.' },
      { t: 'raw', html: navgrid },
    ];
  }

  // ── Key Data content ──
  function bimKeyDataBlocks() {
    return [
      { t: 'lead', text: 'Traffic and enrollment context for the Harrisburg Elementary area.' },
      { t: 'stats', items: [
        { num: '6,700', label: 'VEHICLES / DAY &middot; HARRISBURG ROAD, 2024 AADT' },
        { num: '1,185', label: 'STUDENTS &middot; HARRISBURG ELEMENTARY' },
        { num: '~100 yd', label: 'SCHOOL TO PARK SEPARATION' },
      ]},
      { t: 'divider' },
      { t: 'h', text: 'TRAFFIC' },
      { t: 'ul', items: [
        '<strong>6,700 vehicles/day</strong>: Harrisburg Road, 2024 AADT.',
      ]},
      { t: 'h', text: 'SCHOOL' },
      { t: 'ul', items: [
        '<strong>1,185 students</strong>: Harrisburg Elementary, 2025-2026 official 45-day active student headcount.',
      ]},
      { t: 'h', text: 'SOURCES' },
      { t: 'ul', items: [
        'SCDOT 2024 AADT.',
        'South Carolina Department of Education 2025-2026 45-day active student headcount.',
      ]},
    ];
  }

  // ── Funding content ──
  function bimFundingBlocks() {
    return [
      { t: 'lead', text: 'How a privately funded improvement moves through district approval, procurement, and ownership on district property.' },
      { t: 'note', text: '<strong>Core rule:</strong> private funding can cover project costs, but it does not replace district approval, procurement, contracting, construction oversight, or ownership controls.' },
      { t: 'divider' },
      { t: 'h', text: 'STANDARD APPROVAL PROCESS' },
      { t: 'ol', items: [
        'A department identifies or receives a proposed facility need.',
        'Facilities reviews the location, purpose, feasibility, security impact, maintenance needs, and effect on district operations.',
        'The project scope and preliminary cost are developed or validated.',
        'Finance confirms the funding source and determines how funds will be accepted, restricted, recorded, and spent.',
        'Procurement determines the required quote or bidding process.',
        'The appropriate committee or district administration reviews the proposal.',
        'The Board of Trustees approves the project or related agreement when Board action is required.',
        'Procurement selects the contractor and an authorized district official executes the contract.',
        'Facilities oversees construction, inspection, acceptance, and transition into district ownership or another approved ownership structure.',
      ]},
      { t: 'h', text: 'DEPARTMENT RESPONSIBILITIES' },
      { t: 'kv', items: [
        { k: 'Facilities', v: 'Evaluates physical and operational feasibility, defines or approves technical requirements, coordinates security, access, maintenance, and construction oversight, and determines whether the project is ready to advance.' },
        { k: 'Finance', v: 'Confirms funding is available and legally usable, establishes the appropriate account and documentation, handles restricted donations, grants, reimbursements, and capital contributions, and records the completed improvement as a capital asset when applicable.' },
        { k: 'Procurement', v: 'Administers quotes, formal solicitations, vendor evaluation, award notices, purchase orders, and contracts; ensures purchases are not divided to avoid competition; maintains the procurement record for audit.' },
        { k: 'Board of Trustees', v: 'Approves projects, funding arrangements, property agreements, intergovernmental agreements, policy actions, or long term obligations when required.' },
      ]},
      { t: 'h', text: 'COMMON FUNDING STRUCTURES' },
      { t: 'kv', items: [
        { k: 'Restricted funds held by LCSD', v: 'A donor or partner provides money restricted to an approved project. LCSD controls procurement, contracts, construction oversight, and acceptance of the completed improvement.' },
        { k: 'Outside fiscal agent', v: 'A nonprofit or foundation receives and administers contributions, then transfers or reimburses approved project costs under a written agreement. LCSD retains control over work performed on district property.' },
        { k: 'Another public entity leads', v: 'Another government entity holds the funds, procures the work, and owns or maintains the improvement. LCSD authorizes work affecting district property through a formal agreement.' },
        { k: 'Shared public responsibility', v: 'LCSD and another public entity divide legitimate project scopes. The agreement must define funding, design coordination, construction responsibility, ownership, access, and maintenance.' },
      ]},
      { t: 'h', text: 'LCSD PROCUREMENT THRESHOLDS' },
      { t: 'kv', items: [
        { k: 'Up to $4,999.99', v: 'Small purchase procedures; quotes generally not required when the price is fair and reasonable.' },
        { k: '$5,000 to $10,000', v: 'Purchase requisition and written quotation.' },
        { k: '$10,000.01 to $50,000 (minor construction)', v: 'Three bona fide written quotations.' },
        { k: '$50,000.01 to $100,000 (minor construction)', v: 'Three written quotations, award notice, and vendor protest rights.' },
        { k: 'More than $100,000', v: 'Formal sealed bidding and public advertisement.' },
      ]},
      { t: 'note', text: 'Advertised quote or proposal processes may take about four to six weeks; formal sealed bidding about six to eight weeks. Project requirements cannot be divided solely to avoid a procurement threshold.' },
      { t: 'h', text: 'REQUIRED PROJECT DECISIONS' },
      { t: 'ul', items: [
        'Approved project scope and location.',
        'Confirmed property ownership and authorization to build.',
        'Identified funding source and fund holder.',
        'Written treatment of unused funds, funding shortfalls, and cost overruns.',
        'Design and engineering responsibility.',
        'Procurement and contracting authority.',
        'Construction oversight and inspection responsibility.',
        'Permanent ownership and asset acceptance.',
        'Routine maintenance, structural inspection, repair, and replacement responsibility.',
        'Public access, security, closure, and emergency control authority.',
      ]},
      { t: 'h', text: 'COMPLETE PROJECT BUDGET' },
      { t: 'ul', items: [
        'Surveying, site investigation, engineering, design, and cost estimating.',
        'Construction, site preparation, drainage, utility coordination, and restoration.',
        'Testing, inspections, insurance, bonding, and project administration.',
        'Contingency, maintenance reserve, and long term operating costs.',
      ]},
      { t: 'note', text: '<strong>Final principle:</strong> a project is ready for approval only when its purpose, scope, funding, procurement method, contracting authority, ownership, maintenance, and access responsibilities are clearly assigned in writing.' },
    ];
  }

  // ── Permitting content ──
  function bimPermittingBlocks() {
    return [
      { t: 'lead', text: 'Working permitting and project delivery brief for the proposed pedestrian bridge and trail connector across Lancaster County School District and Lancaster County Parks &amp; Recreation property.' },
      { t: 'h', text: 'PURPOSE &amp; BOTTOM LINE' },
      { t: 'ul', items: [
        'Private funding does not bypass public construction requirements. OSF jurisdiction still applies to covered work on school district property regardless of funding source.',
        'LCSD property follows the SC Department of Education Office of School Facilities process for covered school construction and site improvements.',
        'Lancaster County park property can remain subject to County zoning, civil, stormwater, building, floodplain, environmental, and other local review.',
        'The first major decision is the delivery model: who owns the project, holds funds, contracts design and construction, carries insurance, accepts the finished improvement, and maintains it.',
      ]},
      { t: 'divider' },
      { t: 'acc', items: [
        { title: 'APPROVAL MAP, SCREENING LIST', blocks: [
          { t: 'note', text: 'Each item should ultimately end with a documented determination: approval required, or not applicable and no approval required.' },
          { t: 'approval', items: [
            { item: 'Landowner authorization (LCSD)', status: 'Certain', level: 'certain' },
            { item: 'Landowner authorization (Lancaster County / Parks &amp; Recreation)', status: 'Certain', level: 'certain' },
            { item: 'Intergovernmental property and operating agreement', status: 'Very likely', level: 'likely' },
            { item: 'SCDE Office of School Facilities project approval', status: 'Certain', level: 'certain' },
            { item: 'OSF School Building Permit', status: 'Very likely', level: 'likely' },
            { item: 'OSF Form F8 permit tracking', status: 'Certain', level: 'certain' },
            { item: 'Architect / Engineer sealed plans', status: 'Very likely', level: 'likely' },
            { item: 'Lancaster County zoning / site plan approval', status: 'Likely', level: 'likely' },
            { item: 'Lancaster County civil engineering review', status: 'Likely', level: 'likely' },
            { item: 'Lancaster County building permit (park parcel)', status: 'Likely', level: 'likely' },
            { item: 'Stormwater and erosion determination', status: 'Certain to screen', level: 'certain' },
            { item: 'SCDES Form 2628 (under 1 acre)', status: 'Possible', level: 'possible' },
            { item: 'NPDES Construction General Permit (1+ acre)', status: 'Possible', level: 'possible' },
            { item: 'Floodplain Development Permit', status: 'Map first', level: 'possible' },
            { item: 'Floodway / no-rise analysis', status: 'Map first', level: 'possible' },
            { item: 'Carolina Heelsplitter Overlay compliance', status: 'Major item', level: 'likely' },
            { item: 'Wetland / stream delineation', status: 'Recommended', level: 'possible' },
            { item: 'CWA &sect;404 / Nationwide Permit 14', status: 'Possible', level: 'possible' },
            { item: 'CWA &sect;401 Water Quality Certification', status: 'Possible', level: 'possible' },
            { item: 'Endangered species review (USFWS / SCDNR)', status: 'Important', level: 'likely' },
            { item: 'SCDNR environmental review', status: 'Recommended', level: 'possible' },
            { item: 'SCDOT Encroachment Permit (conditional, only if project or construction work enters SCDOT right-of-way)', status: 'Conditional', level: 'conditional' },
            { item: 'SC811 utility locate', status: 'Certain', level: 'certain' },
            { item: 'Utility and easement review', status: 'Depends', level: 'possible' },
            { item: 'ADA and South Carolina accessibility compliance', status: 'Certain', level: 'certain' },
            { item: 'Contractor licensing', status: 'Likely', level: 'likely' },
          ]},
        ]},
        { title: '01 &middot; SCHOOL PROPERTY &amp; THE OSF PROCESS', blocks: [
          { t: 'ul', items: [
            'SC Office of School Facilities has jurisdiction over school district property regardless of funding source. Current OSF Policy and Procedures Manual effective Feb 16, 2026.',
            'Covered work is broad: site construction, grading, paving, storm drainage, utilities, athletic facilities, and other adjunct site work. SCDE approval is required before covered construction begins.',
            'LCSD and SCDE construction is generally exempt from the ordinary local building standard permit under SC Code Section 6 9 110, but other federal, state, and local requirements (including zoning) can still apply.',
            'LCSD must create the project in the OSF Portal. Even small district construction requires prior OSF approval; professional design services can be waived only if OSF grants the waiver.',
            'Construction documents must be approved, outside permits tracked through Form F8, and OSF issues the School Building Permit.',
            'The OSF permit can expire if work does not begin within 180 days, or is abandoned or suspended for 180 days without an extension.',
            'OSF uses third party inspections, including Chapter 1 and, where applicable, Chapter 17 special inspections. Closeout requires the applicable F8 permits and approvals uploaded into the OSF system.',
          ]},
          { t: 'note', text: '<strong>Key question:</strong> can LCSD create an OSF project now, while the connector is still conceptual, to obtain an early scope determination?' },
        ]},
        { title: '02 &middot; FORM F8, MASTER PERMIT CHECKLIST', blocks: [
          { t: 'p', text: 'OSF Form F8 requires school projects to account for outside permits and approvals. Irrelevant categories (elevators, swimming pools, food service, asbestos) can be eliminated quickly, but the project should document a disposition for each relevant category, either permit or approval required, or not applicable.' },
          { t: 'ul', items: ['Zoning', 'Floodplain', 'Stormwater', 'Erosion control', 'Stream and wetlands', 'Road encroachment', 'Environmental and species', 'Accessibility', 'Utilities', 'Structural approval', 'Final inspections'] },
        ]},
        { title: '03 &middot; STORMWATER THRESHOLDS', blocks: [
          { t: 'ul', items: [
            'Less than 1 acre, not part of a larger common plan: SCDES still requires Form 2628 (Notification Form for Sites Disturbing Less Than 1 Acre); SCDES reviews it and issues an exemption letter before disturbance.',
            '1 acre or more: Construction NPDES coverage is required.',
            'Less than 1 acre but part of a 1 acre or greater larger common plan: Construction NPDES coverage can still apply.',
            '1 to 2 acres: South Carolina provides a simplified stormwater and SWPPP route.',
          ]},
          { t: 'note', text: 'This threshold analysis matters because the Indian Land Soccer Complex already has a stormwater permit history.' },
        ]},
        { title: '04 &middot; INDIAN LAND SOCCER COMPLEX STORMWATER PERMIT', blocks: [
          { t: 'kv', items: [
            { k: 'Project', v: 'Indian Land Soccer Complex.' },
            { k: 'County project no.', v: '20202447.' },
            { k: 'NPDES permit', v: 'SCR10Z7LA.' },
            { k: 'Inspections', v: 'County CEPSCI inspectors documented repeated inspections in April, May, and June 2024.' },
          ]},
          { t: 'note', text: '<strong>Critical question:</strong> has SCR10Z7LA formally received a Notice of Termination, and will the connector be treated as a new independent project or a modification or extension of the previously permitted larger common plan?' },
          { t: 'h', text: 'Request the complete SCR10Z7LA file' },
          { t: 'ul', items: ['Original Notice of Intent', 'Approved SWPPP', 'Approved civil and site plan', 'Drainage calculations', 'Existing drainage area maps', 'Erosion control plan', 'Permanent BMP maintenance agreements', 'Inspection records', 'Permit modifications', 'Notice of Termination, if one exists', 'Wetlands and stream documentation submitted with the permit'] },
          { t: 'note', text: 'This file may reduce new environmental and civil due diligence because the park property has already been engineered.' },
        ]},
        { title: '05 &middot; COUNTY BUILDING PERMIT PRECEDENT (PARK PROPERTY)', blocks: [
          { t: 'kv', items: [
            { k: 'Permit', v: '202302445.' },
            { k: 'Project', v: 'IL Soccer Complex Metal Building.' },
            { k: 'Parcel', v: '0005 00 077.00.' },
            { k: 'Type', v: 'Commercial New Construction under 10,000 sq ft.' },
            { k: 'Size', v: '450 square feet.' },
          ]},
          { t: 'note', text: 'Direct evidence that structural improvements at the County owned soccer complex have been processed through Lancaster County commercial construction. Request the full 202302445 file to identify the owner or applicant, submitted plan sets, and departmental sign offs.' },
        ]},
        { title: '06 &middot; CAROLINA HEELSPLITTER OVERLAY (CHO)', blocks: [
          { t: 'p', text: 'The Lancaster County Carolina Heelsplitter Overlay is centered on the Six Mile Creek drainage basin (the Carolina heelsplitter is a federally endangered freshwater mussel). The exact bridge footprint has not yet been confirmed inside or outside the CHO.' },
          { t: 'ul', items: [
            'Approximate CHO riparian buffer: 200 feet from a perennial stream.',
            'Approximate CHO riparian buffer: 100 feet from an intermittent stream.',
            'Higher impact conditions include 8,000 sq ft or more of new impervious area, exceeding specified impervious percentages, or disturbing the riparian buffer.',
            'A small bridge can still create a buffer impact because the crossing physically enters the stream corridor.',
            'Higher impact projects can trigger Carolina Heelsplitter mitigation requirements or credits; USFWS compatible and low impact design can affect mitigation calculations.',
          ]},
          { t: 'note', text: 'Request a written Lancaster County Development Services determination on whether the footprint is inside the CHO and whether the bridge and path is a riparian buffer impact under the current UDO.' },
        ]},
        { title: '07 &middot; SC &sect;401 WATER QUALITY CERTIFICATION', blocks: [
          { t: 'ul', items: [
            '&sect;401 certification becomes relevant when federal Clean Water Act authorization may cause a discharge. SCDES administers &sect;401 in South Carolina.',
            'For the 2026 Nationwide Permits, SCDES issued a General State Certification on Mar 24, 2026 covering certain NWP activities subject to conditions, including NWP 14.',
            'The environmental consultant and engineer should use the current 2026 NWP 14 and SC General State Certification, not an older 2021 checklist.',
          ]},
        ]},
        { title: '08 &middot; SCDNR &amp; ENDANGERED SPECIES REVIEW', blocks: [
          { t: 'ul', items: [
            'The SCDNR likely role is environmental and protected species review, not a generic pedestrian bridge permit.',
            'Once the alignment is reasonably fixed, send SCDNR the project location, description, and GIS or shapefile information.',
            'Generate an official USFWS IPaC resource list for the project area.',
            'If a Corps permit is required, the federal nexus brings the Corps Endangered Species Act obligations into review.',
            'Because of the Carolina Heelsplitter issue, species review should occur before the bridge is fully engineered.',
          ]},
        ]},
        { title: '09 &middot; FLOODPLAIN &amp; FLOODWAY', blocks: [
          { t: 'ul', items: [
            'Check the exact footprint against effective FEMA mapping and Lancaster County floodplain records.',
            'If in a regulated floodplain, use the Lancaster County Floodplain Development Permit process.',
            'If in a regulatory floodway, determine whether a no rise hydraulic analysis or certification is required and whether the design creates a FEMA map revision issue.',
          ]},
          { t: 'h', text: 'The civil engineer should evaluate' },
          { t: 'ul', items: ['Existing and proposed 100 year water surface elevation', 'Conveyance impacts', 'Bridge opening', 'Abutment position', 'Scour', 'Floodway impact'] },
          { t: 'note', text: 'A Corps Nationwide Permit does not replace applicable FEMA approved floodplain requirements.' },
        ]},
        { title: '10 &middot; LANCASTER COUNTY ZONING &amp; UDO REVIEW', blocks: [
          { t: 'p', text: 'The LCSD building permit exemption does not remove Lancaster County from the process; other local regulations, including zoning, still apply. The County UDO covers zoning, development, stormwater, natural resource protection, and related site requirements. Lancaster County is in a UDO rewrite in 2026; before final engineering, obtain a written answer identifying which UDO version and amendments will govern the project based on the anticipated filing date.' },
        ]},
        { title: '11 &middot; ACCESSIBILITY', blocks: [
          { t: 'p', text: 'LCSD and Lancaster County are public entities. Federal ADA standards apply to newly constructed or altered state and local government facilities, including pedestrian routes, and SCDE also reviews school projects for accessibility. The professional designer should include a dedicated accessibility and code sheet in the construction documents.' },
          { t: 'ul', items: ['Accessible running grades', 'Cross slope', 'Clear width', 'Stable, firm, slip resistant surfaces where applicable', 'Transitions onto and off the bridge', 'Edge conditions', 'Ramps if required', 'Accessible connection to the facilities served', 'Handrail and guard requirements where applicable'] },
        ]},
        { title: '12 &middot; UTILITY LOCATING &amp; EASEMENTS', blocks: [
          { t: 'ul', items: [
            'Before excavation, submit an SC811 locate request. Operators receive three full working days (excluding submission day, weekends, holidays).',
            'The excavator must check the positive response system before excavation begins. SC811 is not a substitute for design surveying.',
          ]},
          { t: 'h', text: 'Before final bridge placement, obtain' },
          { t: 'ul', items: ['SUE and utility survey', '811 design locate', 'Easement research', 'Owner utility as builts'] },
          { t: 'note', text: 'A buried sewer, water, electric, gas, or telecom line, or an easement, at the preferred crossing can force a redesign.' },
        ]},
        { title: '13 &middot; CONTRACTOR LICENSING, PROCUREMENT &amp; BONDING', blocks: [
          { t: 'ul', items: [
            'SC LLR requires the appropriate General or Mechanical Contractor license for regulated commercial construction over $10,000, with correct classifications or subclassifications.',
            'If LCSD is the contracting party, the LCSD Procurement Code applies and construction falls within Procurement responsibilities. Do not promise a specific builder to donors before the delivery model is settled.',
            'SC construction procurement rules can require 100% performance and payment security; governmental bodies can waive those for contracts of $50,000 or less under specified circumstances.',
            'Bid security becomes relevant to competitive sealed construction bidding over $100,000.',
            'SC law also provides payment bond protection when a governmental body is party to certain real property improvement contracts over $50,000.',
          ]},
          { t: 'note', text: 'Resolve the delivery model before fundraising is finalized or a contractor is selected.' },
        ]},
      ]},
      { t: 'divider' },
      { t: 'h', text: 'KEY QUESTIONS TO RESOLVE' },
      { t: 'note', text: 'Questions to resolve with LCSD Facilities and Lancaster County staff before design begins.' },
      { t: 'ol', items: [
        'Does LCSD want to be the owner or applicant and create the project in the SCDE OSF Portal?',
        'Does LCSD prefer donated cash to the District, or a privately contracted improvement donated after completion?',
        'Can Procurement or District counsel confirm the procurement rules for each option before a funding structure is chosen?',
        'Can Facilities request an early OSF scope determination for a pedestrian bridge or trail connection on school property?',
        'Does LCSD have a civil engineer, architect, or on call firm it would require the project to use?',
        'Can current boundary, topographic, utility, drainage, and as built drawings for the school parcel be obtained?',
        'Are there previous wetlands, floodplain, or environmental studies for this portion of campus?',
        'Is there already an easement, MOU, or agreement between LCSD and Lancaster County for the adjoining park?',
        'Who would own, inspect, and maintain the bridge after completion?',
        'What District insurance, indemnification, contractor, background or access, and construction safety requirements apply?',
        'What Board approval, gift acceptance, or donor recognition approval is required (Public Gifts and Donations to Schools policy)?',
        'Who is the County side co owner of permitting: Parks &amp; Recreation, Engineering, Development Services, Stormwater, or County Administration?',
      ]},
      { t: 'note', text: '<strong>Most useful next step:</strong> identify one LCSD Facilities point person and one Lancaster County point person, then schedule a technical preapplication meeting with Facilities, Parks &amp; Recreation, County Development or Stormwater, and the project engineer so every required approval is identified before design begins.' },
      { t: 'divider' },
      { t: 'h', text: 'BIGGEST CURRENT RISKS' },
      { t: 'ul', items: [
        '<strong>OSF jurisdiction &amp; delivery structure:</strong> private money does not bypass OSF; LCSD must decide how the project enters the school facilities system and how it is contracted and accepted.',
        '<strong>Carolina Heelsplitter and stream buffer status:</strong> confirm whether the exact footprint is inside the CHO and whether the alignment creates a riparian buffer impact.',
        '<strong>Existing IL Soccer Complex NPDES status:</strong> SCR10Z7LA may determine whether the connector is an independent small project or part of a larger common plan.',
        '<strong>Jurisdictional water impacts:</strong> an upland to upland crossing with minimal streambank disturbance can materially simplify federal environmental permitting.',
      ]},
      { t: 'divider' },
      { t: 'h', text: 'IMMEDIATE RECORDS REQUESTS' },
      { t: 'acc', items: [
        { title: 'FROM LANCASTER COUNTY', blocks: [
          { t: 'ul', items: ['Complete NPDES SCR10Z7LA file for Indian Land Soccer Complex', 'Complete County project file 20202447', 'Complete permit file 202302445', 'Approved civil and site plans for Indian Land Soccer Complex', 'Stormwater and drainage calculations', 'Erosion control and permanent BMP records', 'Wetlands and stream documentation', 'Notice of Termination if issued', 'Current zoning or UDO determination for the project area', 'Written Carolina Heelsplitter Overlay determination', 'Floodplain or floodway determination', 'County road right of way information if relevant'] },
        ]},
        { title: 'FROM LCSD', blocks: [
          { t: 'ul', items: ['School parcel boundary and deed information', 'Easements', 'Current topographic and civil plans', 'Utility plans and as builts', 'Storm drainage plans', 'Previous environmental studies', 'Previous wetlands or floodplain studies', 'Geotechnical information', 'Existing OSF project records relevant to Harrisburg Elementary', 'Applicable LCSD procurement thresholds and procedures', 'Applicable gift or donation policy', 'Required insurance and indemnification provisions', 'Contractor access and safety requirements', 'Maintenance or asset acceptance requirements'] },
        ]},
      ]},
      { t: 'divider' },
      { t: 'h', text: 'AUTHORITATIVE SOURCE INDEX' },
      { t: 'ul', items: [
        'S1: SCDE Office of School Facilities: 2025 SC School Facilities Policy and Procedures Manual.',
        'S2: SCDE Office of School Facilities: 2026 SC School Facilities Planning and Construction Guide.',
        'S3: SCDE Office of School Facilities: Form F8, Design and Construction Related Permits and Approvals.',
        'S4: SCDES: Stormwater Construction Activities, Less Than 1 Acre Land Disturbance.',
        'S5: SCDES: Stormwater Construction Activities.',
        'S6: SCDES: 1 to 2 Acres Land Disturbance.',
        'S7: Lancaster County: 2024 May Stormwater Report (Indian Land Soccer Complex, 20202447, NPDES SCR10Z7LA).',
        'S8: Lancaster County: August 2023 Development Activity Report (permit 202302445, IL Soccer Complex Metal Building).',
        'S9: Lancaster County UDO, Ch. 4 Overlay Districts (Carolina Heelsplitter Overlay).',
        'S10: USACE Charleston District: Regulatory Permitting Process.',
        'S11: USACE: 2026 Nationwide Permits and NWP 14, Linear Transportation Projects.',
        'S12: SCDES: &sect;401 Water Quality Certification Program and 2026 NWP and Minor Projects certification.',
        'S13: SCDES: Construction in Navigable Waters.',
        'S14: SCDNR: environmental review and Land, Water and Conservation resources.',
        'S15: USFWS SC Ecological Services: Project Review in SC and IPaC guidance.',
        'S16: Lancaster County: Floodplain Development Permit Application.',
        'S17: Lancaster County: Adopted UDO and Proposed UDO rewrite materials.',
        'S18: SCDOT: mapping and GIS and encroachment permit resources.',
        'S19: U.S. DOJ: 2010 ADA Standards for Accessible Design.',
        'S20: SC811: excavation and utility locate requirements.',
        'S21: SC LLR: Contractors Licensing Board information.',
        'S22: LCSD Procurement Department and Procurement Code resources.',
        'S23: SC Code of Laws, Title 11 Ch. 35: construction procurement, bonding, security.',
        'S24: SC Code of Laws, Title 29 Ch. 6: payment bond provisions for certain public real property improvements.',
        'S25: SC Dept. of Archives and History and SHPO: &sect;106 review process.',
        'S26: LCSD Board Policies: Public Gifts and Donations to Schools.',
      ]},
    ];
  }

  // Detail page for a single Parties / Scope / Phases item.
  function bimDetail(group, slug) {
    var g = BIM_GROUPS[group];
    if (!g) return null;
    var item = null, i;
    for (i = 0; i < g.items.length; i++) { if (g.items[i].slug === slug) { item = g.items[i]; break; } }
    if (!item) return null;

    var siblings = g.items.filter(function (s) { return s.slug !== item.slug; });
    var blocks = [
      { t: 'lead', text: item.body },
    ];
    if (item.images) {
      item.images.forEach(function (im) {
        blocks.push({ t: 'figure', src: im.src, caption: im.caption, small: im.small });
      });
    }
    if (item.detail) {
      blocks.push({ t: 'divider' });
      blocks = blocks.concat(item.detail);
    }
    if (siblings.length) {
      blocks.push({ t: 'divider' });
      blocks.push({ t: 'h', text: 'MORE IN ' + g.label });
      blocks.push({ t: 'raw', html: bimLinkList(group, siblings) });
    }
    return { title: item.name, kicker: 'PROJECT BIM &middot; ' + g.label, blocks: blocks };
  }

  function bimPageFor(sub) {
    if (sub === 'key-data')   return { title: 'KEY DATA', kicker: 'PROJECT BIM &middot; HARRISBURG ELEMENTARY AREA', blocks: bimKeyDataBlocks() };
    if (sub === 'funding')    return { title: 'DUE PROCESS', kicker: 'PROJECT BIM &middot; LCSD PUBLIC PROJECT PROCESS', blocks: bimFundingBlocks() };
    if (sub === 'permitting') return { title: 'PERMITTING &amp; APPROVALS', kicker: 'PROJECT BIM &middot; PUBLIC LAND PROCESS', blocks: bimPermittingBlocks() };

    // Item detail pages: parties/<slug>, scope/<slug>, phases/<slug>
    if (sub && sub.indexOf('/') !== -1) {
      var parts = sub.split('/');
      var detail = bimDetail(parts[0], parts[1]);
      if (detail) return detail;
    }

    return { title: 'PROJECT BIM', kicker: 'INITIAL PROJECT PROPOSAL', blocks: bimOverviewBlocks() };
  }

  function showBIM(sub) {
    var navHTML =
      '<header class="header">' +
        '<div class="container">' +
          '<div class="content-wrapper">' +
            '<nav class="nav">' +
              '<img src="assets/images/favicon/logolight.png" alt="Nathan Wardy" id="bim-logo" class="logo">' +
              '<ul class="nav-links">' +
                '<li><a href="#technical">TECHNICAL</a></li>' +
                '<li><a href="#projects">INITIATIVES</a></li>' +
                '<li><a href="#experience">EXPERIENCE</a></li>' +
                '<li><a href="#education">EDUCATION</a></li>' +
                '<li><a href="#stories">STORIES</a></li>' +
              '</ul>' +
            '</nav>' +
          '</div>' +
        '</div>' +
      '</header>';

    var page = bimPageFor(sub);
    var isOverview = !sub;
    var backHref = isOverview ? '' : '#project/bim';
    var backLabel = isOverview ? '&larr; BACK' : '&larr; PROJECT BIM';

    var bodyHTML = bimBlocks(page.blocks);

    projectPage.innerHTML =
      navHTML +
      '<div class="pp-wrap bim-wrap">' +
        '<button class="pp-back" id="bim-back">' + backLabel + '</button>' +
        '<p class="bim-kicker">' + page.kicker + '</p>' +
        '<h1 class="pp-title bim-title">' + page.title + '</h1>' +
        bodyHTML +
      '</div>';

    // BIM pages force light mode regardless of the global theme.
    projectPage.classList.add('bim-page');

    mainContent.style.display  = 'none';
    mainContent.setAttribute('aria-hidden', 'true');
    storiesPage.style.display  = 'none';
    storiesPage.setAttribute('aria-hidden', 'true');
    hideSpacex();
    projectPage.style.display  = '';
    projectPage.removeAttribute('aria-hidden');
    document.title = (isOverview ? 'Project BIM' : page.title.replace(/&amp;/g, '&').replace(/&middot;/g, '·') + ' · Project BIM') + ' - Nathan Wardy';
    projectPage.scrollTop = 0;
    window.scrollTo(0, 0);

    document.getElementById('bim-back').addEventListener('click', function () {
      window.location.hash = backHref;
    });

    var bimLogo = document.getElementById('bim-logo');
    bimLogo.addEventListener('click', function () { window.location.hash = ''; });
    // Always the light logo, since BIM pages are always light.
    bimLogo.src = 'assets/images/favicon/logolight.png';
  }

  // ── SpaceX page (hidden recruiting sub-page) ──────────────────────────────
  //
  // Reachable only at natewardy.com/spacex (an S3 object at key `spacex` serves
  // this same index.html; the router detects the pathname) and, for local/file
  // testing, at #spacex. Not linked anywhere in the site. Forces a dark theme.
  //
  // Links that LEAVE this page use absolute "/..." URLs so the browser loads the
  // main site fresh (pathname → "/") and the hash router takes over there.

  function ytEmbed(id) {
    return 'https://www.youtube-nocookie.com/embed/' + id +
           '?rel=0&modestbranding=1';
  }

  var SPACEX_PROJECTS = [
    {
      title: 'Impulse',
      id: 'V2QLWceUWrg',
      desc: 'An engineering project I designed, built, and tested end to end. The full build is in the video above.',
      more: 'More detail on Impulse coming soon. For now, the video tells the story.',
    },
    {
      title: 'Bridge Project',
      id: 'ax7Cg6UopEU',
      desc: 'A hands-on engineering build taken from design through to a working result. The complete walkthrough is in the video above.',
      more: 'More detail on the Bridge Project coming soon. For now, the video tells the story.',
    },
    {
      title: 'Electronics Education Initiative',
      id: 'qjC6O1Eb0kw',
      desc: 'The first electronics workshop of its kind at UofSC. 35 students, over $7,000 in equipment sourced across four departments in 24 hours, and every attendee walked out with a working device they built themselves.',
      link: '/#project/electronics-education',
    },
    {
      title: 'Spot Goes to School',
      id: 'pybDXQvTaKk',
      desc: 'Bringing Boston Dynamics Spot into classrooms to show the next generation what engineering can really be.',
      more: 'More detail on Spot Goes to School coming soon. For now, the video tells the story.',
    },
    {
      title: 'Project First Pitch',
      id: 'X-lk02Rgg8s',
      desc: 'A pneumatically powered, electronically controlled baseball cannon mounted on Boston Dynamics Spot, delivered live at a Columbia Fireflies game. One attempt, no fallback. It worked.',
      link: '/#project/first-pitch',
    },
    {
      title: 'CenTag',
      id: 'w-2ZRhZeyfw',
      desc: 'A smart event-management platform built on AWS serverless infrastructure around a 3D-printed QR keychain. Funded by Centene and deployed at their 200-person Intern Summit.',
      link: '/#project/centag',
    },
    {
      title: 'Flower Robot',
      id: 'DkMJ5rPPzuU',
      desc: 'A robotics build from the ground up. The complete walkthrough is in the video above.',
      more: 'More detail on the Flower Robot coming soon. For now, the video tells the story.',
    },
  ];

  var SPACEX_EXPERIENCE = [
    {
      co: 'BMW Group', role: 'Manufacturing Design Engineer, Process Planner', date: 'AUG 2026 to PRESENT',
      notes: [
        'Planned new product introduction (NPI) assembly processes for the X3, X5, X6, X7, and XM programs.',
        'Took vehicle designs into rate-ready production lines.',
        'Selected and defined production tooling and equipment.',
        'Authored assembly work instructions.',
        'Drove supplier readiness for new tooling and equipment.',
        'Engineered repeatable, ergonomic assembly sequences around operator reach, force, and task order.',
        'Supported KUKA industrial robotics and autonomous material logistics on the line.',
        'Ran human force and dexterity studies on lines building vehicles for 120 global markets.',
      ],
    },
    {
      co: 'Bank of America', role: 'Software Engineer Intern', date: 'MAY 2026 to AUG 2026',
      note: 'Built software for Commercial and Corporate Banking operations across a $900B portfolio, and led technical direction for an 8-person intern team, all while Bank of America led the SpaceX IPO.',
    },
    {
      co: 'South Carolina Center for Industry Solutions', role: 'Project Lead Engineer', date: 'JAN 2026 to JUN 2026',
      note: 'Worked with South Carolina manufacturers on research solutions using Boston Dynamics Spot, and led hands-on engineering education initiatives.',
    },
    {
      co: 'Centene Corporation', role: 'Systems Engineer Intern', date: 'MAY 2024 to JUN 2026',
      notes: [
        'Software engineering across the enterprise: built CenMap (480+ product owners), the Oasis Shield OAuth 2.0 / JWT auth service, a secure PHI document API on AWS, SRE automation for Jira, ServiceNow, and GitLab, and the VMware to AWS migration.',
        'Pitched, built, and launched CenTag, a serverless AWS attendance platform built around QR keychains I designed and 3D printed in volume, adopted across multiple Centene organizations.',
      ],
    },
  ];

  var SPACEX_RECS = [
    {
      quote: '"Nate has the attitude and the aptitude. I recommend him without reservation."',
      name: 'Dan Kalaf', role: 'Problem Solver, Servant Leader · Mentor, Centene Corporation',
      link: '/#project/rec-dan',
    },
    {
      quote: '"Nathan is a sponge. He absorbs everything he touches and turns it into something real. I would not hesitate to hire Nathan again."',
      name: 'Drew Rhodes', role: 'IT Leadership · Centene Corporation',
      link: '/#project/rec-drew',
    },
    {
      quote: '"Nathan consistently exceeded expectations in both technical execution and problem-solving. I would highly recommend Nathan."',
      name: 'Jennifer Halverson', role: 'Results-Driven Leader · Centene Corporation',
      link: '/#project/rec-jen',
    },
  ];

  function showSpaceX() {
    if (!spacexPage) { showMain(); return; }

    var headerHTML =
      '<header class="sx-header">' +
        '<img class="sx-logo" id="sx-logo" alt="SpaceX" ' +
          'src="assets/images/spacexfix.png" ' +
          'onerror="this.onerror=null;this.src=\'assets/images/SpaceX-White-Dark-Background-Logo.wine.svg\'">' +
        '<ul class="sx-nav">' +
          '<li><a href="#" data-scroll="sx-why">WHY SPACEX</a></li>' +
          '<li><a href="#" data-scroll="sx-experience">EXPERIENCE</a></li>' +
          '<li><a href="#" data-scroll="sx-projects">PROJECTS</a></li>' +
          '<li><a href="#" data-scroll="sx-recs">RECOMMENDATIONS</a></li>' +
          '<li><a href="/">HOME</a></li>' +
        '</ul>' +
      '</header>';

    var projectsHTML = SPACEX_PROJECTS.map(function (p, i) {
      var idx = (i + 1 < 10 ? '0' : '') + (i + 1);
      var moreHTML = p.link
        ? '<a class="sx-proj-more" href="' + p.link + '">VIEW FULL PROJECT &rarr;</a>'
        : '';
      return '<article class="sx-proj">' +
          '<div class="sx-video">' +
            '<iframe src="' + ytEmbed(p.id) + '" title="' + p.title + '" ' +
              'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
              'allowfullscreen loading="lazy"></iframe>' +
          '</div>' +
          '<div class="sx-proj-head">' +
            '<h3 class="sx-proj-title">' + p.title + '</h3>' +
            '<span class="sx-proj-index">' + idx + ' / ' + (SPACEX_PROJECTS.length < 10 ? '0' : '') + SPACEX_PROJECTS.length + '</span>' +
          '</div>' +
          moreHTML +
        '</article>';
    }).join('');

    var expHTML = SPACEX_EXPERIENCE.map(function (x) {
      var body = x.note ? '<p class="sx-exp-note">' + x.note + '</p>' : '';
      if (x.notes && x.notes.length) {
        body += '<ul class="sx-exp-bullets">' +
          x.notes.map(function (n) { return '<li>' + n + '</li>'; }).join('') +
        '</ul>';
      }
      return '<div class="sx-exp-row">' +
          '<div>' +
            '<div class="sx-exp-co">' + x.co + '</div>' +
            '<div class="sx-exp-role">' + x.role + '</div>' +
          '</div>' +
          '<div class="sx-exp-date">' + x.date + '</div>' +
          body +
        '</div>';
    }).join('');

    var recsHTML = SPACEX_RECS.map(function (r) {
      return '<div class="sx-rec">' +
          '<p class="sx-rec-quote">' + r.quote + '</p>' +
          '<div class="sx-rec-name">' + r.name + '</div>' +
          '<div class="sx-rec-role">' + r.role + '</div>' +
          '<a class="sx-rec-link" href="' + r.link + '">READ FULL RECOMMENDATION &rarr;</a>' +
        '</div>';
    }).join('');

    spacexPage.innerHTML =
      headerHTML +
      '<div class="sx-wrap">' +
        '<section class="sx-intro">' +
          '<p class="sx-kicker">NATHAN WARDY  ·  FOR THE SPACEX TEAM</p>' +
          '<h1 class="sx-hello">Hey SpaceX team,<br>it\'s nice to meet you.</h1>' +
        '</section>' +

        '<section class="sx-section" id="sx-why">' +
          '<p class="sx-eyebrow">// Start here</p>' +
          '<h2 class="sx-section-title">Why SpaceX</h2>' +
          '<div class="sx-video sx-feature-video">' +
            '<iframe src="' + ytEmbed('XOTvDT46SvQ') + '" title="Why SpaceX" ' +
              'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
              'allowfullscreen loading="lazy"></iframe>' +
          '</div>' +
        '</section>' +

        '<section class="sx-section" id="sx-experience">' +
          '<p class="sx-eyebrow">// Where I\'ve worked</p>' +
          '<h2 class="sx-section-title">Experience</h2>' +
          '<div class="sx-exp-list">' + expHTML + '</div>' +
          '<a class="sx-fullhist" href="/#experience">CLICK HERE FOR FULL WORK HISTORY &rarr;</a>' +
        '</section>' +

        '<section class="sx-section" id="sx-projects">' +
          '<p class="sx-eyebrow">// What I\'ve built</p>' +
          '<h2 class="sx-section-title">Projects</h2>' +
          '<div class="sx-projects">' + projectsHTML + '</div>' +
        '</section>' +

        '<section class="sx-section" id="sx-recs">' +
          '<p class="sx-eyebrow">// What others say</p>' +
          '<h2 class="sx-section-title">Recommendations</h2>' +
          '<div class="sx-recs">' + recsHTML + '</div>' +
        '</section>' +

        '<section class="sx-closer">' +
          '<p class="sx-closer-text">I\'m very fortunate to have learned what brings me purpose this early in life: ' +
            'to give my blood, sweat, and tears to make things that seem impossible. ' +
            '<em>I\'ve been fighting for a chance to do that here, because SpaceX is what inspired me to do everything ' +
            'I\'ve done so far, and what I\'ll keep chasing for the rest of my life.</em></p>' +
          '<p class="sx-sign">NATHAN WARDY</p>' +
          '<div class="sx-contact">' +
            '<a href="mailto:natewardy@gmail.com">NATEWARDY@GMAIL.COM</a>' +
            '<span>|</span>' +
            '<a href="https://www.linkedin.com/in/nathanwardy/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>' +
            '<span>|</span>' +
            '<a href="https://www.youtube.com/@WardyCreates" target="_blank" rel="noopener noreferrer">YOUTUBE</a>' +
          '</div>' +
        '</section>' +
      '</div>';

    mainContent.style.display  = 'none';
    mainContent.setAttribute('aria-hidden', 'true');
    projectPage.style.display  = 'none';
    projectPage.setAttribute('aria-hidden', 'true');
    storiesPage.style.display  = 'none';
    storiesPage.setAttribute('aria-hidden', 'true');
    spacexPage.style.display   = '';
    spacexPage.removeAttribute('aria-hidden');
    document.title = 'Nathan Wardy for the SpaceX Team';
    spacexPage.scrollTop = 0;

    // Logo returns to the main site.
    document.getElementById('sx-logo').addEventListener('click', function () {
      window.location.href = '/';
    });

    // In-page nav: smooth-scroll without polluting the hash (hash changes would
    // trigger route() and bounce us back to the main page).
    spacexPage.querySelectorAll('[data-scroll]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById(a.getAttribute('data-scroll'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Inline "read more" toggles for projects without a dedicated detail page.
    spacexPage.querySelectorAll('[data-more]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var text = btn.nextElementSibling;
        if (!text) return;
        var open = text.classList.toggle('open');
        btn.textContent = open ? 'READ LESS –' : 'READ MORE +';
      });
    });
  }

  // ── Hash routing ──────────────────────────────────────────────────────────

  function isSpacexPath() {
    // Matches /spacex and /spacex/ (served from an S3 object at key `spacex`).
    return /\/spacex\/?$/.test(window.location.pathname);
  }

  function route() {
    var hash = window.location.hash; // e.g. "#project/caelus"
    if (isSpacexPath() || hash === '#spacex') {
      showSpaceX();
    } else if (hash && hash.indexOf('#project/') === 0) {
      var slug = hash.slice('#project/'.length);
      if (slug === 'bim' || slug.indexOf('bim/') === 0) {
        showBIM(slug === 'bim' ? '' : slug.slice('bim/'.length));
      } else {
        showProject(slug);
      }
    } else if (hash === '#stories') {
      showStories();
    } else {
      showMain();
    }
  }

  window.addEventListener('hashchange', route);
  // Run on load — DOMContentLoaded already fired by the time scripts run,
  // but we need the DOM ready; placing script at bottom of body ensures this.
  route();
}());
