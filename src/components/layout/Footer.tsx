import { Container } from "@/components/ui/Container";

export function DesignSystemFooter() {
  return (
    <footer className="border-t border-[var(--border-default)] bg-[var(--surface-base)]">
      <Container className="py-10">
        <p className="text-sm text-[var(--text-muted)]">
          NEXORA OS is the reusable foundation for intelligent digital systems. This preview is documentation,
          not a final marketing page.
        </p>
      </Container>
    </footer>
  );
}
