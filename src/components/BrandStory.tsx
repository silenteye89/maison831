"use client";

import { FadeIn, RevealText } from "./AnimationProvider";

export default function BrandStory() {
  return (
    <section id="about" className="pt-40 pb-40 md:pt-52 md:pb-52 px-6 md:px-10">
      <div className="max-w-[1080px] mx-auto">
        <FadeIn>
          <p className="text-[12px] tracking-[0.15em] uppercase text-oak/50 mb-12 md:mb-16">Our Story</p>
        </FadeIn>

        <div className="mb-12 md:mb-16">
          <RevealText className="font-serif text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.025em] text-dark-brown">
            일과 취향,
          </RevealText>
          <RevealText className="font-serif text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.025em] text-dark-brown" delay={0.12}>
            브랜드와 사람,
          </RevealText>
          <RevealText className="font-serif text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.15] tracking-[-0.025em] text-dark-brown" delay={0.24}>
            기술과 공간을 연결합니다.
          </RevealText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <FadeIn delay={0.2}>
            <div className="max-w-[520px] space-y-6">
              <p className="text-[15px] leading-[1.75] text-walnut">
                메종831은 단순한 웹사이트 제작회사가 아닙니다.
                사람들이 모이고, 배우고, 일하고, 경험하는 공간을 만듭니다.
                카이스트 출신 엔지니어가 함께 직접 디자인하고 개발합니다.
                유럽 빈티지 감성을 더한 라이프스타일 스튜디오입니다.
              </p>
              <p className="text-[15px] leading-[1.75] text-walnut">
                홈페이지 제작과 앱 개발, 브랜딩부터
                공간대여, 원데이 클래스, 빈티지 컬렉션까지.
                일상의 모든 접점에서 브랜드 경험을 설계합니다.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="bg-ivory/60 p-8 md:p-10">
              <div>
                <p className="font-serif text-[19px] text-dark-brown mb-2.5 tracking-[-0.01em]">Technology & Craft</p>
                <div className="w-8 h-[1px] bg-stone/25 mb-4" />
                <p className="text-[15px] leading-[1.75] text-walnut">
                  카이스트 출신 엔지니어가 함께 직접 디자인하고 개발합니다.
                  기술의 깊이와 디자인의 감각이 만나 차별화된 디지털 경험을 만들어냅니다.
                </p>
              </div>
              <div className="my-8" />
              <div>
                <p className="font-serif text-[19px] text-dark-brown mb-2.5 tracking-[-0.01em]">Space & Community</p>
                <div className="w-8 h-[1px] bg-stone/25 mb-4" />
                <p className="text-[15px] leading-[1.75] text-walnut">
                  숲이 보이는 유럽 감성 공간에서 같은 취향을 가진 사람들이 모여
                  배우고, 나누고, 함께 성장하는 커뮤니티를 지향합니다.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
