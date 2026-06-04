import { AbsoluteFill } from "remotion";

const bars = [
  { color: "#f59e0b" },
  { color: "#2563eb" },
  { color: "#06b6d4" },
  { color: "#10b981" },
];

export const AccentBar = () => {
  return (
    <AbsoluteFill>
      {bars.map((bar, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${20 + i * 20}%`,
            left: 0,
            width: "4px",
            height: "60px",
            backgroundColor: bar.color,
            borderRadius: "0 2px 2px 0",
            opacity: 0.3,
          }}
        />
      ))}
    </AbsoluteFill>
  );
};
