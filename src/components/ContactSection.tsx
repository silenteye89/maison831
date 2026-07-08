"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, AnimatedText } from "./AnimatedSection";

const inquiryOptions = [
  { value: "web", label: "웹/앱 개발 문의" },
  { value: "class", label: "클래스 문의" },
  { value: "vintage", label: "빈티지 컬렉션 문의" },
  { value: "collab", label: "브랜드 협업" },
  { value: "other", label: "기타" },
];

const budgetOptions = [
  { value: "under300", label: "300만원 이하" },
  { value: "300-500", label: "300 ~ 500만원" },
  { value: "500-1000", label: "500 ~ 1,000만원" },
  { value: "over1000", label: "1,000만원 이상" },
  { value: "discuss", label: "상담 후 결정" },
];

const projectTypeOptions = [
  { value: "homepage", label: "브랜드 홈페이지" },
  { value: "shopping", label: "쇼핑몰" },
  { value: "booking", label: "예약 시스템" },
  { value: "app", label: "모바일 앱" },
  { value: "other", label: "기타" },
];

const classTypeOptions = [
  { value: "whisky", label: "위스키 테이스팅" },
  { value: "branding", label: "퍼스널 브랜딩" },
  { value: "botanical", label: "보태니컬 드로잉" },
  { value: "coffee", label: "스페셜티 커피" },
  { value: "other", label: "기타 / 프라이빗" },
];

const headcountOptions = [
  { value: "1-2", label: "1~2명" },
  { value: "3-5", label: "3~5명" },
  { value: "6-8", label: "6~8명" },
  { value: "group", label: "단체 (9명 이상)" },
];

const sourceOptions = [
  { value: "instagram", label: "인스타그램" },
  { value: "search", label: "검색 (네이버/구글)" },
  { value: "referral", label: "지인 소개" },
  { value: "blog", label: "블로그/카페" },
  { value: "other", label: "기타" },
];

const fieldAnim = {
  initial: { opacity: 0, height: 0, marginTop: 0 },
  animate: { opacity: 1, height: "auto", marginTop: 32 },
  exit: { opacity: 0, height: 0, marginTop: 0 },
  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (val: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between bg-transparent border-b border-beige py-3 text-[14px] text-left focus:border-brass focus:outline-none transition-colors duration-300"
      >
        <span className={selected ? "text-dark-brown" : "text-stone/40"}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-stone/40 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="absolute z-30 top-full left-0 right-0 mt-1 bg-ivory border border-beige/60 shadow-sm"
          >
            {options.map((opt) => (
              <li key={opt.value}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 text-[14px] transition-colors duration-200 ${
                    value === opt.value
                      ? "text-brass bg-cream/40"
                      : "text-walnut hover:bg-cream/30 hover:text-dark-brown"
                  }`}
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "",
    projectType: "",
    budget: "",
    timeline: "",
    classType: "",
    headcount: "",
    preferredDate: "",
    vintageItem: "",
    source: "",
    message: "",
    privacy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setFormData({ ...formData, [target.name]: target.checked });
    } else {
      setFormData({ ...formData, [target.name]: target.value });
    }
  };

  const handleCategoryChange = (val: string) => {
    setFormData({
      ...formData,
      category: val,
      projectType: "",
      budget: "",
      timeline: "",
      classType: "",
      headcount: "",
      preferredDate: "",
      vintageItem: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }
    alert("문의가 접수되었습니다. 빠르게 연락드리겠습니다.");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      category: "",
      projectType: "",
      budget: "",
      timeline: "",
      classType: "",
      headcount: "",
      preferredDate: "",
      vintageItem: "",
      source: "",
      message: "",
      privacy: false,
    });
  };

  const isWeb = formData.category === "web";
  const isClass = formData.category === "class";
  const isVintage = formData.category === "vintage";
  const isCollab = formData.category === "collab";

  return (
    <section id="contact" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <div>
            <AnimatedText
              as="p"
              className="font-serif text-[11px] tracking-[0.3em] text-brass uppercase mb-4"
            >
              Contact
            </AnimatedText>
            <AnimatedText
              as="h2"
              className="font-serif text-3xl md:text-4xl text-dark-brown tracking-[0.03em] mb-8"
              delay={0.1}
            >
              문의하기
            </AnimatedText>
            <AnimatedSection delay={0.2}>
              <p className="text-[15px] text-walnut/80 leading-[1.9] mb-12 max-w-sm font-sans">
                웹 개발, 클래스, 빈티지 컬렉션, 브랜드 협업까지.
                <br />
                Maison831과 함께할 모든 이야기를 기다립니다.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase mb-1">
                    Email
                  </p>
                  <a href="mailto:hello@maison831.com" className="text-[14px] text-dark-brown hover:text-brass transition-colors duration-300 font-sans">
                    hello@maison831.com
                  </a>
                </div>
                <div>
                  <p className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase mb-1">
                    Phone
                  </p>
                  <a href="tel:010-8687-2129" className="text-[14px] text-dark-brown hover:text-brass transition-colors duration-300 font-sans">
                    010-8687-2129
                  </a>
                </div>
                <div>
                  <p className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase mb-1">
                    KakaoTalk
                  </p>
                  <p className="text-[14px] text-dark-brown font-sans">@maison831</p>
                </div>
                <div>
                  <p className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase mb-1">
                    Address
                  </p>
                  <p className="text-[14px] text-dark-brown font-sans">
                    경기 성남시 수정구 고등로 3 현대지식산업센터 성남고등 8층 831호
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Form */}
          <AnimatedSection delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 기본 정보 */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase block mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-beige py-3 text-[14px] text-dark-brown font-sans placeholder-stone/40 focus:border-brass focus:outline-none transition-colors duration-300"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase block mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-beige py-3 text-[14px] text-dark-brown font-sans placeholder-stone/40 focus:border-brass focus:outline-none transition-colors duration-300"
                    placeholder="회사/브랜드명"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-beige py-3 text-[14px] text-dark-brown font-sans placeholder-stone/40 focus:border-brass focus:outline-none transition-colors duration-300"
                    placeholder="hello@example.com"
                  />
                </div>
                <div>
                  <label className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase block mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-beige py-3 text-[14px] text-dark-brown font-sans placeholder-stone/40 focus:border-brass focus:outline-none transition-colors duration-300"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              {/* 문의 유형 */}
              <div>
                <label className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase block mb-2">
                  Inquiry Type *
                </label>
                <CustomSelect
                  value={formData.category}
                  onChange={handleCategoryChange}
                  options={inquiryOptions}
                  placeholder="문의 유형을 선택해주세요"
                />
              </div>

              {/* 조건부 필드: 웹/앱 */}
              <AnimatePresence mode="wait">
                {isWeb && (
                  <motion.div key="web-fields" {...fieldAnim} className="space-y-8 overflow-hidden">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase block mb-2">
                          Project Type
                        </label>
                        <CustomSelect
                          value={formData.projectType}
                          onChange={(val) => setFormData({ ...formData, projectType: val })}
                          options={projectTypeOptions}
                          placeholder="프로젝트 유형"
                        />
                      </div>
                      <div>
                        <label className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase block mb-2">
                          Budget
                        </label>
                        <CustomSelect
                          value={formData.budget}
                          onChange={(val) => setFormData({ ...formData, budget: val })}
                          options={budgetOptions}
                          placeholder="예산 범위"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase block mb-2">
                        Timeline
                      </label>
                      <input
                        type="text"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-beige py-3 text-[14px] text-dark-brown font-sans placeholder-stone/40 focus:border-brass focus:outline-none transition-colors duration-300"
                        placeholder="희망 완료 시기 (예: 2026년 9월)"
                      />
                    </div>
                  </motion.div>
                )}

                {/* 조건부 필드: 클래스 */}
                {isClass && (
                  <motion.div key="class-fields" {...fieldAnim} className="space-y-8 overflow-hidden">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase block mb-2">
                          Class
                        </label>
                        <CustomSelect
                          value={formData.classType}
                          onChange={(val) => setFormData({ ...formData, classType: val })}
                          options={classTypeOptions}
                          placeholder="클래스 선택"
                        />
                      </div>
                      <div>
                        <label className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase block mb-2">
                          Headcount
                        </label>
                        <CustomSelect
                          value={formData.headcount}
                          onChange={(val) => setFormData({ ...formData, headcount: val })}
                          options={headcountOptions}
                          placeholder="참여 인원"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase block mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="text"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-beige py-3 text-[14px] text-dark-brown font-sans placeholder-stone/40 focus:border-brass focus:outline-none transition-colors duration-300"
                        placeholder="희망 날짜 (예: 7월 셋째 주 토요일)"
                      />
                    </div>
                  </motion.div>
                )}

                {/* 조건부 필드: 빈티지 */}
                {isVintage && (
                  <motion.div key="vintage-fields" {...fieldAnim} className="overflow-hidden">
                    <div>
                      <label className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase block mb-2">
                        Item of Interest
                      </label>
                      <input
                        type="text"
                        name="vintageItem"
                        value={formData.vintageItem}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-beige py-3 text-[14px] text-dark-brown font-sans placeholder-stone/40 focus:border-brass focus:outline-none transition-colors duration-300"
                        placeholder="관심 있는 아이템 (예: 앤틱 램프, 빈티지 재킷)"
                      />
                    </div>
                  </motion.div>
                )}

                {/* 조건부 필드: 협업 */}
                {isCollab && (
                  <motion.div key="collab-fields" {...fieldAnim} className="space-y-8 overflow-hidden">
                    <div>
                      <label className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase block mb-2">
                        Budget
                      </label>
                      <CustomSelect
                        value={formData.budget}
                        onChange={(val) => setFormData({ ...formData, budget: val })}
                        options={budgetOptions}
                        placeholder="예산 범위"
                      />
                    </div>
                    <div>
                      <label className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase block mb-2">
                        Timeline
                      </label>
                      <input
                        type="text"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-beige py-3 text-[14px] text-dark-brown font-sans placeholder-stone/40 focus:border-brass focus:outline-none transition-colors duration-300"
                        placeholder="희망 일정 (예: 2026년 8~9월)"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* 유입 경로 */}
              <div>
                <label className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase block mb-2">
                  How did you find us?
                </label>
                <CustomSelect
                  value={formData.source}
                  onChange={(val) => setFormData({ ...formData, source: val })}
                  options={sourceOptions}
                  placeholder="알게 된 경로"
                />
              </div>

              {/* 메시지 */}
              <div>
                <label className="font-serif text-[10px] tracking-[0.2em] text-stone uppercase block mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-beige py-3 text-[14px] text-dark-brown font-sans placeholder-stone/40 focus:border-brass focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="문의 내용을 적어주세요."
                />
              </div>

              {/* 개인정보 동의 */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 accent-brass border-beige rounded-none cursor-pointer"
                />
                <span className="text-[13px] text-walnut/70 leading-relaxed group-hover:text-walnut transition-colors duration-300">
                  개인정보 수집 및 이용에 동의합니다. 수집된 정보는 문의 답변 목적으로만 사용되며, 답변 완료 후 파기됩니다.
                </span>
              </label>

              <button
                type="submit"
                className="bg-dark-brown text-warm-white px-10 py-3.5 font-serif text-[13px] tracking-[0.15em] hover:bg-walnut transition-colors duration-500 w-full md:w-auto disabled:opacity-40 disabled:cursor-not-allowed"
                disabled={!formData.privacy}
              >
                SEND MESSAGE
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>

      {/* Kakao floating button */}
      <a
        href="https://pf.kakao.com/maison831"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#FEE500] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
        aria-label="KakaoTalk Chat"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#3C1E1E">
          <path d="M12 3C6.48 3 2 6.58 2 10.94c0 2.8 1.86 5.27 4.66 6.67-.15.56-.96 3.58-.99 3.8 0 0-.02.16.08.22.1.06.22.02.22.02.29-.04 3.37-2.2 3.9-2.57.69.1 1.4.16 2.13.16 5.52 0 10-3.58 10-7.94S17.52 3 12 3z" />
        </svg>
      </a>
    </section>
  );
}
