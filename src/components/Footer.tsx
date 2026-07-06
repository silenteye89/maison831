"use client";

import { FadeIn } from "./AnimationProvider";

export default function Footer() {
  return (
    <footer className="bg-matte-black text-ivory pt-20 md:pt-24 pb-8 px-6 md:px-10">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 mb-16 md:mb-20">
          <div className="md:col-span-4">
            <FadeIn>
              <h3 className="font-serif text-[22px] text-ivory tracking-[0.08em] mb-4">MAISON 831</h3>
              <p className="text-[13px] leading-[1.7] text-ivory/35 max-w-xs">Curated Lifestyle Studio.<br />일과 취향이 만나는 공간.</p>
            </FadeIn>
          </div>
          <div className="md:col-span-2">
            <FadeIn delay={0.08}>
              <p className="text-[11px] tracking-[0.15em] uppercase text-ivory/25 mb-4">Menu</p>
              <ul className="space-y-2">
                {["About", "Services", "Development", "Space", "Workshop", "Vintage", "Contact"].map((l) => (
                  <li key={l}><a href={`/#${l.toLowerCase()}`} className="text-[13px] text-ivory/40 hover:text-brass transition-colors duration-300">{l}</a></li>
                ))}
              </ul>
            </FadeIn>
          </div>
          <div className="md:col-span-3">
            <FadeIn delay={0.12}>
              <p className="text-[11px] tracking-[0.15em] uppercase text-ivory/25 mb-4">Services</p>
              <ul className="space-y-2">
                {["홈페이지 제작", "앱 개발", "브랜딩 · UI/UX", "공간대여", "원데이 클래스", "빈티지 컬렉션"].map((s) => (
                  <li key={s}><span className="text-[13px] text-ivory/40">{s}</span></li>
                ))}
              </ul>
            </FadeIn>
          </div>
          <div className="md:col-span-3">
            <FadeIn delay={0.16}>
              <p className="text-[11px] tracking-[0.15em] uppercase text-ivory/25 mb-4">Contact</p>
              <div className="space-y-3 text-[13px]">
                <p className="text-ivory/40 leading-[1.7]">경기도 성남시 수정구 고등로 3<br />현대지식산업센터 성남고등<br />8층 831호</p>
                <p><a href="tel:010-8687-2129" className="text-ivory/50 hover:text-brass transition-colors duration-300">010-8687-2129</a></p>
                <p><a href="https://instagram.com/maison831.kr" target="_blank" rel="noopener noreferrer" className="text-ivory/40 hover:text-brass transition-colors duration-300">Instagram @maison831.kr</a></p>
              </div>
            </FadeIn>
          </div>
        </div>
        <div className="border-t border-ivory/6 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[11px] text-ivory/18">&copy; 2026 MAISON 831. All rights reserved.</p>
          <p className="text-[11px] text-ivory/18">Designed & Engineered by MAISON 831</p>
        </div>
      </div>
    </footer>
  );
}
