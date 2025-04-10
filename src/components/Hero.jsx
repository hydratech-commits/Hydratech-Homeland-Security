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
      className="relative opacity-70 bg-fixed bg-parl bg-cover bg-opacity-85 animation-slideIn animate-zoom   h-screen w-full md:px-20"
    >
      {/* {circles} */}
      <div className="flex flex-col sm:flex-row  justify-between w-full items-center md:p-3 md:pt-11 pt-40 sm:mt-1">
        <div className="m-auto  md:mt-10 px-4 md:py-10 flex flex-col gap-2 w-full">
          <Reveal>
            <div className="flex flex-col gap-2">
            <h1 className="font-extrabold   md:text-6xl text-6xl w-fit p-2 rounded-sm bg-orange-500 animate-slidein [--slidein-delay:300ms] opacity-0 ">
            HYDRATECH
             
            </h1>
            <h1 className="font-bold md:text-3xl w-fit p-2 rounded-sm text-orange-500 bg-neutral-200 text-3xl verflow-hidden ">
              HOMELAND SECURITY
            </h1></div>
          </Reveal>
          <Reveal>
            <span className=" text-neutral-200/95  font-semibold animate-slidein [--slidein-delay:700ms] md:text-xl">
           




<span className=" sm:text-5xl text-neutral-50 ">Secure networks. <br /> Smarter business. <br />
Let us protect what matters most — <span className=" sm:text-6xl text-orange-500 border-t-2 border-x-8 border-orange-500"> your data </span></span>
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
