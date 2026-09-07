import { SectionWrapper, SectionHeading } from "@/components/section-wrapper";
import { publications, type PublicationStatus } from "@/data";
import { ExternalLink } from "lucide-react";
import { VolcanoDivider } from "@/components/visual/volcano-divider";
import { ResearchPipeline } from "@/components/visual/research-pipeline";

const statusConfig: Record<
  PublicationStatus,
  { label: string; className: string }
> = {
  published: {
    label: "Published",
    className:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  conference: {
    label: "Conference",
    className:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  },
  "under-review": {
    label: "Under Review",
    className:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  },
  submitted: {
    label: "Submitted",
    className:
      "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  },
  preprint: {
  label: "Preprint",
  className: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
},
};

const groups: { status: PublicationStatus; heading: string }[] = [
  { status: "published", heading: "Journal Articles" },
  { status: "conference", heading: "Conference Papers" },
  { status: "under-review", heading: "Under Review" },
  { status: "submitted", heading: "Submitted" },
  { status: "preprint", heading: "Preprint" },
];

function highlightAuthor(text: string) {
  return text.replace(
    /Faysal,\s*M\.?\s*F\.?(?:\s*F\.)?/g,
    '<strong class="text-primary">$&</strong>'
  );
}

export function Research() {
  return (
    <SectionWrapper id="research" className="bg-muted/30">
      <VolcanoDivider />
      <SectionHeading>Research & Publications</SectionHeading>

      <ResearchPipeline />

      {/* Stat strip */}
      <div className="mb-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground border border-border rounded-xl px-5 py-4 bg-card">
        <span>
          <strong className="text-foreground">15+</strong> research papers
          (published, under review & submitted)
        </span>
        <span className="hidden sm:block text-border">·</span>
        <span>
          <strong className="text-foreground">2</strong> conference papers
        </span>
        <span className="hidden sm:block text-border">·</span>
        <span>
          Journals incl.{" "}
          <strong className="text-foreground">
            PLOS ONE, Scientific Reports, Briefings in Bioinformatics
          </strong>
        </span>
      </div>

      <div className="space-y-12">
        {groups.map(({ status, heading }) => {
          const pubs = publications.filter((p) => p.status === status);
          if (pubs.length === 0) return null;
          return (
            <div key={status}>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                {heading}
              </h3>
              <ol className="space-y-4">
                {pubs.map((pub, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${statusConfig[pub.status].className}`}
                          >
                            {statusConfig[pub.status].label}
                          </span>
                        </div>
                        <p className="font-medium text-foreground leading-snug mb-1.5">
                          {pub.title}
                        </p>
                        <p
                          className="text-sm text-muted-foreground mb-1"
                          dangerouslySetInnerHTML={{
                            __html: highlightAuthor(pub.authors),
                          }}
                        />
                        <p className="text-sm text-muted-foreground italic">
                          {pub.venue}, {pub.year}
                        </p>
                        {pub.doi && (
                          <p className="text-xs text-muted-foreground mt-1">
                            DOI: {pub.doi}
                          </p>
                        )}
                      </div>
                      {pub.link && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View publication"
                          className="shrink-0 p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
