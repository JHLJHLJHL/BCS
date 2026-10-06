import type { Metadata, Viewport } from "next";

import "./globals.css";
import { SketchDefs } from "@/components/sketch/SketchDefs";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "BCS",
  description:
    "《베터 콜 사울》 여섯 시즌 63편의 줄거리, 제목의 의미, 비하인드 스토리를 흑백 연필 드로잉과 함께 정리한 읽을거리.",
  applicationName: "BCS",
  authors: [{ name: "LJH2026" }],
};

export const viewport: Viewport = {
  themeColor: "#1B1224",
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // The app is dark only — there is no theme switch, so the class is fixed
    // here rather than negotiated at runtime.
    <html lang="ko" className="dark">
      <body className="font-sans antialiased">
        <SketchDefs />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
