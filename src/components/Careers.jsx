import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaServer,
  FaUserSecret,
  FaArrowRight,
} from "react-icons/fa";

const jobListings = [
  {
    title: "Network Engineer",
    icon: <FaServer className="text-3xl text-[#fb5c2c]" />,
    location: "On-site - Manama, Bahrain",
    type: "Full-time",
    description:
      "Design, implement, and maintain network infrastructure, ensuring optimal performance, security, and reliability. Troubleshoot and resolve network issues in a timely manner.",
    skills: [
      "Routing & Switching",
      "Cisco",
      "Network Architecture",
      "Firewall Management",
      "VPNs",
    ],
  },
  {
    title: "IT Technician",
    icon: <FaShieldAlt className="text-3xl text-[#fb5c2c]" />,
    location: "On-site - Manama, Bahrain",
    type: "Full-time",
    description:
      "Provide technical support for hardware, software, and network issues. Assist in troubleshooting and repairing technical equipment, ensuring that IT systems run smoothly and efficiently.",
    skills: [
      "Hardware Troubleshooting",
      "Windows Server",
      "Active Directory",
      "Networking",
      "Helpdesk Support",
    ],
  },
  {
    title: "Network Security Engineer",
    icon: <FaUserSecret className="text-3xl text-[#fb5c2c]" />,
    location: "Remote / Manama, Bahrain",
    type: "Full-time",
    description:
      "Focus on protecting network infrastructure and systems by implementing security measures like firewalls, VPNs, and intrusion detection systems (IDS). Monitor network traffic for potential vulnerabilities.",
    skills: [
      "Firewalls",
      "Intrusion Detection",
      "VPNs",
      "SIEM Tools",
      "Network Security Policies",
    ],
  },
  {
    title: "System Administrator",
    icon: <FaServer className="text-3xl text-[#fb5c2c]" />,
    location: "On-site - Manama, Bahrain",
    type: "Full-time",
    description:
      "Manage and maintain IT systems, including servers and networks. Implement, troubleshoot, and monitor hardware and software to ensure system security and reliability.",
    skills: [
      "Linux/Unix",
      "Network Administration",
      "Virtualization",
      "Windows Server",
      "Cloud Infrastructure",
    ],
  },
  {
    title: "Cloud Network Architect",
    icon: <FaShieldAlt className="text-3xl text-[#fb5c2c]" />,
    location: "Remote",
    type: "Full-time",
    description:
      "Design and manage cloud-based network infrastructure. Architect solutions for scalability, security, and optimal performance in cloud environments.",
    skills: [
      "Cloud Networking",
      "AWS",
      "Azure",
      "Network Security",
      "Automation",
    ],
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
          We&apos;re hiring talented professionals to help secure the future of
          IT and Network Security.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {jobListings.map((job, index) => {
          const mailtoLink = `mailto:info@hydratech.bh?subject=Application for ${encodeURIComponent(
            job.title
          )}&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in the ${
            job.title
          } position (${
            job.location
          }). Please find my resume attached.%0D%0A%0D%0AThank you,%0D%0A[Your Name]`;

          return (
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
              <p className="text-sm text-gray-500 mb-2">
                {job.location} · {job.type}
              </p>
              <p className="text-sm text-gray-700 mb-3">{job.description}</p>

              <ul className="flex flex-wrap gap-2 mb-4">
                {job.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="bg-[#fb5c2c] text-white text-xs px-2 py-1 rounded-full"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              <a
                href={mailtoLink}
                className="mt-auto flex items-center gap-2 text-neutral-800 bg-green-400 p-2 rounded-sm font-semibold group-hover:underline"
              >
                Apply Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Careers;
