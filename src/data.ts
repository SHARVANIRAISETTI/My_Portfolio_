export const profileData = {
  name: 'Sharvani Raisetti',
  title: 'Full-Stack Software Engineering Intern @ DigiSamaksh Private Limited',
  location: 'Hyderabad, India',
  email: 'sharvani2410@gmail.com',
  phone: '+91 9885451949',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  leetcodeUser: 'Raisetti_Sharvani',
  about: `B.Tech ECE student (Graduating 2027, CGPA: 8.84/10, Top 5%) and active Software Engineering Intern at DigiSamaksh Private Limited. Building design-pattern-driven enterprise software stacks, writing clean backend code schemas, and coordinating API integrations. Hands-on experience with React.js, Node.js, Express.js, and Django. Led an SIH hackathon team under tight deadlines and has applied strong problem-solving skills across 90+ solved DSA problems.`,
};

export const internshipData = {
  id: 'exp-1',
  company: 'DigiSamaksh Private Limited',
  title: 'Software Engineering Intern (SWE Intern)',
  location: 'Hyderabad, India (Rotational / Hybrid Hub)',
  duration: 'Jan 2026 – Present',
  brief: 'Building design-pattern-driven enterprise software stacks, writing clean backend code schemas, and coordinating API integrations.',
  details: `Engineered scalable RESTful API endpoint controllers, applied object-oriented principles to decouple business core models from framework drivers, and directly optimized backend database transactions using lightweight ORM mappers (<45ms data latencies) to align with enterprise computing performance standards. Collaborated across a cross-functional engineering pipeline on the Smart E-Commerce AI Recommendation platform — the primary technical delivery requirement submitted for evaluation panel review.`,
  highlights: [
    'Engineered scalable RESTful API endpoint controllers',
    'Applied OOP principles to decouple business models from framework drivers',
    'Optimized database transactions via lightweight ORM mappers (<45ms latency)',
    'Coordinated API integrations across full-stack application pipelines',
    'Active contributor to Smart E-Commerce AI Research delivery milestone',
  ],
};

export const educationData = [
  {
    id: 'edu-1',
    institution: 'Malla Reddy College of Engineering for Women',
    degree: 'B.Tech in Electronics & Communication Engineering',
    timeline: 'Aug 2023 – May 2027',
    brief: 'B.Tech in ECE with 8.84 CGPA (Top 5% of class).',
    cgpa: '8.84 / 10',
    rank: 'Top 5% of Class',
    details: [
      'Core Coursework: Data Structures & Algorithms (DSA)',
      'Object-Oriented Programming (OOP)',
      'Database Management Systems (DBMS)',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
    id: 'edu-2',
    institution: 'Nano Junior College',
    degree: 'Class XII — MPC Stream',
    timeline: '2021 – 2023',
    brief: '95.5% in Mathematics, Physics & Chemistry.',
    score: '95.5%',
    details: [
      'Focus stream: Mathematics, Physics, and Chemistry',
      'Outstanding academic performance with 95.5% aggregate',
    ],
  },
  {
    id: 'edu-3',
    institution: 'Jawahar Navodaya Vidyalaya, Khammam',
    degree: 'CBSE Class X',
    timeline: '2020 – 2021',
    brief: '85.8% competitive academic standing.',
    score: '85.8%',
    details: [
      'CBSE Board — competitive academic standing',
      'Navodaya merit-based residential institution selection',
    ],
  },
];

export const achievementsData = [
  {
    id: 'ach-1',
    title: 'Smart India Hackathon (SIH) — Internal Round Team Lead',
    brief: 'Led 5-member team to deliver a working prototype.',
    icon: 'trophy',
    details: `Directed a 5-member cross-functional team through the full project lifecycle for the Smart India Hackathon internal evaluation round. Adapted project scope under strict deadlines while maintaining technical integrity, successfully delivering a functional prototype that was evaluated and recognized by a panel of judges. Responsibilities spanned task delegation, architecture decisions, and live demo presentation.`,
  },
  {
    id: 'ach-2',
    title: 'Competitive Programming — 90+ DSA Problems',
    brief: 'Solved 90+ problems across Arrays, Trees, DP, and more.',
    icon: 'code',
    details: `Solved 90+ complex data structure and algorithm challenges spanning: Arrays, Strings, Hashing, Sliding Window, Binary Trees, Binary Search, and Dynamic Programming. Consistent problem-solving practice has sharpened pattern recognition and time-complexity analysis skills applied directly in system design.`,
  },
];

export const certificationsData = [
  {
    id: 'cert-1',
    name: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    type: 'Frontend',
  },
  {
    id: 'cert-2',
    name: 'Python Fundamentals',
    issuer: 'Infosys Springboard',
    type: 'Language',
  },
  {
    id: 'cert-3',
    name: 'Full Stack Web Development with AI Tools',
    issuer: 'Edunet Foundation & TASK',
    type: 'Full Stack',
  },
];

export const skillsData = {
  Languages: ['Java', 'Python', 'JavaScript', 'SQL'],
  Frontend: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'],
  'Backend Frameworks': ['Node.js', 'Express.js', 'Django', 'REST APIs', 'Design Patterns'],
  Databases: ['MongoDB', 'MySQL', 'SQLite'],
};

export const projectsData = [
  {
    id: 'proj-1',
    name: 'UrbanBridge',
    subtitle: 'Full-Stack Service Marketplace',
    stack: ['Django', 'WebSockets', 'Google Maps API', 'PostgreSQL'],
    brief: 'Live service marketplace with real-time booking and location tracking.',
    details: `Engineered on a Django backend that tracks live user coordinates via the Google Maps API integration. Implements WebSocket channels for real-time notification streams enabling instant booking lifecycle updates between service providers and consumers. Handles geolocation-based matching, live map rendering, and server-push event flows for a zero-refresh booking experience.`,
    github: 'https://github.com',
    color: 'from-blue-600/20 to-cyan-600/10',
    accent: '#00d4ff',
  },
  {
    id: 'proj-2',
    name: 'DreamWorld',
    subtitle: 'MERN E-Commerce Platform',
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
    brief: 'Secure e-commerce platform with 50+ listings and JWT auth.',
    details: `MERN-stack commerce platform supporting 50+ product listings with a secure authentication pattern using custom JWT cookie tokens. Implements full cart management with optimistic updates, role-based access validation separating admin and customer permissions, and 15+ RESTful API endpoints covering the complete product-to-order lifecycle.`,
    github: 'https://github.com',
    color: 'from-green-600/20 to-emerald-600/10',
    accent: '#4ade80',
  },
  {
    id: 'proj-3',
    name: 'Zorvyn',
    subtitle: 'Secure Backend System with RBAC',
    stack: ['Node.js', 'Express.js', 'JWT', 'RBAC', 'Clean Architecture'],
    brief: 'Role-Based Access Control across 10+ endpoints.',
    details: `Implements Role-Based Access Control (RBAC) with fine-grained permission matrices and rigorous input validation across 10+ API endpoints. Built following clean architecture design paradigms with separated service, controller, and repository layers. Includes middleware chains for token verification, role assertion, and request sanitization for production-grade security.`,
    github: 'https://github.com',
    color: 'from-orange-600/20 to-red-600/10',
    accent: '#fb923c',
  },
  {
    id: 'proj-4',
    name: 'Currency Converter',
    subtitle: 'JavaScript Web Application',
    stack: ['Vanilla JS', 'HTML5', 'CSS3', 'Exchange Rate API'],
    brief: 'Real-time currency conversion across 150+ global assets.',
    details: `Responsive client-side conversion dashboard built entirely with vanilla JavaScript patterns. Processes real-time exchange rate tables across 150+ international currency assets with instant calculation on input. Features a clean responsive UI, currency flag indicators, historical rate visualization, and minimal-dependency architecture for optimal load performance.`,
    github: 'https://github.com',
    color: 'from-yellow-600/20 to-amber-600/10',
    accent: '#facc15',
  },
];

export const systemsPoem = `// The Stack Below the Stack
// ─────────────────────────────────────────────────────

I do not merely write code —
  I trace signals through silicon thought,
  where every packet is a decision
  and every route, a philosophy earned.

The gateway receives.
  It does not know your name —
  only your token, your verb, your payload weight.
  Identity is math here.
  Trust is a signed assertion, expiring.

Below the API, the ORM kneels:
  Dapper whispers directly to the schema —
  no translation layer, no impedance mismatch,
  just SQL, pure and deliberate, under 45 milliseconds.

And further still —
  the model waits in the cloud,
  stateless, patient,
  accepting the prompt I shaped from your behavior,
  returning inference I never stored on my machine.

Zero RAM overhead.
  Zero local footprint.
  The intelligence is borrowed,
  but the architecture is mine.

I build the systems
  that run before the user sees the page —
  the auth chain, the query plan, the cache miss,
  the WebSocket handshake in the dark.

The frontend is the poem.
  The backend is the proof.
  I am both.

  — Sharvani Raisetti`;
