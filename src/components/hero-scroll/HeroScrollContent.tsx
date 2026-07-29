import Link from "next/link";

/**
 * Semantic hero content — your existing approved homepage copy, verbatim.
 * No fabricated stats or invented headline. Real HTML, real links, always in
 * the SSR markup: fully readable and usable with no JS, no WebGL, and no
 * animation at all.
 */
export function HeroScrollContent() {
  return (
    <div className="hs-content">
      <p className="ds-eyebrow hs-eyebrow">Premium Technology Partner</p>
      <h1 className="ds-display-md hs-h1">
        Build intelligent digital systems for the next stage of your business.
      </h1>
      <p className="ds-body-lg hs-sub">
        NEXORA ORBIT combines software engineering, AI solutions, cloud architecture, mobile apps, web
        development, branding, and digital growth into practical systems for companies ready to scale.
      </p>
      <div className="hs-cta-row">
        <Link href="/contact" className="hs-cta hs-cta--primary nx-cta-primary ds-focus-ring">
          Book a Consultation
        </Link>
        <Link href="/services" className="hs-cta hs-cta--glass ds-focus-ring">
          Explore Services
        </Link>
      </div>
      <p className="ds-meta hs-trust">
        Software &middot; AI &middot; Cloud &middot; Web &middot; Mobile &middot; Brand &middot; Growth
      </p>
    </div>
  );
}
