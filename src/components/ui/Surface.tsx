import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SurfaceVariant = "base" | "raised" | "panel";

export type SurfaceProps = HTMLAttributes<HTMLDivElement> & {
  variant?: SurfaceVariant;
};

const variantClasses: Record<SurfaceVariant, string> = {
  base: "bg-[var(--surface-base)]",
  raised: "bg-[var(--surface-raised)]",
  panel: "bg-[var(--surface-panel)]",
};

export function Surface({ variant = "raised", className, ...props }: SurfaceProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-[var(--border-default)] text-[var(--text-primary)]",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
