import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { thankYouLinks, thankYouNextSteps } from "@/data/legalUtility";
import { UtilityCtaLink } from "./UtilityCtaLink";

export function ThankYouPage() {
  return (
    <div className="overflow-hidden bg-[radial-gradient(circle_at_70%_10%,rgba(91,124,255,0.18),transparent_34%),var(--surface-base)]">
      <section className="pt-20 sm:pt-24 lg:pt-28">
        <Container className="pb-14 sm:pb-16 lg:pb-20">
          <div className="max-w-4xl">
            <Badge tone="success">Enquiry Received</Badge>
            <h1 className="ds-display mt-7 text-[var(--text-primary)]">Thank you. Your project context is ready for review.</h1>
            <p className="ds-body-lg mt-6 max-w-3xl text-[var(--text-secondary)]">
              The NEXORA ORBIT team will review your enquiry and respond with relevant questions or next-step options.
            </p>
          </div>
          <Card variant="glass" className="mt-10 max-w-3xl p-6 sm:p-7">
            <p className="ds-meta text-[var(--text-accent)]">Future form flow notice</p>
            <p className="ds-body-sm mt-3 text-[var(--text-secondary)]">
              This page is ready for the future enquiry flow. Backend submission, email routing, consent handling, and
              confirmation logic are not connected in this phase.
            </p>
          </Card>
        </Container>
      </section>

      <section className="border-y border-[var(--border-default)] py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="ds-meta text-[var(--text-muted)]">What Happens Next</p>
            <h2 className="ds-heading-2 mt-3 text-[var(--text-primary)]">A clear review path before any commitment.</h2>
          </div>
          <Grid columns={3} className="mt-8">
            {thankYouNextSteps.map((step, index) => (
              <Card key={step} variant="feature" className="h-full">
                <span className="text-sm font-semibold text-[var(--text-accent)]">0{index + 1}</span>
                <p className="ds-body-sm mt-4 leading-7 text-[var(--text-secondary)]">{step}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <Card variant="glass" className="p-6 sm:p-8">
            <div className="max-w-3xl">
              <p className="ds-meta text-[var(--text-muted)]">Helpful Next Links</p>
              <h2 className="ds-heading-2 mt-3 text-[var(--text-primary)]">Continue exploring the system.</h2>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {thankYouLinks.map((link, index) => (
                <UtilityCtaLink key={link.href} href={link.href} variant={index === 0 ? "primary" : "glass"}>
                  {link.label}
                </UtilityCtaLink>
              ))}
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
