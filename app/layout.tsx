'use client';
import 'tailwindcss/tailwind.css';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/nav';

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Home 🇳🇵</title>
      </head>
      <header className='fixed top-0  w-full'>
        <NavBar />
      </header>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
