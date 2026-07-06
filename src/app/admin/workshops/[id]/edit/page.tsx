"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getWorkshop } from "@/lib/data";

export default function EditWorkshop() {
  const params = useParams();
  const workshop = getWorkshop(params.id as string);

  if (!workshop) {
    return (
      <div className="text-center py-20">
        <p className="text-sm text-oak">클래스를 찾을 수 없습니다.</p>
        <Link href="/admin/workshops" className="text-xs text-brass hover:underline mt-2 inline-block">
          목록으로
        </Link>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border border-stone/20 text-dark-brown text-sm px-4 py-3 focus:outline-none focus:border-brass/60 transition-colors placeholder:text-stone/50";

  const handleSave = () => {
    alert("변경사항이 저장되었습니다. (데모: 실제 저장은 데이터베이스 연동 후 가능합니다)");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-2xl text-dark-brown mb-1">클래스 수정</h1>
          <p className="text-sm text-oak">{workshop.title}</p>
        </div>
        <Link href="/admin/workshops" className="text-xs text-oak hover:text-brass transition-colors">
          ← 목록으로
        </Link>
      </div>

      <div className="bg-warm-white border border-stone/10 p-8 max-w-2xl">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                클래스명 (영문)
              </label>
              <input type="text" defaultValue={workshop.title} className={inputClass} />
            </div>
            <div>
              <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                클래스명 (한글)
              </label>
              <input type="text" defaultValue={workshop.subtitle} className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                카테고리
              </label>
              <input type="text" defaultValue={workshop.category} className={inputClass} />
            </div>
            <div>
              <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                소요 시간
              </label>
              <input type="text" defaultValue={workshop.duration} className={inputClass} />
            </div>
            <div>
              <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                최대 인원
              </label>
              <input type="number" defaultValue={workshop.maxParticipants} className={inputClass} />
            </div>
          </div>

          <div>
            <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
              참가 비용 (원)
            </label>
            <input type="number" defaultValue={workshop.price} className={inputClass} />
          </div>

          <div>
            <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
              간단 소개
            </label>
            <input type="text" defaultValue={workshop.description} className={inputClass} />
          </div>

          <div>
            <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
              상세 설명
            </label>
            <textarea
              rows={8}
              defaultValue={workshop.detailedDescription}
              className={`${inputClass} resize-none`}
            />
          </div>

          <div>
            <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
              등록된 일정
            </label>
            <div className="space-y-2">
              {workshop.schedules.map((s, i) => (
                <div key={i} className="flex items-center gap-4 text-sm">
                  <span className="text-dark-brown">{s.date}</span>
                  <span className="text-oak">{s.time}</span>
                  <span className={`text-xs px-2 py-0.5 ${s.available ? "bg-forest/15 text-forest" : "bg-stone/15 text-stone"}`}>
                    {s.available ? "예약 가능" : "마감"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={handleSave}
              className="bg-dark-brown text-ivory text-xs tracking-[0.1em] px-6 py-3 hover:bg-brass transition-colors"
            >
              저장하기
            </button>
            <Link
              href="/admin/workshops"
              className="border border-stone/20 text-dark-brown text-xs tracking-[0.1em] px-6 py-3 hover:border-brass/40 transition-colors"
            >
              취소
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
