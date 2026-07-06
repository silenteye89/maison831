"use client";

import { FadeIn } from "./AnimationProvider";

const projects = [
  {
    title: "시나브로 부동산",
    subtitle: "Sinabro Real Estate",
    category: "Web Design & Development",
    description: "신뢰와 전문성을 담은 부동산 중개 플랫폼. 매물 검색, 상담 예약, 지역 정보까지 원스톱으로 제공하는 반응형 웹사이트를 설계하고 개발했습니다.",
    src: "/images/sinabro-screenshot.png",
    tags: ["Next.js", "반응형", "매물 관리", "SEO 최적화"],
    url: "https://sinabro-website.vercel.app",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-[120px] md:py-[140px] px-6 md:px-10">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <FadeIn>
            <p className="text-[12px] tracking-[0.15em] uppercase text-oak/50 mb-8">Selected Works</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-dark-brown tracking-[-0.025em] mb-5">Selected Work</h2>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-[15px] text-walnut max-w-[480px] mx-auto leading-[1.8]">
              브랜드를 이해하고, 기술로 완성합니다.<br />메종831이 만든 프로젝트를 소개합니다.
            </p>
          </FadeIn>
        </div>

        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.12}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="block group overflow-hidden">
                <img src={p.src} alt={p.title} className="w-full aspect-[4/3] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
              </a>
              <div className="lg:pt-4">
                <p className="text-[12px] tracking-[0.15em] uppercase text-oak/40 mb-4">{p.category}</p>
                <h3 className="font-serif text-[22px] md:text-[26px] text-dark-brown mb-2 tracking-[-0.015em]">{p.title}</h3>
                <p className="text-[14px] text-brass/70 mb-8">{p.subtitle}</p>
                <p className="text-[15px] text-walnut leading-[1.8] mb-8 max-w-md">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {p.tags.map((t) => <span key={t} className="text-[11px] tracking-[0.06em] text-oak/35 border border-stone/12 px-3 py-1.5 rounded-sm">{t}</span>)}
                </div>
                <a href={p.url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-[13px] font-normal text-dark-brown border border-dark-brown/12 px-6 h-11 rounded-full hover:bg-dark-brown hover:text-ivory transition-all duration-300">
                  사이트 방문하기
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </FadeIn>
        ))}

        <FadeIn delay={0.2} className="text-center mt-20">
          <a href="#contact" className="inline-flex items-center justify-center gap-2.5 text-[13px] font-normal bg-dark-brown text-ivory px-7 h-12 rounded-full hover:bg-brass transition-colors duration-300">
            프로젝트 문의하기
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
