import React from "react";
import { Link as ScrollLink } from "react-scroll";
function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4 mt-44 border-t border-lime-400 w-full">
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Codebykhalid. All Rights Reserved.
      </p>
      <span className="fixed left-0 bottom-32 bg-lime-400 text-black font-bold sm:px-8 p-1  cursor-pointer  hover:shadow-lime-300  shadow-md sm:text-lg transform transition-colors skew-x-12 skew-y-12 rotate-90 ">
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Hire me!
        </ScrollLink>
      </span>
    </footer>
  );
}

export default Footer;
