"use client";

import { FadeIn, RevealText } from "./AnimationProvider";

export default function BrandStory() {
  return (
    <section id="story" className="py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Label */}
        <FadeIn>
          <p className="text-[11px] tracking-[0.3em] uppercase text-stone mb-16 md:mb-20">
            Our Story
          </p>
        </FadeIn>

        {/* Main Statement */}
        <div className="mb-20 md:mb-28">
          <RevealText className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] text-dark-brown font-light">
            좋은 공간이
          </RevealText>
          <RevealText
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] text-dark-brown font-light"
            delay={0.15}
          >
            좋은 사람을 만든다.
          </RevealText>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <p className="text-sm leading-[2] text-oak/80 font-light">
                Maison 831은 단순한 카페가 아닙니다.
                유럽 빈티지 감성과 숲이 보이는 공간에서, 사람들이 커피를 마시고,
                취향을 발견하고, 배우고, 이야기하고, 작업하고, 창작하는
                하나의 라이프스타일 공간입니다.
              </p>
              <p className="text-sm leading-[2] text-oak/80 font-light">
                우리는 공간이 가진 힘을 믿습니다. 프렌치 살롱의 우아함,
                유럽 저택 응접실의 따뜻함, 갤러리의 영감이 공존하는 이곳에서
                당신만의 라이프스타일을 발견하세요.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="space-y-8">
              <div>
                <p className="font-serif text-lg text-dark-brown mb-2">
                  Curated Experience
                </p>
                <p className="text-sm leading-[2] text-oak/80 font-light">
                  스페셜티 커피부터 빈티지 셀렉트샵, 위스키 클래스까지.
                  일상의 모든 순간을 특별하게 만드는 경험을 큐레이션합니다.
                </p>
              </div>
              <div className="w-12 h-[1px] bg-stone/30" />
              <div>
                <p className="font-serif text-lg text-dark-brown mb-2">
                  Creative Community
                </p>
                <p className="text-sm leading-[2] text-oak/80 font-light">
                  같은 취향을 가진 사람들이 모여 배우고, 나누고, 함께 성장하는
                  크리에이티브 커뮤니티를 지향합니다.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Decorative element */}
        <FadeIn delay={0.5} className="mt-28 md:mt-36 flex justify-center">
          <div className="w-[1px] h-20 bg-stone/20" />
        </FadeIn>
      </div>
    </section>
  );
}
