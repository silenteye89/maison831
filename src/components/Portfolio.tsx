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
    <section id="portfolio" className="pt-[180px] pb-[200px] md:pt-[220px] md:pb-[260px] px-6 md:px-12">
      <div className="max-w-[960px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <FadeIn>
            <p className="text-[13px] tracking-[0.2em] uppercase text-stone/60 mb-12 md:mb-16">
              Selected Works
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] text-dark-brown font-medium tracking-[-0.02em] leading-[1.2] mb-8">
              Selected Work
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[16px] md:text-[17px] text-walnut font-light max-w-[520px] mx-auto leading-[1.8]">
              브랜드를 이해하고, 기술로 완성합니다.
              <br />
              메종831이 만든 프로젝트를 소개합니다.
            </p>
          </FadeIn>
        </div>

        {/* Projects */}
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={i * 0.15}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
              {/* Image */}
              <FadeIn delay={0.1}>
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
              <div className="lg:pt-4">
                <p className="text-[13px] tracking-[0.2em] uppercase text-stone/50 mb-6">
                  {project.category}
                </p>

                <h3 className="font-serif text-[24px] md:text-[28px] text-dark-brown font-medium mb-4 leading-[1.3] tracking-[-0.01em]">
                  {project.title}
                </h3>

                <p className="text-[15px] text-brass/80 mb-12 tracking-[0.03em] font-light">
                  {project.subtitle}
                </p>

                <p className="text-[16px] md:text-[17px] text-walnut font-light leading-[1.8] mb-12 max-w-md">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2.5 mb-12">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[12px] tracking-[0.08em] text-stone/50 border border-stone/15 px-3.5 py-1.5">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 text-[14px] tracking-[0.02em] font-normal text-dark-brown border border-dark-brown/15 px-7 h-[46px] rounded-full hover:bg-dark-brown hover:text-ivory hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out"
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

        {/* CTA */}
        <FadeIn delay={0.3} className="text-center mt-24 md:mt-32">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 text-[14px] tracking-[0.02em] font-normal bg-dark-brown text-ivory px-8 h-[48px] rounded-full hover:bg-brass hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out"
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
