"use client";

import Link from "next/link";
import { FadeIn } from "./AnimationProvider";
import { workshops } from "@/lib/data";

export default function Workshop() {
  const activeWorkshops = workshops.filter((w) => w.active).slice(0, 4);

  return (
    <section id="workshop" className="bg-ivory pt-[180px] pb-[200px] md:pt-[220px] md:pb-[260px] px-6 md:px-12">
      <div className="max-w-[960px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 md:mb-28 gap-8">
          <div>
            <FadeIn>
              <p className="text-[13px] tracking-[0.2em] uppercase text-stone/60 mb-12 md:mb-16">
                Workshops
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] text-dark-brown font-medium tracking-[-0.02em] leading-[1.2]">
                일상에 영감을 더하다
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-[16px] text-walnut font-light mt-8 max-w-md leading-[1.8]">
                위스키 클래스, 브랜딩 클래스, 취미 클래스 등
                다양한 원데이 클래스를 경험해보세요.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <Link href="/workshop" className="text-[13px] tracking-[0.12em] uppercase text-stone/50 hover:text-brass transition-colors duration-500">
              전체 클래스 보기 →
            </Link>
          </FadeIn>
        </div>

        {/* List */}
        <div className="border-t border-stone/12">
          {activeWorkshops.map((workshop, i) => (
            <FadeIn key={workshop.id} delay={i * 0.08}>
              <Link href={`/workshop/${workshop.id}`} className="block">
                <div className="group border-b border-stone/12 py-10 md:py-14 cursor-pointer hover:bg-cream/15 transition-colors duration-700 -mx-6 md:-mx-12 px-6 md:px-12">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
                    <div className="md:col-span-2">
                      <p className="text-[12px] tracking-[0.15em] uppercase text-brass/70">{workshop.category}</p>
                      {workshop.schedules[0] && (
                        <p className="font-serif text-[17px] text-dark-brown mt-1.5 font-medium">
                          {workshop.schedules[0].date.replace(/-/g, ". ")}
                        </p>
                      )}
                    </div>
                    <div className="md:col-span-6">
                      <h3 className="font-serif text-[20px] md:text-[22px] text-dark-brown group-hover:text-brass transition-colors duration-500 mb-3 tracking-[-0.01em] leading-[1.3] font-medium">
                        {workshop.title}
                      </h3>
                      <p className="text-[13px] text-stone/50 mb-2">{workshop.subtitle}</p>
                      <p className="text-[15px] text-walnut font-light leading-[1.75]">{workshop.description}</p>
                    </div>
                    <div className="md:col-span-2 flex md:flex-col gap-4 md:gap-1.5">
                      <p className="text-[13px] text-stone/50">{workshop.duration}</p>
                      <p className="text-[13px] text-brass/70">₩{workshop.price.toLocaleString()}</p>
                    </div>
                    <div className="md:col-span-2 md:text-right">
                      <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.12em] uppercase text-dark-brown opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        자세히 보기
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
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
