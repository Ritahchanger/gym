
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero.tsx/Hero";
import SectionA from "@/components/HomeSections/SectionA/SectionA";
import SectionB from "@/components/SectionB/SectionB";

export default function Home() {
  return (
    <main>
      <Hero/>
      <SectionA/>
      <SectionB/>
      <Footer />
    </main>
  );
}
