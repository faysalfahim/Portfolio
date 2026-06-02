// Decorative volcano plot strip — mimics DESeq2/LIMMA differential expression output.
// aria-hidden; purely visual section divider above Publications.

type PointKind = "ns" | "sig";

// [log2FoldChange, -log10(pValue), kind]
// Significant = |log2FC| > 1 AND -log10(p) > 1.3 (p < 0.05)
const POINTS: [number, number, PointKind][] = [
  // Non-significant cloud
  [-0.15, 0.2, "ns"], [0.08, 0.5, "ns"], [-0.4, 0.8, "ns"], [0.3, 0.3, "ns"],
  [0.6, 1.0, "ns"], [-0.7, 0.6, "ns"], [0.5, 0.4, "ns"], [-0.2, 1.2, "ns"],
  [0.9, 0.9, "ns"], [-0.9, 0.5, "ns"], [0.4, 1.1, "ns"], [-0.5, 0.7, "ns"],
  [0.2, 0.1, "ns"], [-0.3, 0.9, "ns"], [0.7, 0.7, "ns"], [-0.6, 1.0, "ns"],
  [1.1, 0.3, "ns"], [-1.1, 0.7, "ns"], [0.1, 0.2, "ns"], [-0.1, 0.6, "ns"],
  [1.2, 1.0, "ns"], [-1.2, 0.5, "ns"], [0.3, 0.8, "ns"], [-0.3, 0.3, "ns"],
  [1.3, 0.9, "ns"], [-1.3, 1.1, "ns"], [0.6, 0.3, "ns"], [-0.6, 0.2, "ns"],
  [0.0, 0.4, "ns"], [0.4, 0.7, "ns"], [-0.4, 0.1, "ns"], [0.8, 1.2, "ns"],
  [-0.8, 0.4, "ns"], [1.0, 1.1, "ns"], [-1.0, 0.8, "ns"], [0.2, 0.6, "ns"],
  // Just-above-threshold (greyed — |fc| < 1)
  [1.2, 1.5, "ns"], [-1.4, 1.6, "ns"], [1.5, 1.4, "ns"], [-0.9, 1.7, "ns"],
  // Significant upregulated
  [2.1, 2.8, "sig"], [1.8, 2.1, "sig"], [2.6, 4.2, "sig"], [3.2, 5.1, "sig"],
  [1.6, 1.9, "sig"], [2.9, 3.7, "sig"], [4.1, 4.8, "sig"], [1.4, 2.3, "sig"],
  // Significant downregulated
  [-2.3, 3.1, "sig"], [-1.9, 2.4, "sig"], [-3.0, 4.5, "sig"],
  [-1.7, 2.0, "sig"], [-2.7, 3.9, "sig"], [-4.2, 5.3, "sig"], [-1.5, 1.8, "sig"],
];

const W = 1000, H = 60;
// Map data coords → SVG coords
const xS = (fc: number) => (fc / 12) * W + W / 2;
const yS = (nlp: number) => H - (nlp / 6) * H;

const X_TH1 = xS(1);   // log2FC = +1
const X_TH2 = xS(-1);  // log2FC = -1
const Y_TH = yS(1.3);  // -log10(0.05)

export function VolcanoDivider() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      aria-hidden="true"
      className="w-full h-14 pointer-events-none select-none mb-4 opacity-70"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Fold-change threshold lines (x = ±1) */}
      <line x1={X_TH1} y1={0} x2={X_TH1} y2={H}
        stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 5" />
      <line x1={X_TH2} y1={0} x2={X_TH2} y2={H}
        stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 5" />
      {/* Significance threshold line (p = 0.05) */}
      <line x1={0} y1={Y_TH} x2={W} y2={Y_TH}
        stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 5" />

      {POINTS.map(([fc, nlp, kind], i) => (
        <circle
          key={i}
          cx={xS(fc)}
          cy={yS(nlp)}
          r={kind === "sig" ? 2.4 : 1.8}
          fill={kind === "sig" ? "var(--primary)" : "currentColor"}
          fillOpacity={kind === "sig" ? 0.75 : 0.15}
        />
      ))}
    </svg>
  );
}
