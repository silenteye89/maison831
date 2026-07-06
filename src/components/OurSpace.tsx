"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, ImageReveal } from "./AnimationProvider";

const spaceImages = [
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", alt: "유럽 빈티지 인테리어", caption: "European Vintage Interior", color: "#C4B59E" },
  { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80", alt: "숲뷰 통창", caption: "Forest View Window", color: "#3D5A3E" },
  { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", alt: "앤틱 가구", caption: "Antique Furniture", color: "#8B7355" },
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80", alt: "빈티지 소품", caption: "Curated Objects", color: "#B8976A" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", alt: "작업 공간", caption: "Creative Workspace", color: "#3D5A3E" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", alt: "갤러리 공간", caption: "Gallery Space", color: "#2C2420" },
];

const features = [
  { label: "숲뷰 통창", detail: "Forest View" },
  { label: "4m × 11m", detail: "Dimension" },
  { label: "앤틱 가구", detail: "Antique" },
  { label: "자연광", detail: "Natural Light" },
  { label: "빈티지 감성", detail: "Vintage" },
  { label: "촬영 가능", detail: "Photo Ready" },
];

const usages = [
  { label: "회의" },
  { label: "촬영" },
  { label: "인터뷰" },
  { label: "클래스" },
  { label: "소모임" },
  { label: "파티룸" },
  { label: "스터디" },
];

export default function OurSpace() {
  return (
    <section id="space" className="pt-[140px] pb-[160px] md:pt-[180px] md:pb-[200px] px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 md:mb-28">
          <div>
            <FadeIn>
              <p className="text-xs tracking-[0.3em] uppercase text-oak mb-8">
                Curated Space
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-dark-brown font-light tracking-wide leading-[1.3]">
                당신만의
                <br />
                특별한 순간을 위해
              </h2>
            </FadeIn>
          </div>
          <div className="flex items-end">
            <FadeIn delay={0.2}>
              <p className="text-sm leading-[4] text-walnut max-w-md">
                숲이 보이는 4m × 11m 통창 공간.
                유럽 미장벽과 앤틱 가구, 오크 원목과 빈티지 조명이
                어우러진 공간에서 따뜻한 햇살과 함께
                특별한 순간을 만들어보세요.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-20 md:mb-28">
          {spaceImages.map((img, i) => (
            <ImageReveal
              key={img.alt}
              delay={i * 0.08}
              className={i === 0 ? "col-span-2 row-span-2" : ""}
            >
              <motion.div
                className="relative overflow-hidden group cursor-pointer"
                style={{
                  height: i === 0 ? "550px" : "260px",
                  minHeight: "200px",
                }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${img.src}')`,
                    backgroundColor: img.color,
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                  <p className="text-white text-[11px] tracking-[0.2em] uppercase">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            </ImageReveal>
          ))}
        </div>

        {/* Space Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mb-14 md:mb-16">
          {features.map((feature, i) => (
            <FadeIn key={feature.label} delay={i * 0.06}>
              <div className="py-8 md:py-10 text-center">
                <p className="text-[11px] tracking-[0.2em] uppercase text-oak mb-1.5">
                  {feature.detail}
                </p>
                <p className="font-serif text-base md:text-lg text-dark-brown">
                  {feature.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Usage Types */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-14 md:mb-16">
            {usages.map((usage) => (
              <span
                key={usage.label}
                className="text-xs tracking-[0.1em] text-walnut border border-stone/18 px-5 py-2.5"
              >
                {usage.label}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.3} className="text-center mt-20 md:mt-24">
          <Link
            href="/reserve?type=space"
            className="inline-flex items-center justify-center gap-4 text-[15px] tracking-[0.02em] font-medium bg-dark-brown text-ivory px-8 h-[50px] rounded-full hover:bg-brass hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;공간 예약하기
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
