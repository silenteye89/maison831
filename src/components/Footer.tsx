"use client";

import { FadeIn } from "./AnimationProvider";

export default function Footer() {
  return (
    <footer className="bg-matte-black text-ivory pt-24 md:pt-32 pb-10 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20 md:mb-28">
          {/* Brand */}
          <div className="md:col-span-4">
            <FadeIn>
              <h3 className="font-serif text-3xl md:text-4xl text-ivory tracking-[0.12em] mb-6">
                MAISON 831
              </h3>
              <p className="text-xs leading-[4] text-ivory/50 max-w-xs">
                Curated Lifestyle Studio.
                <br />
                일과 취향이 만나는 공간.
              </p>
            </FadeIn>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <FadeIn delay={0.1}>
              <p className="text-[11px] tracking-[0.3em] uppercase text-ivory/40 mb-6">
                Menu
              </p>
              <ul className="space-y-3">
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
                      className="text-xs text-ivory/55 hover:text-brass transition-colors duration-500"
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
              <p className="text-[11px] tracking-[0.3em] uppercase text-ivory/40 mb-6">
                Services
              </p>
              <ul className="space-y-3">
                {[
                  "홈페이지 제작",
                  "앱 개발",
                  "브랜딩 · UI/UX",
                  "공간대여",
                  "원데이 클래스",
                  "빈티지 컬렉션",
                ].map((service) => (
                  <li key={service}>
                    <span className="text-xs text-ivory/55">
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
              <p className="text-[11px] tracking-[0.3em] uppercase text-ivory/40 mb-6">
                Contact
              </p>
              <div className="space-y-4 text-xs">
                <p className="text-ivory/55 leading-[2]">
                  경기도 성남시 수정구 고등로 3
                  <br />
                  현대지식산업센터 성남고등
                  <br />
                  8층 831호
                </p>
                <p>
                  <a
                    href="tel:010-8687-2129"
                    className="text-ivory/65 hover:text-brass transition-colors duration-500"
                  >
                    010-8687-2129
                  </a>
                </p>
                <p>
                  <a
                    href="https://instagram.com/maison831.kr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ivory/55 hover:text-brass transition-colors duration-500"
                  >
                    Instagram @maison831.kr
                  </a>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-ivory/30 tracking-wider">
            &copy; 2026 MAISON 831. All rights reserved.
          </p>
          <p className="text-[11px] text-ivory/30 tracking-wider">
            Designed & Engineered by MAISON 831
          </p>
        </div>
      </div>
    </footer>
  );
}
