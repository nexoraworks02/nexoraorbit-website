import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Grid } from "@/components/ui/Grid";
import { Logo } from "@/components/brand/Logo";

const footerColumns = {
  Services: [
    { href: "/services", label: "Services" },
    { href: "/services/software-engineering", label: "Software" },
    { href: "/services/ai-solutions", label: "AI Solutions" },
    { href: "/services/cloud-engineering", label: "Cloud" },
  ],
  Company: [
    { href: "/company/about", label: "About" },
    { href: "/company/process", label: "Process" },
    { href: "/company/careers", label: "Careers" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  "Work & Insights": [
    { href: "/work", label: "Work" },
    { href: "/insights", label: "Insights" },
  ],
  Contact: [
    { href: "/contact", label: "Book a Consultation" },
    { href: "/contact", label: "Project Enquiry" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-default)] bg-[var(--surface-base)] py-12 text-[var(--text-primary)]">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr]">
        <div>
          <Link href="/" className="ds-focus-ring inline-flex items-center rounded-[var(--radius-md)]" aria-label="NEXORA ORBIT home">
            <Logo variant="footer" size="lg" />
          </Link>
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
                    <Link
                      className="ds-focus-ring rounded-[var(--radius-xs)] text-sm text-[var(--text-secondary)] transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-[var(--text-primary)]"
                      href={link.href}
                    >
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
