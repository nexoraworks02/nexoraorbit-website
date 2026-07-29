import { cn } from "@/lib/cn";

export function CompanySystemVisual({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative min-h-72 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-panel)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(37,99,255,0.2),transparent_42%),radial-gradient(circle_at_78%_34%,rgba(124,58,237,0.14),transparent_38%)]" />
      <div className="absolute inset-x-8 top-8 grid gap-4">
        <span className="h-3 w-28 rounded-[var(--radius-full)] bg-[var(--surface-muted)]" />
        <div className="grid gap-3 md:grid-cols-3">
          {["Strategy", "Design", "Engineering"].map((item) => (
            <div key={item} className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-glass)] p-4">
              <span className="block h-2 w-16 rounded-[var(--radius-full)] bg-[var(--text-accent)] opacity-70" />
              <span className="mt-5 block h-px bg-[var(--border-default)]" />
              <span className="mt-3 block h-px bg-[var(--border-subtle)]" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-8 right-8 grid grid-cols-4 gap-3">
        {[0, 1, 2, 3].map((item) => (
          <span key={item} className="h-14 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--surface-glass)]" />
        ))}
      </div>
    </div>
  );
}
