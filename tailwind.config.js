import { animate, transform } from "framer-motion";
import Framer from "./src/assets/hero";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        parl: 'url("https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG5ldHdvcmslMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D")',
      },

      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s  ease var(--slidein-delay, 0) forwards",
        zoom: "zoom 10s ease-in-out infinite",
        scroll: "scroll 10s linear infinite",
      },
    },
  },
  plugins: [],
};
