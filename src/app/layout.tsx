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
    default: "Websy — Websites that grow your business",
    template: "%s | Websy"
  },
  description:
    "Websy builds custom ecommerce stores, business sites, and landing pages engineered to convert visitors into customers.",
  openGraph: {
    title: "Websy — Websites that grow your business",
    description:
      "Custom ecommerce, business sites, and landing pages — designed for speed, trust, and sales.",
    type: "website",
    siteName: "Websy"
  }
};

export const viewport: Viewport = {
  themeColor: "#FAF8F4"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${notoBengali.variable} font-bengali antialiased bg-paper text-ink selection:bg-brand/25`}
      >
        {children}
      </body>
    </html>
  );
}
