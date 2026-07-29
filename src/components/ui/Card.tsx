import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type CardVariant = "standard" | "glass" | "feature" | "service";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
};

const variantClasses: Record<CardVariant, string> = {
  standard: "border-[var(--border-default)] bg-[var(--surface-raised)] shadow-[var(--shadow-2)]",
  glass:
    "ds-glass border-[var(--border-default)] bg-[var(--surface-glass)] shadow-[var(--shadow-dark-panel)]",
  feature: "border-[var(--border-subtle)] bg-[var(--surface-panel)]",
  service:
    "border-[var(--border-default)] bg-[var(--surface-raised)] hover:border-[var(--border-brand)] hover:shadow-[var(--glow-blue-soft)]",
};

export function Card({ variant = "standard", className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "ds-motion-safe rounded-[var(--radius-lg)] border p-5 text-[var(--text-primary)] transition duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-[3px] hover:shadow-[var(--glow-blue-soft)] active:scale-[0.99] sm:p-6",
        variantClasses[variant],
        className,
      )}
      data-motion-card=""
      {...props}
    />
  );
}
