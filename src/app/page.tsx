import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Services from "@/components/Services";
import WebDevelopment from "@/components/WebDevelopment";
import Portfolio from "@/components/Portfolio";
import OurSpace from "@/components/OurSpace";
import Workshop from "@/components/Workshop";
import VintageCollection from "@/components/VintageCollection";
import Contact from "@/components/Contact";
import InstagramGallery from "@/components/InstagramGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <BrandStory />
        <Services />
        <WebDevelopment />
        <Portfolio />
        <OurSpace />
        <Workshop />
        <VintageCollection />
        <Contact />
        <InstagramGallery />
      </main>
      <Footer />
    </>
  );
}
