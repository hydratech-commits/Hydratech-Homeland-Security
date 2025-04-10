import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Resume from "../assets/latest.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import ThemeBtn from "./ThemeBtn";

function Navbar({ closeMenu }) {
  const handleLinkClick = () => {
    closeMenu(); // Close the menu when a link is
  };

  return (
    <div className="">
      <nav>
        <ul className="flex flex-col sm:flex-row flex-wrap z-20 sm:justify-center justify-end sm:gap-x-4 gap-x-2 font-semibold sm:text-base mt-5 sm:mt-0  sm:mr-11 text-xl py-8 sm:py-0 gap-y-5 sm:gap-y-0 [&_li]:text-neutral-600">
          <li className=" hover:text-neutral-400 text-orange-500 hover:scale-105 cursor-pointer">
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
          <li className=" hover:text-neutral-400 text-orange-500 hover:scale-105 cursor-pointer">
            <ScrollLink
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-120}
              duration={200}
              onClick={handleLinkClick}
            >
              Projects
            </ScrollLink>
          </li>
          <li className=" hover:text-neutral-400 text-orange-500 hover:scale-105 cursor-pointer">
            <ScrollLink
              to="technologies"
              spy={true}
              smooth={true}
              offset={-290}
              duration={200}
              onClick={handleLinkClick}
            >
              Services
            </ScrollLink>
          </li>
          <li className=" hover:text-neutral-400 text-orange-500 hover:scale-105 cursor-pointer">
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              Testimonials
            </a>
          </li>
          <li className=" hover:text-neutral-400 text-orange-500  cursor-pointer  rounded-md px-3">
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
          </li>{" "}
        </ul>
        <div className="flex justify-center items-center gap-x-4 text-2xl w-full text-neutral-600 ">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-400 text-orange-500 hover:scale-105"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-400 text-orange-500 hover:scale-105"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-400 text-orange-500 hover:scale-105"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
