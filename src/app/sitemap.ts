import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/services",
  "/portfolio",
  "/packages",
  "/contact",
  "/privacy-policy",
  "/terms-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://nexoraorbit.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
