/**
 * Minimal className combiner for the NEXORA ORBIT design system.
 * Filters out falsy values and joins the rest. No external dependency so the
 * foundation stays lightweight; variant maps are authored to avoid conflicts.
 */
export type ClassValue = string | false | null | undefined;

export function cn(...parts: ClassValue[]): string {
  return parts.filter(Boolean).join(" ");
}
