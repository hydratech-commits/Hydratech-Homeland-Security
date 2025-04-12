import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaServer, FaUserSecret, FaArrowRight } from "react-icons/fa";

const jobListings = [
  {
    title: "Cybersecurity Analyst",
    icon: <FaShieldAlt className="text-3xl text-[#fb5c2c]" />,
    location: "Remote / On-site - New York, NY",
    type: "Full-time",
    description:
      "Monitor and protect our digital assets from cyber threats, analyze security incidents, and enforce organizational security policies.",
    skills: ["SIEM Tools", "Threat Detection", "Incident Response", "SOC"],
  },
  {
    title: "Network Security Engineer",
    icon: <FaServer className="text-3xl text-[#fb5c2c]" />,
    location: "On-site - San Francisco, CA",
    type: "Full-time",
    description:
      "Design and implement secure network infrastructure, including firewalls, VPNs, and intrusion prevention systems.",
    skills: ["Firewalls", "IDS/IPS", "Cisco", "Network Architecture"],
  },
  {
    title: "Ethical Hacker (Penetration Tester)",
    icon: <FaUserSecret className="text-3xl text-[#fb5c2c]" />,
    location: "Remote",
    type: "Contract / Freelance",
    description:
      "Conduct penetration testing, vulnerability assessments, and simulate real-world cyberattacks to expose weaknesses.",
    skills: ["Kali Linux", "Metasploit", "OWASP", "Burp Suite"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
  }),
};

function Careers() {
  return (
    <section
      id="careers"
      className="min-h-screen px-6 py-16 bg-[#f4f5f6] text-[#1a1a1a]"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-400 mb-4">
          Join Our Team
        </h2>
        <p className="text-lg md:text-xl text-gray-600">
          We're hiring talented professionals to help secure the future of IT and Network Security.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {jobListings.map((job, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl p-6 relative transition duration-300 overflow-hidden"
          >
            <div className="mb-4 flex items-center gap-4">
              {job.icon}
              <h3 className="text-xl font-bold">{job.title}</h3>
            </div>
            <p className="text-sm text-gray-500 mb-2">{job.location} · {job.type}</p>
            <p className="text-sm text-gray-700 mb-3">{job.description}</p>

            <ul className="flex flex-wrap gap-2 mb-4">
              {job.skills.map((skill, i) => (
                <li key={i} className="bg-[#fb5c2c] text-white text-xs px-2 py-1 rounded-full">
                  {skill}
                </li>
              ))}
            </ul>

            <button className="mt-auto flex items-center gap-2 text-neutral-800 bg-green-400 p-2 rounded-sm font-semibold group-hover:underline">
              Apply Now <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Careers;
