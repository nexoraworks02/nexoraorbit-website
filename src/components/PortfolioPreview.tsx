import Link from "next/link";
import { portfolioItems } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

type PortfolioPreviewProps = {
  limit?: number;
};

export function PortfolioPreview({ limit }: PortfolioPreviewProps) {
  const items = limit ? portfolioItems.slice(0, limit) : portfolioItems;

  return (
    <section className="bg-slate-50 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Portfolio"
          title="Placeholder work previews for the services we build"
          description="These cards are ready to be replaced with real project images, client results, and case studies from your team."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
            >
              <div
                role="img"
                aria-label={item.alt}
                className={`min-h-64 p-6 ${
                  index % 2 === 0
                    ? "bg-gradient-to-br from-slate-950 via-blue-950 to-sky-500"
                    : "bg-gradient-to-br from-white via-sky-100 to-blue-200"
                }`}
              >
                <div className="h-full rounded-lg border border-white/30 bg-white/15 p-5 backdrop-blur-sm">
                  <div className="mb-8 flex gap-2">
                    <span className="size-3 rounded-full bg-white/80" />
                    <span className="size-3 rounded-full bg-white/60" />
                    <span className="size-3 rounded-full bg-white/40" />
                  </div>
                  <div className="grid gap-3">
                    <span className="h-4 w-2/3 rounded-full bg-white/75" />
                    <span className="h-4 w-1/2 rounded-full bg-white/45" />
                    <span className="mt-5 h-24 rounded-lg bg-white/25" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-sky-600">{item.category}</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        {limit ? (
          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex rounded-md bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-600"
            >
              View Portfolio
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
