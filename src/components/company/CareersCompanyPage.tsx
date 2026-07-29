import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Grid } from "@/components/ui/Grid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { careerDisciplines, culturePrinciples } from "@/data/company";
import { CompanyCtaLink } from "@/components/company/CompanyCtaLink";
import { CompanySystemVisual } from "@/components/company/CompanySystemVisual";
import { siteConfig } from "@/lib/site-config";

const talentHref = `mailto:${siteConfig.email}?subject=Future%20Opportunity%20at%20NEXORA%20ORBIT`;

export function CareersCompanyPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-[var(--gradient-cover-atmosphere)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div>
            <Badge tone="brand">Careers</Badge>
            <h1 className="ds-display-md mt-5 max-w-5xl text-[var(--text-primary)]">
              Build systems with people who value precision, clarity, and ownership.
            </h1>
            <p className="ds-body-lg mt-6 max-w-3xl text-[var(--text-secondary)]">
              NEXORA ORBIT is building a multidisciplinary team across engineering, design, AI, cloud, product, content, brand, and growth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CompanyCtaLink href={talentHref}>Send Your Profile</CompanyCtaLink>
              <CompanyCtaLink href="/company/process" variant="glass">
                How We Work
              </CompanyCtaLink>
            </div>
          </div>
          <CompanySystemVisual />
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container>
          <GlassPanel className="grid gap-5 p-8 md:p-10">
            <Badge tone="brand">Why Work at NEXORA ORBIT</Badge>
            <h2 className="ds-h3 max-w-4xl text-[var(--text-primary)]">
              We value calm execution, technical quality, thoughtful communication, and the discipline to turn complex work into clear systems.
            </h2>
          </GlassPanel>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Culture Principles"
            title="High standards without unnecessary noise."
            description="The working culture is shaped around ownership, clarity, craft, and practical learning."
          />
          <Grid columns={3}>
            {culturePrinciples.map((principle) => (
              <Card key={principle} variant="feature" className="grid min-h-40 content-between gap-5">
                <span className="size-2 rounded-[var(--radius-full)] bg-[var(--accent-cyan)] shadow-[var(--glow-cyan-data)]" />
                <h2 className="ds-h5 text-[var(--text-primary)]">{principle}</h2>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader
            eyebrow="Disciplines"
            title="Future opportunities across the systems NEXORA ORBIT builds."
            description="Disciplines are listed as future hiring areas, not as current open roles."
          />
          <div className="flex flex-wrap gap-3" aria-label="Future career disciplines">
            {careerDisciplines.map((discipline) => (
              <Chip key={discipline} tone="brand">
                {discipline}
              </Chip>
            ))}
          </div>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Card variant="glass" className="grid gap-5">
            <Badge tone="warning">Open Roles Empty State</Badge>
            <h2 className="ds-h3 text-[var(--text-primary)]">There are no open roles listed right now.</h2>
            <p className="ds-body-md text-[var(--text-secondary)]">
              You can still share your profile for future opportunities. No roles, hiring numbers, or team structure have been invented.
            </p>
          </Card>
          <Card variant="glass" className="grid gap-5">
            <Badge tone="neutral">Hiring Process Placeholder</Badge>
            <h2 className="ds-h3 text-[var(--text-primary)]">Hiring steps will be published when active roles are approved.</h2>
            <p className="ds-body-md text-[var(--text-secondary)]">
              Future role pages can include responsibilities, expectations, evaluation steps, and collaboration standards.
            </p>
          </Card>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container>
          <GlassPanel className="p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <Badge tone="brand">Talent CTA</Badge>
                <h2 className="ds-h2 mt-5 max-w-3xl text-[var(--text-primary)]">Share your profile for future opportunities.</h2>
                <p className="ds-body-md mt-5 max-w-2xl text-[var(--text-secondary)]">
                  Send a concise introduction, your discipline, portfolio or work samples, and the kind of systems you want to help build.
                </p>
              </div>
              <CompanyCtaLink href={talentHref}>Send Your Profile</CompanyCtaLink>
            </div>
          </GlassPanel>
        </Container>
      </section>
    </>
  );
}
