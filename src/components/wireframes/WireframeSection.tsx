import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Grid } from "@/components/ui/Grid";
import { WireframeBlock } from "@/components/wireframes/WireframeBlock";
import type { WireframeSectionData } from "@/components/wireframes/wireframeData";

type WireframeSectionProps = {
  section: WireframeSectionData;
  index: number;
};

const componentMap: Record<NonNullable<WireframeSectionData["variant"]>, string[]> = {
  hero: ["Container", "SectionHeader", "Button", "GlassPanel", "Grid", "Badge"],
  standard: ["Container", "SectionHeader", "Card", "Accordion", "Tabs", "Badge"],
  split: ["Container", "SectionHeader", "Grid", "Card", "Button"],
  grid: ["Container", "SectionHeader", "Grid", "Card", "Button"],
  form: ["Container", "SectionHeader", "Input", "Button", "Card"],
  gallery: ["Container", "SectionHeader", "Grid", "Card", "Badge", "Chip"],
  cta: ["Container", "SectionHeader", "GlassPanel", "Button"],
};

function getSectionComponents(section: WireframeSectionData) {
  return section.components ?? componentMap[section.variant ?? "standard"];
}

function LayoutPreview({ section }: { section: WireframeSectionData }) {
  const items = section.hierarchy;

  if (section.variant === "hero") {
    return (
      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="grid gap-3">
          {items.slice(0, 3).map((item, index) => (
            <WireframeBlock key={item.label} label={item.label} note={item.note} tone={index === 0 ? "strong" : "default"} />
          ))}
        </div>
        <WireframeBlock label={items[3]?.label ?? "Future visual placeholder"} note="Placeholder only. No final imagery, motion, 3D, or dashboard UI in Phase 10A." tone="visual" className="min-h-48" />
      </div>
    );
  }

  if (section.variant === "split") {
    return (
      <div className="grid gap-4 lg:grid-cols-2">
        <WireframeBlock label={items[0]?.label ?? "Primary content"} note={items[0]?.note} tone="strong" className="min-h-40" />
        <div className="grid gap-3">
          {items.slice(1).map((item) => (
            <WireframeBlock key={item.label} label={item.label} note={item.note} />
          ))}
        </div>
      </div>
    );
  }

  if (section.variant === "gallery") {
    return (
      <Grid columns={3}>
        {(items.length ? items : [{ label: "Visual placeholder" }]).map((item, index) => (
          <WireframeBlock key={`${item.label}-${index}`} label={item.label} note={item.note} tone={index === 0 ? "visual" : "default"} className="min-h-36" />
        ))}
      </Grid>
    );
  }

  if (section.variant === "form") {
    return (
      <div className="grid gap-3">
        {items.map((item) => (
          <WireframeBlock key={item.label} label={item.label} note={item.note} />
        ))}
        <WireframeBlock label={section.cta} tone="cta" />
      </div>
    );
  }

  if (section.variant === "cta") {
    return (
      <div className="grid gap-4 lg:grid-cols-[1fr_0.45fr]">
        <WireframeBlock label={items[0]?.label ?? section.title} note={section.purpose} tone="strong" className="min-h-32" />
        <WireframeBlock label={section.cta} tone="cta" className="min-h-32" />
      </div>
    );
  }

  return (
    <Grid columns={items.length > 4 ? 4 : 3}>
      {items.map((item) => (
        <WireframeBlock key={item.label} label={item.label} note={item.note} />
      ))}
    </Grid>
  );
}

export function WireframeSection({ section, index }: WireframeSectionProps) {
  return (
    <Card variant="feature" className="grid gap-6">
      <div className="grid gap-4 lg:grid-cols-[0.35fr_1fr]">
        <div>
          <Badge tone="brand">Section {index + 1}</Badge>
          <h3 className="ds-h4 mt-4 text-[var(--text-primary)]">{section.title}</h3>
        </div>
        <div className="grid gap-4">
          <p className="ds-body-md text-[var(--text-secondary)]">{section.purpose}</p>
          <div className="grid gap-3 md:grid-cols-2">
            <WireframeBlock label="CTA placement" note={section.cta} tone="cta" />
            <WireframeBlock label="Future UI / motion notes" note={section.notes} />
          </div>
        </div>
      </div>
      <div className="grid gap-3">
        <p className="ds-meta text-[var(--text-muted)]">Design system component mapping</p>
        <div className="flex flex-wrap gap-2">
          {getSectionComponents(section).map((component) => (
            <Badge key={component} tone="neutral">
              {component}
            </Badge>
          ))}
        </div>
      </div>
      <LayoutPreview section={section} />
    </Card>
  );
}
