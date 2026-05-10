import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from '@/contexts/ThemeContext';
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
