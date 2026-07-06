"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./AnimationProvider";

const services = [
  {
    number: "01",
    title: "Web & App Development",
    subtitle: "홈페이지 · 앱 개발",
    description:
      "기업 홈페이지, 랜딩페이지, 쇼핑몰, 예약 시스템, 관리자 페이지, 모바일 앱까지. 카이스트 출신 엔지니어가 함께 직접 디자인하고 개발합니다.",
    href: "#development",
    accent: "#B8976A",
  },
  {
    number: "02",
    title: "Space Rental",
    subtitle: "공간대여",
    description:
      "회의, 촬영, 인터뷰, 클래스, 소모임, 파티, 스터디를 위한 유럽 감성 복합 공간을 대여하세요.",
    href: "#space",
    accent: "#3D5A3E",
  },
  {
    number: "03",
    title: "Workshop",
    subtitle: "원데이 클래스",
    description:
      "위스키 클래스, 브랜딩 클래스, 취미 클래스 등 일상에 영감을 더하는 원데이 클래스를 운영합니다.",
    href: "#workshop",
    accent: "#8B7355",
  },
  {
    number: "04",
    title: "Vintage Collection",
    subtitle: "빈티지 컬렉션",
    description:
      "유럽에서 직접 큐레이션한 빈티지 의류, 앤틱 가구, 유럽 소품, 셀렉트 아이템을 소개합니다.",
    href: "#vintage",
    accent: "#5C4A3A",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-ivory pt-[120px] pb-[140px] md:pt-[140px] md:pb-[160px] px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <FadeIn>
            <p className="text-[13px] tracking-[0.2em] uppercase text-oak mb-10 md:mb-14">
              Our Services
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] text-dark-brown font-normal tracking-[-0.02em] leading-[1.2]">
              무엇을 만들어 드릴까요
            </h2>
          </FadeIn>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-14 md:gap-y-12">
          {services.map((service, i) => (
            <FadeIn key={service.number} delay={i * 0.1}>
              <motion.a
                href={service.href}
                className="group block relative overflow-hidden"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.4 }}
              >
                {/* Number accent */}
                <span
                  className="font-serif text-6xl font-light absolute top-0 right-0 opacity-[0.05]"
                  style={{ color: service.accent }}
                >
                  {service.number}
                </span>

                <div className="relative">
                  <p className="text-[13px] tracking-[0.2em] uppercase text-oak mb-2">
                    {service.subtitle}
                  </p>
                  <h3 className="font-serif text-[22px] md:text-[26px] text-dark-brown mb-6 group-hover:text-brass transition-colors duration-500 tracking-[-0.01em] leading-[1.3]">
                    {service.title}
                  </h3>
                  <p className="text-base leading-[1.85] text-walnut mb-6 max-w-lg">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.12em] uppercase text-oak group-hover:text-brass transition-colors duration-500">
                    자세히 보기
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="w-full h-px bg-stone/15 mt-6" />
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
