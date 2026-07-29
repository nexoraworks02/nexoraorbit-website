import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "NEXORA ORBIT Design System",
  },
  description: "Code-first foundation for intelligent digital systems.",
  keywords: ["NEXORA ORBIT", "design system", "code-first design system", "design tokens"],
  openGraph: {
    title: "NEXORA ORBIT Design System",
    description: "Code-first foundation for intelligent digital systems.",
    siteName: "NEXORA ORBIT",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "NEXORA ORBIT Design System",
    description: "Code-first foundation for intelligent digital systems.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignSystemLayout({ children }: { children: React.ReactNode }) {
  return children;
}
