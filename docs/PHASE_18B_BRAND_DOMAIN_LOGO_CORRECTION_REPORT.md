# Phase 18B — Brand Domain + Official Logo Correction Report

**Project:** NEXORA WORKS
**Scope:** Brand domain, logo usage, metadata, sitemap, robots, schema, header/footer brand assets.
**Out of scope (unchanged):** website redesign, approved layouts, deployment.

---

## 1. Correct domain applied

| | Before | After |
|---|--------|-------|
| Domain | `nexoraworks.com` | **`nexoraorbit.com`** |
| Site URL | `https://nexoraworks.com` | **`https://nexoraorbit.com`** |
| Public email | `hello@nexoraworks.com` | **`hello@nexoraorbit.com`** |
| Brand name | NEXORA WORKS | NEXORA WORKS *(unchanged)* |

All URLs, canonicals, Open Graph URLs, sitemap, robots, and schema now resolve
to `https://nexoraorbit.com` through a single source of truth.

---

## 2. Files created

| File | Purpose |
|------|---------|
| `src/lib/site-config.ts` | Centralized brand/domain/URL/tagline/description/email config |
| `.env.example` | `NEXT_PUBLIC_SITE_URL` + optional future vars (GA/GTM/contact endpoint) |
| `src/components/brand/Logo.tsx` | Reusable logo: official-asset support + styled text fallback |
| `public/brand/README.md` | Expected official asset filenames + instructions |
| `docs/BRAND_ASSET_IMPLEMENTATION_NOTES.md` | Official logo/favicon export TODOs |
| `docs/PHASE_18B_BRAND_DOMAIN_LOGO_CORRECTION_REPORT.md` | This report |

## 2b. Files updated

| File | Change |
|------|--------|
| `src/lib/seo.ts` | `siteUrl` now sourced from `siteConfig.url`; `siteName` from `siteConfig.name` |
| `src/data/contact.ts` | Email + mailto now from `siteConfig.email` |
| `src/data/legalUtility.ts` | Privacy/terms contact email from `siteConfig.email` |
| `src/components/utility/MaintenancePage.tsx` | Email link from `siteConfig.email` |
| `src/components/company/CareersCompanyPage.tsx` | Talent mailto from `siteConfig.email` |
| `src/components/layout/SiteHeader.tsx` | `NX` placeholder → `<Logo variant="full" />` |
| `src/components/layout/SiteFooter.tsx` | `NX` placeholder → `<Logo variant="footer" />` |
| `.gitignore` | Added `!.env.example` so the example is trackable; added `.next-start-*.log` (prior phase) |
| `package.json` | Added `typecheck` script (`tsc --noEmit`) |

## 2c. Files removed (dead legacy code)

11 unreferenced legacy components from the original "Nexora Orbit Digital"
scaffold — confirmed to have **no production imports**. These held the old `NX`
placeholder, old domain, and legacy brand strings:

`CTASection`, `ContactForm`, `Footer`, `Header`, `Hero`, `PackagesSection`,
`PortfolioPreview`, `SectionHeader`, `ServicesSection`, `Testimonials`,
`WhatsAppButton` (all under `src/components/*.tsx`).

Production continues to use `src/components/layout/SiteHeader.tsx` and
`SiteFooter.tsx`.

---

## 3. Sitemap updated ✅
`src/app/sitemap.ts` builds URLs via `absoluteUrl()` → `siteConfig.url`.
Prerendered output verified to contain only `https://nexoraorbit.com`.
Lists canonical URLs only (no legacy redirects, no preview routes).

## 4. Robots updated ✅
`src/app/robots.ts` → `Sitemap: https://nexoraorbit.com/sitemap.xml` (verified in
prerendered `robots.txt`). Preview/internal routes remain disallowed.

## 5. Metadata updated ✅
- `metadataBase` (root layout) → `siteConfig.url`.
- Homepage title: *"NEXORA WORKS — Premium Technology Company for Software, AI,
  Cloud, Web, Mobile, Brand & Growth"* (matches spec).
- Homepage description matches spec.
- Open Graph / canonical URLs → `https://nexoraorbit.com`.
- Twitter card: `summary_large_image`.

## 6. Schema updated ✅
Organization + WebSite JSON-LD on the homepage:
- `name`: `NEXORA WORKS`
- `url`: `https://nexoraorbit.com` (via `absoluteUrl`)
- `sameAs: []` — **no fake social links**. No fake address or legal details added.

## 7. Logo component created ✅
`src/components/brand/Logo.tsx`
- Variants: `full`, `mark`, `footer`. Sizes: `sm`, `md`, `lg`.
- Uses the official image when `OFFICIAL_LOGO_AVAILABLE = true` (currently `false`).
- Fallback: styled `NEXORA WORKS` wordmark with a highlighted purple/blue
  gradient `X` (brand-consistent), plus a gradient `X` mark tile.
- Accessible: real text wordmark reads as "NEXORA WORKS"; mark-only variant uses
  `role="img"` + `aria-label="NEXORA WORKS"`; header/footer links carry
  `aria-label="NEXORA WORKS home"`.

---

## 8. Official logo asset status ⚠️ TODO

**Not yet in the repo.** The official logo has not been exported from
`NexOra.pdf`. Until it is:
- `public/brand/` exists with a `README.md` describing expected files.
- `Logo.tsx` renders the clean styled text fallback (no `NX` placeholder).

**Required before production:** export official logo as SVG / transparent PNG to:
- `public/brand/nexora-logo.svg`
- `public/brand/nexora-logo.png`
- `public/brand/nexora-mark.png`

Then set `OFFICIAL_LOGO_AVAILABLE = true` in `Logo.tsx`.

## 9. Favicon status ⚠️ TODO
Current `src/app/favicon.ico` kept temporarily. Replace with an icon derived
from `nexora-mark.png` once available (see brand asset notes).

---

## 10. Remaining TODOs
1. Export and add official NEXORA WORKS logo assets to `public/brand/`, then flip
   `OFFICIAL_LOGO_AVAILABLE`.
2. Replace favicon/app icon from the official mark.
3. Confirm final public email before production launch (`site-config.ts` TODO).
4. Decide indexing for `/work/[slug]` and `/insights/[slug]` when real content
   lands (currently disallowed in robots — placeholder content).

---

## 11. QA search result ✅
Confirmed **absent** from production `src` / `public`:
`nexoraworks.com`, `Nexora Orbit Digital`, `Get Free Consultation`, `WhatsApp`,
`NX` placeholder tile, nav-style `Packages` label.
(Historical mentions remain only in `docs/` phase reports — allowed.)

## 12. Build / lint / typecheck
| Command | Result |
|---------|--------|
| `npm run lint` | ✅ Pass (no errors/warnings) |
| `npm run typecheck` | ✅ Pass (`tsc --noEmit`, no errors) — *script added this phase* |
| `npm run build` | ✅ Pass (45 pages prerendered) |

> Note: `npm run typecheck` did not previously exist and was added in Phase 18B.

---

**Phase 18B complete. No deployment performed.**

---

## Phase 18C addendum — Public email correction

**Public email corrected to `hello.nexoraorbit@gmail.com`.**

- `src/lib/site-config.ts` → `email: "hello.nexoraorbit@gmail.com"` (unconfirmed-email TODO removed).
- All visible usages (contact page/data, footer, careers mailto, privacy/terms,
  thank-you, maintenance) resolve from `siteConfig.email`, so they update
  automatically. Careers mailto and project-enquiry mailto retain their
  `?subject=` params.
- Domain unchanged: `https://nexoraorbit.com`.
- `AGENTS.md` guidance updated to reference the confirmed email.
- QA: `hello@nexoraorbit.com`, `hello@nexoraworks.com`, `nexoraworks.com` absent
  from production `src`/`public`; `hello.nexoraorbit@gmail.com` present via config.
- Build/lint/typecheck: all pass.

---

## Official logo assets — INSTALLED

Source `Nexora3d-8 (1).png` (from `NexOra.pdf`) was cropped into clean assets:

- `public/brand/nexora-logo.png` (1545×254) — full **NEXORA** wordmark, white +
  gradient 3D `X`, for dark backgrounds.
- `public/brand/nexora-mark.png` (242×256) — standalone gradient `X` mark.
- `src/app/icon.png` (512×512) — app icon / favicon generated from the mark;
  default `favicon.ico` removed.

`src/components/brand/Logo.tsx` → `OFFICIAL_LOGO_AVAILABLE = true`; header and
footer now render the official logo (styled text fallback retained).

Notes:
- Current logo is the white / dark-background version (site chrome is dark).
  Optional future exports: SVG vector + dark-ink variant for light surfaces.
- `full-logo.png` / `full-logo-2.png` in Downloads are **PURE AIR DUCT SERVICES**
  (a different brand) and were intentionally **not** used.

---

## Brand name correction — NEXORA WORKS → NEXORA ORBIT

The brand name was corrected to **NEXORA ORBIT** (matching the domain
`nexoraorbit.com`).

- Global rename across **60 production files** + config + mailto subjects
  (`NEXORA%20WORKS` → `NEXORA%20ORBIT`). `siteConfig.name = "NEXORA ORBIT"`.
- Fixed one occurrence where `NEXORA` / `WORKS` was **split across two lines** in
  `NotFoundContent.tsx` (missed by line-based search; it rendered into every
  page's not-found boundary).
- Logo lockup: the official artwork is the **NEXORA** wordmark, so the header/
  footer now pair it with a styled uppercase **ORBIT** → reads "NEXORA ORBIT".
  Logo `alt` = "NEXORA ORBIT".
- Domain and email unchanged (`nexoraorbit.com`, `hello.nexoraorbit@gmail.com`).
- Verified: **zero** "NEXORA WORKS" in the built output (45 pages);
  lint / typecheck / build all pass.
- Historical phase reports and root strategy `.md` bibles still say "NEXORA
  WORKS" as records — not touched (not production).

---

## Official logo set — theme-aware (final)

Replaced the interim logo with the client-supplied official **NEXORA ORBIT**
lockups (full wordmark + 3D X + "ORBIT"), now theme-aware:

| Asset | Ink | Shown on |
|-------|-----|----------|
| `public/brand/nexora-orbit-3d-white.png` | white | `[data-theme="dark"]` (live site chrome) |
| `public/brand/nexora-orbit-3d-black.png` | dark | `[data-theme="light"]` |
| `public/brand/nexora-orbit-wordmark-white/black.png` | — | optional X-less variants (unused in chrome) |
| `public/brand/nexora-mark.png` | gradient | X-only mark (cropped from the 3D white logo) → app icon |

- `Logo.tsx` renders both inks; `src/styles/effects.css` toggles them via
  `.nx-logo-white` / `.nx-logo-black` under `[data-theme]`. The appended text
  "ORBIT" was removed — it is now part of the artwork.
- Header logo size `md` (48px), footer `lg` (64px). App icon regenerated from
  the new mark; old interim `nexora-logo.png` removed.
- Verified: built HTML references both themed logos + swap classes; compiled CSS
  contains the correct `[data-theme]` swap rules; lint/typecheck/build pass.
- X-only asset was not supplied separately, so `nexora-mark.png` is derived from
  the 3D white logo.
