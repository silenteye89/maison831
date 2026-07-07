import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maison831 — Tech meets Aesthetic",
  description:
    "메종831은 카이스트 출신 엔지니어가 직접 디자인하고 개발하는 웹사이트 제작, 공간대여, 원데이 클래스, 빈티지 컬렉션을 운영하는 유럽 감성의 라이프스타일 스튜디오입니다.",
  keywords: [
    "MAISON831",
    "메종831",
    "홈페이지 제작",
    "웹사이트 개발",
    "앱 개발",
    "카이스트",
    "브랜딩",
    "공간대여",
    "원데이 클래스",
    "빈티지",
    "라이프스타일 스튜디오",
  ],
  openGraph: {
    title: "Maison831 — Tech meets Aesthetic",
    description:
      "일과 취향이 만나는 공간. 카이스트 출신 엔지니어가 직접 디자인하고 개발하는 프리미엄 웹사이트 제작 & 유럽 감성 라이프스타일 스튜디오.",
    type: "website",
    locale: "ko_KR",
    url: "https://maison831.com",
    siteName: "MAISON831",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="antialiased">
      <body className="min-h-screen bg-warm-white text-dark-brown font-sans">
        {children}
      </body>
    </html>
  );
}
