import Footer from "@/components/Footer";
import Main from "@/components/main";
import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="pt-16">
        <Main />
      </div>
      <Footer />
    </div>
  );
}
