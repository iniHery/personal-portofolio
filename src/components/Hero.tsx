import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-500 rounded-full" />
        <div className="absolute top-40 right-[50px] w-2 h-2 bg-red-500 rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-green-500 rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold grid">
              <span className="text-4xl font-medium pb-2 ">
                Hi welcome, I'm Hery
              </span>

              <span className="text-green-500">Front-End Developer</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Specializing in responsive static websites and landing pages with
              Next.js, React, and Tailwind CSS.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-green-500 text-white hover:bg-green-600"
              >
                Hire Me
              </Button>
              <Button size="lg" className="bg-white text-green-500">
                View Portfolio
              </Button>
            </div>
          </div>

          <div className="relative mb-16">
            <div className="absolute inset-0 bg-green-500/20 rounded-3xl transform translate-x-4 translate-y-4" />
            <div className="relative bg-white rounded-3xl">
              <Image
                src="/h1.jpg"
                alt="Portrait"
                width={400}
                height={400}
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
