import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-bengali",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Websy — ওয়েবসাইট যা ব্যবসা বাড়ায়",
    template: "%s | Websy"
  },
  description:
    "Websy একটি স্ট্রাকচার্ড ডিজিটাল স্টুডিও। ইকমার্স, বিজনেস সাইট ও ল্যান্ডিং পেজ — কনভার্সন-ফোকাসড ওয়েবসাইট ডেভেলপমেন্ট।",
  openGraph: {
    title: "Websy — Websites that grow your business",
    description:
      "Conversion-focused website development for ecommerce, business growth, and campaign landing pages.",
    type: "website",
    siteName: "Websy"
  }
};

export const viewport: Viewport = {
  themeColor: "#09090B"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notoBengali.variable} font-bengali antialiased bg-paper text-ink selection:bg-brand/25`}
      >
        {children}
      </body>
    </html>
  );
}
