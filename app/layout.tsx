import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.scss";
import { Providers } from "./providers";
import clsx from "clsx";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crypto Pay",
  description: "Seamlessly accept crypto payments in your Telegram bots and services with Crypto Pay. Supports TON, USDT, BTC and more.",
  keywords: ["crypto", "payments", "telegram", "bot", "api", "ton", "usdt"],
  openGraph: {
    title: "Crypto Pay — Crypto payments for Telegram bots",
    description: "Seamlessly accept crypto payments in your Telegram bots and services.",
    type: "website",
    url: "https://crypto-pay.example.com",
    siteName: "Crypto Pay",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(inter.variable, 'antialiased')}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
