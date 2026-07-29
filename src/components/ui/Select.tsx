import { useId, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: SelectOption[];
  helperText?: string;
  errorText?: string;
  placeholder?: string;
};

export function Select({
  id,
  label,
  options,
  helperText,
  errorText,
  placeholder = "Select an option",
  className,
  required,
  ...props
}: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? props.name ?? generatedId;
  const helperId = helperText && selectId ? `${selectId}-helper` : undefined;
  const errorId = errorText && selectId ? `${selectId}-error` : undefined;
  const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="grid gap-2">
      <label htmlFor={selectId} className="text-sm font-semibold text-[var(--text-primary)]">
        {label}
        {required ? <span className="text-[var(--status-error)]"> *</span> : null}
      </label>
      <select
        id={selectId}
        required={required}
        aria-invalid={Boolean(errorText) || undefined}
        aria-describedby={describedBy}
        className={cn(
          "ds-focus-ring min-h-12 rounded-[var(--radius-md)] border border-[var(--border-default)] bg-[var(--surface-panel)] px-4 py-3 text-[var(--text-primary)] outline-none transition duration-[var(--duration-fast)] disabled:cursor-not-allowed disabled:opacity-50",
          errorText ? "border-[var(--status-error)]" : "focus:border-[var(--border-brand)]",
          className,
        )}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
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
