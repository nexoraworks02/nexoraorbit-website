import { cn } from "@/lib/cn";

export function EditorialVisual({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative min-h-56 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--surface-panel)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(37,99,255,0.18),transparent_40%),radial-gradient(circle_at_82%_24%,rgba(124,58,237,0.12),transparent_42%)]" />
      <div className="absolute inset-x-6 top-6 grid gap-3">
        <span className="h-3 w-28 rounded-[var(--radius-full)] bg-[var(--surface-muted)]" />
        {[0, 1, 2, 3].map((item) => (
          <span key={item} className="h-px bg-[linear-gradient(90deg,var(--border-default),transparent)]" />
        ))}
      </div>
      <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
        <span className="h-16 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--surface-glass)]" />
        <span className="h-16 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--surface-glass)]" />
        <span className="h-16 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--surface-glass)]" />
      </div>
    </div>
  );
}
