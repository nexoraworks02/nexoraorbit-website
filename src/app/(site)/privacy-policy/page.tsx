import { LegalPage } from "@/components/utility/LegalPage";
import { privacySections } from "@/data/legalUtility";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy — NEXORA ORBIT",
  description:
    "Read how NEXORA ORBIT handles website enquiries, contact information, analytics placeholders, and privacy-related information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="How NEXORA ORBIT handles enquiry and website information."
      body="This page explains how information submitted through the website may be collected, used, and protected. Final legal wording should be reviewed before launch."
      sections={privacySections}
    />
  );
}
