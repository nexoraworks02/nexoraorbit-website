import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ChipTone = "neutral" | "brand" | "success" | "warning" | "error" | "info";

export type ChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: ChipTone;
  selected?: boolean;
};

const toneClasses: Record<ChipTone, string> = {
  neutral: "border-[var(--border-default)] text-[var(--text-secondary)]",
  brand: "border-[var(--border-brand)] text-[var(--text-accent)]",
  success: "border-[var(--tone-success-border)] text-[var(--status-success)]",
  warning: "border-[var(--tone-warning-border)] text-[var(--status-warning)]",
  error: "border-[var(--tone-error-border)] text-[var(--status-error)]",
  info: "border-[var(--tone-info-border)] text-[var(--status-info)]",
};

export function Chip({ tone = "neutral", selected = false, className, type = "button", ...props }: ChipProps) {
  return (
    <button
      type={type}
      aria-pressed={selected}
      className={cn(
        "ds-focus-ring ds-motion-safe inline-flex min-h-11 max-w-full items-center rounded-[var(--radius-full)] border bg-transparent px-4 py-2 text-left text-sm font-semibold transition duration-[var(--duration-fast)] hover:bg-[var(--surface-panel)] disabled:pointer-events-none disabled:opacity-60",
        toneClasses[tone],
        selected ? "bg-[var(--surface-panel)] shadow-[var(--glow-blue-soft)]" : "",
        className,
      )}
      {...props}
    />
  );
}
