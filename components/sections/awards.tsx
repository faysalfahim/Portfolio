import { SectionWrapper, SectionHeading } from "@/components/section-wrapper";
import { awards } from "@/data";
import { Award } from "lucide-react";

export function Awards() {
  return (
    <SectionWrapper id="awards" className="bg-muted/30">
      <SectionHeading>Awards & Leadership</SectionHeading>
      <div className="grid sm:grid-cols-2 gap-5">
        {awards.map((award, i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Award size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {award.title}
                </h3>
                <p className="text-sm text-primary mt-0.5">{award.organization}</p>
                {award.period && (
                  <p className="text-xs text-muted-foreground mt-0.5">{award.period}</p>
                )}
                {award.description && (
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {award.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
