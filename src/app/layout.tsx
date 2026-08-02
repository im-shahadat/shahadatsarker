import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shahadat Sarker - WordPress and Full-Stack Developer",
  description: "Freelance WordPress, WooCommerce, and Full-Stack developer based in Bangladesh.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{fontFamily: inter.style.fontFamily, backgroundColor: "#0d1117", color: "#fff", margin: 0}}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
