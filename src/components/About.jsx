import React from "react";
import Reveal from "./Reveal";
import useTheme from "../context/theme";
import ProfessionalImg from "../assets/professional.jpg";
import CreativeImg from "../assets/creative.jpg";
import TalentedImg from "../assets/talented.jpg";
import {
  FaServer,
  FaProjectDiagram,
  FaShieldAlt,
  FaCogs,
  FaLaptopCode,
  FaTruck,
  FaTools,
} from "react-icons/fa";

function About() {
  const { themeMode } = useTheme();
  const isDark = themeMode === "dark";

  const attributes = [
    {
      title: "PROFESSIONAL",
      image: ProfessionalImg,
      description: (
        <>
          <span className="font-bold text-[#fb5c2c]">HydraTech</span> is a
          leading provider of advanced technology solutions, specializing in
          Homeland Security and Power Systems. We deliver surveillance systems,
          critical infrastructure protection, and integrated solutions that
          enhance national security.
        </>
      ),
    },
    {
      title: "CREATIVE",
      image: CreativeImg,
      flip: true,
      description: (
        <>
          Our mission is to offer turnkey, innovative solutions for complex
          security challenges. From design to deployment, HydraTech delivers
          customized systems tailored to mission-specific needs.
        </>
      ),
    },
    {
      title: "TALENTED",
      image: TalentedImg,
      description: (
        <>
          At <span className="font-bold text-[#fb5c2c]">HydraTech</span>, our
          strength is our people. Our team brings industry expertise and
          innovation to projects spanning Homeland Security and Power Systems,
          delivering solutions that protect and empower.
        </>
      ),
    },
  ];

  const services = [
    {
      icon: <FaServer className="text-[#fb5c2c]" />,
      text: "IT and power infrastructure",
    },
    {
      icon: <FaProjectDiagram className="text-[#fb5c2c]" />,
      text: "Project management",
    },
    {
      icon: <FaShieldAlt className="text-[#fb5c2c]" />,
      text: "Critical security infrastructure",
    },
    { icon: <FaCogs className="text-[#fb5c2c]" />, text: "System integration" },
    {
      icon: <FaLaptopCode className="text-[#fb5c2c]" />,
      text: "Software and hardware solutions",
    },
    {
      icon: <FaTruck className="text-[#fb5c2c]" />,
      text: "Integrated logistics solutions",
    },
    { icon: <FaTools className="text-[#fb5c2c]" />, text: "Maintenance" },
  ];

  return (
    <div
      id="about"
      className={`flex flex-col justify-start transition-colors duration-500 sm:py-12 py-20 ${
        isDark
          ? "bg-gradient-to-b from-gray-800 to-gray-900 text-gray-200"
          : "bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800"
      }`}
    >
      <Reveal>
        <div className="relative mt-6 mb-12 border-l-8 border-t-8 border-[#fb5c2c] rounded-xl py-10 px-6 sm:px-16 mx-4 sm:mx-8 bg-white/10 backdrop-blur-md shadow-xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#fb5c2c] mb-4 border-b-4 border-gray-500 inline-block">
            HydraTech
          </h1>
          <p className="text-lg leading-relaxed">
            HydraTech is a dynamic and innovative company dedicated to
            delivering advanced security and technology solutions. We&apos;ve
            recently partnered with <strong>ETIMAD Holding</strong>, a UAE-based
            conglomerate specializing in Homeland Security. Etimad operates
            through 11 subsidiaries offering:
          </p>
          <ul className="ml-6 mt-4 space-y-2 text-base font-medium">
            {services.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                {item.icon} {item.text}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-lg">
            This collaboration enables HydraTech to leverage ETIMAD&apos;s
            technologies, enhancing our capabilities in delivering top-tier
            security systems. With oversight from one of Etimad&apos;s General
            Managers, we ensure operational excellence and innovation,
            reinforcing our role as a leader in the industry.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex flex-col sm:flex-row justify-center items-center w-full px-6 sm:px-0 mt-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight w-full sm:w-auto text-[#fb5c2c] mb-2 sm:mb-0">
            WHO WE ARE
          </h2>
          <div className="flex-grow h-1 bg-gradient-to-r from-[#adb3bd] to-transparent sm:ml-6 mt-4 sm:mt-0" />
        </div>
      </Reveal>

      <div className="mt-10 space-y-12">
        {attributes.map(({ title, image, description, flip }) => (
          <Reveal key={title}>
            <div
              className={`flex flex-col ${
                flip ? "sm:flex-row-reverse" : "sm:flex-row"
              } items-center gap-8 sm:gap-12 sm:px-16 px-6 text-sm md:text-base font-semibold`}
            >
              <img
                src={image}
                alt={title}
                className="w-full sm:w-1/3 rounded-2xl shadow-md  shadow-[#fb5c2c] object-cover"
              />
              <div className="flex flex-col gap-4">
                <span className="font-bold py-4 px-6 text-2xl sm:text-4xl rounded-[35px_2px_70px_15px] bg-neutral-400/70 text-[#fb5c2c] border-b-4 border-[#fb5c2c] shadow-md">
                  WE ARE {title}
                </span>
                <p className="text-lg leading-relaxed text-justify">
                  {description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default About;
