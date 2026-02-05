import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "../components/Button"; 

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
    });

    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8, x: -50 },
      { opacity: 1, scale: 1, x: 0, duration: 1, ease: "power3.out" }
    ).fromTo(
      textRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
      "-=0.5"
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-10 md:py-16 bg-[#000000] text-white"
    >
      {/* 👤 Image Section */}
      <div
        ref={imageRef}
        className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0"
      >
        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-[0_0_40px_#BFD8FF]">
          <img
            src="/images/propic.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      
      <div ref={textRef} className="w-full md:w-1/2 space-y-5 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#D9ECFF] border-b-2 border-[#D9ECFF] inline-block pb-2">
          About Me
        </h2>

        <p className="text-gray-300 leading-relaxed">
         I’m Akshay Kumar Patra, a MERN full-stack & Flutter developer from Odisha, India. I graduated in 2025 with a Bachelor’s degree in Computer Applications (BCA) from the Academy of Business Administration, where I built a strong foundation in software development and problem-solving.
          <br /><br />
          I specialize in building scalable web and mobile applications using the MERN stack and Flutter (Dart), focusing on clean architecture, performance, and maintainable code. From crafting intuitive frontends to integrating reliable backends, I enjoy working across the full development lifecycle.
          <br /><br />
          With skills in UI/UX design, I bring a design-driven approach to development—ensuring applications are not only functional but also visually polished and user-friendly. I’m also exploring AI-powered features to enhance user experiences and build smarter applications.
          <br /><br />
          My goal is to create impactful digital products that combine technology, usability, and thoughtful design.
         <br /><br />
          🎓 BCA – Computer Applications (2025)  
          <br />
            🛠 MERN Stack • Flutter • UI/UX Design  
            <br />
           📍 Odisha, India  

        </p>

        <div className="mt-4 flex md:justify-start justify-center">
          <Button
            text="Download CV"
            className="md:w-70 md:h-8 w-60 h-9 text-sm"
            
            downloadUrl="/Akshay_Patra_resume.pdf"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
