"use client";

import { useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@remotion/player").then((mod) => mod.Player),
  { ssr: false }
);

export function RemotionModal({
  component: Comp,
  durationInFrames,
  fps = 30,
  width = 1920,
  height = 1080,
  onClose,
  title,
}: {
  component: React.ComponentType;
  durationInFrames: number;
  fps?: number;
  width?: number;
  height?: number;
  onClose: () => void;
  title?: string;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onKeyDown]);

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={title || "Video player"}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/60 hover:text-white text-sm font-mono transition-colors z-10"
          aria-label="Close"
        >
          Close [Esc]
        </button>
        {title && (
          <div className="text-white/80 text-sm font-mono mb-2">{title}</div>
        )}
        <Player
          component={Comp}
          durationInFrames={durationInFrames}
          fps={fps}
          compositionWidth={width}
          compositionHeight={height}
          controls
          loop
          autoPlay
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        />
      </div>
    </div>
  );
}
