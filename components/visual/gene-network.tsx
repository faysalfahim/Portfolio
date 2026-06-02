"use client";

import { useEffect, useRef } from "react";

// TODO: replace with actual hub genes from my papers
// (IPF/TB shared hub-genes, pAML druggable signatures, Parkinson's network pharmacology, etc.)
const DEFAULT_HUB_GENES = ["TP53", "IGF1R", "STAT3", "HSP90AA1", "TNF", "AKT1"];

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hub: boolean;
  label?: string;
}

interface GeneNetworkProps {
  className?: string;
  hubGenes?: string[];
  nodeCount?: number;
}

export default function GeneNetwork({
  className,
  hubGenes = DEFAULT_HUB_GENES,
  nodeCount = 46,
}: GeneNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvasRef.current;
const context = el?.getContext("2d");
if (!el || !context) return;
const canvas: HTMLCanvasElement = el;
const ctx: CanvasRenderingContext2D = context;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio ?? 1, 2);

    const nodes: Node[] = [];
    const mouse = { x: -9999, y: -9999 };
    // Mutable color cache updated on theme switch
    const colors = { accent: "", neutral: "" };
    let width = 0, height = 0, raf = 0;

    function readColors() {
      const s = getComputedStyle(document.documentElement);
      colors.accent = s.getPropertyValue("--primary").trim();
      colors.neutral = s.getPropertyValue("--muted-foreground").trim();
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function init() {
      nodes.length = 0;
      const hubCount = Math.min(hubGenes.length, Math.max(3, Math.floor(nodeCount / 7)));
      for (let i = 0; i < nodeCount; i++) {
        const hub = i < hubCount;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: hub ? 4.5 : 2,
          hub,
          label: hub ? hubGenes[i] : undefined,
        });
      }
    }

    function step() {
      ctx.clearRect(0, 0, width, height);
      const maxDist = Math.min(width, height) * 0.18;
      const { accent, neutral } = colors;

      // Edges — batch with shared strokeStyle, vary only globalAlpha
      ctx.strokeStyle = neutral;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < maxDist) {
            ctx.globalAlpha = (1 - d / maxDist) * 0.45;
            ctx.lineWidth = a.hub || b.hub ? 0.7 : 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          // Repel from cursor
          const dx = n.x - mouse.x, dy = n.y - mouse.y;
          const md = Math.hypot(dx, dy);
          if (md < 120 && md > 0) {
            const f = ((120 - md) / 120) * 0.6;
            n.x += (dx / md) * f;
            n.y += (dy / md) * f;
          }
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
          n.x = Math.max(0, Math.min(width, n.x));
          n.y = Math.max(0, Math.min(height, n.y));
        }

        ctx.globalAlpha = n.hub ? 1 : 0.55;
        ctx.fillStyle = n.hub ? accent : neutral;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();

        if (n.hub && n.label) {
          ctx.globalAlpha = 0.85;
          ctx.fillStyle = neutral;
          ctx.font = "500 11px ui-sans-serif, system-ui, sans-serif";
          ctx.fillText(n.label, n.x + 8, n.y + 3);
        }
      }

      ctx.globalAlpha = 1;

      if (!reduced) raf = requestAnimationFrame(step);
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    // Re-read accent/neutral when dark-mode class toggles
    const themeObserver = new MutationObserver(readColors);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const ro = new ResizeObserver(() => {
      resize();
      init();
      if (reduced) step();
    });

    readColors();
    resize();
    init();
    step();

    ro.observe(canvas);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [hubGenes, nodeCount]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
