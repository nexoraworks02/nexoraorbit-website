import { LegalPage } from "@/components/utility/LegalPage";
import { termsSections } from "@/data/legalUtility";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms of Use — NEXORA ORBIT",
  description: "Terms of use for the NEXORA ORBIT website, covering website use, service descriptions, and liability.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms of Use"
      title="Terms for using the NEXORA ORBIT website."
      body="These terms govern your use of this website. Any actual project engagement is governed separately by its own written agreement."
      sections={termsSections}
    />
  );
}
