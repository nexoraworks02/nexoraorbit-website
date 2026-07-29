# Phase 18E - Core Motion + Hero Animation System Report

## Completed Items

- Added a code-first motion foundation for NEXORA ORBIT using CSS animations, CSS variables, and IntersectionObserver.
- Added reusable motion token exports and reduced-motion/in-view hooks for future component-level usage.
- Added a lightweight route-guarded motion runtime at the root layout level.
- Added staged homepage hero animation hooks:
  - background bloom
  - hero visual resolve
  - eyebrow reveal
  - H1 reveal
  - subheadline reveal
  - CTA reveal
  - trust note reveal
- Added subtle ambient hero visual motion:
  - restrained glow drift
  - signal line trace
  - node pulse
  - desktop-only panel hover lift
- Added section and card reveal behavior across public routes.
- Added global `prefers-reduced-motion` protections.
- Kept `/design-system`, `/wireframes`, and `/ui/*` isolated from the public motion runtime.

## Files Created

- `src/lib/motion/motion-tokens.ts`
- `src/lib/motion/useReducedMotionSafe.ts`
- `src/lib/motion/useInViewMotion.ts`
- `src/components/motion/MotionRuntime.tsx`

## Files Updated

- `src/app/layout.tsx`
- `src/app/(site)/layout.tsx`
- `src/styles/effects.css`
- `src/components/homepage/HomepagePreview.tsx`
- `src/components/ui/Card.tsx`

## Motion System Notes

- Runtime uses a small inline script so enhancement runs reliably after markup is available.
- IntersectionObserver reveals sections and cards once when content enters the viewport.
- Content remains visible without JavaScript because hidden/reveal states only apply after the runtime adds `motion-runtime-ready`.
- Motion is intentionally restrained: no WebGL, Three.js, particles, scroll-jacking, neon, cyberpunk, gaming, or decorative overload.

## Accessibility Checks

- Reduced motion is respected through global CSS and runtime behavior.
- Existing focus states remain visible.
- Buttons and links remain keyboard reachable.
- No hover-only meaning was introduced.
- Hero CTA remains visible early on desktop and mobile.

## Responsive QA

Checked routes:

- `/`
- `/services`
- `/work`
- `/company/about`
- `/company/process`
- `/contact`
- `/insights`

Checked viewports:

- Desktop: 1440px
- Mobile: 390px

Results:

- No horizontal overflow detected.
- One H1 per checked page.
- Hero headings clear the sticky header.
- Homepage CTA visible early on desktop and mobile.
- Motion runtime mounted on public routes.

## Build Results

- `npm.cmd run lint` passed.
- `npm.cmd run typecheck` passed.
- `npm.cmd run build` passed.

Note: `npm run ...` is blocked by the local PowerShell execution policy for `npm.ps1`, so checks were run through `npm.cmd`.

## Remaining Risks

- Page transition choreography was intentionally skipped to avoid introducing routing risk before deployment.
- Reduced-motion behavior was implemented and checked structurally; final human visual QA should still confirm the subjective feel on real devices.
- The runtime is intentionally global for public pages. Future route groups should be excluded if they become internal preview surfaces.

---

## Phase 18E completion pass (verification + gap fixes)

### Gap fixes applied

1. **Contact form feedback motion (spec §10).** The validation-error and
   success boxes in `ProjectEnquiryForm.tsx` now fade in via a new
   `.nx-feedback-fade` utility (140ms, `--ease-enter`, 4px lift — no layout
   jump). They also gained `role="alert"` / `role="status"` so screen readers
   announce them. Field focus feedback confirmed at 140ms (`--duration-fast`),
   within the 120–180ms spec window.

2. **MotionRuntime hidden-tab hardening.** Live testing surfaced a real
   fragility: the runtime scheduled all tagging through
   `requestAnimationFrame`, which never fires while a tab is hidden — pages
   opened in background tabs would defer motion setup indefinitely. A 160ms
   `setTimeout` fallback now guarantees tagging completes regardless of tab
   visibility (whichever scheduler fires first wins; the other is cancelled).

### Page transitions — confirmed skip, concrete reason

Beyond general routing risk: the natural implementation (`(site)/template.tsx`
wrapping children in an animated `<div>`) would insert a wrapper between
`<main>` and its sections, silently breaking the runtime's `main > section`
auto-tagging selector and killing the entire section-reveal system. Skipping
remains the correct engineering call for this phase.

### Live browser QA (dev server, this session)

| Route | Runtime ready | Sections tagged | Cards | H1 | Overflow |
|---|---|---|---|---|---|
| `/` | ✅ | 9 | 29 | 1 | none |
| `/services` | ✅ | 4 | 18 | 1 | none |
| `/work` | ✅ | 5 | 10 | 1 | none |
| `/company/about` | ✅ | 7 | 19 | 1 | none |
| `/company/process` | ✅ | 4 | 15 | 1 | none |
| `/contact` | ✅ | 6 | — | 1 | none |
| `/insights` | ✅ | 5 | 8 | 1 | none |

Additional live checks:

- Zero console errors on load.
- 119 CSS animations wired on the homepage (hero sequence + ambient).
- Hero CTA visible and clickable in the first viewport at 1440px and 390px.
- Contact form: submitting empty form live-rendered the `role="alert"` box with
  `nx-feedback-fade` and marked 8 fields `aria-invalid`.
- Mobile (390px): ambient glow/node animations correctly disabled by the
  ≤640px media query (`animation: none` confirmed via computed style);
  no horizontal overflow on `/` or `/contact` (scrollWidth = 390).

Note: the harness browser tab reports `visibilityState: "hidden"`, which
freezes animation clocks and prevented screenshot capture — a browser
throttling artifact, not a site issue. Playback verification on a visible
screen is the one item left for human review.

### Build results (after fixes)

- `npm run lint` — pass
- `npm run typecheck` — pass
- `npm run build` — pass (45 pages)

## Recommendation for deployment

The motion layer is deployment-ready from a code, performance, and
accessibility standpoint: transform/opacity only, IntersectionObserver-driven,
runs once per section, reduced-motion safe, mobile-reduced, no WebGL/canvas/
video, content never blocked. Recommended before deploy: one human pass on a
real device to confirm the subjective feel of the hero sequence and section
reveals.

## Hydration fix (post-completion)

User-reported console error: *"A tree hydrated but some attributes of the
server rendered HTML didn't match the client properties"* on `/`.

**Root cause:** `MotionRuntime` was an inline `<script>` that mutated the DOM
(`data-motion` attributes, `--motion-index` styles, `motion-runtime-ready` on
`<html>`) during HTML parse — i.e. **before React hydration** — so React's
hydration diff saw attributes the server never rendered.

**Fix:** `MotionRuntime.tsx` rewritten as a `"use client"` component running
all tagging inside `useEffect`, which fires strictly after hydration (React
ignores post-hydration DOM changes). Functional behavior preserved:

- Same tagging logic, IO thresholds, route guard, reduced-motion handling.
- New: targets already on screen are marked `in` synchronously in the same
  style pass that begins hiding pending targets — prevents above-the-fold
  content from blinking now that the runtime starts after first paint.
- MutationObserver still re-tags on client-side route changes; scheduling uses
  rAF + 160ms timeout fallback (rAF never fires in hidden/background tabs).
- MutationObserver now filters to `childList` changes only, so the runtime's
  own attribute writes don't re-trigger it.

**Verified in a fresh browser tab:** zero console errors (hydration or
otherwise) on full load of `/`, after client-side navigation to
`/company/about` (sections re-tagged: 9 → 7, 19 cards), and across HMR
reloads. Lint / typecheck / build all pass (45 pages).

## Phase 18E Status

Phase 18E is complete and verified, including the hydration fix. No deployment
has been started.
