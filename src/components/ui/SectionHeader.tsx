import { cn } from "@/lib/cn";

export type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, align = "left", className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "", className)}>
      {eyebrow ? <p className="ds-eyebrow mb-3 text-[var(--text-accent)]">{eyebrow}</p> : null}
      <h2 className="ds-h2 text-[var(--text-primary)]">{title}</h2>
      {description ? <p className="ds-body-md mt-4 text-[var(--text-secondary)]">{description}</p> : null}
    </div>
  );
}
