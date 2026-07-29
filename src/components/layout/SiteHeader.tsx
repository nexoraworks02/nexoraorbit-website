"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/cn";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/company/about", label: "Company" },
  { href: "/insights", label: "Insights" },
  { href: "/company/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-default)] bg-[var(--surface-overlay)] backdrop-blur-[var(--blur-md)]">
      <Container>
        <nav className="flex min-h-16 items-center justify-between gap-4 py-3" aria-label="Main navigation">
          <Link href="/" className="ds-focus-ring flex min-w-0 items-center rounded-[var(--radius-md)]" onClick={() => setOpen(false)} aria-label="NEXORA ORBIT home">
            <Logo variant="full" size="md" />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "ds-focus-ring rounded-[var(--radius-sm)] text-sm font-semibold transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
                    active ? "text-[var(--text-accent)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="nx-cta-primary ds-focus-ring inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border border-transparent bg-[var(--gradient-primary)] px-5 py-3 text-sm font-semibold text-[var(--white)] shadow-[var(--glow-blue-soft)] transition duration-[var(--duration-fast)] hover:-translate-y-px hover:shadow-[var(--glow-blue-strong)]"
            >
              Book a Consultation
            </Link>
          </div>

          <button
            type="button"
            className="ds-focus-ring inline-flex size-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--surface-panel)] text-[var(--text-primary)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="site-mobile-menu"
          >
            <span className="grid gap-1.5" aria-hidden="true">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </nav>
      </Container>

      <div
        id="site-mobile-menu"
        className="nx-mobile-menu border-t border-[var(--border-default)] bg-[var(--surface-base)] lg:hidden"
        data-open={open}
        inert={!open}
      >
        <div className="min-h-0 overflow-hidden">
          <Container className="grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="ds-focus-ring rounded-[var(--radius-md)] px-3 py-3 text-sm font-semibold text-[var(--text-secondary)] transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:bg-[var(--surface-panel)] hover:text-[var(--text-primary)]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="nx-cta-primary ds-focus-ring mt-2 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border border-transparent bg-[var(--gradient-primary)] px-5 py-3 text-center text-sm font-semibold text-[var(--white)]"
            >
              Book a Consultation
            </Link>
          </Container>
        </div>
      </div>
    </header>
  );
}
