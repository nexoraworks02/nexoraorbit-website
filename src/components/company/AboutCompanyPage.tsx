import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Grid } from "@/components/ui/Grid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { beliefs, companyCapabilities, operatingPrinciples, processSteps } from "@/data/company";
import { CompanyCtaLink } from "@/components/company/CompanyCtaLink";
import { CompanySystemVisual } from "@/components/company/CompanySystemVisual";

export function AboutCompanyPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-[var(--gradient-cover-atmosphere)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div>
            <Badge tone="brand">About NEXORA ORBIT</Badge>
            <h1 className="ds-display-md mt-5 max-w-5xl text-[var(--text-primary)]">
              We build the digital systems behind modern business transformation.
            </h1>
            <p className="ds-body-lg mt-6 max-w-3xl text-[var(--text-secondary)]">
              NEXORA ORBIT is a premium technology partner for companies that need clear strategy, disciplined engineering,
              intelligent automation, scalable platforms, and credible digital presence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CompanyCtaLink href="/contact">Book a Consultation</CompanyCtaLink>
              <CompanyCtaLink href="/company/process" variant="glass">
                Explore Process
              </CompanyCtaLink>
            </div>
          </div>
          <CompanySystemVisual />
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-2">
          <GlassPanel className="grid gap-5 p-8 md:p-10">
            <Badge tone="brand">Mission</Badge>
            <h2 className="ds-h3 text-[var(--text-primary)]">
              To build scalable digital systems, intelligent software, and premium brand experiences.
            </h2>
            <p className="ds-body-md text-[var(--text-secondary)]">
              The work should help ambitious companies transform how they operate, compete, and grow.
            </p>
          </GlassPanel>
          <GlassPanel className="grid gap-5 p-8 md:p-10">
            <Badge tone="neutral">Vision</Badge>
            <h2 className="ds-h3 text-[var(--text-primary)]">
              To become a globally trusted technology partner known for engineering excellence.
            </h2>
            <p className="ds-body-md text-[var(--text-secondary)]">
              Elegant execution and future-ready digital ecosystems guide the long-term standard.
            </p>
          </GlassPanel>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="What We Believe"
            title="Premium technology work should reduce uncertainty."
            description="NEXORA ORBIT treats strategy, design, engineering, accessibility, performance, and ownership as connected parts of one system."
          />
          <Grid columns={3}>
            {beliefs.map((belief) => (
              <Card key={belief} variant="feature" className="grid min-h-44 content-between gap-5">
                <span className="size-2 rounded-[var(--radius-full)] bg-[var(--accent-cyan)] shadow-[var(--glow-cyan-data)]" />
                <h2 className="ds-h6 text-[var(--text-primary)]">{belief}</h2>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader
            eyebrow="Capabilities"
            title="A connected delivery model for digital systems."
            description="The company is structured around the capabilities businesses need when software, AI, cloud, brand, and growth must work together."
          />
          <div className="flex flex-wrap gap-3" aria-label="NEXORA ORBIT capabilities">
            {companyCapabilities.map((capability) => (
              <Chip key={capability} tone="brand">
                {capability}
              </Chip>
            ))}
          </div>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Operating Principles"
            title="How the work stays clear, durable, and calm."
            description="These principles protect the quality of the product, the clarity of the process, and the usefulness of the final system."
          />
          <Grid columns={3}>
            {operatingPrinciples.map((principle) => (
              <Card key={principle.title} variant="glass" className="grid gap-4">
                <h2 className="ds-h5 text-[var(--text-primary)]">{principle.title}</h2>
                <p className="ds-body-sm text-[var(--text-secondary)]">{principle.body}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Process Preview"
            title="A clear path from context to launch readiness."
            description="The process keeps decisions visible and reduces risk before detailed execution begins."
          />
          <Grid columns={6}>
            {processSteps.map((step, index) => (
              <Card key={step.title} variant="feature" className="min-h-44">
                <span className="grid size-11 place-items-center rounded-[var(--radius-full)] border border-[var(--border-brand)] bg-[var(--tone-brand-bg)] text-sm font-bold text-[var(--text-accent)]">
                  {index + 1}
                </span>
                <h2 className="ds-h6 mt-5 text-[var(--text-primary)]">{step.title}</h2>
              </Card>
            ))}
          </Grid>
          <Link href="/company/process" className="ds-focus-ring justify-self-start rounded-[var(--radius-sm)] text-sm font-semibold text-[var(--text-accent)]">
            View full process
          </Link>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Card variant="glass" className="grid gap-5">
            <Badge tone="brand">Global Client Readiness</Badge>
            <h2 className="ds-h3 text-[var(--text-primary)]">Built for clear collaboration across markets and time zones.</h2>
            <p className="ds-body-md text-[var(--text-secondary)]">
              Remote delivery, async updates, documented decisions, professional review cycles, and structured handoff support clients beyond one location.
            </p>
          </Card>
          <Card variant="glass" className="grid gap-5">
            <Badge tone="neutral">Team Placeholder</Badge>
            <h2 className="ds-h3 text-[var(--text-primary)]">Leadership and team profiles will be added when approved for public presentation.</h2>
            <p className="ds-body-md text-[var(--text-secondary)]">
              This section remains intentionally limited until approved public profile information is available.
            </p>
          </Card>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container>
          <GlassPanel className="relative overflow-hidden p-8 md:p-12">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-[var(--radius-full)] bg-[radial-gradient(circle,rgba(37,99,255,0.18),transparent_64%)] blur-[var(--blur-xl)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <Badge tone="brand">Next Step</Badge>
                <h2 className="ds-h2 mt-5 max-w-3xl text-[var(--text-primary)]">
                  Work with a partner that can think, design, engineer, and optimize.
                </h2>
                <p className="ds-body-md mt-5 max-w-2xl text-[var(--text-secondary)]">
                  If your business needs a stronger digital system, start with a consultation.
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
