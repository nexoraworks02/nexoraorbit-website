import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ContainerSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: ContainerSize;
};

const sizeClasses: Record<ContainerSize, string> = {
  xs: "max-w-[var(--container-xs)]",
  sm: "max-w-[var(--container-sm)]",
  md: "max-w-[var(--container-md)]",
  lg: "max-w-[var(--container-lg)]",
  xl: "max-w-[var(--container-xl)]",
  "2xl": "max-w-[var(--container-2xl)]",
};

export function Container({ size = "xl", className, ...props }: ContainerProps) {
  return <div className={cn("mx-auto w-full px-[var(--space-5)] sm:px-[var(--space-7)]", sizeClasses[size], className)} {...props} />;
}
