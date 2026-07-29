import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "NEXORA ORBIT Wireframe Architecture",
  },
  description: "Phase 10A low-to-mid fidelity UX structure for the NEXORA ORBIT website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function WireframesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
