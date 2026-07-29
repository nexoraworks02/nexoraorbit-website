import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { UtilityCtaLink } from "./UtilityCtaLink";

export function NotFoundContent() {
  return (
    <div className="overflow-hidden bg-[radial-gradient(circle_at_top,rgba(91,124,255,0.16),transparent_36%),var(--surface-base)]">
      <section className="min-h-[70vh] py-20 sm:py-24 lg:py-28">
        <Container className="flex min-h-[58vh] items-center">
          <Card variant="glass" className="w-full p-6 sm:p-8 lg:p-10">
            <Badge tone="brand">404</Badge>
            <h1 className="ds-display mt-7 max-w-4xl text-[var(--text-primary)]">This page is not part of the system yet.</h1>
            <p className="ds-body-lg mt-6 max-w-3xl text-[var(--text-secondary)]">
              The page may have moved, changed, or is not available. Return to the homepage or explore the core NEXORA
              ORBIT sections.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <UtilityCtaLink href="/">Return Home</UtilityCtaLink>
              <UtilityCtaLink href="/services" variant="glass">
                Explore Services
              </UtilityCtaLink>
              <UtilityCtaLink href="/contact" variant="ghost">
                Contact
              </UtilityCtaLink>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
