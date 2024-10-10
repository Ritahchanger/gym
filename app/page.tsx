import Image from "next/image";

import Navbar from "@/components/navbar/Navbar";

import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero.tsx/Hero";
import SectionA from "@/components/HomeSections/SectionA/SectionA";

export default function Home() {
  return (
    <main>
      <Hero/>
      <SectionA/>
      <Footer />
    </main>
  );
}
