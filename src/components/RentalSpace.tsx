"use client";

import { FadeIn, ImageReveal } from "./AnimationProvider";

export default function RentalSpace() {
  return (
    <section className="bg-cream/40 py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ImageReveal>
            <div
              className="aspect-[4/5] bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/rental.jpg')",
                backgroundColor: "#C4B59E",
              }}
            />
          </ImageReveal>

          {/* Content */}
          <div className="lg:py-12">
            <FadeIn>
              <p className="text-[11px] tracking-[0.3em] uppercase text-stone mb-8">
                Rental Space
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-dark-brown font-light tracking-wide mb-8">
                당신만의
                <br />
                특별한 순간을 위해
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sm leading-[2] text-oak/70 font-light mb-10 max-w-md">
                프라이빗 파티, 소규모 웨딩, 브랜드 촬영, 팝업 스토어.
                유럽 빈티지 감성이 깃든 Maison 831의 공간을 당신만의
                특별한 순간을 위해 대여하세요.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-5 mb-12">
                {[
                  { label: "프라이빗 파티", detail: "최대 30명" },
                  { label: "브랜드 촬영", detail: "스튜디오 조명 제공" },
                  { label: "팝업 스토어", detail: "주간/월간 단위" },
                  { label: "소규모 세미나", detail: "프로젝터 & 음향" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between border-b border-stone/10 pb-4"
                  >
                    <span className="text-sm text-dark-brown font-light">
                      {item.label}
                    </span>
                    <span className="text-xs text-stone font-light">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <a
                href="#"
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase bg-dark-brown text-ivory px-8 py-4 hover:bg-brass transition-colors duration-700"
              >
                공간 예약 문의
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
