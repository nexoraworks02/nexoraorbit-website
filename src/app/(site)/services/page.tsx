import { ServicesLanding } from "@/components/services/ServicesLanding";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Services - NEXORA ORBIT",
  description:
    "Explore NEXORA ORBIT capabilities across software engineering, AI solutions, cloud engineering, mobile app development, web development, branding, digital marketing, and technology consulting.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesLanding />;
}
