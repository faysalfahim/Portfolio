import { ImageResponse } from "next/og";

// Required for static export (`output: "export"` in next.config.ts)
export const dynamic = "force-static";

export const alt =
  "Md Fahim Faysal — Bioinformatics Researcher & Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Approximate hex equivalents of the site's OKLCH tokens
const BG = "#141820";      // oklch(0.13 0.01 240) — dark bg
const ACCENT = "#2BAA85";  // oklch(0.621 0.137 175.4) — primary teal
const FG = "#F0F4F8";      // near-white foreground
const MUTED = "#6B7280";   // muted text

// Decorative node positions for the PPI network motif (upper-right quadrant)
const NODES = [
  { x: 940,  y: 90,  r: 7,  hub: true },
  { x: 1030, y: 155, r: 5,  hub: false },
  { x: 1090, y: 75,  r: 4,  hub: false },
  { x: 1110, y: 210, r: 6,  hub: true },
  { x: 1055, y: 290, r: 5,  hub: false },
  { x: 950,  y: 235, r: 4,  hub: false },
  { x: 1140, y: 335, r: 4,  hub: false },
  { x: 870,  y: 165, r: 5,  hub: false },
] as const;

// Edges between node pairs — drawn as rotated divs
const EDGES: [number, number][] = [
  [0, 1], [1, 2], [1, 3], [3, 4], [4, 5], [0, 5], [3, 6], [7, 0], [7, 5],
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 100px",
          background: BG,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative edge lines */}
        {EDGES.map(([a, b], i) => {
          const na = NODES[a], nb = NODES[b];
          const dx = nb.x - na.x, dy = nb.y - na.y;
          const len = Math.sqrt(dx * dx + dy * dy);
          const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
          return (
            <div
              key={`e${i}`}
              style={{
                position: "absolute",
                left: na.x,
                top: na.y,
                width: len,
                height: 1,
                background: ACCENT,
                opacity: 0.18,
                transformOrigin: "0 50%",
                transform: `rotate(${angle}deg)`,
              }}
            />
          );
        })}

        {/* Decorative node dots */}
        {NODES.map(({ x, y, r, hub }, i) => (
          <div
            key={`n${i}`}
            style={{
              position: "absolute",
              left: x - r,
              top: y - r,
              width: r * 2,
              height: r * 2,
              borderRadius: "50%",
              background: ACCENT,
              opacity: hub ? 0.85 : 0.35,
            }}
          />
        ))}

        {/* Large faint circle — bottom-right corner accent */}
        <div
          style={{
            position: "absolute",
            bottom: -120,
            right: -120,
            width: 400,
            height: 400,
            borderRadius: "50%",
            border: `1.5px solid ${ACCENT}`,
            opacity: 0.07,
          }}
        />

        {/* Accent bar */}
        <div
          style={{
            width: 56,
            height: 4,
            background: ACCENT,
            borderRadius: 2,
            marginBottom: 36,
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 74,
            fontWeight: 700,
            color: FG,
            lineHeight: 1.05,
            marginBottom: 22,
            letterSpacing: "-1.5px",
          }}
        >
          Md Fahim Faysal
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 27,
            color: ACCENT,
            fontWeight: 500,
            lineHeight: 1.4,
            marginBottom: 44,
          }}
        >
          Bioinformatics Researcher · Full-Stack Developer · Competitive Programmer
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 18,
            color: MUTED,
          }}
        >
          <span>Rajshahi, Bangladesh</span>
          <span style={{ color: ACCENT, opacity: 0.5 }}>·</span>
          <span>faysalfahim.vercel.app</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
