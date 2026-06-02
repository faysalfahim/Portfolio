import { SectionWrapper, SectionHeading } from "@/components/section-wrapper";
import { siteConfig } from "@/data";

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading>About Me</SectionHeading>
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-3 space-y-4">
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            I&apos;m a CSE graduate from{" "}
            <span className="text-foreground font-medium">
              Rajshahi University of Engineering & Technology (RUET)
            </span>{" "}
            and currently a{" "}
            <span className="text-foreground font-medium">
              Research Assistant
            </span>{" "}
            at the Bioinformatics (Dry) Lab, Department of Statistics, Rajshahi University.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            My research focuses on designing algorithms, R packages, and web platforms for{" "}
            <span className="text-primary font-medium">drug and vaccine discovery</span> through
            integrative analysis of molecular OMICS data — genomics, transcriptomics, proteomics,
            and metagenomics. I have published and co-authored 15+ papers in journals including
            PLOS ONE, Scientific Reports, and Briefings in Bioinformatics.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            Beyond research, I ship production software — most recently a CRM and course-management
            platform serving 1000+ daily users. I&apos;m also an active competitive programmer
            with an Expert rating on Codeforces (max 1686).
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {[
            { label: "Research Papers", value: "15+" },
            { label: "CF Rating (max)", value: "1686" },
            { label: "Problems Solved", value: "850+" },
            { label: "Years in Code", value: "5+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-5 flex flex-col gap-1"
            >
              <span className="text-2xl font-heading font-semibold text-primary">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
