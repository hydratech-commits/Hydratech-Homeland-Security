import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../assets/hydratech.png";
import useTheme from "../context/theme";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { themeMode } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const handleLinkClick = () => closeMenu();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseBg = themeMode === "dark" ? "bg-neutral-700" : "bg-[#fb5c2c]";
  const baseText = "text-white";

  const scrolledBg = "bg-white shadow-md";
  const scrolledText = "text-neutral-900";

  const navBg = isScrolled ? scrolledBg : baseBg;
  const navText = isScrolled ? scrolledText : baseText;

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${navBg} ${navText} flex justify-between items-center mx-auto px-4 py-6 sticky top-0 w-full z-50`}
    >
      {/* Logo */}
      <div className="w-32 sm:w-40 cursor-pointer">
        <ScrollLink
          to="hero"
          spy={true}
          smooth={true}
          offset={-250}
          duration={200}
          onClick={handleLinkClick}
        >
          <img
            src={Logo}
            alt="Logo"
            className={`shadow-md w-96 sm:w-96 rounded-sm ${
              isScrolled
                ? "bg-[#fb5c2c] shadow-[#fb5c2c] "
                : "bg-white shadow-neutral-400 "
            }`}
          />
        </ScrollLink>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex">
        <Navbar closeMenu={closeMenu} />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        <button onClick={toggleMenu}>
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className={`text-3xl ${
              isScrolled ? "text-[#fb5c2c]" : "text-white"
            }`}
          />
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-neutral-900/95 text-white flex flex-col items-center justify-center gap-10 text-xl z-40">
          <Navbar closeMenu={closeMenu} />
        </div>
      )}
    </div>
  );
}

export default Header;
