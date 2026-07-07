import Link from "next/link";
import { services } from "@/data/services";
import { SectionHeader } from "./SectionHeader";

type ServicesSectionProps = {
  limit?: number;
};

export function ServicesSection({ limit }: ServicesSectionProps) {
  const visibleServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What we do"
          title="Digital services built around trust, clarity, and growth"
          description="From your first brand impression to the systems that bring in leads, Nexora Orbit Digital creates practical digital assets that help businesses grow professionally."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100"
            >
              <div className="mb-5 grid size-12 place-items-center rounded-lg bg-sky-50 text-lg font-bold text-sky-600">
                {service.title.slice(0, 2)}
              </div>
              <h3 className="text-xl font-bold text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                {service.keyword}
              </p>
            </article>
          ))}
        </div>
        {limit ? (
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex rounded-md border border-slate-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:border-sky-300 hover:text-sky-600"
            >
              View All Services
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
