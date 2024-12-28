// components/Skills.tsx
import React from "react";
// import Icon from "./Icon";

const Skills = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Keahlian Utama</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            {/* <span name="React" className="text-4xl mb-4 text-blue-600" /> */}
            <h3 className="text-xl font-semibold">React.js</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            {/* <span name="Next" className="text-4xl mb-4 text-green-600" /> */}
            <h3 className="text-xl font-semibold">Next.js</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            {/* <span name="Tailwind" className="text-4xl mb-4 text-teal-600" /> */}
            <h3 className="text-xl font-semibold">Tailwind CSS</h3>
          </div>
          {/* Add more icons as needed */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
