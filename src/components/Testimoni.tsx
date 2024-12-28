import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-16" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Our Customer Say Something{" "}
            <span className="text-green-500">About Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((testimonial) => (
            <div
              key={testimonial}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The level of creativity and attention to detail is outstanding.
                The design perfectly captures our brand's essence."
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/placeholder.svg"
                  alt="Client"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold">John Smith</div>
                  <div className="text-sm text-gray-500">CEO at TechCorp</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
