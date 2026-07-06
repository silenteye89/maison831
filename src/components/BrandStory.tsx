"use client";

import { FadeIn, RevealText } from "./AnimationProvider";

export default function BrandStory() {
  return (
    <section id="about" className="py-[120px] md:py-[140px] px-6 md:px-10">
      <div className="max-w-[1080px] mx-auto">
        <FadeIn>
          <p className="text-[12px] tracking-[0.15em] uppercase text-oak/50 mb-10 md:mb-12">Our Story</p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-12">
          {/* 왼쪽: 제목 + 본문 — 5분의 2 비중 */}
          <div className="lg:col-span-2">
            <div className="mb-10 md:mb-12">
              <RevealText className="font-serif text-[24px] sm:text-[28px] md:text-[34px] lg:text-[38px] leading-[1.18] tracking-[-0.025em] text-dark-brown">
                일과 취향,
              </RevealText>
              <RevealText className="font-serif text-[24px] sm:text-[28px] md:text-[34px] lg:text-[38px] leading-[1.18] tracking-[-0.025em] text-dark-brown" delay={0.12}>
                브랜드와 사람,
              </RevealText>
              <RevealText className="font-serif text-[24px] sm:text-[28px] md:text-[34px] lg:text-[38px] leading-[1.18] tracking-[-0.025em] text-dark-brown" delay={0.24}>
                기술과 공간을
              </RevealText>
              <RevealText className="font-serif text-[24px] sm:text-[28px] md:text-[34px] lg:text-[38px] leading-[1.18] tracking-[-0.025em] text-dark-brown" delay={0.36}>
                연결합니다.
              </RevealText>
            </div>

            <FadeIn delay={0.2}>
              <div className="space-y-5">
                <p className="text-[15px] leading-[1.8] text-walnut">
                  메종831은 단순한 웹사이트 제작회사가 아닙니다.
                  사람들이 모이고, 배우고, 일하고, 경험하는 공간을 만듭니다.
                  카이스트 출신 엔지니어가 함께 직접 디자인하고 개발합니다.
                </p>
                <p className="text-[15px] leading-[1.8] text-walnut">
                  홈페이지 제작과 앱 개발, 브랜딩부터
                  공간대여, 원데이 클래스, 빈티지 컬렉션까지.
                  일상의 모든 접점에서 브랜드 경험을 설계합니다.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* 오른쪽: 카드 — 5분의 3 비중, 높이 맞춤 */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.3}>
              <div className="bg-ivory/50 p-8 md:p-10 lg:p-12 h-full flex flex-col justify-between">
                <div>
                  <p className="font-serif text-[19px] text-dark-brown mb-3 tracking-[-0.01em]">Technology & Craft</p>
                  <div className="w-8 h-[1px] bg-stone/20 mb-5" />
                  <p className="text-[15px] leading-[1.8] text-walnut">
                    카이스트 출신 엔지니어가 함께 직접 디자인하고 개발합니다.
                    기술의 깊이와 디자인의 감각이 만나 차별화된 디지털 경험을 만들어냅니다.
                  </p>
                </div>

                <div className="w-full h-[1px] bg-stone/10 my-8 md:my-10" />

                <div>
                  <p className="font-serif text-[19px] text-dark-brown mb-3 tracking-[-0.01em]">Space & Community</p>
                  <div className="w-8 h-[1px] bg-stone/20 mb-5" />
                  <p className="text-[15px] leading-[1.8] text-walnut">
                    숲이 보이는 유럽 감성 공간에서 같은 취향을 가진 사람들이 모여
                    배우고, 나누고, 함께 성장하는 커뮤니티를 지향합니다.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
