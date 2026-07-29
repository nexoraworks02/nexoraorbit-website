import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function InsightCtaLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "glass";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "ds-focus-ring inline-flex min-h-12 max-w-full items-center justify-center rounded-[var(--radius-md)] border px-6 py-4 text-center text-base font-semibold transition duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:-translate-y-px active:translate-y-0 active:scale-[0.99]",
        variant === "primary"
          ? "border-transparent bg-[var(--gradient-primary)] text-[var(--white)] shadow-[var(--glow-blue-soft)] hover:shadow-[var(--glow-blue-strong)]"
          : "border-[var(--border-default)] bg-[var(--surface-glass)] text-[var(--text-primary)] shadow-[var(--shadow-dark-panel)] backdrop-blur-[var(--blur-md)] hover:border-[var(--border-brand)]",
        className,
      )}
    >
      <span className="min-w-0 break-words">{children}</span>
    </Link>
  );
}
