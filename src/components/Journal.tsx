"use client";

import { motion } from "framer-motion";
import { FadeIn, ImageReveal } from "./AnimationProvider";

const articles = [
  {
    src: "/images/journal-1.jpg",
    category: "Space",
    title: "공간이 전하는 이야기 — Maison 831이 만들어지기까지",
    date: "2026. 06. 15",
    color: "#C4B59E",
  },
  {
    src: "/images/journal-2.jpg",
    category: "Coffee",
    title: "에티오피아 게이샤, 숲의 향기를 담은 한 잔",
    date: "2026. 06. 08",
    color: "#8B7355",
  },
  {
    src: "/images/journal-3.jpg",
    category: "Vintage",
    title: "파리 벼룩시장에서 찾은 1960년대 트렌치코트",
    date: "2026. 05. 28",
    color: "#3D5A3E",
  },
  {
    src: "/images/journal-4.jpg",
    category: "Lifestyle",
    title: "느리게 사는 법 — 유럽 라이프스타일에서 배우다",
    date: "2026. 05. 20",
    color: "#B8976A",
  },
];

export default function Journal() {
  return (
    <section id="journal" className="bg-ivory py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 md:mb-28 gap-6">
          <div>
            <FadeIn>
              <p className="text-[11px] tracking-[0.3em] uppercase text-stone mb-8">
                Journal
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-dark-brown font-light tracking-wide">
                이야기를 기록합니다
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <a
              href="#"
              className="text-[11px] tracking-[0.15em] uppercase text-oak/60 hover:text-brass transition-colors duration-500"
            >
              All Articles →
            </a>
          </FadeIn>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-20">
          {articles.map((article, i) => (
            <ImageReveal key={article.title} delay={i * 0.1}>
              <motion.article className="group cursor-pointer">
                <div className="overflow-hidden mb-6">
                  <div
                    className="aspect-[16/10] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${article.src}')`,
                      backgroundColor: article.color,
                    }}
                  />
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-brass">
                    {article.category}
                  </span>
                  <span className="w-4 h-[1px] bg-stone/20" />
                  <span className="text-[10px] tracking-[0.1em] text-stone/50">
                    {article.date}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-dark-brown group-hover:text-brass transition-colors duration-500 leading-relaxed">
                  {article.title}
                </h3>
              </motion.article>
            </ImageReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
