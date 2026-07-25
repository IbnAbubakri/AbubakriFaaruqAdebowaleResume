// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

import type { Metadata } from "next";
import { Archivo, Sora, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from '@/contexts/ThemeContext';
import { MotionConfig } from 'framer-motion';
import ErrorBoundary from '@/components/ErrorBoundary';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import { Toaster } from '@/components/ui/sonner';
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abubakri-faaruq-adebowale-resume.vercel.app"),
  title: "Abubakri Faaruq Adebowale | IT Professional & Network Engineer",
  description: "Portfolio of Abubakri Faaruq Adebowale — IT Administrator, Network Engineer, Cybersecurity Specialist, and Cloud Engineer.",
  keywords: ["IT Professional", "Network Engineer", "Cybersecurity", "Cloud Engineer", "Portfolio", "Abubakri Faaruq"],
  openGraph: {
    title: "Abubakri Faaruq Adebowale | IT Professional & Network Engineer",
    description: "IT Administrator, Network Engineer, Cybersecurity Specialist, and Cloud Engineer.",
    url: "https://abubakri-faaruq-adebowale-resume.vercel.app",
    siteName: "Abubakri Faaruq Adebowale",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://abubakri-faaruq-adebowale-resume.vercel.app/profile.jpeg", width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abubakri Faaruq Adebowale | IT Professional & Network Engineer",
    description: "IT Administrator, Network Engineer, Cybersecurity Specialist, and Cloud Engineer.",
    images: [{ url: "https://abubakri-faaruq-adebowale-resume.vercel.app/profile.jpeg", width: 1200, height: 1200 }],
  },
  alternates: {
    canonical: "https://abubakri-faaruq-adebowale-resume.vercel.app",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "lUDFm7baDbaaSlMR6x-ti6FPFZA__rA0gSsKrNxvzD0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abubakri Faaruq Adebowale",
              jobTitle: "IT Administrator & Network Engineer",
              url: "https://abubakri-faaruq-adebowale-resume.vercel.app",
              image: "https://abubakri-faaruq-adebowale-resume.vercel.app/profile.jpeg",
              email: "Faruqsuzay@gmail.com",
              telephone: "+2349061345507",
              address: {
                "@type": "PostalAddress",
                addressCountry: "NG",
              },
              sameAs: [
                "https://github.com/IbnAbubakri",
              ],
              knowsAbout: [
                "Network Engineering",
                "Cybersecurity",
                "Cloud Computing",
                "AWS",
                "DevOps",
                "Linux Administration",
                "Python",
                "React",
                "Next.js",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "HIIT Plc",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Abubakri Faaruq Adebowale | IT Professional & Network Engineer",
              url: "https://abubakri-faaruq-adebowale-resume.vercel.app",
              description: "Portfolio of Abubakri Faaruq Adebowale — IT Administrator, Network Engineer, Cybersecurity Specialist, and Cloud Engineer.",
              author: {
                "@type": "Person",
                name: "Abubakri Faaruq Adebowale",
              },
            }),
          }}
        />
      </head>
      <body className={`${archivo.variable} ${sora.variable} ${jetbrainsMono.variable} font-sans antialiased`} suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <MotionConfig reducedMotion="user">
            <ErrorBoundary>
              <ScrollProgress />
              <BackToTop />
              {children}
              <Toaster />
            </ErrorBoundary>
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
