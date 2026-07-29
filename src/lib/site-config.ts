/**
 * NEXORA ORBIT - Centralized site configuration.
 * Single source of truth for brand name, domain, URL, tagline, description,
 * and public contact email. Import from here instead of hardcoding values.
 */
export const siteConfig = {
  name: "NEXORA ORBIT",
  domain: "nexoraorbit.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nexoraorbit.com",
  tagline: "Build. Transform. Innovate.",
  description:
    "NEXORA ORBIT builds intelligent digital systems for companies ready to scale through software engineering, AI solutions, cloud architecture, mobile apps, web development, branding, and digital growth.",
  email: "hello.nexoraorbit@gmail.com",
} as const;

export type SiteConfig = typeof siteConfig;
