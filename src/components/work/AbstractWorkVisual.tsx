import { cn } from "@/lib/cn";

type AbstractWorkVisualProps = {
  tone?: "platform" | "ai" | "growth";
  className?: string;
};

const toneClasses = {
  platform: "from-[rgba(37,99,255,0.22)] via-[rgba(92,124,250,0.08)] to-transparent",
  ai: "from-[rgba(6,182,212,0.2)] via-[rgba(124,58,237,0.08)] to-transparent",
  growth: "from-[rgba(124,58,237,0.18)] via-[rgba(37,99,255,0.08)] to-transparent",
};

export function AbstractWorkVisual({ tone = "platform", className }: AbstractWorkVisualProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative min-h-56 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-panel)]",
        className,
      )}
    >
      <div className={cn("absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,var(--tw-gradient-stops))]", toneClasses[tone])} />
      <div className="absolute inset-x-6 top-6 grid gap-3">
        <div className="h-3 w-24 rounded-[var(--radius-full)] bg-[var(--surface-muted)]" />
        <div className="grid grid-cols-3 gap-3">
          <span className="h-16 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--surface-glass)]" />
          <span className="h-16 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--surface-glass)]" />
          <span className="h-16 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--surface-glass)]" />
        </div>
      </div>
      <div className="absolute bottom-6 left-6 right-6 grid gap-2">
        {[0, 1, 2, 3].map((item) => (
          <span key={item} className="h-px bg-[linear-gradient(90deg,transparent,var(--border-default),transparent)]" />
        ))}
      </div>
      <div className="absolute bottom-8 right-8 grid size-20 place-items-center rounded-[var(--radius-full)] border border-[var(--border-brand)] bg-[var(--tone-brand-bg)]">
        <span className="size-2 rounded-[var(--radius-full)] bg-[var(--accent-cyan)] shadow-[var(--glow-cyan-data)]" />
      </div>
    </div>
  );
}
