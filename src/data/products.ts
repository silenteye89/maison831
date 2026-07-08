export interface Service {
  id: string;
  category: "web" | "class" | "vintage";
  subCategory: string;
  name: string;
  nameKr: string;
  description: string;
  descriptionKr: string;
  priceLabel: string;
  image: string;
  details: string[];
  isNew?: boolean;
  isPopular?: boolean;
}

export type Product = Service;

export const categories = [
  { id: "web", label: "Web & App", labelKr: "웹 & 앱", contentLabel: "포트폴리오" },

  { id: "class", label: "Class", labelKr: "클래스", contentLabel: "클래스 안내" },
  { id: "vintage", label: "Vintage", labelKr: "빈티지", contentLabel: "컬렉션" },
] as const;

export const services: Service[] = [
  // Web & App
  {
    id: "web-homepage",
    category: "web",
    subCategory: "홈페이지",
    name: "Brand Homepage",
    nameKr: "브랜드 홈페이지",
    description: "A bespoke website tailored to your brand identity, built with modern frameworks for speed and elegance.",
    descriptionKr: "브랜드 아이덴티티에 맞춘 맞춤형 웹사이트. 모던 프레임워크로 속도와 우아함을 모두 갖추었습니다.",
    priceLabel: "3,000,000원~",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop",
    details: [
      "반응형 디자인 (모바일/태블릿/데스크톱)",
      "SEO 최적화 & 성능 튜닝",
      "관리자 페이지 포함",
      "호스팅 & 도메인 셋업 지원",
      "1개월 무료 유지보수",
    ],
    isPopular: true,
  },
  {
    id: "web-shopping",
    category: "web",
    subCategory: "쇼핑몰",
    name: "E-Commerce Platform",
    nameKr: "쇼핑몰 제작",
    description: "Full-featured online store with payment integration, inventory management, and beautiful product pages.",
    descriptionKr: "결제 연동, 재고 관리, 아름다운 상품 페이지를 갖춘 온라인 쇼핑몰을 제작합니다.",
    priceLabel: "5,000,000원~",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1000&fit=crop",
    details: [
      "결제 시스템 연동 (PG사)",
      "상품 관리 & 주문 관리",
      "회원 시스템 & 마이페이지",
      "쿠폰 & 프로모션 기능",
      "배송 추적 연동",
    ],
    isNew: true,
  },
  {
    id: "web-booking",
    category: "web",
    subCategory: "예약시스템",
    name: "Booking System",
    nameKr: "예약 시스템",
    description: "Streamlined reservation system for studios, salons, classes, and more. Real-time availability and notifications.",
    descriptionKr: "스튜디오, 살롱, 클래스 등을 위한 실시간 예약 시스템. 자동 알림과 캘린더 연동을 제공합니다.",
    priceLabel: "2,500,000원~",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop",
    details: [
      "실시간 예약 가능 시간 표시",
      "카카오톡 알림 연동",
      "캘린더 동기화",
      "결제 연동 (선결제/현장결제)",
      "예약 관리 대시보드",
    ],
    isPopular: true,
  },
  {
    id: "web-app",
    category: "web",
    subCategory: "앱 개발",
    name: "Mobile App",
    nameKr: "모바일 앱 개발",
    description: "Cross-platform mobile applications built with React Native, delivering native performance on iOS and Android.",
    descriptionKr: "React Native 기반 크로스플랫폼 앱. iOS와 Android 모두에서 네이티브 성능을 제공합니다.",
    priceLabel: "8,000,000원~",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=1000&fit=crop",
    details: [
      "iOS & Android 동시 개발",
      "푸시 알림 시스템",
      "앱스토어 등록 지원",
      "백엔드 API 개발 포함",
      "3개월 무료 유지보수",
    ],
    isNew: true,
    isPopular: true,
  },

  // One-day Classes
  {
    id: "class-whisky",
    category: "class",
    subCategory: "위스키 클래스",
    name: "Whisky Tasting Class",
    nameKr: "위스키 테이스팅 클래스",
    description: "Explore the world of single malts and blends in our atmospheric studio, guided by a certified whisky sommelier.",
    descriptionKr: "인증 위스키 소믈리에와 함께 싱글몰트와 블렌디드 위스키의 세계를 탐험하는 클래스입니다.",
    priceLabel: "120,000원",
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=800&h=1000&fit=crop",
    details: [
      "5종 위스키 테이스팅",
      "위스키 기본 이론 강의",
      "페어링 스낵 제공",
      "소요 시간: 2시간",
      "정원: 6~8명",
    ],
    isPopular: true,
    isNew: true,
  },
  {
    id: "class-branding",
    category: "class",
    subCategory: "브랜딩 클래스",
    name: "Personal Branding Workshop",
    nameKr: "퍼스널 브랜딩 워크숍",
    description: "Discover your brand identity — from visual language to storytelling. Led by a KAIST-trained strategist.",
    descriptionKr: "비주얼 랭귀지부터 스토리텔링까지, 나만의 브랜드 아이덴티티를 찾아가는 워크숍입니다.",
    priceLabel: "95,000원",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop",
    details: [
      "브랜드 아이덴티티 설계",
      "무드보드 제작 실습",
      "소셜미디어 전략",
      "소요 시간: 3시간",
      "정원: 4~6명",
    ],
    isPopular: true,
  },
  {
    id: "class-botanical",
    category: "class",
    subCategory: "보태니컬 드로잉",
    name: "Botanical Drawing",
    nameKr: "보태니컬 드로잉 클래스",
    description: "Learn the art of botanical illustration using watercolor pencils and fine liners in our forest-view studio.",
    descriptionKr: "숲뷰 스튜디오에서 수채 색연필과 파인라이너로 보태니컬 일러스트를 배워보세요.",
    priceLabel: "65,000원",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=1000&fit=crop",
    details: [
      "기초 드로잉 기법",
      "수채 색연필 사용법",
      "작품 1점 완성",
      "모든 재료 제공",
      "소요 시간: 2.5시간",
    ],
    isNew: true,
  },
  {
    id: "class-coffee",
    category: "class",
    subCategory: "커피 클래스",
    name: "Specialty Coffee Brewing",
    nameKr: "스페셜티 커피 브루잉",
    description: "Master pour-over, AeroPress, and cold brew techniques with specialty-grade beans from around the world.",
    descriptionKr: "핸드드립, 에어로프레스, 콜드브루 등 다양한 추출 방법을 스페셜티 원두와 함께 배워봅니다.",
    priceLabel: "75,000원",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=1000&fit=crop",
    details: [
      "3가지 추출 방식 실습",
      "커핑 & 테이스팅 노트 작성",
      "원두 50g 선물 제공",
      "소요 시간: 2시간",
      "정원: 4~6명",
    ],
  },

  // Vintage Collection
  {
    id: "vintage-jacket",
    category: "vintage",
    subCategory: "의류",
    name: "European Wool Jacket",
    nameKr: "유럽 빈티지 울 재킷",
    description: "Hand-selected wool jacket from a Parisian flea market. Rich texture with timeless tailoring.",
    descriptionKr: "파리 벼룩시장에서 직접 셀렉한 울 재킷. 풍성한 텍스처와 타임리스한 테일러링이 특징입니다.",
    priceLabel: "180,000원",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=1000&fit=crop",
    details: [
      "유럽 직접 소싱",
      "울 80%, 폴리 20%",
      "사이즈: Free (M~L)",
      "상태: A급 (빈티지 특성상 미세 사용감)",
      "드라이클리닝 완료",
    ],
    isNew: true,
    isPopular: true,
  },
  {
    id: "vintage-lamp",
    category: "vintage",
    subCategory: "가구",
    name: "Antique Brass Desk Lamp",
    nameKr: "앤틱 브라스 데스크 램프",
    description: "A stunning 1960s brass desk lamp sourced from a Belgian antique fair. Fully restored and functional.",
    descriptionKr: "벨기에 앤틱 페어에서 소싱한 1960년대 브라스 데스크 램프. 완전 복원 후 정상 작동합니다.",
    priceLabel: "250,000원",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=1000&fit=crop",
    details: [
      "1960년대 벨기에 제조",
      "브라스 소재",
      "높이 약 45cm",
      "220V 변환 완료",
      "LED 전구 포함",
    ],
    isPopular: true,
  },
  {
    id: "vintage-mirror",
    category: "vintage",
    subCategory: "소품",
    name: "French Gilt Mirror",
    nameKr: "프렌치 길트 거울",
    description: "Ornate gilded mirror from a French estate. Perfect as a statement piece for your space.",
    descriptionKr: "프랑스 에스테이트에서 들여온 길트 프레임 거울. 공간의 포인트 피스로 완벽합니다.",
    priceLabel: "320,000원",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=1000&fit=crop",
    details: [
      "프랑스 직접 소싱",
      "길트 프레임 (금박)",
      "크기: 60cm × 80cm",
      "벽걸이 하드웨어 포함",
      "상태: AB급 (세월의 멋)",
    ],
    isNew: true,
  },
  {
    id: "vintage-chair",
    category: "vintage",
    subCategory: "가구",
    name: "Oak Windsor Chair",
    nameKr: "오크 윈저 체어",
    description: "Classic English Windsor chair in solid oak. Naturally aged patina that only time can create.",
    descriptionKr: "솔리드 오크 잉글리시 윈저 체어. 세월이 만들어낸 자연스러운 파티나가 매력적입니다.",
    priceLabel: "280,000원",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=1000&fit=crop",
    details: [
      "영국 소싱",
      "솔리드 오크 소재",
      "좌면 높이 약 45cm",
      "하중 120kg 지지",
      "상태: A급",
    ],
  },
];

export const reviews = [
  {
    id: 1,
    name: "김지은",
    category: "web",
    rating: 5,
    text: "카이스트 출신 엔지니어가 직접 개발해주셔서 기술적인 완성도가 남달랐어요. 디자인도 세련되고, 소통도 빠르고 정확해서 정말 만족스러운 경험이었습니다.",
    date: "2025.12",
  },
  {
    id: 3,
    name: "이현우",
    category: "class",
    rating: 5,
    text: "위스키 클래스 너무 좋았습니다. 소믈리에분의 설명이 알기 쉽고 재미있었고, 분위기도 고급스러웠어요. 친구들과 다시 방문할 예정입니다.",
    date: "2026.01",
  },
  {
    id: 4,
    name: "정다영",
    category: "vintage",
    rating: 5,
    text: "유럽에서 직접 큐레이션해 오신 빈티지 아이템들이 하나하나 퀄리티가 다르더라고요. 앤틱 램프 구매했는데 인테리어가 완전히 달라졌어요.",
    date: "2026.02",
  },
  {
    id: 5,
    name: "최민준",
    category: "web",
    rating: 5,
    text: "예약 시스템 개발을 맡겼는데, 고객 관리까지 편리하게 만들어주셨어요. 반응형도 완벽하고, 실제 매출 향상으로 이어졌습니다. 강력 추천합니다.",
    date: "2026.03",
  },
  {
    id: 6,
    name: "한예린",
    category: "class",
    rating: 5,
    text: "보태니컬 드로잉 클래스가 힐링 그 자체였어요. 숲뷰 보면서 그림 그리는 게 이렇게 행복한 줄 몰랐습니다. 재료도 좋고, 선생님도 친절하세요.",
    date: "2026.04",
  },
];

// Backward compatibility aliases
export const products = services;
export type { Service as default };
