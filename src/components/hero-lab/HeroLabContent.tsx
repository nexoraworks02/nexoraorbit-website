import Link from "next/link";
import type { CSSProperties } from "react";

const delay = (ms: number) => ({ "--hl-delay": `${ms}ms` }) as CSSProperties;

/**
 * Semantic hero content. Real, readable HTML with one H1 and real CTA links.
 * Reveal is opacity/transform only — content is present and interactive
 * immediately regardless of animation state.
 */
export function HeroLabContent() {
  return (
    <div className="hl-content">
      <p className="hl-eyebrow hl-reveal" style={delay(600)}>
        Premium Technology Partner
      </p>

      <h1 className="hl-h1">
        <span className="hl-headline-line" style={delay(700)}>
          Build intelligent digital systems
        </span>
        {" "}
        <span className="hl-headline-line" style={delay(790)}>
          for the next stage of your business.
        </span>
      </h1>

      <p className="hl-sub hl-reveal" style={delay(1000)}>
        NEXORA ORBIT combines software engineering, AI solutions, cloud architecture, mobile apps, web
        development, branding, and digital growth into practical systems for companies ready to scale.
      </p>

      <div className="hl-ctas hl-reveal" style={delay(1200)}>
        <Link href="/contact" className="hl-cta hl-cta--primary hl-focus">
          Book a Consultation
        </Link>
        <Link href="/services" className="hl-cta hl-cta--glass hl-focus">
          Explore Services
        </Link>
      </div>

      <p className="hl-trust hl-reveal" style={delay(1300)}>
        Software &middot; AI &middot; Cloud &middot; Web &middot; Mobile &middot; Brand &middot; Growth
      </p>
    </div>
  );
}
