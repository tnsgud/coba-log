import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import "./globals.css";

import Header from "@/components/header";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "COBA-LOG",
  description: "코딩바보의 모든 기록",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`h-full ${notoSansKr.className}`}>
      <body className="h-full">
        <Header />
        {children}
      </body>
    </html>
  );
}
