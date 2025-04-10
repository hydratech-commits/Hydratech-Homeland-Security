import React, { useState } from "react";
import Navbar from "./Navbar";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as ScrollLink } from "react-scroll";

import Logo from "../assets/hydratech.png";
import useTheme from "../context/theme";
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
  const { themeMode } = useTheme();
  return (
    <div
      className={` ${
        themeMode === "dark" ? "bg-neutral-800 text-neutral-300" : "bg-neutral-800"
      } flex justify-between items-center mx-auto px-2 sm:px-4 sm:py-5 py-6 sticky top-0 w-full z-50  border-b sm:border-none border-gray-300 `}
    >
      <div className="W-12 font-bold text-SM sm:text-xl text-gray-400 cursor-pointer transition-all duration-200 ">
        <ScrollLink
          to="hero"
          spy={true}
          smooth={true}
          offset={-250}
          duration={200}
          onClick={handleLinkClick}
        >
          <img src={Logo} alt="" className=" bg-neutral-200 shadow-md shadow-orange-500 md:w-86 rounded-sm w-40"  />
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
              className="absolute right-2 top-5 text-3xl text-orange-400"
            />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-2xl text-orange-400" />
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
