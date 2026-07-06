"use client";

import { FadeIn } from "./AnimationProvider";

const inquiries = [
  { title: "홈페이지 제작 문의", subtitle: "Web Development", description: "기업 홈페이지, 쇼핑몰, 앱, 브랜딩 프로젝트" },
  { title: "공간 예약", subtitle: "Space Rental", description: "회의, 촬영, 파티, 소모임 공간대여" },
  { title: "클래스 신청", subtitle: "Workshop", description: "위스키, 브랜딩, 취미 원데이 클래스" },
  { title: "상담 예약", subtitle: "Consultation", description: "프로젝트 상담 및 일반 문의" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-ivory pt-40 pb-40 md:pt-52 md:pb-52 px-6 md:px-10">
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <FadeIn><p className="text-[12px] tracking-[0.15em] uppercase text-oak/50 mb-8">Contact & Reservation</p></FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-dark-brown tracking-[-0.025em] mb-5">함께 만들어갈 준비가 되셨나요</h2>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-[15px] text-walnut max-w-[440px] mx-auto leading-[1.75]">프로젝트 문의, 공간 예약, 클래스 신청 등 무엇이든 편하게 연락해주세요.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone/8 mb-16 md:mb-20">
          {inquiries.map((q, i) => (
            <FadeIn key={q.title} delay={i * 0.06}>
              <a href="tel:010-8687-2129" className="group block bg-ivory p-8 md:p-10 hover:bg-cream/20 transition-colors duration-300">
                <p className="text-[12px] tracking-[0.15em] uppercase text-oak/35 mb-3">{q.subtitle}</p>
                <h3 className="font-serif text-[18px] md:text-[20px] text-dark-brown mb-4 group-hover:text-brass transition-colors duration-300 tracking-[-0.01em]">{q.title}</h3>
                <p className="text-[15px] text-walnut leading-[1.75]">{q.description}</p>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pt-12 border-t border-stone/8">
            <div className="text-center md:text-left">
              <p className="text-[12px] tracking-[0.15em] uppercase text-oak/35 mb-4">Address</p>
              <p className="text-[15px] leading-[1.75] text-dark-brown/80">경기도 성남시 수정구 고등로 3<br />현대지식산업센터 성남고등<br />8층 831호</p>
            </div>
            <div className="text-center">
              <p className="text-[12px] tracking-[0.15em] uppercase text-oak/35 mb-4">Contact</p>
              <p className="text-[15px] leading-[1.75]"><a href="tel:010-8687-2129" className="text-dark-brown/80 hover:text-brass transition-colors duration-300">010-8687-2129</a></p>
              <p className="text-[15px] leading-[1.75] mt-1"><a href="https://maison831.com" target="_blank" rel="noopener noreferrer" className="text-dark-brown/80 hover:text-brass transition-colors duration-300">maison831.com</a></p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-[12px] tracking-[0.15em] uppercase text-oak/35 mb-4">Social</p>
              <p className="text-[15px]"><a href="https://instagram.com/maison831.kr" target="_blank" rel="noopener noreferrer" className="text-dark-brown/80 hover:text-brass transition-colors duration-300">@maison831.kr</a></p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
