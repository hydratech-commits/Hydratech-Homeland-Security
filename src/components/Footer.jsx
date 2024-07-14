import React from "react";
import { Link as ScrollLink } from "react-scroll";
function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4 mt-44 border-t border-lime-400 w-full">
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Codebykhalid. All Rights Reserved.
      </p>
      <span className="hidden sm:block fixed left-0 bottom-32 bg-lime-400 text-black font-bold sm:px-8 p-1  cursor-pointer  hover:shadow-lime-300  shadow-md sm:text-lg transform transition-colors skew-x-12 skew-y-12 rotate-90 ">
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
        >
          Hire me!
        </ScrollLink>
      </span>
      <ScrollLink
        to="hero"
        spy={true}
        smooth={true}
        offset={-70}
        duration={200}
        className="text-lime-400 text-3xl hover:text-4xl cursor-pointer"
      >
        ▲
      </ScrollLink>
    </footer>
  );
}

export default Footer;
