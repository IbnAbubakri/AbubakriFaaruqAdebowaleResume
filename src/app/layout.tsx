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
  metadataBase: new URL("https://abubakrifaaruqadebowaleresume.vercel.app"),
  title: "Abubakri Faaruq Adebowale | IT Professional, Network Engineer & Software Developer",
  description: "Portfolio of Abubakri Faaruq Adebowale — IT Administrator, Network Engineer, Cybersecurity Specialist, Cloud Engineer, and Software Developer based in Lagos, Nigeria.",
  keywords: ["IT Professional", "Network Engineer", "Cybersecurity", "Cloud Engineer", "Software Developer", "AWS", "CompTIA Network+", "CCNA", "Portfolio", "Abubakri Faaruq"],
  openGraph: {
    title: "Abubakri Faaruq Adebowale | IT Professional, Network Engineer & Software Developer",
    description: "IT Administrator, Network Engineer, Cybersecurity Specialist, Cloud Engineer, and Software Developer.",
    url: "https://abubakrifaaruqadebowaleresume.vercel.app",
    siteName: "Abubakri Faaruq Adebowale",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abubakri Faaruq Adebowale | IT Professional, Network Engineer & Software Developer",
    description: "IT Administrator, Network Engineer, Cybersecurity Specialist, Cloud Engineer, and Software Developer.",
  },
  alternates: {
    canonical: "https://abubakrifaaruqadebowaleresume.vercel.app",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abubakri Faaruq Adebowale",
              jobTitle: "IT Administrator & Network Engineer",
              url: "https://abubakrifaaruqadebowaleresume.vercel.app",
              image: "https://abubakrifaaruqadebowaleresume.vercel.app/profile.jpeg",
              email: "Faruqsuzay@gmail.com",
              telephone: "+2349061345507",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
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
                "Systems Administration",
                "Software Development",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "National Open University of Nigeria",
              },
              worksFor: {
                "@type": "Organization",
                name: "HIIT Plc",
              },
              hasCredential: [
                { "@type": "EducationalOccupationalCredential", "name": "Cisco Certified Network Associate (CCNA)", "credentialCategory": "certification" },
                { "@type": "EducationalOccupationalCredential", "name": "CompTIA Network+", "credentialCategory": "certification" },
                { "@type": "EducationalOccupationalCredential", "name": "CompTIA A+", "credentialCategory": "certification" },
                { "@type": "EducationalOccupationalCredential", "name": "AWS Cloud Computing", "credentialCategory": "certification" },
                { "@type": "EducationalOccupationalCredential", "name": "DevOps Certification", "credentialCategory": "certification" },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Abubakri Faaruq Adebowale | IT Professional, Network Engineer & Software Developer",
              url: "https://abubakrifaaruqadebowaleresume.vercel.app",
              description: "Portfolio of Abubakri Faaruq Adebowale — IT Administrator, Network Engineer, Cybersecurity Specialist, Cloud Engineer, and Software Developer based in Lagos, Nigeria.",
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
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded"
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
