import { cn } from "@/lib/cn";

type WireframeBlockProps = {
  label: string;
  note?: string;
  tone?: "default" | "strong" | "visual" | "cta";
  className?: string;
};

const toneClasses = {
  default: "border-[var(--border-default)] bg-[var(--surface-panel)]",
  strong: "border-[var(--border-strong)] bg-[var(--surface-raised)]",
  visual: "border-[var(--border-brand)] bg-[var(--tone-brand-bg)]",
  cta: "border-[var(--border-brand)] bg-[var(--surface-glass)] shadow-[var(--glow-blue-soft)]",
};

export function WireframeBlock({ label, note, tone = "default", className }: WireframeBlockProps) {
  return (
    <div className={cn("min-h-16 rounded-[var(--radius-md)] border p-4", toneClasses[tone], className)}>
      <p className="text-sm font-semibold text-[var(--text-primary)]">{label}</p>
      {note ? <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{note}</p> : null}
    </div>
  );
}
