import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ServicesSection } from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, app design and development, logo design, branding, Shopify website design, SEO, CRO, and online growth systems.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-slate-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-500">
            Services
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950 sm:text-6xl">
            Complete digital services for a stronger online presence.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Work with a website design company, branding agency, and digital
            solutions company in one place.
          </p>
        </div>
      </section>
      <ServicesSection />
      <CTASection />
    </>
  );
}
