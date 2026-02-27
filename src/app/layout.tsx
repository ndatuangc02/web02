import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "DevBlog - Nơi Chia Sẻ Kiến Thức",
  description: "Một blog đơn giản nhưng tinh tế về lập trình và công nghệ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
