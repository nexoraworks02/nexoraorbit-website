import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Grid } from "@/components/ui/Grid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HeroScrollExperience } from "@/components/hero-scroll/HeroScrollExperience";
import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

const capabilities = [
  "Software Engineering",
  "AI Solutions",
  "Mobile Apps",
  "Web Development",
  "Cloud Engineering",
  "Branding",
  "Digital Marketing",
  "Technology Consulting",
];

const serviceGroups = [
  {
    label: "Build",
    description: "Product platforms, websites, mobile apps, and engineered digital foundations.",
    services: ["Software Engineering", "Web Development", "Mobile App Development"],
  },
  {
    label: "Intelligence",
    description: "AI-enabled workflows and data-supported systems with practical business purpose.",
    services: ["AI Solutions", "Automation Workflows", "Data-supported Systems"],
  },
  {
    label: "Scale",
    description: "Cloud architecture, infrastructure planning, and technology decisions built for growth.",
    services: ["Cloud Engineering", "Technology Consulting", "Infrastructure Planning"],
  },
  {
    label: "Grow",
    description: "Brand systems and digital growth channels shaped around clarity and conversion.",
    services: ["Branding", "Digital Marketing", "SEO / CRO"],
  },
];

const workPlaceholders = ["Product Platform System", "AI Workflow Architecture", "Brand + Web Growth System"];
const processSteps = [
  {
    title: "Discover",
    copy: "Clarify goals, users, constraints, risks, and business context.",
  },
  {
    title: "Strategize",
    copy: "Define the right product, platform, brand, or growth path.",
  },
  {
    title: "Design",
    copy: "Shape interfaces, journeys, architecture, and content.",
  },
  {
    title: "Engineer",
    copy: "Build scalable, maintainable, performance-ready systems.",
  },
  {
    title: "Launch",
    copy: "Prepare QA, deployment, analytics, and handoff.",
  },
  {
    title: "Optimize",
    copy: "Improve from usage data, feedback, and business priorities.",
  },
];

const reasons = [
  {
    title: "Strategy before output",
    copy: "We define the system before designing the screen or writing production code.",
  },
  {
    title: "Engineering-led quality",
    copy: "Architecture, performance, accessibility, and maintainability guide the build.",
  },
  {
    title: "Premium digital presence",
    copy: "Interfaces are designed to earn trust before the first conversation.",
  },
  {
    title: "Practical AI thinking",
    copy: "Automation is shaped around real workflows, oversight, and measurable use.",
  },
  {
    title: "Conversion awareness",
    copy: "Pages, forms, and journeys are structured to move qualified users forward.",
  },
  {
    title: "Global delivery standards",
    copy: "Communication, documentation, and handoff are treated as part of the product.",
  },
];

const clientFits = [
  {
    title: "Startups",
    copy: "For founders who need a credible digital foundation, faster product clarity, and systems that can evolve.",
  },
  {
    title: "Growing Businesses",
    copy: "For teams modernizing scattered tools, outdated websites, manual operations, or underperforming digital channels.",
  },
  {
    title: "Enterprise Teams",
    copy: "For organizations that need focused technical execution, calm delivery, and clean stakeholder communication.",
  },
  {
    title: "International Clients",
    copy: "For companies that expect global standards, precise communication, and delivery discipline across time zones.",
  },
];

const insights = [
  "How to plan an AI workflow before building it",
  "What makes a website conversion-ready",
  "Why cloud architecture affects product growth",
];

const footerColumns = {
  Services: [
    { href: "/services", label: "Software" },
    { href: "/services", label: "AI Solutions" },
    { href: "/services", label: "Cloud" },
    { href: "/services", label: "Web & Mobile" },
  ],
  Company: [
    { href: "/company/about", label: "Company" },
    { href: "/company/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  "Work & Insights": [
    { href: "/work", label: "Work" },
    { href: "/insights", label: "Insights" },
  ],
  Contact: [
    { href: "/contact", label: "Book a Consultation" },
    { href: "/contact", label: "Project Enquiry" },
  ],
};

const sectionClass = "scroll-mt-28 py-16 md:py-24";

type LinkButtonVariant = "primary" | "glass";

function LinkButton({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: LinkButtonVariant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "ds-focus-ring inline-flex min-h-12 max-w-full items-center justify-center rounded-[var(--radius-md)] border px-6 py-4 text-center text-base font-semibold transition duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:-translate-y-px active:translate-y-0 active:scale-[0.99]",
        variant === "primary"
          ? "nx-cta-primary border-transparent bg-[var(--gradient-primary)] text-[var(--white)] shadow-[var(--glow-blue-soft)] hover:shadow-[var(--glow-blue-strong)]"
          : "border-[var(--border-default)] bg-[var(--surface-glass)] text-[var(--text-primary)] shadow-[var(--shadow-dark-panel)] backdrop-blur-[var(--blur-md)] hover:border-[var(--border-brand)]",
        className,
      )}
    >
      <span className="min-w-0 break-words">{children}</span>
    </Link>
  );
}

function PreviewHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-default)] bg-[var(--surface-overlay)] backdrop-blur-[var(--blur-md)]">
      <Container className="flex min-h-16 flex-wrap items-center justify-between gap-3 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid size-10 place-items-center rounded-[var(--radius-md)] border border-[var(--border-brand)] bg-[var(--tone-brand-bg)] text-sm font-black text-[var(--text-accent)]">
            NX
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[var(--text-primary)]">NEXORA ORBIT</p>
            <p className="text-xs text-[var(--text-muted)]">Homepage UI Direction</p>
          </div>
        </div>
        <Badge tone="brand">Phase 10B / Visual Preview</Badge>
      </Container>
    </header>
  );
}

function AbstractProjectVisual({ index }: { index: number }) {
  return (
    <div className="relative min-h-36 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[rgba(8,13,31,0.5)] p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,255,0.14),transparent_42%),radial-gradient(circle_at_86%_20%,rgba(124,58,237,0.12),transparent_34%)]" />
      <div className="relative grid h-full gap-3">
        <div className="flex items-center justify-between gap-3">
          <span className="h-2 w-20 rounded-[var(--radius-full)] bg-[var(--border-strong)]" />
          <span className="size-2 rounded-[var(--radius-full)] bg-[var(--accent-cyan)] shadow-[var(--glow-cyan-data)]" />
        </div>
        <div className={cn("grid gap-2", index === 1 ? "grid-cols-[0.7fr_1.3fr]" : "grid-cols-[1.2fr_0.8fr]")}>
          <span className="min-h-20 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--surface-panel)]" />
          <span className="min-h-20 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-glass)]" />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[0, 1, 2, 3].map((item) => (
            <span
              key={item}
              className={cn(
                "h-2 rounded-[var(--radius-full)]",
                item === index ? "bg-[var(--accent-cyan)] shadow-[var(--glow-cyan-data)]" : "bg-[var(--border-default)]",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CapabilitySnapshot() {
  return (
    <section id="capabilities" className="scroll-mt-28 py-8">
      <Container>
        <div className="flex flex-wrap gap-3 rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--surface-panel)] p-4">
          {capabilities.map((capability) => (
            <Chip key={capability} tone="neutral" className="cursor-default">
              {capability}
            </Chip>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TransformationStatement() {
  return (
    <section
      id="transformation"
      data-theme="light"
      className={cn(
        sectionClass,
        "bg-[radial-gradient(circle_at_14%_0%,rgba(37,99,255,0.08),transparent_34%),linear-gradient(180deg,#f8fafc,#eef3fb)] text-[var(--text-primary)]",
      )}
    >
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeader
          eyebrow="Transformation"
          title="Businesses do not need isolated digital assets. They need systems that move together."
        />
        <div className="grid gap-6">
          <p className="ds-body-lg text-[var(--text-secondary)]">
            From product platforms and automation workflows to brand systems and conversion-ready websites, NEXORA ORBIT
            turns fragmented digital needs into structured digital infrastructure.
          </p>
          <Grid columns={3}>
            {["Align strategy", "Engineer systems", "Improve outcomes"].map((item) => (
              <Card key={item} variant="feature" className="border-[rgba(15,23,42,0.1)] bg-[rgba(255,255,255,0.72)] shadow-[var(--shadow-1)]">
                <span className="ds-h6 text-[var(--text-primary)]">{item}</span>
              </Card>
            ))}
          </Grid>
        </div>
      </Container>
    </section>
  );
}

function ServicesOverview() {
  return (
    <section id="services" className={sectionClass}>
      <Container className="grid gap-10">
        <SectionHeader
          eyebrow="Services"
          title="Four ways to shape a stronger digital system."
          description="The service model is organized by buyer intent, from building core products to improving growth infrastructure."
        />
        <Grid columns={4}>
          {serviceGroups.map((group) => (
            <Card key={group.label} variant="service" className="group grid min-h-72 content-between gap-8">
              <div>
                <div className="mb-5 flex items-center justify-between gap-3">
                  <Badge tone="brand">{group.label}</Badge>
                  <span className="nx-service-node size-3 rounded-[var(--radius-full)] bg-[var(--accent-cyan)] opacity-70 shadow-[var(--glow-cyan-data)]" />
                </div>
                <p className="ds-body-sm text-[var(--text-secondary)]">{group.description}</p>
              </div>
              <ul className="grid gap-2" aria-label={`${group.label} service links`}>
                {group.services.map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="ds-focus-ring block rounded-[var(--radius-sm)] border border-transparent py-1 text-sm font-semibold text-[var(--text-primary)] transition duration-[var(--duration-fast)] hover:border-[var(--border-default)] hover:text-[var(--text-accent)]"
                      aria-label={`${service} service preview`}
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

function ProofPlaceholder() {
  return (
    <section id="work" className={sectionClass}>
      <Container className="grid gap-10">
        <SectionHeader
          eyebrow="Work"
          title="Proof should show the thinking behind the build."
          description="Case studies will present context, decisions, execution, and outcomes as approved projects become ready for publication."
        />
        <Grid columns={3}>
          {workPlaceholders.map((item, index) => (
            <Card key={item} variant="glass" className="grid min-h-72 content-between gap-8">
              <div>
                <Badge tone="neutral">Placeholder</Badge>
                <h3 className="ds-h4 mt-5 text-[var(--text-primary)]">{item}</h3>
              </div>
              <AbstractProjectVisual index={index} />
              <p className="ds-body-sm text-[var(--text-muted)]">Preview structure only &mdash; replace with approved case study.</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

function ProcessPreview() {
  return (
    <section id="process" className={sectionClass}>
      <Container className="grid gap-12">
        <SectionHeader
          eyebrow="Process"
          title="A clear path from uncertainty to shipped digital systems."
          description="The process is designed to reduce ambiguity before execution and preserve quality through launch."
        />
        <div className="relative grid gap-5 md:grid-cols-3 lg:grid-cols-6">
          <div className="nx-timeline-line absolute left-0 right-0 top-6 hidden h-px bg-[var(--border-default)] lg:block" />
          {processSteps.map((step, index) => (
            <div key={step.title} className="nx-process-step relative grid gap-4 rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--surface-panel)] p-5" data-motion-card="">
              <span className="grid size-12 place-items-center rounded-[var(--radius-full)] border border-[var(--border-brand)] bg-[var(--tone-brand-bg)] text-sm font-bold text-[var(--text-accent)] shadow-[var(--glow-blue-soft)]" data-step-number="">
                {index + 1}
              </span>
              <div>
                <h3 className="ds-h6 text-[var(--text-primary)]">{step.title}</h3>
                <p className="ds-body-sm mt-3 text-[var(--text-secondary)]">{step.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WhyNexora() {
  return (
    <section id="why-nexora" className={sectionClass}>
      <Container className="grid gap-10">
        <SectionHeader eyebrow="Why NEXORA ORBIT" title="Engineering discipline with premium digital judgment." />
        <Grid columns={3}>
          {reasons.map((reason) => (
            <Card key={reason.title} variant="feature" className="min-h-52">
              <div className="mb-5 h-1 w-12 rounded-[var(--radius-full)] bg-[var(--gradient-primary)]" />
              <h3 className="ds-h5 text-[var(--text-primary)]">{reason.title}</h3>
              <p className="ds-body-sm mt-4 text-[var(--text-secondary)]">{reason.copy}</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

function ClientFit() {
  return (
    <section id="client-fit" className={sectionClass}>
      <Container className="grid gap-10">
        <SectionHeader
          eyebrow="Client Fit"
          title="Built for teams that need clarity, quality, and forward motion."
          description="The model supports early product decisions, modernization work, enterprise delivery, and international collaboration."
        />
        <Grid columns={4}>
          {clientFits.map((fit) => (
            <Card key={fit.title} variant="standard" className="min-h-56">
              <h3 className="ds-h5 text-[var(--text-primary)]">{fit.title}</h3>
              <p className="ds-body-sm mt-4 text-[var(--text-secondary)]">{fit.copy}</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

function InsightsPreview() {
  return (
    <section id="insights" className={sectionClass}>
      <Container className="grid gap-10">
        <SectionHeader eyebrow="Insights" title="Practical thinking for serious digital decisions." />
        <Grid columns={3}>
          {insights.map((insight) => (
            <Link
              key={insight}
              href="/insights"
              className="ds-focus-ring rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--surface-panel)] p-6 text-[var(--text-primary)] transition duration-[var(--duration-base)] hover:-translate-y-[3px] hover:border-[var(--border-brand)] hover:shadow-[var(--glow-blue-soft)]"
              aria-label={`${insight} placeholder insight topic`}
              data-motion-card=""
            >
              <Badge tone="neutral">Placeholder topic</Badge>
              <h3 className="ds-h5 mt-6">{insight}</h3>
            </Link>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="final-cta" className={sectionClass}>
      <Container>
        <GlassPanel className="relative overflow-hidden p-8 md:p-12">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-[var(--radius-full)] bg-[radial-gradient(circle,rgba(37,99,255,0.2),transparent_64%)] blur-[var(--blur-xl)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <Badge tone="brand">Next Step</Badge>
              <h2 className="ds-h2 mt-5 max-w-3xl text-[var(--text-primary)]">
                Ready to shape the digital system behind your next stage?
              </h2>
              <p className="ds-body-md mt-5 max-w-2xl text-[var(--text-secondary)]">
                Tell us what you are building, improving, or modernizing. We will help clarify the right path before
                execution begins.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <LinkButton href="/contact">Book a Consultation</LinkButton>
              <LinkButton href="/services" variant="glass">
                Explore Services
              </LinkButton>
            </div>
          </div>
        </GlassPanel>
      </Container>
    </section>
  );
}

function FooterPreview() {
  return (
    <footer id="footer-preview" className="scroll-mt-28 border-t border-[var(--border-default)] py-12">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr]">
        <div>
          <p className="ds-h5 text-[var(--text-primary)]">NEXORA ORBIT</p>
          <p className="ds-body-sm mt-4 max-w-md text-[var(--text-secondary)]">
            NEXORA ORBIT builds intelligent digital systems for companies ready to scale through software, AI, cloud,
            web, mobile, brand, and growth.
          </p>
        </div>
        <Grid columns={4} className="gap-8">
          {Object.entries(footerColumns).map(([column, links]) => (
            <div key={column}>
              <h2 className="ds-meta text-[var(--text-muted)]">{column}</h2>
              <ul className="mt-4 grid gap-3">
                {links.map((link) => (
                  <li key={`${column}-${link.label}`}>
                    <Link className="ds-focus-ring rounded-[var(--radius-xs)] text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Grid>
      </Container>
    </footer>
  );
}

type PreviewBoundaryProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

function PreviewBoundary({ children, className, ...props }: PreviewBoundaryProps) {
  return (
    <div className={cn("bg-[var(--surface-base)] text-[var(--text-primary)]", className)} {...props}>
      {children}
    </div>
  );
}

export function HomepagePreview() {
  return (
    <PreviewBoundary data-theme="dark" className="min-h-screen scroll-pt-28 font-[var(--font-sans-ds)]">
      <PreviewHeader />
      <main>
        <HomepageSections />
      </main>
      <FooterPreview />
    </PreviewBoundary>
  );
}

export function HomepageSections() {
  return (
    <>
      <HeroScrollExperience variant="site" />
      <CapabilitySnapshot />
      <TransformationStatement />
      <ServicesOverview />
      <ProofPlaceholder />
      <ProcessPreview />
      <WhyNexora />
      <ClientFit />
      <InsightsPreview />
      <FinalCTA />
    </>
  );
}
