import { Card } from "@/components/ui/Card";
import { Grid } from "@/components/ui/Grid";
import { SectionHeader } from "@/components/ui/SectionHeader";

const typeRows = [
  ["Display 2XL", "ds-display-2xl", "96 / 96 / 700"],
  ["Display XL", "ds-display-xl", "80 / 80 / 700"],
  ["Display LG", "ds-display-lg", "64 / 67 / 700"],
  ["Heading 1", "ds-h1", "56 / 60 / 700"],
  ["Heading 2", "ds-h2", "44 / 49 / 650"],
  ["Heading 3", "ds-h3", "32 / 38 / 650"],
  ["Body LG", "ds-body-lg", "18 / 30 / 400"],
  ["Body MD", "ds-body-md", "16 / 26 / 400"],
  ["Eyebrow", "ds-eyebrow", "12 / 16 / 650"],
  ["Mono SM", "ds-mono-sm", "12 / 18 / 500"],
];

export function TypographyPreview() {
  return (
    <section id="typography" className="grid gap-8">
      <SectionHeader
        eyebrow="Typography"
        title="Readable hierarchy with technical restraint"
        description="Reusable type classes map brand scale to semantic structure. Use semantic HTML first, then apply the visual class."
      />
      <Grid columns={2}>
        {typeRows.map(([label, className, spec]) => (
          <Card key={label} variant="feature" className="overflow-hidden">
            <p className="ds-meta mb-4 text-[var(--text-muted)]">{label} - {spec}</p>
            <p className={`${className} break-words text-[var(--text-primary)]`}>Elegant systems</p>
          </Card>
        ))}
      </Grid>
    </section>
  );
}
