"use client";

import { AnimatedSection, AnimatedText } from "./AnimatedSection";

const gridImages = [
  { src: "/images/space-1.jpg", alt: "Studio main view", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/space-4.jpg", alt: "Antique furniture corner", span: "" },
  { src: "/images/space-5.jpg", alt: "Forest view window", span: "" },
];

export default function VintageStylingSection() {
  return (
    <section id="space" className="py-24 md:py-32 bg-off-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <AnimatedText
          as="p"
          className="text-[11px] tracking-[0.3em] text-brass uppercase mb-4 text-center"
        >
          Our Space
        </AnimatedText>
        <AnimatedText
          as="h2"
          className="font-serif text-3xl md:text-4xl text-dark-brown text-center mb-4"
          delay={0.1}
        >
          유럽 감성 스튜디오
        </AnimatedText>
        <AnimatedText
          as="p"
          className="text-[14px] text-walnut/70 text-center mb-16 max-w-lg mx-auto"
          delay={0.15}
        >
          4m&times;11m의 넓은 공간에 미장벽, 앤틱 가구, 오크 원목이 어우러진
          숲뷰 스튜디오
        </AnimatedText>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* Large image */}
            <div className="col-span-2 row-span-2 relative aspect-square overflow-hidden">
              <img
                src={gridImages[0].src}
                alt={gridImages[0].alt}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Top right */}
            <div className="relative aspect-square overflow-hidden">
              <img
                src={gridImages[1].src}
                alt={gridImages[1].alt}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Top far right */}
            <div className="relative aspect-square overflow-hidden">
              <img
                src={gridImages[2].src}
                alt={gridImages[2].alt}
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Bottom right two */}
            <div className="relative aspect-square overflow-hidden">
              <img
                src="/images/space-6.jpg"
                alt="Studio detail"
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <img
                src="/images/space-3.jpg"
                alt="Studio atmosphere"
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
