import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Nexora Orbit Digital.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-950 sm:text-5xl">
          Privacy Policy
        </h1>
        <div className="mt-8 grid gap-8 leading-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-bold text-slate-950">Information we collect</h2>
            <p className="mt-3">
              Nexora Orbit Digital may collect contact details, project information,
              and messages you choose to share through our website forms or direct
              communication channels.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-950">How we use information</h2>
            <p className="mt-3">
              We use submitted information to respond to enquiries, understand project
              needs, provide proposals, and improve our services.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-950">Contact</h2>
            <p className="mt-3">
              For privacy questions, contact us at hello@nexoraorbit.com.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
