"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80", color: "#3D5A3E" },
  { image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80", color: "#C4B59E" },
  { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80", color: "#3D5A3E" },
  { image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80", color: "#8B7355" },
  { image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80", color: "#C4B59E" },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${slides[current].image}')`, backgroundColor: slides[current].color }} />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55 z-[1]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="overflow-hidden">
          <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.5, ease }} className="flex items-center gap-2.5 mb-5">
            <span className="w-8 h-8 flex items-center justify-center border border-white/40 font-serif text-[15px] text-white">M</span>
            <h1 className="font-serif text-[22px] sm:text-[26px] md:text-[32px] text-white tracking-[0.16em] font-normal">MAISON 831</h1>
          </motion.div>
        </div>

        <div className="overflow-hidden mb-10">
          <motion.p initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 0.8, ease }}
            className="text-white/55 text-[13px] sm:text-[14px] tracking-[0.03em] font-light">
            일과 취향, 브랜드와 사람, 기술과 공간을 연결합니다.
          </motion.p>
        </div>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 1.0 }} className="w-8 h-[1px] bg-white/25 mb-10 origin-center" />

        <div className="overflow-hidden mb-12">
          <motion.a href="tel:010-8687-2129" initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.7, delay: 1.1, ease }}
            className="block font-serif text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-white tracking-[0.01em] font-normal leading-[1.05] hover:text-brass/90 transition-colors duration-400">
            010-8687-2129
          </motion.a>
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.4 }} className="flex flex-col sm:flex-row items-center gap-3">
          <a href="#contact" className="inline-flex items-center justify-center gap-2.5 text-[13px] tracking-[0.01em] font-normal bg-brass text-white px-7 h-12 rounded-full hover:bg-white hover:text-dark-brown transition-all duration-300">
            무료 상담 신청
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a href="#about" className="inline-flex items-center justify-center text-[13px] tracking-[0.01em] font-normal text-white/65 border border-white/20 px-7 h-12 rounded-full hover:bg-white hover:text-dark-brown hover:border-white transition-all duration-300">
            더 알아보기
          </a>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 0.8 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`transition-all duration-500 rounded-full ${i === current ? "w-6 h-[2px] bg-white/70" : "w-3 h-[2px] bg-white/25"}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </motion.div>
    </section>
  );
}
