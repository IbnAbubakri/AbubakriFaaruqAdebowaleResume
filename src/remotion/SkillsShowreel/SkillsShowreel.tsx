import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { GridDots } from "../components/GridDots";

const skillCategories = [
  { title: "Networking", color: "#f59e0b", skills: ["CCNA", "Network+", "Routing & Switching", "VLANs", "OSPF", "EIGRP", "Network Security"] },
  { title: "Cybersecurity", color: "#2563eb", skills: ["Network Security", "Firewall Config", "Penetration Testing", "Security Protocols", "Risk Assessment"] },
  { title: "Cloud Computing", color: "#06b6d4", skills: ["AWS", "Cloud Architecture", "EC2", "S3", "Lambda", "Cloud Security"] },
  { title: "Linux Administration", color: "#10b981", skills: ["Ubuntu", "CentOS", "Shell Scripting", "System Administration", "Server Management"] },
  { title: "DevOps", color: "#f59e0b", skills: ["CI/CD", "Docker", "Git/GitHub", "Automation", "Infrastructure as Code"] },
  { title: "Frontend", color: "#2563eb", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"] },
  { title: "Backend", color: "#06b6d4", skills: ["Node.js", "Express", "Python", "REST APIs", "Database Design", "PostgreSQL", "MongoDB"] },
  { title: "Tools & Platforms", color: "#64748b", skills: ["Cisco Packet Tracer", "GNS3", "Wireshark", "Git", "AWS Console", "Render", "Netlify"] },
];

const ITEMS_PER_CATEGORY = 30;

export const SkillsShowreel = () => {
  const frame = useCurrentFrame();
  const totalCategories = skillCategories.length;
  const currentCategoryIndex = Math.min(
    Math.floor(frame / ITEMS_PER_CATEGORY),
    totalCategories - 1
  );
  const localFrame = frame - currentCategoryIndex * ITEMS_PER_CATEGORY;
  const category = skillCategories[currentCategoryIndex];

  const titleOpacity = interpolate(localFrame, [0, 10], [0, 1], {
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
            radial-gradient(ellipse 80% 50% at 50% 50%, ${category.color}12 0%, transparent 60%),
            #020617
          `,
        }}
      />
      <GridDots />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          backgroundColor: "rgba(148,163,184,0.1)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${(frame / (totalCategories * ITEMS_PER_CATEGORY)) * 100}%`,
            backgroundColor: category.color,
            borderRadius: "0 2px 2px 0",
          }}
        />
      </div>

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
            opacity: titleOpacity,
            fontFamily: "monospace",
            fontSize: 13,
            color: category.color,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Skills & Expertise
        </div>

        <div
          style={{
            opacity: titleOpacity,
            fontFamily: "sans-serif",
            fontSize: 56,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 48,
          }}
        >
          {category.title}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            maxWidth: 800,
          }}
        >
          {category.skills.map((skill, i) => {
            const skillDelay = 12 + i * 2;
            const sOpacity = interpolate(localFrame, [skillDelay, skillDelay + 8], [0, 1], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
            });

            return (
              <div
                key={skill}
                style={{
                  opacity: sOpacity,
                  padding: "10px 20px",
                  backgroundColor: "rgba(15,23,42,0.6)",
                  border: `1px solid ${category.color}30`,
                  borderRadius: 8,
                  color: "#e2e8f0",
                  fontSize: 16,
                  fontFamily: "monospace",
                }}
              >
                {skill}
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
          fontFamily: "monospace",
          fontSize: 11,
          color: "rgba(148,163,184,0.2)",
        }}
      >
        {currentCategoryIndex + 1} / {totalCategories}
      </div>
    </AbsoluteFill>
  );
};
