import { cn } from "@/lib/cn";
import type { WireframePageData } from "@/components/wireframes/wireframeData";

type WireframePageNavProps = {
  pages: WireframePageData[];
};

export function WireframePageNav({ pages }: WireframePageNavProps) {
  return (
    <nav aria-label="Wireframe pages" className="sticky top-[var(--ds-header-height)] z-30 border-b border-[var(--border-default)] bg-[var(--surface-overlay)] backdrop-blur-[var(--blur-md)]">
      <div className="mx-auto grid w-full max-w-[var(--container-xl)] gap-2 px-[var(--space-5)] py-3 sm:px-[var(--space-7)]">
        <p className="ds-meta text-[var(--text-muted)]">Wireframe pages</p>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {pages.map((page) => (
            <a
              key={page.id}
              href={`#${page.id}`}
              aria-label={`Jump to ${page.title}`}
              className={cn(
                "ds-focus-ring min-h-11 shrink-0 whitespace-nowrap rounded-[var(--radius-full)] border border-[var(--border-default)] px-3 py-2 text-xs font-semibold text-[var(--text-secondary)] sm:px-4 sm:text-sm",
                "transition duration-[var(--duration-fast)] hover:border-[var(--border-brand)] hover:bg-[var(--surface-panel)] hover:text-[var(--text-primary)]",
              )}
            >
              {page.eyebrow}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
