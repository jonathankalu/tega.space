import type { Metadata } from "next";
import { Geist, Geist_Mono, Swanky_and_Moo_Moo } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const swanky = Swanky_and_Moo_Moo({
  weight: "400",
  variable: "--font-swanky",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tegha - Portfolio",
  description: "Product Designer and Researcher",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${swanky.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A]">{children}</body>
    </html>
  );
}
