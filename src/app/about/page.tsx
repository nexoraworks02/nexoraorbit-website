import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Nexora Orbit Digital, a digital solutions company helping service-based businesses build websites, apps, branding, SEO, CRO, and growth systems.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-500">
            About Nexora Orbit Digital
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950 sm:text-6xl">
            We help service businesses look credible, modern, and ready to grow.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Nexora Orbit Digital creates modern websites, app experiences, branding,
            logo designs, business pages, Shopify websites, SEO, CRO, and online
            growth systems for companies that want a stronger digital presence.
          </p>
        </div>
      </section>
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {[
            ["Strategy first", "Every project starts with your offer, audience, goals, and conversion path."],
            ["Premium execution", "We build clean, responsive, SEO-friendly layouts with a polished agency standard."],
            ["Growth mindset", "Your website is treated as part of a bigger system for trust, traffic, and leads."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-7">
              <h2 className="text-2xl font-bold text-slate-950">{title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
