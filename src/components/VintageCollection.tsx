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
    <section id="vintage" className="bg-dark-brown py-[120px] md:py-[140px] px-6 md:px-10">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <FadeIn><p className="text-[12px] tracking-[0.15em] uppercase text-stone/40 mb-8">Vintage Collection</p></FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-ivory tracking-[-0.025em] mb-5">Vintage Collection</h2>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-[15px] text-stone/50 max-w-lg mx-auto leading-[1.8]">
              유럽 각지에서 직접 큐레이션한 빈티지 의류, 앤틱 가구, 유럽 소품. 시간이 만들어낸 고유의 아름다움을 발견하세요.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {collections.map((c, i) => (
            <ImageReveal key={c.title} delay={i * 0.08}>
              <motion.div className="relative group cursor-pointer overflow-hidden">
                <div className="aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]" style={{ backgroundImage: `url('${c.src}')`, backgroundColor: c.color }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[11px] tracking-[0.15em] uppercase text-white/55 mb-1">{c.category}</p>
                  <h3 className="font-serif text-[20px] md:text-[24px] text-white tracking-[-0.01em]">{c.title}</h3>
                </div>
              </motion.div>
            </ImageReveal>
          ))}
        </div>

        <FadeIn delay={0.2} className="text-center mt-16">
          <a href="#contact" className="inline-flex items-center justify-center gap-2.5 text-[13px] font-normal text-ivory/75 border border-ivory/15 px-7 h-12 rounded-full hover:bg-ivory hover:text-dark-brown transition-all duration-300">
            View Collection
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
