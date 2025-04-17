import React, { useRef, useState, useEffect } from "react";
import "../App.css";
import { FaPlay, FaPause } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import videoSource from "../assets/Video2.mp4";
import Logo from "../assets/Logo4.svg";

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

  const handleVideoEnd = () => {
    setIsPlaying(false); // show Play button and reveal content
  };

  // Fix mobile viewport height issues
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);
    return () => window.removeEventListener("resize", setViewportHeight);
  }, []);

  return (
    <div id="hero" className="relative w-full overflow-hidden h-[70vh] md:h-screen">
      {/* Video Background */}
      <video
        ref={videoRef}
        className={`absolute top-7 left-0 bottom-[500px] w-full h-full object-fill md:object-cover z-30 transition-opacity duration-700 ${
          isPlaying ? "opacity-80" : "opacity-30"
        }`}
        
        src={videoSource}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      />

      {/* Watermark blocker (small screens) */}
      <div className="absolute bottom-0 right-0 w-20 h-10 bg-black z-40 md:hidden">
        <img src={Logo} alt="Logo" className="z-50 w-full h-full object-contain" />
      </div>

      {/* Foreground Content - Show only when not playing */}
      <AnimatePresence>
  {!isPlaying && (
    <motion.div
      className={`absolute inset-0 ${
        !isPlaying ? "z-50" : "z-30"
      } flex flex-col justify-center items-start px-6 text-[#fb5c2c]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 className="text-5xl md:text-6xl font-extrabold border-b-4 border-gray-500 w-fit mb-4">
        HYDRATECH
      </motion.h1>
      <motion.h2 className="text-2xl md:text-3xl font-bold mb-4">
        HOMELAND SECURITY
      </motion.h2>
      <motion.p className="text-lg md:text-xl text-neutral-300 font-semibold max-w-xl">
        Secure networks. <br />
        Smarter business. <br />
        Let us protect what matters most —{" "}
        <span className="text-black font-bold md:text-2xl bg-[#fb5c2c] md:px-2 rounded">
          your data
        </span>
      </motion.p>
    </motion.div>
  )}
</AnimatePresence>


      {/* Play/Pause Button */}
      <button
        onClick={handlePlayPause}
        className="absolute bottom-6 right-6 bg-[#3c3c3b] hover:bg-[#4b4b4b] text-[#5b5b5a] p-3 rounded-full shadow-lg transition duration-300 z-50"
      >
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>
    </div>
  );
}

export default Hero;
