import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PortfolioPreview } from "@/components/PortfolioPreview";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View placeholder portfolio cards for Nexora Orbit Digital website design, Shopify website design, branding, and app design work.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-slate-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-500">
            Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950 sm:text-6xl">
            Project previews ready for your real case studies.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Replace these placeholders with real client results, screenshots, and
            measurable outcomes before launch.
          </p>
        </div>
      </section>
      <PortfolioPreview />
      <CTASection />
    </>
  );
}
