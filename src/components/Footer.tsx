"use client";

import { FadeIn } from "./AnimationProvider";

export default function Footer() {
  return (
    <footer className="bg-matte-black text-ivory pt-20 md:pt-24 pb-10 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 md:mb-20">
          {/* Brand */}
          <div className="md:col-span-4">
            <FadeIn>
              <h3 className="font-serif text-[24px] md:text-[28px] text-ivory tracking-[0.1em] mb-4">
                MAISON 831
              </h3>
              <p className="text-[14px] leading-[1.85] text-ivory/45 max-w-xs">
                Curated Lifestyle Studio.
                <br />
                일과 취향이 만나는 공간.
              </p>
            </FadeIn>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <FadeIn delay={0.1}>
              <p className="text-[12px] tracking-[0.2em] uppercase text-ivory/35 mb-5">
                Menu
              </p>
              <ul className="space-y-2.5">
                {[
                  { label: "About", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "Development", href: "#development" },
                  { label: "Space", href: "#space" },
                  { label: "Workshop", href: "#workshop" },
                  { label: "Vintage", href: "#vintage" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-ivory/50 hover:text-brass transition-colors duration-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <FadeIn delay={0.15}>
              <p className="text-[12px] tracking-[0.2em] uppercase text-ivory/35 mb-5">
                Services
              </p>
              <ul className="space-y-2.5">
                {[
                  "홈페이지 제작",
                  "앱 개발",
                  "브랜딩 · UI/UX",
                  "공간대여",
                  "원데이 클래스",
                  "빈티지 컬렉션",
                ].map((service) => (
                  <li key={service}>
                    <span className="text-[14px] text-ivory/50">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <FadeIn delay={0.2}>
              <p className="text-[12px] tracking-[0.2em] uppercase text-ivory/35 mb-5">
                Contact
              </p>
              <div className="space-y-3 text-[14px]">
                <p className="text-ivory/50 leading-[1.8]">
                  경기도 성남시 수정구 고등로 3
                  <br />
                  현대지식산업센터 성남고등
                  <br />
                  8층 831호
                </p>
                <p>
                  <a
                    href="tel:010-8687-2129"
                    className="text-ivory/60 hover:text-brass transition-colors duration-500"
                  >
                    010-8687-2129
                  </a>
                </p>
                <p>
                  <a
                    href="https://instagram.com/maison831.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ivory/50 hover:text-brass transition-colors duration-500"
                  >
                    Instagram @maison831.kr
                  </a>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-ivory/10 pt-7 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-ivory/25 tracking-wider">
            &copy; 2026 MAISON 831. All rights reserved.
          </p>
          <p className="text-[12px] text-ivory/25 tracking-wider">
            Designed & Engineered by MAISON 831
          </p>
        </div>
      </div>
    </footer>
  );
}
