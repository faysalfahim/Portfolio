"use client";

import { Fragment, useRef } from "react";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";

interface Stage {
  title: string;
  // Each element is rendered as its own line — use two elements on stage 2
  // so statistical methods (DESeq2/LIMMA) and ML/DL methods appear as distinct groups.
  tools: string[];
}

const STAGES: Stage[] = [
  {
    title: "Omics Data",
    tools: ["Genomics · transcriptomics · proteomics · metagenomics"],
  },
  {
    title: "DEG & Feature Selection",
    tools: ["DESeq2 / LIMMA", "Random Forest · deep learning"],
  },
  {
    title: "PPI Network & Hub Genes",
    tools: ["Network analysis · hub-gene discovery"],
  },
  {
    title: "Functional Enrichment",
    tools: ["GO / KEGG · TF & miRNA regulatory networks"],
  },
  {
    title: "Molecular Docking & ADMET",
    tools: ["AutoDock Vina · SwissADME / pkCSM / ADMETlab"],
  },
  {
    title: "Drug Candidates",
    tools: ["Repurposing & lead prioritization"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function ResearchPipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();

  return (
    <section aria-label="Research pipeline" className="mb-10">
      <p className="text-[11px] font-medium tracking-widest text-muted-foreground uppercase mb-4">
        Computational Drug-Discovery Pipeline
      </p>
      <motion.div
        ref={ref}
        variants={reduced ? undefined : containerVariants}
        initial={reduced ? false : "hidden"}
        animate={inView || reduced ? "show" : "hidden"}
        className="flex flex-col lg:flex-row lg:items-stretch"
      >
        {STAGES.map((stage, i) => (
          <Fragment key={stage.title}>
            <motion.div
              variants={reduced ? undefined : cardVariants}
              className="flex-1 min-w-0 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors p-3 lg:p-3.5"
            >
              <div className="text-[10px] font-mono text-primary/60 mb-1.5 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-sm font-medium text-foreground leading-snug mb-1.5">
                {stage.title}
              </div>
              <div className="flex flex-col gap-0.5">
                {stage.tools.map((line, j) => (
                  <span
                    key={j}
                    className="text-[11px] text-muted-foreground leading-relaxed"
                  >
                    {line}
                  </span>
                ))}
              </div>
            </motion.div>

            {i < STAGES.length - 1 && (
              <div
                aria-hidden
                className="flex items-center justify-center shrink-0 py-1.5 lg:py-0 lg:px-1 self-center text-primary/30"
              >
                <ChevronDown className="lg:hidden w-3.5 h-3.5" />
                <ChevronRight className="hidden lg:block w-3.5 h-3.5" />
              </div>
            )}
          </Fragment>
        ))}
      </motion.div>
    </section>
  );
}
