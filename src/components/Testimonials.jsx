import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import {
  UserCircle2,
  Laptop2,
  PenTool,
  Rocket,
  Brain,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const testimonials = [
  {
    icon: <Laptop2 className="w-12 h-12 text-[#fb5c2c]" />,
    title:
      "The team went above and beyond to ensure my issue was resolved quickly and efficiently. Truly outstanding!",
    client: "Jessica Devis",
    clientInfo: "Full Stack Developer @Netflix",
  },
  {
    icon: <PenTool className="w-12 h-12 text-[#fb5c2c]" />,
    title:
      "It broadened my horizons and helped me advance my career. The community is incredibly supportive.",
    client: "Marcell Glock",
    clientInfo: "Graphic Designer @Coinbase",
  },
  {
    icon: <Rocket className="w-12 h-12 text-[#fb5c2c]" />,
    title:
      "Incredible service and innovative solutions. Our network is now more secure than ever before.",
    client: "Liam Carter",
    clientInfo: "CTO @HyperSecure",
  },
  {
    icon: <Brain className="w-12 h-12 text-[#fb5c2c]" />,
    title:
      "Reliable support and proactive communication. I trust them with our most sensitive infrastructure.",
    client: "Anita Fernandes",
    clientInfo: "Network Manager @DataGuard",
  },
  {
    icon: <UserCircle2 className="w-12 h-12 text-[#fb5c2c]" />,
    title:
      "We saw a 40% performance boost and massive drop in threats within a month of their deployment.",
    client: "Daniel Kwan",
    clientInfo: "Infrastructure Lead @TechNova",
  },
];

function TestimonialCard({ icon, title, client, clientInfo }) {
  return (
    <Card shadow={false} className="bg-gray-100/90 rounded-2xl p-6">
      <CardHeader color="transparent" floated={false} shadow={false}>
        <Typography color="blue-gray" className="mb-6 text-2xl font-bold">
          &quot;{title}&quot;
        </Typography>
      </CardHeader>
      <CardBody className="px-4 py-0 flex justify-between items-center">
        <div>
          <Typography variant="h6" color="blue-gray">
            {client}
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-neutral-900"
          >
            {clientInfo}
          </Typography>
        </div>
        <div>{icon}</div>
      </CardBody>
    </Card>
  );
}

export function TestimonialSection16() {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(testimonials.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  const paginatedTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section id="testimonials" className="px-8 py-10 lg:py-28">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Typography
            variant="h2"
            className="mb-4 !text-2xl lg:!text-4xl text-neutral-200 bg-[#fb5c2c] w-fit p-2 rounded-sm mx-auto font-bold"
          >
            The heartfelt testimonials of our community
          </Typography>
          <Typography
            variant="lead"
            className="max-w-3xl mx-auto !text-neutral-300"
          >
            From life-enhancing gadgets to unparalleled customer support, and
            transformative learning opportunities.
          </Typography>
        </div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {paginatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Arrow Pagination */}
        <div className="mt-10 flex justify-center items-center gap-6">
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="p-3 rounded-full bg-[#fb5c2c] text-white hover:bg-[#e24b1f] transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next"
            className="p-3 rounded-full bg-[#fb5c2c] text-white hover:bg-[#e24b1f] transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection16;
