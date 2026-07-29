import { NotFoundContent } from "@/components/utility/NotFoundContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Page Not Found - NEXORA ORBIT",
  description: "The requested page is not available on the NEXORA ORBIT website.",
  path: "/not-found",
  index: false,
});

export default function NotFoundRoute() {
  return <NotFoundContent />;
}
