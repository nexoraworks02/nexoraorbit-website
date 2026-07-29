# Phase 19D — Hero Lab WebGL 3D Hero (Build Report)

**Project:** NEXORA ORBIT · **Route:** `/hero-lab` (isolated, noindex)
**What:** Built the real WebGL cinematic hero (from the approved infographic /
Phase 19A spec) as a progressive enhancement over the CSS prototype.
**Not merged into the homepage. Not deployed. Homepage untouched.**

---

## Decisions confirmed with the user

1. **Install the 3D stack** — approved.
2. **3D centerpiece = the official NEXORA "X" mark** (not the "N" shown in the
   reference infographic, which was an older mock).
3. **Build in `/hero-lab` first** — approved.

Brand correction applied: the infographic said "**NEXORA WORKS**"; this build
uses **NEXORA ORBIT** throughout (the old name was retired in Phase 18D) and our
existing color/motion tokens (not the infographic's slightly different hexes).
We are on **Next.js 16** (infographic said 15) — no change needed.

## Dependencies installed

| Package | Version | Purpose |
|---|---|---|
| `three` | ^0.185 | WebGL engine |
| `@react-three/fiber` | ^9.6 | React renderer for three (React 19 compatible) |
| `@react-three/drei` | ^10.7 | Helpers (RoundedBox, Float, Environment, Lightformer, Line) |
| `@react-three/postprocessing` | ^3.0 | Bloom / vignette |
| `gsap` | ^3.15 | Camera boot timeline |
| `@types/three` (dev) | latest | Types |

The full stack compiles into a **single lazy chunk (~1.2 MB uncompressed,
≈300–400 KB gzipped)** loaded via `dynamic(ssr:false)` **only when the 3D scene
mounts** — it is not in the initial `/hero-lab` payload and never blocks content.

## Architecture — progressive enhancement

```
HeroLabExperience (client)
├─ HeroLabContent            semantic hero (SSR): 1×H1, real CTA links — always present
├─ scene (decorative, aria-hidden), chosen by tier + controls:
│   ├─ HeroLab3DScene        dynamic(ssr:false) → HeroLabCanvas   [cinematic]
│   │    └─ <Canvas> SceneLights · OrbitCoreMark(X) · ParticleField3D
│   │       · NodeNetwork3D · CameraRig(GSAP) · PostFX(Bloom/Vignette)
│   ├─ HeroLabScene          CSS/SVG scene                        [css fallback]
│   └─ HeroLabFallback       static composition                  [static / reduced]
├─ HeroLabScrollBridge       "opens into capabilities" section
└─ HeroLabControls           Motion / Particles / Scene(3D·CSS·Static) / Reduced
```

- **SSR renders the content + CSS scene** (deterministic, hydration-safe); after
  mount a capability probe (`detectHeroTier`) upgrades the scene to WebGL when
  supported. Until the lazy chunk loads — and on any WebGL failure — content stays
  fully visible.
- **Reduced-motion** (OS or control) forces the **static** scene (no WebGL, no
  motion) — content uses a simple opacity reveal.

## Files created

```
src/lib/hero-lab/webgl-tier.ts                 capability probe → tier config
src/components/hero-lab/HeroLab3DScene.tsx      dynamic(ssr:false) wrapper
src/components/hero-lab/canvas/
  HeroLabCanvas.tsx    <Canvas>: dpr cap, frameloop gate, ACES tone mapping
  SceneLights.tsx      key/rim/fill/accent + procedural Environment (Lightformers)
  OrbitCoreMark.tsx    the NEXORA X — two beveled dark-titanium bars, Float + light-breathe
  ParticleField3D.tsx  additive point cloud (seeded), slow orbital drift
  NodeNetwork3D.tsx    emissive cyan nodes + connection lines
  CameraRig.tsx        GSAP boot dolly (Power4.out) → ambient orbit + parallax + scroll dolly
  PostFX.tsx           Bloom + Vignette (desktop/laptop only)
```
Updated: `HeroLabExperience.tsx` (tier + scene switch), `HeroLabControls.tsx`
(3D/CSS/Static + `webglSupported`), `hero-lab.css` (canvas fill rule).

## Scene specification (as built)

- **Camera:** perspective FOV 42, near 0.1 / far 60. Boot dolly `(0,0.6,12) →
  (0.4,0.3,6)` over 2.4s `power4.out`; then ambient azimuth drift ±0.25,
  pointer parallax (damped, `pointer:fine` only), and a subtle scroll-forward
  dolly (read in-frame, no scroll listener, no scroll-jacking).
- **X mark:** two `RoundedBox` bars (±45°) in an isometric group; MeshPhysical
  dark titanium (metalness 0.92, roughness 0.34, clearcoat 0.6, envMapIntensity
  1.15); floats via `<Float>`; **breathes through emissive light, not scale.**
- **Lighting:** cool blue-white key, violet rim, cyan point accent, low ambient +
  hemisphere; procedural `Environment` (blue + violet + white Lightformers,
  `frames={1}`) for offline metal reflections.
- **Particles:** additive point cloud, 1600 desktop / 550 mobile / ×0.5 on "low";
  seeded positions; whole-cloud slow rotation (GPU-cheap).
- **Nodes:** 8 emissive cyan nodes + 6 connection lines (bloom picks them up).
- **Post:** Bloom (threshold 0.62, intensity 0.6, mipmap) + Vignette; **off on
  mobile**. ACES tone mapping.

## Accessibility

- Content is **server-rendered semantic HTML** (verified in served markup): one
  `<h1>`, real `<p>`, real `<a>` CTAs → fully usable with **no JS/WebGL**.
- The `<Canvas>`/scene wrapper is `aria-hidden`; canvas is pointer-events-none
  (parallax uses a window listener), so it never traps focus or blocks clicks.
- Reduced-motion → static scene, opacity-only reveal, no camera/particles/parallax.

## Performance

- Heavy 3D chunk is **lazy** (`dynamic ssr:false`), loaded after paint, only for
  cinematic tier. Content/LCP never blocked.
- **DPR capped** (2 desktop / 1.5 mobile); **`frameloop` pauses** when the hero is
  offscreen or motion is off (render loop stops entirely).
- Mobile: fewer particles, no post-processing, lower DPR.
- transform/opacity + emissive only; one procedural env baked once; no external
  HDRI/GLB/textures/video.

## Build / lint / typecheck

| Command | Result |
|---|---|
| `npm run lint` | ✅ pass |
| `npm run typecheck` | ✅ pass |
| `npm run build` | ✅ pass (46 pages) |

Two lint rules from the new `react-hooks` set needed scoped, justified handling:
- `react-hooks/immutability` on the R3F camera — resolved by mutating the camera
  via the `useFrame` state param (idiomatic).
- `react-hooks/set-state-in-effect` on the mount-time capability probe — scoped
  `eslint-disable` with justification (client-only detection must run after mount).

## SEO / isolation (unchanged from Phase 19B/C, re-verified)

- `/hero-lab`: `noindex, nofollow` (verified in served HTML), disallowed in
  `robots.txt`, absent from `sitemap.xml`, not linked from production nav.

## Known limitations / risks

- **Bundle:** the 3D stack is ~1.2 MB uncompressed (lazy). For production, prune
  `drei` imports (only what's used) and consider dropping `postprocessing` on
  lower tiers to shrink the chunk.
- The **X mark is procedural** (two beveled bars), not an imported optimized GLB —
  intentionally, to avoid a heavy model this phase; it reads as the mark but a
  future GLB of the exact brand geometry would be more faithful.
- **Visual playback not yet captured in-harness:** the QA browser froze animation
  clocks (hidden tab) and, during this build, the browser-tool safety classifier
  was temporarily unavailable — so live 3D verification is pending. The route is
  confirmed serving (HTTP 200) with correct SSR content, noindex, and a clean
  build; **a human should open `/hero-lab` on a real screen to confirm the 3D
  scene renders and feels right.**
- WebGL support in some embedded/headless browsers is uncertain; the tier probe
  falls back to the CSS/static scene when WebGL2 is unavailable.

## Status / next

- **Ready for visual review on a real screen.** Dev server left running at
  `http://localhost:3000/hero-lab`.
- After review: tune intensities/timing, then (a later phase) extract a
  production `Hero`, drop the lab chrome/controls, prune the bundle, and merge
  behind the CSS fallback — with a full re-QA on `/`.

*Stop after Phase 19D. Not merged. Not deployed.*
