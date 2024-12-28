import { Lightbulb, Search, Smartphone } from "lucide-react";

export default function Services() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Hire Me For Your Next{" "}
            <span className="text-green-500">Project</span>?
          </h2>
          <p className="text-gray-600">
            I specialize in creating stunning digital experiences that help
            businesses grow and succeed in the modern digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visual Design</h3>
            <p className="text-gray-600">
              Create stunning visual designs that capture attention and
              communicate your message effectively.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Design Prototype</h3>
            <p className="text-gray-600">
              Build interactive prototypes that bring your ideas to life and
              test user experiences.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">UX Research</h3>
            <p className="text-gray-600">
              Conduct thorough research to understand your users and create
              optimal experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
