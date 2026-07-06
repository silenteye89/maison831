"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, ImageReveal } from "./AnimationProvider";

const capabilities = [
  { title: "Corporate Website", subtitle: "기업 홈페이지" },
  { title: "Landing Page", subtitle: "랜딩페이지" },
  { title: "E-Commerce", subtitle: "쇼핑몰" },
  { title: "Reservation System", subtitle: "예약 시스템" },
  { title: "Admin Dashboard", subtitle: "관리자 페이지" },
  { title: "Mobile App", subtitle: "모바일 앱" },
  { title: "Branding", subtitle: "브랜딩" },
  { title: "UI/UX Design", subtitle: "UI/UX 디자인" },
];

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
    category: "Web Design & Development",
    color: "#3D5A3E",
  },
];

export default function WebDevelopment() {
  return (
    <section id="development" className="pt-[140px] pb-[160px] md:pt-[180px] md:pb-[200px] px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 md:mb-32">
          <div>
            <FadeIn>
              <p className="text-xs tracking-[0.3em] uppercase text-oak mb-8">
                Web & App Development
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-dark-brown font-light tracking-wide leading-[1.3]">
                브랜드의 본질을
                <br />
                기술로 설계합니다
              </h2>
            </FadeIn>
          </div>
          <div className="flex items-end">
            <FadeIn delay={0.2}>
              <p className="text-sm leading-[4] text-walnut max-w-md">
                메종831 크리에이티브 스튜디오는 홈페이지 제작, 앱 개발,
                브랜드 아이덴티티, UI/UX 디자인을 통해
                당신의 브랜드에 디지털 생명력을 불어넣습니다.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* KAIST Trust Badge */}
        <FadeIn delay={0.15}>
          <div className="bg-ivory border border-stone/15 p-12 md:p-16 mb-24 md:mb-32 text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-brass mb-6">
              Engineered with Precision
            </p>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-dark-brown font-light leading-[1.5] mb-12">
              카이스트 출신 엔지니어가
              <br className="hidden sm:block" />
              함께 직접 디자인하고 개발합니다.
            </p>
            <p className="text-sm text-walnut max-w-xl mx-auto leading-[4] text-center">
              최고 수준의 기술력과 섬세한 디자인 감각으로
              단순한 웹사이트를 넘어, 브랜드를 경험하는 디지털 공간을 만듭니다.
            </p>
          </div>
        </FadeIn>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-24 md:mb-32">
          {capabilities.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.06}>
              <div className="text-center group cursor-default">
                <p className="text-[11px] tracking-[0.2em] uppercase text-oak mb-2">
                  {item.subtitle}
                </p>
                <h4 className="font-serif text-base md:text-lg text-dark-brown group-hover:text-brass transition-colors duration-500">
                  {item.title}
                </h4>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Portfolio */}
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-oak mb-10">
            Selected Work
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolio.map((work, i) => (
            <ImageReveal key={work.title} delay={i * 0.15}>
              <motion.div className="group cursor-pointer" whileHover="hover">
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
                  <p className="text-[11px] tracking-[0.2em] uppercase text-oak mb-1">
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
        <FadeIn delay={0.3} className="mt-20 md:mt-24">
          <Link
            href="/reserve?type=consultation"
            className="inline-flex items-center justify-center gap-4 text-[15px] tracking-[0.02em] font-medium bg-dark-brown text-ivory px-8 h-[50px] rounded-full hover:bg-brass hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;무료 상담 예약
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
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
