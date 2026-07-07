import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Nexora Orbit Digital.",
};

export default function TermsConditionsPage() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-950 sm:text-5xl">
          Terms & Conditions
        </h1>
        <div className="mt-8 grid gap-8 leading-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-950">Website use</h2>
            <p className="mt-3">
              This website provides general information about Nexora Orbit Digital
              services. Content may be updated as our services and policies evolve.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-950">Project enquiries</h2>
            <p className="mt-3">
              Submitting an enquiry does not create a formal agreement. Project scope,
              pricing, timelines, and deliverables are confirmed separately in writing.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-950">Contact</h2>
            <p className="mt-3">
              For questions about these terms, contact hello@nexoraorbit.com.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
