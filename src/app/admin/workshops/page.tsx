"use client";

import Link from "next/link";
import { workshops } from "@/lib/data";

export default function AdminWorkshops() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-2xl text-dark-brown mb-1">클래스 관리</h1>
          <p className="text-sm text-oak">등록된 클래스를 관리합니다</p>
        </div>
        <Link
          href="/admin/workshops/new"
          className="bg-dark-brown text-ivory text-xs tracking-[0.1em] px-5 py-2.5 hover:bg-brass transition-colors"
        >
          + 새 클래스
        </Link>
      </div>

      <div className="bg-warm-white border border-stone/10">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-stone/10">
                <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">
                  클래스명
                </th>
                <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">
                  카테고리
                </th>
                <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">
                  가격
                </th>
                <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">
                  인원
                </th>
                <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">
                  일정
                </th>
                <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">
                  상태
                </th>
                <th className="text-left px-6 py-3 text-[11px] tracking-wider uppercase text-oak font-normal">
                  관리
                </th>
              </tr>
            </thead>
            <tbody>
              {workshops.map((w) => {
                const nextSchedule = w.schedules.find((s) => s.available);
                return (
                  <tr key={w.id} className="border-b border-stone/5 hover:bg-ivory/30">
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-dark-brown">{w.title}</p>
                        <p className="text-xs text-oak">{w.subtitle}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-oak">{w.category}</td>
                    <td className="px-6 py-4 text-dark-brown">
                      ₩{w.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-oak">
                      {w.currentParticipants}/{w.maxParticipants}
                    </td>
                    <td className="px-6 py-4 text-oak text-xs">
                      {nextSchedule ? nextSchedule.date : "없음"}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-xs px-2 py-0.5 ${
                          w.active
                            ? "bg-forest/15 text-forest"
                            : "bg-stone/15 text-stone"
                        }`}
                      >
                        {w.active ? "활성" : "비활성"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Link
                          href={`/admin/workshops/${w.id}/edit`}
                          className="text-xs text-brass hover:underline"
                        >
                          수정
                        </Link>
                        <Link
                          href={`/workshop/${w.id}`}
                          target="_blank"
                          className="text-xs text-oak hover:underline"
                        >
                          보기
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
