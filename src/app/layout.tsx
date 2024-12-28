import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import Footer from "@/components/Footer";

// Inisialisasi Font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

// Metadata Halaman
export const metadata: Metadata = {
  title: "IniHery",
  description: "Professional portfolio by iniHery",
  icons: {
    icon: "/favicon.ico", //
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "iniHery",
    description: "My personal portofolio",
    url: "https://iniHery.com",
    siteName: "iniHery",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "iniHery - Professional Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* Komponen Navbar */}
        <Navbar />
        <WhatsAppBubble />
        <ScrollToTop />
        {/* Konten Anak */}
        <main>{children}</main>
        <section>
          <Footer />
        </section>
      </body>
    </html>
  );
}
