import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Grid } from "@/components/ui/Grid";
import { WireframeSection } from "@/components/wireframes/WireframeSection";
import type { WireframePageData } from "@/components/wireframes/wireframeData";
import type { ReactNode } from "react";

type WireframePageProps = {
  page: WireframePageData;
};

function NoteCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card variant="glass" className="grid gap-3">
      <h3 className="ds-h5 text-[var(--text-primary)]">{title}</h3>
      {children}
    </Card>
  );
}

export function WireframePage({ page }: WireframePageProps) {
  return (
    <section id={page.id} className="scroll-mt-32">
      <Card variant="standard" className="grid gap-8">
        <div className="grid gap-4 lg:grid-cols-[0.35fr_1fr]">
          <div>
            <Badge tone="brand">{page.eyebrow}</Badge>
          </div>
          <div>
            <h2 className="ds-h2 text-[var(--text-primary)]">{page.title}</h2>
            <p className="ds-body-md mt-4 max-w-3xl text-[var(--text-secondary)]">{page.purpose}</p>
          </div>
        </div>
        <Grid columns={3}>
          <NoteCard title="Responsive Preview Notes">
            <dl className="grid gap-3 text-sm text-[var(--text-secondary)]">
              <div className="grid gap-1">
                <dt className="font-semibold text-[var(--text-primary)]">Desktop</dt>
                <dd>{page.responsive.desktop}</dd>
              </div>
              <div className="grid gap-1">
                <dt className="font-semibold text-[var(--text-primary)]">Tablet</dt>
                <dd>{page.responsive.tablet}</dd>
              </div>
              <div className="grid gap-1">
                <dt className="font-semibold text-[var(--text-primary)]">Mobile</dt>
                <dd>{page.responsive.mobile}</dd>
              </div>
            </dl>
          </NoteCard>
          <NoteCard title="Conversion Notes">
            <dl className="grid gap-3 text-sm text-[var(--text-secondary)]">
              <div className="grid gap-1">
                <dt className="font-semibold text-[var(--text-primary)]">Primary CTA</dt>
                <dd>{page.conversion.primary}</dd>
              </div>
              <div className="grid gap-1">
                <dt className="font-semibold text-[var(--text-primary)]">Secondary CTA</dt>
                <dd>{page.conversion.secondary}</dd>
              </div>
            </dl>
          </NoteCard>
          <NoteCard title="SEO / Heading Notes">
            <div className="grid gap-3 text-sm text-[var(--text-secondary)]">
              <p>
                <span className="font-semibold text-[var(--text-primary)]">H1:</span> {page.seo.h1}
              </p>
              <div className="grid gap-2">
                <p className="font-semibold text-[var(--text-primary)]">Main H2 sections</p>
                <div className="flex flex-wrap gap-2">
                  {page.seo.h2.map((heading) => (
                    <Badge key={heading} tone="neutral">
                      {heading}
                    </Badge>
                  ))}
                </div>
              </div>
              <p>
                <span className="font-semibold text-[var(--text-primary)]">FAQ schema:</span> {page.seo.faqSchema}
              </p>
              <p>
                <span className="font-semibold text-[var(--text-primary)]">Internal links:</span> {page.seo.internalLinks}
              </p>
            </div>
          </NoteCard>
        </Grid>
        <div className="grid gap-6">
          {page.sections.map((section, index) => (
            <WireframeSection key={section.title} section={section} index={index} />
          ))}
        </div>
      </Card>
    </section>
  );
}
