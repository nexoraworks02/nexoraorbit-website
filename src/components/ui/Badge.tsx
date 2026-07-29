import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type BadgeTone = "neutral" | "brand" | "success" | "warning" | "error" | "info";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: BadgeTone;
};

const toneClasses: Record<BadgeTone, string> = {
  neutral: "border-[var(--border-default)] bg-[var(--surface-panel)] text-[var(--text-secondary)]",
  brand: "border-[var(--border-brand)] bg-[var(--tone-brand-bg)] text-[var(--text-accent)]",
  success: "border-[var(--tone-success-border)] bg-[var(--tone-success-bg)] text-[var(--status-success)]",
  warning: "border-[var(--tone-warning-border)] bg-[var(--tone-warning-bg)] text-[var(--status-warning)]",
  error: "border-[var(--tone-error-border)] bg-[var(--tone-error-bg)] text-[var(--status-error)]",
  info: "border-[var(--tone-info-border)] bg-[var(--tone-info-bg)] text-[var(--status-info)]",
};

export function Badge({ tone = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center rounded-[var(--radius-full)] border px-3 py-1 text-xs font-semibold leading-5",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
