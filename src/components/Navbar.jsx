import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Resume from "../assets/latest.pdf";

function Navbar({ closeMenu }) {
  const handleLinkClick = () => {
    closeMenu(); // Close the menu when a link is clicked
  };

  return (
    <div className="">
      <nav>
        <ul className="flex flex-col sm:flex-row flex-wrap z-20 sm:justify-center justify-end sm:gap-x-4 gap-x-2 font-semibold sm:text-base mt-5 sm:mt-0  sm:mr-11 text-xl py-8 sm:py-0 gap-y-5 sm:gap-y-0">
          <li className="text-gray-400 hover:text-white hover:border-b-2 hover:border-lime-400 cursor-pointer">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={250}
              duration={200}
              onClick={handleLinkClick}
            >
              About
            </ScrollLink>
          </li>
          <li className="text-gray-400 hover:text-white hover:border-b-2 hover:border-lime-400 cursor-pointer">
            <ScrollLink
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-120}
              duration={200}
              onClick={handleLinkClick}
            >
              Portfolio
            </ScrollLink>
          </li>
          <li className="text-gray-400 hover:text-white hover:border-b-2 hover:border-lime-400 cursor-pointer">
            <ScrollLink
              to="technologies"
              spy={true}
              smooth={true}
              offset={-290}
              duration={200}
              onClick={handleLinkClick}
            >
              Technologies
            </ScrollLink>
          </li>
          <li className="text-gray-400 hover:text-white hover:border-b-2 hover:border-lime-400 cursor-pointer">
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              Resume
            </a>
          </li>
          <li className="text-gra y-400 hover:text-white  cursor-pointer border-lime-400 border-2 rounded-md px-3">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-310}
              duration={200}
              onClick={handleLinkClick}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
