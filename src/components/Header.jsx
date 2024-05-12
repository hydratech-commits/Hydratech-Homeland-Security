import React, { useState } from "react";
import Navbar from "./Navbar";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Khalid from "../assets/khalids.png";
function Header() {
  // Use array destructuring to extract the state variable and the setter function
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center mx-auto px-2 sm:px-4 sm:py-8 py-6 sticky top-0 w-full z-50 bg-black border-b sm:border-none border-gray-300 ">
        <div className=" font-bold text-xl sm:text-3xl text-gray-400 animate-pulse transition-all duration-200 ">
          <span className="fixed top-5">
            <span className=" bg-lime-400 p-1 rounded-full text-2xl sm:text-4xl font-semibold text-gray-500 ">
              Kh
            </span>
            alid
          </span>
        </div>
        <div className="hidden md:flex">
          {/* Pass isOpen state variable to Navbar */}
          <Navbar isOpen={isOpen} />
        </div>
        <div className="md:hidden">
          {/* Toggle button for mobile */}
          <button onClick={toggleNavbar}>
            {/* Render Menu icon if isOpen is false, otherwise render X icon */}
            {isOpen ? (
              <FontAwesomeIcon
                icon={faTimes}
                className="absolute right-2 top-5 text-3xl text-lime-400"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className=" text-2xl text-lime-400"
              />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="flex flex-wrap basis-full  justify-center items-center h-fit">
            <Navbar />
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
