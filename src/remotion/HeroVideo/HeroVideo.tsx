import { AbsoluteFill, useCurrentFrame, interpolate, Easing, Img, staticFile } from "remotion";
import { AccentBar } from "../components/AccentBar";
import { GridDots } from "../components/GridDots";
import { sansFontFamily, monoFontFamily } from "../fonts";

const titles = [
  "IT Administrator",
  "Network Engineer",
  "Cybersecurity Specialist",
  "Cloud Engineer",
  "Vibecoder",
];

const titleColors = ["#f59e0b", "#2563eb", "#06b6d4", "#10b981", "#f59e0b"];

export const HeroVideo = () => {
  const frame = useCurrentFrame();

  const nameOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const nameY = interpolate(frame, [0, 20], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const subtitleOpacity = interpolate(frame, [25, 40], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const taglineOpacity = interpolate(frame, [45, 60], [0, 1], {
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
            radial-gradient(ellipse 80% 60% at 50% -20%, rgba(59,130,246,0.15) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 80%, rgba(6,182,212,0.08) 0%, transparent 50%),
            #0f172a
          `,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px
          )`,
        }}
      />

      <GridDots />
      <AccentBar />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            opacity: nameOpacity,
            transform: `translateY(${nameY}px)`,
            marginBottom: "24px",
          }}
        >
          <Img
            src={staticFile("/profile.jpeg")}
            style={{
              width: 160,
              height: 160,
              borderRadius: 24,
              objectFit: "cover",
              border: "2px solid rgba(245,158,11,0.3)",
              boxShadow: "0 0 40px rgba(245,158,11,0.15)",
            }}
          />
        </div>

        <div
          style={{
            opacity: nameOpacity,
            transform: `translateY(${nameY}px)`,
            fontFamily: sansFontFamily,
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Abubakri{" "}
          <span style={{ color: "#f59e0b" }}>Faaruq</span>{" "}
          Adebowale
        </div>

        <div
          style={{
            opacity: subtitleOpacity,
            fontFamily: monoFontFamily,
            fontSize: 14,
            color: "#f59e0b",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginTop: 16,
          }}
        >
          IT Professional
        </div>

        <div
          style={{
            opacity: taglineOpacity,
            marginTop: 32,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {titles.map((title, i) => {
            const titleDelay = 60 + i * 8;
            const tOpacity = interpolate(frame, [titleDelay, titleDelay + 10], [0, 1], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
            });

            return (
              <div
                key={title}
                style={{
                  opacity: tOpacity,
                  padding: "6px 12px",
                  backgroundColor: "rgba(15,23,42,0.8)",
                  border: `1px solid ${titleColors[i]}40`,
                  borderRadius: 6,
                  color: "#94a3b8",
                  fontSize: 13,
                  fontFamily: monoFontFamily,
                }}
              >
                {title}
              </div>
            );
          })}
        </div>

        <div
          style={{
            opacity: interpolate(frame, [120, 140], [0, 1], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
            }),
            marginTop: 48,
            display: "flex",
            gap: 16,
          }}
        >
          {["Hire Me", "Download CV", "View Projects"].map((btn, i) => {
            const btnDelay = 140 + i * 5;
            const bOpacity = interpolate(frame, [btnDelay, btnDelay + 8], [0, 1], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
            });

            return (
              <div
                key={btn}
                style={{
                  opacity: bOpacity,
                  padding: "12px 24px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  backgroundColor: i === 0 ? "#f59e0b" : "transparent",
                  color: i === 0 ? "#000000" : "#94a3b8",
                  border: i === 0 ? "none" : "1px solid rgba(148,163,184,0.3)",
                }}
              >
                {btn}
              </div>
            );
          })}
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
          color: "rgba(148,163,184,0.3)",
          letterSpacing: "0.1em",
        }}
      >
        abubakrifaaruqadebowaleresume.onrender.com
      </div>
    </AbsoluteFill>
  );
};
