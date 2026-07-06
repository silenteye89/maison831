"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./AnimationProvider";

const services = [
  { number: "01", title: "Web & App Development", subtitle: "홈페이지 · 앱 개발", description: "기업 홈페이지, 랜딩페이지, 쇼핑몰, 예약 시스템, 관리자 페이지, 모바일 앱까지. 카이스트 출신 엔지니어가 함께 직접 디자인하고 개발합니다.", href: "#development", accent: "#B8976A" },
  { number: "02", title: "Space Rental", subtitle: "공간대여", description: "회의, 촬영, 인터뷰, 클래스, 소모임, 파티, 스터디를 위한 유럽 감성 복합 공간을 대여하세요.", href: "#space", accent: "#3D5A3E" },
  { number: "03", title: "Workshop", subtitle: "원데이 클래스", description: "위스키 클래스, 브랜딩 클래스, 취미 클래스 등 일상에 영감을 더하는 원데이 클래스를 운영합니다.", href: "#workshop", accent: "#8B7355" },
  { number: "04", title: "Vintage Collection", subtitle: "빈티지 컬렉션", description: "유럽에서 직접 큐레이션한 빈티지 의류, 앤틱 가구, 유럽 소품, 셀렉트 아이템을 소개합니다.", href: "#vintage", accent: "#5C4A3A" },
];

export default function Services() {
  return (
    <section id="services" className="bg-ivory py-[120px] md:py-[140px] px-6 md:px-10">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <FadeIn>
            <p className="text-[12px] tracking-[0.15em] uppercase text-oak/50 mb-8">Our Services</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-dark-brown tracking-[-0.025em]">
              무엇을 만들어 드릴까요
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((s, i) => (
            <FadeIn key={s.number} delay={i * 0.08}>
              <motion.a
                href={s.href}
                className="group block border border-stone/8 p-8 md:p-10 hover:bg-ivory/60 transition-colors duration-300"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[12px] tracking-[0.15em] uppercase text-oak/40 mb-2">{s.subtitle}</p>
                <h3 className="font-serif text-[20px] md:text-[22px] text-dark-brown mb-5 group-hover:text-brass transition-colors duration-300 tracking-[-0.01em]">{s.title}</h3>
                <p className="text-[15px] leading-[1.8] text-walnut mb-6 max-w-md">{s.description}</p>
                <span className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.1em] uppercase text-oak/35 group-hover:text-brass transition-colors duration-300">
                  자세히 보기
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
