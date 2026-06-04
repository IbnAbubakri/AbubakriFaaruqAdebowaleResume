"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { RemotionModal } from "@/components/RemotionModal";

const HeroVideo = dynamic(
  () => import("@/remotion/HeroVideo/HeroVideo").then((mod) => mod.HeroVideo),
  { ssr: false }
);
const SkillsShowreel = dynamic(
  () => import("@/remotion/SkillsShowreel/SkillsShowreel").then((mod) => mod.SkillsShowreel),
  { ssr: false }
);
const ProjectsShowreel = dynamic(
  () => import("@/remotion/ProjectsShowreel/ProjectsShowreel").then((mod) => mod.ProjectsShowreel),
  { ssr: false }
);
const CertificationsHighlight = dynamic(
  () => import("@/remotion/CertificationsHighlight/CertificationsHighlight").then((mod) => mod.CertificationsHighlight),
  { ssr: false }
);

const triggerBase =
  "inline-flex items-center gap-2 px-4 py-2 text-sm font-mono rounded-lg border transition-all duration-200 active:scale-95 cursor-pointer";

export function HeroPlayerTrigger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${triggerBase} bg-accent text-accent-foreground border-accent hover:opacity-90`}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        Play Intro
      </button>
      {open && (
        <RemotionModal
          component={HeroVideo}
          durationInFrames={150}
          fps={30}
          width={1920}
          height={1080}
          onClose={() => setOpen(false)}
          title="Hero Intro Video"
        />
      )}
    </>
  );
}

export function SkillsPlayerTrigger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${triggerBase} border-accent text-accent hover:bg-accent/10`}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        Watch Skills Reel
      </button>
      {open && (
        <RemotionModal
          component={SkillsShowreel}
          durationInFrames={240}
          fps={30}
          width={1920}
          height={1080}
          onClose={() => setOpen(false)}
          title="Skills Showreel"
        />
      )}
    </>
  );
}

export function ProjectsPlayerTrigger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${triggerBase} border-cyan-500 text-cyan-500 hover:bg-cyan-500/10`}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        Watch Projects Reel
      </button>
      {open && (
        <RemotionModal
          component={ProjectsShowreel}
          durationInFrames={300}
          fps={30}
          width={1920}
          height={1080}
          onClose={() => setOpen(false)}
          title="Projects Showreel"
        />
      )}
    </>
  );
}

export function CertsPlayerTrigger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${triggerBase} border-amber-500 text-amber-500 hover:bg-amber-500/10`}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        Watch Certifications Reel
      </button>
      {open && (
        <RemotionModal
          component={CertificationsHighlight}
          durationInFrames={180}
          fps={30}
          width={1920}
          height={1080}
          onClose={() => setOpen(false)}
          title="Certifications Highlight"
        />
      )}
    </>
  );
}
