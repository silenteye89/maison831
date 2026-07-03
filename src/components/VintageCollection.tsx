"use client";

import { motion } from "framer-motion";
import { FadeIn, ImageReveal } from "./AnimationProvider";

const collections = [
  {
    src: "/images/vintage-1.jpg",
    title: "Autumn Archive",
    category: "Vintage Clothing",
    color: "#8B7355",
  },
  {
    src: "/images/vintage-2.jpg",
    title: "Curated Objects",
    category: "Vintage Accessories",
    color: "#C4B59E",
  },
  {
    src: "/images/vintage-3.jpg",
    title: "Maison Collection",
    category: "Brand Goods",
    color: "#3D5A3E",
  },
  {
    src: "/images/vintage-4.jpg",
    title: "European Finds",
    category: "Rare Pieces",
    color: "#B8976A",
  },
];

export default function VintageCollection() {
  return (
    <section id="vintage" className="bg-dark-brown py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <FadeIn>
            <p className="text-[11px] tracking-[0.3em] uppercase text-stone/60 mb-8">
              Collection
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-light tracking-wide mb-6">
              Vintage Collection
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-sm text-stone/50 font-light max-w-lg mx-auto leading-relaxed">
              유럽 각지에서 직접 큐레이션한 빈티지 의류와 소품.
              시간이 만들어낸 고유의 아름다움을 발견하세요.
            </p>
          </FadeIn>
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {collections.map((item, i) => (
            <ImageReveal key={item.title} delay={i * 0.15}>
              <motion.div
                className="relative group cursor-pointer overflow-hidden"
                whileHover="hover"
              >
                <div
                  className="aspect-[3/4] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${item.src}')`,
                    backgroundColor: item.color,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-light">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </ImageReveal>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.3} className="text-center mt-16 md:mt-20">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-ivory/70 border border-ivory/20 px-8 py-4 hover:bg-ivory hover:text-dark-brown transition-all duration-700"
          >
            View Full Collection
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
