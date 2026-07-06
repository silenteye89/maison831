"use client";

import { FadeIn } from "./AnimationProvider";

const inquiryTypes = [
  {
    title: "홈페이지 제작 문의",
    subtitle: "Web Development",
    description: "기업 홈페이지, 쇼핑몰, 앱, 브랜딩 프로젝트",
  },
  {
    title: "공간 예약",
    subtitle: "Space Rental",
    description: "회의, 촬영, 파티, 소모임 공간대여",
  },
  {
    title: "클래스 신청",
    subtitle: "Workshop",
    description: "위스키, 브랜딩, 취미 원데이 클래스",
  },
  {
    title: "상담 예약",
    subtitle: "Consultation",
    description: "프로젝트 상담 및 일반 문의",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-ivory pt-[140px] pb-[160px] md:pt-[180px] md:pb-[200px] px-8 md:px-16">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-32 md:mb-44">
          <FadeIn>
            <p className="text-[13px] tracking-[0.3em] uppercase text-oak mb-12">
              Contact & Reservation
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-dark-brown font-light tracking-wide mb-16 leading-[1.8]">
              함께 만들어갈 준비가 되셨나요
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base md:text-lg text-walnut max-w-lg mx-auto leading-[2.4]">
              프로젝트 문의, 공간 예약, 클래스 신청 등
              <br />
              무엇이든 편하게 연락해주세요.
            </p>
          </FadeIn>
        </div>

        {/* Inquiry Types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mb-32 md:mb-44">
          {inquiryTypes.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <a
                href="tel:010-8687-2129"
                className="group block p-10 md:p-14 border border-stone/12 hover:bg-cream/30 transition-all duration-700"
              >
                <p className="text-[12px] tracking-[0.3em] uppercase text-oak mb-5">
                  {item.subtitle}
                </p>
                <h3 className="font-serif text-2xl md:text-[1.75rem] text-dark-brown mb-8 group-hover:text-brass transition-colors duration-500 leading-[1.8]">
                  {item.title}
                </h3>
                <p className="text-base text-walnut leading-[1.9]">
                  {item.description}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>

        {/* Contact Info */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 pt-16 border-t border-stone/12">
            {/* Address */}
            <div className="text-center md:text-left">
              <p className="text-[12px] tracking-[0.3em] uppercase text-oak mb-8">
                Address
              </p>
              <p className="text-base leading-[2.4] text-dark-brown">
                경기도 성남시 수정구 고등로 3
                <br />
                현대지식산업센터 성남고등
                <br />
                8층 831호
              </p>
            </div>

            {/* Contact */}
            <div className="text-center">
              <p className="text-[12px] tracking-[0.3em] uppercase text-oak mb-8">
                Contact
              </p>
              <p className="text-base leading-[2.4] text-dark-brown">
                <a href="tel:010-8687-2129" className="hover:text-brass transition-colors duration-500">
                  010-8687-2129
                </a>
              </p>
              <p className="text-base leading-[2.4] text-dark-brown mt-3">
                <a
                  href="https://maison831.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brass transition-colors duration-500"
                >
                  maison831.com
                </a>
              </p>
            </div>

            {/* Social */}
            <div className="text-center md:text-right">
              <p className="text-[12px] tracking-[0.3em] uppercase text-oak mb-8">
                Social
              </p>
              <p className="text-base leading-[2.4] text-dark-brown">
                <a
                  href="https://instagram.com/maison831.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brass transition-colors duration-500"
                >
                  @maison831.kr
                </a>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
