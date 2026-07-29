import { ThankYouPage } from "@/components/utility/ThankYouPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Thank You — NEXORA ORBIT",
  description: "Your enquiry has been received for review by NEXORA ORBIT.",
  path: "/thank-you",
  index: false,
});

export default function ThankYouRoute() {
  return <ThankYouPage />;
}
