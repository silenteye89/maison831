import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAISON 831 — Curated Lifestyle & Creative Studio",
  description:
    "Maison 831은 유럽 빈티지 감성의 라이프스타일 공간입니다. 스페셜티 커피, 빈티지 셀렉트샵, 위스키 클래스, 원데이 클래스, 공간대여, 크리에이티브 스튜디오를 경험하세요.",
  keywords: [
    "Maison 831",
    "라이프스타일",
    "빈티지",
    "스페셜티 커피",
    "위스키 클래스",
    "공간대여",
    "브랜딩",
  ],
  openGraph: {
    title: "MAISON 831 — Curated Lifestyle & Creative Studio",
    description:
      "유럽 빈티지 감성의 라이프스타일 공간. 커피, 빈티지, 위스키, 크리에이티브 스튜디오.",
    type: "website",
    locale: "ko_KR",
    url: "https://www.maison831.com",
    siteName: "MAISON 831",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
