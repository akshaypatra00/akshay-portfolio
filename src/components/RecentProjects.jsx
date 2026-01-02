"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "../constants";
import { PinContainer } from "./ui/pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="work">
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        A small selection of{" "}
        <span className="text-[#D9ECFF]">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => {
          const projectLink =
            item.type === "development" ? item.github : item.figma;

          return (
            <div
              key={item.id}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <PinContainer title={item.title} href={projectLink}>
                {/* Image Section */}
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#000000" }}
                  />
                  <img
                    src={item.img}
                    alt={item.title}
                    className="z-10 absolute bottom-0"
                  />
                </div>

                {/* Title */}
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                {/* Description */}
                <p
                  className="lg:text-xl font-light text-sm line-clamp-2"
                  style={{ color: "#BEC1DD", margin: "1vh 0" }}
                >
                  {item.des}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-7 mb-3">
                  {/* Tech Icons */}
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="tech-icon" className="p-2" />
                      </div>
                    ))}
                  </div>

                  {/* Correct Button */}
                  <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple hover:underline"
                  >
                    <span className="lg:text-xl md:text-xs text-sm">
                      {item.type === "development"
                        ? "View Code"
                        : "View Prototype"}
                    </span>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;
