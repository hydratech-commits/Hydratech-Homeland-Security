import React from "react";
import FirewallImg from "../assets/firewall.jpg";
import PacketSnifferImg from "../assets/hero.avif";
import SIEMImg from "../assets/firewall.jpg";
import VPNMonitorImg from "../assets/hero.avif";
import Reveal from "./Reveal";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="container mx-auto mt-12 sm:mt-16 sm:mb-16 px-5"
    >
      <Reveal>
        <div className="flex justify-center items-center w-full mb-6">
          <hr className="w-full border border-[#adb3bd] ml-8" />
          <h2 className="md:text-6xl text-3xl font-bold text-[#efe1e0] mr-8 w-fit">
          Projects
            <span className="text-6xl font-extrabold text-[#fb5c2c]">.</span>
          </h2>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-10">
        <Reveal>
          <ProjectCard
            image={FirewallImg}
            title="NextGen Firewall Configurator"
            description="An interactive web tool to simulate configuration and testing of modern firewalls (Palo Alto/Cisco ASA), allowing safe rule manipulation and threat zone visualization."
            live="https://firewall-sim.web.app"
            github="https://github.com/sourcebykhalid/firewall-configurator"
          />
          <ProjectCard
            image={PacketSnifferImg}
            title="Packet Sniffer Analyzer"
            description="A frontend interface built on top of a Python backend using Scapy to monitor and inspect live network traffic with protocol breakdown and threat flagging."
            live="https://packetsniffer.vercel.app"
            github="https://github.com/sourcebykhalid/packet-sniffer-ui"
          />
        </Reveal>
        <Reveal>
          <ProjectCard
            image={SIEMImg}
            title="SIEM Dashboard (Mock)"
            description="A simulated SIEM dashboard showcasing real-time logs, threat detection, and network anomalies with mock data to visualize monitoring operations."
            live="https://siemdash.netlify.app"
            github="https://github.com/sourcebykhalid/siem-dashboard"
          />
          <ProjectCard
            image={VPNMonitorImg}
            title="VPN Tunnel Monitor"
            description="Tracks active VPN sessions and geolocation routes to detect unexpected traffic paths or session anomalies. Built with React and mocked security data."
            live="https://vpnmonitor.vercel.app"
            github="https://github.com/sourcebykhalid/vpn-monitor"
          />
        </Reveal>
      </div>
    </div>
  );
}

function ProjectCard({ image, title, description, live, github }) {
  return (
    <div className="hover:border hover:border-[#fb5c2c] bg-[#060606] hover:shadow-lg duration-500 rounded-lg p-5">
      <div className="bg-[#adb3bd] p-8 pb-0 rounded-md overflow-hidden">
        <img
          src={image}
          alt={title}
          className="hover:rotate-3 transition duration-300"
        />
      </div>
      <h3 className="text-xl mt-4 font-bold text-[#efe1e0]">{title}</h3>
      <p className="text-[#bcbccc] text-sm mt-2">{description}</p>
      <div className="flex justify-evenly mt-6">
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-[#fb5c2c] text-white font-semibold rounded-full hover:opacity-80 transition"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
