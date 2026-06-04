"use client";

import { useState } from "react";
import { RemotionModal } from "@/components/RemotionModal";
import { HeroVideo } from "@/remotion/HeroVideo/HeroVideo";
import { SkillsShowreel } from "@/remotion/SkillsShowreel/SkillsShowreel";
import { ProjectsShowreel } from "@/remotion/ProjectsShowreel/ProjectsShowreel";
import { CertificationsHighlight } from "@/remotion/CertificationsHighlight/CertificationsHighlight";

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
