import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://licorice-kingdom-turkmenistan.example.com"
  ),
  title: {
    default: "Licorice Kingdom Turkmenistan",
    template: "%s | Licorice Kingdom Turkmenistan",
  },
  description:
    "Licorice Kingdom Turkmenistan — discover licorice and natural products from Turkmenistan.",
  keywords: ["licorice", "Turkmenistan", "natural products", "herbs"],
  authors: [{ name: "Licorice Kingdom" }],
  creator: "Licorice Kingdom",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Licorice Kingdom Turkmenistan",
    title: "Licorice Kingdom Turkmenistan",
    description: "Discover licorice and natural products from Turkmenistan.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
