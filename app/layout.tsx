import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const serifKr = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "아뜰리에호수 | 궁합 커플링 매칭",
  description:
    "생년월일시로 두 사람의 오행 궁합을 읽고, 아뜰리에호수의 커플링을 추천받아보세요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={serifKr.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
