import type { Metadata } from "next";
import "../../styles/hero-lab.css";
import { HeroLabExperience } from "@/components/hero-lab/HeroLabExperience";

export const metadata: Metadata = {
  title: "Hero Lab — NEXORA ORBIT",
  description: "Cinematic hero prototype for the NEXORA ORBIT premium technology experience.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HeroLabPage() {
  return <HeroLabExperience />;
}
