"use client";

import { AnimatedText } from "./AnimatedSection";

export default function PhilosophySection() {
  return (
    <section className="py-28 md:py-36 bg-dark-brown relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-brass/30" />

      <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
        <AnimatedText
          as="p"
          className="text-[11px] tracking-[0.3em] text-brass uppercase mb-10"
        >
          Our Philosophy
        </AnimatedText>

        <AnimatedText
          as="h2"
          className="font-serif text-2xl md:text-3xl lg:text-[34px] text-warm-white leading-[1.4] tracking-[-0.01em] mb-12"
          delay={0.1}
        >
          우리가 지향하는 것
        </AnimatedText>

        <div className="space-y-8">
          <AnimatedText
            as="p"
            className="font-serif text-lg md:text-xl text-warm-white/85 leading-[1.9] tracking-[-0.01em]"
            delay={0.2}
          >
            우리는 더 많은 것을 만들기보다,
            <br />
            더 오래 기억되는 것을 만들고 싶습니다.
          </AnimatedText>

          <AnimatedText
            as="p"
            className="text-[15px] text-stone/70 leading-[2] max-w-xl mx-auto"
            delay={0.3}
          >
            기술은 브랜드를 돋보이게 하는 도구이며,
            <br />
            공간은 사람을 연결하는 매개체이고,
            <br />
            취향은 일상을 더 풍요롭게 만드는 힘이라고 믿습니다.
          </AnimatedText>

          <AnimatedText
            as="p"
            className="text-[15px] text-stone/50 leading-[1.9] max-w-lg mx-auto pt-4"
            delay={0.4}
          >
            메종831은 그 모든 접점을 하나의 경험으로 연결하는
            <br />
            라이프스타일 스튜디오입니다.
          </AnimatedText>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-brass/30" />
    </section>
  );
}
