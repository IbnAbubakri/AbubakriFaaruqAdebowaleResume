// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.

"use client";

import { useRef, useState } from "react";

export default function VideoResumePlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative rounded-2xl overflow-hidden border border-border bg-card group">
      <div className="absolute -inset-4 bg-accent/5 rounded-[2rem] blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <video
        ref={videoRef}
        src="/video-resume.mp4"
        className="w-full aspect-video rounded-2xl"
        controls
        preload="metadata"
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          aria-label="Play video"
        >
          <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center shadow-lg backdrop-blur-sm">
            <svg
              className="w-8 h-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
