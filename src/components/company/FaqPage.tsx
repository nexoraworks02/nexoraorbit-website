import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Grid } from "@/components/ui/Grid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqCategories } from "@/data/company";
import { CompanyCtaLink } from "@/components/company/CompanyCtaLink";

export function FaqPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-[var(--gradient-cover-atmosphere)]" />
        <Container className="relative">
          <Badge tone="brand">FAQ</Badge>
          <h1 className="ds-display-md mt-5 max-w-5xl text-[var(--text-primary)]">Answers before the first conversation.</h1>
          <p className="ds-body-lg mt-6 max-w-3xl text-[var(--text-secondary)]">
            Common questions about working with NEXORA ORBIT, including process, scope, pricing, delivery, technology, and ownership.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CompanyCtaLink href="/contact">Book a Consultation</CompanyCtaLink>
            <CompanyCtaLink href="/company/process" variant="glass">
              View Process
            </CompanyCtaLink>
          </div>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Question Categories"
            title="Clear answers for common decision points."
            description="The FAQ is intentionally concise so users can decide whether to start a consultation without being overwhelmed."
          />
          <Grid columns={2}>
            {faqCategories.map((category) => (
              <Card key={category.title} variant="glass" className="grid gap-5">
                <h2 className="ds-h4 text-[var(--text-primary)]">{category.title}</h2>
                <Accordion
                  defaultOpenId={`${category.title.toLowerCase().replaceAll(" ", "-")}-0`}
                  items={category.items.map((item, index) => ({
                    id: `${category.title.toLowerCase().replaceAll(" ", "-")}-${index}`,
                    title: item.question,
                    content: item.answer,
                  }))}
                />
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
                <Badge tone="brand">Final CTA</Badge>
                <h2 className="ds-h2 mt-5 max-w-3xl text-[var(--text-primary)]">Still deciding what your business needs?</h2>
                <p className="ds-body-md mt-5 max-w-2xl text-[var(--text-secondary)]">
                  Start with a conversation about the problem, the constraints, and the system behind the request.
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
