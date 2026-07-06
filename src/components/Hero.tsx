"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    color: "#3D5A3E",
  },
  {
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80",
    color: "#C4B59E",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
    color: "#3D5A3E",
  },
  {
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80",
    color: "#8B7355",
  },
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80",
    color: "#C4B59E",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slideshow Background */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${slides[current].image}')`,
              backgroundColor: slides[current].color,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/55 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Decorative line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="w-[1px] h-12 bg-white/30 mb-10 origin-top"
        />

        {/* Brand Name */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] text-white tracking-[0.18em] font-light"
          >
            MAISON 831
          </motion.h1>
        </div>

        {/* Slogan */}
        <div className="overflow-hidden mt-8">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex items-center gap-4 sm:gap-6"
          >
            {["Create.", "Gather.", "Experience."].map((word, i) => (
              <span
                key={word}
                className="font-serif text-lg sm:text-xl md:text-2xl text-white/85 italic font-light tracking-wide"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {word}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Subtitle */}
        <div className="overflow-hidden mt-4">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-white/55 text-[10px] sm:text-[11px] tracking-[0.35em] uppercase font-light"
          >
            Curated Lifestyle Studio
          </motion.p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="mt-14"
        >
          <a
            href="#about"
            className="group relative inline-flex items-center justify-center gap-4 text-white/90 text-[15px] tracking-[0.02em] font-medium border border-white/30 px-8 h-[50px] rounded-full hover:bg-white hover:text-dark-brown hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Explore
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            &nbsp;&nbsp;&nbsp;
          </a>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-700 ${
              i === current
                ? "w-8 h-[1px] bg-white/80"
                : "w-4 h-[1px] bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </motion.div>
    </section>
  );
}
