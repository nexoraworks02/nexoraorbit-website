import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Grid } from "@/components/ui/Grid";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function EffectsPreview() {
  return (
    <section id="effects" className="grid gap-8">
      <SectionHeader
        eyebrow="Effects"
        title="Glass, shadow, glow, and focus states"
        description="Effects should imply depth and quality while preserving readability and performance."
      />
      <Grid columns={3}>
        <GlassPanel>
          <p className="relative ds-h4">Glass panel</p>
          <p className="relative ds-body-sm mt-3 text-[var(--text-secondary)]">
            Uses blur, subtle border, controlled reflection, and dark-panel elevation.
          </p>
        </GlassPanel>
        <Card variant="standard" className="shadow-[var(--shadow-3)]">
          <p className="ds-h4">Elevation</p>
          <p className="ds-body-sm mt-3 text-[var(--text-secondary)]">Depth is quiet and structural.</p>
        </Card>
        <Card variant="feature" className="shadow-[var(--glow-purple-soft)]">
          <p className="ds-h4">Glow</p>
          <p className="ds-body-sm mt-3 text-[var(--text-secondary)]">Glow is environmental, never decorative noise.</p>
        </Card>
      </Grid>
      <Card variant="feature">
        <p className="ds-h4 mb-4">Focus ring preview</p>
        <Button variant="secondary">Tab to focus me</Button>
      </Card>
    </section>
  );
}
