import type { Metadata } from "next";
import "./globals.scss";
import "./tailwind.css";
import Header from "@/components/layout/Header";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeuroVault - Earn Real Yield",
  description: "NeuroVault - Earn Real Yield",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
