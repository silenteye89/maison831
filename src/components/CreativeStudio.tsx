"use client";

import { motion } from "framer-motion";
import { FadeIn, ImageReveal } from "./AnimationProvider";

const portfolio = [
  {
    src: "/images/portfolio-1.jpg",
    title: "Café Lumière",
    category: "Branding & Web Design",
    color: "#C4B59E",
  },
  {
    src: "/images/portfolio-2.jpg",
    title: "Atelier Noir",
    category: "Brand Identity",
    color: "#2C2420",
  },
  {
    src: "/images/portfolio-3.jpg",
    title: "Maison de Fleur",
    category: "Web Design",
    color: "#3D5A3E",
  },
];

export default function CreativeStudio() {
  return (
    <section id="studio" className="py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 md:mb-28">
          <div>
            <FadeIn>
              <p className="text-[11px] tracking-[0.3em] uppercase text-stone mb-8">
                Creative Studio
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-dark-brown font-light tracking-wide">
                브랜드의 본질을
                <br />
                디자인합니다
              </h2>
            </FadeIn>
          </div>
          <div className="flex items-end">
            <FadeIn delay={0.2}>
              <p className="text-sm leading-[2] text-oak/70 font-light max-w-md">
                Maison 831 Creative Studio는 홈페이지 제작, 브랜드 아이덴티티,
                그래픽 디자인을 통해 당신의 브랜드에 영혼을 불어넣습니다.
                공간을 운영하는 우리이기에, 브랜드가 가진 '감성'을 이해하고
                디자인할 수 있습니다.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone/10 mb-20 md:mb-28">
          {[
            {
              number: "01",
              title: "Web Design",
              subtitle: "홈페이지 제작",
              items: [
                "브랜드 웹사이트",
                "랜딩 페이지",
                "이커머스",
                "반응형 디자인",
              ],
            },
            {
              number: "02",
              title: "Branding",
              subtitle: "브랜딩",
              items: [
                "브랜드 아이덴티티",
                "로고 디자인",
                "브랜드 가이드라인",
                "네이밍",
              ],
            },
            {
              number: "03",
              title: "Design",
              subtitle: "디자인",
              items: [
                "그래픽 디자인",
                "패키지 디자인",
                "메뉴 디자인",
                "인쇄물",
              ],
            },
          ].map((service, i) => (
            <FadeIn key={service.number} delay={i * 0.15}>
              <div className="bg-warm-white p-10 md:p-14">
                <span className="font-serif text-5xl font-light text-stone/20">
                  {service.number}
                </span>
                <p className="text-[10px] tracking-[0.3em] uppercase text-stone mt-6 mb-2">
                  {service.subtitle}
                </p>
                <h3 className="font-serif text-2xl text-dark-brown mb-8">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs text-oak/60 font-light flex items-center gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-brass/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Portfolio */}
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-stone mb-10">
            Selected Work
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolio.map((work, i) => (
            <ImageReveal key={work.title} delay={i * 0.15}>
              <motion.div
                className="group cursor-pointer"
                whileHover="hover"
              >
                <div className="overflow-hidden">
                  <div
                    className="aspect-[3/4] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${work.src}')`,
                      backgroundColor: work.color,
                    }}
                  />
                </div>
                <div className="mt-5">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-stone mb-1">
                    {work.category}
                  </p>
                  <h4 className="font-serif text-lg text-dark-brown group-hover:text-brass transition-colors duration-500">
                    {work.title}
                  </h4>
                </div>
              </motion.div>
            </ImageReveal>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.3} className="mt-16 md:mt-20">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-dark-brown border border-dark-brown/20 px-8 py-4 hover:bg-dark-brown hover:text-ivory transition-all duration-700"
          >
            프로젝트 문의
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
