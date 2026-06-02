import { SectionWrapper, SectionHeading } from "@/components/section-wrapper";
import { projects, siteConfig } from "@/data";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const langColor: Record<string, string> = {
  TypeScript: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  JavaScript: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  "C++": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
};

export function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-muted/30">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors flex flex-col"
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <h3 className="font-heading text-base font-semibold text-foreground leading-snug">
                {project.name}
              </h3>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="shrink-0 text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`px-2 py-0.5 rounded text-xs font-medium ${
                  langColor[project.language] ||
                  "bg-muted text-muted-foreground"
                }`}
              >
                {project.language}
              </span>
              {project.tags.slice(1).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-accent text-accent-foreground text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground font-medium text-sm hover:bg-accent hover:border-primary/40 transition-colors"
        >
          <GithubIcon width={16} height={16} />
          View all on GitHub
        </a>
      </div>
    </SectionWrapper>
  );
}
