import type { Metadata } from "next";
import "./globals.scss";
import "./tailwind.css";
import Header from "@/components/layout/Header";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});



export const metadata: Metadata = {
  title: "YieldNad",
  description: "Magic Monad Money",
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
      </body>
    </html>
  );
}
