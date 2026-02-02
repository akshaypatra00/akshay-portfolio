"use client";
import { useState, useRef, useEffect, memo } from "react";
import { FaLocationArrow, FaX } from "react-icons/fa6";
import { projects } from "../constants";

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalScrollRef = useRef(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflowY = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflowY = "auto";
  };

  useEffect(() => {
    const el = modalScrollRef.current;
    if (!el) return;

    // Wheel handler to prevent scrolling the body when at the edges
    const onWheel = (e) => {
      const delta = e.deltaY;
      if ((el.scrollTop === 0 && delta < 0) || (el.scrollHeight - el.clientHeight - el.scrollTop <= 1 && delta > 0)) {
        e.preventDefault();
      }
    };

    let startY = 0;
    const onTouchStart = (e) => {
      startY = e.touches ? e.touches[0].clientY : 0;
    };
    const onTouchMove = (e) => {
      const currentY = e.touches ? e.touches[0].clientY : 0;
      const deltaY = startY - currentY;
      if ((el.scrollTop === 0 && deltaY < 0) || (el.scrollHeight - el.clientHeight - el.scrollTop <= 1 && deltaY > 0)) {
        e.preventDefault();
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
    };
  }, [selectedProject]);

  return (
    <div className="py-20" id="work">
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        A small selection of <span className="text-[#D9ECFF]">recent projects</span>
      </h1>
      
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => {
          const projectLink = item.type === "development" ? item.github : item.figma;
          
          return (
            <div
              key={item.id}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] bg-transparent rounded-3xl p-6 border border-white/[.2]"
            >
              <div className="flex flex-col w-full">
                <div
                  className="relative flex items-center justify-center w-full overflow-hidden h-[20vh] lg:h-[30vh] mb-6 cursor-pointer transition-transform hover:scale-105 bg-black rounded-2xl"
                  onClick={() => openModal(item)}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h1
                  className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 cursor-pointer hover:text-[#D9ECFF] transition-colors mb-2"
                  onClick={() => openModal(item)}
                >
                  {item.title}
                </h1>

                <p className="lg:text-xl font-light text-sm line-clamp-2 text-[#BEC1DD] mb-4">
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => {
                      const offset = 5 * index + 2;
                      return (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{ transform: 'translateX(-' + offset + 'px)' }}
                        >
                          <img src={icon} alt="tech-icon" className="p-2" />
                        </div>
                      );
                    })}
                  </div>

                  <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple hover:underline"
                  >
                    <span className="lg:text-xl md:text-xs text-sm">
                      {item.type === "development" ? "View Code" : "View Prototype"}
                    </span>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <div
           className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            ref={modalScrollRef}
            className="bg-[#0a0a0a] border border-white/[.2] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
             <div className="px-6 pt-6 pb-6 md:px-8 md:pt-6 md:pb-8">
               {/* Sticky close button inside scrollable content */}
               <div className="sticky top-4 z-50 flex justify-end">
                 <button
                   onClick={closeModal}
                   className="bg-gray-300 hover:bg-black text-black hover:text-white rounded-full p-3 transition-all hover:rotate-90 duration-300 shadow-lg"
                   aria-label="Close modal"
                 >
                   <FaX className="text-current text-xl" />
                 </button>
               </div>
              <div className="w-full h-48 md:h-64 lg:h-96 bg-black rounded-2xl overflow-hidden mb-6">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#D9ECFF]">
                {selectedProject.title}
              </h2>

              <p className="text-base md:text-lg text-[#BEC1DD] mb-6 leading-relaxed">
                {selectedProject.des}
              </p>

              {selectedProject.problem && (
                <div className="mb-6 bg-gradient-to-r from-red-900/20 to-transparent p-4 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-2xl">🎯</span> Problem
                  </h3>
                  <p className="text-[#BEC1DD] leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>
              )}

              {selectedProject.solution && (
                <div className="mb-6 bg-gradient-to-r from-green-900/20 to-transparent p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-2xl">💡</span> Solution
                  </h3>
                  <p className="text-[#BEC1DD] leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              )}

              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">✨</span> Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-[#BEC1DD] flex items-start gap-3 leading-relaxed"
                      >
                        <span className="text-purple-400 mt-1 flex-shrink-0">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🛠️</span> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black w-12 h-12 flex justify-center items-center hover:scale-110 transition-transform"
                    >
                      <img src={icon} alt="tech-icon" className="p-2" />
                    </div>
                  ))}
                </div>
              </div>

              {selectedProject.metrics && (
                <div className="mb-6 bg-gradient-to-r from-blue-900/20 to-transparent p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-2xl">📊</span> Impact and Metrics
                  </h3>
                  <p className="text-[#BEC1DD] leading-relaxed">
                    {selectedProject.metrics}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={selectedProject.type === "development" ? selectedProject.github : selectedProject.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-white/[.2] bg-transparent text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-105"
                >
                  <span className="font-semibold">
                    {selectedProject.type === "development" ? "View Code" : "View Prototype"}
                  </span>
                  <FaLocationArrow />
                </a>

                {selectedProject.liveDemo && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-white/[.2] hover:bg-white/[.1] text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105"
                  >
                    <span className="font-semibold">Live Demo</span>
                    <FaLocationArrow />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(RecentProjects);
