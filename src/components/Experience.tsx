"use client";

import { motion } from "framer-motion";
import { FadeIn, ImageReveal } from "./AnimationProvider";

const experiences = [
  {
    number: "01",
    title: "Specialty Coffee",
    subtitle: "스페셜티 커피",
    description:
      "엄선된 싱글 오리진 원두로 내리는 한 잔의 커피. 숲이 보이는 창가에서 느리게 즐기는 시간.",
    image: "/images/coffee.jpg",
    color: "#8B7355",
  },
  {
    number: "02",
    title: "Vintage Select",
    subtitle: "빈티지 셀렉트샵",
    description:
      "유럽 각지에서 직접 큐레이션한 빈티지 의류와 소품. 시간이 만들어낸 아름다움을 발견하세요.",
    image: "/images/vintage.jpg",
    color: "#3D5A3E",
  },
  {
    number: "03",
    title: "Whisky Tasting",
    subtitle: "위스키 클래스",
    description:
      "싱글 몰트의 깊은 향과 이야기를 탐험하는 시간. 전문 소믈리에와 함께하는 프라이빗 테이스팅.",
    image: "/images/whisky.jpg",
    color: "#B8976A",
  },
  {
    number: "04",
    title: "Creative Workshop",
    subtitle: "원데이 클래스",
    description:
      "드로잉, 캘리그래피, 향수 만들기. 일상에 창작의 즐거움을 더하는 원데이 클래스.",
    image: "/images/workshop.jpg",
    color: "#C4B59E",
  },
  {
    number: "05",
    title: "Book Club",
    subtitle: "북클럽",
    description:
      "한 권의 책을 중심으로 생각을 나누는 지적인 살롱. 깊이 있는 대화가 흐르는 공간.",
    image: "/images/bookclub.jpg",
    color: "#2C2420",
  },
  {
    number: "06",
    title: "Board & Social",
    subtitle: "보드게임 모임",
    description:
      "클래식 보드게임과 함께하는 소셜 이브닝. 새로운 사람들과 자연스럽게 어울리는 시간.",
    image: "/images/boardgame.jpg",
    color: "#8B7355",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-ivory">
      {/* Section Header */}
      <div className="py-32 md:py-44 px-6 md:px-12 text-center">
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-stone mb-8">
            Experience
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-dark-brown font-light tracking-wide">
            당신의 취향을 발견하세요
          </h2>
        </FadeIn>
      </div>

      {/* Editorial Layout */}
      <div className="max-w-[1400px] mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={exp.number}
            className={`grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] ${
              index % 2 === 1 ? "lg:direction-rtl" : ""
            }`}
          >
            {/* Image Side */}
            <div
              className={`relative overflow-hidden ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <ImageReveal className="h-full">
                <div
                  className="h-[50vh] lg:h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${exp.image}')`,
                    backgroundColor: exp.color,
                    minHeight: "400px",
                  }}
                />
              </ImageReveal>
            </div>

            {/* Content Side */}
            <div
              className={`flex items-center px-8 md:px-16 lg:px-20 py-16 lg:py-0 ${
                index % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <div className="max-w-md">
                <FadeIn delay={0.1}>
                  <span
                    className="font-serif text-7xl md:text-8xl font-light opacity-10"
                    style={{ color: exp.color }}
                  >
                    {exp.number}
                  </span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-stone mt-2 mb-3">
                    {exp.subtitle}
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <h3 className="font-serif text-3xl md:text-4xl text-dark-brown font-light mb-6">
                    {exp.title}
                  </h3>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <p className="text-sm leading-[2] text-oak/70 font-light mb-8">
                    {exp.description}
                  </p>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-dark-brown hover:text-brass transition-colors duration-500"
                    whileHover={{ x: 4 }}
                  >
                    자세히 보기
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
                  </motion.a>
                </FadeIn>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Services Row */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-28 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone/10">
          {[
            {
              title: "Rental Space",
              subtitle: "공간대여",
              desc: "프라이빗 행사와 촬영을 위한 유럽 감성 공간",
            },
            {
              title: "Web Design",
              subtitle: "홈페이지 제작",
              desc: "브랜드의 본질을 담아내는 디지털 경험 설계",
            },
            {
              title: "Branding",
              subtitle: "브랜딩 & 디자인",
              desc: "당신의 브랜드에 영혼을 불어넣는 크리에이티브 작업",
            },
          ].map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.15}>
              <div className="bg-warm-white p-10 md:p-14 text-center group cursor-pointer hover:bg-cream/50 transition-colors duration-700">
                <p className="text-[10px] tracking-[0.3em] uppercase text-stone mb-3">
                  {service.subtitle}
                </p>
                <h4 className="font-serif text-xl md:text-2xl text-dark-brown mb-4 group-hover:text-brass transition-colors duration-500">
                  {service.title}
                </h4>
                <p className="text-xs leading-relaxed text-oak/60 font-light">
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
