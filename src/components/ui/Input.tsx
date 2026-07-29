import { useId, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helperText?: string;
  errorText?: string;
};

export function Input({ id, label, helperText, errorText, className, required, ...props }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? props.name ?? generatedId;
  const helperId = helperText && inputId ? `${inputId}-helper` : undefined;
  const errorId = errorText && inputId ? `${inputId}-error` : undefined;
  const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="grid gap-2">
      <label htmlFor={inputId} className="text-sm font-semibold text-[var(--text-primary)]">
        {label}
        {required ? <span className="text-[var(--status-error)]"> *</span> : null}
      </label>
      <input
        id={inputId}
        required={required}
        aria-invalid={Boolean(errorText) || undefined}
        aria-describedby={describedBy}
        className={cn(
          "ds-focus-ring min-h-12 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--surface-panel)] px-4 py-3 text-[var(--text-primary)] outline-none transition duration-[var(--duration-fast)] placeholder:text-[var(--text-muted)] disabled:cursor-not-allowed disabled:opacity-50",
          errorText ? "border-[var(--status-error)]" : "focus:border-[var(--border-brand)]",
          className,
        )}
        {...props}
      />
      {helperText ? (
        <p id={helperId} className="text-sm text-[var(--text-muted)]">
          {helperText}
        </p>
      ) : null}
      {errorText ? (
        <p id={errorId} className="text-sm text-[var(--status-error)]">
          {errorText}
        </p>
      ) : null}
    </div>
  );
}
