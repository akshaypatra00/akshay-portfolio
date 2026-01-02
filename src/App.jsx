import Testimonials from "./sections/Certifications";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/AboutSection";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import AboutSection from "./sections/AboutSection";
import CanvasRevealEffect from "./components/CanvasRevealEffect";
import { PinContainer } from "./components/ui/pin";
import RecentProjects from "./components/RecentProjects";


const App = () => (
  <>
    <Navbar />
    <Hero />
    <AboutSection />
    <FeatureCards />
    <RecentProjects/>
    <Experience />
    <TechStack />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default App;
