"use client";

import { useState } from "react";
import Link from "next/link";

export default function NewWorkshop() {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    category: "",
    description: "",
    detailedDescription: "",
    duration: "",
    maxParticipants: 6,
    price: 0,
    requirements: "",
    scheduleDate: "",
    scheduleTime: "",
  });

  const inputClass =
    "w-full bg-transparent border border-stone/20 text-dark-brown text-sm px-4 py-3 focus:outline-none focus:border-brass/60 transition-colors placeholder:text-stone/50";

  const handleSave = () => {
    alert("클래스가 저장되었습니다. (데모: 실제 저장은 데이터베이스 연동 후 가능합니다)");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-2xl text-dark-brown mb-1">새 클래스 등록</h1>
          <p className="text-sm text-oak">새로운 클래스를 등록합니다</p>
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
                클래스명 (영문) *
              </label>
              <input
                type="text"
                placeholder="Single Malt Whisky Tasting"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                클래스명 (한글) *
              </label>
              <input
                type="text"
                placeholder="위스키 테이스팅 클래스"
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                카테고리
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className={inputClass}
              >
                <option value="">선택</option>
                <option value="Whisky">Whisky</option>
                <option value="Branding">Branding</option>
                <option value="Hobby">Hobby</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                소요 시간
              </label>
              <input
                type="text"
                placeholder="2시간"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                최대 인원
              </label>
              <input
                type="number"
                value={formData.maxParticipants}
                onChange={(e) =>
                  setFormData({ ...formData, maxParticipants: Number(e.target.value) })
                }
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
              참가 비용 (원)
            </label>
            <input
              type="number"
              placeholder="89000"
              value={formData.price || ""}
              onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
              간단 소개
            </label>
            <input
              type="text"
              placeholder="한 줄 소개"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className={inputClass}
            />
          </div>

          <div>
            <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
              상세 설명
            </label>
            <textarea
              rows={8}
              placeholder="클래스 상세 설명을 입력해주세요"
              value={formData.detailedDescription}
              onChange={(e) =>
                setFormData({ ...formData, detailedDescription: e.target.value })
              }
              className={`${inputClass} resize-none`}
            />
          </div>

          <div>
            <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
              준비물 (쉼표로 구분)
            </label>
            <input
              type="text"
              placeholder="만 19세 이상, 음주 가능한 분"
              value={formData.requirements}
              onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                일정 날짜
              </label>
              <input
                type="date"
                value={formData.scheduleDate}
                onChange={(e) => setFormData({ ...formData, scheduleDate: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="text-[11px] tracking-[0.15em] uppercase text-oak mb-2 block">
                시간
              </label>
              <input
                type="time"
                value={formData.scheduleTime}
                onChange={(e) => setFormData({ ...formData, scheduleTime: e.target.value })}
                className={inputClass}
              />
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
