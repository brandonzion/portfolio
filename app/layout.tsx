import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Brandon Sun - Developer & Jazz Pianist",
  description: "Portfolio of Brandon Sun - Full-stack developer and jazz pianist. Harmonizing code and creativity.",
  keywords: ["developer", "jazz", "pianist", "full-stack", "web development", "music"],
  authors: [{ name: "Brandon Sun" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Brandon Sun - Developer & Jazz Pianist",
    description: "Portfolio of Brandon Sun - Full-stack developer and jazz pianist",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=array@400,700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} antialiased bg-slate-900 text-slate-200`}
        suppressHydrationWarning={true}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
