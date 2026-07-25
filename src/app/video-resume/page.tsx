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
    canonical: "https://abubakri-faaruq-adebowale-resume.vercel.app/video-resume",
  },
  openGraph: {
    title: "Video Resume | Abubakri Faaruq Adebowale",
    description:
      "Professional video resume showcasing skills in networking, cybersecurity, cloud computing, and software development.",
    url: "https://abubakri-faaruq-adebowale-resume.vercel.app/video-resume",
    type: "website",
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
          <p className="text-sm font-medium text-accent uppercase tracking-[0.2em] mb-3 font-mono">
            Presentation
          </p>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground tracking-tight">
            Video Resume
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A 35-second professional overview of my experience, skills, and
            certifications in IT, networking, cybersecurity, and cloud computing.
          </p>
        </div>

        <VideoResumePlayer />

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          <div className="p-5 bg-card rounded-xl border border-border card-depth text-center">
            <div className="text-2xl font-bold text-accent mb-1">35s</div>
            <div className="text-sm text-muted-foreground">Duration</div>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border card-depth text-center">
            <div className="text-2xl font-bold text-accent mb-1">1080p</div>
            <div className="text-sm text-muted-foreground">Resolution</div>
          </div>
          <div className="p-5 bg-card rounded-xl border border-border card-depth text-center">
            <div className="text-2xl font-bold text-accent mb-1">9</div>
            <div className="text-sm text-muted-foreground">Scenes</div>
          </div>
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
      </div>
    </main>
  );
}
