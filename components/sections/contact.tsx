import { SectionWrapper } from "@/components/section-wrapper";
import { siteConfig } from "@/data";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground mb-3">
          Let&apos;s Connect
        </h2>
        <div className="mt-3 h-0.5 w-12 bg-primary rounded-full mx-auto mb-6" />
        <p className="text-muted-foreground text-lg mb-10">
          Open to research collaborations, PhD/MSc opportunities, and software engineering
          roles. My inbox is always open.
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-sm"
        >
          <Mail size={16} />
          {siteConfig.email}
        </a>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} />
            {siteConfig.location}
          </span>
        </div>

        <div className="mt-8 flex items-center justify-center gap-5">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <GithubIcon width={18} height={18} />
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <LinkedinIcon width={18} height={18} />
            LinkedIn
          </a>
          <a
            href={siteConfig.researchGate}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ResearchGate"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <span
              aria-hidden
              className="text-xs font-bold border border-current rounded px-1 py-0.5 leading-none"
            >
              RG
            </span>
            ResearchGate
          </a>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Md Fahim Faysal. Built with Next.js, Tailwind CSS &
          Framer Motion.
        </p>
      </footer>
    </SectionWrapper>
  );
}
