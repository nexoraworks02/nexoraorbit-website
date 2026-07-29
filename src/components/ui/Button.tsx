import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "glass";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "nx-cta-primary border-transparent bg-[var(--gradient-primary)] text-[var(--white)] shadow-[var(--glow-blue-soft)] hover:shadow-[var(--glow-blue-strong)]",
  secondary:
    "border-[var(--border-default)] bg-[var(--surface-panel)] text-[var(--text-primary)] hover:border-[var(--border-brand)]",
  ghost:
    "border-transparent bg-transparent text-[var(--text-secondary)] hover:bg-[var(--surface-panel)] hover:text-[var(--text-primary)]",
  glass:
    "border-[var(--border-default)] bg-[var(--surface-glass)] text-[var(--text-primary)] shadow-[var(--shadow-dark-panel)] backdrop-blur-[var(--blur-md)] hover:border-[var(--border-brand)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-11 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-3 text-sm",
  lg: "min-h-12 px-6 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      className={cn(
        "ds-focus-ring ds-motion-safe inline-flex max-w-full items-center justify-center gap-2 rounded-[var(--radius-md)] border text-center font-semibold transition duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:-translate-y-px active:translate-y-0 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />
      ) : (
        leftIcon
      )}
      <span className="min-w-0 break-words">{children}</span>
      {!loading ? rightIcon : null}
    </button>
  );
}
