"use client";

import { motion } from "framer-motion";
import { FadeIn, ImageReveal } from "./AnimationProvider";

const collections = [
  { src: "https://images.unsplash.com/photo-1558171813-01eda6b4ef0a?w=800&q=80", title: "Vintage Clothing", category: "빈티지 의류", color: "#8B7355" },
  { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", title: "Antique Furniture", category: "앤틱 가구", color: "#C4B59E" },
  { src: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80", title: "European Objects", category: "유럽 소품", color: "#3D5A3E" },
  { src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80", title: "Select Items", category: "셀렉트 아이템", color: "#B8976A" },
];

export default function VintageCollection() {
  return (
    <section id="vintage" className="bg-dark-brown pt-[140px] pb-[160px] md:pt-[180px] md:pb-[200px] px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-stone mb-8">
              Vintage Collection
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-light tracking-wide mb-14">
              Vintage Collection
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-sm text-stone max-w-lg mx-auto leading-[4]">
              유럽 각지에서 직접 큐레이션한 빈티지 의류, 앤틱 가구, 유럽 소품.
              시간이 만들어낸 고유의 아름다움을 발견하세요.
            </p>
          </FadeIn>
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {collections.map((item, i) => (
            <ImageReveal key={item.title} delay={i * 0.12}>
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
                  <p className="text-[11px] tracking-[0.3em] uppercase text-white/70 mb-2">
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
        <FadeIn delay={0.3} className="text-center mt-20 md:mt-24">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-4 text-[15px] tracking-[0.02em] font-medium text-ivory/90 border border-ivory/30 px-8 h-[50px] rounded-full hover:bg-ivory hover:text-dark-brown hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;View Collection
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            &nbsp;&nbsp;&nbsp;
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
