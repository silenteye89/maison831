"use client";

import { FadeIn, RevealText } from "./AnimationProvider";

export default function BrandStory() {
  return (
    <section id="about" className="pt-[120px] pb-[140px] md:pt-[140px] md:pb-[160px] px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Label */}
        <FadeIn>
          <p className="text-[13px] tracking-[0.2em] uppercase text-oak mb-10 md:mb-14">
            Our Story
          </p>
        </FadeIn>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[120px]">
          {/* Left: Brand Philosophy */}
          <div>
            {/* Headline */}
            <div className="mb-10 md:mb-14">
              <RevealText className="font-serif text-[28px] sm:text-[34px] md:text-[42px] lg:text-[52px] leading-[1.15] tracking-[-0.02em] text-dark-brown font-normal">
                일과 취향,
              </RevealText>
              <RevealText
                className="font-serif text-[28px] sm:text-[34px] md:text-[42px] lg:text-[52px] leading-[1.15] tracking-[-0.02em] text-dark-brown font-normal"
                delay={0.15}
              >
                브랜드와 사람,
              </RevealText>
              <RevealText
                className="font-serif text-[28px] sm:text-[34px] md:text-[42px] lg:text-[52px] leading-[1.15] tracking-[-0.02em] text-dark-brown font-normal"
                delay={0.3}
              >
                기술과 공간을 연결합니다.
              </RevealText>
            </div>

            {/* Brand Description */}
            <FadeIn delay={0.2}>
              <div className="max-w-[660px] space-y-6">
                <p className="text-base md:text-lg leading-[1.85] text-walnut">
                  메종831은 단순한 웹사이트 제작회사가 아닙니다.
                  사람들이 모이고, 배우고, 일하고, 경험하는 공간을 만듭니다.
                  카이스트 출신 엔지니어가 함께 직접 디자인하고 개발합니다.
                  유럽 빈티지 감성을 더한 라이프스타일 스튜디오입니다.
                </p>
                <p className="text-base md:text-lg leading-[1.85] text-walnut">
                  홈페이지 제작과 앱 개발, 브랜딩부터
                  공간대여, 원데이 클래스, 빈티지 컬렉션까지.
                  일상의 모든 접점에서 브랜드 경험을 설계합니다.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right: Core Values Card */}
          <FadeIn delay={0.4}>
            <div className="bg-[#F8F4EE] p-10 md:p-12 lg:p-14 self-start">
              <div className="max-w-[420px]">
                {/* Technology & Craft */}
                <div>
                  <p className="font-serif text-[20px] md:text-[22px] text-dark-brown mb-3 leading-[1.3] tracking-[-0.01em]">
                    Technology & Craft
                  </p>
                  <div className="w-[48px] h-[1px] bg-stone/40 mb-5" />
                  <p className="text-base leading-[1.85] text-walnut">
                    카이스트 출신 엔지니어가 함께 직접 디자인하고 개발합니다.
                    기술의 깊이와 디자인의 감각이 만나
                    차별화된 디지털 경험을 만들어냅니다.
                  </p>
                </div>

                {/* Spacer */}
                <div className="my-10 md:my-14" />

                {/* Space & Community */}
                <div>
                  <p className="font-serif text-[20px] md:text-[22px] text-dark-brown mb-3 leading-[1.3] tracking-[-0.01em]">
                    Space & Community
                  </p>
                  <div className="w-[48px] h-[1px] bg-stone/40 mb-5" />
                  <p className="text-base leading-[1.85] text-walnut">
                    숲이 보이는 유럽 감성 공간에서
                    같은 취향을 가진 사람들이 모여
                    배우고, 나누고, 함께 성장하는 커뮤니티를 지향합니다.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Decorative element */}
        <FadeIn delay={0.5} className="mt-20 md:mt-28 flex justify-center">
          <div className="w-[1px] h-16 bg-stone/25" />
        </FadeIn>
      </div>
    </section>
  );
}
