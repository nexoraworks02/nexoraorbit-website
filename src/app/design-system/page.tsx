"use client";

import { ColorPreview } from "@/components/examples/ColorPreview";
import { ComponentPreview } from "@/components/examples/ComponentPreview";
import { EffectsPreview } from "@/components/examples/EffectsPreview";
import { GridPreview } from "@/components/examples/GridPreview";
import { TypographyPreview } from "@/components/examples/TypographyPreview";
import { DesignSystemFooter } from "@/components/layout/Footer";
import { DesignSystemHeader } from "@/components/layout/Header";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Grid } from "@/components/ui/Grid";
import { Input } from "@/components/ui/Input";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Surface } from "@/components/ui/Surface";

const rules = [
  "Use tokens, not random values.",
  "Dark theme is the signature environment.",
  "Light theme is editorial and precise.",
  "Motion must improve trust, clarity, premium perception, or conversion confidence.",
  "Avoid decorative glow overload.",
  "Avoid fake testimonials, fake metrics, and fake logos.",
  "Components must support accessibility states.",
  "No homepage UI until the design system is approved.",
];

const tokenGroups = [
  {
    label: "Spacing",
    tokens: ["--space-3", "--space-5", "--space-7", "--space-10"],
  },
  {
    label: "Radius",
    tokens: ["--radius-sm", "--radius-md", "--radius-lg", "--radius-2xl"],
  },
  {
    label: "Shadow",
    tokens: ["--shadow-1", "--shadow-2", "--shadow-3", "--shadow-dark-panel"],
  },
  {
    label: "Blur",
    tokens: ["--blur-sm", "--blur-md", "--blur-lg", "--blur-xl"],
  },
  {
    label: "Motion",
    tokens: ["--duration-fast", "--duration-base", "--duration-slow", "--duration-cinematic"],
  },
];

const sectionNav = [
  ["Tokens", "#tokens"],
  ["Typography", "#typography"],
  ["Colors", "#colors"],
  ["Effects", "#effects"],
  ["Grid", "#grid"],
  ["Components", "#components"],
  ["Accessibility", "#accessibility"],
  ["Rules", "#usage-rules"],
];

function ModeSurface({
  mode,
  title,
  description,
}: {
  mode: "dark" | "light";
  title: string;
  description: string;
}) {
  return (
    <div data-theme={mode} className="rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--surface-base)] p-5 text-[var(--text-primary)] shadow-[var(--shadow-2)]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="ds-h4">{title}</p>
          <p className="ds-body-sm mt-2 max-w-xl text-[var(--text-secondary)]">{description}</p>
        </div>
        <Badge tone="brand">{mode}</Badge>
      </div>
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <Card variant="feature">
          <p className="ds-h5">Shared card</p>
          <p className="ds-body-sm mt-3 text-[var(--text-secondary)]">
            The same component consumes semantic tokens in each environment.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button size="sm">Primary</Button>
            <Button size="sm" variant="secondary">
              Secondary
            </Button>
          </div>
        </Card>
        <Surface variant="panel" className="grid gap-4 p-5">
          <Input label="System field" name={`${mode}-system-field`} placeholder="Token-driven input" helperText="Label, helper text, border, and focus ring are theme-aware." />
        </Surface>
      </div>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <div data-theme="dark" className="min-h-screen bg-[var(--surface-base)] font-[var(--font-sans-ds)] text-[var(--text-primary)]">
      <DesignSystemHeader />
      <nav className="sticky top-[var(--ds-header-height)] z-30 border-b border-[var(--border-default)] bg-[var(--surface-overlay)] backdrop-blur-[var(--blur-md)]" aria-label="Design system sections">
        <Container className="flex gap-2 overflow-x-auto py-3">
          {sectionNav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="ds-focus-ring shrink-0 rounded-[var(--radius-full)] border border-[var(--border-default)] px-3 py-2 text-sm font-semibold text-[var(--text-secondary)] transition duration-[var(--duration-fast)] hover:border-[var(--border-brand)] hover:bg-[var(--surface-panel)] hover:text-[var(--text-primary)]"
            >
              {label}
            </a>
          ))}
        </Container>
      </nav>
      <main className="bg-[var(--app-background)]">
        <section className="ds-cover-atmosphere relative overflow-hidden border-b border-[var(--border-default)]">
          <Container className="grid min-h-[calc(100vh-var(--ds-shell-offset))] items-center gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
            <div className="max-w-4xl">
              <Badge tone="brand">Phase 9 - Design System Foundation</Badge>
              <h1 className="ds-display-md mt-6 max-w-4xl text-[var(--text-primary)]">
                NEXORA ORBIT Design System
              </h1>
              <p className="ds-body-lg mt-6 max-w-2xl text-[var(--text-secondary)]">
                Code-first foundation for intelligent digital systems.
              </p>
              <p className="ds-mono-sm mt-8 max-w-xl rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--surface-panel)] px-4 py-3 text-[var(--text-muted)]">
                Status: code-first foundations only. No homepage UI, final page sections, or production marketing layouts.
              </p>
            </div>
            <GlassPanel className="relative">
              <p className="relative ds-eyebrow text-[var(--text-accent)]">Creative North Star</p>
              <p className="relative ds-h2 mt-4">Complex technology, shaped into elegant systems.</p>
              <p className="relative ds-body-md mt-5 text-[var(--text-secondary)]">
                A calm technical operating layer for tokens, typography, effects, layout primitives, components, and accessibility states.
              </p>
            </GlassPanel>
          </Container>
        </section>

        <Container className="grid gap-16 py-16 md:gap-24 md:py-24">
          <section id="tokens" className="grid gap-8">
            <SectionHeader
              eyebrow="Tokens"
              title="Foundation tokens"
              description="Primitive values define the system. Components consume semantic variables so dark and light themes stay consistent."
            />
            <Grid columns={4}>
              {["Color", "Typography", "Spacing", "Radius", "Shadows", "Motion", "Glass", "Accessibility"].map((item) => (
                <Card key={item} variant="feature">
                  <p className="ds-h5">{item}</p>
                  <p className="ds-body-sm mt-3 text-[var(--text-secondary)]">Reusable foundation token.</p>
                </Card>
              ))}
            </Grid>
            <Grid columns={3}>
              {tokenGroups.map((group) => (
                <Card key={group.label} variant="standard" className="grid gap-4">
                  <p className="ds-h4">{group.label}</p>
                  <div className="grid gap-3">
                    {group.tokens.map((token) => (
                      <div key={token} className="grid gap-2">
                        <p className="ds-mono-sm break-words text-[var(--text-muted)]">{token}</p>
                        {group.label === "Spacing" ? (
                          <span
                            className="block h-3 rounded-[var(--radius-full)] bg-[var(--text-accent)]"
                            style={{ width: `var(${token})` }}
                          />
                        ) : null}
                        {group.label === "Radius" ? (
                          <span
                            className="block h-10 w-20 border border-[var(--border-brand)] bg-[var(--tone-brand-bg)]"
                            style={{ borderRadius: `var(${token})` }}
                          />
                        ) : null}
                        {group.label === "Shadow" ? (
                          <span
                            className="block h-10 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--surface-raised)]"
                            style={{ boxShadow: `var(${token})` }}
                          />
                        ) : null}
                        {group.label === "Blur" ? (
                          <span
                            className="block h-10 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--surface-glass)]"
                            style={{ backdropFilter: `blur(var(${token}))` }}
                          />
                        ) : null}
                        {group.label === "Motion" ? (
                          <span
                            className="ds-motion-safe block h-3 w-24 rounded-[var(--radius-full)] bg-[var(--text-accent)] transition-transform ease-[var(--ease-enter)] hover:translate-x-4"
                            style={{ transitionDuration: `var(${token})` }}
                          />
                        ) : null}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </Grid>
          </section>

          <TypographyPreview />
          <ColorPreview />
          <EffectsPreview />
          <GridPreview />
          <ComponentPreview />

          <section id="theme-demo" className="grid gap-8">
            <SectionHeader
              eyebrow="Theme Modes"
              title="Dark signature, light editorial"
              description="Dark remains the brand environment. Light mode is supported as a precise editorial surface for future products and documentation."
            />
            <Grid columns={2}>
              <ModeSurface
                mode="dark"
                title="Dark signature surface"
                description="Near-black, glass, blue-purple restraint, and high-contrast technical readability."
              />
              <ModeSurface
                mode="light"
                title="Light editorial surface"
                description="White and slate surfaces with dark ink text, restrained accents, and the same primitives."
              />
            </Grid>
          </section>

          <section id="accessibility" className="grid gap-8">
            <SectionHeader
              eyebrow="Accessibility"
              title="Interaction states are part of the system"
              description="Focus, disabled, loading, error, and reduced-motion behavior are required foundation states."
            />
            <Grid columns={2}>
              <Card variant="feature" className="grid gap-4">
                <p className="ds-h4">Focus</p>
                <p className="ds-body-sm mt-3 text-[var(--text-secondary)]">Every interactive primitive uses a visible focus ring.</p>
                <Button variant="secondary">Keyboard focus target</Button>
              </Card>
              <Card variant="feature" className="grid gap-4">
                <p className="ds-h4">Errors</p>
                <p className="ds-body-sm mt-3 text-[var(--text-secondary)]">Form errors use text and ARIA relationships, not color alone.</p>
                <Input label="Email" name="accessibility-email" placeholder="you@company.com" errorText="Enter a valid email address." />
              </Card>
              <Card variant="feature" className="grid gap-4">
                <p className="ds-h4">Disabled</p>
                <p className="ds-body-sm mt-3 text-[var(--text-secondary)]">Disabled states remain visible and communicate unavailable actions.</p>
                <Button disabled>Disabled button</Button>
              </Card>
              <Card variant="feature" className="grid gap-4">
                <p className="ds-h4">Helper text</p>
                <p className="ds-body-sm mt-3 text-[var(--text-secondary)]">Helper text is connected with aria-describedby on form primitives.</p>
                <Input label="Project code" name="accessibility-code" placeholder="NX-001" helperText="Short labels and helper text remain readable." />
              </Card>
            </Grid>
          </section>

          <section id="usage-rules" className="grid gap-8">
            <SectionHeader
              eyebrow="Usage Rules"
              title="System rules before page design"
              description="These rules prevent drift while the foundation is still being approved."
            />
            <Card variant="standard">
              <ul className="grid gap-3">
                {rules.map((rule) => (
                  <li key={rule} className="flex gap-3 text-[var(--text-secondary)]">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[var(--text-accent)]" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>
        </Container>
      </main>
      <DesignSystemFooter />
    </div>
  );
}
