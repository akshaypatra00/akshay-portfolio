import { memo, lazy, Suspense } from "react";
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import AboutSection from "./sections/AboutSection";
import FeatureCards from "./sections/FeatureCards";
import RecentProjects from "./components/RecentProjects";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";


const LazyTestimonials = lazy(() => import("./sections/Certifications"));

const App = memo(() => (
  <AppContent />
));

App.displayName = "App";

export default App;
