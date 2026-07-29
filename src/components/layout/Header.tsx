import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

export function DesignSystemHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-default)] bg-[var(--surface-overlay)] backdrop-blur-[var(--blur-md)]">
      <Container className="flex min-h-16 flex-wrap items-center justify-between gap-3 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid size-10 place-items-center rounded-[var(--radius-md)] border border-[var(--border-brand)] bg-[var(--tone-brand-bg)] text-sm font-black text-[var(--text-accent)] shadow-[var(--glow-blue-soft)]">
            NX
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[var(--text-primary)]">NEXORA ORBIT</p>
            <p className="text-xs text-[var(--text-muted)]">Design System Foundation</p>
          </div>
        </div>
        <Badge tone="brand">Phase 9 / Code-first System</Badge>
      </Container>
    </header>
  );
}
