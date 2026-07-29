import { AboutCompanyPage } from "@/components/company/AboutCompanyPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About NEXORA ORBIT - Premium Technology Partner",
  description:
    "Learn how NEXORA ORBIT builds scalable digital systems, intelligent software, automation, cloud-ready platforms, and premium brand experiences.",
  path: "/company/about",
});

export default function AboutCompanyRoute() {
  return <AboutCompanyPage />;
}
