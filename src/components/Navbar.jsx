import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

function Navbar({ closeMenu }) {
  const handleLinkClick = () => {
    closeMenu();
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", to: "about", offset: 250 },
    { label: "Projects", to: "portfolio", offset: -120 },
    { label: "Services", to: "services", offset: -290 },
    { label: "Careers", to: "careers", offset: -310 },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center font-semibold text-xl py-8 sm:py-0 sm:text-base sm:mt-0 sm:mr-11 gap-y-5 sm:gap-y-0">
      <nav>
        <ul className="flex flex-col sm:flex-row flex-wrap z-20 sm:justify-center justify-end sm:gap-x-4 gap-x-2 gap-y-5 sm:gap-y-0">
          {navItems.map(({ label, to, offset }) => (
            <li
              key={label}
              className="group relative cursor-pointer text-[#585858]"
            >
              <ScrollLink
                to={to}
                spy={true}
                smooth={true}
                offset={offset}
                duration={200}
                onClick={handleLinkClick}
                className="hover:scale-105 transition-transform duration-300"
              >
                {label}
              </ScrollLink>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#585858] transition-all duration-300 group-hover:w-full" />
            </li>
          ))}

          {/* Contact Button */}
          <li className="relative group overflow-hidden rounded-sm bg-neutral-400">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-310}
              duration={200}
              onClick={handleLinkClick}
              className="relative z-10 text-[#181818] px-3 py-1 cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              Contact
            </ScrollLink>

            {/* Animated overlay with scroll-based background */}
            <div
              className={`absolute inset-0 z-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out ${
                isScrolled ? "bg-[#f4f5f6]" : "bg-[#fb5c2c]"
              }`}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
