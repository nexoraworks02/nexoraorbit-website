export function ContactForm() {
  return (
    <form className="grid gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-bold text-slate-950">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          className="rounded-md border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-bold text-slate-950">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          className="rounded-md border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="service" className="text-sm font-bold text-slate-950">
          Service
        </label>
        <select
          id="service"
          name="service"
          className="rounded-md border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-sky-400"
          defaultValue=""
        >
          <option value="" disabled>Select a service</option>
          <option>Website Design & Development</option>
          <option>App Design & Development</option>
          <option>Branding or Logo Design</option>
          <option>Shopify Website Setup</option>
          <option>SEO, CRO, or Growth Systems</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-bold text-slate-950">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us what you want to build."
          className="resize-none rounded-md border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400"
        />
      </div>
      <button
        type="button"
        className="rounded-md bg-sky-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-sky-100 transition hover:bg-sky-600"
      >
        Get Free Consultation
      </button>
      <p className="text-xs leading-6 text-slate-500">
        This form is UI-only for now. Connect it to email, CRM, or a form service before launch.
      </p>
    </form>
  );
}
