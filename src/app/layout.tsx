import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abubakri Faaruq Adebowale | IT Professional & Vibecoder",
  description: "Portfolio of Abubakri Faaruq Adebowale - IT Administrator, Network Engineer, Cybersecurity Specialist, Cloud Engineer, and Vibecoder",
  keywords: ["IT Professional", "Network Engineer", "Cybersecurity", "Cloud Engineer", "Vibecoder", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark:bg-gray-900`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
