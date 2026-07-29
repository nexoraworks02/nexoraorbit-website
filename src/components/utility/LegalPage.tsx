import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import type { LegalSection } from "@/data/legalUtility";
import { UtilityCtaLink } from "./UtilityCtaLink";

export function LegalPage({
  eyebrow,
  title,
  body,
  sections,
}: {
  eyebrow: string;
  title: string;
  body: string;
  sections: LegalSection[];
}) {
  const reviewSection = sections.find((section) => section.title === "Legal Review Notice");
  const contentSections = sections.filter((section) => section.title !== "Legal Review Notice");

  return (
    <div className="overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(91,124,255,0.18),transparent_34%),radial-gradient(circle_at_20%_12%,rgba(139,92,246,0.12),transparent_28%),var(--surface-base)]">
      <section className="border-b border-[var(--border-default)] pt-20 sm:pt-24 lg:pt-28">
        <Container className="pb-14 sm:pb-16 lg:pb-20">
          <div className="max-w-4xl">
            <Badge tone="brand">{eyebrow}</Badge>
            <h1 className="ds-display mt-7 max-w-4xl text-[var(--text-primary)]">{title}</h1>
            <p className="ds-body-lg mt-6 max-w-3xl text-[var(--text-secondary)]">{body}</p>
          </div>

          {reviewSection ? (
            <Card variant="glass" className="mt-10 max-w-3xl p-6 sm:p-7">
              <h2 className="ds-meta text-[var(--text-accent)]">{reviewSection.title}</h2>
              <div className="mt-4 grid gap-3">
                {reviewSection.body.map((paragraph) => (
                  <p key={paragraph} className="ds-body-sm text-[var(--text-secondary)]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
          ) : null}
        </Container>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          <Grid columns={2} className="items-start gap-5 lg:gap-6">
            {contentSections.map((section) => (
              <Card key={section.title} variant="feature" className="h-full p-6 sm:p-7">
                <h2 className="ds-heading-3 text-[var(--text-primary)]">{section.title}</h2>
                <div className="mt-4 grid gap-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="ds-body-sm leading-7 text-[var(--text-secondary)]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="border-t border-[var(--border-default)] py-14 sm:py-16">
        <Container>
          <Card variant="glass" className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="ds-meta text-[var(--text-muted)]">Need clarity before launch?</p>
              <h2 className="ds-heading-2 mt-3 text-[var(--text-primary)]">Review the legal flow before publishing.</h2>
              <p className="ds-body mt-4 text-[var(--text-secondary)]">
                These pages are structured for implementation and review. Final legal wording should be approved before
                public reliance.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <UtilityCtaLink href="/contact">Contact NEXORA ORBIT</UtilityCtaLink>
              <UtilityCtaLink href="/" variant="glass">
                Return Home
              </UtilityCtaLink>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
