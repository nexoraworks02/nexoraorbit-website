import { HomepageSections } from "@/components/homepage/HomepagePreview";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

const title = "NEXORA ORBIT — Premium Technology Company for Software, AI, Cloud, Web, Mobile, Brand & Growth";
const description =
  "NEXORA ORBIT builds intelligent digital systems for companies ready to scale through software engineering, AI solutions, cloud architecture, mobile apps, web development, branding, and digital growth.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/",
});

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NEXORA ORBIT",
    url: absoluteUrl("/"),
    description: "Premium technology company building intelligent digital systems.",
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NEXORA ORBIT",
    url: absoluteUrl("/"),
  };

  return (
    <>
      <JsonLd data={[organizationSchema, websiteSchema]} />
      <HomepageSections />
    </>
  );
}
