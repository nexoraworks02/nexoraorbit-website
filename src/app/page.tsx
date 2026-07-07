import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { ServicesSection } from "@/components/ServicesSection";
import { Testimonials } from "@/components/Testimonials";

const reasons = [
  "Premium design that makes your business feel credible from the first click.",
  "SEO-friendly structure for clean URLs, headings, metadata, and fast pages.",
  "Conversion thinking across CTAs, contact paths, forms, and service content.",
  "Reusable Next.js components that are easy to update as your company grows.",
];

const process = [
  "Discover goals",
  "Plan structure",
  "Design experience",
  "Build and refine",
  "Launch and optimize",
];

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection limit={6} />

      <section className="bg-slate-950 px-5 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
              Why choose us
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
              A digital solutions company focused on business outcomes.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <span className="mb-5 block h-1.5 w-12 rounded-full bg-sky-400" />
                <p className="leading-7 text-slate-200">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioPreview limit={3} />

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-500">
              Work process
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-5xl">
              A clear path from idea to launch.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {process.map((step, index) => (
              <div key={step} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-bold text-sky-600">0{index + 1}</p>
                <h3 className="mt-4 text-lg font-bold text-slate-950">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
