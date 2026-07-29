import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Grid } from "@/components/ui/Grid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { serviceDetails, serviceGroups } from "@/data/nexoraServices";
import { ServiceCtaLink } from "@/components/services/ServiceCtaLink";

const processSteps = ["Discover", "Strategize", "Design", "Engineer", "Launch", "Optimize"];

export function ServicesLanding() {
  return (
    <>
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="absolute inset-0 bg-[var(--gradient-cover-atmosphere)]" />
        <Container className="relative">
          <div className="max-w-5xl">
            <Badge tone="brand">Capabilities</Badge>
            <h1 className="ds-display-md mt-5 max-w-5xl text-[var(--text-primary)]">
              One technology partner for the systems that move your business forward.
            </h1>
            <p className="ds-body-lg mt-6 max-w-3xl text-[var(--text-secondary)]">
              NEXORA ORBIT brings engineering, AI, cloud, mobile, web, brand, and growth capabilities into one connected delivery model.
              Each service is built around a clear business outcome, not a disconnected task list.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ServiceCtaLink href="/contact" className="sm:w-auto">Book a Consultation</ServiceCtaLink>
              <ServiceCtaLink href="#service-pages" variant="glass" className="sm:w-auto">
                Explore Service Pages
              </ServiceCtaLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Service Groups"
            title="Build, intelligence, scale, and grow in one connected system."
            description="The model keeps technical delivery, brand clarity, and growth infrastructure aligned."
          />
          <Grid columns={4}>
            {serviceGroups.map((group) => (
              <Card key={group.label} variant="service" className="grid min-h-80 content-between gap-8">
                <div>
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <Badge tone="brand">{group.label}</Badge>
                    <span className="size-2 rounded-[var(--radius-full)] bg-[var(--accent-cyan)] shadow-[var(--glow-cyan-data)]" />
                  </div>
                  <h2 className="ds-h5 text-[var(--text-primary)]">{group.label} capabilities</h2>
                  <p className="ds-body-sm mt-4 text-[var(--text-secondary)]">{group.description}</p>
                </div>
                <ul className="grid gap-2" aria-label={`${group.label} capabilities`}>
                  {group.services.map((service) => (
                    <li key={service} className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--surface-panel)] px-3 py-2 text-sm font-semibold text-[var(--text-primary)]">
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>

      <section id="service-pages" className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Service Pages"
            title="Explore the services behind the NEXORA ORBIT delivery model."
            description="Each service page explains context, outcomes, capabilities, process, methods, fit, and common questions."
          />
          <Grid columns={4}>
            {serviceDetails.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="ds-focus-ring rounded-[var(--radius-lg)]"
                aria-label={`Explore ${service.title}`}
              >
                <Card variant="service" className="grid min-h-64 content-between gap-8">
                  <div>
                    <Badge tone="neutral">{service.eyebrow}</Badge>
                    <h2 className="ds-h5 mt-5 text-[var(--text-primary)]">{service.title}</h2>
                    <p className="ds-body-sm mt-4 text-[var(--text-secondary)]">{service.description}</p>
                  </div>
                  <span className="inline-flex min-h-10 items-center text-sm font-semibold text-[var(--text-accent)]">
                    {service.cta}
                  </span>
                </Card>
              </Link>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Process"
            title="A shared process for technical clarity and careful execution."
            description="Every engagement starts with context, then moves through strategy, design, engineering, launch, and optimization."
          />
          <div className="relative grid gap-5 md:grid-cols-3 lg:grid-cols-6">
            <div className="nx-timeline-line absolute left-0 right-0 top-6 hidden h-px bg-[var(--border-default)] lg:block" />
            {processSteps.map((step, index) => (
              <Card key={step} variant="feature" className="relative min-h-40">
                <span className="grid size-11 place-items-center rounded-[var(--radius-full)] border border-[var(--border-brand)] bg-[var(--tone-brand-bg)] text-sm font-bold text-[var(--text-accent)]">
                  {index + 1}
                </span>
                <h2 className="ds-h6 mt-5 text-[var(--text-primary)]">{step}</h2>
              </Card>
            ))}
          </div>
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
                  Need the right service path before execution begins?
                </h2>
                <p className="ds-body-md mt-5 max-w-2xl text-[var(--text-secondary)]">
                  Tell us what you are building, improving, or modernizing. We will help clarify the right capability mix.
                </p>
              </div>
              <ServiceCtaLink href="/contact">Book a Consultation</ServiceCtaLink>
            </div>
          </GlassPanel>
        </Container>
      </section>
    </>
  );
}
