import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqPage } from "@/components/company/FaqPage";
import { faqCategories } from "@/data/company";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ - Working With NEXORA ORBIT",
  description:
    "Answers to common questions about working with NEXORA ORBIT, including process, scope, pricing, technology, delivery, and ownership.",
  path: "/faq",
});

export default function FaqRoute() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    ),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <FaqPage />
    </>
  );
}
