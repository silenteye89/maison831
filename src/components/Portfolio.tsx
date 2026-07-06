"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./AnimationProvider";

const projects = [
  {
    title: "시나브로 부동산",
    subtitle: "Sinabro Real Estate",
    category: "Web Design & Development",
    description:
      "신뢰와 전문성을 담은 부동산 중개 플랫폼. 매물 검색, 상담 예약, 지역 정보까지 원스톱으로 제공하는 반응형 웹사이트를 설계하고 개발했습니다.",
    src: "/images/sinabro-screenshot.png",
    color: "#8B7355",
    tags: ["Next.js", "반응형", "매물 관리", "SEO 최적화"],
    url: "https://sinabro-website.vercel.app",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-[120px] pb-[140px] md:pt-[140px] md:pb-[160px] px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <FadeIn>
            <p className="text-[13px] tracking-[0.2em] uppercase text-oak mb-10 md:mb-14">
              Selected Works
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] text-dark-brown font-normal tracking-[-0.02em] leading-[1.2] mb-6">
              Selected Work
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base md:text-lg text-walnut max-w-[620px] mx-auto leading-[1.85] text-center">
              브랜드를 이해하고, 기술로 완성합니다.
              <br />
              메종831이 만든 프로젝트를 소개합니다.
            </p>
          </FadeIn>
        </div>

        {/* Projects */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.15}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                {/* Image */}
                <FadeIn delay={0.1} className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="block relative group overflow-hidden">
                    <img
                      src={project.src}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700" />
                  </a>
                </FadeIn>

                {/* Info */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-[13px] tracking-[0.2em] uppercase text-oak mb-4">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-[24px] md:text-[28px] text-dark-brown font-normal mb-3 leading-[1.3] tracking-[-0.01em]">
                    {project.title}
                  </h3>
                  <p className="text-[15px] text-brass mb-8 tracking-[0.03em]">
                    {project.subtitle}
                  </p>
                  <p className="text-base md:text-lg text-walnut leading-[1.85] mb-10 max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[12px] tracking-[0.08em] text-oak border border-stone/20 px-3.5 py-1.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 text-[14px] tracking-[0.02em] font-medium text-dark-brown border border-dark-brown/20 px-7 h-[46px] rounded-full hover:bg-dark-brown hover:text-ivory hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out"
                  >
                    사이트 방문하기
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.3} className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 text-[14px] tracking-[0.02em] font-medium bg-dark-brown text-ivory px-8 h-[48px] rounded-full hover:bg-brass hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out"
          >
            프로젝트 문의하기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
