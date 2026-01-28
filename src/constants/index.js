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
    id: 4,
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
  },
  {
    id: 2,
    title: "Zeyro – UI/UX Prototype",
    des: "A conceptual mobile application prototype designed as part of a UI/UX assignment for Zeyro.",
    img: "/images/zeyro.png",
    iconLists: ["/images/figma.svg", "/images/adobe.svg"],
    figma:
      "https://www.figma.com/proto/2T55QucOVE4tePvuzBTJRJ/Zeyro-app-prototype?node-id=0-1&t=FdakCHOXjjG6RG9U-1",
    type: "design",
  },
  {
    id: 3,
    title: "Custom Unix Shell – CLI Execution Demo",
    des: "Terminal output showcasing command parsing and process execution implemented as part of a systems programming challenge.",
    img: "/images/shell.png",
    iconLists: ["/images/python.svg", "/images/git2.svg", "/images/git.svg"],
    github: "https://github.com/akshaypatra00/buildyourownShell",
    type: "development",
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
    date: "June 2025 - Present",
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
