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
    <section id="portfolio" className="pt-[140px] pb-[160px] md:pt-[180px] md:pb-[200px] px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-24 md:mb-28">
          <FadeIn>
            <p className="text-[13px] tracking-[0.3em] uppercase text-oak mb-12">
              Selected Works
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-dark-brown font-light tracking-wide mb-10 leading-[1.8]">
              Selected Work
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base md:text-lg text-walnut max-w-[650px] mx-auto leading-[1.8] text-center">
              브랜드를 이해하고, 기술로 완성합니다.
              <br />
              메종831이 만든 프로젝트를 소개합니다.
            </p>
          </FadeIn>
        </div>

        {/* Projects */}
        <div className="space-y-32 md:space-y-44">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.15}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
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
                  <p className="text-[12px] tracking-[0.3em] uppercase text-oak mb-6">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl text-dark-brown font-light mb-4 leading-[1.6]">
                    {project.title}
                  </h3>
                  <p className="text-base text-brass mb-10 tracking-[0.05em]">
                    {project.subtitle}
                  </p>
                  <p className="text-base md:text-lg text-walnut leading-[2.2] mb-12 max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] tracking-[0.1em] text-oak border border-stone/20 px-4 py-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-4 text-[15px] tracking-[0.02em] font-medium text-dark-brown border border-dark-brown/20 px-8 h-[50px] rounded-full hover:bg-dark-brown hover:text-ivory hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out"
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사이트 방문하기
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    &nbsp;&nbsp;&nbsp;
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.3} className="text-center mt-20 md:mt-24">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-4 text-[15px] tracking-[0.02em] font-medium bg-dark-brown text-ivory px-8 h-[50px] rounded-full hover:bg-brass hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;프로젝트 문의하기
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
