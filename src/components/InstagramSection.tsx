"use client";

import { AnimatedSection } from "./AnimatedSection";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop",
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
                  alt={`Maison831 Instagram ${(i % images.length) + 1}`}
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
