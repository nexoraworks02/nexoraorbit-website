# Brand Asset Implementation Notes — NEXORA ORBIT

## Official logo — ✅ INSTALLED

The official NEXORA logo (source: `Nexora3d-8.png`, from `NexOra.pdf`) has been
cropped and installed into `public/brand/`:

| File | Status | Purpose |
|------|--------|---------|
| `public/brand/nexora-logo.png` | ✅ present (1545×254) | Full **NEXORA** wordmark, white + gradient `X`, for dark backgrounds |
| `public/brand/nexora-mark.png` | ✅ present (242×256) | Standalone gradient `X` mark |
| `public/brand/nexora-logo.svg` | ⬜ optional | Vector wordmark (export from `NexOra.pdf` if a scalable version is wanted) |

`src/components/brand/Logo.tsx` has `OFFICIAL_LOGO_AVAILABLE = true` and renders
these assets in the header and footer. The styled text fallback remains in the
component for resilience.

### Remaining (optional) logo TODOs
- Export a **vector (SVG)** version of the wordmark for infinite scalability.
- Export a **dark-ink** logo variant for light backgrounds (the current asset is
  the white/dark-background version). The public site chrome is dark-themed, so
  this is only needed if the logo is placed on light surfaces.
- Source `full-logo.png` / `full-logo-2.png` in Downloads are **PURE AIR DUCT
  SERVICES** (a different brand) — do **not** use them for NEXORA.

## Favicon / app icon — ✅ DONE
- `src/app/icon.png` (512×512) generated from `nexora-mark.png`; Next.js serves
  it as the site favicon / app icon.
- The default `favicon.ico` was removed so the brand mark is the single source.

## Brand direction reference
- Wordmark: futuristic, minimal, highlighted `X`.
- Identity gradient: purple/blue (`--gradient-primary`).
- Tagline: **Build. Transform. Innovate.**
- Do not reintroduce the `NX` placeholder or the legacy "Nexora Orbit Digital"
  brand as final assets.
