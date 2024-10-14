import { useState, useEffect } from "react";
import "../App.css";
import Reveal from "./Reveal";

function Hero() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [shouldRenderCircles, setShouldRenderCircles] = useState(
    window.innerWidth > 768
  );

  useEffect(() => {
    const handleResize = () => {
      setShouldRenderCircles(window.innerWidth > 768);
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
    ? Array.from({ length: 600 }, (_, index) => (
        <div
          key={index}
          className={`absolute opacity-50 cursor-crosshair rounded-full transition-all duration-100 ${
            hoveredIndex === index
              ? "bg-orange-500 p-3 text-center opacity-100"
              : "bg-gradient-to-b from-neutral-500 via-neutral-600 to-neutral-900"
          }`}
          style={{
            width: "10px",
            height: "10px",
            right: `${60 + (index % 20) * 25}px`,
            left: `${690 + (index % 20) * 25}px`,
            top: `${0 + Math.floor(index / 30) * 25}px`,
          }}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={() => handleHover(null)}
        />
      ))
    : null;

  return (
    <div
      id="hero"
      className="relative bg-fixed bg-parl bg-cover bg-opacity-85 animation-slideIn animate-zoom   h-screen w-full md:px-20"
    >
      {circles}
      <div className="flex flex-col sm:flex-row justify-between w-full items-center md:p-3 md:pt-11 mt-16 sm:mt-1">
        <div className="m-auto md:mt-10 px-4 md:py-10 flex flex-col gap-2 w-full">
          <Reveal>
            <h1 className="font-extrabold  md:text-9xl text-6xl text-neutral-300 animate-slidein [--slidein-delay:300ms] opacity-0">
              Hey, I&apos;m Khalid
              <span className="text-9xl font-extrabold text-lime-400">.</span>
            </h1>
            <h1 className="font-bold md:text-7xl text-3xl bg-gradient-to-t from-lime-500 to-cyan-800 text-transparent bg-clip-text overflow-hidden animate-typing whitespace-nowrap">
              Frontend Engineer
            </h1>
          </Reveal>
          <Reveal>
            <span className="mt-4 text-gray-300  font-semibold animate-slidein [--slidein-delay:700ms] opacity-0 md:text-xl">
              Welcome to my digital workshop, where frontend tech
              <br />
              brings ideas to life. With every line of code, I prioritize
              <br />
              elegance, and effectiveness, crafting inspiring experiences.
            </span>
          </Reveal>
        </div>
      </div>
      {/* <Reveal>
          <div className="relative mb-44 animate-slidein [--slidein-delay:300ms] opacity-0">
            <img
              src={HeroPic}
              alt="Hero"
              className="rounded-full sm:h-36 sm:w-36 sm:mt-11 md:mt-24 w-48 h-48 shadow-md shadow-cyan-300 border-2 border-slate-100 relative z-10 transform sm:hover:scale-110"
            />
            <span className="bg-gradient-to-br from-gray-400 to-lime-400 opacity-15 shadow-xl shadow-lime-300 rounded-full p-7 sm:h-32 sm:w-32 w-44 h-44 sm:mt-8 absolute left-10 bottom-3 z-0 hover:translate-x-2" />{" "}
          </div>
        </Reveal>*/}
    </div>
  );
}

export default Hero;
