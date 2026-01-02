import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/Button";
import { words } from "../constants";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  // --- ADDED THIS FUNCTION ---
  const handleScroll = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };
  // -------------------------

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* --- GRID.SVG --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img 
          src="/images/grid.svg" // Make sure this path is correct
          alt="grid background" 
          className="w-full h-full object-cover opacity-60" 
        />
      </div>

      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      {/* CENTERED Content */}
      <div className="flex justify-center items-center relative z-10 min-h-screen px-5">
        <div className="max-w-[89vw] md:max-w-5xl lg:max-w-6xl flex flex-col items-center justify-center">
          
          <div className="hero-text text-center">
            {/* Line 1: Shaping [word] - LARGEST */}
            <h1 className="text-center text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-bold leading-tight pr-[3cm] sm:pr-16 md:pr-20 lg:pr-60">
              Shaping{" "}
              <span className="slide inline-block align-middle">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center justify-center md:gap-3 gap-3"
                    >
                      <img
                        src={word.imgPath}
                        alt="icon"
                        className="xl:size-11 md:size-9 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            
            {/* Line 2: into Real Projects - SMALLER */}
            <h1 className="text-center text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              into Real Projects that Deliver Results
            </h1>
            
          </div>

          <p className="text-white-50 md:text-xl text-lg text-center relative z-10 mt-10 max-w-2xl">
            Hi, I’m Akshay — a MERN full-stack & Flutter developer who designs and builds performant web and mobile apps with clean UI and thoughtful user experiences.
          </p>

          <div className="mt-10 flex justify-center">
            <Button
              text="SEE MY WORK"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
              onClick={handleScroll} // --- ADDED ONCLICK PROP ---
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;