"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const bioData = {
    name: "Hery",
    role: "Front End Developer",
    location: "Bali, Gianyar, Sukawati",
    email: "brampunyacerita@gmail.com",
    whatsapp: "081999392230",
  };

  const experiences = [
    {
      title: "Senior Product Designer",
      company: "TechInnovate Solutions",
      period: "2022 - Present",
      description:
        "Lead designer for multiple high-profile projects, focusing on user-centered design principles and innovative UI/UX solutions.",
    },
    {
      title: "UI/UX Designer",
      company: "DigitalCraft Agency",
      period: "2020 - 2022",
      description:
        "Collaborated with cross-functional teams to design and implement user interfaces for web and mobile applications.",
    },
  ];

  const skills = [
    { name: "UI/UX Design", level: 90 },
    { name: "Web Design", level: 85 },
    // { name: "Mobile App Design", level: 80 },
    // { name: "Product Design", level: 88 },
    // { name: "Brand Identity", level: 82 },
    // { name: "Design System", level: 85 },
  ];

  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate Product Designer with a keen eye for detail and a drive
            for creating intuitive, user-centered digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Image and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="bg-green-500 absolute inset-0 translate-x-4 translate-y-4 rounded-lg" />
              <div className="relative z-10 border-4 border-black rounded-lg overflow-hidden">
                <Image
                  src="/h1.jpg"
                  alt={bioData.name}
                  width={500}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">{bioData.name}</h3>
              <p className="text-green-500 font-medium mb-4">{bioData.role}</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">Location:</span>
                  <span>{bioData.location}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">Email:</span>
                  <a
                    href={`mailto:${bioData.email}`}
                    className="hover:text-green-500"
                  >
                    {bioData.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gray-600">Whatsapp:</span>
                  <a
                    href={`tel:${bioData.whatsapp}`}
                    className="hover:text-green-500"
                  >
                    {bioData.whatsapp}
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Experience and Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Experience</h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white p-4 rounded-lg shadow-md"
                  >
                    <h4 className="font-bold">{exp.title}</h4>
                    <p className="text-green-500">{exp.company}</p>
                    <p className="text-sm text-gray-600">{exp.period}</p>
                    <p className="mt-2">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="relative">
                    <div
                      className="flex justify-between items-center mb-2 cursor-pointer"
                      onClick={() =>
                        setActiveSection(
                          activeSection === skill.name ? null : skill.name
                        )
                      }
                    >
                      <span className="font-medium">{skill.name}</span>
                      <ChevronRight
                        className={`w-5 h-5 transition-transform ${
                          activeSection === skill.name ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                    <div className="bg-gray-200 rounded-full h-2 mb-4">
                      <motion.div
                        className="bg-green-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    </div>
                    <AnimatePresence>
                      {activeSection === skill.name && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-gray-600 mb-2"
                        >
                          Proficient in {skill.name} with extensive experience
                          in applying these skills to real-world projects and
                          challenges.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* <Button className="bg-green-500 hover:bg-green-600 text-white h-12 px-6 rounded-lg w-full sm:w-auto">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
