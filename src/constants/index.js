// constants/index.js

// ==================== NAV LINKS ====================
export const navLinks = [
  { name: "About", link: "#about" },
  { name: "Project", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Certification", link: "#certifications" },
];

// ==================== WORDS ====================
export const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

// ==================== ABILITIES ====================
export const abilities = [
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

// ==================== PROJECTS ====================
export const projects = [
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
export const techStackImgs = [
  { name: "Flutter Developer", imgPath: "/images/logos/flutter.png" },
  { name: "Figma Designer", imgPath: "/images/logos/figma.png" },
  { name: "Supabase Developer", imgPath: "/images/logos/supabase.png" },
  { name: "Python Developer", imgPath: "/images/logos/python.svg" },
  { name: "Git", imgPath: "/images/logos/git.svg" },
];

export const techStackIcons = [
  {
    name: "Flutter",
    modelPath: "/models/Flutter.glb",
    scale: 26,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Figma",
    modelPath: "/models/figma.glb",
    scale: 1.5,
    rotation: [Math.PI / 2, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, 0.05, 0],
  },
  {
    name: "Supabase",
    modelPath: "/models/supabase.glb",
    scale: 0.04,
    rotation: [0, 0, 0],
  },
  {
    name: "React",
    modelPath: "/models/react2.glb",
    scale: 0.04,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/nodejs.glb",
    scale: 0.04,
    rotation: [0, 0, 0],
  },
  {
    name: "Mongodb",
    modelPath: "/models/mongodb.glb",
    scale: 0.04,
    rotation: [0, 0, 0],
  },
  {
    name: "Javascript",
    modelPath: "/models/javascript.glb",
    scale: 0.04,
    rotation: [0, 0, 0],
  },
];

// ==================== EXPERIENCE ====================
export const expCards = [
  {
    review: "Akshay consistently demonstrated strong problem-solving and communication skills. His ability to quickly understand technical issues and provide clear, effective support greatly improved our customer satisfaction scores.",
    imgPath: "/images/reallogo.png",
    logoPath: "/images/reallogo.png",
    title: "Customer Support Associate (Technical Support)",
    date: "June 2025 - Present",
    responsibilities: [
      "Assisted users with technical troubleshooting and guided them through product features.",
      "Collaborated with the dev team to report and document bugs for future updates.",
      "Built strong product understanding and communication skills applicable to technical roles",
    ],
  },
];

export const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

// ==================== CERTIFICATIONS ====================
export const certifications = [
  {
    imagePath: "/images/and.cer.png",
    issuerImgPath: "/images/cour.png",
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
];

// ==================== SOCIAL IMAGES ====================
export const socialImgs = [
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
