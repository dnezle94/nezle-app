import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nezle Fe E. Doncillo - Front-End Web Developer",
  description: "Personal website of Nezle Fe E. Doncillo, a Front-End Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className}' overflow-x-hidden overscroll-none bg-customViolet leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900'`}>{children}</body>
    </html>
  );
}
