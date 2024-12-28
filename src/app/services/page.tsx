"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Search,
  Smartphone,
  PenTool,
  Layout,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Lightbulb,
    title: "Visual Design",
    description:
      "Create stunning visual designs that capture attention and communicate your message effectively.",
    details:
      "Using industry-leading tools and techniques, I craft visually appealing designs that align with your brand identity and resonate with your target audience.",
  },
  {
    icon: Smartphone,
    title: "Design Prototype",
    description:
      "Build interactive prototypes that bring your ideas to life and test user experiences.",
    details:
      "I create high-fidelity prototypes that simulate the final product, allowing for thorough user testing and refinement before development begins.",
  },
  {
    icon: Search,
    title: "UX Research",
    description:
      "Conduct thorough research to understand your users and create optimal experiences.",
    details:
      "Through user interviews, surveys, and data analysis, I gather insights to inform design decisions and ensure your product meets user needs and expectations.",
  },
  {
    icon: PenTool,
    title: "Brand Identity",
    description:
      "Develop cohesive brand identities that set you apart from the competition.",
    details:
      "I create comprehensive brand guidelines, including logo design, color palettes, typography, and visual elements that reflect your company's values and personality.",
  },
  {
    icon: Layout,
    title: "Responsive Web Design",
    description:
      "Design websites that look great and function flawlessly on all devices.",
    details:
      "Using modern CSS techniques and frameworks, I ensure your website provides an optimal viewing experience across desktops, tablets, and mobile devices.",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Transform designs into pixel-perfect, performant web applications.",
    details:
      "With expertise in HTML, CSS, and JavaScript, I bring designs to life with clean, efficient code that prioritizes performance and accessibility.",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Why Hire Me For Your Next{" "}
            <span className="text-[#65B741]">Project</span>?
          </h2>
          <p className="text-gray-600">
            I specialize in creating stunning digital experiences that help
            businesses grow and succeed in the modern digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
              onClick={() =>
                setActiveService(activeService === index ? null : index)
              }
            >
              <div className="w-12 h-12 bg-[#65B741]/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-[#65B741]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeService === index ? "auto" : 0,
                  opacity: activeService === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-sm text-gray-500 mb-4">{service.details}</p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
