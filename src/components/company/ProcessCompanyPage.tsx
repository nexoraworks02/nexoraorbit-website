import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Grid } from "@/components/ui/Grid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps, workStandards } from "@/data/company";
import { CompanyCtaLink } from "@/components/company/CompanyCtaLink";
import { CompanySystemVisual } from "@/components/company/CompanySystemVisual";

export function ProcessCompanyPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-[var(--gradient-cover-atmosphere)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div>
            <Badge tone="brand">Process</Badge>
            <h1 className="ds-display-md mt-5 max-w-5xl text-[var(--text-primary)]">
              A clear path from uncertainty to shipped digital systems.
            </h1>
            <p className="ds-body-lg mt-6 max-w-3xl text-[var(--text-secondary)]">
              Complex work becomes manageable when the process is disciplined. We clarify goals, define the system,
              design the experience, engineer the solution, launch with care, and improve from evidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CompanyCtaLink href="/contact">Book a Consultation</CompanyCtaLink>
              <CompanyCtaLink href="/company/about" variant="glass">
                About NEXORA ORBIT
              </CompanyCtaLink>
            </div>
          </div>
          <CompanySystemVisual />
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Process Timeline"
            title="Six steps that keep complex work legible."
            description="The sequence creates shared understanding before production and supports quality after launch."
          />
          <div className="relative grid gap-5 md:grid-cols-3 lg:grid-cols-6">
            <div className="nx-timeline-line absolute left-0 right-0 top-6 hidden h-px bg-[var(--border-default)] lg:block" />
            {processSteps.map((step, index) => (
              <Card key={step.title} variant="feature" className="relative grid min-h-56 content-start gap-5">
                <span className="grid size-11 place-items-center rounded-[var(--radius-full)] border border-[var(--border-brand)] bg-[var(--tone-brand-bg)] text-sm font-bold text-[var(--text-accent)]">
                  {index + 1}
                </span>
                <div>
                  <h2 className="ds-h6 text-[var(--text-primary)]">{step.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{step.body}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="How We Work"
            title="A practical operating model for strategy, design, and engineering."
            description="The process is designed to keep decisions visible, reduce ambiguity, and support long-term system ownership."
          />
          <Grid columns={3}>
            {workStandards.map((standard) => (
              <Card key={standard} variant="glass" className="grid min-h-40 content-between gap-5">
                <span className="size-2 rounded-[var(--radius-full)] bg-[var(--accent-cyan)] shadow-[var(--glow-cyan-data)]" />
                <h2 className="ds-h5 text-[var(--text-primary)]">{standard}</h2>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-3">
          <Card variant="glass" className="grid gap-5">
            <Badge tone="brand">Collaboration Standards</Badge>
            <h2 className="ds-h4 text-[var(--text-primary)]">Clear communication for remote and global teams.</h2>
            <p className="ds-body-sm text-[var(--text-secondary)]">
              Async updates, documented decisions, review cycles, and professional handoff keep stakeholders aligned without unnecessary noise.
            </p>
          </Card>
          <Card variant="glass" className="grid gap-5">
            <Badge tone="neutral">Quality / QA Standards</Badge>
            <h2 className="ds-h4 text-[var(--text-primary)]">Quality is measured before launch.</h2>
            <p className="ds-body-sm text-[var(--text-secondary)]">
              Accessibility, performance, maintainability, SEO foundations, responsive QA, and launch readiness are treated as delivery requirements.
            </p>
          </Card>
          <Card variant="glass" className="grid gap-5">
            <Badge tone="info">Handoff / Ownership</Badge>
            <h2 className="ds-h4 text-[var(--text-primary)]">Systems should be manageable after delivery.</h2>
            <p className="ds-body-sm text-[var(--text-secondary)]">
              Documentation, CMS structure, deployment notes, analytics access, and improvement paths are planned around long-term ownership.
            </p>
          </Card>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container>
          <GlassPanel className="p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <Badge tone="brand">Next Step</Badge>
                <h2 className="ds-h2 mt-5 max-w-3xl text-[var(--text-primary)]">Start with clarity before execution.</h2>
                <p className="ds-body-md mt-5 max-w-2xl text-[var(--text-secondary)]">
                  Tell us what you need to build, improve, or clarify. The first step is understanding the system.
                </p>
              </div>
              <CompanyCtaLink href="/contact">Book a Consultation</CompanyCtaLink>
            </div>
          </GlassPanel>
        </Container>
      </section>
    </>
  );
}
