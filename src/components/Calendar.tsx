"use client";

import { useState, useMemo } from "react";

interface CalendarProps {
  availableDates?: string[];
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];
const MONTHS = [
  "1월", "2월", "3월", "4월", "5월", "6월",
  "7월", "8월", "9월", "10월", "11월", "12월",
];

export default function Calendar({
  availableDates,
  selectedDate,
  onSelectDate,
}: CalendarProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const availableSet = useMemo(
    () => new Set(availableDates ?? []),
    [availableDates]
  );

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const formatDate = (day: number) => {
    return `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  };

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const isPast = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return date < todayStart;
  };

  const isAvailable = (day: number) => {
    if (isPast(day)) return false;
    if (!availableDates) return !isPast(day);
    return availableSet.has(formatDate(day));
  };

  return (
    <div className="select-none">
      {/* Month Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="w-8 h-8 flex items-center justify-center text-oak hover:text-dark-brown transition-colors"
          aria-label="이전 달"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="font-serif text-lg text-dark-brown">
          {currentYear}년 {MONTHS[currentMonth]}
        </span>
        <button
          onClick={nextMonth}
          className="w-8 h-8 flex items-center justify-center text-oak hover:text-dark-brown transition-colors"
          aria-label="다음 달"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map((day) => (
          <div
            key={day}
            className="text-center text-[11px] tracking-wide text-oak py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7">
        {/* Empty cells for first week offset */}
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} className="aspect-square" />
        ))}

        {/* Day cells */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const dateStr = formatDate(day);
          const available = isAvailable(day);
          const selected = selectedDate === dateStr;
          const todayMark = isToday(day);
          const past = isPast(day);

          return (
            <button
              key={day}
              onClick={() => available && onSelectDate(dateStr)}
              disabled={!available}
              className={`aspect-square flex items-center justify-center text-sm relative transition-all duration-300 ${
                selected
                  ? "bg-dark-brown text-white"
                  : available
                  ? "text-dark-brown hover:bg-ivory"
                  : past
                  ? "text-stone/40 cursor-not-allowed"
                  : "text-stone/40 cursor-not-allowed"
              }`}
            >
              {day}
              {todayMark && !selected && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brass" />
              )}
              {available && !selected && availableDates && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-forest" />
              )}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      {availableDates && (
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-stone/10">
          <span className="flex items-center gap-1.5 text-[11px] text-oak">
            <span className="w-1.5 h-1.5 rounded-full bg-forest" />
            예약 가능
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-stone">
            <span className="w-1.5 h-1.5 rounded-full bg-stone/30" />
            마감
          </span>
        </div>
      )}
    </div>
  );
}
