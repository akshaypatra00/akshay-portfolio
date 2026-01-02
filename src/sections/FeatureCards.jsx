import React from "react";
import { motion } from "framer-motion";
import CanvasRevealEffect from "../components/CanvasRevealEffect"; // Make sure this path is correct

const FeatureCards = () => {
  const abilities = [
    {
      phase: "PHASE 1",
      title: "Planning & Strategy",
      desc: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
    },
    {
      phase: "PHASE 2",
      title: "Design & Development",
      desc: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
    },
    {
      phase: "PHASE 3",
      title: "Testing & Launch",
      desc: "This is where the magic happens! I conduct thorough testing, squash bugs, and ensure everything runs smoothly before the big launch.",
    },
  ];

  const cardStyles = [
    {
      stroke: "#01BCB7",
      gradient: "linear-gradient(to bottom right, #003A38, #001413)",
      matrix: "rgba(1, 188, 183, 0.05)",
      animGradient: "linear-gradient(90deg, #01BCB7, #003A38, #01BCB7)",
    },
    {
      stroke: "#811341",
      gradient: "linear-gradient(to bottom right, #3B091E, #16030A)",
      matrix: "rgba(129, 19, 65, 0.05)",
      animGradient: "linear-gradient(90deg, #811341, #3B091E, #811341)",
    },
    {
      stroke: "#0478BA",
      gradient: "linear-gradient(to bottom right, #02314D, #011C2D)",
      matrix: "rgba(4, 120, 186, 0.05)",
      animGradient: "linear-gradient(90deg, #0478BA, #02314D, #0478BA)",
    },
  ];

  return (
    <section
      id="approach"
      className="relative w-full py-20 flex flex-col items-center bg-gradient-to-b from-[#000000] to-[#000000]"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
        My <span className="text-[#D9ECFF]">Approach</span>
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-7xl w-full">
        {abilities.map((item, index) => {
          const style = cardStyles[index % cardStyles.length];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[420px] cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative h-full bg-[#101013] border border-[#000319] rounded-3xl overflow-hidden">
                {/* Canvas Reveal Effect */}
                <CanvasRevealEffect
                  strokeColor={style.stroke}
                  radius={24}
                />

                {/* Background (only visible on hover) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                        ${style.gradient},
                        repeating-linear-gradient(0deg, transparent, transparent 2px, ${style.matrix} 2px, ${style.matrix} 4px),
                        repeating-linear-gradient(90deg, transparent, transparent 2px, ${style.matrix} 2px, ${style.matrix} 4px)
                      `,
                    }}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
                  {/* --- MODIFIED THIS BLOCK --- */}
                  {/* Default State: Just Phase Button */}
                  <div className="group-hover:hidden flex items-center justify-center h-full">
                    <div
                      className="px-8 py-3 rounded-full border-2" // Removed anim-gradient-border, added border-2
                      style={{
                        borderColor: style.stroke, // Set border color directly
                      }}
                    >
                      <h3
                        className="text-base uppercase tracking-wider font-semibold" // Removed anim-gradient-text
                        style={{
                          color: "#D9ECFF", // Set text color directly
                        }}
                      >
                        {item.phase}
                      </h3>
                    </div>
                  </div>
                  {/* --- END OF MODIFIED BLOCK --- */}

                  {/* Hover State: Full Content */}
                  <div className="hidden group-hover:flex flex-col items-center justify-center h-full opacity-0 group-hover:opacity-100 transition-all duration-700">
                    {/* Phase Label */}
                    <h3
                      className="text-sm uppercase tracking-wider font-semibold mb-4"
                      style={{ color: style.stroke }}
                    >
                      {item.phase}
                    </h3>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                      {item.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300 text-base leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureCards;