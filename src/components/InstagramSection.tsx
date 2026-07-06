"use client";

import { AnimatedSection } from "./AnimatedSection";

const images = [
  "/images/insta-1.jpg",
  "/images/insta-2.jpg",
  "/images/insta-3.jpg",
  "/images/insta-4.jpg",
  "/images/insta-5.jpg",
  "/images/insta-6.jpg",
];

export default function InstagramSection() {
  // Double the array for seamless loop
  const doubled = [...images, ...images];

  return (
    <section className="py-16 md:py-20 bg-warm-white overflow-hidden">
      <div className="text-center mb-10">
        <a
          href="https://instagram.com/maison831"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] tracking-[0.2em] text-dark-brown uppercase hover:text-brass transition-colors"
        >
          @maison831
        </a>
      </div>

      <AnimatedSection>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-3 animate-marquee"
            style={{
              width: "max-content",
            }}
          >
            {doubled.map((src, i) => (
              <div
                key={i}
                className="flex-none w-[200px] md:w-[260px] aspect-square overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Maison 831 Instagram ${(i % images.length) + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
