import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Experience from "@/components/Experience";
import OurSpace from "@/components/OurSpace";
import VintageCollection from "@/components/VintageCollection";
import UpcomingEvents from "@/components/UpcomingEvents";
import RentalSpace from "@/components/RentalSpace";
import CreativeStudio from "@/components/CreativeStudio";
import Journal from "@/components/Journal";
import InstagramGallery from "@/components/InstagramGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <BrandStory />
        <Experience />
        <OurSpace />
        <VintageCollection />
        <UpcomingEvents />
        <RentalSpace />
        <CreativeStudio />
        <Journal />
        <InstagramGallery />
      </main>
      <Footer />
    </>
  );
}
