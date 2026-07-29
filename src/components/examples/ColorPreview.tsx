import { Card } from "@/components/ui/Card";
import { Grid } from "@/components/ui/Grid";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Swatch = {
  label: string;
  token: string;
  value: string;
};

const groups: Array<{ title: string; description: string; swatches: Swatch[] }> = [
  {
    title: "Brand",
    description: "Signature navy, blue, and purple values for brand recognition and primary action.",
    swatches: [
      { label: "Navy 950", token: "--brand-navy-950", value: "#050816" },
      { label: "Navy 900", token: "--brand-navy-900", value: "#080D1F" },
      { label: "Blue 600", token: "--brand-blue-600", value: "#2563FF" },
      { label: "Blue 500", token: "--brand-blue-500", value: "#3B82FF" },
      { label: "Blue 400", token: "--brand-blue-400", value: "#60A5FA" },
      { label: "Purple 600", token: "--brand-purple-600", value: "#7C3AED" },
      { label: "Purple 500", token: "--brand-purple-500", value: "#8B5CF6" },
    ],
  },
  {
    title: "Neutral",
    description: "Near-black, slate, and white values for calm structure and readable surfaces.",
    swatches: [
      { label: "Ink 950", token: "--ink-950", value: "#030712" },
      { label: "Ink 900", token: "--ink-900", value: "#0B1020" },
      { label: "Slate 800", token: "--slate-800", value: "#1E293B" },
      { label: "Slate 600", token: "--slate-600", value: "#475569" },
      { label: "Slate 400", token: "--slate-400", value: "#94A3B8" },
      { label: "Slate 200", token: "--slate-200", value: "#E2E8F0" },
      { label: "Slate 50", token: "--slate-50", value: "#F8FAFC" },
    ],
  },
  {
    title: "Accent and Status",
    description: "Restrained support colors for AI, data, success, warning, error, and information states.",
    swatches: [
      { label: "Cyan", token: "--accent-cyan", value: "#22D3EE" },
      { label: "Indigo", token: "--accent-indigo", value: "#6366F1" },
      { label: "Violet", token: "--accent-violet", value: "#A855F7" },
      { label: "Teal", token: "--accent-teal", value: "#14B8A6" },
      { label: "Success", token: "--status-success", value: "#22C55E" },
      { label: "Warning", token: "--status-warning", value: "#F59E0B" },
      { label: "Error", token: "--status-error", value: "#EF4444" },
    ],
  },
  {
    title: "Semantic Surfaces",
    description: "Theme-aware roles consumed by components instead of primitive color names.",
    swatches: [
      { label: "Surface base", token: "--surface-base", value: "theme" },
      { label: "Surface raised", token: "--surface-raised", value: "theme" },
      { label: "Surface panel", token: "--surface-panel", value: "theme" },
      { label: "Surface glass", token: "--surface-glass", value: "theme" },
      { label: "Text primary", token: "--text-primary", value: "theme" },
      { label: "Text secondary", token: "--text-secondary", value: "theme" },
      { label: "Border default", token: "--border-default", value: "theme" },
      { label: "Border brand", token: "--border-brand", value: "theme" },
    ],
  },
];

const gradients = [
  { label: "Primary", token: "--gradient-primary" },
  { label: "Deep background", token: "--gradient-background-deep" },
  { label: "Glass reflection", token: "--gradient-glass-reflection" },
];

function SwatchCard({ swatch }: { swatch: Swatch }) {
  return (
    <Card variant="feature" className="p-4">
      <span
        className="mb-4 block h-16 rounded-[var(--radius-md)] border border-[var(--border-default)]"
        style={{ background: `var(${swatch.token})` }}
      />
      <p className="text-sm font-semibold text-[var(--text-primary)]">{swatch.label}</p>
      <p className="ds-mono-sm mt-1 text-[var(--text-muted)]">{swatch.token}</p>
      <p className="ds-mono-sm mt-1 text-[var(--text-muted)]">{swatch.value}</p>
    </Card>
  );
}

export function ColorPreview() {
  return (
    <section id="colors" className="grid gap-8">
      <SectionHeader
        eyebrow="Color"
        title="Dark-first color with precise light support"
        description="Primitive colors define the raw palette. Semantic variables define how components behave in each theme."
      />
      {groups.map((group) => (
        <div key={group.title} className="grid gap-4">
          <div>
            <p className="ds-h4">{group.title}</p>
            <p className="ds-body-sm mt-2 max-w-2xl text-[var(--text-secondary)]">{group.description}</p>
          </div>
          <Grid columns={4}>
            {group.swatches.map((swatch) => (
              <SwatchCard key={swatch.token} swatch={swatch} />
            ))}
          </Grid>
        </div>
      ))}
      <Grid columns={3}>
        {gradients.map((gradient) => (
          <Card
            key={gradient.token}
            variant="feature"
            className="min-h-40 text-[var(--white)]"
            style={{ background: `var(${gradient.token})` }}
          >
            <p className="ds-h4">{gradient.label}</p>
            <p className="ds-mono-sm mt-3 text-[var(--white)] opacity-80">{gradient.token}</p>
          </Card>
        ))}
      </Grid>
    </section>
  );
}
