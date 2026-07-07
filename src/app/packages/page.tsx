import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PackagesSection } from "@/components/PackagesSection";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Explore Nexora Orbit Digital packages for websites, branding, Shopify, SEO, CRO, and online growth systems.",
};

export default function PackagesPage() {
  return (
    <>
      <section className="bg-slate-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-500">
            Packages
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950 sm:text-6xl">
            Choose the right starting point for your digital growth.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Simple package directions with custom pricing after we understand
            your goals, timeline, and required features.
          </p>
        </div>
      </section>
      <PackagesSection />
      <CTASection />
    </>
  );
}
