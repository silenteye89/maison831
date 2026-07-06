"use client";

import { AnimatedSection } from "./AnimatedSection";

export default function ShowroomSection() {
  return (
    <section id="showroom" className="relative min-h-[80vh] flex items-center">
      {/* Full-bleed background */}
      <img
        src="/images/space-2.jpg"
        alt="Maison 831 Showroom"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-matte-black/30" />

      {/* Floating card */}
      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-10 py-24">
        <AnimatedSection>
          <div className="bg-ivory/95 backdrop-blur-sm p-8 md:p-12 max-w-md ml-auto">
            <p className="text-[10px] tracking-[0.25em] text-brass uppercase mb-4">
              Visit Us
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-dark-brown mb-6">
              쇼룸 안내
            </h2>

            <div className="space-y-4 mb-8">
              <div>
                <p className="text-[11px] tracking-[0.1em] text-oak/60 uppercase mb-1">
                  Address
                </p>
                <p className="text-[14px] text-dark-brown">
                  대전광역시 유성구 어은동 831
                </p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.1em] text-oak/60 uppercase mb-1">
                  Hours
                </p>
                <p className="text-[14px] text-dark-brown">
                  화 – 토 11:00 – 19:00
                  <br />
                  <span className="text-oak/60">일 · 월 휴무</span>
                </p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.1em] text-oak/60 uppercase mb-1">
                  Phone
                </p>
                <p className="text-[14px] text-dark-brown">042-831-0831</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block bg-dark-brown text-warm-white px-7 py-3 text-[13px] tracking-[0.08em] hover:bg-walnut transition-colors duration-300"
            >
              방문 예약하기
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
