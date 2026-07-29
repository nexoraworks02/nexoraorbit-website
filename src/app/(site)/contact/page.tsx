import { ContactPage } from "@/components/contact/ContactPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact NEXORA ORBIT - Start a Project Consultation",
  description:
    "Contact NEXORA ORBIT to discuss software engineering, AI solutions, mobile apps, web development, cloud engineering, branding, digital marketing, or technology consulting.",
  path: "/contact",
});

export default function ContactRoute() {
  return <ContactPage />;
}
