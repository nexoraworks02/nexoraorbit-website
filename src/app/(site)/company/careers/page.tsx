import { CareersCompanyPage } from "@/components/company/CareersCompanyPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Careers - Build with NEXORA ORBIT",
  description:
    "Explore future opportunities across engineering, design, AI, cloud, product, content, brand, and growth at NEXORA ORBIT.",
  path: "/company/careers",
});

export default function CareersCompanyRoute() {
  return <CareersCompanyPage />;
}
