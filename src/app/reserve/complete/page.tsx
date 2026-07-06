"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getReservation } from "@/lib/store";
import { MAISON_ADDRESS, MAISON_COORDS } from "@/lib/data";
import type { Reservation } from "@/lib/types";
import { FadeIn } from "@/components/AnimationProvider";

function CompletionContent() {
  const searchParams = useSearchParams();
  const rid = searchParams.get("rid");
  const [reservation, setReservation] = useState<Reservation | null>(null);

  useEffect(() => {
    if (rid) {
      const r = getReservation(rid);
      if (r) setReservation(r);
    }
  }, [rid]);

  if (!reservation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-dark-brown mb-4">
            예약 정보를 찾을 수 없습니다
          </h1>
          <Link href="/" className="text-sm text-brass hover:underline">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const typeLabel = {
    workshop: "클래스 예약",
    space: "공간 예약",
    consultation: "상담 예약",
  }[reservation.type];

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${MAISON_COORDS.lat},${MAISON_COORDS.lng}`;
  const kakaoMapUrl = `https://map.kakao.com/link/to/MAISON 831,${MAISON_COORDS.lat},${MAISON_COORDS.lng}`;

  const calendarUrl = (() => {
    const startDate = reservation.date.replace(/-/g, "");
    const startTime = reservation.time.replace(":", "") + "00";
    const endHour = String(Number(reservation.time.split(":")[0]) + 2).padStart(2, "0");
    const endTime = `${endHour}0000`;
    const title = reservation.workshopTitle || typeLabel;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}T${startTime}/${startDate}T${endTime}&location=${encodeURIComponent(MAISON_ADDRESS)}&details=${encodeURIComponent(`MAISON 831 ${typeLabel}`)}`;
  })();

  return (
    <>
      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-warm-white/92 backdrop-blur-md shadow-[0_1px_0_rgba(196,181,158,0.15)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link href="/" className="font-serif text-lg tracking-[0.2em] text-dark-brown">
            MAISON 831
          </Link>
        </div>
      </div>

      <main className="pt-16 min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-[520px] w-full py-20">
          <FadeIn>
            <div className="text-center mb-12">
              {/* Check Icon */}
              <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl text-dark-brown font-light mb-3">
                예약이 완료되었습니다
              </h1>
              <p className="text-sm text-walnut">
                확인 후 연락드리겠습니다.
              </p>
            </div>
          </FadeIn>

          {/* Reservation Details */}
          <FadeIn delay={0.15}>
            <div className="bg-ivory border border-stone/12 p-8 mb-8">
              <div className="space-y-5">
                <div className="flex justify-between items-start">
                  <span className="text-[11px] tracking-[0.15em] uppercase text-oak">예약번호</span>
                  <span className="text-sm text-dark-brown font-medium font-mono">
                    {reservation.id}
                  </span>
                </div>
                <div className="h-px bg-stone/10" />

                <div className="flex justify-between">
                  <span className="text-[11px] tracking-[0.15em] uppercase text-oak">유형</span>
                  <span className="text-sm text-dark-brown">{typeLabel}</span>
                </div>

                {reservation.workshopTitle && (
                  <div className="flex justify-between">
                    <span className="text-[11px] tracking-[0.15em] uppercase text-oak">클래스</span>
                    <span className="text-sm text-dark-brown">{reservation.workshopTitle}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-[11px] tracking-[0.15em] uppercase text-oak">예약일시</span>
                  <span className="text-sm text-dark-brown">
                    {reservation.date} {reservation.time}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[11px] tracking-[0.15em] uppercase text-oak">예약자</span>
                  <span className="text-sm text-dark-brown">{reservation.name}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[11px] tracking-[0.15em] uppercase text-oak">연락처</span>
                  <span className="text-sm text-dark-brown">{reservation.phone}</span>
                </div>

                {reservation.participants > 1 && (
                  <div className="flex justify-between">
                    <span className="text-[11px] tracking-[0.15em] uppercase text-oak">인원</span>
                    <span className="text-sm text-dark-brown">{reservation.participants}명</span>
                  </div>
                )}

                <div className="h-px bg-stone/10" />

                <div>
                  <span className="text-[11px] tracking-[0.15em] uppercase text-oak block mb-2">
                    주소
                  </span>
                  <p className="text-sm text-dark-brown leading-[1.8]">
                    {MAISON_ADDRESS}
                  </p>
                </div>

                <div className="flex justify-between">
                  <span className="text-[11px] tracking-[0.15em] uppercase text-oak">상태</span>
                  <span className="text-xs bg-brass/15 text-brass px-3 py-1">
                    예약 확인 중
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Action Buttons */}
          <FadeIn delay={0.25}>
            <div className="grid grid-cols-2 gap-3 mb-6">
              <a
                href={kakaoMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 border border-stone/20 text-sm text-dark-brown hover:border-brass/40 transition-colors duration-500"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                지도보기
              </a>
              <a
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 border border-stone/20 text-sm text-dark-brown hover:border-brass/40 transition-colors duration-500"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                캘린더 추가
              </a>
            </div>

            <Link
              href="/"
              className="block w-full text-center bg-dark-brown text-ivory text-[15px] tracking-[0.02em] font-medium h-[50px] leading-[50px] rounded-full hover:bg-brass hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out"
            >
              홈으로 돌아가기
            </Link>
          </FadeIn>
        </div>
      </main>
    </>
  );
}

export default function ReserveCompletePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-sm text-oak">Loading...</p>
        </div>
      }
    >
      <CompletionContent />
    </Suspense>
  );
}
