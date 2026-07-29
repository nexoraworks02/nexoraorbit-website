import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { NotFoundContent } from "@/components/utility/NotFoundContent";

export default function NotFound() {
  return (
    <div data-theme="dark" className="min-h-screen bg-[var(--surface-base)] font-[var(--font-sans-ds)] text-[var(--text-primary)]">
      <SiteHeader />
      <main>
        <NotFoundContent />
      </main>
      <SiteFooter />
    </div>
  );
}
