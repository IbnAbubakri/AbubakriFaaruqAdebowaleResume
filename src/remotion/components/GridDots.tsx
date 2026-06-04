import { AbsoluteFill } from "remotion";

export const GridDots = () => {
  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(rgba(148,163,184,0.15) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
    </AbsoluteFill>
  );
};
