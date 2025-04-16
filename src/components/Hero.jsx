import React, { useRef, useState } from "react";
import "../App.css";
import Reveal from "./Reveal";
import { FaPlay, FaPause } from "react-icons/fa";
import videoSource from "../assets/video.mp4"; // Adjust path if needed

function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Local Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-10 mt-[-20%]"
        src={videoSource}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 flex py-10 sm:py-0  flex-col justify-start sm:justify-center items-start h-full text-center text-[#fb5c2c] md:px-6">
        <div className="flex flex-col bg-neutral-400 opacity-65 sm:bg-transparent  justify-center items-start w-fit z-40">
          <Reveal>
            <h1 className="text-5xl md:text-6xl font-extrabold border-b-4 border-gray-500 w-fit">HYDRATECH</h1>
          </Reveal>
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mt-4">
              HOMELAND SECURITY
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-lg md:text-xl mt-4 text-neutral-900 sm:text-neutral-300 font-semibold">
              Secure networks. <br />
              Smarter business. <br />
              Let us protect what matters most —{" "}
              <span className="text-black font-bold md:text-2xl bg-[#fb5c2c] md:px-2 rounded">
                your data
              </span>
            </p>
          </Reveal>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          className="absolute bottom-6 right-6 bg-[#3c3c3b] hover:bg-[#4b4b4b] text-[#5b5b5a] p-3 rounded-full shadow-lg transition duration-300 z-20"
        >
          {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>
      </div>
    </div>
  );
}

export default Hero;
