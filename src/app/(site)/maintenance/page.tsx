import { MaintenancePage } from "@/components/utility/MaintenancePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Maintenance - NEXORA ORBIT",
  description: "NEXORA ORBIT is temporarily updating this experience.",
  path: "/maintenance",
  index: false,
});

export default function MaintenanceRoute() {
  return <MaintenancePage />;
}
