"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getWorkshop, spaceTimeSlots } from "@/lib/data";
import { addReservation } from "@/lib/store";
import Calendar from "@/components/Calendar";
import { FadeIn } from "@/components/AnimationProvider";

function ReservationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const type = (searchParams.get("type") || "consultation") as "workshop" | "space" | "consultation";
  const workshopId = searchParams.get("id") || "";

  const workshop = type === "workshop" ? getWorkshop(workshopId) : null;

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    participants: 1,
    message: "",
    company: "",
    purpose: "",
    referenceUrl: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableDates = useMemo(() => {
    if (type === "workshop" && workshop) {
      return workshop.schedules.filter((s) => s.available).map((s) => s.date);
    }
    return undefined;
  }, [type, workshop]);

  const availableTimes = useMemo(() => {
    if (type === "workshop" && workshop && selectedDate) {
      return workshop.schedules
        .filter((s) => s.date === selectedDate && s.available)
        .map((s) => s.time);
    }
    if (type === "space") {
      return spaceTimeSlots;
    }
    return ["언제든", "09:00", "10:00", "11:00", "14:00", "15:00"];
  }, [type, workshop, selectedDate]);

  const pageTitle = {
    workshop: workshop?.title || "클래스 예약",
    space: "공간 예약",
    consultation: "무료 상담 예약",
  }[type];

  const pageSubtitle = {
    workshop: workshop?.subtitle || "",
    space: "4m × 11m 숲뷰 유럽 감성 공간",
    consultation: "카이스트 출신 엔지니어와 직접 상담",
  }[type];

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !selectedDate || !selectedTime) {
      alert("필수 항목을 모두 입력해주세요.");
      return;
    }
    setIsSubmitting(true);

    const reservation = addReservation({
      type,
      workshopId: workshop?.id,
      workshopTitle: workshop?.title,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      participants: formData.participants,
      message: formData.message,
      date: selectedDate,
      time: selectedTime,
      company: formData.company || undefined,
      purpose: formData.purpose || undefined,
      referenceUrl: formData.referenceUrl || undefined,
      budget: formData.budget || undefined,
    });

    setTimeout(() => {
      router.push(`/reserve/complete?rid=${reservation.id}`);
    }, 600);
  };

  const inputClass =
    "w-full bg-transparent border border-stone/20 text-dark-brown text-sm px-4 py-3.5 focus:outline-none focus:border-brass/60 transition-colors duration-500 placeholder:text-stone/50";

  return (
    <>
      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-warm-white/92 backdrop-blur-md shadow-[0_1px_0_rgba(196,181,158,0.15)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <Link href="/" className="font-serif text-lg tracking-[0.2em] text-dark-brown">
            MAISON 831
          </Link>
          <Link href="/" className="text-xs tracking-[0.15em] uppercase text-oak hover:text-brass transition-colors">
            Home
          </Link>
        </div>
      </div>

      <main className="pt-16 min-h-screen">
        {/* Header */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-6 md:px-12 bg-ivory">
          <div className="max-w-[900px] mx-auto text-center">
            <FadeIn>
              <p className="text-xs tracking-[0.3em] uppercase text-brass mb-4">
                Reservation
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-dark-brown font-light mb-3">
                {pageTitle}
              </h1>
              <p className="text-sm text-walnut">{pageSubtitle}</p>
            </FadeIn>
          </div>
        </section>

        {/* Form */}
        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="max-w-[900px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left: Calendar */}
              <div>
                <FadeIn>
                  <h2 className="font-serif text-xl text-dark-brown mb-6">
                    {type === "consultation" ? "상담 희망일 선택" : "날짜 선택"}
                  </h2>
                  <div className="bg-ivory border border-stone/12 p-6">
                    <Calendar
                      availableDates={availableDates}
                      selectedDate={selectedDate}
                      onSelectDate={setSelectedDate}
                    />
                  </div>
                </FadeIn>

                {/* Time Selection */}
                {selectedDate && (
                  <FadeIn delay={0.1}>
                    <div className="mt-8">
                      <h2 className="font-serif text-xl text-dark-brown mb-4">
                        시간 선택
                      </h2>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {availableTimes.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 text-sm text-center border transition-all duration-300 ${
                              selectedTime === time
                                ? "bg-dark-brown text-white border-dark-brown"
                                : "border-stone/20 text-dark-brown hover:border-brass/40"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                )}
              </div>

              {/* Right: Form Fields */}
              <div>
                <FadeIn delay={0.1}>
                  <h2 className="font-serif text-xl text-dark-brown mb-6">
                    예약 정보
                  </h2>

                  <div className="space-y-4">
                    {/* Consultation-specific fields */}
                    {type === "consultation" && (
                      <>
                        <div>
                          <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                            회사명
                          </label>
                          <input
                            type="text"
                            placeholder="회사명 또는 브랜드명"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                            담당자명 *
                          </label>
                          <input
                            type="text"
                            placeholder="담당자 성함"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                      </>
                    )}

                    {type !== "consultation" && (
                      <div>
                        <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                          이름 *
                        </label>
                        <input
                          type="text"
                          placeholder="성함을 입력해주세요"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    )}

                    <div>
                      <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                        연락처 *
                      </label>
                      <input
                        type="tel"
                        placeholder="010-0000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                        이메일
                      </label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>

                    {type !== "consultation" && (
                      <div>
                        <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                          신청 인원
                        </label>
                        <select
                          value={formData.participants}
                          onChange={(e) =>
                            setFormData({ ...formData, participants: Number(e.target.value) })
                          }
                          className={inputClass}
                        >
                          {Array.from({ length: workshop?.maxParticipants || 20 }).map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}명
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Consultation-specific */}
                    {type === "consultation" && (
                      <>
                        <div>
                          <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                            제작 목적
                          </label>
                          <select
                            value={formData.purpose}
                            onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                            className={inputClass}
                          >
                            <option value="">선택해주세요</option>
                            <option value="기업 홈페이지">기업 홈페이지</option>
                            <option value="랜딩페이지">랜딩페이지</option>
                            <option value="쇼핑몰">쇼핑몰</option>
                            <option value="예약 시스템">예약 시스템</option>
                            <option value="모바일 앱">모바일 앱</option>
                            <option value="브랜딩">브랜딩</option>
                            <option value="기타">기타</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                            참고 사이트
                          </label>
                          <input
                            type="url"
                            placeholder="https://"
                            value={formData.referenceUrl}
                            onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                            예산
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className={inputClass}
                          >
                            <option value="">선택해주세요</option>
                            <option value="100만원 이하">100만원 이하</option>
                            <option value="100~300만원">100~300만원</option>
                            <option value="300~500만원">300~500만원</option>
                            <option value="500~1000만원">500~1000만원</option>
                            <option value="1000만원 이상">1000만원 이상</option>
                            <option value="미정">미정</option>
                          </select>
                        </div>
                      </>
                    )}

                    <div>
                      <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                        {type === "consultation" ? "요청사항" : "요청사항"}
                      </label>
                      <textarea
                        rows={4}
                        placeholder="추가 요청사항이 있으시면 입력해주세요"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  {selectedDate && selectedTime && (
                    <div className="mt-8 p-6 bg-ivory border border-stone/12">
                      <p className="text-[11px] tracking-[0.2em] uppercase text-oak mb-3">
                        예약 요약
                      </p>
                      <div className="space-y-2 text-sm">
                        {workshop && (
                          <div className="flex justify-between">
                            <span className="text-oak">클래스</span>
                            <span className="text-dark-brown">{workshop.title}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-oak">날짜</span>
                          <span className="text-dark-brown">{selectedDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-oak">시간</span>
                          <span className="text-dark-brown">{selectedTime}</span>
                        </div>
                        {workshop && (
                          <div className="flex justify-between pt-2 border-t border-stone/12 mt-2">
                            <span className="text-oak">비용</span>
                            <span className="text-dark-brown font-medium">
                              ₩{workshop.price.toLocaleString()}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !selectedDate || !selectedTime || !formData.name || !formData.phone}
                    className={`w-full mt-8 text-[15px] tracking-[0.02em] font-medium h-[50px] rounded-full transition-all duration-300 ease-out ${
                      isSubmitting
                        ? "bg-stone text-white cursor-wait"
                        : "bg-dark-brown text-ivory hover:bg-brass hover:-translate-y-0.5 hover:shadow-lg"
                    } disabled:opacity-40 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? "예약 중..." : type === "consultation" ? "상담 예약하기" : "예약하기"}
                  </button>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default function ReservePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-sm text-oak">Loading...</p>
        </div>
      }
    >
      <ReservationContent />
    </Suspense>
  );
}
