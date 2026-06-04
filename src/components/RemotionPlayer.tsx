"use client";

import dynamic from "next/dynamic";
import { ComponentProps } from "react";

const Player = dynamic(
  () => import("@remotion/player").then((mod) => mod.Player),
  { ssr: false }
);

type RemotionPlayerProps = {
  compositionId: string;
  component: React.ComponentType;
  durationInFrames: number;
  fps?: number;
  width?: number;
  height?: number;
  className?: string;
  controls?: boolean;
  loop?: boolean;
  autoPlay?: boolean;
};

export const RemotionPlayer = ({
  compositionId,
  component,
  durationInFrames,
  fps = 30,
  width = 1920,
  height = 1080,
  className = "",
  controls = true,
  loop = false,
  autoPlay = true,
}: RemotionPlayerProps) => {
  return (
    <div className={`remotion-player-wrapper ${className}`}>
      <Player
        component={component}
        durationInFrames={durationInFrames}
        fps={fps}
        compositionWidth={width}
        compositionHeight={height}
        controls={controls}
        loop={loop}
        autoPlay={autoPlay}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      />
    </div>
  );
};
