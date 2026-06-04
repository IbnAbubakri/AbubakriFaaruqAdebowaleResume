import { AbsoluteFill, useCurrentFrame, interpolate, Easing, Sequence } from "remotion";
import { HeroVideo } from "../HeroVideo/HeroVideo";
import { SkillsShowreel } from "../SkillsShowreel/SkillsShowreel";
import { ProjectsShowreel } from "../ProjectsShowreel/ProjectsShowreel";
import { CertificationsHighlight } from "../CertificationsHighlight/CertificationsHighlight";

export const Showreel = () => {
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={150}>
        <HeroVideo />
      </Sequence>
      <Sequence from={150} durationInFrames={30}>
        <Transition label="Skills & Expertise" color="#f59e0b" />
      </Sequence>
      <Sequence from={180} durationInFrames={240}>
        <SkillsShowreel />
      </Sequence>
      <Sequence from={420} durationInFrames={30}>
        <Transition label="Projects" color="#06b6d4" />
      </Sequence>
    </AbsoluteFill>
  );
};

const Transition = ({ label, color }: { label: string; color: string }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 10, 20, 30], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const scale = interpolate(frame, [0, 10, 20, 30], [0.9, 1, 1, 0.9], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#020617",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          opacity,
          transform: `scale(${scale})`,
          fontFamily: "sans-serif",
          fontSize: 64,
          fontWeight: 700,
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 13,
            color,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Next Section
        </div>
        {label}
      </div>
    </AbsoluteFill>
  );
};
