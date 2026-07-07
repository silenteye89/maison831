"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1200&fit=crop&q=85"
          alt="Maison831 Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black/70 via-matte-black/40 to-matte-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black/50 via-transparent to-matte-black/20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="text-[11px] tracking-[0.35em] text-brass uppercase mb-8">
            Curation Lifestyle Studio
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-warm-white">
            TECH MEETS
            <br />
            AESTHETIC
          </h1>
          <p className="font-sans text-lg md:text-xl text-warm-white/80 mb-3 leading-relaxed">
            기술과 감성이 만나는 곳
          </p>
          <p className="text-[15px] text-stone/90 leading-relaxed mb-12 max-w-md">
            KAIST 엔지니어의 기술력과 유럽 감성의 미학이 어우러지는
            라이프스타일 스튜디오, 메종 831.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#web"
              className="inline-block bg-warm-white text-dark-brown px-8 py-3.5 text-[13px] tracking-[0.08em] hover:bg-brass hover:text-warm-white transition-colors duration-300"
            >
              서비스 둘러보기
            </a>
            <a
              href="#contact"
              className="inline-block border border-warm-white/40 text-warm-white px-8 py-3.5 text-[13px] tracking-[0.08em] hover:bg-warm-white/10 hover:border-warm-white/70 transition-all duration-300"
            >
              문의하기
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
