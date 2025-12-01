import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "仙台のAI伴走型ビジネスオンライン化サービス | 個人事業主・副業",
  description: "仙台を拠点に、個人事業主・副業・起業準備中の方向けに、AIを活用してビジネスをオンライン化する伴走型サポートサービス。対面でのオフライン講座も対応。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
