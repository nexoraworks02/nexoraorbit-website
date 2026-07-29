import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Grid } from "@/components/ui/Grid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { editorialStandards, insightArticles, insightCategories } from "@/data/insights";
import { EditorialVisual } from "@/components/insights/EditorialVisual";
import { InsightCtaLink } from "@/components/insights/InsightCtaLink";

export function InsightsLanding() {
  const featuredArticle = insightArticles[0];

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-[var(--gradient-cover-atmosphere)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div>
            <Badge tone="brand">Insights</Badge>
            <h1 className="ds-display-md mt-5 max-w-5xl text-[var(--text-primary)]">
              Practical thinking on software, AI, cloud, brand, and digital growth.
            </h1>
            <p className="ds-body-lg mt-6 max-w-3xl text-[var(--text-secondary)]">
              Ideas, frameworks, and technical perspectives for teams making serious digital decisions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <InsightCtaLink href="#articles">Explore Articles</InsightCtaLink>
              <InsightCtaLink href="/contact" variant="glass">
                Discuss a Project
              </InsightCtaLink>
            </div>
          </div>
          <EditorialVisual />
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader
            eyebrow="Featured Insight"
            title="Start with the decision behind the technology."
            description="Featured insights remain placeholder structures until reviewed editorial content is approved."
          />
          <Link
            href={`/insights/${featuredArticle.slug}`}
            className="ds-focus-ring rounded-[var(--radius-lg)]"
            aria-label={`Read article structure for ${featuredArticle.title}`}
          >
            <Card variant="service" className="grid gap-6 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
              <EditorialVisual className="min-h-52" />
              <div className="grid gap-5">
                <div>
                  <Badge tone="neutral">{featuredArticle.status}</Badge>
                  <h2 className="ds-h4 mt-5 text-[var(--text-primary)]">{featuredArticle.title}</h2>
                  <p className="ds-body-md mt-4 text-[var(--text-secondary)]">{featuredArticle.excerpt}</p>
                </div>
                <p className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--surface-panel)] px-4 py-3 text-sm text-[var(--text-muted)]">
                  This is an article structure preview. Replace with final reviewed editorial content before publication.
                </p>
                <span className="text-sm font-semibold text-[var(--text-accent)]">View article structure</span>
              </div>
            </Card>
          </Link>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <SectionHeader
            eyebrow="Category Filters"
            title="A taxonomy for future editorial growth."
            description="Categories are static for now and will support filtering when real reviewed articles are published."
          />
          <div className="flex flex-wrap gap-3" aria-label="Insight categories">
            {insightCategories.map((category) => (
              <Chip key={category} tone="brand">
                {category}
              </Chip>
            ))}
          </div>
        </Container>
      </section>

      <section id="articles" className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Article Grid"
            title="Placeholder article structures ready for editorial review."
            description="These previews define topic direction, related services, and article architecture without fake authors, dates, statistics, or unsupported claims."
          />
          <Grid columns={3}>
            {insightArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="ds-focus-ring rounded-[var(--radius-lg)]"
                aria-label={`Read article structure for ${article.title}`}
              >
                <Card variant="service" className="grid min-h-full gap-6">
                  <EditorialVisual className="min-h-44" />
                  <div>
                    <Badge tone="neutral">{article.status}</Badge>
                    <p className="ds-meta mt-5 text-[var(--text-muted)]">{article.category}</p>
                    <h2 className="ds-h5 mt-3 text-[var(--text-primary)]">{article.title}</h2>
                    <p className="ds-body-sm mt-4 text-[var(--text-secondary)]">{article.excerpt}</p>
                  </div>
                  <p className="rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--surface-panel)] px-4 py-3 text-sm text-[var(--text-muted)]">
                    This is an article structure preview. Replace with final reviewed editorial content before publication.
                  </p>
                  <span className="text-sm font-semibold text-[var(--text-accent)]">View structure</span>
                </Card>
              </Link>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Editorial Standards"
            title="Insights should help teams make better decisions."
            description="NEXORA ORBIT insights should answer real product, engineering, AI, cloud, brand, and growth questions. Articles should clarify decisions, not create noise."
          />
          <Grid columns={4}>
            {editorialStandards.map((standard) => (
              <Card key={standard.title} variant="glass" className="grid gap-4">
                <h2 className="ds-h6 text-[var(--text-primary)]">{standard.title}</h2>
                <p className="ds-body-sm text-[var(--text-secondary)]">{standard.body}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-2">
          <GlassPanel className="grid gap-5 p-8 md:p-10">
            <Badge tone="brand">Related Services CTA</Badge>
            <h2 className="ds-h3 text-[var(--text-primary)]">Need help turning a decision into a system?</h2>
            <p className="ds-body-md text-[var(--text-secondary)]">
              Explore the services behind the strategy, design, engineering, AI, cloud, brand, and growth work.
            </p>
            <InsightCtaLink href="/services" className="justify-self-start">
              Explore Services
            </InsightCtaLink>
          </GlassPanel>
          <GlassPanel className="grid gap-5 p-8 md:p-10">
            <Badge tone="neutral">Newsletter Placeholder</Badge>
            <h2 className="ds-h3 text-[var(--text-primary)]">Newsletter and editorial subscription can be added later.</h2>
            <p className="ds-body-md text-[var(--text-secondary)]">
              No fake subscriber list, cadence, or publication history is shown until the editorial system is approved.
            </p>
            <InsightCtaLink href="/contact" variant="glass" className="justify-self-start">
              Discuss a Project
            </InsightCtaLink>
          </GlassPanel>
        </Container>
      </section>
    </>
  );
}
