import type { Metadata } from "next";
import { HeroScrollExperience } from "@/components/hero-scroll/HeroScrollExperience";

export const metadata: Metadata = {
  title: "Hero Scroll Lab — NEXORA ORBIT",
  description: "Scroll-driven cinematic hero prototype for the NEXORA ORBIT premium technology experience.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HeroScrollLabPage() {
  return <HeroScrollExperience />;
}
