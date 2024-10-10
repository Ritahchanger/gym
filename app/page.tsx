import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero.tsx/Hero";
import SectionA from "@/components/HomeSections/SectionA/SectionA";
import SectionB from "@/components/HomeSections/SectionB/SectionB";
import SectionC from "@/components/HomeSections/SectionC/SectionC";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionA />
      <SectionB />
      <SectionC />
      <Footer />
    </main>
  );
}
