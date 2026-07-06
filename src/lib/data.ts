import type { Workshop, SpaceSlot } from "./types";

export const workshops: Workshop[] = [
  {
    id: "whisky-tasting",
    title: "Single Malt Whisky Tasting",
    subtitle: "위스키 테이스팅 클래스",
    category: "Whisky",
    description: "아일라 위스키의 피트 향을 탐험하는 시간",
    detailedDescription: `스코틀랜드 아일라 섬에서 만들어지는 싱글 몰트 위스키의 세계로 안내합니다.

피트의 깊은 향, 바다의 소금기, 그리고 오크통이 선사하는 바닐라와 캐러멜의 풍미를 함께 탐험합니다.

전문 소믈리에가 직접 큐레이션한 5종의 위스키를 테이스팅하며, 각 위스키의 역사와 제조 과정, 그리고 올바른 음미 방법을 배울 수 있습니다.

초보자도 편하게 참여할 수 있는 클래스이며, 위스키에 어울리는 간단한 페어링 푸드가 함께 제공됩니다.`,
    image: "/images/whisky.jpg",
    gallery: ["/images/whisky.jpg", "/images/space-1.jpg", "/images/space-3.jpg", "/images/space-5.jpg"],
    schedules: [
      { date: "2026-07-12", time: "19:00", available: true },
      { date: "2026-07-19", time: "19:00", available: true },
      { date: "2026-07-26", time: "19:00", available: false },
      { date: "2026-08-02", time: "19:00", available: true },
      { date: "2026-08-09", time: "19:00", available: true },
    ],
    duration: "2시간",
    maxParticipants: 8,
    currentParticipants: 3,
    price: 89000,
    requirements: ["만 19세 이상", "음주 가능한 분", "필기구 (선택)"],
    location: "MAISON 831 (경기도 성남시 수정구 고등로 3, 현대지식산업센터 성남고등 8층 831호)",
    faq: [
      { question: "위스키를 처음 마셔보는데 괜찮을까요?", answer: "네, 초보자를 위한 기본 테이스팅 방법부터 안내해드립니다. 부담 없이 참여하세요." },
      { question: "취소 및 환불이 가능한가요?", answer: "클래스 3일 전까지 100% 환불 가능합니다. 2일 전~당일은 50% 환불됩니다." },
      { question: "주차가 가능한가요?", answer: "건물 내 지하주차장을 이용하실 수 있습니다. 2시간 무료 주차가 제공됩니다." },
    ],
    reviews: [
      { name: "김**", rating: 5, comment: "위스키에 대해 아무것도 몰랐는데, 정말 흥미로운 시간이었어요. 공간 분위기도 너무 좋았습니다.", date: "2026-06-15" },
      { name: "이**", rating: 5, comment: "소믈리에 분의 설명이 친절하고 재미있었습니다. 다음 클래스도 꼭 참여하고 싶어요.", date: "2026-06-08" },
      { name: "박**", rating: 4, comment: "분위기 있는 공간에서 좋은 위스키를 마실 수 있어 좋았어요. 페어링 푸드도 맛있었습니다.", date: "2026-05-25" },
    ],
    active: true,
  },
  {
    id: "brand-identity",
    title: "Brand Identity Workshop",
    subtitle: "브랜딩 클래스",
    category: "Branding",
    description: "나만의 브랜드 아이덴티티를 설계하는 원데이 워크숍",
    detailedDescription: `브랜드를 시작하고 싶은 분, 기존 브랜드를 리뉴얼하고 싶은 분을 위한 실전 워크숍입니다.

브랜드 네이밍, 컨셉 설정, 타겟 분석, 비주얼 아이덴티티 설계까지 브랜딩의 전 과정을 하루 만에 경험합니다.

카이스트 출신 엔지니어가 함께 직접 디자인하고 개발합니다. 실제 브랜드 사례를 분석하고, 참가자 각자의 브랜드를 함께 설계해봅니다.

워크숍 후에는 개인별 브랜드 가이드라인 초안을 가져갈 수 있습니다.`,
    image: "/images/portfolio-1.jpg",
    gallery: ["/images/portfolio-1.jpg", "/images/portfolio-2.jpg", "/images/portfolio-3.jpg", "/images/space-4.jpg"],
    schedules: [
      { date: "2026-07-19", time: "14:00", available: true },
      { date: "2026-08-02", time: "14:00", available: true },
      { date: "2026-08-16", time: "14:00", available: true },
    ],
    duration: "3시간",
    maxParticipants: 6,
    currentParticipants: 2,
    price: 120000,
    requirements: ["노트북 지참", "본인의 브랜드 아이디어 (있으면)"],
    location: "MAISON 831 (경기도 성남시 수정구 고등로 3, 현대지식산업센터 성남고등 8층 831호)",
    faq: [
      { question: "브랜드 경험이 전혀 없어도 되나요?", answer: "네, 초보자를 위한 워크숍입니다. 기초부터 차근차근 진행합니다." },
      { question: "결과물을 가져갈 수 있나요?", answer: "네, 워크숍에서 작업한 브랜드 가이드라인 초안을 PDF로 제공해드립니다." },
      { question: "개인 브랜드가 아니라 회사 브랜드도 가능한가요?", answer: "물론입니다. 기업 브랜딩 리뉴얼을 위해 참가하시는 분들도 많습니다." },
    ],
    reviews: [
      { name: "정**", rating: 5, comment: "막연했던 브랜딩 과정이 명확해졌어요. 실제 사례 분석이 특히 좋았습니다.", date: "2026-06-22" },
      { name: "최**", rating: 5, comment: "3시간이 순식간에 지나갔어요. 브랜드 가이드라인을 직접 만들어볼 수 있어서 실용적이었습니다.", date: "2026-06-10" },
    ],
    active: true,
  },
  {
    id: "botanical-drawing",
    title: "Botanical Drawing Class",
    subtitle: "보태니컬 드로잉",
    category: "Hobby",
    description: "숲에서 영감받은 식물 세밀화 그리기",
    detailedDescription: `숲이 보이는 MAISON 831의 통창 앞에서 식물을 관찰하고 그려봅니다.

보태니컬 아트는 식물의 형태와 색채를 세밀하게 관찰하여 그리는 예술입니다. 초보자도 쉽게 따라할 수 있도록 기초 드로잉 기법부터 수채화 채색까지 단계별로 진행합니다.

모든 화구는 제공되며, 완성된 작품은 가져가실 수 있습니다.

차 한 잔과 함께 여유로운 오후를 보내고 싶은 분들에게 추천합니다.`,
    image: "/images/workshop.jpg",
    gallery: ["/images/workshop.jpg", "/images/space-2.jpg", "/images/space-6.jpg"],
    schedules: [
      { date: "2026-07-26", time: "14:00", available: true },
      { date: "2026-08-09", time: "14:00", available: true },
      { date: "2026-08-23", time: "14:00", available: true },
    ],
    duration: "2시간 30분",
    maxParticipants: 6,
    currentParticipants: 4,
    price: 65000,
    requirements: ["없음 (모든 화구 제공)"],
    location: "MAISON 831 (경기도 성남시 수정구 고등로 3, 현대지식산업센터 성남고등 8층 831호)",
    faq: [
      { question: "그림을 전혀 못 그려도 참여할 수 있나요?", answer: "네, 초보자를 위한 클래스입니다. 기초 드로잉부터 안내해드립니다." },
      { question: "완성 작품을 가져갈 수 있나요?", answer: "네, 완성된 작품은 액자에 넣어 가져가실 수 있습니다." },
    ],
    reviews: [
      { name: "한**", rating: 5, comment: "숲이 보이는 창가에서 그림 그리는 경험이 정말 특별했어요.", date: "2026-06-20" },
      { name: "윤**", rating: 4, comment: "힐링되는 시간이었습니다. 선생님이 친절하게 가르쳐주셨어요.", date: "2026-06-05" },
    ],
    active: true,
  },
  {
    id: "highland-whisky",
    title: "Highland Whisky Evening",
    subtitle: "하이랜드 위스키 이브닝",
    category: "Whisky",
    description: "스코틀랜드 하이랜드 위스키의 깊은 풍미를 탐구합니다",
    detailedDescription: `스코틀랜드 하이랜드 지역의 대표 증류소에서 생산된 싱글 몰트 위스키를 탐험합니다.

하이랜드 위스키 특유의 과일향, 꿀, 그리고 은은한 스모키함을 느껴보세요.

Glenmorangie, Dalmore, Oban 등 명문 증류소의 위스키 4종을 테이스팅하며, 하이랜드 지역의 지리와 기후가 위스키 풍미에 미치는 영향을 알아봅니다.

위스키에 어울리는 치즈와 다크 초콜릿 페어링이 함께 제공됩니다.`,
    image: "/images/space-3.jpg",
    gallery: ["/images/space-3.jpg", "/images/space-1.jpg", "/images/whisky.jpg"],
    schedules: [
      { date: "2026-08-02", time: "18:00", available: true },
      { date: "2026-08-16", time: "18:00", available: true },
      { date: "2026-08-30", time: "18:00", available: true },
    ],
    duration: "2시간",
    maxParticipants: 8,
    currentParticipants: 1,
    price: 95000,
    requirements: ["만 19세 이상", "음주 가능한 분"],
    location: "MAISON 831 (경기도 성남시 수정구 고등로 3, 현대지식산업센터 성남고등 8층 831호)",
    faq: [
      { question: "아일라 테이스팅과 차이가 있나요?", answer: "네, 하이랜드 위스키는 아일라에 비해 부드럽고 과일향이 풍부합니다. 다른 매력을 느끼실 수 있습니다." },
      { question: "둘 다 참여해도 되나요?", answer: "물론입니다! 두 클래스를 모두 수강하시면 스코틀랜드 위스키의 다양성을 더 깊이 이해하실 수 있습니다." },
    ],
    reviews: [
      { name: "송**", rating: 5, comment: "하이랜드 위스키의 부드러운 매력에 빠졌습니다. 치즈 페어링도 훌륭했어요.", date: "2026-06-18" },
    ],
    active: true,
  },
];

export function getWorkshop(id: string): Workshop | undefined {
  return workshops.find((w) => w.id === id);
}

export const spaceTimeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00", "14:00",
  "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00",
];

export function generateSpaceSlots(month: number, year: number): SpaceSlot[] {
  const slots: SpaceSlot[] = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= daysInMonth; day++) {
    const date = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const dayOfWeek = new Date(year, month, day).getDay();

    for (const time of spaceTimeSlots) {
      slots.push({
        date,
        time,
        available: dayOfWeek !== 0 && Math.random() > 0.3,
      });
    }
  }

  return slots;
}

export const SPACE_PRICE_PER_HOUR = 30000;
export const MAISON_ADDRESS = "경기도 성남시 수정구 고등로 3, 현대지식산업센터 성남고등 8층 831호";
export const MAISON_PHONE = "010-8687-2129";
export const MAISON_COORDS = { lat: 37.4449, lng: 127.1389 };
