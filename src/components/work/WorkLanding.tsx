import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Grid } from "@/components/ui/Grid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { proofPrinciples, workFilters, workProjects } from "@/data/work";
import { AbstractWorkVisual } from "@/components/work/AbstractWorkVisual";
import { WorkCtaLink } from "@/components/work/WorkCtaLink";

const tones = ["platform", "ai", "growth"] as const;

export function WorkLanding() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-[var(--gradient-cover-atmosphere)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <Badge tone="brand">Work</Badge>
            <h1 className="ds-display-md mt-5 max-w-5xl text-[var(--text-primary)]">
              Structured previews for intelligent digital systems.
            </h1>
            <p className="ds-body-lg mt-6 max-w-3xl text-[var(--text-secondary)]">
              NEXORA ORBIT presents work through context, decisions, execution, and verified outcomes. Until approved
              projects are ready for publication, this section uses transparent case study structures only.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WorkCtaLink href="/work/case-studies">Explore Case Study Structures</WorkCtaLink>
              <WorkCtaLink href="/contact" variant="glass">
                Book a Consultation
              </WorkCtaLink>
            </div>
          </div>
          <GlassPanel className="grid gap-5 p-6">
            <p className="ds-meta text-[var(--text-muted)]">Proof model</p>
            {["Context", "Decisions", "Execution", "Verified outcomes"].map((item) => (
              <div key={item} className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-panel)] p-4">
                <p className="text-sm font-semibold text-[var(--text-primary)]">{item}</p>
              </div>
            ))}
          </GlassPanel>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Featured Previews"
            title="Case study structures without fabricated proof."
            description="These cards show the kinds of systems NEXORA ORBIT is built to deliver. Real client details, visuals, metrics, and quotes are added only after approval."
          />
          <Grid columns={3}>
            {workProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="ds-focus-ring rounded-[var(--radius-lg)]"
                aria-label={`View ${project.title} case study structure`}
              >
                <Card variant="service" className="grid min-h-full gap-6">
                  <AbstractWorkVisual tone={tones[index % tones.length]} />
                  <div>
                    <Badge tone="neutral">{project.status}</Badge>
                    <h2 className="ds-h5 mt-5 text-[var(--text-primary)]">{project.title}</h2>
                    <p className="ds-body-sm mt-4 text-[var(--text-secondary)]">{project.problem}</p>
                  </div>
                  <p className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--surface-panel)] px-4 py-3 text-sm text-[var(--text-muted)]">
                    This is a case study structure preview. Replace with approved project details, client permission, real visuals, and verified outcomes before public launch.
                  </p>
                  <span className="text-sm font-semibold text-[var(--text-accent)]">{project.cta}</span>
                </Card>
              </Link>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader
            eyebrow="Capability Filters"
            title="Filter language for future portfolio growth."
            description="These tags define the planned filtering model. They are intentionally static until real case studies are approved."
          />
          <div className="flex flex-wrap gap-3" aria-label="Work capability filters">
            {workFilters.map((filter) => (
              <Chip key={filter} selected={filter === "All"}>
                {filter}
              </Chip>
            ))}
          </div>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Project Gallery"
            title="A restrained gallery structure ready for approved work."
            description="The gallery avoids fake logos, fake metrics, and fabricated screenshots. Each item links to a transparent case study structure."
          />
          <Grid columns={3}>
            {workProjects.map((project) => (
              <Card key={project.slug} variant="feature" className="grid gap-5">
                <Badge tone="brand">{project.category}</Badge>
                <h2 className="ds-h5 text-[var(--text-primary)]">{project.title}</h2>
                <p className="ds-body-sm text-[var(--text-secondary)]">{project.context}</p>
                <p className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--surface-panel)] px-4 py-3 text-sm text-[var(--text-muted)]">
                  This is a case study structure preview. Replace with approved project details, client permission, real visuals, and verified outcomes before public launch.
                </p>
                <Link
                  href={`/work/${project.slug}`}
                  className="ds-focus-ring rounded-[var(--radius-sm)] text-sm font-semibold text-[var(--text-accent)]"
                >
                  View structure
                </Link>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="How We Present Work"
            title="Proof should earn trust through clarity, not performance theater."
            description="These standards guide every future case study before publication."
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
          <GlassPanel className="relative overflow-hidden p-8 md:p-12">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-[var(--radius-full)] bg-[radial-gradient(circle,rgba(37,99,255,0.18),transparent_64%)] blur-[var(--blur-xl)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <Badge tone="brand">Work CTA</Badge>
                <h2 className="ds-h2 mt-5 max-w-3xl text-[var(--text-primary)]">
                  Want to shape the next approved case study?
                </h2>
                <p className="ds-body-md mt-5 max-w-2xl text-[var(--text-secondary)]">
                  Start with the system you need to build, improve, or clarify. The work can become public only when proof is approved.
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
