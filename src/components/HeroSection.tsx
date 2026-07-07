"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col lg:flex-row">
      {/* Left: Text */}
      <div className="flex-1 flex items-center justify-center bg-ivory px-8 md:px-16 py-24 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md"
        >
          <p className="text-[11px] tracking-[0.3em] text-brass uppercase mb-6">
            Curation Lifestyle Studio
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-4 text-dark-brown">
            TECH MEETS
            <br />
            AESTHETIC
          </h1>
          <p className="font-sans text-base md:text-lg text-walnut/80 mb-3 leading-relaxed">
            기술과 감성이 만나는 곳
          </p>
          <p className="text-sm text-oak/70 leading-relaxed mb-10 max-w-sm">
            KAIST 엔지니어의 기술력과 유럽 감성의 미학이 어우러지는
            라이프스타일 스튜디오, 메종 831.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#web"
              className="inline-block bg-dark-brown text-warm-white px-7 py-3 text-[13px] tracking-[0.08em] hover:bg-walnut transition-colors duration-300"
            >
              서비스 둘러보기
            </a>
            <a
              href="#contact"
              className="inline-block border border-dark-brown text-dark-brown px-7 py-3 text-[13px] tracking-[0.08em] hover:bg-dark-brown hover:text-warm-white transition-colors duration-300"
            >
              문의하기
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right: Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="flex-1 relative min-h-[50vh] lg:min-h-screen"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1200&fit=crop&q=85"
          alt="Maison 831 Studio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black/20 to-transparent" />
      </motion.div>
    </section>
  );
}
