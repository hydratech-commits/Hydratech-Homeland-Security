import React from "react";
import "../App.css";
import Reveal from "./Reveal";
import HeroPic from "../assets/hero-image.png"; // Adjust path if needed

function Hero() {
  return (
    <div id="hero" className="h-screen w-full flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="flex-1 bg-[#fb5c2c] flex items-center justify-center ">
        <div className="text-white max-w-xl ">
          <Reveal className=" bg-black">
            <h1 className="text-5xl md:text-6xl font-extrabold">HYDRATECH</h1>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold">
              HOMELAND SECURITY
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-lg md:text-xl">
              Secure networks. <br />
              Smarter business. <br />
              Let us protect what matters most —{" "}
              <span className="text-black font-bold bg-white px-2 rounded">
                your data
              </span>
            </p>
          </Reveal>
        </div>
      </div>

      {/* Right Section */}

      <div className="flex-1 bg-neutral-900 flex items-center justify-center">
        <img src={HeroPic} alt="Hero" className="w-full h-full  shadow-2xl " />
      </div>
    </div>
  );
}

export default Hero;
