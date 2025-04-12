import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import Reveal from "./Reveal";
import { FaPlay, FaPause } from "react-icons/fa";

function Hero() {
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId: "Q_p3pka81uc", // Your video ID
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          loop: 1,
          playlist: "Q_p3pka81uc",
          modestbranding: 1,
          showinfo: 0,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
            // Play the video for 5 seconds, then pause
            setTimeout(() => {
              playerRef.current.pauseVideo();
              setIsPlaying(false); // Update state to reflect pause
            }, 10000); // 5000ms = 5 seconds
          },
        },
      });
    };
  }, []);

  const handlePlayPause = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div id="yt-player" className="w-full h-full" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex  flex-col justify-center items-start h-full text-center text-[#fb5c2c] px-6">

        <div className="flex flex-col justify-center items-start w-fit">
        <Reveal>
          <h1 className="text-5xl md:text-6xl font-extrabold border-b-4 border-gray-500 w-fit">HYDRATECH</h1>
        </Reveal>
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold mt-4">
            HOMELAND SECURITY
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-lg md:text-xl mt-4">
            Secure networks. <br />
            Smarter business. <br />
            Let us protect what matters most —{" "}
            <span className="text-black font-bold md:text-2xl bg-white px-2 rounded">
              your data
            </span>
          </p>
        </Reveal>
        </div>
        {/* Icon-only Play/Pause Button */}
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
