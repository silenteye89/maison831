"use client";

import Link from "next/link";
import { FadeIn } from "./AnimationProvider";
import { workshops } from "@/lib/data";

export default function Workshop() {
  const activeWorkshops = workshops.filter((w) => w.active).slice(0, 4);

  return (
    <section id="workshop" className="bg-ivory pt-40 pb-40 md:pt-52 md:pb-52 px-6 md:px-10">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6">
          <div>
            <FadeIn><p className="text-[12px] tracking-[0.15em] uppercase text-oak/50 mb-8">Workshops</p></FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-dark-brown tracking-[-0.025em]">일상에 영감을 더하다</h2>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="text-[15px] text-walnut mt-5 max-w-md leading-[1.75]">
                위스키 클래스, 브랜딩 클래스, 취미 클래스 등 다양한 원데이 클래스를 경험해보세요.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.16}>
            <Link href="/workshop" className="text-[12px] tracking-[0.1em] uppercase text-oak/40 hover:text-brass transition-colors duration-300">전체 클래스 보기 →</Link>
          </FadeIn>
        </div>

        <div className="border-t border-stone/10">
          {activeWorkshops.map((w, i) => (
            <FadeIn key={w.id} delay={i * 0.06}>
              <Link href={`/workshop/${w.id}`} className="block">
                <div className="group border-b border-stone/10 py-8 md:py-10 hover:bg-cream/15 transition-colors duration-300 -mx-6 md:-mx-10 px-6 md:px-10">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center">
                    <div className="md:col-span-2">
                      <p className="text-[11px] tracking-[0.12em] uppercase text-brass/60">{w.category}</p>
                      {w.schedules[0] && <p className="font-serif text-[16px] text-dark-brown mt-1">{w.schedules[0].date.replace(/-/g, ". ")}</p>}
                    </div>
                    <div className="md:col-span-6">
                      <h3 className="font-serif text-[18px] md:text-[20px] text-dark-brown group-hover:text-brass transition-colors duration-300 mb-1.5 tracking-[-0.01em]">{w.title}</h3>
                      <p className="text-[12px] text-oak/35 mb-1">{w.subtitle}</p>
                      <p className="text-[14px] text-walnut leading-[1.7]">{w.description}</p>
                    </div>
                    <div className="md:col-span-2 flex md:flex-col gap-3 md:gap-1">
                      <p className="text-[12px] text-oak/40">{w.duration}</p>
                      <p className="text-[12px] text-brass/60">₩{w.price.toLocaleString()}</p>
                    </div>
                    <div className="md:col-span-2 md:text-right">
                      <span className="text-[11px] tracking-[0.1em] uppercase text-dark-brown opacity-0 group-hover:opacity-100 transition-opacity duration-300">자세히 →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
