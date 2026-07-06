"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getWorkshop } from "@/lib/data";
import { FadeIn } from "@/components/AnimationProvider";

export default function WorkshopDetailPage() {
  const params = useParams();
  const workshop = getWorkshop(params.id as string);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!workshop) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-dark-brown mb-4">
            클래스를 찾을 수 없습니다
          </h1>
          <Link href="/workshop" className="text-sm text-brass hover:underline">
            클래스 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const nextSchedule = workshop.schedules.find((s) => s.available);
  const ratingAvg =
    workshop.reviews.length > 0
      ? (workshop.reviews.reduce((sum, r) => sum + r.rating, 0) / workshop.reviews.length).toFixed(1)
      : null;

  return (
    <>
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-warm-white/92 backdrop-blur-md shadow-[0_1px_0_rgba(196,181,158,0.15)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link href="/" className="font-serif text-lg tracking-[0.2em] text-dark-brown">
            MAISON 831
          </Link>
          <Link href="/workshop" className="text-xs tracking-[0.15em] uppercase text-oak hover:text-brass transition-colors">
            All Workshops
          </Link>
        </div>
      </div>

      <main className="pt-16">
        {/* Hero Image */}
        <section className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="aspect-[21/9] md:aspect-[21/8] bg-cover bg-center"
                style={{
                  backgroundImage: `url('${workshop.gallery[selectedImage]}')`,
                  backgroundColor: "#C4B59E",
                }}
              />
            </AnimatePresence>
          </div>

          {/* Gallery Thumbnails */}
          {workshop.gallery.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {workshop.gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`transition-all duration-500 ${
                    i === selectedImage
                      ? "w-8 h-1 bg-white"
                      : "w-4 h-1 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`이미지 ${i + 1}`}
                />
              ))}
            </div>
          )}
        </section>

        {/* Content */}
        <section className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-[1000px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Title */}
                <FadeIn>
                  <div className="mb-10">
                    <span className="text-xs tracking-[0.2em] uppercase text-brass">
                      {workshop.category}
                    </span>
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-dark-brown font-light mt-3 mb-2">
                      {workshop.title}
                    </h1>
                    <p className="text-sm text-oak">{workshop.subtitle}</p>
                  </div>
                </FadeIn>

                {/* Short Description */}
                <FadeIn delay={0.1}>
                  <p className="text-base text-walnut leading-[4] mb-10 border-l-2 border-brass/30 pl-6">
                    {workshop.description}
                  </p>
                </FadeIn>

                {/* Detailed Description */}
                <FadeIn delay={0.15}>
                  <div className="mb-16">
                    <h2 className="font-serif text-xl text-dark-brown mb-6">
                      클래스 소개
                    </h2>
                    <div className="text-sm text-walnut leading-[2.4] whitespace-pre-line">
                      {workshop.detailedDescription}
                    </div>
                  </div>
                </FadeIn>

                {/* Gallery */}
                <FadeIn delay={0.2}>
                  <div className="mb-16">
                    <h2 className="font-serif text-xl text-dark-brown mb-6">
                      클래스 사진
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                      {workshop.gallery.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedImage(i)}
                          className="overflow-hidden group"
                        >
                          <div
                            className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{
                              backgroundImage: `url('${img}')`,
                              backgroundColor: "#C4B59E",
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                {/* FAQ */}
                <FadeIn delay={0.25}>
                  <div className="mb-16">
                    <h2 className="font-serif text-xl text-dark-brown mb-6">
                      자주 묻는 질문
                    </h2>
                    <div className="border-t border-stone/15">
                      {workshop.faq.map((item, i) => (
                        <div key={i} className="border-b border-stone/15">
                          <button
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            className="w-full flex items-center justify-between py-5 text-left group"
                          >
                            <span className="text-sm text-dark-brown pr-4 group-hover:text-brass transition-colors">
                              {item.question}
                            </span>
                            <motion.span
                              animate={{ rotate: openFaq === i ? 45 : 0 }}
                              className="text-oak shrink-0"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                              </svg>
                            </motion.span>
                          </button>
                          <AnimatePresence>
                            {openFaq === i && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <p className="text-sm text-walnut leading-[2] pb-5">
                                  {item.answer}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                {/* Reviews */}
                <FadeIn delay={0.3}>
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <h2 className="font-serif text-xl text-dark-brown">후기</h2>
                      {ratingAvg && (
                        <span className="text-sm text-brass">
                          ★ {ratingAvg} ({workshop.reviews.length}개)
                        </span>
                      )}
                    </div>
                    <div className="space-y-6">
                      {workshop.reviews.map((review, i) => (
                        <div key={i} className="border-b border-stone/10 pb-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-dark-brown">{review.name}</span>
                            <span className="text-xs text-oak">{review.date}</span>
                          </div>
                          <div className="flex gap-0.5 mb-2">
                            {Array.from({ length: 5 }).map((_, j) => (
                              <span
                                key={j}
                                className={`text-xs ${j < review.rating ? "text-brass" : "text-stone/30"}`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <p className="text-sm text-walnut leading-[2]">
                            {review.comment}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <FadeIn delay={0.1}>
                    <div className="bg-ivory border border-stone/12 p-8">
                      {/* Price */}
                      <div className="mb-6 pb-6 border-b border-stone/12">
                        <p className="text-[11px] tracking-[0.2em] uppercase text-oak mb-2">
                          참가 비용
                        </p>
                        <p className="font-serif text-3xl text-dark-brown">
                          ₩{workshop.price.toLocaleString()}
                        </p>
                      </div>

                      {/* Details */}
                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between text-sm">
                          <span className="text-oak">소요 시간</span>
                          <span className="text-dark-brown">{workshop.duration}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-oak">참가 인원</span>
                          <span className="text-dark-brown">
                            {workshop.currentParticipants}/{workshop.maxParticipants}명
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-oak">다음 일정</span>
                          <span className="text-dark-brown">
                            {nextSchedule ? nextSchedule.date : "미정"}
                          </span>
                        </div>
                      </div>

                      {/* Requirements */}
                      <div className="mb-8">
                        <p className="text-[11px] tracking-[0.2em] uppercase text-oak mb-3">
                          준비물
                        </p>
                        <ul className="space-y-2">
                          {workshop.requirements.map((req) => (
                            <li key={req} className="text-sm text-walnut flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-brass/50 mt-2 shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Location */}
                      <div className="mb-8">
                        <p className="text-[11px] tracking-[0.2em] uppercase text-oak mb-3">
                          진행 장소
                        </p>
                        <p className="text-sm text-walnut leading-[1.8]">
                          {workshop.location}
                        </p>
                      </div>

                      {/* CTA */}
                      <Link
                        href={`/reserve?type=workshop&id=${workshop.id}`}
                        className="block w-full text-center bg-dark-brown text-ivory text-[15px] tracking-[0.02em] font-medium h-[50px] leading-[50px] rounded-full hover:bg-brass hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out"
                      >
                        예약하기
                      </Link>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
