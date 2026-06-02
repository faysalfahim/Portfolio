import { SectionWrapper, SectionHeading } from "@/components/section-wrapper";
import { education } from "@/data";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading>Education</SectionHeading>
      <div className="space-y-5">
        {education.map((edu, i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
              <div className="flex items-start gap-3">
                <GraduationCap size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium text-sm mt-0.5">
                    {edu.institution}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:items-end gap-1 text-xs text-muted-foreground shrink-0 pl-8 sm:pl-0">
                <span className="inline-flex items-center gap-1">
                  <Calendar size={12} />
                  {edu.period}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin size={12} />
                  {edu.location}
                </span>
              </div>
            </div>
            <div className="pl-8 mt-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-accent text-accent-foreground text-xs font-medium">
                {edu.result}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
