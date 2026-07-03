"use client";

import { motion } from "framer-motion";
import { FadeIn, ImageReveal } from "./AnimationProvider";

const spaceImages = [
  {
    src: "/images/space-1.jpg",
    alt: "유럽 빈티지 인테리어",
    caption: "European Vintage Interior",
    span: "col-span-2 row-span-2",
    color: "#C4B59E",
  },
  {
    src: "/images/space-2.jpg",
    alt: "숲뷰 통창",
    caption: "Forest View Window",
    span: "col-span-1 row-span-1",
    color: "#3D5A3E",
  },
  {
    src: "/images/space-3.jpg",
    alt: "앤틱 가구",
    caption: "Antique Furniture",
    span: "col-span-1 row-span-1",
    color: "#8B7355",
  },
  {
    src: "/images/space-4.jpg",
    alt: "빈티지 소품",
    caption: "Curated Objects",
    span: "col-span-1 row-span-2",
    color: "#B8976A",
  },
  {
    src: "/images/space-5.jpg",
    alt: "분수와 정원",
    caption: "Garden & Fountain",
    span: "col-span-1 row-span-1",
    color: "#3D5A3E",
  },
  {
    src: "/images/space-6.jpg",
    alt: "갤러리 공간",
    caption: "Gallery Space",
    span: "col-span-1 row-span-1",
    color: "#2C2420",
  },
];

export default function OurSpace() {
  return (
    <section id="space" className="py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20 md:mb-28">
          <FadeIn>
            <p className="text-[11px] tracking-[0.3em] uppercase text-stone mb-8">
              Our Space
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-dark-brown font-light tracking-wide mb-6">
              공간이 전하는 이야기
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-sm text-oak/60 font-light max-w-lg mx-auto leading-relaxed">
              유럽 빈티지 감성이 깃든 공간에서 자연광과 숲의 풍경이 어우러지는
              특별한 경험을 만나보세요.
            </p>
          </FadeIn>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {spaceImages.map((img, i) => (
            <ImageReveal
              key={img.alt}
              delay={i * 0.1}
              className={`${
                i === 0
                  ? "col-span-2 row-span-2"
                  : i === 3
                  ? "col-span-1 md:row-span-2"
                  : ""
              }`}
            >
              <motion.div
                className="relative overflow-hidden group cursor-pointer"
                style={{
                  height: i === 0 ? "600px" : i === 3 ? "100%" : "280px",
                  minHeight: i === 3 ? "280px" : undefined,
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
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                  <p className="text-white text-[10px] tracking-[0.2em] uppercase">
                    {img.caption}
                  </p>
                </div>
              </motion.div>
            </ImageReveal>
          ))}
        </div>

        {/* Space Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 md:mt-28 bg-stone/10">
          {[
            { label: "숲뷰 통창", icon: "Forest View" },
            { label: "유럽 미장", icon: "European Plaster" },
            { label: "앤틱 가구", icon: "Antique" },
            { label: "자연광", icon: "Natural Light" },
          ].map((feature, i) => (
            <FadeIn key={feature.label} delay={i * 0.1}>
              <div className="bg-warm-white py-10 text-center">
                <p className="text-[10px] tracking-[0.2em] uppercase text-stone mb-2">
                  {feature.icon}
                </p>
                <p className="font-serif text-lg text-dark-brown">
                  {feature.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
