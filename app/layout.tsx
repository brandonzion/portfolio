import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brandon Sun - Developer & Jazz Pianist",
  description: "Portfolio of Brandon Sun - Full-stack developer and jazz pianist. Harmonizing code and creativity.",
  keywords: ["developer", "jazz", "pianist", "full-stack", "web development", "music"],
  authors: [{ name: "Brandon Sun" }],
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
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-slate-900 text-slate-200`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <AudioPlayer />
      </body>
    </html>
  );
}
