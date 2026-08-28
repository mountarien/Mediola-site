import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import WorkAndAbout from "@/components/WorkAndAbout";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesPreview />
        <WorkAndAbout />
      </main>
      <Footer />
    </>
  );
}
