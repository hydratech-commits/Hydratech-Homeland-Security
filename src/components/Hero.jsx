import React, { useState, useEffect } from "react";
import HeroPic from "../assets/HeroPic.jpg";
import "../App.css";

function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [shouldRenderCircles, setShouldRenderCircles] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setShouldRenderCircles(window.innerWidth > 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const circles = shouldRenderCircles
    ? Array.from({ length: 500 }, (_, index) => (
        <div
          key={index}
          className={`absolute opacity-50 rounded-full transition-all duration-100 z-0 hover:translate-y-14  animate-bounce  ${
            hoveredIndex === index ? "bg-gray-200 p-2" : " bg-lime-400"
          }`}
          style={{
            width: "15px",
            height: "15px",
            right: `${60 + (index % 10) * 25}px`, // Adjust position
            top: `${0 + Math.floor(index / 30) * 25}px`, // Adjust position
          }}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleHover(null)}
        ></div>
      ))
    : null;

  return (
    <div
      id="hero"
      className="relative bg-fixed bg-parl bg-cover bg-opacity-85 h-screen w-full"
    >
      {circles}
      <div className="flex flex-col sm:flex-row justify-center items-center md:p-3 mt-16 sm:mt-2 ">
        <div>
          <div className="m-auto px-4 py-10 flex flex-col gap-2 w-full z-20 ">
            <h1 className=" font-bold sm:text-4xl text-3xl z-30 animate-slidein [--slidein-delay:300ms] opacity-0">
              Hello, I&apos;m Khalid Shakeel,
            </h1>
            <h1 className="font-bold sm:text-4xl text-3xl bg-gradient-to-t from-lime-500 to-cyan-800 text-transparent bg-clip-text overflow-hidden animate-typing whitespace-nowrap z-30 ">
              frontend engineer
            </h1>
            <span className="mt-4 text-gray-300 text-base font-semibold z-20 animate-slidein [--slidein-delay:700ms] opacity-0">
              Welcome to my digital workshop, where frontend tech
              <br />
              bring ideas to life. With every line of code, I priortize <br />
              elegance, and effectiveness, crafting inspiring experiences.
            </span>
          </div>
        </div>

        <div className="relative mb-44  animate-slidein [--slidein-delay:300ms] opacity-0 ">
          <img
            src={HeroPic}
            alt=""
            className="rounded-full sm:h-36 sm:w-36 sm:mt-11 w-48 h-48 shadow-md shadow-cyan-300 border-2 border-slate-100 relative z-10 transform sm:hover:scale-110"
          />
          <span className="bg-gradient-to-br from-gray-400 to-lime-400 opacity-15 shadow-xl shadow-lime-300   rounded-full p-7 sm:h-32 sm:w-32 w-44 h-44 sm:mt-8 absolute left-10 bottom-3 z-0 hover:translate-x-2 "></span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
