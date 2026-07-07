import Link from "next/link";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-lg bg-sky-500 text-lg font-bold">
              NO
            </span>
            <span className="font-bold">Nexora Orbit Digital</span>
          </Link>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            Websites, Apps, Branding & Digital Growth Solutions for service-based
            businesses that want a stronger online presence.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-sky-300">
            Services
          </h3>
          <ul className="mt-5 grid gap-3 text-sm text-slate-300">
            {services.slice(0, 6).map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-sky-300">
            Company
          </h3>
          <ul className="mt-5 grid gap-3 text-sm text-slate-300">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link href="/packages" className="hover:text-white">Packages</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-sky-300">
            Contact
          </h3>
          <ul className="mt-5 grid gap-3 text-sm text-slate-300">
            <li><a href="mailto:hello@nexoraorbit.com" className="hover:text-white">hello@nexoraorbit.com</a></li>
            <li><a href="https://wa.me/92XXXXXXXXXX" className="hover:text-white">+92XXXXXXXXXX</a></li>
            <li className="flex gap-4 pt-2">
              <a href="#" className="hover:text-white" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" className="hover:text-white" aria-label="Instagram">Instagram</a>
              <a href="#" className="hover:text-white" aria-label="Facebook">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-slate-400">
        Copyright 2026 Nexora Orbit Digital. All rights reserved.
      </div>
    </footer>
  );
}
