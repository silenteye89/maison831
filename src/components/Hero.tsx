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
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-[1]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Brand Name */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-white/50 font-serif text-lg sm:text-xl text-white font-light">
              M
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white tracking-[0.18em] font-normal">
              MAISON 831
            </h1>
          </motion.div>
        </div>

        {/* Tagline */}
        <div className="overflow-hidden mb-8">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-white/65 text-[14px] sm:text-[15px] tracking-[0.04em] font-light"
          >
            일과 취향, 브랜드와 사람, 기술과 공간을 연결합니다.
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="w-12 h-[1px] bg-brass/50 mb-8 origin-center"
        />

        {/* Phone Number */}
        <div className="overflow-hidden mb-10">
          <motion.a
            href="tel:010-8687-2129"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="block font-serif text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] text-white tracking-[0.02em] font-normal leading-[1.1] hover:text-brass transition-colors duration-500"
          >
            010-8687-2129
          </motion.a>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 text-[14px] tracking-[0.02em] font-medium bg-brass text-white px-8 h-[48px] rounded-full hover:bg-white hover:text-dark-brown hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out"
          >
            무료 상담 신청
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-3 text-[14px] tracking-[0.02em] font-medium text-white/80 border border-white/30 px-8 h-[48px] rounded-full hover:bg-white hover:text-dark-brown hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out"
          >
            더 알아보기
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
