import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { WireframePageNav } from "@/components/wireframes/WireframePageNav";
import type { WireframePageData } from "@/components/wireframes/wireframeData";

type WireframeShellProps = {
  pages: WireframePageData[];
  children: React.ReactNode;
};

export function WireframeShell({ pages, children }: WireframeShellProps) {
  return (
    <div data-theme="dark" className="min-h-screen bg-[var(--surface-base)] font-[var(--font-sans-ds)] text-[var(--text-primary)]">
      <header className="sticky top-0 z-40 border-b border-[var(--border-default)] bg-[var(--surface-overlay)] backdrop-blur-[var(--blur-md)]">
        <Container className="flex min-h-16 flex-wrap items-center justify-between gap-3 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid size-10 place-items-center rounded-[var(--radius-md)] border border-[var(--border-brand)] bg-[var(--tone-brand-bg)] text-sm font-black text-[var(--text-accent)]">
              NX
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[var(--text-primary)]">NEXORA ORBIT</p>
              <p className="text-xs text-[var(--text-muted)]">Wireframe Architecture</p>
            </div>
          </div>
          <Badge tone="brand">Phase 10A / UX Structure</Badge>
        </Container>
      </header>
      <WireframePageNav pages={pages} />
      <main className="bg-[var(--app-background)]">
        <Container className="grid gap-16 py-16 md:gap-20 md:py-20">{children}</Container>
      </main>
    </div>
  );
}
