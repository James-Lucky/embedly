import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Primary Font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Secondary Font
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site Details For SEO
export const metadata: Metadata = {
  title: "Embedly",
  description: "Embedly is a AI Agent Platform.",
  generator: "Made By lucky",
  keywords: ["Embedly", "Embedly"],
  authors: [{ name: "Made By lucky", url: "https://luckya.vercel.app" }],
  creator: "Embedly",
  metadataBase: new URL("https://embedlyaibot.vercel.app"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Embedly | AI Agent Platform",
    description: "Embedly is a AI Agent Platform.",
    url: "https://embedlyaibot.vercel.app",
    siteName: "Embedly",
    images: [
      {
        url: "/logo.webp",
        width: 800,
        height: 600,
        alt: "Embedly - AI Agent Platform",
      },
      {
        url: "/logo.webp",
        width: 1800,
        height: 1600,
        alt: "Embedly - AI Agent Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Embedly | AI Agent Platform",
    description: "Embedly is a AI Agent Platform.",
    creator: "@Embedly",
    images: ["/logo.webp"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
    other: {
      rel: "apple-icon",
      url: "/logo.webp",
    },
  },
};

// Root Layout
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
