import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/design-system",
        "/wireframes",
        "/ui",
        "/ui/homepage",
        "/hero-lab",
        "/hero-lab-scroll",
        "/thank-you",
        "/maintenance",
        "/not-found",
        "/work/case-studies",
        "/work/product-platform-system",
        "/work/ai-workflow-architecture",
        "/work/brand-web-growth-system",
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
