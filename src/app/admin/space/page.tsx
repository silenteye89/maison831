"use client";

import { useEffect, useState } from "react";
import { getReservations, updateReservationStatus, deleteReservation } from "@/lib/store";
import type { Reservation } from "@/lib/types";

export default function AdminSpace() {
  const [bookings, setBookings] = useState<Reservation[]>([]);
  const [mounted, setMounted] = useState(false);

  const load = () =>
    setBookings(
      getReservations()
        .filter((r) => r.type === "space")
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    );

  useEffect(() => {
    setMounted(true);
    load();
  }, []);

  const handleStatus = (id: string, status: Reservation["status"]) => {
    updateReservationStatus(id, status);
    load();
  };

  const handleDelete = (id: string) => {
    if (confirm("이 공간 예약을 삭제하시겠습니까?")) {
      deleteReservation(id);
      load();
    }
  };

  if (!mounted) return null;

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-2xl text-dark-brown mb-1">공간 예약 관리</h1>
        <p className="text-sm text-oak">공간 대여 예약을 관리합니다</p>
      </div>

      <div className="bg-warm-white border border-stone/10">
        {bookings.length === 0 ? (
          <div className="p-10 text-center text-sm text-oak">공간 예약이 없습니다.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone/10">
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">예약번호</th>
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">예약자</th>
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">연락처</th>
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">날짜</th>
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">시간</th>
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">인원</th>
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">상태</th>
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">관리</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id} className="border-b border-stone/5 hover:bg-ivory/30">
                    <td className="px-6 py-3 font-mono text-xs text-dark-brown">{b.id}</td>
                    <td className="px-6 py-3 text-dark-brown">{b.name}</td>
                    <td className="px-6 py-3 text-oak">{b.phone}</td>
                    <td className="px-6 py-3 text-dark-brown">{b.date}</td>
                    <td className="px-6 py-3 text-oak">{b.time}</td>
                    <td className="px-6 py-3 text-oak">{b.participants}명</td>
                    <td className="px-6 py-3">
                      <span className={`text-xs px-2 py-0.5 ${
                        b.status === "pending" ? "bg-brass/15 text-brass" :
                        b.status === "confirmed" ? "bg-forest/15 text-forest" :
                        "bg-stone/15 text-stone"
                      }`}>
                        {b.status === "pending" ? "대기" : b.status === "confirmed" ? "확인" : "취소"}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex gap-2">
                        {b.status === "pending" && (
                          <button onClick={() => handleStatus(b.id, "confirmed")} className="text-xs text-forest hover:underline">
                            승인
                          </button>
                        )}
                        {b.status !== "cancelled" && (
                          <button onClick={() => handleStatus(b.id, "cancelled")} className="text-xs text-oak hover:underline">
                            취소
                          </button>
                        )}
                        <button onClick={() => handleDelete(b.id)} className="text-xs text-red-400 hover:underline">
                          삭제
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
