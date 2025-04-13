import React from "react";
import { motion } from "framer-motion";
import { Code, Brush, Rocket } from "lucide-react";

const services = [
  {
    title: "IP / Network CCTV System",
    description: `We provide end-to-end CCTV solutions — from initial consultation and site survey to system design, installation, and post-installation maintenance. Our IP-based systems ensure high-resolution monitoring with remote access and seamless integration.`,
    icon: <img src="https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-e-sm shadow-md shadow-orange-500 w-2/3 h-1/3 md:w-full text-lime-600" />,
    bgColor: "bg-indigo-50",
  },
  {
    title: "Surveillance System",
    description: `Our advanced surveillance systems provide real-time monitoring, smart analytics, and threat detection capabilities. Ideal for securing critical infrastructures, corporate facilities, and public spaces.`,
    icon: <img src="https://images.unsplash.com/photo-1609234153285-78b715b9dfd7?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-e-sm shadow-md shadow-orange-500 w-2/3 h-1/3 md:w-full text-lime-600" />,
    bgColor: "bg-pink-50",
  },
  {
    title: "Gate Security & Inspection System",
    description: `We deploy gate security systems that include license plate recognition, under-vehicle surveillance, boom barriers, biometric access, and facial recognition to manage and secure entry points.`,
    icon: <img src="https://images.unsplash.com/photo-1569784210445-990e7e44ccfe?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-e-sm shadow-md shadow-orange-500 w-2/3 h-1/3 md:w-full text-lime-600" />,
    bgColor: "bg-green-50",
  },
  {
    title: "Technical Support Management",
    description: `Our expert support team offers 24/7 assistance, remote diagnostics, system updates, and maintenance to keep your infrastructure running smoothly with minimal downtime.`,
    icon: <img src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-e-sm shadow-md shadow-orange-500 w-2/3 h-1/3 md:w-full text-lime-600" />,
    bgColor: "bg-blue-50",
  },
  {
    title: "Border & Coastal Surveillance",
    description: `We design and implement integrated border and coastal surveillance systems with radar, thermal cameras, drones, and command centers to monitor and defend critical borders and marine zones.`,
    icon: <img src="https://images.unsplash.com/photo-1626449569473-462035785765?q=80&w=2648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-e-sm shadow-md shadow-orange-500 w-2/3 h-1/3 md:w-full text-lime-600" />,
    bgColor: "bg-neutral-50",
  },
  {
    title: "Audio & Visual Solutions",
    description: `From digital signage to video conferencing and public address systems, we provide immersive AV solutions designed for enterprise-level communication and collaboration.`,
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

export default function Services() {
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
