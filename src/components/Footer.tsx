"use client";

import { FadeIn } from "./AnimationProvider";

export default function Footer() {
  return (
    <footer className="bg-matte-black text-ivory pt-24 md:pt-32 pb-10 px-6 md:px-12">
      <div className="max-w-[960px] mx-auto">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20 md:mb-28">
          <div className="md:col-span-4">
            <FadeIn>
              <h3 className="font-serif text-[24px] md:text-[28px] text-ivory tracking-[0.1em] mb-5 font-medium">MAISON 831</h3>
              <p className="text-[14px] leading-[1.8] text-ivory/40 font-light max-w-xs">
                Curated Lifestyle Studio.<br />일과 취향이 만나는 공간.
              </p>
            </FadeIn>
          </div>
          <div className="md:col-span-2">
            <FadeIn delay={0.1}>
              <p className="text-[12px] tracking-[0.2em] uppercase text-ivory/30 mb-6">Menu</p>
              <ul className="space-y-3">
                {[
                  { label: "About", href: "#about" }, { label: "Services", href: "#services" },
                  { label: "Development", href: "#development" }, { label: "Space", href: "#space" },
                  { label: "Workshop", href: "#workshop" }, { label: "Vintage", href: "#vintage" },
                  { label: "Contact", href: "#contact" },
                ].map((l) => (
                  <li key={l.label}><a href={l.href} className="text-[14px] text-ivory/45 hover:text-brass transition-colors duration-500 font-light">{l.label}</a></li>
                ))}
              </ul>
            </FadeIn>
          </div>
          <div className="md:col-span-3">
            <FadeIn delay={0.15}>
              <p className="text-[12px] tracking-[0.2em] uppercase text-ivory/30 mb-6">Services</p>
              <ul className="space-y-3">
                {["홈페이지 제작", "앱 개발", "브랜딩 · UI/UX", "공간대여", "원데이 클래스", "빈티지 컬렉션"].map((s) => (
                  <li key={s}><span className="text-[14px] text-ivory/45 font-light">{s}</span></li>
                ))}
              </ul>
            </FadeIn>
          </div>
          <div className="md:col-span-3">
            <FadeIn delay={0.2}>
              <p className="text-[12px] tracking-[0.2em] uppercase text-ivory/30 mb-6">Contact</p>
              <div className="space-y-4 text-[14px] font-light">
                <p className="text-ivory/45 leading-[1.8]">경기도 성남시 수정구 고등로 3<br />현대지식산업센터 성남고등<br />8층 831호</p>
                <p><a href="tel:010-8687-2129" className="text-ivory/55 hover:text-brass transition-colors duration-500">010-8687-2129</a></p>
                <p><a href="https://instagram.com/maison831.kr" target="_blank" rel="noopener noreferrer" className="text-ivory/45 hover:text-brass transition-colors duration-500">Instagram @maison831.kr</a></p>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="border-t border-ivory/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-ivory/20 tracking-wider">&copy; 2026 MAISON 831. All rights reserved.</p>
          <p className="text-[12px] text-ivory/20 tracking-wider">Designed & Engineered by MAISON 831</p>
        </div>
      </div>
    </footer>
  );
}
