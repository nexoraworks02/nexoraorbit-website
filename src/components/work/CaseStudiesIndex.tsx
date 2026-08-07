import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Grid } from "@/components/ui/Grid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { proofPrinciples, workProjects } from "@/data/work";
import { AbstractWorkVisual } from "@/components/work/AbstractWorkVisual";
import { WorkCtaLink } from "@/components/work/WorkCtaLink";

const tones = ["platform", "ai", "growth"] as const;

export function CaseStudiesIndex() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-[var(--gradient-cover-atmosphere)]" />
        <Container className="relative">
          <Badge tone="brand">Case Studies</Badge>
          <h1 className="ds-display-md mt-5 max-w-5xl text-[var(--text-primary)]">
            Illustrative examples built around context, decisions, execution, and proof.
          </h1>
          <p className="ds-body-lg mt-6 max-w-3xl text-[var(--text-secondary)]">
            This index shows how the case study system presents approved work. It does not claim client outcomes, publish
            private details, or use fabricated social proof.
          </p>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Preview List"
            title="Reusable structures for future approved case studies."
            description="Each structure shows how project context, challenge, strategy, solution, execution, outcomes, and lessons will be presented."
          />
          <div className="grid gap-6">
            {workProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="ds-focus-ring rounded-[var(--radius-lg)]"
                aria-label={`View ${project.title} case study structure`}
              >
                <Card variant="service" className="grid gap-6 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
                  <AbstractWorkVisual tone={tones[index % tones.length]} className="min-h-52" />
                  <div className="grid gap-5">
                    <div>
                      <Badge tone="neutral">{project.status}</Badge>
                      <h2 className="ds-h4 mt-5 text-[var(--text-primary)]">{project.title}</h2>
                      <p className="ds-body-md mt-4 text-[var(--text-secondary)]">{project.problem}</p>
                    </div>
                    <p className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--surface-panel)] px-4 py-3 text-sm text-[var(--text-muted)]">
                      This is an illustrative example, not a completed client engagement. It will be replaced with approved project details, client permission, and verified outcomes once available.
                    </p>
                    <span className="text-sm font-semibold text-[var(--text-accent)]">{project.cta}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Proof Standards"
            title="Case studies become public only when proof is approved."
            description="The publication model protects trust by separating structure previews from verified client material."
          />
          <Grid columns={4}>
            {proofPrinciples.map((principle) => (
              <Card key={principle.title} variant="glass" className="grid gap-4">
                <h2 className="ds-h6 text-[var(--text-primary)]">{principle.title}</h2>
                <p className="ds-body-sm text-[var(--text-secondary)]">{principle.body}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container>
          <GlassPanel className="p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <Badge tone="brand">Next Step</Badge>
                <h2 className="ds-h2 mt-5 max-w-3xl text-[var(--text-primary)]">
                  Build the work before publishing the proof.
                </h2>
                <p className="ds-body-md mt-5 max-w-2xl text-[var(--text-secondary)]">
                  Tell us what you are building. We will shape the system first and publish outcomes only when they are real and approved.
                </p>
              </div>
              <WorkCtaLink href="/contact">Book a Consultation</WorkCtaLink>
            </div>
          </GlassPanel>
        </Container>
      </section>
    </>
  );
}
