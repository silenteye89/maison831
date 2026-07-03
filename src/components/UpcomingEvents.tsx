"use client";

import { FadeIn } from "./AnimationProvider";

const events = [
  {
    date: "2026. 07. 12",
    day: "SAT",
    title: "Single Malt Whisky Tasting",
    subtitle: "위스키 테이스팅 클래스",
    description: "아일라 위스키의 피트 향을 탐험하는 시간",
    time: "19:00 — 21:00",
    seats: "8석 한정",
    category: "Whisky",
  },
  {
    date: "2026. 07. 19",
    day: "SAT",
    title: "Botanical Drawing Class",
    subtitle: "보태니컬 드로잉 클래스",
    description: "숲에서 영감받은 식물 세밀화 그리기",
    time: "14:00 — 16:30",
    seats: "6석 한정",
    category: "Workshop",
  },
  {
    date: "2026. 07. 26",
    day: "SAT",
    title: "Saturday Book Salon",
    subtitle: "토요 북살롱",
    description: "『나는 나로 살기로 했다』 함께 읽기",
    time: "15:00 — 17:00",
    seats: "10석 한정",
    category: "Book Club",
  },
  {
    date: "2026. 08. 02",
    day: "SAT",
    title: "Board Game Evening",
    subtitle: "보드게임 이브닝",
    description: "유럽 클래식 보드게임과 함께하는 저녁",
    time: "18:00 — 21:00",
    seats: "12석 한정",
    category: "Social",
  },
];

export default function UpcomingEvents() {
  return (
    <section id="events" className="py-32 md:py-44 px-6 md:px-12">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 md:mb-28 gap-6">
          <div>
            <FadeIn>
              <p className="text-[11px] tracking-[0.3em] uppercase text-stone mb-8">
                Upcoming
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-dark-brown font-light tracking-wide">
                다가오는 모임
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <a
              href="#"
              className="text-[11px] tracking-[0.15em] uppercase text-oak/60 hover:text-brass transition-colors duration-500"
            >
              View All Events →
            </a>
          </FadeIn>
        </div>

        {/* Event List */}
        <div className="border-t border-stone/15">
          {events.map((event, i) => (
            <FadeIn key={event.title} delay={i * 0.1}>
              <div className="group border-b border-stone/15 py-10 md:py-12 cursor-pointer hover:bg-ivory/30 transition-colors duration-700 -mx-6 md:-mx-12 px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
                  {/* Date */}
                  <div className="md:col-span-2">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-stone">
                      {event.category}
                    </p>
                    <p className="font-serif text-lg text-dark-brown mt-1">
                      {event.date}
                    </p>
                    <p className="text-[10px] tracking-[0.15em] text-stone/60 mt-0.5">
                      {event.day}
                    </p>
                  </div>

                  {/* Title & Description */}
                  <div className="md:col-span-6">
                    <h3 className="font-serif text-xl md:text-2xl text-dark-brown group-hover:text-brass transition-colors duration-500 mb-1">
                      {event.title}
                    </h3>
                    <p className="text-xs text-oak/50 font-light mb-2">
                      {event.subtitle}
                    </p>
                    <p className="text-sm text-oak/60 font-light">
                      {event.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="md:col-span-2 flex md:flex-col gap-4 md:gap-1">
                    <p className="text-xs text-oak/50 font-light">{event.time}</p>
                    <p className="text-xs text-brass font-light">{event.seats}</p>
                  </div>

                  {/* CTA */}
                  <div className="md:col-span-2 md:text-right">
                    <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-dark-brown opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      예약하기
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
