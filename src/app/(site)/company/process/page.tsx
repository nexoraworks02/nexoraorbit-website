import { ProcessCompanyPage } from "@/components/company/ProcessCompanyPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Process - How NEXORA ORBIT Builds Intelligent Digital Systems",
  description:
    "Explore the NEXORA ORBIT process from discovery and strategy to design, engineering, launch, and optimization.",
  path: "/company/process",
});

export default function ProcessCompanyRoute() {
  return <ProcessCompanyPage />;
}
