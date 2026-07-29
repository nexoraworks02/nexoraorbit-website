import { LegalPage } from "@/components/utility/LegalPage";
import { termsSections } from "@/data/legalUtility";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms — NEXORA ORBIT",
  description: "General website terms for using NEXORA ORBIT digital properties and reviewing service information.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Website terms for using NEXORA ORBIT digital properties."
      body="These terms describe general website use and should be reviewed before publication or client-facing legal use."
      sections={termsSections}
    />
  );
}
