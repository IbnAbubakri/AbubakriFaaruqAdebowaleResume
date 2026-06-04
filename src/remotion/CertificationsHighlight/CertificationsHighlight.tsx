import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { GridDots } from "../components/GridDots";
import { sansFontFamily, monoFontFamily } from "../fonts";

const certifications = [
  {
    title: "Cisco Certified Network Associate",
    subtitle: "CCNA",
    issuer: "Cisco",
    date: "2024",
    distinction: true,
  },
  {
    title: "CompTIA Network+",
    subtitle: "Network+",
    issuer: "CompTIA",
    date: "2024",
    distinction: true,
  },
  {
    title: "AWS Cloud Computing",
    subtitle: "AWS",
    issuer: "Amazon Web Services",
    date: "2025",
    distinction: false,
  },
  {
    title: "DevOps Certification",
    subtitle: "DevOps",
    issuer: "Udemy",
    date: "2025",
    distinction: false,
  },
];

const FRAMES_PER_CERT = 45;

export const CertificationsHighlight = () => {
  const frame = useCurrentFrame();
  const currentIndex = Math.min(Math.floor(frame / FRAMES_PER_CERT), certifications.length - 1);
  const localFrame = frame - currentIndex * FRAMES_PER_CERT;
  const cert = certifications[currentIndex];

  const fadeIn = interpolate(localFrame, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const badgeScale = interpolate(localFrame, [0, 15], [0.8, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.elastic(0.6),
  });

  const descFade = interpolate(localFrame, [15, 25], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 60% 40% at 50% 50%, rgba(245,158,11,0.06) 0%, transparent 60%),
            #020617
          `,
        }}
      />
      <GridDots />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            opacity: fadeIn,
            fontFamily: monoFontFamily,
            fontSize: 13,
            color: "#f59e0b",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Credentials
        </div>

        <div
          style={{
            opacity: fadeIn,
            fontFamily: sansFontFamily,
            fontSize: 32,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 8,
            textAlign: "center",
          }}
        >
          {cert.title}
        </div>

        {cert.subtitle && (
          <div
            style={{
              opacity: fadeIn * 0.6,
              fontFamily: monoFontFamily,
              fontSize: 16,
              color: "#f59e0b",
              letterSpacing: "0.15em",
              marginBottom: 32,
            }}
          >
            {cert.subtitle}
          </div>
        )}

        <div
          style={{
            opacity: fadeIn,
            transform: `scale(${badgeScale})`,
            width: 120,
            height: 120,
            borderRadius: 60,
            backgroundColor: "rgba(245,158,11,0.1)",
            border: "2px solid rgba(245,158,11,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
          </svg>
        </div>

        <div
          style={{
            opacity: descFade,
            display: "flex",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{
              fontFamily: monoFontFamily, fontSize: 11, color: "rgba(148,163,184,0.5)",
              textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4,
            }}>
              Issuer
            </div>
            <div style={{               fontFamily: sansFontFamily, fontSize: 16, color: "#e2e8f0" }}>
              {cert.issuer}
            </div>
          </div>
          <div style={{ width: 1, backgroundColor: "rgba(148,163,184,0.2)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{
              fontFamily: monoFontFamily, fontSize: 11, color: "rgba(148,163,184,0.5)",
              textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4,
            }}>
              Date
            </div>
            <div style={{               fontFamily: sansFontFamily, fontSize: 16, color: "#e2e8f0" }}>
              {cert.date}
            </div>
          </div>
        </div>

        {cert.distinction && (
          <div
            style={{
              opacity: descFade,
              padding: "6px 16px",
              backgroundColor: "rgba(245,158,11,0.15)",
              border: "1px solid rgba(245,158,11,0.3)",
              borderRadius: 20,
              fontFamily: monoFontFamily,
              fontSize: 12,
              color: "#f59e0b",
            }}
          >
            Distinction
          </div>
        )}
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
        {currentIndex + 1} / {certifications.length}
      </div>
    </AbsoluteFill>
  );
};
