import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Grid } from "@/components/ui/Grid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { WorkProject } from "@/data/work";
import { measurementExamples, workProjects } from "@/data/work";
import { AbstractWorkVisual } from "@/components/work/AbstractWorkVisual";
import { WorkCtaLink } from "@/components/work/WorkCtaLink";

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card variant="feature" className="grid gap-5">
      <h2 className="ds-h5 text-[var(--text-primary)]">{title}</h2>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-[var(--text-secondary)]">
            <span className="mt-2 size-1.5 shrink-0 rounded-[var(--radius-full)] bg-[var(--accent-cyan)] shadow-[var(--glow-cyan-data)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function CaseStudyDetailPage({ project }: { project: WorkProject }) {
  const relatedProjects = workProjects.filter((item) => item.slug !== project.slug);

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[var(--gradient-cover-atmosphere)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <Badge tone="brand">{project.category}</Badge>
            <h1 className="ds-display-md mt-5 max-w-5xl text-[var(--text-primary)]">{project.headline}</h1>
            <p className="ds-body-lg mt-6 max-w-3xl text-[var(--text-secondary)]">{project.context}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WorkCtaLink href="/contact">Discuss a Similar System</WorkCtaLink>
              <WorkCtaLink href="/work/case-studies" variant="glass">
                View All Structures
              </WorkCtaLink>
            </div>
          </div>
          <AbstractWorkVisual tone={project.slug.includes("ai") ? "ai" : project.slug.includes("brand") ? "growth" : "platform"} />
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container>
          <GlassPanel className="grid gap-5 p-8 md:p-10">
            <Badge tone="warning">Illustrative Example</Badge>
            <h2 className="ds-h3 text-[var(--text-primary)]">This is an illustrative example, not a completed client engagement.</h2>
            <p className="ds-body-md max-w-3xl text-[var(--text-secondary)]">
              It shows how NEXORA ORBIT approaches this kind of project. It will be replaced with a real, approved case study — with client permission, real visuals, and verified outcomes — once one is available.
            </p>
          </GlassPanel>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Challenge"
            title="The structure starts with the real problem behind the work."
            description={project.challenge}
          />
          <Grid columns={2}>
            <ListCard title="Objectives" items={project.objectives} />
            <ListCard title="Strategy" items={project.strategy} />
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Solution / Execution"
            title="The case study model connects decisions to delivery."
            description="Future case studies should show the logic of the system, not only the final visual layer."
          />
          <Grid columns={2}>
            <ListCard title="Solution" items={project.solution} />
            <ListCard title="Execution" items={project.execution} />
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Results Placeholder"
            title="Results will appear only when verified."
            description="Future published work can include approved outcomes, analytics, operational improvements, search movement, or conversion indicators. This preview does not invent metrics."
          />
          <Card variant="glass" className="grid gap-5">
            <h2 className="ds-h5 text-[var(--text-primary)]">Measurement areas</h2>
            <div className="flex flex-wrap gap-3" aria-label="Potential measurement areas">
              {measurementExamples.map((item) => (
                <Chip key={item} disabled>
                  {item}
                </Chip>
              ))}
            </div>
          </Card>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Technology / Services Used"
            title="The service mix should be explicit and easy to audit."
            description="Published case studies should connect each capability to a visible decision, deliverable, or system outcome."
          />
          <div className="flex flex-wrap gap-3" aria-label="Services used">
            {project.services.map((service) => (
              <Chip key={service} tone="brand">
                {service}
              </Chip>
            ))}
          </div>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Lessons"
            title="What made the system work."
            description="Lessons should explain principles and decisions that future clients can understand before a consultation."
          />
          <ListCard title="What Made It Work" items={project.lessons} />
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Related Work"
            title="Explore adjacent illustrative examples."
            description="These are illustrative examples until real, approved project material is available to replace them."
          />
          <Grid columns={2}>
            {relatedProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="ds-focus-ring rounded-[var(--radius-lg)]"
                aria-label={`View ${item.title} illustrative example`}
              >
                <Card variant="service" className="grid min-h-56 content-between gap-6">
                  <div>
                    <Badge tone="neutral">{item.status}</Badge>
                    <h2 className="ds-h5 mt-5 text-[var(--text-primary)]">{item.title}</h2>
                    <p className="ds-body-sm mt-4 text-[var(--text-secondary)]">{item.problem}</p>
                    <p className="mt-5 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--surface-panel)] px-4 py-3 text-sm text-[var(--text-muted)]">
                      This is an illustrative example, not a completed client engagement. It will be replaced with approved project details, client permission, and verified outcomes once available.
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-[var(--text-accent)]">View example</span>
                </Card>
              </Link>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container>
          <GlassPanel className="relative overflow-hidden p-8 md:p-12">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-[var(--radius-full)] bg-[radial-gradient(circle,rgba(37,99,255,0.18),transparent_64%)] blur-[var(--blur-xl)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <Badge tone="brand">Next Step</Badge>
                <h2 className="ds-h2 mt-5 max-w-3xl text-[var(--text-primary)]">Have a system that needs this level of clarity?</h2>
                <p className="ds-body-md mt-5 max-w-2xl text-[var(--text-secondary)]">
                  Start with the problem, constraints, and business context. The proof can follow when the work is real and approved.
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
