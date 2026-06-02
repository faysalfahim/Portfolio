import { SectionWrapper, SectionHeading } from "@/components/section-wrapper";
import { Trophy, Code2, Target } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    platform: "Codeforces",
    primary: "Expert",
    secondary: "Max Rating: 1686",
    detail: "650+ problems solved",
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/30",
  },
  {
    icon: Target,
    platform: "CodeChef",
    primary: "Max Rating: 1744",
    secondary: "3★ Division",
    detail: "Active contestant",
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/30",
  },
  {
    icon: Code2,
    platform: "Other Platforms",
    primary: "200+",
    secondary: "Problems solved",
    detail: "AtCoder · HackerEarth · LightOJ · LeetCode",
    color: "text-primary",
    bg: "bg-accent",
  },
];

export function CompetitiveProgramming() {
  return (
    <SectionWrapper id="cp">
      <SectionHeading>Competitive Programming</SectionHeading>
      <p className="text-muted-foreground mb-8 max-w-2xl">
        Regular participation in algorithmic contests since 2019. Problem-solving
        across data structures, graph theory, dynamic programming, number theory, and geometry.
      </p>
      <div className="grid sm:grid-cols-3 gap-5">
        {stats.map((s) => (
          <div
            key={s.platform}
            className={`rounded-xl border border-border p-6 ${s.bg} transition-colors hover:border-primary/40`}
          >
            <div className="flex items-center gap-3 mb-4">
              <s.icon size={22} className={s.color} />
              <span className="font-medium text-foreground text-sm">{s.platform}</span>
            </div>
            <p className="font-heading text-2xl font-semibold text-foreground mb-0.5">
              {s.primary}
            </p>
            <p className="text-sm text-muted-foreground">{s.secondary}</p>
            <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-border/60">
              {s.detail}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
