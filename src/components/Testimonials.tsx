import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "./SectionHeader";

export function Testimonials() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Client voice"
          title="Designed to feel clear, calm, and commercially useful"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <blockquote className="leading-7 text-slate-700">
                &quot;{item.quote}&quot;
              </blockquote>
              <figcaption className="mt-5 text-sm font-bold text-slate-950">
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
