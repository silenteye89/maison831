"use client";

import { FadeIn, RevealText } from "./AnimationProvider";

export default function BrandStory() {
  return (
    <section id="about" className="pt-[180px] pb-[200px] md:pt-[220px] md:pb-[260px] px-6 md:px-12">
      <div className="max-w-[960px] mx-auto">
        {/* Section Label */}
        <FadeIn>
          <p className="text-[13px] tracking-[0.2em] uppercase text-stone/70 mb-16 md:mb-20">
            Our Story
          </p>
        </FadeIn>

        {/* Headline */}
        <div className="mb-16 md:mb-20">
          <RevealText className="font-serif text-[28px] sm:text-[34px] md:text-[42px] lg:text-[52px] leading-[1.15] tracking-[-0.02em] text-dark-brown font-medium">
            일과 취향,
          </RevealText>
          <RevealText
            className="font-serif text-[28px] sm:text-[34px] md:text-[42px] lg:text-[52px] leading-[1.15] tracking-[-0.02em] text-dark-brown font-medium"
            delay={0.15}
          >
            브랜드와 사람,
          </RevealText>
          <RevealText
            className="font-serif text-[28px] sm:text-[34px] md:text-[42px] lg:text-[52px] leading-[1.15] tracking-[-0.02em] text-dark-brown font-medium"
            delay={0.3}
          >
            기술과 공간을 연결합니다.
          </RevealText>
        </div>

        {/* Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24">
          {/* Left: Body */}
          <FadeIn delay={0.2}>
            <div className="max-w-[480px] space-y-7">
              <p className="text-[16px] md:text-[17px] leading-[1.8] text-walnut font-light">
                메종831은 단순한 웹사이트 제작회사가 아닙니다.
                사람들이 모이고, 배우고, 일하고, 경험하는 공간을 만듭니다.
                카이스트 출신 엔지니어가 함께 직접 디자인하고 개발합니다.
                유럽 빈티지 감성을 더한 라이프스타일 스튜디오입니다.
              </p>
              <p className="text-[16px] md:text-[17px] leading-[1.8] text-walnut font-light">
                홈페이지 제작과 앱 개발, 브랜딩부터
                공간대여, 원데이 클래스, 빈티지 컬렉션까지.
                일상의 모든 접점에서 브랜드 경험을 설계합니다.
              </p>
            </div>
          </FadeIn>

          {/* Right: Values */}
          <FadeIn delay={0.4}>
            <div className="bg-[#F8F4EE] p-10 md:p-14">
              <div>
                <p className="font-serif text-[20px] md:text-[22px] text-dark-brown mb-3 leading-[1.3] tracking-[-0.01em] font-medium">
                  Technology & Craft
                </p>
                <div className="w-[40px] h-[1px] bg-stone/30 mb-5" />
                <p className="text-[16px] leading-[1.8] text-walnut font-light">
                  카이스트 출신 엔지니어가 함께 직접 디자인하고 개발합니다.
                  기술의 깊이와 디자인의 감각이 만나
                  차별화된 디지털 경험을 만들어냅니다.
                </p>
              </div>

              <div className="my-12 md:my-16" />

              <div>
                <p className="font-serif text-[20px] md:text-[22px] text-dark-brown mb-3 leading-[1.3] tracking-[-0.01em] font-medium">
                  Space & Community
                </p>
                <div className="w-[40px] h-[1px] bg-stone/30 mb-5" />
                <p className="text-[16px] leading-[1.8] text-walnut font-light">
                  숲이 보이는 유럽 감성 공간에서
                  같은 취향을 가진 사람들이 모여
                  배우고, 나누고, 함께 성장하는 커뮤니티를 지향합니다.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Decorative */}
        <FadeIn delay={0.5} className="mt-28 md:mt-36 flex justify-center">
          <div className="w-[1px] h-16 bg-stone/20" />
        </FadeIn>
      </div>
    </section>
  );
}
