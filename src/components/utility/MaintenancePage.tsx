import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";
import { UtilityCtaLink } from "./UtilityCtaLink";

export function MaintenancePage() {
  return (
    <div className="overflow-hidden bg-[radial-gradient(circle_at_75%_5%,rgba(139,92,246,0.14),transparent_32%),var(--surface-base)]">
      <section className="py-20 sm:py-24 lg:py-28">
        <Container className="flex min-h-[58vh] items-center">
          <Card variant="glass" className="w-full p-6 sm:p-8 lg:p-10">
            <Badge tone="info">Maintenance</Badge>
            <h1 className="ds-display mt-7 max-w-4xl text-[var(--text-primary)]">The system is being refined.</h1>
            <p className="ds-body-lg mt-6 max-w-3xl text-[var(--text-secondary)]">
              NEXORA ORBIT is temporarily updating this experience. Please check back shortly or contact us directly.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <UtilityCtaLink href="/contact">Contact</UtilityCtaLink>
              <UtilityCtaLink href={`mailto:${siteConfig.email}`} variant="glass">
                Email Directly
              </UtilityCtaLink>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
