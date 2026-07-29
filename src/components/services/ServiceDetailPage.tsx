import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Grid } from "@/components/ui/Grid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { ServiceDetail } from "@/data/nexoraServices";
import { ServiceCtaLink } from "@/components/services/ServiceCtaLink";

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

function SectionNote({ title, body }: { title: string; body: string }) {
  return (
    <Card variant="glass" className="grid gap-4">
      <h2 className="ds-h5 text-[var(--text-primary)]">{title}</h2>
      <p className="ds-body-sm text-[var(--text-secondary)]">{body}</p>
    </Card>
  );
}

export function ServiceDetailPage({ service }: { service: ServiceDetail }) {
  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[var(--gradient-cover-atmosphere)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <Badge tone="brand">{service.eyebrow}</Badge>
            <h1 className="ds-display-md mt-5 max-w-4xl text-[var(--text-primary)]">{service.headline}</h1>
            <p className="ds-body-lg mt-6 max-w-3xl text-[var(--text-secondary)]">{service.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ServiceCtaLink href="/contact">{service.cta}</ServiceCtaLink>
              <ServiceCtaLink href="/work" variant="glass">
                View Related Work
              </ServiceCtaLink>
            </div>
          </div>
          <GlassPanel className="grid gap-5 p-6">
            <p className="ds-meta text-[var(--text-muted)]">Service structure</p>
            {["Context", "Outcomes", "Capabilities", "Methods"].map((item) => (
              <div key={item} className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-panel)] p-4">
                <p className="text-sm font-semibold text-[var(--text-primary)]">{item}</p>
              </div>
            ))}
          </GlassPanel>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Problem Context"
            title="The work starts by understanding the system behind the request."
            description="A service is useful only when it connects to business context, user needs, technical constraints, and the operational reality around launch."
          />
          <Grid columns={2}>
            <ListCard title="Expected Outcomes" items={service.outcomes} />
            <ListCard title="Core Capabilities" items={service.capabilities} />
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Delivery Focus"
            title="The goal is a usable system, not a decorative deliverable."
            description="Every service is framed around decisions, workflows, handoff, and the next operational step after launch."
          />
          <Grid columns={3}>
            <SectionNote
              title="Clarity before production"
              body="Scope, priorities, constraints, and ownership are clarified before detailed execution begins."
            />
            <SectionNote
              title="Reusable foundations"
              body="Outputs are structured so teams can extend, maintain, and improve the work after launch."
            />
            <SectionNote
              title="Measured next steps"
              body="Recommendations, launch tasks, and optimization opportunities are documented in practical terms."
            />
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Process"
            title="A clear path from technical uncertainty to useful execution."
            description="The detail changes by service, but the delivery model stays deliberate: clarify, structure, build, and prepare for what comes next."
          />
          <Grid columns={4}>
            {service.process.map((step, index) => (
              <Card key={step} variant="feature" className="min-h-48">
                <span className="grid size-11 place-items-center rounded-[var(--radius-full)] border border-[var(--border-brand)] bg-[var(--tone-brand-bg)] text-sm font-bold text-[var(--text-accent)]">
                  {index + 1}
                </span>
                <h2 className="ds-h6 mt-5 text-[var(--text-primary)]">{step}</h2>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container>
          <GlassPanel className="grid gap-6 p-8 md:p-10">
            <Badge tone="neutral">Related Work Placeholder</Badge>
            <h2 className="ds-h3 text-[var(--text-primary)]">Related work will be added as approved case studies become ready for publication.</h2>
            <p className="ds-body-md max-w-3xl text-[var(--text-secondary)]">
              No fake logos, fake clients, fake metrics, or fabricated testimonials are used in this service template.
            </p>
          </GlassPanel>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Technology / Methods"
            title="Methods are selected for the system, not for decoration."
            description="The exact stack and workflow are defined by the business context, existing systems, delivery timeline, and long-term maintainability needs."
          />
          <Grid columns={3}>
            <ListCard title="Methods" items={service.methods} />
            <ListCard title="Who It Is For" items={service.audience} />
            <Card variant="service" className="grid content-between gap-8">
              <div>
                <h2 className="ds-h5 text-[var(--text-primary)]">Need a different mix?</h2>
                <p className="ds-body-sm mt-4 text-[var(--text-secondary)]">
                  Many engagements combine services across engineering, AI, cloud, brand, web, and growth.
                </p>
              </div>
              <Link href="/services" className="ds-focus-ring rounded-[var(--radius-sm)] text-sm font-semibold text-[var(--text-accent)]">
                Explore all services
              </Link>
            </Card>
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="Common questions before starting."
            description="These questions are structured so they can support FAQ schema and future content expansion."
          />
          <Accordion
            defaultOpenId={`${service.slug}-faq-0`}
            items={service.faqs.map((faq, index) => ({
              id: `${service.slug}-faq-${index}`,
              title: faq.question,
              content: faq.answer,
            }))}
          />
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container>
          <GlassPanel className="relative overflow-hidden p-8 md:p-12">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-[var(--radius-full)] bg-[radial-gradient(circle,rgba(37,99,255,0.18),transparent_64%)] blur-[var(--blur-xl)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <Badge tone="brand">Next Step</Badge>
                <h2 className="ds-h2 mt-5 max-w-3xl text-[var(--text-primary)]">{service.cta}</h2>
                <p className="ds-body-md mt-5 max-w-2xl text-[var(--text-secondary)]">
                  Tell us what you are building, improving, or modernizing. We will help clarify the right path before execution begins.
                </p>
              </div>
              <ServiceCtaLink href="/contact">{service.cta}</ServiceCtaLink>
            </div>
          </GlassPanel>
        </Container>
      </section>
    </>
  );
}
