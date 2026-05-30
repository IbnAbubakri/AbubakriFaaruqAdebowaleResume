import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from '@/contexts/ThemeContext';
import { MotionConfig } from 'framer-motion';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
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
  title: "Abubakri Faaruq Adebowale | IT Professional & Network Engineer",
  description: "Portfolio of Abubakri Faaruq Adebowale — IT Administrator, Network Engineer, Cybersecurity Specialist, and Cloud Engineer.",
  keywords: ["IT Professional", "Network Engineer", "Cybersecurity", "Cloud Engineer", "Portfolio", "Abubakri Faaruq"],
  openGraph: {
    title: "Abubakri Faaruq Adebowale | IT Professional & Network Engineer",
    description: "IT Administrator, Network Engineer, Cybersecurity Specialist, and Cloud Engineer.",
    url: "https://abubakrifaaruq.onrender.com",
    siteName: "Abubakri Faaruq Adebowale",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abubakri Faaruq Adebowale | IT Professional & Network Engineer",
    description: "IT Administrator, Network Engineer, Cybersecurity Specialist, and Cloud Engineer.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                if (t === 'dark') document.documentElement.classList.add('dark');
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={`${archivo.variable} ${spaceGrotesk.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <MotionConfig reducedMotion="user">
            <ScrollProgress />
            <BackToTop />
            {children}
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
