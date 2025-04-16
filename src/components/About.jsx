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
      icon: <FaServer className="text-[#fb5c2c] text-2xl animate-bounce" />,
      text: "IT and power infrastructure",
    },
    {
      icon: <FaProjectDiagram className="text-[#fb5c2c] text-2xl animate-spin-slow" />,
      text: "Project management",
    },
    {
      icon: <FaShieldAlt className="text-[#fb5c2c] text-2xl animate-pulse" />,
      text: "Critical security infrastructure",
    },
    {
      icon: <FaCogs className="text-[#fb5c2c] text-2xl animate-gear" />,
      text: "System integration",
    },
    {
      icon: <FaLaptopCode className="text-[#fb5c2c] text-2xl animate-pulse" />,
      text: "Software and hardware solutions",
    },
    {
      icon: <FaTruck className="text-[#fb5c2c] text-2xl animate-bounce" />,
      text: "Integrated logistics solutions",
    },
    {
      icon: <FaTools className="text-[#fb5c2c] text-2xl animate-spin-slow" />,
      text: "Maintenance",
    },
  ];

  return (
    <div
      id="about"
      className={`relative flex flex-col justify-start transition-colors duration-500 sm:py-12 py-20 overflow-hidden z-10 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200"
          : "bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800"
      }`}
    >
      <Reveal>
        <div className="relative mx-4 sm:mx-8 mt-6 mb-12 border-l-[10px] border-t-[10px] border-[#fb5c2c] rounded-xl p-10 bg-white/30 backdrop-blur-lg shadow-[0_0_40px_#fb5c2c40]">
          <h1 className="text-5xl sm:text-7xl font-black text-[#fb5c2c] mb-6 tracking-widest animate-text-glow uppercase">
            HydraTech
          </h1>
          <p className="text-xl leading-loose font-light">
            HydraTech is a dynamic and innovative company delivering advanced
            security and technology solutions. We&apos;ve partnered with
            <strong className=" font-bold"> ETIMAD Holding</strong>, a UAE-based conglomerate
            specializing in Homeland Security, operating through 11 subsidiaries
            offering:
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg font-medium">
            {services.map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 bg-white/10 px-4 py-3 rounded-xl shadow hover:scale-105 transition-transform">
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xl">
            This collaboration enables HydraTech to leverage <strong className=" font-bold"> ETIMAD&apos;s </strong> 
            technologies, enhancing our capabilities in delivering top-tier
            security systems. Oversight from one of <strong className=" font-bold"> ETIMAD&apos;s </strong> General Managers
            ensures operational excellence and innovation, reinforcing our role
            as a leader in the industry.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex flex-col sm:flex-row justify-center items-center w-full px-6 sm:px-0 mt-10">
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-wider w-full sm:w-auto text-[#fb5c2c] mb-4 sm:mb-0 animate-slide-in">
            Who We Are
          </h2>
          <div className="flex-grow h-1 bg-gradient-to-r from-[#adb3bd] to-transparent sm:ml-6 mt-4 sm:mt-0 rounded-full" />
        </div>
      </Reveal>

      <div className="mt-16 space-y-20">
        {attributes.map(({ title, image, description, flip }) => (
          <Reveal key={title}>
            <div
              className={`flex flex-col ${
                flip ? "sm:flex-row-reverse" : "sm:flex-row"
              } items-center gap-10 sm:gap-16 px-6 sm:px-16 animate-fade-in-up`}
            >
              <div className="w-full sm:w-1/3 overflow-hidden rounded-3xl shadow-2xl shadow-[#fb5c2c99] transform hover:scale-105 transition-transform duration-500">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-6 max-w-2xl">
                <span className="font-bold py-4 px-6 text-2xl sm:text-4xl rounded-[35px_2px_70px_15px] bg-neutral-400/70 text-[#fb5c2c] border-b-4 border-[#fb5c2c] shadow-lg">
                  We Are {title}
                </span>
                <p className="text-lg leading-relaxed text-justify text-gray-700 dark:text-gray-200">
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
