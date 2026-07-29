import type { MetadataRoute } from "next";
import { serviceDetails } from "@/data/nexoraServices";
import { absoluteUrl } from "@/lib/seo";

const routes = [
  "",
  "/services",
  ...serviceDetails.map((service) => `/services/${service.slug}`),
  "/work",
  "/company/about",
  "/company/process",
  "/company/careers",
  "/faq",
  "/insights",
  "/contact",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route || "/"),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
