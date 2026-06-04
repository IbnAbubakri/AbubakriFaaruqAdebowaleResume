import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { GridDots } from "../components/GridDots";
import { getSansFont, getMonoFont } from "../fonts";

const sansFontFamily = getSansFont();
const monoFontFamily = getMonoFont();

const projects = [
  {
    title: "FinTech Application (BillXpress)",
    description: "Scalable fintech platform for digital payment services with secure financial transaction infrastructure.",
    tags: ["React", "Node.js", "API Development", "Full-Stack"],
  },
  {
    title: "Weather Forecast Application",
    description: "Weather forecasting web application with live API integration and responsive user interfaces.",
    tags: ["Next.js", "TypeScript", "Weather API", "Tailwind CSS"],
  },
  {
    title: "Hospital Management System",
    description: "Scalable hospital management platform with healthcare workflow interfaces.",
    tags: ["React", "Frontend Development", "Healthcare UI"],
  },
  {
    title: "Enterprise Networking Labs",
    description: "Enterprise-grade VLAN infrastructures with dynamic routing protocols and network security controls.",
    tags: ["Cisco Packet Tracer", "GNS3", "VLANs", "OSPF", "Network Security"],
  },
];

const FRAMES_PER_PROJECT = 75;

export const ProjectsShowreel = () => {
  const frame = useCurrentFrame();
  const currentIndex = Math.min(Math.floor(frame / FRAMES_PER_PROJECT), projects.length - 1);
  const localFrame = frame - currentIndex * FRAMES_PER_PROJECT;
  const project = projects[currentIndex];

  const fadeIn = interpolate(localFrame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const descFadeIn = interpolate(localFrame, [15, 30], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 70% 50% at 50% 50%, rgba(6,182,212,0.08) 0%, transparent 60%),
            #0f172a
          `,
        }}
      />
      <GridDots />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: 4,
          backgroundColor: "#06b6d4",
          opacity: 0.3,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            opacity: fadeIn,
            fontFamily: monoFontFamily,
            fontSize: 13,
            color: "#06b6d4",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Portfolio
        </div>

        <div
          style={{
            opacity: fadeIn,
            position: "absolute",
            top: 80,
            right: 80,
            fontFamily: monoFontFamily,
            fontSize: 48,
            fontWeight: 700,
            color: "rgba(6,182,212,0.1)",
          }}
        >
          {String(currentIndex + 1).padStart(2, "0")}
        </div>

        <div
          style={{
            opacity: fadeIn,
            fontFamily: sansFontFamily,
            fontSize: 48,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            marginBottom: 24,
            maxWidth: 800,
          }}
        >
          {project.title}
        </div>

        <div
          style={{
            width: 60,
            height: 2,
            backgroundColor: "#06b6d4",
            opacity: 0.5,
            marginBottom: 24,
          }}
        />

        <div
          style={{
            opacity: descFadeIn,
            fontFamily: sansFontFamily,
            fontSize: 18,
            color: "#94a3b8",
            textAlign: "center",
            lineHeight: 1.6,
            maxWidth: 700,
            marginBottom: 32,
          }}
        >
          {project.description}
        </div>

        <div
          style={{
            opacity: descFadeIn,
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {project.tags.map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 16px",
                backgroundColor: "rgba(6,182,212,0.1)",
                border: "1px solid rgba(6,182,212,0.2)",
                borderRadius: 6,
                color: "#06b6d4",
                fontSize: 13,
                  fontFamily: monoFontFamily,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: monoFontFamily,
          fontSize: 11,
          color: "rgba(148,163,184,0.2)",
        }}
      >
        {currentIndex + 1} / {projects.length}
      </div>
    </AbsoluteFill>
  );
};
