import { animate, transform } from "framer-motion";
import Framer from "./src/assets/hero";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        parl: 'url("./assets/framer1.avif")',
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
