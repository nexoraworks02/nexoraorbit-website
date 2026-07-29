import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function GridPreview() {
  return (
    <section id="grid" className="grid gap-8">
      <SectionHeader
        eyebrow="Layout"
        title="Responsive containers and grid primitives"
        description="The grid expresses the system: 4 columns on mobile, 8 on tablet, 12 on desktop."
      />
      <div className="grid gap-5">
        {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
          <Container key={size} size={size} className="px-0">
            <Card variant="feature" className="py-4">
              <p className="ds-mono-sm text-[var(--text-muted)]">Container {size}</p>
            </Card>
          </Container>
        ))}
      </div>
      <Grid columns={12} className="gap-2">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="min-h-16 rounded-[var(--radius-sm)] border border-[var(--border-brand)] bg-[var(--tone-brand-bg)]"
          />
        ))}
      </Grid>
    </section>
  );
}
