"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { Code, Palette, Globe, Section } from "lucide-react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import Stats from "@/components/Stats";
import Services from "@/components/Service";
import Testimonials from "@/components/Testimoni";

const services = [
  {
    icon: <Code size={24} />,
    title: "Web Development",
    description:
      "Creating responsive and dynamic web applications using modern technologies.",
  },
  {
    icon: <Palette size={24} />,
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing user interfaces for optimal user experience.",
  },
  {
    icon: <Globe size={24} />,
    title: "Digital Marketing",
    description:
      "Implementing effective strategies to increase online presence and reach.",
  },
];

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack online shopping platform with user authentication and payment integration.",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website showcasing projects and skills.",
  },
  {
    title: "Task Management App",
    description:
      "A React-based application for efficient task organization and productivity tracking.",
  },
];

// const portfolioItems = [
// {
//   image: "/p1.png", // Gambar berada di dalam folder public/images
//   title: "Project 1",
//   description: "Web Design",
// },
// {
//   image: "/p2.png", // Gambar berada di dalam folder public/images
//   title: "Project 2",
//   description: "Mobile App",
// },
// {
//   image: "/p3.png", // Gambar berada di dalam folder public/images
//   title: "Project 3",
//   description: "Branding",
// },
// ];

const portfolioItems = [
  // {
  //   title: "Project 1",
  //   image: "/placeholder.svg?height=300&width=400",
  // },
  // {
  //   title: "Project 2",
  //   image: "/placeholder.svg?height=300&width=400",
  // },
  // {
  //   title: "Project 3",
  //   image: "/placeholder.svg?height=300&width=400",
  // },
  // {
  //   title: "Project 4",
  //   image: "/placeholder.svg?height=300&width=400",
  // },
  // {
  //   title: "Project 5",
  //   image: "/placeholder.svg?height=300&width=400",
  // },
  {
    image: "/p1.png", // Gambar berada di dalam folder public/images
    title: "Project 1",
    description: "Web Design",
  },
  {
    image: "/p2.png", // Gambar berada di dalam folder public/images
    title: "Project 2",
    description: "Mobile App",
  },
  {
    image: "/p3.png", // Gambar berada di dalam folder public/images
    title: "Project 3",
    description: "Branding",
  },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <main className="">
        <section>
          <Hero />
        </section>
        <section>
          <Stats />
        </section>
        <section>
          <Services />
        </section>
        <section className="bg-gray-50 py-20">
          {/* Portfolio Showcase */}
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                My Creative Works Latest{" "}
                <span className="text-green-500">Projects</span>
              </h2>
              <p className="text-gray-600">
                Check out some of my latest projects and creative works that
                showcase my expertise in design and development.
              </p>
            </div>
          </motion.h3>
          <section className="max-w-6xl mx-auto">
            <PortfolioCarousel items={portfolioItems} />
          </section>
        </section>

        <section>
          <Testimonials />
        </section>

        <section>
          <Contact />
        </section>
      </main>
    </div>
  );
}
