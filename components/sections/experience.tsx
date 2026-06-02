import { SectionWrapper, SectionHeading } from "@/components/section-wrapper";
import { experience } from "@/data";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading>Experience</SectionHeading>
      <div className="space-y-6">
        {experience.map((job, i) => (
          <div
            key={i}
            className="relative rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
          >
            {/* Timeline dot */}
            <div className="absolute -left-px top-6 hidden md:block w-0.5 h-full bg-border" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {job.role}
                </h3>
                <p className="text-primary font-medium text-sm mt-0.5">
                  {job.organization}
                </p>
              </div>
              <div className="flex flex-col sm:items-end gap-1 text-xs text-muted-foreground shrink-0">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={12} />
                  {job.period}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin size={12} />
                  {job.location}
                </span>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {job.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-md bg-accent text-accent-foreground text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
