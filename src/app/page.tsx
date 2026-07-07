import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BestCollectionSection from "@/components/BestCollectionSection";
import CategorySection from "@/components/CategorySection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import VintageStylingSection from "@/components/VintageStylingSection";
import ReviewSection from "@/components/ReviewSection";
import InstagramSection from "@/components/InstagramSection";
import ShowroomSection from "@/components/ShowroomSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="lg:ml-[220px] overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <BestCollectionSection />
        <CategorySection />
        <NewArrivalsSection />
        <VintageStylingSection />
        <ReviewSection />
        <InstagramSection />
        <ShowroomSection />
        <ContactSection />
      </main>
      <footer className="lg:ml-[220px]">
        <Footer />
      </footer>
    </>
  );
}
