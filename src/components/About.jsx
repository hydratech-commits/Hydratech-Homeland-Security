import React from "react";
import Reveal from "./Reveal";
import useTheme from "../context/theme";

function About() {
  const { themeMode } = useTheme();
  return (
    <div
      id="about"
      className={`flex flex-col justify-start sm:py-9 py-20 ${
        themeMode === "dark"
          ? "bg-[#4c4c54] text-[#adb3bd]"
          : "bg-[#adb3bd] text-[#4c4c54]"
      }`}
    >
      <Reveal>
        <div className=" mt-6 mb-12 border-x-4 border-x-[#fb5c2c] border-t-8 border-t-[#fb5c2c] py-7 mx-2 sm:mx-5 text-neutral-900 flex flex-col justify-center items-start px-8  sm:px-28 w-5/6">
          {" "}
          <span className=" text-[#fb5c2c] font-extrabold text-2xl sm:text-5xl border-t-2   border-t-[#747c7c]">
            HydraTech
          </span>{" "}
          is a dynamic and innovative company dedicated to delivering advanced
          security and technology solutions. With a commitment to excellence,
          HydraTech has recently forged a strategic partnership with ETIMAD
          Holding, a leading UAE-based conglomerate specializing in Homeland
          Security solutions. Headquartered in the UAE, Etimad Holding operates
          through 11 subsidiaries, each a leader in its respective field,
          offering expertise in:
          <ol className=" font-bold text-xl list-disc">
            <li>IT and power infrastructure</li>
            <li>Project management</li>
            <li>Critical security infrastructure</li>
            <li>System integration</li>
            <li>Software and hardware solutions</li>
            <li>Integrated logistics solutions</li>
            <li>Maintenance</li>
          </ol>
          This partnership empowers HydraTech by integrating ETIMAD’s
          cutting-edge technologies and capabilities, enhancing our expertise in
          security solutions. To ensure a seamless transfer of knowledge and
          operational excellence, Etimad has appointed one of its General
          Managers to oversee HydraTech’s operations. Through our collaboration
          with Etimad, HydraTech is positioned as a trusted leader in security
          and technology solutions, driving innovation and safeguarding critical
          infrastructure across the UAE and beyond. For more information on our
          expertise and solutions, connect with us today.
        </div>
      </Reveal>
      <Reveal>
        <div className="flex flex-col sm:flex-row justify-center items-center w-full px-6 sm:px-0">
          <h2 className="text-2xl sm:text-5xl font-bold w-full sm:w-auto sm:ml-40 mb-4 sm:mb-0 text-[#4c4c54]">
            WHO WE ARE
            <span className="text-4xl sm:text-5xl font-extrabold text-orange-600">
              .
            </span>
          </h2>
          <hr className="w-full border border-[#6e7275] sm:mr-8 mt-2 sm:mt-9" />
        </div>
      </Reveal>

      <div className="mt-5 space-y-10">
        <Reveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 sm:gap-x-7 sm:p-12 px-6 text-sm md:text-base font-semibold text-[#4c4c54]">
            <span className="font-bold p-4 sm:p-8 text-2xl sm:text-4xl border-b-2 rounded-[35px_2px_70px_15px] bg-[#adb3bd] border-b-orange-500">
              WE ARE PROFESSIONAL
            </span>
            <p>
              <span className="font-bold border-b-2 rounded-[35px_2px_70px_15px] px-1 border-b-[#6e7275] text-lg text-orange-600">
                HydraTech
              </span>{" "}
              is a leading provider of advanced technology solutions,
              specializing in Homeland Security and Power Systems. We deliver
              cutting-edge surveillance systems, critical infrastructure
              protection, and integrated solutions that enhance national
              security and industrial efficiency.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 sm:gap-x-7 sm:p-12 px-6 text-sm md:text-base font-semibold text-[#4c4c54]">
            <span className="font-bold p-4 sm:p-8 text-2xl sm:text-4xl border-b-2 rounded-[35px_2px_70px_15px] bg-[#adb3bd] border-b-orange-500">
              WE ARE CREATIVE
            </span>
            <p>
              Our mission is to provide innovative, turnkey solutions that
              address the complex challenges of national security. From design
              to deployment, HydraTech delivers fully integrated systems
              tailored to meet unique operational needs.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 sm:gap-x-7 sm:p-12 px-6 text-sm md:text-base font-semibold text-[#4c4c54]">
            <span className="font-bold p-4 sm:p-8 text-2xl sm:text-4xl border-b-2 rounded-[35px_2px_70px_15px] bg-[#adb3bd] border-b-orange-500">
              WE ARE TALENTED
            </span>
            <p>
              At{" "}
              <span className="font-bold border-b-2 rounded-[35px_2px_70px_15px] px-1 border-b-[#6e7275] text-lg text-orange-600">
                HydraTech
              </span>
              , our strength lies in our people. Our expert team brings deep
              industry knowledge, precision, and innovation to every project.
              Whether in Homeland Security or Power Systems (LV & HV), we are
              driven by a passion to create impactful solutions that power
              nations and protect communities.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default About;
