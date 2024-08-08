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
      <body className={`${inter.className}' bg-[#120023] text-[#8892b0] h-screen font-sans'`}>{children}</body>
    </html>
  );
}
