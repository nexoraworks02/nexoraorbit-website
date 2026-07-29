# Phase 19B — Hero Lab Prototype Report

**Project:** NEXORA ORBIT · **Route:** `/hero-lab` (isolated, noindex)
**Status:** Prototype complete, verified in-browser, ready for creative review.
**Not merged into the production homepage. Not deployed.**

---

## 1. Route created

- `src/app/hero-lab/page.tsx` — server component, imports scoped CSS, renders the
  client experience.
- Metadata: title `Hero Lab — NEXORA ORBIT`, description as specified,
  `robots: { index: false, follow: false }` → renders `<meta name="robots"
  content="noindex, nofollow">` (verified in built HTML).
- `/hero-lab` **added to `robots.ts` disallow** (verified in built `robots.txt`).
- **Not in `sitemap.ts`** (verified absent from built `sitemap.xml`).
- Not linked from any production navigation. Excluded from the global
  `MotionRuntime` so the prototype fully self-manages its motion.

## 2. Implementation approach

**CSS/DOM/SVG prototype** (not R3F).

Dependency inspection of `package.json` found **none** of `three`,
`@react-three/fiber`, `@react-three/drei`, `gsap`, or `framer-motion` (only
`next`, `react`, `react-dom`). Per the phase instruction, no heavy dependencies
were installed without reporting. The prototype delivers the full cinematic feel
with CSS animations, SVG signal lines, transform-based parallax, and
IntersectionObserver — which is also the accessible baseline defined in the
Phase 19A spec.

### Dependencies that WOULD be needed for the full WebGL version (not installed)
- `three`, `@react-three/fiber`, `@react-three/drei` — scene/geometry/materials.
- `@react-three/postprocessing` (+ `postprocessing`) — restrained bloom/vignette.
- `gsap` (+ `@gsap/react`) — master boot timeline + scrubbed scroll handoff.
- Optional build tooling: `draco`/`meshopt` (GLTF), KTX2/Basis (textures).

Recommendation: gate the WebGL layer behind the existing CSS hero as progressive
enhancement (per Phase 19A §12 tiering), so bundle cost is lazy and the CSS
version remains the guaranteed fallback.

## 3. Components created

```
src/components/hero-lab/
  HeroLabExperience.tsx     // "use client" orchestrator: state, parallax, in-view pause
  HeroLabScene.tsx          // bloom, fog, SVG signal lines, particles, system visual
  HeroLabContent.tsx        // semantic hero copy (1× H1, real CTA links)
  HeroLabSystemVisual.tsx   // floating glass panels + cyan data nodes
  HeroLabParticles.tsx      // deterministic sparse particle field (no Math.random)
  HeroLabFallback.tsx       // static premium composition (scene = "fallback")
  HeroLabScrollBridge.tsx   // "services handoff" section (4 capability chips)
  HeroLabControls.tsx       // non-intrusive lab debug panel
src/styles/hero-lab.css     // scoped, `hl-`-namespaced, token-driven
src/app/hero-lab/page.tsx   // noindex route
```
R3F-specific files (`HeroLabCanvas`, `HeroGeometry`, `ParticleField`,
`GlassPlanes`, `SignalLines`, `CameraRig`, `Lights`) were intentionally **not**
created — deferred to the WebGL phase once dependencies are approved.

## 4. Animation sequence implemented (per §7)

| Time | Beat | Mechanism |
|---|---|---|
| 0.0s | Header/notice/content present immediately (SSR) | — |
| 0.2s | Blue/violet atmospheric bloom fades in | `hl-bloom-in` |
| 0.4s | Panels slide/fade from depth; signal lines trace; nodes pulse in | `hl-panel-in`, `hl-line-trace`, `hl-node-in` |
| 0.6s | Eyebrow reveals | `hl-fade-lift` |
| 0.7s / 0.79s | Headline reveals line by line (90ms stagger) | `hl-line-reveal` |
| 1.0s | Subheadline fades up | `hl-fade-lift` |
| 1.2s | CTAs reveal | `hl-fade-lift` |
| 1.3s | Trust note fades in | `hl-fade-lift` |

All reveals are opacity/transform only. **No layout shift, no scroll lock, no
blocking loader.** CTAs are real links with `pointer-events: auto` from first
paint (verified). Easings use the token cubic-beziers (`--ease-enter`,
`--ease-standard`, `--ease-precise`).

**Ambient motion:** slow glow drift (11–13s), node breathe (~5.2s), soft-line
opacity shimmer (6s), panel float (7–9.5s), desktop pointer parallax (±,
rAF-damped, clamped to ~1 normalized unit ≈ small degrees). Ambient loops
**pause when the hero scrolls offscreen** (`data-hl-inview="false"` →
`animation-play-state: paused`).

## 5. Reduced-motion support

Three layers, all verified:
- **OS** `prefers-reduced-motion: reduce` (authoritative media query).
- **Control simulation** (`data-hl-reduced="true"`) for review without OS change.
- Combined `motionActive = motionOn && !reduced`.

Under reduced/motion-off: no parallax, no ambient loops, no scene animation;
content is **statically visible (opacity 1, no transform)** — immune to a frozen
animation clock, guaranteeing readability. Focus states are untouched. Verified
in-browser: toggling Reduced → node `animation-name: none`, H1 `opacity: 1`.

## 6. Mobile fallback (390px, verified)

- Content-first single-column; CTA visible in the first viewport (top 597 < 844).
- **No horizontal overflow** (`scrollWidth` = 390).
- Parallax disabled (`transform: none`); particles trimmed 18 → 6; panel float off.
- Text wraps cleanly (fluid `clamp()` headline).

## 7. Performance notes

- Animations use **transform/opacity only**; no animated layout properties.
- Pointer parallax is **rAF-throttled + damped** (single lerp loop, self-halting).
- Ambient loops **pause offscreen** via IntersectionObserver.
- No box-shadow/blur *animation* (blur is static on glass); no real-time shadows.
- No WebGL, no GLB model, no postprocessing, no video, no large textures.
- Particle count capped (18 desktop / 8 low / 6 mobile / 0 static).
- Scoped CSS loads only on `/hero-lab` (Next per-route CSS splitting).

## 8. Accessibility notes

- Exactly **one `<h1>`**; all decorative scene layers `aria-hidden="true"`.
- CTAs are real `<Link>`s (`/contact`, `/services`); 48px min height; visible
  `:focus-visible` ring (token `--focus-ring-*`).
- Content readable with animation off/failed (static-visible fallback proven).
- SVG signal graphic marked `role="presentation"`.
- Lab controls are real `<button>`s with `aria-pressed` and grouped labels.

## 9. QA results

| Check | Result |
|---|---|
| `/hero-lab` renders, zero console errors (isolated tab) | ✅ |
| `/hero-lab` noindex meta | ✅ `noindex, nofollow` |
| `/hero-lab` in robots disallow | ✅ |
| `/hero-lab` absent from sitemap | ✅ |
| No old branding (NEXORA WORKS / Orbit Digital) / WhatsApp | ✅ none |
| Production `/` unchanged + zero console errors | ✅ |
| `/services`, `/contact` unaffected | ✅ (homepage/site untouched) |
| One H1, scene aria-hidden, real CTA links | ✅ |
| Reduced-motion + motion-off → readable static content | ✅ opacity 1 |
| Mobile 390px: no overflow, CTA early, simplified scene | ✅ |
| Keyboard focus ring present | ✅ (token focus styles) |
| `npm run lint` / `typecheck` / `build` | ✅ all pass (46 pages) |

**Verification caveat:** the harness browser tab runs `visibilityState: "hidden"`,
which freezes CSS animation clocks, so the *first-visit reveal playback* and
screenshots could not be captured. Reveal wiring, all computed styles, control
behavior, reduced-motion/mobile paths, and accessibility were verified via DOM +
computed-style inspection. One human pass on a visible screen is recommended to
confirm the subjective feel of the boot sequence.

## 10. Known limitations

- CSS/DOM prototype — not the full WebGL depth of the Phase 19A spec (no true 3D
  camera dolly, real materials, volumetric fog, or particle magnetism).
- The "Scene: 3D*/Static" control currently switches between the full CSS scene
  and a static glow composition; the "3D" label is a placeholder until R3F lands.
- First-visit boot-skip for repeat visitors (Phase 19A §12) is not implemented in
  this prototype (single-session lab route); trivial to add with `sessionStorage`.
- Screenshot/animation-playback verification blocked by the hidden-tab harness.

## 11. Ready for creative review?

**Yes.** `/hero-lab` is a stable, accessible, performant, on-brand prototype that
communicates the intended "premium digital operating system" feel and lets a
reviewer toggle motion, particle density, scene mode, and reduced-motion live.

## 12. Next recommendation

1. **Creative review** of `/hero-lab` on a real screen; collect direction on
   intensity, timing, and composition.
2. If the direction is approved, **decide on the WebGL upgrade**: approve the R3F
   dependency set (§2) and build the 3D layer as progressive enhancement behind
   this CSS baseline (Phase 19A tiering), keeping the CSS version as the
   guaranteed fallback.
3. Only after sign-off, plan the controlled merge into the production homepage
   hero (separate phase) — the current homepage stays untouched until then.

*Stop after Phase 19B. Not merged. Not deployed.*
