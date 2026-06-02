import { SectionWrapper, SectionHeading } from "@/components/section-wrapper";
import { skillGroups } from "@/data";

export function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-muted/30">
      <SectionHeading>Skills</SectionHeading>
      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="font-medium text-foreground mb-3 text-sm tracking-wide uppercase">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-card border border-border text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
