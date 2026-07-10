import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BestCollectionSection from "@/components/BestCollectionSection";
import CategorySection from "@/components/CategorySection";
import VintageStylingSection from "@/components/VintageStylingSection";
import ReviewSection from "@/components/ReviewSection";
import InstagramSection from "@/components/InstagramSection";
import ShowroomSection from "@/components/ShowroomSection";
import TeamSection from "@/components/TeamSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <BestCollectionSection />
        <CategorySection />
        <VintageStylingSection />
        <ReviewSection />
        <InstagramSection />
        <TeamSection />
        <ShowroomSection />
        <ContactSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
