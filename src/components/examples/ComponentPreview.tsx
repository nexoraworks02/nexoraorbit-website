import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Grid } from "@/components/ui/Grid";
import { Input } from "@/components/ui/Input";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Select } from "@/components/ui/Select";
import { Surface } from "@/components/ui/Surface";
import { Tabs } from "@/components/ui/Tabs";
import { Textarea } from "@/components/ui/Textarea";

const accordionItems = [
  {
    id: "motion",
    title: "How should motion be used?",
    content: "Motion must improve trust, clarity, premium perception, or conversion confidence.",
  },
  {
    id: "tokens",
    title: "What should components consume?",
    content: "Components should consume semantic tokens rather than raw one-off values.",
  },
];

const tabItems = [
  {
    id: "dark",
    label: "Dark",
    content: "Dark theme is the signature environment for NEXORA ORBIT.",
  },
  {
    id: "light",
    label: "Light",
    content: "Light theme is editorial, precise, and built for readability.",
  },
  {
    id: "motion",
    label: "Motion",
    content: "Motion is restrained, purposeful, and accessibility-aware.",
  },
];

const serviceOptions = [
  { label: "Software Engineering", value: "software" },
  { label: "AI Solutions", value: "ai" },
  { label: "Cloud Engineering", value: "cloud" },
];

export function ComponentPreview() {
  return (
    <section id="components" className="grid gap-8">
      <SectionHeader
        eyebrow="Components"
        title="Reusable primitives, not final marketing sections"
        description="These components establish accessible building blocks for future pages and products."
      />

      <Grid columns={2}>
        <Card variant="feature" className="grid gap-4">
          <p className="ds-h4">Buttons</p>
          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="glass">Glass</Button>
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Card>

        <Card variant="feature" className="grid gap-4">
          <p className="ds-h4">Badges and chips</p>
          <div className="flex flex-wrap gap-3">
            <Badge>Neutral</Badge>
            <Badge tone="brand">Brand</Badge>
            <Badge tone="success">Success</Badge>
            <Badge tone="warning">Warning</Badge>
            <Badge tone="error">Error</Badge>
            <Chip selected>Selected</Chip>
            <Chip tone="brand">Interactive</Chip>
          </div>
        </Card>
      </Grid>

      <Grid columns={3}>
        <Card variant="standard">
          <p className="ds-h4">Standard card</p>
          <p className="ds-body-sm mt-3 text-[var(--text-secondary)]">Default raised surface with semantic border.</p>
        </Card>
        <Card variant="service">
          <p className="ds-h4">Service card</p>
          <p className="ds-body-sm mt-3 text-[var(--text-secondary)]">Hover adds border tint and controlled glow.</p>
        </Card>
        <GlassPanel>
          <p className="relative ds-h4">Glass panel</p>
          <p className="relative ds-body-sm mt-3 text-[var(--text-secondary)]">Premium surface with text contrast preserved.</p>
        </GlassPanel>
      </Grid>

      <Grid columns={2}>
        <Surface variant="panel" className="grid gap-5 p-6">
          <p className="ds-h4">Form controls</p>
          <Input label="Name" name="name" placeholder="Your name" helperText="Visible labels are required." />
          <Input label="Email" name="email" type="email" placeholder="you@company.com" errorText="Enter a valid email address." />
          <Input label="Disabled field" name="disabled-field" placeholder="Unavailable" disabled helperText="Disabled states must remain visible." />
          <Select label="Service" name="service" options={serviceOptions} helperText="Native select keeps the foundation reliable." />
          <Textarea label="Project context" name="message" placeholder="Tell us what you want to build." />
        </Surface>

        <Surface variant="panel" className="grid gap-5 p-6">
          <p className="ds-h4">Disclosure primitives</p>
          <Accordion items={accordionItems} defaultOpenId="motion" />
          <Tabs items={tabItems} />
        </Surface>
      </Grid>
    </section>
  );
}
