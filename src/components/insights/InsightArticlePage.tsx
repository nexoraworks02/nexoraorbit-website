import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Grid } from "@/components/ui/Grid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { InsightArticle } from "@/data/insights";
import { insightArticles } from "@/data/insights";
import { EditorialVisual } from "@/components/insights/EditorialVisual";
import { InsightCtaLink } from "@/components/insights/InsightCtaLink";

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

export function InsightArticlePage({ article }: { article: InsightArticle }) {
  const relatedArticles = insightArticles.filter((item) => item.slug !== article.slug);

  return (
    <article>
      <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[var(--gradient-cover-atmosphere)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div>
            <Badge tone="brand">{article.category}</Badge>
            <p className="ds-meta mt-5 text-[var(--text-muted)]">{article.status}</p>
            <h1 className="ds-display-md mt-4 max-w-5xl text-[var(--text-primary)]">{article.title}</h1>
            <p className="ds-body-lg mt-6 max-w-3xl text-[var(--text-secondary)]">{article.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <InsightCtaLink href="/contact">Book a Consultation</InsightCtaLink>
              <InsightCtaLink href="/insights" variant="glass">
                Back to Insights
              </InsightCtaLink>
            </div>
          </div>
          <EditorialVisual />
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container>
          <GlassPanel className="grid gap-5 p-8 md:p-10">
            <Badge tone="warning">Editorial Placeholder</Badge>
            <h2 className="ds-h3 text-[var(--text-primary)]">This is not a final published article yet.</h2>
            <p className="ds-body-md max-w-3xl text-[var(--text-secondary)]">
              This is an article structure preview. Replace with final reviewed editorial content before publication.
            </p>
          </GlassPanel>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeader
            eyebrow="Key Takeaways"
            title="The article should make practical decisions clearer."
            description="Final content should turn these takeaways into concise, reviewed editorial guidance."
          />
          <ListCard title="Takeaways" items={article.takeaways} />
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Main Content Placeholder"
            title="Short editorial sections for future review."
            description="These sections define article shape without pretending final research, publication dates, or author bios exist."
          />
          <Grid columns={3}>
            {article.sections.map((section) => (
              <Card key={section.title} variant="glass" className="grid gap-4">
                <h2 className="ds-h5 text-[var(--text-primary)]">{section.title}</h2>
                <p className="ds-body-sm text-[var(--text-secondary)]">{section.body}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeader
            eyebrow="Practical Examples Placeholder"
            title="Examples should be useful, not fabricated proof."
            description="Final articles can add real examples when reviewed and appropriate. This preview only defines example categories."
          />
          <div className="flex flex-wrap gap-3" aria-label="Practical example categories">
            {article.examples.map((example) => (
              <Chip key={example} tone="brand">
                {example}
              </Chip>
            ))}
          </div>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionHeader
            eyebrow="Related Services"
            title="Implementation paths connected to the topic."
            description="Service links are included only where they clarify practical next steps."
          />
          <div className="flex flex-wrap gap-3" aria-label="Related services">
            {article.relatedServices.map((service) => (
              <Chip key={service} tone="brand">
                {service}
              </Chip>
            ))}
          </div>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="Related Articles"
            title="Explore adjacent article structures."
            description="These are still placeholder structures until reviewed editorial content is approved."
          />
          <Grid columns={2}>
            {relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.slug}
                href={`/insights/${relatedArticle.slug}`}
                className="ds-focus-ring rounded-[var(--radius-lg)]"
                aria-label={`Read article structure for ${relatedArticle.title}`}
              >
                <Card variant="service" className="grid min-h-56 content-between gap-6">
                  <div>
                    <Badge tone="neutral">{relatedArticle.status}</Badge>
                    <p className="ds-meta mt-5 text-[var(--text-muted)]">{relatedArticle.category}</p>
                    <h2 className="ds-h5 mt-3 text-[var(--text-primary)]">{relatedArticle.title}</h2>
                    <p className="ds-body-sm mt-4 text-[var(--text-secondary)]">{relatedArticle.excerpt}</p>
                  </div>
                  <span className="text-sm font-semibold text-[var(--text-accent)]">View structure</span>
                </Card>
              </Link>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container>
          <GlassPanel className="relative overflow-hidden p-8 md:p-12">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-[var(--radius-full)] bg-[radial-gradient(circle,rgba(37,99,255,0.18),transparent_64%)] blur-[var(--blur-xl)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <Badge tone="brand">Article CTA</Badge>
                <h2 className="ds-h2 mt-5 max-w-3xl text-[var(--text-primary)]">Need help applying this to your business?</h2>
                <p className="ds-body-md mt-5 max-w-2xl text-[var(--text-secondary)]">
                  Book a consultation to clarify the system, service mix, or implementation path behind the topic.
                </p>
              </div>
              <InsightCtaLink href="/contact">Book a Consultation</InsightCtaLink>
            </div>
          </GlassPanel>
        </Container>
      </section>
    </article>
  );
}
