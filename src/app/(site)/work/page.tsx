import { WorkLanding } from "@/components/work/WorkLanding";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Work - NEXORA ORBIT Digital Systems, Products & Brand Experiences",
  description:
    "Explore NEXORA ORBIT project structures and case study previews for software, AI, cloud, web, branding, and digital growth systems.",
  path: "/work",
});

export default function WorkPage() {
  return <WorkLanding />;
}
