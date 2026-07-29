import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Grid } from "@/components/ui/Grid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contactEmail, contactFaqItems, contactMailtoHref, nextSteps, trustPoints } from "@/data/contact";
import { ContactCtaLink } from "@/components/contact/ContactCtaLink";
import { ProjectEnquiryForm } from "@/components/contact/ProjectEnquiryForm";

export function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="absolute inset-0 bg-[var(--gradient-cover-atmosphere)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-end">
          <div>
            <Badge tone="brand">Contact</Badge>
            <h1 className="ds-display-md mt-5 max-w-5xl text-[var(--text-primary)]">
              Tell us what you want to build, improve, or modernize.
            </h1>
            <p className="ds-body-lg mt-6 max-w-3xl text-[var(--text-secondary)]">
              Share your goals, project stage, timeline, and key challenges. We will review the context and help you identify the next practical step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactCtaLink href="#project-enquiry">Submit Project Enquiry</ContactCtaLink>
              <ContactCtaLink href={contactMailtoHref} variant="glass">
                Email Directly
              </ContactCtaLink>
            </div>
          </div>
          <GlassPanel className="grid gap-5 p-6">
            <p className="ds-meta text-[var(--text-muted)]">Enquiry focus</p>
            {["Goals", "Stage", "Constraints", "Next step"].map((item) => (
              <div key={item} className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-panel)] p-4">
                <p className="text-sm font-semibold text-[var(--text-primary)]">{item}</p>
              </div>
            ))}
          </GlassPanel>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container>
          <GlassPanel className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <Badge tone="brand">Consultation Promise</Badge>
              <h2 className="ds-h2 mt-5 max-w-3xl text-[var(--text-primary)]">No hard selling. No generic package push.</h2>
              <p className="ds-body-md mt-5 max-w-2xl text-[var(--text-secondary)]">
                The first conversation is designed to clarify fit, direction, priorities, and the system your business needs before execution begins.
              </p>
            </div>
            <div className="grid gap-3">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-panel)] p-4">
                  <span className="size-2 shrink-0 rounded-[var(--radius-full)] bg-[var(--accent-cyan)] shadow-[var(--glow-cyan-data)]" />
                  <span className="text-sm font-semibold text-[var(--text-primary)]">{point}</span>
                </div>
              ))}
            </div>
          </GlassPanel>
        </Container>
      </section>

      <section id="project-enquiry" className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionHeader
            eyebrow="Project Enquiry"
            title="Give us enough context to respond usefully."
            description="This form is intentionally practical: no unnecessary sensitive information, no fake backend, and no promise that a form service is already connected."
          />
          <ProjectEnquiryForm />
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container>
          <Card variant="glass" className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <Badge tone="neutral">Direct Contact Options</Badge>
              <h2 className="ds-h3 mt-5 text-[var(--text-primary)]">Prefer direct communication?</h2>
              <p className="ds-body-md mt-5 text-[var(--text-secondary)]">
                Email us with your company, service need, project stage, and the outcome you want to achieve.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-[var(--text-secondary)]">
                <p>
                  <span className="font-semibold text-[var(--text-primary)]">Email:</span>{" "}
                  <a className="ds-focus-ring rounded-[var(--radius-xs)] text-[var(--text-accent)]" href={contactMailtoHref}>
                    {contactEmail}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-[var(--text-primary)]">Region:</span> Available for remote and international collaboration.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <ContactCtaLink href={contactMailtoHref} variant="glass">
                Email Directly
              </ContactCtaLink>
              <ContactCtaLink href="/services" variant="glass">
                View Services
              </ContactCtaLink>
              <ContactCtaLink href="/company/process" variant="glass">
                See Our Process
              </ContactCtaLink>
            </div>
          </Card>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10">
          <SectionHeader
            eyebrow="What Happens Next"
            title="A calm path from enquiry to decision."
            description="The process is designed to clarify fit and reduce uncertainty before any proposal or execution plan."
          />
          <Grid columns={4}>
            {nextSteps.map((step, index) => (
              <Card key={step} variant="feature" className="grid min-h-56 content-start gap-5">
                <span className="grid size-11 place-items-center rounded-[var(--radius-full)] border border-[var(--border-brand)] bg-[var(--tone-brand-bg)] text-sm font-bold text-[var(--text-accent)]">
                  {index + 1}
                </span>
                <h2 className="ds-h6 text-[var(--text-primary)]">{step}</h2>
              </Card>
            ))}
          </Grid>
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Contact FAQ"
            title="Common questions before starting."
            description="Short answers for scope, collaboration, and fit before you submit an enquiry."
          />
          <Accordion defaultOpenId="consultation-process" items={contactFaqItems} />
        </Container>
      </section>

      <section className="scroll-mt-28 py-16 md:py-24">
        <Container>
          <GlassPanel className="relative overflow-hidden p-8 md:p-12">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-[var(--radius-full)] bg-[radial-gradient(circle,rgba(37,99,255,0.18),transparent_64%)] blur-[var(--blur-xl)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <Badge tone="brand">Final CTA</Badge>
                <h2 className="ds-h2 mt-5 max-w-3xl text-[var(--text-primary)]">Ready to clarify the system behind the request?</h2>
                <p className="ds-body-md mt-5 max-w-2xl text-[var(--text-secondary)]">
                  Send a focused enquiry or email directly. We will help identify the next practical step.
                </p>
              </div>
              <ContactCtaLink href="#project-enquiry">Submit Project Enquiry</ContactCtaLink>
            </div>
          </GlassPanel>
        </Container>
      </section>
    </>
  );
}
