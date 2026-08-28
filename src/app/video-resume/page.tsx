// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

import type { Metadata } from "next";
import Link from "next/link";
import VideoResumePlayer from "@/components/VideoResumePlayer";

export const metadata: Metadata = {
  title: "Video Resume | Abubakri Faaruq Adebowale",
  description:
    "Watch the professional video resume of Abubakri Faaruq Adebowale — IT Administrator, Network Engineer, Cybersecurity Specialist, and Cloud Engineer.",
  alternates: {
    canonical: "https://abubakrifaaruqadebowaleresume.vercel.app/video-resume",
  },
  openGraph: {
    title: "Video Resume | Abubakri Faaruq Adebowale",
    description:
      "Professional video resume showcasing skills in networking, cybersecurity, cloud computing, and software development.",
    url: "https://abubakrifaaruqadebowaleresume.vercel.app/video-resume",
    type: "website",
    images: [{ url: "https://abubakrifaaruqadebowaleresume.vercel.app/profile.jpeg", width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Resume | Abubakri Faaruq Adebowale",
    description:
      "Professional video resume showcasing skills in networking, cybersecurity, cloud computing, and software development.",
    images: [{ url: "https://abubakrifaaruqadebowaleresume.vercel.app/profile.jpeg", width: 1200, height: 1200 }],
  },
};

export default function VideoResumePage() {
  return (
    <main
      id="main-content"
      className="min-h-screen bg-background relative noise-overlay"
    >
      <div className="absolute inset-0 scan-lines-heavy pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Portfolio
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground tracking-tight">
            Video Resume
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A 35-second professional overview of my experience, skills, and
            certifications in IT, networking, cybersecurity, and cloud computing.
          </p>
        </div>

        <VideoResumePlayer />

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 text-sm text-muted-foreground font-mono">
          <span><strong className="text-accent font-semibold">35s</strong> duration</span>
          <span className="text-border hidden sm:inline">/</span>
          <span><strong className="text-accent font-semibold">1080p</strong> resolution</span>
          <span className="text-border hidden sm:inline">/</span>
          <span><strong className="text-accent font-semibold">9</strong> scenes</span>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/video-resume.mp4"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 active:scale-95 transition-[colors,transform] duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download MP4
          </a>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              What I Do
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I am an IT professional working across network engineering,
              cybersecurity, cloud computing, and software development. I am
              currently a CompTIA Network+ and A+ instructor at HIIT Plc, where
              I have mentored over 200 students toward certification success.
              I previously served as an IT Administrator at 1791 LLC, managing
              enterprise infrastructure, network security, and AWS cloud
              migration.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Certifications &amp; Education
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I hold the Cisco CCNA, CompTIA Network+, AWS Cloud Computing, and
              DevOps certifications — earned with distinction. I am currently
              pursuing a BSc in Cyber Security at the National Open University
              of Nigeria, deepening my expertise in penetration testing,
              digital forensics, and security operations.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">
            Get in Touch
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            This video resume offers a quick overview of my experience, skills,
            and certifications. To see my full work, projects, and detailed
            background, visit my portfolio or reach out by email at
            faruqsuzay@gmail.com or phone at +234 906 134 5507.
          </p>
        </div>
      </div>
    </main>
  );
}
