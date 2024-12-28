"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Essential UI Design Principles",
    excerpt:
      "Learn the fundamental principles that will elevate your UI design skills.",
    category: "UI Design",
    date: "June 15, 2023",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "The Future of UX: Emerging Trends",
    excerpt:
      "Explore the cutting-edge trends shaping the future of user experience design.",
    category: "UX Design",
    date: "May 28, 2023",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Mastering Color Theory in Web Design",
    excerpt:
      "Dive deep into color theory and learn how to create stunning color palettes.",
    category: "Web Design",
    date: "April 10, 2023",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Responsive Design Best Practices",
    excerpt:
      "Discover the key techniques for creating seamless responsive designs.",
    category: "Responsive Design",
    date: "March 5, 2023",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "The Art of Minimalist Design",
    excerpt:
      "Learn how to create impactful designs using minimalist principles.",
    category: "Design Principles",
    date: "February 18, 2023",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Accessibility in Modern Web Applications",
    excerpt:
      "Explore techniques to make your web applications more accessible to all users.",
    category: "Accessibility",
    date: "January 22, 2023",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
];

const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50" id="blog">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my latest thoughts, insights, and tips on design, UX, and
            web development.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-700 hover:bg-green-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div className="relative">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 hover:text-[#65B741] transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-[#65B741] hover:underline text-sm font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              {hoveredPost === post.id && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ originY: 1 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
