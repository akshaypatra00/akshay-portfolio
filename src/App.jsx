import { memo, lazy, Suspense } from "react";
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import AboutSection from "./sections/AboutSection";
import FeatureCards from "./sections/FeatureCards";
import RecentProjects from "./components/RecentProjects";
import Experience from "./sections/Experience";
import TechStac
    <AboutSection />
    <FeatureCards />
    <RecentProjects />
    <Experience />
    <TechStack />
    <Suspense fallback={<div className="h-64" />}>
      <Testimonials />
    </Suspense>
    <Contact />
    <Footer />
  </>
);

const App = memo(() => (
  <AppContent />
));

App.displayName = "App";

export default App;
