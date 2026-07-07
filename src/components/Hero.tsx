import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#e0f2fe_0,#ffffff_32%,#f8fafc_70%)]">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="mb-5 inline-flex rounded-md border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm">
            Websites, Apps, Branding & Digital Growth Solutions
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Build a premium online presence that turns attention into clients.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Nexora Orbit Digital helps service-based businesses launch modern
            websites, apps, branding, Shopify stores, SEO, CRO, and online growth
            systems that look professional and perform with purpose.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-sky-500 px-6 py-4 text-center text-sm font-bold text-white shadow-xl shadow-sky-200 transition hover:bg-sky-600"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="rounded-md border border-slate-300 bg-white px-6 py-4 text-center text-sm font-bold text-slate-950 transition hover:border-sky-300 hover:text-sky-600"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-tr from-sky-200 via-white to-blue-100 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200">
            <div className="border-b border-slate-200 bg-slate-950 px-5 py-4">
              <div className="flex gap-2">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-amber-300" />
                <span className="size-3 rounded-full bg-emerald-400" />
              </div>
            </div>
            <div className="grid gap-5 p-5 sm:p-7">
              <div className="rounded-xl bg-slate-950 p-6 text-white">
                <p className="text-sm font-semibold text-sky-300">Growth dashboard</p>
                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-white/10 p-4">
                    <p className="text-2xl font-bold">3.8x</p>
                    <p className="mt-1 text-xs text-slate-300">Lead clarity</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4">
                    <p className="text-2xl font-bold">92</p>
                    <p className="mt-1 text-xs text-slate-300">SEO score</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4">
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="mt-1 text-xs text-slate-300">Online presence</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {["Website system", "Brand identity", "Shopify launch", "CRO roadmap"].map((item) => (
                  <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <span className="mb-4 block h-2 w-16 rounded-full bg-sky-400" />
                    <p className="font-semibold text-slate-950">{item}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Strategy, design, build, and refine.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
