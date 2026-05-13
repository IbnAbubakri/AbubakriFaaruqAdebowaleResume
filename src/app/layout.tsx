import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from '@/contexts/ThemeContext';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import LiveClock from '@/components/LiveClock';
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
  openGraph: {
    title: "Abubakri Faaruq Adebowale | IT Professional & Vibecoder",
    description: "IT Administrator, Network Engineer, Cybersecurity Specialist, Cloud Engineer, and Vibecoder",
    url: "https://abubakrifaaruq.onrender.com",
    siteName: "Abubakri Faaruq Adebowale",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abubakri Faaruq Adebowale | IT Professional & Vibecoder",
    description: "IT Administrator, Network Engineer, Cybersecurity Specialist, Cloud Engineer, and Vibecoder",
  },
  alternates: {
    canonical: "https://abubakrifaaruq.onrender.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme');
                if (!theme) {
                  theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <ScrollProgress />
          <BackToTop />
          <LiveClock />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
