import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Nexora Orbit Digital for website design, app development, logo design, branding, Shopify, SEO, CRO, and digital growth systems.",
};

export default function ContactPage() {
  return (
    <section className="bg-slate-50 px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-500">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950 sm:text-6xl">
            Tell us what you want to build next.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Share your project goals and we will help you choose the right path for
            your website, app, brand, Shopify store, SEO, CRO, or growth system.
          </p>
          <div className="mt-8 grid gap-4 text-slate-700">
            <a href="mailto:hello@nexoraorbit.com" className="font-bold text-sky-600">
              hello@nexoraorbit.com
            </a>
            <a href="https://wa.me/92XXXXXXXXXX" className="font-bold text-sky-600">
              +92XXXXXXXXXX
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
