import React from "react";
import Reveal from "./Reveal";
import useTheme from "../context/theme";

function About() {
  const { themeMode } = useTheme();
  return (
    <div
      id="about"
      className={`flex flex-col justify-start  sm:py-9 ${
        themeMode === "dark"
          ? "bg-neutral-800 text-neutral-300"
          : "bg-neutral-100 text-neutral-900"
      } py-28`}
    >
      <div className={`custom-shape-divider-bottom-1715279379 `}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Reveal>
        <div className="flex justify-center items-center w-full">
          <h2 className="text-3xl md:text-7xl text-neutral-900 font-bold sm:ml-40 ml-8  w-fit ">
            About
            <span className=" text-7xl font-extrabold text-lime-400">.</span>
          </h2>
          <hr className=" w-full border border-neutral-950 text-neutral-800 mr-8 mt-9" />
        </div>
      </Reveal>

      <div className="mt-3">
        <Reveal>
          <div className=" sm:p-12 px-6 sm:px-36 text-neutral-900/90 text-sm md:text-base font-semibold mb-8  ">
            <span>
              🎨 Frontend enthusiast with a knack for blending creativity with
              code. Specializing in ReactJS, Redux, JavaScript, Tailwind CSS,
              and more, I bring ideas to life through intuitive user interfaces
              and elegant designs. Let&apos;s collaborate and create something
              extraordinary together!
            </span>
          </div>
        </Reveal>

        <div className=" flex flex-col relative before:absolute before:top-2 before:left-0 before:bottom-0 before:w-2 before:bg-gray-600 before:rounded-full sm:ml-32 ml-1 ">
          <Reveal>
            <div className="sm:ml-4 ml-2 relative ">
              <h3 className=" font-bold absolute text-xl -left-20 translate-y-1">
                2024
              </h3>

              <h2 className="sm:text-2xl font-bold flex justify-start items-center">
                <span className="relative bg-blue-500 rounded-full h-4 w-4 block mx-2 sm:-left-7 -left-5 z-40"></span>
                Web Development Intern{" "}
                <span className="  sm:block sm:text-md text-xs font-semibold">
                  &nbsp; &nbsp;May 2024 - June 2024
                </span>
              </h2>
              <h3 className=" sm:text-xl font-semibold mb-2 ml-8">
                Codsoft Technologies
              </h3>
              <span className=" mx-auto px-8 py-3">
                Diving deep into the world of React development as an intern,
                eager to learn, grow, and contribute to cutting-edge projects
              </span>
            </div>
          </Reveal>
          <Reveal>
            <div className="sm:ml-4 ml-2 relative mt-5">
              <h3 className=" font-bold absolute text-xl -left-20">2024</h3>

              <h2 className="sm:text-2xl font-bold flex justify-start items-center">
                <span className="relative bg-blue-500 rounded-full h-4 w-4 block mx-2 sm:-left-7 -left-5"></span>
                Web Development Intern{" "}
                <span className=" sm:block sm:text-md text-xs font-semibold">
                  &nbsp; &nbsp;Apr 2024-May 2024
                </span>
              </h2>
              <h3 className=" sm:text-xl font-semibold mb-2 ml-8">
                Oasis Infobyte
              </h3>
              <span className="ml-8 mx-12">
                Successfully completed a dynamic web development internship,
                delivering three projects powered by React, Tailwind CSS, and
                advanced state management.
              </span>
            </div>
          </Reveal>
          <Reveal>
            <div className="sm:ml-4 ml-2 relative mt-5">
              <h3 className=" font-bold absolute text-xl -left-20">2021</h3>
              <h2 className="sm:text-2xl font-bold flex justify-start items-center">
                <span className="relative bg-blue-500 rounded-full h-4 w-4 block mx-2 sm:-left-7 -left-5"></span>
                B.tech (ECE){" "}
                <span className="sm:block sm:text-md text-xs font-semibold">
                  &nbsp; &nbsp;Aug 2017 - May 2021
                </span>
              </h2>
              <h3 className=" sm:text-xl font-semibold mb-2 ml-8">
                Punjab Technical University
              </h3>
              <span className=" ml-8 mx-12">
                Graduated from Punjab Technical University in Electronics &
                Communication Engineering.
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default About;
