import { GalleryVerticalEnd, Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { icon: GalleryVerticalEnd, href: "#", label: "GalleryVerticalEnd" },
    { icon: Github, href: "#", label: "Github" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">@ 2024. All Rights Reserved</p>
          <p className="text-gray-600">Designed by iniHery</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-white" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
