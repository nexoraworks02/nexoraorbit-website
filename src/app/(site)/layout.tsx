import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "NEXORA ORBIT",
    template: "%s | NEXORA ORBIT",
  },
  description:
    "NEXORA ORBIT builds intelligent digital systems for companies ready to scale through software engineering, AI solutions, cloud architecture, mobile apps, web development, branding, and digital growth.",
  keywords: [
    "NEXORA ORBIT",
    "software engineering",
    "AI solutions",
    "cloud architecture",
    "mobile app development",
    "web development",
    "branding",
    "digital growth",
  ],
  openGraph: {
    title: "NEXORA ORBIT",
    description: "Complex technology, shaped into elegant systems.",
    url: absoluteUrl("/"),
    siteName: "NEXORA ORBIT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXORA ORBIT",
    description: "Complex technology, shaped into elegant systems.",
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-theme="dark" className="nx-ambient-field min-h-screen bg-[var(--surface-base)] font-[var(--font-sans-ds)] text-[var(--text-primary)]">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
