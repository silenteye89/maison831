"use client";

import { useEffect, useState } from "react";
import { getReservations, updateReservationStatus, deleteReservation } from "@/lib/store";
import type { Reservation } from "@/lib/types";

export default function AdminConsultations() {
  const [consultations, setConsultations] = useState<Reservation[]>([]);
  const [selected, setSelected] = useState<Reservation | null>(null);
  const [mounted, setMounted] = useState(false);

  const load = () =>
    setConsultations(
      getReservations()
        .filter((r) => r.type === "consultation")
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    );

  useEffect(() => {
    setMounted(true);
    load();
  }, []);

  const handleStatus = (id: string, status: Reservation["status"]) => {
    updateReservationStatus(id, status);
    load();
    if (selected?.id === id) setSelected(null);
  };

  const handleDelete = (id: string) => {
    if (confirm("이 상담 예약을 삭제하시겠습니까?")) {
      deleteReservation(id);
      load();
      if (selected?.id === id) setSelected(null);
    }
  };

  if (!mounted) return null;

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-2xl text-dark-brown mb-1">상담 관리</h1>
        <p className="text-sm text-oak">홈페이지 제작 상담 예약을 관리합니다</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* List */}
        <div className="lg:col-span-2 bg-warm-white border border-stone/10">
          {consultations.length === 0 ? (
            <div className="p-10 text-center text-sm text-oak">상담 예약이 없습니다.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone/10">
                    <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">회사</th>
                    <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">담당자</th>
                    <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">목적</th>
                    <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">희망일</th>
                    <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">상태</th>
                    <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">관리</th>
                  </tr>
                </thead>
                <tbody>
                  {consultations.map((c) => (
                    <tr
                      key={c.id}
                      className={`border-b border-stone/5 cursor-pointer transition-colors ${
                        selected?.id === c.id ? "bg-ivory" : "hover:bg-ivory/30"
                      }`}
                      onClick={() => setSelected(c)}
                    >
                      <td className="px-6 py-3 text-dark-brown">{c.company || "-"}</td>
                      <td className="px-6 py-3 text-dark-brown">{c.name}</td>
                      <td className="px-6 py-3 text-oak">{c.purpose || "-"}</td>
                      <td className="px-6 py-3 text-oak">{c.date}</td>
                      <td className="px-6 py-3">
                        <span className={`text-xs px-2 py-0.5 ${
                          c.status === "pending" ? "bg-brass/15 text-brass" :
                          c.status === "confirmed" ? "bg-forest/15 text-forest" :
                          "bg-stone/15 text-stone"
                        }`}>
                          {c.status === "pending" ? "대기" : c.status === "confirmed" ? "확인" : "취소"}
                        </span>
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                          {c.status === "pending" && (
                            <button onClick={() => handleStatus(c.id, "confirmed")} className="text-xs text-forest hover:underline">
                              승인
                            </button>
                          )}
                          <button onClick={() => handleDelete(c.id)} className="text-xs text-red-400 hover:underline">
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

        {/* Detail Panel */}
        <div className="bg-warm-white border border-stone/10 p-6">
          {selected ? (
            <div className="space-y-4">
              <h2 className="text-sm text-dark-brown font-medium mb-4">상담 상세</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-[11px] tracking-wider uppercase text-oak block mb-1">예약번호</span>
                  <span className="text-dark-brown font-mono text-xs">{selected.id}</span>
                </div>
                <div>
                  <span className="text-[11px] tracking-wider uppercase text-oak block mb-1">회사명</span>
                  <span className="text-dark-brown">{selected.company || "-"}</span>
                </div>
                <div>
                  <span className="text-[11px] tracking-wider uppercase text-oak block mb-1">담당자</span>
                  <span className="text-dark-brown">{selected.name}</span>
                </div>
                <div>
                  <span className="text-[11px] tracking-wider uppercase text-oak block mb-1">연락처</span>
                  <span className="text-dark-brown">{selected.phone}</span>
                </div>
                <div>
                  <span className="text-[11px] tracking-wider uppercase text-oak block mb-1">이메일</span>
                  <span className="text-dark-brown">{selected.email || "-"}</span>
                </div>
                <div>
                  <span className="text-[11px] tracking-wider uppercase text-oak block mb-1">제작 목적</span>
                  <span className="text-dark-brown">{selected.purpose || "-"}</span>
                </div>
                <div>
                  <span className="text-[11px] tracking-wider uppercase text-oak block mb-1">예산</span>
                  <span className="text-dark-brown">{selected.budget || "-"}</span>
                </div>
                <div>
                  <span className="text-[11px] tracking-wider uppercase text-oak block mb-1">참고 사이트</span>
                  {selected.referenceUrl ? (
                    <a href={selected.referenceUrl} target="_blank" rel="noopener noreferrer" className="text-brass hover:underline text-xs break-all">
                      {selected.referenceUrl}
                    </a>
                  ) : (
                    <span className="text-oak">-</span>
                  )}
                </div>
                <div>
                  <span className="text-[11px] tracking-wider uppercase text-oak block mb-1">희망일시</span>
                  <span className="text-dark-brown">{selected.date} {selected.time}</span>
                </div>
                {selected.message && (
                  <div>
                    <span className="text-[11px] tracking-wider uppercase text-oak block mb-1">요청사항</span>
                    <p className="text-dark-brown leading-relaxed">{selected.message}</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-10 text-sm text-oak">
              상담 예약을 선택해주세요
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
