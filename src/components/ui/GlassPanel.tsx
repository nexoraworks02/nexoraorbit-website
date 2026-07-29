import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type GlassPanelProps = HTMLAttributes<HTMLDivElement>;

export function GlassPanel({ className, ...props }: GlassPanelProps) {
  return <div className={cn("ds-glass rounded-[var(--radius-xl)] p-6 text-[var(--text-primary)]", className)} {...props} />;
}
