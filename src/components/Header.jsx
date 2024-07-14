import React, { useState } from "react";
import Navbar from "./Navbar";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as ScrollLink } from "react-scroll";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const handleLinkClick = () => {
    closeMenu(); // Close the menu when a link is clicked
  };
  return (
    <div className="flex justify-between items-center mx-auto px-2 sm:px-4 sm:py-8 py-6 sticky top-0 w-full z-50 bg-black border-b sm:border-none border-gray-300 ">
      <div className="font-bold text-xl sm:text-3xl text-gray-400 cursor-pointer transition-all duration-200 ">
        <ScrollLink
          to="hero"
          spy={true}
          smooth={true}
          offset={-250}
          duration={200}
          onClick={handleLinkClick}
        >
          <span className="fixed top-5">
            <span className="bg-lime-400 p-1 rounded-full text-2xl sm:text-4xl font-semibold text-gray-500">
              Kh
            </span>
            alid
          </span>
        </ScrollLink>
      </div>
      <div className="hidden md:flex">
        <Navbar closeMenu={closeMenu} />
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FontAwesomeIcon
              icon={faTimes}
              className="absolute right-2 top-5 text-3xl text-lime-400"
            />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-2xl text-lime-400" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-wrap basis-full items-center h-fit">
          <Navbar closeMenu={closeMenu} />
        </div>
      )}
    </div>
  );
}

export default Header;
