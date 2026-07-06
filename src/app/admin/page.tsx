"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getReservations } from "@/lib/store";
import { workshops } from "@/lib/data";
import type { Reservation } from "@/lib/types";

export default function AdminDashboard() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setReservations(getReservations());
  }, []);

  if (!mounted) return null;

  const today = new Date().toISOString().split("T")[0];
  const workshopReservations = reservations.filter((r) => r.type === "workshop");
  const spaceReservations = reservations.filter((r) => r.type === "space");
  const consultations = reservations.filter((r) => r.type === "consultation");
  const pending = reservations.filter((r) => r.status === "pending");
  const todayReservations = reservations.filter((r) => r.date === today);

  const stats = [
    { label: "전체 예약", value: reservations.length, color: "bg-dark-brown" },
    { label: "승인 대기", value: pending.length, color: "bg-brass" },
    { label: "클래스 예약", value: workshopReservations.length, color: "bg-forest" },
    { label: "공간 예약", value: spaceReservations.length, color: "bg-oak" },
    { label: "상담 예약", value: consultations.length, color: "bg-walnut" },
    { label: "오늘 예약", value: todayReservations.length, color: "bg-bronze" },
  ];

  const recentReservations = [...reservations]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 10);

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-serif text-2xl text-dark-brown mb-1">대시보드</h1>
        <p className="text-sm text-oak">MAISON 831 관리자 페이지</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-warm-white border border-stone/10 p-5">
            <p className="text-xs text-oak mb-2">{stat.label}</p>
            <p className="text-2xl font-serif text-dark-brown">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <Link
          href="/admin/workshops"
          className="bg-warm-white border border-stone/10 p-6 hover:border-brass/30 transition-colors group"
        >
          <h3 className="text-sm text-dark-brown mb-1 group-hover:text-brass transition-colors">
            클래스 관리
          </h3>
          <p className="text-xs text-oak">
            {workshops.filter((w) => w.active).length}개 활성 클래스
          </p>
        </Link>
        <Link
          href="/admin/reservations"
          className="bg-warm-white border border-stone/10 p-6 hover:border-brass/30 transition-colors group"
        >
          <h3 className="text-sm text-dark-brown mb-1 group-hover:text-brass transition-colors">
            예약 관리
          </h3>
          <p className="text-xs text-oak">
            {pending.length}건 승인 대기 중
          </p>
        </Link>
        <Link
          href="/admin/consultations"
          className="bg-warm-white border border-stone/10 p-6 hover:border-brass/30 transition-colors group"
        >
          <h3 className="text-sm text-dark-brown mb-1 group-hover:text-brass transition-colors">
            상담 관리
          </h3>
          <p className="text-xs text-oak">
            {consultations.filter((c) => c.status === "pending").length}건 대기 중
          </p>
        </Link>
      </div>

      {/* Recent Reservations */}
      <div className="bg-warm-white border border-stone/10">
        <div className="px-6 py-4 border-b border-stone/10 flex items-center justify-between">
          <h2 className="text-sm text-dark-brown">최근 예약</h2>
          <Link href="/admin/reservations" className="text-xs text-brass hover:underline">
            전체보기
          </Link>
        </div>
        {recentReservations.length === 0 ? (
          <div className="p-10 text-center text-sm text-oak">
            아직 예약이 없습니다.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone/10">
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">
                    예약번호
                  </th>
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">
                    유형
                  </th>
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">
                    예약자
                  </th>
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">
                    날짜
                  </th>
                  <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">
                    상태
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentReservations.map((r) => (
                  <tr key={r.id} className="border-b border-stone/5 hover:bg-ivory/30">
                    <td className="px-6 py-3 text-dark-brown font-mono text-xs">
                      {r.id}
                    </td>
                    <td className="px-6 py-3 text-oak">
                      {r.type === "workshop" ? "클래스" : r.type === "space" ? "공간" : "상담"}
                    </td>
                    <td className="px-6 py-3 text-dark-brown">{r.name}</td>
                    <td className="px-6 py-3 text-oak">
                      {r.date} {r.time}
                    </td>
                    <td className="px-6 py-3">
                      <span
                        className={`text-xs px-2 py-0.5 ${
                          r.status === "pending"
                            ? "bg-brass/15 text-brass"
                            : r.status === "confirmed"
                            ? "bg-forest/15 text-forest"
                            : "bg-stone/15 text-stone"
                        }`}
                      >
                        {r.status === "pending" ? "대기" : r.status === "confirmed" ? "확인" : "취소"}
                      </span>
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
