import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from '@/contexts/ThemeContext';
import { MotionConfig } from 'framer-motion';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import LiveClock from '@/components/LiveClock';
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
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
      <body className={`${archivo.variable} ${spaceGrotesk.variable} antialiased overflow-x-hidden bg-slate-950 text-slate-100`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-green-500 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <MotionConfig reducedMotion="user">
            <ScrollProgress />
            <BackToTop />
            <LiveClock />
            {children}
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
