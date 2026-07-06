"use client";

import { AnimatedSection, AnimatedText } from "./AnimatedSection";

const areas = [
  {
    title: "Web & App",
    titleKr: "웹 & 앱 개발",
    description: "브랜드에 맞는 홈페이지, 쇼핑몰, 예약 시스템, 앱을 직접 디자인하고 개발합니다.",
    image: "/images/portfolio-1.jpg",
    href: "#web",
  },
  {
    title: "Space Rental",
    titleKr: "공간 대여",
    description: "4m×11m 숲뷰 유럽 감성 스튜디오. 미장벽, 앤틱 가구, 오크 원목이 어우러진 공간.",
    image: "/images/space-2.jpg",
    href: "#space",
  },
  {
    title: "One-day Class",
    titleKr: "원데이 클래스",
    description: "위스키, 브랜딩, 보태니컬 드로잉 등 취향을 탐험하는 클래스.",
    image: "/images/whisky.jpg",
    href: "#class",
  },
  {
    title: "Vintage Collection",
    titleKr: "빈티지 컬렉션",
    description: "유럽에서 직접 큐레이션한 의류, 앤틱 가구, 소품 컬렉션.",
    image: "/images/vintage-1.jpg",
    href: "#vintage",
  },
];

export default function BestCollectionSection() {
  return (
    <section className="py-24 md:py-32 bg-off-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <AnimatedText
          as="p"
          className="text-[11px] tracking-[0.3em] text-brass uppercase mb-4 text-center"
        >
          What We Do
        </AnimatedText>
        <AnimatedText
          as="h2"
          className="font-serif text-3xl md:text-4xl text-dark-brown text-center mb-16"
          delay={0.1}
        >
          네 가지 영역의 큐레이션
        </AnimatedText>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {areas.map((area, i) => (
            <AnimatedSection key={area.title} delay={i * 0.1}>
              <a
                href={area.href}
                className="group block relative aspect-[4/3] overflow-hidden"
              >
                <img
                  src={area.image}
                  alt={area.titleKr}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/70 via-matte-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-[10px] tracking-[0.25em] text-brass uppercase mb-2">
                    {area.title}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-warm-white mb-2">
                    {area.titleKr}
                  </h3>
                  <p className="text-[13px] text-stone/90 leading-relaxed max-w-xs">
                    {area.description}
                  </p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
