"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { workshops } from "@/lib/data";
import { FadeIn } from "@/components/AnimationProvider";

export default function WorkshopPage() {
  const activeWorkshops = workshops.filter((w) => w.active);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 bg-ivory">
        <div className="max-w-[1100px] mx-auto text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-oak mb-6">
              Workshop
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-dark-brown font-light tracking-wide mb-6">
              일상에 영감을 더하다
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-sm text-walnut max-w-lg mx-auto leading-[4]">
              위스키 클래스, 브랜딩 클래스, 취미 클래스 등
              다양한 원데이 클래스를 경험해보세요.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Workshop Grid */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {activeWorkshops.map((workshop, i) => (
              <FadeIn key={workshop.id} delay={i * 0.1}>
                <Link href={`/workshop/${workshop.id}`} className="group block">
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.4 }}>
                    {/* Image */}
                    <div className="overflow-hidden mb-6">
                      <div
                        className="aspect-[4/3] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                        style={{
                          backgroundImage: `url('${workshop.image}')`,
                          backgroundColor: "#C4B59E",
                        }}
                      />
                    </div>

                    {/* Info */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] tracking-[0.2em] uppercase text-brass">
                          {workshop.category}
                        </span>
                        <span className="w-4 h-[1px] bg-stone/30" />
                        <span className="text-[11px] text-oak">
                          {workshop.duration}
                        </span>
                      </div>

                      <h2 className="font-serif text-2xl md:text-3xl text-dark-brown group-hover:text-brass transition-colors duration-500">
                        {workshop.title}
                      </h2>

                      <p className="text-xs text-oak mb-1">
                        {workshop.subtitle}
                      </p>

                      <p className="text-sm text-walnut leading-[2]">
                        {workshop.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-stone/12">
                        <span className="text-sm text-dark-brown font-medium">
                          ₩{workshop.price.toLocaleString()}
                        </span>
                        <span className="text-xs text-oak">
                          {workshop.currentParticipants}/{workshop.maxParticipants}명
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center pb-20">
        <Link
          href="/"
          className="text-[11px] tracking-[0.15em] uppercase text-oak hover:text-brass transition-colors duration-500"
        >
          ← Back to Home
        </Link>
      </div>
    </>
  );
}
