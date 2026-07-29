import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * NEXORA ORBIT — Brand logo.
 *
 * Official assets in `public/brand/`:
 *   - nexora-orbit-3d-white.png  full "NEXORA ORBIT" lockup, white ink (dark surfaces)
 *   - nexora-orbit-3d-black.png  full "NEXORA ORBIT" lockup, dark ink (light surfaces)
 *   - nexora-mark.png            standalone gradient "X" mark (theme-agnostic)
 *
 * The full lockup is theme-aware: the white version shows under `[data-theme="dark"]`
 * and the black version under `[data-theme="light"]` (see `src/styles/effects.css`).
 */
const OFFICIAL_LOGO_AVAILABLE = true;

type LogoVariant = "full" | "mark" | "footer";
type LogoSize = "sm" | "md" | "lg";

export type LogoProps = {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
};

const ALT = "NEXORA ORBIT";

/** Intrinsic dimensions of the official PNG assets (for aspect ratio). */
const LOGO_INTRINSIC = { width: 4571, height: 1111 } as const;
const MARK_INTRINSIC = { width: 691, height: 735 } as const;

/** Display heights per size (width auto-scales from intrinsic aspect ratio). */
const fullHeight: Record<LogoSize, string> = { sm: "h-9", md: "h-12", lg: "h-16" };
const markHeight: Record<LogoSize, string> = { sm: "h-6", md: "h-8", lg: "h-11" };

/** Theme-aware full lockup: renders both inks, CSS shows the right one. */
function FullLockup({ size, className }: { size: LogoSize; className?: string }) {
  const shared = cn("w-auto select-none", fullHeight[size]);
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src="/brand/nexora-orbit-3d-white.png"
        alt={ALT}
        width={LOGO_INTRINSIC.width}
        height={LOGO_INTRINSIC.height}
        priority
        className={cn("nx-logo-white", shared)}
      />
      <Image
        src="/brand/nexora-orbit-3d-black.png"
        alt={ALT}
        width={LOGO_INTRINSIC.width}
        height={LOGO_INTRINSIC.height}
        className={cn("nx-logo-black", shared)}
      />
    </span>
  );
}

// --- Styled text fallback (used only if OFFICIAL_LOGO_AVAILABLE is false) ---
const fallbackMark: Record<LogoSize, string> = {
  sm: "size-7 text-sm",
  md: "size-9 text-base",
  lg: "size-12 text-xl",
};
const fallbackWord: Record<LogoSize, string> = { sm: "text-sm", md: "text-base", lg: "text-2xl" };

function FallbackMark({ size }: { size: LogoSize }) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center rounded-[var(--radius-md)] bg-[var(--gradient-primary)] font-black text-[var(--white)] shadow-[var(--glow-blue-soft)]",
        fallbackMark[size],
      )}
      aria-hidden="true"
    >
      X
    </span>
  );
}

function FallbackWordmark({ size }: { size: LogoSize }) {
  return (
    <span className={cn("font-semibold tracking-tight text-[var(--text-primary)]", fallbackWord[size])}>
      NE
      <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">X</span>
      ORA <span className="font-medium text-[var(--text-secondary)]">ORBIT</span>
    </span>
  );
}

export function Logo({ variant = "full", size = "md", className }: LogoProps) {
  if (OFFICIAL_LOGO_AVAILABLE) {
    if (variant === "mark") {
      return (
        <Image
          src="/brand/nexora-mark.png"
          alt={ALT}
          width={MARK_INTRINSIC.width}
          height={MARK_INTRINSIC.height}
          priority
          className={cn("w-auto select-none", markHeight[size], className)}
        />
      );
    }
    return <FullLockup size={size} className={className} />;
  }

  // Text fallback --------------------------------------------------------
  if (variant === "mark") {
    return (
      <span role="img" aria-label={ALT} className={cn("inline-flex", className)}>
        <FallbackMark size={size} />
      </span>
    );
  }
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <FallbackMark size={size} />
      <FallbackWordmark size={size} />
    </span>
  );
}
