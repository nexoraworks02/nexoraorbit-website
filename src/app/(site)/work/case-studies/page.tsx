import { CaseStudiesIndex } from "@/components/work/CaseStudiesIndex";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Case Studies - NEXORA ORBIT",
  description:
    "Review NEXORA ORBIT case study structures for product platforms, AI workflow architecture, brand systems, websites, cloud, and digital growth.",
  path: "/work/case-studies",
  index: false,
});

export default function CaseStudiesPage() {
  return <CaseStudiesIndex />;
}
