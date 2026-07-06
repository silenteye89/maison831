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

const usages = ["회의", "촬영", "인터뷰", "클래스", "소모임", "파티룸", "스터디"];

export default function OurSpace() {
  return (
    <section id="space" className="py-[120px] md:py-[140px] px-6 md:px-10">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-16 md:mb-20">
          <div>
            <FadeIn><p className="text-[12px] tracking-[0.15em] uppercase text-oak/50 mb-8">Curated Space</p></FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-dark-brown tracking-[-0.025em]">
                당신만의<br />특별한 순간을 위해
              </h2>
            </FadeIn>
          </div>
          <div className="lg:pt-14">
            <FadeIn delay={0.16}>
              <p className="text-[15px] leading-[1.8] text-walnut max-w-[480px]">
                숲이 보이는 4m × 11m 통창 공간. 유럽 미장벽과 앤틱 가구, 오크 원목과 빈티지 조명이 어우러진 공간에서 따뜻한 햇살과 함께 특별한 순간을 만들어보세요.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-16 md:mb-20">
          {spaceImages.map((img, i) => (
            <ImageReveal key={img.alt} delay={i * 0.06} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <motion.div className="relative overflow-hidden group cursor-pointer" style={{ height: i === 0 ? "440px" : "210px", minHeight: "160px" }}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]" style={{ backgroundImage: `url('${img.src}')`, backgroundColor: img.color }} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-[11px] tracking-[0.12em] uppercase">{img.caption}</p>
                </div>
              </motion.div>
            </ImageReveal>
          ))}
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-10">
          {features.map((f, i) => (
            <FadeIn key={f.label} delay={i * 0.04}>
              <div className="text-center py-4">
                <p className="text-[11px] tracking-[0.1em] uppercase text-oak/30 mb-0.5">{f.detail}</p>
                <p className="font-serif text-[15px] text-dark-brown">{f.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {usages.map((u) => <span key={u} className="text-[12px] text-walnut/50 border border-stone/10 px-3.5 py-1.5 rounded-sm">{u}</span>)}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="text-center mt-16">
          <Link href="/reserve?type=space" className="inline-flex items-center justify-center gap-2.5 text-[13px] font-normal bg-dark-brown text-ivory px-7 h-12 rounded-full hover:bg-brass transition-colors duration-300">
            공간 예약하기
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
