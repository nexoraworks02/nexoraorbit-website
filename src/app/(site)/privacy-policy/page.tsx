import { LegalPage } from "@/components/utility/LegalPage";
import { privacySections } from "@/data/legalUtility";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy — NEXORA ORBIT",
  description:
    "Read how NEXORA ORBIT collects, uses, and protects information submitted through website enquiries and website analytics.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="How NEXORA ORBIT handles enquiry and website information."
      body="This page explains what information is collected through the website, how it is used, which third-party services process it, and what rights you have over it."
      sections={privacySections}
    />
  );
}
