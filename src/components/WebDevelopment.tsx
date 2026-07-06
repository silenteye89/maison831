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
  { src: "/images/portfolio-1.jpg", title: "Café Lumière", category: "Branding & Web Design", color: "#C4B59E" },
  { src: "/images/portfolio-2.jpg", title: "Atelier Noir", category: "Brand Identity", color: "#2C2420" },
  { src: "/images/portfolio-3.jpg", title: "Maison de Fleur", category: "Web Design & Development", color: "#3D5A3E" },
];

export default function WebDevelopment() {
  return (
    <section id="development" className="pt-40 pb-40 md:pt-52 md:pb-52 px-6 md:px-10">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-16 md:mb-20">
          <div>
            <FadeIn>
              <p className="text-[12px] tracking-[0.15em] uppercase text-oak/50 mb-8">Web & App Development</p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-dark-brown tracking-[-0.025em]">
                브랜드의 본질을<br />기술로 설계합니다
              </h2>
            </FadeIn>
          </div>
          <div className="lg:pt-14">
            <FadeIn delay={0.16}>
              <p className="text-[15px] leading-[1.75] text-walnut max-w-[480px]">
                메종831 크리에이티브 스튜디오는 홈페이지 제작, 앱 개발,
                브랜드 아이덴티티, UI/UX 디자인을 통해
                당신의 브랜드에 디지털 생명력을 불어넣습니다.
              </p>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.12}>
          <div className="border border-stone/8 p-10 md:p-14 mb-16 md:mb-20 text-center">
            <p className="text-[12px] tracking-[0.15em] uppercase text-brass/60 mb-6">Engineered with Precision</p>
            <p className="font-serif text-[22px] sm:text-[26px] md:text-[30px] text-dark-brown leading-[1.25] tracking-[-0.02em] mb-6">
              카이스트 출신 엔지니어가<br className="hidden sm:block" />함께 직접 디자인하고 개발합니다.
            </p>
            <p className="text-[15px] text-walnut max-w-md mx-auto leading-[1.75]">
              최고 수준의 기술력과 섬세한 디자인 감각으로 단순한 웹사이트를 넘어, 브랜드를 경험하는 디지털 공간을 만듭니다.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 md:mb-20">
          {capabilities.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.04}>
              <div className="text-center py-5 group">
                <p className="text-[11px] tracking-[0.12em] uppercase text-oak/35 mb-1">{c.subtitle}</p>
                <p className="font-serif text-[15px] text-dark-brown group-hover:text-brass transition-colors duration-300">{c.title}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn><p className="text-[12px] tracking-[0.15em] uppercase text-oak/50 mb-8">Selected Work</p></FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolio.map((w, i) => (
            <ImageReveal key={w.title} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="overflow-hidden">
                  <div className="aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]" style={{ backgroundImage: `url('${w.src}')`, backgroundColor: w.color }} />
                </div>
                <div className="mt-4">
                  <p className="text-[11px] tracking-[0.12em] uppercase text-oak/35 mb-0.5">{w.category}</p>
                  <p className="font-serif text-[16px] text-dark-brown group-hover:text-brass transition-colors duration-300">{w.title}</p>
                </div>
              </div>
            </ImageReveal>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-16">
          <Link href="/reserve?type=consultation" className="inline-flex items-center justify-center gap-2.5 text-[13px] font-normal bg-dark-brown text-ivory px-7 h-12 rounded-full hover:bg-brass transition-colors duration-300">
            무료 상담 예약
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
