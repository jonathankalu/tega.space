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

import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${swanky.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
