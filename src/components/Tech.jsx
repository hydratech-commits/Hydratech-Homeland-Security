import React from "react";
import { motion } from "framer-motion";
import { Code, Brush, Rocket } from "lucide-react";

const services = [
  {
title: "IP / NETWORK CCTV SYSTEM",
    description: `INITIAL CONSULTATION AND SITE SURVEY:
Understand client requirements and assess the site.
SYSTEM DESIGN AND PLANNING: Create a tailored CCTV system plan.
PROPOSAL AND APPROVAL: Present the plan to the client for approval.
SUPPLY AND PROCUREMENT: Source and procure the necessary equipment.
INSTALLATION: Install the CCTV system as per the approved design.
CONFIGURATION AND OPTIMIZATION: Fine-tune the system for optimal performance.
HANDOVER AND DOCUMENTATION: Officially hand over the completed system to the client.
POST-INSTALLATION SUPPORT AND MAINTENANCE: Ensure ongoing support and maintenance.`,
    icon: <img src="https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-e-sm shadow-md shadow-orange-500 w-2/3 h-1/3 md:w-full text-lime-600"/>,
    bgColor: "bg-indigo-50",
  },
  {
    title: " SURVEILLANCE SYSTEM",
    description:
      "Beautiful and intuitive designs focused on seamless user experiences across all platforms.",
    icon: <img src="https://images.unsplash.com/photo-1609234153285-78b715b9dfd7?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-e-sm shadow-md shadow-orange-500 w-2/3 h-1/3 md:w-full text-lime-600" />,
    bgColor: "bg-pink-50",
  },
  {
    title: " GATE SECURITY AND INSPECTION SYSTEM",
    description:
      "Data-driven marketing strategies to amplify your brand and connect with your audience.",
    icon: <img src="https://images.unsplash.com/photo-1569784210445-990e7e44ccfe?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-e-sm shadow-md shadow-orange-500 w-2/3 h-1/3 md:w-full text-lime-600" />,
    bgColor: "bg-green-50",
  },{
    title: "  TECHNICAL SUPPORT MANAGEMENT",
    description:
      "Data-driven marketing strategies to amplify your brand and connect with your audience.",
    icon: <img src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-e-sm shadow-md shadow-orange-500 w-2/3 h-1/3 md:w-full text-lime-600"/>,
    bgColor: "bg-blue-50",
  },{
    title: "  BORDER & COASTAL SURVEILLANCE",
    description:
      "Data-driven marketing strategies to amplify your brand and connect with your audience.",
    icon: <img src="https://images.unsplash.com/photo-1626449569473-462035785765?q=80&w=2648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-e-sm shadow-md shadow-orange-500 w-2/3 h-1/3 md:w-full text-lime-600"/>,
    bgColor: "bg-neutral-50",
  },{
    title: "  AUDIO & VISUALSOLUTIONS",
    description:
      "Data-driven marketing strategies to amplify your brand and connect with your audience.",
    icon: <img src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-e-sm shadow-md shadow-orange-500 w-2/3 h-1/3 md:w-full text-lime-600" />,
    bgColor: "bg-orange-50",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function AdvancedCompanyServices() {
  return (
    <section id="services" className="bg-  py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-300 mb-4">
          What We Offer
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          High-impact services to elevate your business
        </p>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${service.bgColor}`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
