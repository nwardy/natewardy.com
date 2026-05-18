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
    label: 'MAR 2025',
    body: '35 students, 24 hours to source $7,000 in equipment across four department chairs, and every single attendee was a mechanical, civil, or chemical engineering major who had never soldered before. They all left with a working device. Got emails after saying it opened up career directions they didn\'t know existed.',
    image: 'assets/images/projects/electron.jpeg',
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
      'Camera-mounted turret running an image classification model: detect human-signature pixels → center target at set distance → shoot → loop.',
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
      'Developed a graph theory algorithm to map Centene\'s four-tier organizational hierarchy: business applications → servers → support teams → parent management, including all downstream resource and employee relationships.',
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

  function showMain() {
    mainContent.style.display  = '';
    projectPage.style.display  = 'none';
    projectPage.setAttribute('aria-hidden', 'true');
    storiesPage.style.display  = 'none';
    storiesPage.setAttribute('aria-hidden', 'true');
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
            var imgHTML = s.video
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
    storiesPage.style.display  = '';
    storiesPage.removeAttribute('aria-hidden');
    document.title = 'Stories - Nathan Wardy';
    storiesPage.scrollTop = 0;

    document.getElementById('sp-back').addEventListener('click', function () {
      window.location.hash = '';
    });

    document.getElementById('sp-logo').addEventListener('click', function () {
      window.location.hash = '';
    });
  }

  // ── Hash routing ──────────────────────────────────────────────────────────

  function route() {
    var hash = window.location.hash; // e.g. "#project/caelus"
    if (hash && hash.indexOf('#project/') === 0) {
      var slug = hash.slice('#project/'.length);
      showProject(slug);
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
