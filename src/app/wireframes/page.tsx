import { AboutWireframe } from "@/components/wireframes/AboutWireframe";
import { CaseStudyWireframe } from "@/components/wireframes/CaseStudyWireframe";
import { ContactWireframe } from "@/components/wireframes/ContactWireframe";
import { HomepageWireframe } from "@/components/wireframes/HomepageWireframe";
import { InsightsWireframe } from "@/components/wireframes/InsightsWireframe";
import { ServiceDetailWireframe } from "@/components/wireframes/ServiceDetailWireframe";
import { ServicesWireframe } from "@/components/wireframes/ServicesWireframe";
import { WireframeBlock } from "@/components/wireframes/WireframeBlock";
import { WireframeShell } from "@/components/wireframes/WireframeShell";
import { WorkWireframe } from "@/components/wireframes/WorkWireframe";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Grid } from "@/components/ui/Grid";
import { wireframePages } from "@/components/wireframes/wireframeData";

const principles = [
  "Clarity before cleverness",
  "Trust before persuasion",
  "Outcomes before services",
  "Proof before claims",
  "Consultation before hard selling",
  "Premium restraint over visual noise",
  "Progressive disclosure for technical depth",
];

export default function WireframesPage() {
  return (
    <WireframeShell pages={wireframePages}>
      <section className="grid gap-8">
        <Card variant="standard" className="grid gap-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Badge tone="brand">Phase 10A - Wireframe Architecture</Badge>
              <h1 className="ds-display-md mt-6 text-[var(--text-primary)]">NEXORA ORBIT Website Wireframes</h1>
              <p className="ds-body-lg mt-6 max-w-3xl text-[var(--text-secondary)]">
                Low-to-mid fidelity structure for the core website pages. This route documents hierarchy, flow, CTA
                placement, and future UI notes without final visuals, animation, or 3D.
              </p>
            </div>
            <WireframeBlock
              label="Phase boundary"
              note="This is architectural UX only. High-fidelity homepage UI, final production sections, polished visual treatments, and 3D assets are intentionally deferred."
              tone="visual"
              className="min-h-52"
            />
          </div>
          <Grid columns={4}>
            {principles.map((principle) => (
              <WireframeBlock key={principle} label={principle} />
            ))}
          </Grid>
        </Card>
      </section>

      <HomepageWireframe />
      <ServicesWireframe />
      <ServiceDetailWireframe />
      <WorkWireframe />
      <CaseStudyWireframe />
      <AboutWireframe />
      <ContactWireframe />
      <InsightsWireframe />
    </WireframeShell>
  );
}
