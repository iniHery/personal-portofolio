import { button } from "framer-motion/client";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "Mobile App Design",
      image: "/placeholder.svg",
      category: "UI/UX Design",
    },
    {
      title: "Web Platform",
      image: "/placeholder.svg",
      category: "Web Design",
    },
    {
      title: "Brand Identity",
      image: "/placeholder.svg",
      category: "Branding",
    },
  ];

  return (
    <section className="py-16 bg-gray-600" id="portfolio">
      <div className="container mx-auto px-4">
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

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">
                    {project.category}
                  </p>
                  {/* <Button variant="outline" className="mt-4 text-white border-white hover:bg-white hover:text-black">
                    View Project
                  </Button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
