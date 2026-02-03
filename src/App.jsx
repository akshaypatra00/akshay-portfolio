import { memo, lazy, Suspense } from "react";
import Navbar from "./components/NavBar";
import Hero from "./sections/Hero";
import AboutSection from "./sections/AboutSection";
impo

const LazyTestimonials = lazy(() => import("./sections/Certifications"));

const AppContent = () => (
  <>
    <Navbar />
    <Hero />
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
