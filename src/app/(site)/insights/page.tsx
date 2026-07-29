import { InsightsLanding } from "@/components/insights/InsightsLanding";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Insights - NEXORA ORBIT",
  description:
    "Practical thinking on software engineering, AI, cloud infrastructure, web development, branding, digital growth, and product strategy.",
  path: "/insights",
});

export default function InsightsPage() {
  return <InsightsLanding />;
}
