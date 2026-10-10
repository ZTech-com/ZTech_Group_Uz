import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE } from "@/lib/constants";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_DESCRIPTION =
  "ZTech Group builds modern websites, Telegram bots, CRM systems, business platforms and custom software for modern businesses.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "ZTech Group — Digital Products, Websites & Software",
    template: "%s · ZTech Group",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "ZTech Group",
    "web development",
    "Telegram bots",
    "CRM systems",
    "business platforms",
    "admin dashboards",
    "e-commerce",
    "automation",
    "custom software",
    "AI solutions",
  ],
  authors: [{ name: "ZTech Group" }],
  creator: "ZTech Group",
  openGraph: {
    type: "website",
    url: SITE.url,
    title: "ZTech Group — Digital Products, Websites & Software",
    description: SITE_DESCRIPTION,
    siteName: "ZTech Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZTech Group — Digital Products, Websites & Software",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--text-primary)]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
