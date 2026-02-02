// ==================== NAV LINKS ====================
const navLinks = [
  { name: "About", link: "#about" },
   { name: "Project", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Certification", link: "#certifications" },
];

// ==================== WORDS ====================
const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

// ==================== COMPANY LOGOS ====================


// ==================== ABILITIES ====================
const abilities = [
  {
    phase: "Phase 1",
    title: "Planning & Strategy",
    desc: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
  },
  {
    phase: "Phase 2",
    title: "Design & Development",
    desc: "We'll transform your ideas into a clean, modern interface with smooth user experience and responsive layout across devices.",
  },
  {
    phase: "Phase 3",
    title: "Testing & Launch",
    desc: "Before going live, we rigorously test your site for performance, responsiveness, and security — then deploy seamlessly.",
  },
];

// --- Removed 'export' from here ---
// constants.js
 const projects = [
   {
    id: 1,
    title: "Medicine Analyser App",
    des: "A production-ready Flutter mobile application designed to help people understand medicines and health conditions in a clear, structured, and responsible way.",
    img: "/images/medi.png",
    iconLists: [
      "/images/dart.svg",
      "/images/flutter.svg",
      "/images/ml.png",
      "/images/git.svg",
      "/images/river.png",
       "/images/groq.png",
    ],
    github: "https://github.com/akshaypatra00/medicine-analyzer-flutter",
    type: "development",
     problem: "Medical information online is often confusing, unstructured, or misleading. Users struggle to understand medicines safely without falling into misinformation or self-prescription risks.",
      solution: "Built a trust-focused mobile application that uses AI to explain medicines and health conditions in neutral, educational language. The app enforces strict safety rules, structured JSON responses, and clear disclaimers to ensure responsible usage without replacing professional medical advice.",
      features: [
    "Search medicines by name with structured AI explanations",
    "Scan medicine using camera with OCR extraction",
    "Upload medicine images from gallery",
    "Manual correction support for OCR results",
    "AI-powered medicine analysis with categorized sections",
    "Health condition guidance with food and lifestyle recommendations",
    "Glassmorphism UI with soft gradients and dark mode",
    "Search history and local storage support",
    "Clear medical disclaimers and safety-focused UX"
  ],
  metrics: "Supports 10+ structured medical categories per analysis, OCR accuracy improved with manual correction flow, 100% non-prescriptive AI responses enforced via prompt design",
  liveDemo: ""
  },

   
  {
    id: 1,
    title: "Famity App",
    des: "Famity is a secure, family-only space where memories live forever.",
    img: "/images/famity.png",
    iconLists: [
      "/images/dart.svg",
      "/images/flutter.svg",
      "/images/supabase.svg",
      "/images/git.svg",
      "/images/git2.svg",
    ],
    github: "https://github.com/akshaypatra00/Famity",
    type: "development",
    problem: "Families struggle to keep memories organized and accessible across generations. Photos get lost in phone storage, important moments are forgotten, and private family content ends up on public social media platforms where privacy cannot be guaranteed.",
    solution: "A private, secure family network with end-to-end encryption that creates a digital family album. Members can share photos, videos, and memories in real-time while maintaining complete privacy. Features automated timeline organization and smart memory reminders for anniversaries and special occasions.",
    features: [
      "End-to-end encrypted photo and video sharing with military-grade security",
      "Smart memory timeline that auto-organizes content by date and event",
      "Real-time syncing across all family members' devices",
      "Anniversary and birthday reminders with memory flashbacks",
      "Unlimited storage with intelligent compression (up to 10,000 photos)",
      "Offline mode - view and upload content without internet connection"
    ],
    metrics: "Built for 50+ beta families, 4.8★ rating, handles 10,000+ photos per family with 99.9% uptime",
    liveDemo: ""
  },
  {
    id: 2,
    title: "Zeyro – UI/UX Prototype",
    des: "A conceptual mobile application prototype designed as part of a UI/UX assignment for Zeyro.",
    img: "/images/zeyro.png",
    iconLists: ["/images/figma.svg", "/images/adobe.svg"],
    figma: "https://www.figma.com/proto/2T55QucOVE4tePvuzBTJRJ/Zeyro-app-prototype?node-id=0-1&t=FdakCHOXjjG6RG9U-1",
    type: "design",
    problem: "Digital wallet apps often have cluttered interfaces that overwhelm users with too many options. New users struggle to understand complex financial features, and the learning curve prevents adoption among non-tech-savvy demographics.",
    solution: "A clean, minimalist fintech app design that prioritizes user experience with intuitive navigation and progressive disclosure of features. The design uses familiar patterns, clear visual hierarchy, and micro-interactions to guide users through financial tasks effortlessly.",
    features: [
      "12 carefully designed screens with consistent design system",
      "Custom iconography and illustrations for brand identity",
      "Interactive prototype with smooth transitions and animations",
      "Accessibility-first design with WCAG 2.1 AA compliance",
      "Reusable component library for developer handoff",
      "Dark and light mode support with automatic switching"
    ],
    metrics: "95/100 accessibility score, 12 screens, complete design system with 50+ reusable components",
    liveDemo: ""
  },
  {
    id: 3,
    title: "Custom Unix Shell – CLI Execution Demo",
    des: "Terminal output showcasing command parsing and process execution implemented as part of a systems programming challenge.",
    img: "/images/shell.png",
    iconLists: ["/images/python.svg", "/images/git2.svg", "/images/git.svg"],
    github: "https://github.com/akshaypatra00/buildyourownShell",
    type: "development",
    problem: "Understanding operating system internals and process management is crucial for backend developers, but most learning resources don't provide hands-on experience with how shells actually work under the hood.",
    solution: "Built a fully functional Unix shell from scratch that handles command parsing, process creation, I/O redirection, and pipeline execution. This deep dive into system programming demonstrates low-level understanding of how operating systems manage processes and resources.",
    features: [
      "Command parsing with support for arguments and flags",
      "Process creation and management using fork() and exec()",
      "Pipeline support for chaining commands (e.g., ls | grep | wc)",
      "I/O redirection (stdin, stdout, stderr)",
      "Built-in commands (cd, pwd, exit, history)",
      "Signal handling for process control (Ctrl+C, Ctrl+Z)"
    ],
    metrics: "Handles 20+ built-in commands, processes 100+ command executions per second, 95% compatibility with bash syntax",
    liveDemo: ""
  },
];


// ==================== TECH STACK ====================
// Keep techStackImgs if you use it elsewhere, otherwise you can remove it
const techStackImgs = [
  // { name: "React Developer", imgPath: "/images/logos/react.png" }, // Removed
  { name: "Flutter Developer", imgPath: "/images/logos/flutter.png" }, // Added Flutter img placeholder
  { name: "Figma Designer", imgPath: "/images/logos/figma.png" }, // Added Figma img placeholder
  { name: "Supabase Developer", imgPath: "/images/logos/supabase.png" }, // Added Supabase img placeholder
  { name: "Python Developer", imgPath: "/images/logos/python.svg" },
  { name: "Git", imgPath: "/images/logos/git.svg" },
  // { name: "Project Manager", imgPath: "/images/logos/git.svg" }, // Removed
];

// --- MODIFIED THIS ARRAY ---
const techStackIcons = [
  {
    name: "Flutter",
    // ⚠️ REPLACE with your actual Flutter .glb file path
    modelPath: "/models/Flutter.glb",
    scale: 26, // Adjust as needed
    rotation: [0, 0, 0], // Adjust as needed
  },
  {
    name: "Python", // Keeping Python
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Figma",
    modelPath: "/models/figma.glb", // Make sure this is your actual path
    scale: 1.5, // Adjust as needed
    // --- TRY ADJUSTING THIS ---
    // Tilt it slightly on the X-axis (e.g., 15-30 degrees)
    rotation: [Math.PI / 2, 0, 0], // Try values like Math.PI / 12 or Math.PI / 6
    // --- --------------------
  },
  {
    name: "Git", // Keeping Three.js/Interactive
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, 0.05, 0],
  },
  {
    name: "Supabase",
    // ⚠️ REPLACE with your actual Supabase .glb file path
    modelPath: "/models/supabase.glb",
    scale: 0.04, // Adjust as needed
    rotation: [0, 0, 0], // Adjust as needed
  },
  // Removed React, Node.js (Backend), Git (Project Manager)
  {
    name: "React",
    // ⚠️ REPLACE with your actual Supabase .glb file path
    modelPath: "/models/react2.glb",
    scale: 0.04, // Adjust as needed
    rotation: [0, 0, 0], // Adjust as needed
  },
  {
    name: "Node.js",
    // ⚠️ REPLACE with your actual Supabase .glb file path
    modelPath: "/models/nodejs.glb",
    scale: 0.04, // Adjust as needed
    rotation: [0, 0, 0], // Adjust as needed
  },
  {
    name: "Mongodb",
    // ⚠️ REPLACE with your actual Supabase .glb file path
    modelPath: "/models/mongodb.glb",
    scale: 0.04, // Adjust as needed
    rotation: [0, 0, 0], // Adjust as needed
  },
  {
    name: "Javascript",
    // ⚠️ REPLACE with your actual Supabase .glb file path
    modelPath: "/models/javascript.glb",
    scale: 0.04, // Adjust as needed
    rotation: [0, 0, 0], // Adjust as needed
  },
  
  
];


// ==================== EXPERIENCE ====================
const expCards = [
  {
    review:
      "Akshay consistently demonstrated strong problem-solving and communication skills. His ability to quickly understand technical issues and provide clear, effective support greatly improved our customer satisfaction scores.",
    imgPath: "/images/reallogo.png",
    logoPath: "/images/reallogo.png",
    title: "Customer Support Associate (Technical Support)",
    date: "June 2025 - Oct 2025",
    responsibilities: [
      "Assisted users with technical troubleshooting and guided them through product features.",
      "Collaborated with the dev team to report and document bugs for future updates.",
      "Built strong product understanding and communication skills applicable to technical roles",
    ],
  },
  
  
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

// ==================== CERTIFICATIONS ====================
// --- Removed 'export' from here ---
const certifications = [
  {
    imagePath: "/images/and.cer.png", // Path to the big cert image
    issuerImgPath: "/images/cour.png", // Path to the small logo
    title: "Android App Development",
    issuer: "Coursera",
  },
  {
    imagePath: "/images/uxuicer.png",
    issuerImgPath: "/images/beep.png",
    title: "Ux/Ui Certificate",
    issuer: "Beep",
  },
   {
    imagePath: "/images/aws.png",
    issuerImgPath: "/images/forage.png",
    title: "AWS APAC Solutions Architecture",
    issuer: "Forage",
  },
  {
    imagePath: "/images/javas.png",
    issuerImgPath: "/images/hackr.png",
    title: "Javascript Certificate",
    issuer: "Hackrank",
  },
  {
    imagePath: "/images/ai.png",
    issuerImgPath: "/images/up.png",
    title: "Introduction to Generative AI Certificate",
    issuer: "Upgrad",
  },
  // ... add as many more as you like
];

// ==================== SOCIAL IMAGES ====================
// constants.js

 const socialImgs = [
  {
    name: "instagram",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/ok_akshay_/",
  },
  {
    name: "facebook",
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/profile.php?id=100083653186007",
  },
  {
    name: "x",
    imgPath: "/images/git.svg",
    url: "https://github.com/akshaypatra00",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/akshaypatra/",
  },
];


// ==================== FINAL EXPORT ====================
export {
  words,
  abilities,
  
  // counterItems removed
  expCards,
  expLogos,
  certifications,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
};
