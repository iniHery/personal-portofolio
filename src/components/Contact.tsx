// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Phone, Mail, MapPin } from "lucide-react";

// export default function Contact() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="max-w-2xl mx-auto text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">
//             Let's Discuss Your <span className="text-green-500">Project</span>
//           </h2>
//           <p className="text-gray-600">
//             Let's work together to create something great. Fill out the form
//             below to get started.
//           </p>
//         </div>

//         <div className="max-w-8xl mx-auto p-6">
//           <div className="grid md:grid-cols-3 gap-12">
//             {/* Contact Information */}
//             <div className="space-y-[84px]">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
//                   <Phone className="w-4 h-4 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg text-gray-500 font-normal">Call me</h3>
//                   <p className="text-gray-900">0819-9939-2230</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
//                   <Mail className="w-4 h-4 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg text-gray-500 font-normal">
//                     Email me
//                   </h3>
//                   <p className="text-gray-900">brampunyacerita@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
//                   <MapPin className="w-4 h-4 text-white" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg text-gray-500 font-normal">Address</h3>
//                   <p className="text-gray-900">Bali, Gianyar, Sukawati</p>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <form className="space-y-6 col-span-2">
//               <div>
//                 <Input
//                   placeholder="Full name"
//                   className="border-gray-200 h-12 text-base"
//                 />
//               </div>

//               <div>
//                 <Input
//                   type="email"
//                   placeholder="Your email"
//                   className="border-gray-200 h-12 text-base"
//                 />
//               </div>

//               <Textarea
//                 placeholder="Message"
//                 className="min-h-[200px] border-gray-200 text-base"
//               />

//               <div className="flex justify-end">
//                 <Button className="h-12 px-8 rounded-xl bg-green-500 hover:green-600 text-white">
//                   Submit Message
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State untuk modal sukses

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Menampilkan modal sukses jika pesan berhasil dikirim
        setShowSuccessModal(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Failed response:", response);
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      // Jika gagal, bisa menambahkan penanganan error di sini (misalnya alert)
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Let's Discuss Your <span className="text-green-500">Project</span>
          </h2>
          <p className="text-gray-600">
            Let's work together to create something great. Fill out the form
            below to get started.
          </p>
        </div>

        <div className="max-w-4xl mx-auto p-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-[84px]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-500 font-normal">Call me</h3>
                  <p className="text-gray-900">0819-9939-2230</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-500 font-normal">
                    Email me
                  </h3>
                  <p className="text-gray-900">brampunyacerita@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg text-gray-500 font-normal">Address</h3>
                  <p className="text-gray-900">Bali, Gianyar, Sukawati</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full flex justify-center items-center">
              <Image
                src="/mail.svg"
                alt="Portrait"
                width={200}
                height={200}
                className="w-[350px] h-[350px]" // Menggunakan ukuran kustom
              />
            </div>

            {/* <form onSubmit={handleSubmit} className="space-y-6 col-span-2">
              <div>
                <Input
                  name="name"
                  placeholder="Full name"
                  className="border-gray-200 h-12 text-base"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="border-gray-200 h-12 text-base"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <Textarea
                name="message"
                placeholder="Message"
                className="min-h-[200px] border-gray-200 text-base"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="h-12 px-8 rounded-xl bg-green-500 hover:bg-[#54a332] text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Message"}
                </Button>
              </div>
            </form> */}
          </div>
        </div>
      </div>

      {/* Modal Success */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold text-green-600">Success!</h3>
            <p className="text-gray-600 mt-2">
              Your message has been sent successfully.
            </p>
            <div className="mt-4 flex justify-end">
              <Button
                onClick={closeSuccessModal}
                className="h-10 px-6 bg-green-500 text-white hover:bg-green-600"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
