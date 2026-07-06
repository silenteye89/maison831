"use client";

import { motion } from "framer-motion";
import { FadeIn, ImageReveal } from "./AnimationProvider";

const photos = [
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80", color: "#C4B59E" },
  { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&q=80", color: "#3D5A3E" },
  { src: "https://images.unsplash.com/photo-1558171813-01eda6b4ef0a?w=400&q=80", color: "#8B7355" },
  { src: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&q=80", color: "#B8976A" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80", color: "#2C2420" },
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80", color: "#C4B59E" },
];

export default function InstagramGallery() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <FadeIn>
            <a
              href="https://instagram.com/maison831.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] tracking-[0.2em] uppercase text-stone hover:text-brass transition-colors duration-500"
            >
              @maison831.kr
            </a>
          </FadeIn>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-2.5">
          {photos.map((photo, i) => (
            <ImageReveal key={i} delay={i * 0.05}>
              <motion.a
                href="https://instagram.com/maison831.kr"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden group cursor-pointer block"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${photo.src}')`,
                    backgroundColor: photo.color,
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </motion.a>
            </ImageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
