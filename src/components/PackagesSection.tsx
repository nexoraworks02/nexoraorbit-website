import Link from "next/link";
import { packages } from "@/data/packages";
import { SectionHeader } from "./SectionHeader";

export function PackagesSection() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Packages"
          title="Flexible website and digital growth packages"
          description="Every business has a different starting point, so packages are framed around outcomes and finalized after a quick consultation."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={`rounded-lg border p-7 ${
                item.featured
                  ? "border-sky-300 bg-slate-950 text-white shadow-2xl shadow-sky-100"
                  : "border-slate-200 bg-white text-slate-950 shadow-sm"
              }`}
            >
              <p className={`text-sm font-semibold ${item.featured ? "text-sky-300" : "text-sky-600"}`}>
                {item.label}
              </p>
              <h3 className="mt-3 text-3xl font-bold">{item.name}</h3>
              <p className={`mt-4 text-lg font-semibold ${item.featured ? "text-white" : "text-slate-700"}`}>
                {item.price}
              </p>
              <ul className={`mt-7 grid gap-4 text-sm ${item.featured ? "text-slate-200" : "text-slate-600"}`}>
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-1 size-2 rounded-full bg-sky-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-8 inline-flex w-full justify-center rounded-md px-5 py-3 text-sm font-bold transition ${
                  item.featured
                    ? "bg-sky-500 text-white hover:bg-sky-400"
                    : "bg-slate-950 text-white hover:bg-sky-600"
                }`}
              >
                Get Free Consultation
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
