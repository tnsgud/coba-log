import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "COBA-LOG",
  description: "coding babo blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
