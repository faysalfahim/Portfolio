"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Mail, Download, BookOpen } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/data";
import GeneNetwork from "@/components/visual/gene-network";

const easeOut = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden min-h-screen flex flex-col justify-center pt-20 pb-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          maskImage: "radial-gradient(ellipse at center, black, transparent 82%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 82%)",
        }}
      >
        <GeneNetwork />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.621_0.137_175.4/0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.75_0.127_175.4/0.1),transparent)]"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-3xl lg:flex-1"
          >
            <motion.p
              variants={item}
              className="text-sm font-medium tracking-widest text-primary uppercase mb-4"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={item}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-semibold text-foreground leading-tight"
            >
              Md Fahim Faysal
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 text-lg sm:text-xl text-primary font-medium"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              {siteConfig.shortBio}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
              <a href="#research" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                <BookOpen size={16} />
                View Research
              </a>
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground font-medium text-sm hover:bg-accent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                <Mail size={16} />
                Email Me
              </a>
              <a href={siteConfig.resumeUrl} download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground font-medium text-sm hover:bg-accent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                <Download size={16} />
                Résumé
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-4">
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-muted-foreground hover:text-foreground transition-colors">
                <GithubIcon width={22} height={22} />
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-muted-foreground hover:text-foreground transition-colors">
                <LinkedinIcon width={22} height={22} />
              </a>
              <a href={siteConfig.researchGate} target="_blank" rel="noopener noreferrer" aria-label="ResearchGate profile" className="text-muted-foreground hover:text-foreground transition-colors text-xs font-bold border border-current rounded px-1.5 py-0.5 leading-none">
                RG
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
            className="relative shrink-0 order-first lg:order-last"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-1 ring-border shadow-lg">
              <Image
                src="/profile.jpg"
                alt="Md Fahim Faysal"
                fill
                priority
                sizes="(max-width: 1024px) 288px, 320px"
                className="object-cover"
              />
            </div>
            <div aria-hidden className="absolute -inset-3 rounded-full border border-primary/20 -z-10" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}