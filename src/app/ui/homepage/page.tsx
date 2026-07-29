import type { Metadata } from "next";
import { HomepagePreview } from "@/components/homepage/HomepagePreview";

export const metadata: Metadata = {
  title: {
    absolute: "NEXORA ORBIT Homepage UI Direction",
  },
  description: "Phase 10B high-fidelity homepage UI direction preview for NEXORA ORBIT.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HomepageUIDirectionPage() {
  return <HomepagePreview />;
}
