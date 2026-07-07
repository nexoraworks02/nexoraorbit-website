import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-slate-950 px-5 py-20 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
            Ready to grow online?
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-5xl">
            Let&apos;s build the website, brand, and digital system your business deserves.
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link
            href="/contact"
            className="rounded-md bg-sky-500 px-6 py-4 text-center text-sm font-bold text-white transition hover:bg-sky-400"
          >
            Message Us
          </Link>
          <a
            href="https://wa.me/92XXXXXXXXXX"
            className="rounded-md border border-white/20 px-6 py-4 text-center text-sm font-bold text-white transition hover:border-sky-300"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
