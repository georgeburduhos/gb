import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "George Burduhos — Cross-Platform Engineer — Mobile, Web & AI",
  description:
    "Cross-platform engineer based in Cluj-Napoca. React Native, Expo (mobile + web), iOS, Android, TypeScript, and AI integration — 16+ years in the field.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://georgeburduhos.com",
    siteName: "George Burduhos",
    title: "George Burduhos — Cross-Platform Engineer — Mobile, Web & AI",
    description:
      "Senior React Native developer based in Cluj-Napoca. 16+ years in mobile development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "George Burduhos — Cross-Platform Engineer — Mobile, Web & AI",
    description:
      "Senior React Native developer based in Cluj-Napoca. 16+ years in mobile development.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
