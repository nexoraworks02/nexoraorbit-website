# Phase 19C — Hero Lab Production Readiness QA Report

**Project:** NEXORA ORBIT · **Route under test:** `/hero-lab` (isolated, noindex)
**Goal:** Make the CSS/DOM cinematic hero prototype safe for production integration.
**Not merged into the homepage. Not deployed. Homepage not modified.**

---

## 1. Performance improvements made

Audit found the prototype already sound in the risky areas:
- **No scroll listeners** at all (scroll handoff is native scroll + a static
  section) — nothing to throttle.
- **No per-frame React re-renders** — pointer parallax writes CSS vars directly
  to the DOM; IntersectionObserver writes a `data-` attribute. State changes
  only on control clicks.
- **No large dependencies / assets / GLB / video.** CSS is per-route split.
- Reveal/ambient animations already used transform + opacity (no layout props).

Three concrete GPU-cost optimizations were applied to `src/styles/hero-lab.css`:

| Change | Why |
|---|---|
| `hl-glow-drift` keyframe: removed `scale()` (translate + opacity only) | Scaling a `filter: blur(40px)` bloom re-rasterizes the blurred texture every frame; translate/opacity only re-composites (cheap). |
| `.hl-panel`: removed `backdrop-filter: blur()` (fill bumped `rgba(8,13,31,0.72 → 0.86)`) | Panels translate with the parallax layer; animating a backdrop-filter each frame is expensive. Near-opaque fill looks the same. |
| `hl-node-breathe`: removed `scale()` (opacity only) | Avoids re-rasterizing each node's 36px glow (box-shadow) every frame; also matches the Phase 19A "breathe through light, not scale" direction. |

Remaining static costs are safe: `backdrop-filter` kept only on the **static**
lab header and controls (they never move); box-shadows are static; blur is
static (rasterized once). Particle counts: 18 desktop / 8 low / 6 mobile / 0 in
static-scene. Ambient loops **pause offscreen** (verified below).

## 2. Mobile / responsive QA (measured live)

| Viewport | Overflow-X | H1 | Header overlap | H1 clips vp | CTA in 1st screen | Particles | Parallax |
|---|---|---|---|---|---|---|---|
| 390 × 844 | none (sw 390) | 1 | no | no | yes (top 597) | 6 | disabled |
| 768 × 1024 | none (sw 753) | 1 | no | no | yes (top 702) | 18 | active* |
| 1280 × 800 | none (sw 1265) | 1 | no | no | yes (top 640) | 18 | active |
| 1440 × 900 | none (sw 1425) | 1 | no | no | yes (top 684) | 18 | active |

*768 is treated as tablet/desktop by the ≤767px mobile rule; on real touch
devices the JS `pointer: coarse` guard disables parallax regardless.

- Content column is `z-index: 2` above the decorative scene (`z-index: 1`) with a
  radial contrast scrim behind the copy — visual never covers/obscures text.
- Headline renders as 2 clean lines; no awkward breaks; fluid `clamp()` sizing.
- No horizontal scroll at any breakpoint. Mobile trims particles (18→6), disables
  parallax + panel float, dims panels.

## 3. Reduced-motion QA

Tested via the lab control simulation (identical rule set to the OS media query)
and by direct computed-style inspection:

| Requirement | Result |
|---|---|
| Parallax disabled | ✅ `transform: none` |
| Particle movement disabled | ✅ (scene `*` animation none) |
| Continuous ambient loops disabled | ✅ nodes `animation: none` |
| **Bloom glow loop disabled** | ✅ **fixed** — see below |
| Portal-style transitions | n/a (none used) |
| Content readable, CTAs clickable | ✅ content `opacity: 1`, links live |
| Focus states preserved | ✅ (focus not affected by motion rules) |

**Bug found and fixed:** the disable rule `.hl-scene * { animation: none }` does
**not** match pseudo-elements, so the bloom `::before`/`::after` glow-drift kept
looping under reduced-motion (and the CTA hover `::after` sweep). Added explicit
pseudo-element selectors to both the control-based rules and the
`@media (prefers-reduced-motion: reduce)` block. Verified: bloom
`::before`/`::after` `animation-name` is now `none` under reduced-motion.

> Note: OS-level `prefers-reduced-motion` emulation is not available in the QA
> browser, so this was validated via the control simulation (which applies the
> byte-identical CSS) plus confirmation that the media-query block mirrors it.

## 4. Accessibility QA

| Check | Result |
|---|---|
| Exactly one `<h1>` | ✅ (all routes) |
| Decorative scene `aria-hidden` | ✅ (`.hl-scene aria-hidden="true"`, SVG `role="presentation"`) |
| Semantic HTML content | ✅ eyebrow `<p>`, `<h1>`, `<p>`, real `<a>` CTAs, trust `<p>` |
| CTAs are real links | ✅ `/contact`, `/services` |
| Keyboard focus visible | ✅ Tab → primary CTA, `:focus-visible` matches, **2px `#60a5fa` outline** (offset 2px) |
| Keyboard navigation | ✅ logical order (CTAs → controls) |
| No hover-only meaning | ✅ hover adds polish only |
| Text contrast | ✅ H1 white ~19:1, sub `#cbd5e1` ~13:1, trust `#94a3b8` ~7:1 (all > AA 4.5:1) |
| Readable if JS/animation fails | ✅ content is statically visible under motion-off/reduced; no-CSS-animation falls back to visible base state |

Minor note (not a blocker): on the primary CTA the focus rule's *box-shadow halo*
is overridden by the CTA's own glow, but the **2px solid outline** is a fully
compliant, clearly visible focus indicator on its own.

## 5. Routes checked

| Route | Result |
|---|---|
| `/hero-lab` | ✅ renders, zero console errors (isolated tab) |
| `/` (production homepage) | ✅ unchanged, 1 H1, zero console errors |
| `/services` | ✅ 1 H1, no overflow |
| `/contact` | ✅ 1 H1, no overflow, form present (10 fields) |
| `/robots.txt` | ✅ serves; `Disallow: /hero-lab` present |
| `/sitemap.xml` | ✅ serves; **no** `/hero-lab`; 19 canonical `nexoraorbit.com` URLs |

Offscreen pause directly verified: forcing `data-hl-inview="false"` sets the
bloom `::before` `animation-play-state: paused`; back to `true` → `running`.

## 6. SEO / indexing

- `/hero-lab` metadata: `robots: { index: false, follow: false }` → `<meta
  name="robots" content="noindex, nofollow">` (verified in built HTML).
- **Not** in `sitemap.ts` / built `sitemap.xml`.
- **Disallowed** in `robots.ts` / built `robots.txt`.
- **Not linked** from any production navigation (the only `hero-lab` reference
  outside its own folder is the `MotionRuntime` route-exclusion regex, not a link).

## 7. Build / lint / typecheck

| Command | Result |
|---|---|
| `npm run lint` | ✅ pass |
| `npm run typecheck` | ✅ pass (`tsc --noEmit`; script added in Phase 18B) |
| `npm run build` | ✅ pass (46 pages) |

All commands exist. (`npm run` triggers an npm-version *notice* on this machine;
harmless, not an error.)

## 8. Known risks

- **CSS/DOM prototype, not WebGL.** This is the approved-feel prototype, not the
  full R3F depth from the Phase 19A spec (no true 3D camera, materials, or
  volumetric fog). Those require the deferred dependency set.
- **Reduced-motion verified via control simulation**, not OS-level emulation
  (emulation unavailable in the QA browser). Rules are byte-identical.
- **Playback/screenshots not captured** — the QA browser tab reports
  `visibilityState: "hidden"`, which freezes CSS animation clocks. All *wiring*,
  computed styles, breakpoints, reduced/offscreen behavior, and a11y were
  verified via DOM + computed-style inspection; a human should confirm the
  subjective feel on a visible screen.
- **CTA focus halo** is cosmetically overridden by the CTA glow (outline still
  compliant) — optional polish, not a blocker.

## 9. Ready to merge into the production homepage?

**Yes — technically ready.** `/hero-lab` is performant (transform/opacity only,
offscreen-paused, no heavy deps/assets), accessible (1 H1, aria-hidden scene,
real links, visible focus, AA+ contrast, readable without JS/animation),
responsive with no overflow 390–1440px, and correctly isolated (noindex, not in
sitemap, disallowed, unlinked). Reduced-motion is now fully honored including the
previously-looping bloom.

**Recommended gate before merge:** one human visual pass on a real (visible)
screen to confirm the boot-sequence and reveal *feel*, since the QA harness could
not capture playback.

## 10. Recommended production integration approach

1. **Extract a reusable, presentational hero** from the lab: move the content +
   scene (`HeroLabContent`, `HeroLabScene`, particles/system/fallback + CSS) into
   a production `Hero` component; **drop the lab-only chrome** (lab header, notice,
   controls panel) and the `sceneMode`/`reducedSim` dev toggles.
2. **Keep motion gating** on OS `prefers-reduced-motion` + the offscreen
   IntersectionObserver; remove the manual control state.
3. **Swap the homepage hero in a feature branch**, replacing only
   `HeroSection` inside `HomepagePreview.tsx` — do not touch the rest of the
   homepage sections or the existing Phase 18E section-reveal system.
4. **Re-run the full QA** (this checklist) against `/` after the swap, especially:
   one H1, no CLS, no overflow, reduced-motion, and that the global
   `MotionRuntime` still tags the sections *below* the hero correctly (the hero
   itself is skipped as section index 0 / `.nx-hero`).
5. **Namespace or reconcile CSS**: `hero-lab.css` is `hl-`-scoped; for production
   either keep the scoped file imported by the hero, or fold tokens into
   `effects.css`. Ensure it loads on `/` without affecting other routes.
6. **(Optional, later phase)** layer the WebGL/R3F enhancement behind this CSS
   hero per the Phase 19A tiering, keeping CSS as the guaranteed fallback.
7. Only after homepage QA sign-off, proceed to deployment (separate phase).

---

*Stop after Phase 19C. Not merged into the homepage. Not deployed.*
