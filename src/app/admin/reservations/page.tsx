"use client";

import { useEffect, useState } from "react";
import { getReservations, updateReservationStatus, deleteReservation } from "@/lib/store";
import type { Reservation } from "@/lib/types";

export default function AdminReservations() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [filter, setFilter] = useState<"all" | "pending" | "confirmed" | "cancelled">("all");
  const [mounted, setMounted] = useState(false);

  const load = () => setReservations(getReservations().filter((r) => r.type !== "consultation"));

  useEffect(() => {
    setMounted(true);
    load();
  }, []);

  const handleStatus = (id: string, status: Reservation["status"]) => {
    updateReservationStatus(id, status);
    load();
  };

  const handleDelete = (id: string) => {
    if (confirm("이 예약을 삭제하시겠습니까?")) {
      deleteReservation(id);
      load();
    }
  };

  if (!mounted) return null;

  const filtered = filter === "all" ? reservations : reservations.filter((r) => r.status === filter);

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-2xl text-dark-brown mb-1">예약 관리</h1>
        <p className="text-sm text-oak">클래스 및 공간 예약을 관리합니다</p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {[
          { key: "all" as const, label: "전체" },
          { key: "pending" as const, label: "대기" },
          { key: "confirmed" as const, label: "확인" },
          { key: "cancelled" as const, label: "취소" },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`text-xs px-4 py-2 border transition-colors ${
              filter === f.key
                ? "bg-dark-brown text-ivory border-dark-brown"
                : "border-stone/20 text-oak hover:border-brass/40"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-warm-white border border-stone/10">
        {filtered.length === 0 ? (
          <div className="p-10 text-center text-sm text-oak">예약이 없습니다.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone/10">
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">예약번호</th>
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">유형</th>
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">예약자</th>
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">연락처</th>
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">날짜</th>
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">인원</th>
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">상태</th>
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">관리</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r) => (
                  <tr key={r.id} className="border-b border-stone/5 hover:bg-ivory/30">
                    <td className="px-6 py-3 font-mono text-xs text-dark-brown">{r.id}</td>
                    <td className="px-6 py-3 text-oak">
                      {r.type === "workshop" ? r.workshopTitle || "클래스" : "공간"}
                    </td>
                    <td className="px-6 py-3 text-dark-brown">{r.name}</td>
                    <td className="px-6 py-3 text-oak">{r.phone}</td>
                    <td className="px-6 py-3 text-oak">{r.date} {r.time}</td>
                    <td className="px-6 py-3 text-oak">{r.participants}명</td>
                    <td className="px-6 py-3">
                      <span className={`text-xs px-2 py-0.5 ${
                        r.status === "pending" ? "bg-brass/15 text-brass" :
                        r.status === "confirmed" ? "bg-forest/15 text-forest" :
                        "bg-stone/15 text-stone"
                      }`}>
                        {r.status === "pending" ? "대기" : r.status === "confirmed" ? "확인" : "취소"}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex gap-2">
                        {r.status === "pending" && (
                          <button
                            onClick={() => handleStatus(r.id, "confirmed")}
                            className="text-xs text-forest hover:underline"
                          >
                            승인
                          </button>
                        )}
                        {r.status !== "cancelled" && (
                          <button
                            onClick={() => handleStatus(r.id, "cancelled")}
                            className="text-xs text-oak hover:underline"
                          >
                            취소
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(r.id)}
                          className="text-xs text-red-400 hover:underline"
                        >
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
