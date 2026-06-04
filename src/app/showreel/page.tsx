"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Showreel } from "@/remotion/Showreel/Showreel";

const Player = dynamic(
  () => import("@remotion/player").then((mod) => mod.Player),
  { ssr: false }
);

export default function ShowreelPage() {
  return (
    <div className="min-h-screen bg-surface-950 flex flex-col">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-surface-800">
        <Link
          href="/"
          className="text-white/60 hover:text-white text-sm font-mono transition-colors"
        >
          &larr; Back to Portfolio
        </Link>
        <span className="text-white/40 text-xs font-mono">
          Showreel &middot; 15s
        </span>
      </nav>
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-5xl">
          <Player
            component={Showreel}
            durationInFrames={450}
            fps={30}
            compositionWidth={1920}
            compositionHeight={1080}
            controls
            loop
            autoPlay
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 0 60px rgba(245,158,11,0.1)",
            }}
          />
        </div>
      </div>
      <div className="text-center pb-6 text-white/20 text-xs font-mono">
        Built with Remotion &middot; Abubakri Faaruq Adebowale &middot; 2025
      </div>
    </div>
  );
}
