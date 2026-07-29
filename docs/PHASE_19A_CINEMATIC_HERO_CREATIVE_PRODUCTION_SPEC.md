# Phase 19A — Cinematic Hero Experience

## Creative Production Specification · NEXORA ORBIT

> **Status:** Approved-for-build creative specification. Implementation-ready.
> **Scope:** The official homepage (`/`) hero experience only.
> **North star:** *Complex technology, shaped into elegant systems.*
> **This document contains no production code by design.** It is the single
> source of truth handed to UI design, motion, 3D, R3F/GSAP engineering,
> frontend, and performance. Every creative decision below is final; engineers
> and artists should not need to invent creative direction.

---

## 0. Governing principles (read first)

1. **Content is never hostage to cinematics.** The semantic hero (H1, copy,
   CTAs) is server-rendered, present in the DOM at first byte, and becomes
   readable and clickable on a track that is fully decoupled from the 3D boot
   sequence. If WebGL never loads, the hero is still complete and premium.
2. **Two parallel tracks.** Track A = *Content Accessibility* (fast, guaranteed).
   Track B = *Cinematic Backdrop* (richer, progressive, cancellable). Track B
   enhances; it never gates Track A.
3. **Progressive enhancement over the existing Phase 18E hero.** The current
   CSS/DOM hero (`HomepagePreview.tsx` → `HeroSection`) is the accessible
   baseline and the reduced-motion / no-WebGL fallback. The 3D layer mounts
   *behind and around* it. We are not replacing the DOM hero; we are giving it a
   spatial environment.
4. **Restraint is the brand.** Every effect is dialled to "enterprise premium,"
   not "showreel." When in doubt, reduce intensity by 20%.
5. **Token-locked palette & motion.** All colors, durations, and easings below
   map to existing design tokens in `src/styles/tokens.css` and
   `src/lib/tokens/*`. The 3D scene must not introduce off-brand hues.

### Token reference (authoritative source values)

| Token | Value | Role in hero |
|---|---|---|
| `--brand-navy-950` | `#050816` | Scene base / fog color / near-black arrival |
| `--brand-navy-900` | `#080d1f` | Deep environment gradient |
| `--ink-900` | `#0b1020` | Dark titanium base albedo |
| `--brand-blue-600` | `#2563ff` | Primary energy / gradient start |
| `--brand-blue-500` | `#3b82ff` | Signal core |
| `--brand-blue-400` | `#60a5fa` | Key light tint / focus ring |
| `--brand-purple-600` | `#7c3aed` | Gradient mid / violet rim |
| `--accent-violet` | `#a855f7` | Rim light / gradient end |
| `--accent-cyan` | `#22d3ee` | Data nodes / signal traces |
| `--accent-silver` | `#cbd5e1` | Soft chrome |
| `--gradient-primary` | `linear-gradient(135deg,#2563ff 0%,#7c3aed 52%,#a855f7 100%)` | CTA + brand energy |
| `--duration-instant` | `80ms` | Micro feedback |
| `--duration-fast` | `140ms` | Hover / press |
| `--duration-base` | `220ms` | Standard transitions |
| `--duration-slow` | `360ms` | Content reveal (reduced) |
| `--duration-cinematic` | `700ms` | Hero line reveal / scene beats |
| `--ease-standard` | `cubic-bezier(0.2,0,0,1)` | General |
| `--ease-enter` | `cubic-bezier(0.16,1,0.3,1)` | Reveals (Expo.out feel) |
| `--ease-exit` | `cubic-bezier(0.7,0,0.84,0)` | Departures |
| `--ease-precise` | `cubic-bezier(0.4,0,0.2,1)` | Signal trace / mechanical |
| Font sans | Inter / system stack | All hero copy |
| Font mono | JetBrains Mono | System-status micro labels |

### Locked hero copy (do not paraphrase)

- **Eyebrow:** `Premium Technology Partner`
- **Headline (H1):** `Build intelligent digital systems for the next stage of your business.`
- **Subheadline:** `NEXORA ORBIT combines software engineering, AI solutions, cloud architecture, mobile apps, web development, branding, and digital growth into practical systems for companies ready to scale.`
- **Primary CTA:** `Book a Consultation` → `/contact`
- **Secondary CTA:** `Explore Services` → `/services`
- **Trust note:** `Software · AI · Cloud · Web · Mobile · Brand · Growth`

---

## 1. Emotional & narrative arc

The visitor traverses a single continuous emotional gradient. Each scene owns
one beat; no beat repeats or regresses.

```
Curiosity → Wonder → Trust → Technical Excellence → Confidence → Desire to Explore
   S1         S2       S3           S3–S4              S4–S5           S6
```

The felt metaphor: **booting into a premium digital operating system.** Not a
game, not a crypto dashboard, not a sci-fi film — an instrument of precision
engineering that happens to be beautiful.

---

## 2. Scene-by-scene direction

Timings below are the **first-visit desktop** cinematic budget. Repeat-visit,
reduced-motion, mobile, and low-power variants are defined in §12–§14.

Global rule reaffirmed: **the H1 is readable and CTAs are clickable no later
than 900 ms after first paint, independent of scene progress.**

### Scene 1 — Instant Arrival / System Awake · `0 – 700ms`

| Aspect | Direction |
|---|---|
| Opening frame | Near-black `#050816` (never pure `#000`). Faint radial vignette. |
| Signal | A single blue-white point (`#3b82ff` core → `#eaf2ff` center) ignites at world origin, ~2–4px screen size, at depth (camera far). |
| Atmosphere | Blue (`rgba(37,99,255,0.22)`) and violet (`rgba(124,58,237,0.18)`) volumetric blooms fade from 0 → target over 500ms, `--ease-standard`. |
| Particles | 0 → ~30% of full count drift in from depth, slow, low opacity (0 → 0.35). |
| Motion | No flash, no snap, no sound, no loading wall. Camera holds, barely breathing. |
| DOM | Full hero markup already in DOM (SSR). Poster frame visible under/behind canvas until first WebGL frame swaps in. |
| Emotional goal | Curiosity, premium anticipation. |

### Scene 2 — Digital Construction · `400 – 1200ms` (overlaps S1)

| Aspect | Direction |
|---|---|
| Particle organization | Particles ease from random drift into **orbital paths** around origin (3 nested elliptical bands, inclinations 8°/−14°/22°). |
| Connective lines | Thin (`0.75px` equivalent) lines trace between nearest nodes using `--ease-precise`; opacity 0 → 0.5; drawn as animated `dashOffset`, not popped. |
| Geometry assembly | The NEXORA **X mark** (mirrors `public/brand/nexora-mark.png` silhouette) assembles as **dark titanium** extruded geometry — beveled, isometric, engineered. Pieces slide/settle into place from ±0.3 units with `Power4.out`, staggered 60ms per segment. Never a simple fade. |
| Glass planes | 2–3 frosted interface planes fade + slide into parallax layers behind the mark. |
| Materials in view | Dark titanium, frosted glass, soft chrome edges, blue reflections, violet rim, restrained bloom. |
| Forbidden | Excess glow, neon cyberpunk, crypto grids, sci-fi debris, gaming sparks. |
| Emotional goal | Engineering, precision, technical excellence. |

### Scene 3 — Logo Signal / Brand Resolve · `1200 – 1800ms`

| Aspect | Direction |
|---|---|
| Completion | Mark finishes construction; a single soft chrome "settle" reflection sweeps across its faces (anisotropic highlight travelling left→right, 600ms). |
| Camera | Very slow cinematic orbit begins — azimuth drifts within ±6°, elevation +4°, radius steady. Weighted, deliberate. |
| Float | Mark floats subtly on a sine bob: ±0.04 units Y, 6s period. |
| Breathing | The mark "breathes" via **light, not scale** — rim/emissive intensity oscillates ±12% on an 8s sine. Geometry never scales. |
| Particles | Continue calm orbital motion around the mark. |
| Constraint | This must read as *the hero environment*, not an intro video. By its end the scene is already the interactive resting state. |
| Emotional goal | Innovation + premium confidence. |

### Scene 4 — Entering the NEXORA ORBIT System · `600 – 1600ms` (Content Track, runs concurrently)

The camera creeps toward the mark; the mark **opens into a spatial system**
(it does not vanish) — floating grids, glass interface planes, soft volumetric
fog, controlled light rays, sparse particles, system nodes, abstract product
panels resolve at mid-depth. Simultaneously the **DOM content sequence** plays
(this is the accessibility-critical track):

| Order | Element | Start | Reveal |
|---|---|---|---|
| 0 | Navigation (already present) | `0ms` | Present; subtle 200ms opacity settle only |
| 1 | Eyebrow | `600ms` | fadeLift 24px, `--duration-cinematic`, `--ease-enter` |
| 2 | Headline line group 1 | `700ms` | line reveal, 28px, 700ms |
| 3 | Headline line group 2 | `790ms` | +90ms stagger |
| 4 | Subheadline | `1000ms` | softFade + 18px, 700ms |
| 5 | CTA row | `1200ms` | fadeLift 20px, 600ms |
| 6 | Trust note | `1300ms` | softFade, 500ms |

**Hard guarantee:** even though these are the *polished* reveal timings, the
underlying text is real DOM at 0ms; reveals are opacity/transform only, pointer
events are never disabled, and the whole content track completes by **1600ms**
first-visit / **≤500ms** repeat & reduced.

### Scene 5 — Interactive Hero (resting/ambient loop) · `1800ms → ∞`

Pointer-driven, subtle, high-end. All values are **maximums.**

| Input | Response | Limit |
|---|---|---|
| Mouse move | Camera parallax | ±3° azimuth, ±2° elevation, damped (lerp 0.06) |
| Mouse move | Logo depth response | ±0.05 units Z counter-parallax |
| Mouse near mark | Particle attraction | radius 1.6 units, max pull 0.08 units, eased |
| Mouse move | Light reflection shift | env rotation ±4° |
| Mouse move | Glass panel highlight | specular hotspot tracks cursor, 0.2 strength |
| Mouse near node | Node brightness | emissive ×1.4, 180ms in / 320ms out |

CTA hover (see §9 for exact values): glass brightens, border illuminates, a soft
blue energy sweep travels the button edge, lift 1px, press compress `scale(0.99)`.

Rules: no hover-only meaning, no aggressive cursor-follower, pointer response
disabled on touch, everything off under reduced-motion.

### Scene 6 — Scroll Transition Into Services · `scroll 0 → ~90vh`

| Aspect | Direction |
|---|---|
| Camera | Continues a slight forward dolly (Z −2.4 units across the handoff range). |
| Depth | Hero visual depth compresses; fog density rises 0.055 → 0.085. |
| Flow | Particles + nodes reorient into a **downward directional flow**; connection lines lengthen and point the eye toward the Capability Snapshot. |
| Handoff | Hero canvas opacity 1 → 0 across the last 30vh; Capability Snapshot section takes over (its Phase 18E reveal fires normally). |
| Feel | Moving *deeper into* the ecosystem, not leaving it. |

**Absolute rules:** No scroll-jacking. No scroll lock. No pinned section unless
a dedicated perf/usability spike proves 60fps and full accessibility. Normal
native scrolling always works; the camera reacts to scroll progress via a
scrubbed (not triggered) mapping.

---

## 3. Coordinate system & scene layout

- **Units:** 1 three.js unit ≈ 1 meter. Right-handed, Y-up.
- **Origin `(0,0,0)`:** geometric center of the NEXORA X mark.
- **Mark bounds:** ~2.4 (w) × 2.4 (h) × 0.5 (d) units, centered.
- **Environment volume:** particles/nodes occupy a `±6 × ±3.5 × ±5` box; glass
  planes at Z = −1.2, −2.6, −4.0.
- **DOM overlay:** hero content lives in the standard container, z-indexed above
  the canvas; canvas is `position: fixed`-within-hero or `absolute` behind the
  content grid, `pointer-events: none` except where interaction is intended.

---

## 4. Camera specification

| Parameter | Desktop | Mobile |
|---|---|---|
| Lens / FOV | **40°** | **46°** |
| Near / Far | 0.1 / 60 | 0.1 / 60 |
| Target | `(0, 0, 0)` (mark center); mouse adds ≤±0.15 offset | `(0,0,0)` fixed |
| Up | `(0,1,0)` | `(0,1,0)` |
| Initial position (S1) | `(0.0, 0.20, 12.0)` | `(0.0, 0.15, 12.8)` |
| Construction (S2 end) | `(0.55, 0.35, 6.6)` | `(0.2, 0.25, 7.6)` |
| Resting orbit center (S3/S5) | radius **5.8**, azimuth 0°±6°, elevation +4° | radius 7.0, azimuth 0°±3°, elevation +3° |
| Rest position (nominal) | `(0.40, 0.25, 5.60)` | `(0.0, 0.18, 7.0)` |
| Scroll-end position (S6) | `(0.0, 0.0, 3.20)` | `(0.0, 0.0, 4.6)` |

**Dolly speed / curves**

- S1→S2 dolly (Z 12 → 6.6): 900ms, **Expo.out** (`--ease-enter`). Weighted.
- S3 orbit: continuous, **linear-with-sine-ease** (a 24s full ±6° oscillation),
  never a full spin.
- Scroll dolly: **scrubbed** to scroll progress, `ScrollTrigger scrub: 0.6`
  (0.6s catch-up smoothing), linear mapping of scroll 0→0.9vh to Z 5.6→3.2.
- Parallax: mouse → target offset, **damped lerp 0.06/frame**, clamped ±3°
  azimuth / ±2° elevation. Deadzone 4% center to avoid jitter.

**Motion-sickness guards:** no roll ever; no FOV animation > 3°; no camera
acceleration above 6 units/s²; orbit capped at ±6°/±8° absolute.

**Mobile simplification:** no continuous orbit (static framed composition +
device-tilt disabled by default); parallax reduced to ±1.5° or off; scroll dolly
retained but shortened (Z 7.0→4.6).

---

## 5. Lighting specification

Procedural three-point + accent, tuned for dark-first premium.

| Light | Type | Color (temp) | Intensity | Position / notes |
|---|---|---|---|---|
| Key | Directional | `#cfe0ff` (~7200K cool blue-white) | 1.4 (range 1.1–1.7) | `(-4, 5, 3)`, soft shadow, upper-left |
| Rim | Directional | `#a855f7` violet | 1.1 (0.8–1.3) | `(5, 1.5, -4)`, rear-right, edge separation |
| Fill | Hemisphere | sky `#0b1430` / ground `#05070f` | 0.35 | global soft lift |
| Ambient | Ambient | `#0a1024` | 0.25 | floor to prevent crushed blacks |
| Node accents | Point ×(3–5) | `#22d3ee` cyan | 0.6 each | at key nodes, distance 3, decay 2 |
| Signal core | Point | `#3b82ff` | 0.8 → breathes ±12% | at origin during S1–S3 |

- **Environment reflection:** procedural studio env (drei `Environment` w/
  Lightformers) at resolution **256**, OR a baked **1K KTX2 HDRI** (`≤180KB`).
  `envMapIntensity` per-material (see §7). No sky visible; env is reflection-only.
- **Fog:** `FogExp2`, color `#050816`, density **0.055** (rest) → **0.085**
  (scroll-end). Depth cueing only; never obscures the mark.
- **Shadows:** at most **one** soft contact shadow under the mark
  (`drei ContactShadows`, blur 2.4, opacity 0.35, resolution 512). No real-time
  cascaded shadows. Mobile: shadows off, use a baked radial gradient sprite.
- **Bloom relationship:** only emissive materials above threshold bloom (see §8).
- **Shadow softness / color temp / intensity ranges** as tabled; artists may
  trim ±15% but must preserve the cool-key / violet-rim / cyan-accent hierarchy.

---

## 6. Environment specification

- **Backdrop:** radial gradient baked into scene clear color / a large inward
  sphere: center `rgba(37,99,255,0.10)` → `#080d1f` → `#050816` edges. Matches
  `--gradient-background-deep`.
- **Floating grids:** 1–2 faint reference grids (line color `rgba(96,165,250,0.10)`),
  parallaxed, fading with distance. Subtle — a hint of structure, not a crypto grid.
- **Volumetric fog / light rays:** 2 soft god-ray cones from key/rim direction,
  additive, opacity ≤0.06, animated drift 12s. Desktop-only.
- **Glass interface planes:** 2–3 rounded-rect frosted panels (frosted glass
  material) at staggered depth, each carrying an abstract "product panel" texture
  (see §16 texture list) at ≤0.3 opacity.
- **System nodes & connection lines:** see §7 (Digital Glow) + §8 timing.

---

## 7. Material library (exact PBR values)

All use `MeshPhysicalMaterial` unless noted. Values are targets; artists tune
±10% against the env map. **No material may reduce text legibility** — glass
panels sit behind copy, never under it, and the copy backing keeps ≥ contrast
per §11.

### 7.1 Dark Titanium — *the mark body*
```
color              #0b1020  (base)  → subtle vertical ramp to #141a2e
metalness          0.92
roughness          0.34
clearcoat          0.60
clearcoatRoughness 0.28
reflectivity       0.50
envMapIntensity    0.90
anisotropy         0.25  (brushed feel along mark long-axis)
emissive           #0a1230 @ intensity 0.06 (self-lift only)
```
Use: the NEXORA X mark, structural frames.

### 7.2 Frosted Glass — *interface planes*
```
transmission       0.90
roughness          0.28
thickness          0.60
ior                1.45
attenuationColor   #dbe6ff
attenuationDistance 3.0
color              #eaf1ff  @ very low tint
opacity            (via transmission; material transparent)
clearcoat          0.20
envMapIntensity    1.00
```
Perf note: transmission is expensive. **Desktop only.** Laptop/mobile use the
Frosted-Glass-Lite fallback: opaque `MeshStandardMaterial` `color #0c1428`,
`opacity 0.5`, `roughness 0.5`, plus a CSS `backdrop-filter: blur()` panel or a
pre-blurred texture. Use: floating interface planes, hero "system" panels.

### 7.3 Soft Chrome — *accent edges / rim frames*
```
metalness          1.00
roughness          0.12
color              #cbd5e1  (accent-silver)
envMapIntensity    1.20
clearcoat          0.10
```
Use: mark bevel edges, node rings, panel trim. Small area only (chrome overdone
reads cheap).

### 7.4 Frosted Acrylic — *abstract product panels*
```
transmission       0.40   (or opacity 0.42 on lite tier)
roughness          0.50
thickness          0.30
scattering/attenuationColor #1a2a5a
color              #0e1630
edge emissive rim  #60a5fa @ intensity 0.4 (thin fresnel edge)
```
Use: the abstract product/UI panels floating in the system space.

### 7.5 Digital Glow — *nodes & signal traces*
```
material           MeshBasicMaterial or emissive-only Standard
emissive/color     #22d3ee (cyan)  primary
                   #60a5fa (blue)  secondary
emissiveIntensity  1.8  (range 1.4–2.4; sits above bloom threshold)
toneMapped         false  (so bloom reads cleanly)
size               nodes 0.03–0.06 units; lines 0.6–0.9px equiv
```
Use: data nodes, connection line highlights, signal core. This is the *only*
element allowed to glow, and it stays sparse — "data intelligence," not sparks.

---

## 8. Motion specification (master timeline, first-visit desktop)

Driver: **one GSAP master timeline** (`heroBoot`) for choreographed beats +
R3F `useFrame` for ambient/interactive loops + one **ScrollTrigger (scrub)** for
the S6 handoff. Easing vocabulary is professional only — Power4.out, Expo.out,
Circ.out, and the token cubic-beziers. **No `ease: "none"` on visible reveals,
no default `power1`.**

| # | Beat | Start | Dur | Ease | Property |
|---|---|---|---|---|---|
| 1 | Boot signal ignite | 0 | 260 | Expo.out | signal scale 0→1, emissive 0→1.8 |
| 2 | Atmosphere bloom | 120 | 520 | `--ease-standard` | blue+violet volume opacity 0→1 |
| 3 | Particle arrival | 200 | 620 | Circ.out | 0→100% count, opacity 0→0.35 |
| 4 | Camera dolly S1→S2 | 300 | 900 | Expo.out (`--ease-enter`) | Z 12→6.6 |
| 5 | Orbital organize | 420 | 700 | `--ease-precise` | particles random→orbit |
| 6 | Node connect (dash) | 560 | 640 | `--ease-precise` | lineDashOffset full→0, op 0→0.5 |
| 7 | Mark assemble (staggered) | 500 | 780 | Power4.out, 60ms stagger | segments settle ±0.3→0 |
| 8 | Glass planes settle | 700 | 620 | Expo.out | opacity 0→target, Z slide |
| 9 | Chrome settle sweep | 1200 | 600 | Circ.out | anisotropic highlight L→R |
| 10 | Eyebrow reveal | 600 | 700 | `--ease-enter` | opacity/Y 24→0 |
| 11 | Headline lines (×2–3) | 700 | 700 | `--ease-enter`, 90ms stagger | opacity/Y 28→0 |
| 12 | Subheadline | 1000 | 700 | `--ease-enter` | opacity/Y 18→0 |
| 13 | CTA row | 1200 | 600 | `--ease-enter` | opacity/Y 20→0 |
| 14 | Trust note | 1300 | 500 | `--ease-standard` | opacity 0→1 |
| 15 | Orbit begins (ambient) | 1400 | ∞ | sine | azimuth ±6° / 24s |
| 16 | Light breathe (ambient) | 1600 | ∞ | sine | emissive ±12% / 8s |
| 17 | Float bob (ambient) | 1600 | ∞ | sine | mark Y ±0.04 / 6s |

**Ambient loops** run via `useFrame` (delta-time based, not wall-clock) and
**pause when the hero is scrolled out of view or tab hidden** (see §13).

**Scroll handoff (S6):** ScrollTrigger `scrub: 0.6`, `start: "top top"`,
`end: "+=90%"`, mapping progress→{ camera Z, fog density, particle flow vector,
canvas opacity }. No pin.

**Hover response:** see §9. **Reduced-motion:** timeline replaced by a single
360ms opacity fade of content; canvas shows one static frame or poster (§14).

---

## 9. CTA & micro-interaction motion (exact)

Applies to the two hero CTAs (real `<Link>`/`<a>`). Consistent with existing
`Button`/`LinkButton` tokens.

| State | Property | Value | Timing / ease |
|---|---|---|---|
| Rest (primary) | background | `--gradient-primary` | — |
| Rest (primary) | shadow | `--glow-blue-soft` | — |
| Hover (primary) | shadow | `--glow-blue-strong` | 180ms `--ease-standard` |
| Hover | border energy sweep | conic highlight travels edge once | 640ms `--ease-precise` |
| Hover | lift | `translateY(-1px)` | 140ms |
| Hover (glass CTA) | border | → `--border-brand`; surface brightens 6% | 180ms |
| Focus-visible | ring | `--focus-ring-color` + `--focus-ring-halo` | instant, always visible |
| Active / press | scale | `0.99` | 80–140ms `--ease-precise` |
| Loading (if used) | keep label + spinner; no layout shift | — | — |

Rules: hover adds delight only (never reveals essential info); touch devices get
the rest+press states, no hover; energy sweep respects reduced-motion (removed).

---

## 10. Particle system specification

| Parameter | Desktop | Laptop | Mobile | Reduced-motion |
|---|---|---|---|---|
| Count | **180** (cap 220) | 110 | 48 | 0 (static) |
| Render | Instanced points, **1 draw call** | same | same | static constellation texture/SVG |
| Spawn | random in `±6×±3.5×±5`, seeded | — | tighter box | pre-placed |
| Velocity | 0.02–0.08 u/s drift → orbital | — | 0.01–0.04 | none |
| Physics | verlet-lite: drift + orbital pull + optional cursor magnetism | — | drift + orbit only | none |
| Magnetism | cursor radius 1.6u, max pull 0.08u, ease 0.05 | radius 1.2u | **off** | off |
| Connection logic | link nearest ≤ 1.1u, max 2 links/particle, ≤ 60 lines total | ≤ 40 lines | ≤ 18 lines | static faint lines |
| Opacity | 0.18–0.45 (depth-faded) | same | 0.15–0.35 | 0.25 flat |
| Size range | 1.2–3.2px (DPR-aware) | same | 1.5–3px | 2px |
| Life cycle | persistent; gentle respawn on far-plane exit | — | persistent | none |
| Scroll interaction | reorient to downward flow vector | same | same | none |
| Color | 82% `#60a5fa`, 14% `#22d3ee`, 4% `#a855f7` | same | same | same |

Feel target: **data intelligence** — sparse, purposeful, orbital. Explicitly not
dust, snow, sparks, confetti, or game FX. Additive blending kept subtle (no
blown-out cores).

---

## 11. Accessibility specification

| Concern | Requirement |
|---|---|
| Reduced motion | `prefers-reduced-motion: reduce` → **no** camera move, particle motion, parallax, portal, orbit. Static premium hero (poster or single frozen frame). Content reveal = single opacity fade ≤360ms. |
| Keyboard | All CTAs are real, focusable, in logical tab order; visible `--focus-ring`. Canvas is not focusable and never traps focus. |
| Screen readers | `<canvas>` and all decorative 3D wrappers `aria-hidden="true"`. Hero content is semantic: one `<h1>`, real `<p>`, real links. SR users get a complete, meaningful hero with zero 3D noise. |
| Non-WebGL fallback | Capability probe fails → render **HeroPoster** (static image, §16) + existing CSS content reveal. No errors, no blank canvas. |
| Low-power / Save-Data | `navigator.connection.saveData`, `deviceMemory ≤ 4`, `hardwareConcurrency ≤ 4` → STATIC tier (poster) or REDUCED tier (no particles/post). |
| Touch devices | No pointer parallax/magnetism; retain scroll dolly (light) + press states. |
| FCP protection | Hero HTML + CSS ships first; 3D chunk lazy-loads **after** first contentful paint and hydration; poster covers the gap. |
| Contrast | H1 & body text maintain **≥ 4.5:1** against whatever sits behind them at all animation frames. A guaranteed backing (radial scrim `rgba(5,8,22,0.0→0.55)` behind the copy column) ensures this even during bloom peaks. Trust note & eyebrow ≥ 4.5:1 (they're small). |
| CTA accessibility | 44px min hit area; label text is real (not image); state never color-only. |
| Motion kill switch | An in-page "Reduce motion" affordance is optional but the OS setting is authoritative and honored live (media query listener). |

---

## 12. Tiering & capability detection

A single probe at mount selects one tier. Downgrade is allowed at runtime (FPS
watchdog); upgrade is not (avoid flip-flop).

| Tier | Trigger | Delivers |
|---|---|---|
| **CINEMATIC** | WebGL2 + `deviceMemory ≥ 8` + `hardwareConcurrency ≥ 8` + fine pointer + no reduced-motion + no Save-Data + DPR-capable | Full §2–§10 experience |
| **REDUCED (lite 3D)** | WebGL available but mid device / laptop / coarse signals | Mark + ≤110 particles, no transmission (glass-lite), no god-rays, bloom low, no cursor magnetism, DPR ≤1.75 |
| **STATIC** | No WebGL2 / low-power / Save-Data / very small viewport / decode failure | HeroPoster image + existing Phase 18E CSS content reveal. Zero WebGL. |
| **REDUCED-MOTION** | `prefers-reduced-motion: reduce` (overrides all) | Static frozen composition (poster or 1 frame), opacity-only content reveal |

**Runtime FPS watchdog:** rolling 60-frame average; if < 40fps (desktop) / <28fps
(mobile) for 2s → drop particle count 40%, disable post-FX, then fall to STATIC.

**Repeat-visit boot skip:** on first completion, set `sessionStorage['nx-hero-booted']`.
Subsequent loads within the session skip Scenes 1–3 and mount directly at the
Scene 5 resting state; content reveal compresses to a ≤500ms fade. (Use
`sessionStorage`, not `localStorage`, so a returning next-day visitor still gets
one graceful — but shortened — arrival.)

---

## 13. Performance requirements & budgets

### FPS & UX targets
- Desktop 60 FPS · Laptop 45–60 FPS · Mobile 30–60 FPS.
- **Zero CLS** from the hero (poster reserves exact layout box).
- H1 readable ≤ 900ms; LCP element = H1 or poster, ≤ 2.0s on 4G mid-mobile.
- 3D never blocks first meaningful content.

### Asset & runtime budget table

| Item | Budget (gzip/transfer) | Notes |
|---|---|---|
| Hero 3D JS chunk (three + R3F + drei subset + GSAP) | **≤ 130 KB** | lazy, after FCP; tree-shaken drei |
| Mark GLTF | ≤ 180 KB | Draco or Meshopt compressed |
| Env HDRI (if used) | ≤ 180 KB | 1K, KTX2/Basis; or procedural (0 KB) |
| Textures (panels, poster src) | ≤ 400 KB total | KTX2/Basis; poster as AVIF/WEBP |
| **Total hero enhancement** | **≤ 720 KB** | all lazy, non-blocking |
| Draw calls (desktop) | ≤ 40 | particles instanced = 1 |
| Triangles | ≤ 120k | low-poly + bevels only where seen |
| Transparent overdraw | minimize | glass ≤ 3 layers; additive sparse |
| DPR cap | desktop ≤ 2, laptop ≤ 1.75, mobile ≤ 1.5 (1.25 low-power) | |
| Post-FX (mobile) | **off** | bloom desktop/laptop only |

### Optimization mandate
Draco/Meshopt GLTF · KTX2/Basis textures · low-poly geometry · instanced
particles · baked lighting/env where possible · one soft contact shadow max ·
pause all animation offscreen & on `visibilitychange` (delta-time loops) ·
reduce DPR on mobile · static poster during hydration · lazy-load the entire 3D
subtree via dynamic import gated on tier + `IntersectionObserver` (hero in view).

---

## 14. Reduced-motion & mobile fallback plans

### Reduced-motion plan
1. Detect at mount + live listener.
2. Do **not** import the animation timeline; import only static scene (or skip
   WebGL entirely → poster).
3. Content: single opacity fade, `--duration-slow` (360ms), no transform.
4. No parallax, orbit, particle motion, bloom pulse, or scroll dolly.
5. Visual remains premium: a deliberately composed frozen frame (mark lit,
   nodes placed, fog set) — a "photograph" of the system.

### Mobile fallback plan
1. Portrait-first composition: mark centered-upper, content below.
2. FOV 46°, no continuous orbit, parallax ≤1.5° or off, magnetism off.
3. Particles ≤48, connection lines ≤18, glass-lite material, no god-rays, no
   post-FX, DPR ≤1.5.
4. Scroll dolly retained but shortened; canvas pauses offscreen.
5. If any of: WebGL2 absent, Save-Data, `deviceMemory ≤4` → **STATIC poster**.

---

## 15. React component tree (structure only — no code)

```
<HeroExperience>                     // client boundary; runs tier probe
├── <HeroContent>                    // SSR, semantic, always present
│   ├── <HeroEyebrow>                //   "Premium Technology Partner"
│   ├── <HeroHeadline as="h1">       //   split into line groups for reveal
│   ├── <HeroSubheadline as="p">
│   ├── <HeroCtaRow>                 //   <PrimaryCta/> <SecondaryCta/>
│   └── <HeroTrustNote>
├── <HeroScrim/>                     // contrast backing (radial), decorative
├── <HeroPoster/>                    // static image; shown pre-hydration & STATIC tier
└── <HeroCanvasGate>                 // lazy import; mounts only for CINEMATIC/REDUCED
    └── <HeroCanvas> (R3F <Canvas>)
        ├── <SceneLighting/>
        ├── <EnvironmentRig/>        // procedural env / HDRI, fog
        ├── <OrbitCore/>             // the NEXORA X mark (dark titanium)
        ├── <NodeNetwork/>           // nodes + connection lines (digital glow)
        ├── <ParticleField/>         // instanced
        ├── <GlassPlanes/>           // frosted interface + product panels
        ├── <VolumetricRays/>        // desktop-only
        ├── <PostFX/>                // bloom + vignette (+ optional grain)
        ├── <CameraRig/>             // boot dolly + orbit + parallax
        ├── <PointerController/>     // parallax/magnetism (pointer-fine only)
        └── <ScrollDolly/>           // ScrollTrigger scrub handoff
```

Data/logic modules (structure only):
```
useHeroTier()        // capability probe → CINEMATIC | REDUCED | STATIC | REDUCED_MOTION
useHeroBootTimeline()// builds GSAP master timeline (or no-op under reduced)
useReducedMotionSafe()// (exists) authoritative reduced-motion signal
useVisibilityPause() // pauses loops on offscreen / tab hidden
heroMotionConfig     // timings/easings pulled from motion tokens
heroSceneConfig      // camera/light/material/particle constants (this doc, codified)
```

---

## 16. Asset, texture & animation lists

### Asset list
1. `nexora-mark` GLTF (from `public/brand/nexora-mark.png` silhouette → extruded, beveled, isometric). Draco/Meshopt. LOD0/LOD1.
2. Hero poster — 3 renders: desktop (16:9), tablet, mobile (portrait). AVIF+WEBP.
3. Optional 1K studio HDRI (KTX2) — or procedural Lightformers (preferred, 0 asset).
4. Contact-shadow sprite (baked radial) for mobile.

### Texture list
- Env/reflection map (HDRI or procedural).
- 2–3 abstract "product panel" textures (UI-ish glyphs, ≤512², KTX2, low opacity).
- Faint grid texture (tileable, ≤256²).
- Particle sprite (soft circular alpha, 64²).
- Poster images (per breakpoint).
> No texture may be placed directly beneath live copy.

### Animation list (all in §8 with timing)
boot signal · atmosphere bloom · particle arrival · orbital organize · node
connect (dash) · mark assemble (staggered) · glass settle · chrome sweep ·
eyebrow/headline/sub/CTA/trust reveals · camera dolly S1→S2 · slow orbit
(ambient) · light breathe (ambient) · float bob (ambient) · pointer parallax ·
particle magnetism · node hover brightness · CTA hover sweep/lift/press ·
scroll dolly + fog + flow + canvas fade (S6).

---

## 17. GSAP timeline breakdown (labels)

```
tl = gsap.timeline({ defaults: { ease: "expo.out" } })
  .addLabel("boot",        0.00)
  .add(signalIgnite,       0.00)   // 0.26s
  .add(atmosphereBloom,    0.12)   // 0.52s
  .add(particleArrive,     0.20)   // 0.62s  Circ.out
  .add(cameraDollyIn,      0.30)   // 0.90s  Expo.out
  .addLabel("construct",   0.42)
  .add(orbitalOrganize,    0.42)   // 0.70s  power4.out
  .add(nodeConnect,        0.56)   // 0.64s  (dash, precise)
  .add(markAssemble,       0.50)   // 0.78s  power4.out, stagger 0.06
  .add(glassSettle,        0.70)   // 0.62s
  .addLabel("content",     0.60)
  .add(eyebrowReveal,      0.60)   // 0.70s
  .add(headlineReveal,     0.70)   // 0.70s  stagger 0.09
  .add(subheadReveal,      1.00)   // 0.70s
  .add(ctaReveal,          1.20)   // 0.60s
  .add(trustReveal,        1.30)   // 0.50s
  .addLabel("resolve",     1.20)
  .add(chromeSweep,        1.20)   // 0.60s  Circ.out
  .addLabel("ambient",     1.60)   // hand to useFrame loops
```
- Repeat-visit: `tl.seek("ambient").pause()` then run a 0.4s content fade.
- Reduced-motion: timeline not built; content fade only.
- Ambient loops (orbit/breathe/float) are **not** in this timeline — they live in
  delta-time `useFrame` so they pause cleanly offscreen.

---

## 18. R3F scene structure (graph)

```
<Canvas
   camera={{ fov: 40, near: 0.1, far: 60, position: [0,0.2,12] }}
   dpr={[1, tierDprCap]} gl={{ antialias: false, powerPreference:"high-performance" }}
   frameloop={inView ? "always" : "never"}>
  <color attach="background" args={["#050816"]} />
  <fogExp2 attach="fog" args={["#050816", 0.055]} />
  <SceneLighting/>            // key/rim/fill/ambient/accents (§5)
  <Environment/>              // procedural Lightformers or HDRI (256/1K)
  <Suspense fallback={null}>
    <OrbitCore/>              // GLTF mark, dark titanium (§7.1)
    <GlassPlanes/>            // frosted glass / acrylic (§7.2/7.4)
  </Suspense>
  <NodeNetwork/>              // digital glow (§7.5)
  <ParticleField/>            // instanced points (§10)
  <VolumetricRays/>           // desktop only
  <ContactShadows/>           // desktop/laptop only
  <CameraRig/> <PointerController/> <ScrollDolly/>
  <EffectComposer enabled={tier!=="mobile"}>   // @react-three/postprocessing
    <Bloom threshold={0.85} intensity={0.6} radius={0.4} mipmapBlur/>
    <Vignette eskil={false} offset={0.25} darkness={0.7}/>
    // optional: <Noise opacity={0.03}/>  ACESFilmic tone mapping, exposure 1.0
  </EffectComposer>
</Canvas>
```
AA strategy: SMAA (post) on desktop; none on mobile (rely on DPR).

---

## 19. Folder structure (proposed, aligns with repo conventions)

```
src/
├── components/
│   └── hero/
│       ├── HeroExperience.tsx        // tier gate + composition (client)
│       ├── content/
│       │   ├── HeroContent.tsx
│       │   ├── HeroHeadline.tsx
│       │   ├── HeroCtaRow.tsx
│       │   └── HeroTrustNote.tsx
│       ├── HeroPoster.tsx
│       ├── HeroScrim.tsx
│       └── canvas/
│           ├── HeroCanvasGate.tsx    // dynamic import boundary
│           ├── HeroCanvas.tsx
│           ├── OrbitCore.tsx
│           ├── ParticleField.tsx
│           ├── NodeNetwork.tsx
│           ├── GlassPlanes.tsx
│           ├── VolumetricRays.tsx
│           ├── SceneLighting.tsx
│           ├── EnvironmentRig.tsx
│           ├── PostFX.tsx
│           ├── CameraRig.tsx
│           ├── PointerController.tsx
│           └── ScrollDolly.tsx
├── lib/
│   └── hero/
│       ├── useHeroTier.ts
│       ├── useHeroBootTimeline.ts
│       ├── useVisibilityPause.ts
│       ├── hero-scene-config.ts      // camera/light/material/particle constants
│       └── hero-motion-config.ts     // timings/easings (from motion tokens)
public/
└── brand/hero/
    ├── nexora-mark.glb
    ├── hero-poster-desktop.avif|webp
    ├── hero-poster-mobile.avif|webp
    └── env-studio-1k.ktx2            // if HDRI route chosen
```

---

## 20. Development milestones

| Milestone | Deliverable | Exit criteria |
|---|---|---|
| M0 — Poster & content | Semantic hero + poster + tier probe + reduced-motion fade | Fully accessible, LCP good, zero WebGL needed |
| M1 — Canvas bootstrap | R3F canvas, lighting, env, mark GLTF, contact shadow | Mark renders at 60fps, poster→canvas swap seamless |
| M2 — Particles & nodes | Instanced field + node network + connection dash | ≤40 draw calls, orbital feel, sparse |
| M3 — Boot timeline | GSAP master (S1–S3) + content reveal choreography | H1 ≤900ms, sequence matches §8 |
| M4 — Interactive & scroll | Parallax, magnetism, hover, ScrollTrigger handoff | No jank, no scroll-jack, S6 handoff clean |
| M5 — Glass & post-FX | Frosted glass/acrylic, bloom, vignette, god-rays | Within budget; text contrast holds |
| M6 — Tiering & perf | Full tier matrix, FPS watchdog, mobile/lite, budgets | All §13 budgets met on target devices |
| M7 — A11y & QA hardening | §11 + §21 pass; cross-device | Sign-off vs Acceptance Criteria (§22) |

---

## 21. QA checklist

- [ ] H1 readable ≤ 900ms on 4G mid-mobile; CTAs clickable from first paint.
- [ ] Zero CLS attributable to hero (Lighthouse + manual).
- [ ] One `<h1>`; canvas `aria-hidden`; SR reads full hero, no 3D noise.
- [ ] Keyboard: tab reaches both CTAs, visible focus ring, no focus trap.
- [ ] `prefers-reduced-motion`: no motion, premium static frame, live toggle honored.
- [ ] No WebGL2 (force-disabled): poster + content, no console errors.
- [ ] Save-Data / low `deviceMemory`: STATIC tier engages.
- [ ] Touch: no parallax/magnetism; press states work; scroll normal.
- [ ] No scroll-jacking; native scroll always works; no unintended pin.
- [ ] FPS: 60 desktop / 45+ laptop / 30+ mobile sustained; watchdog downgrades gracefully.
- [ ] Budgets met (§13): chunk ≤130KB, total ≤720KB, ≤40 draw calls, DPR caps.
- [ ] Contrast ≥4.5:1 for H1/body at every animation frame (incl. bloom peak).
- [ ] Offscreen/tab-hidden: all loops pause (verify no CPU/GPU burn).
- [ ] Repeat-visit (session): boot skipped, ≤500ms content fade.
- [ ] Colors match tokens exactly; no off-brand hues; no neon/crypto/gaming read.
- [ ] Build passes `lint` / `typecheck` / `build`; no hydration warnings.
- [ ] Cross-browser: Chrome, Safari (incl. iOS), Firefox, Edge.

---

## 22. Acceptance criteria (definition of done)

1. **Accessibility-first proven:** with JS disabled or WebGL blocked, the hero is
   still complete, on-brand, readable, and actionable.
2. **Instant usability:** measured H1 paint ≤ 900ms and CTA interactivity from
   first paint on a mid-tier 4G mobile.
3. **Cinematic quality:** on a capable desktop, the S1–S6 arc plays as specified,
   reads as "premium digital OS," and never as neon/crypto/gaming/showreel.
4. **Performance within budget:** every figure in §13 met on named target
   devices; FPS watchdog verified downgrading under stress.
5. **Reduced-motion parity:** reduced-motion users get a deliberately composed,
   premium static hero — not a degraded blank.
6. **No regressions:** zero CLS, zero hydration mismatch, `lint`/`typecheck`/
   `build` green, existing Phase 18E section-reveal handoff intact.
7. **Brand fidelity:** palette, materials, motion curves, and copy match this
   spec and the token system exactly.
8. **Maintainability:** scene/motion constants live in `hero-scene-config` /
   `hero-motion-config`; a designer can retune timings/intensities without
   touching component logic.

---

## 23. Explicit non-goals for Phase 19A build (guardrails)

No sound. No scroll-jacking or forced pins. No full-screen intro that blocks
content. No neon/cyberpunk/crypto-grid/gaming aesthetics. No random sci-fi
debris. No cursor-follower gimmicks. No text placed over unreadable glass. No
heavy real-time shadows. No mobile post-FX. No third-party 3D that can't meet the
budget. The logo never vanishes — it *opens*.

---

*End of Phase 19A Creative Production Specification. Implementation begins in a
later phase against these milestones; no production code is authored here.*
