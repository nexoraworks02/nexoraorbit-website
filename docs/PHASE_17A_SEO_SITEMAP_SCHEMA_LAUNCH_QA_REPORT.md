# Phase 17A SEO, Sitemap, Schema, Metadata + Launch QA Report

## Completed Scope

Phase 17A completed the SEO foundation, sitemap, robots, metadata, structured data, internal link, accessibility, responsive, and build QA pass for the approved NEXORA WORKS website.

No deployment, CMS work, final article writing, or redesign work was performed.

## Routes Verified

Loaded successfully:

- `/`
- `/services`
- `/services/software-engineering`
- `/services/ai-solutions`
- `/services/mobile-app-development`
- `/services/web-development`
- `/services/cloud-engineering`
- `/services/digital-marketing`
- `/services/branding`
- `/services/technology-consulting`
- `/work`
- `/work/case-studies`
- `/work/product-platform-system`
- `/work/ai-workflow-architecture`
- `/work/brand-web-growth-system`
- `/company/about`
- `/company/process`
- `/company/careers`
- `/faq`
- `/contact`
- `/insights`
- `/insights/ai-workflow-planning`
- `/insights/conversion-ready-website`
- `/insights/cloud-architecture-growth`
- `/privacy-policy`
- `/terms`
- `/thank-you`
- `/not-found`

Redirect verified:

- `/company` redirects to `/company/about`

## Metadata Completed

Added or normalized:

- Unique page titles
- Unique meta descriptions
- Open Graph title
- Open Graph description
- Open Graph type
- Canonical URLs for public and noindex pages
- Twitter card metadata
- Global metadata base via `NEXT_PUBLIC_SITE_URL` fallback to `https://nexoraworks.com`

The homepage metadata now uses the required title and description:

- `NEXORA WORKS — Premium Technology Company for Software, AI, Cloud, Web, Mobile, Brand & Growth`
- `NEXORA WORKS builds intelligent digital systems for companies ready to scale through software engineering, AI solutions, cloud architecture, mobile apps, web development, branding, and digital growth.`

Source and rendered checks found no `Create Next App`, `Next.js App`, `Untitled`, old brand names, old consultation CTA, or old floating-widget text in the active launch surface.

## Sitemap Completed

`src/app/sitemap.ts` now includes only indexable public pages:

- `/`
- `/services`
- All service detail pages
- `/work`
- `/company/about`
- `/company/process`
- `/company/careers`
- `/faq`
- `/insights`
- `/contact`
- `/privacy-policy`
- `/terms`

Excluded from sitemap:

- `/design-system`
- `/wireframes`
- `/ui/homepage`
- `/work/case-studies`
- Placeholder case study detail pages
- Placeholder insight article pages
- `/thank-you`
- `/maintenance`
- `/not-found`

## Robots Completed

`src/app/robots.ts` allows public pages and disallows:

- `/design-system`
- `/wireframes`
- `/ui`
- `/ui/homepage`
- `/thank-you`
- `/maintenance`
- `/not-found`
- `/work/case-studies`
- `/work/product-platform-system`
- `/work/ai-workflow-architecture`
- `/work/brand-web-growth-system`
- `/insights/ai-workflow-planning`
- `/insights/conversion-ready-website`
- `/insights/cloud-architecture-growth`

CSS and JS assets are not blocked.

## Noindex Strategy

Noindex metadata was added to:

- Placeholder case study detail pages
- `/work/case-studies`
- Placeholder insight article pages
- `/thank-you`
- `/maintenance`
- `/not-found`
- `/design-system`
- `/wireframes`
- `/ui/homepage`

Indexable pages render `index, follow`; placeholder and utility pages render `noindex, nofollow`.

## Schema Added

Homepage:

- Organization schema
- WebSite schema

Service detail pages:

- Service schema
- FAQPage schema matching visible service FAQ content

FAQ page:

- FAQPage schema generated from visible FAQ content

Not added:

- Article schema for placeholder insight articles
- Case study or CreativeWork schema for placeholder case studies
- Fake ratings, reviews, offers, prices, authors, dates, awards, logos, or metrics

## Internal Link QA

Checked header, footer, CTAs, cards, section links, legal links, and source patterns for bad relative internal links.

Result:

- No bad relative route hrefs detected.
- Production header and footer use absolute root paths.
- Legacy `/about`, `/portfolio`, `/packages`, and `/terms-conditions` paths redirect to approved routes.

## Accessibility QA

Rendered checks confirmed:

- One H1 on checked routes
- No empty links
- Contact form fields have labels
- Contact form helper/error relationships use `aria-describedby`
- FAQ accordion buttons expose `aria-expanded`
- Keyboard-reachable links/buttons are present
- Error and placeholder states use text, not color only
- No hover-only meaning was detected in the checked templates

Targeted results:

- Contact route: 10 form fields, 0 unlabeled fields, 10 fields with `aria-describedby`
- FAQ route: 16 accordion buttons with `aria-expanded`, 0 missing expanded states

## Responsive QA

Checked at:

- Desktop: 1440px
- Laptop: 1280px
- Tablet: 768px
- Mobile: 390px

Focused route templates checked:

- Homepage
- Services landing
- Service detail
- Work landing
- Case study detail
- Company about
- FAQ
- Contact
- Insights landing
- Insight detail
- Privacy Policy
- Terms
- Thank You
- Not Found

Results:

- No horizontal overflow detected
- No header overlap detected
- No empty links detected
- One H1 per checked page
- Footer and legal text remain readable on mobile

## Performance / Core Web Vitals Prep

Reviewed obvious launch risks:

- No large image pipeline was introduced
- No video backgrounds were added
- No heavy 3D was added
- No new dependencies were added
- Animation remains CSS-based and restrained
- Placeholder routes are excluded from indexing where appropriate

## Build, Lint, Typecheck

Completed:

- `npm.cmd run lint` passed
- `npm.cmd run build` passed

The production build also completed TypeScript validation.

Not available:

- No `npm run typecheck` script exists in `package.json`

## Files Added

- `src/lib/seo.ts`
- `src/components/seo/JsonLd.tsx`
- `docs/PHASE_17A_SEO_SITEMAP_SCHEMA_LAUNCH_QA_REPORT.md`

## Files Updated

- `src/app/layout.tsx`
- `src/app/(site)/layout.tsx`
- `src/app/(site)/page.tsx`
- `src/app/(site)/services/page.tsx`
- `src/app/(site)/services/[slug]/page.tsx`
- `src/app/(site)/work/page.tsx`
- `src/app/(site)/work/case-studies/page.tsx`
- `src/app/(site)/work/[slug]/page.tsx`
- `src/app/(site)/insights/page.tsx`
- `src/app/(site)/insights/[slug]/page.tsx`
- `src/app/(site)/company/about/page.tsx`
- `src/app/(site)/company/process/page.tsx`
- `src/app/(site)/company/careers/page.tsx`
- `src/app/(site)/faq/page.tsx`
- `src/app/(site)/contact/page.tsx`
- `src/app/(site)/privacy-policy/page.tsx`
- `src/app/(site)/terms/page.tsx`
- `src/app/(site)/thank-you/page.tsx`
- `src/app/(site)/maintenance/page.tsx`
- `src/app/(site)/not-found/page.tsx`
- `src/app/design-system/layout.tsx`
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- Legacy source cleanup files under `src/components` and `src/data`

## Remaining Risks

- Final domain should be confirmed before launch; current fallback is `https://nexoraworks.com`.
- Placeholder case studies and placeholder insight articles should remain noindex until approved real content exists.
- Legal pages still require qualified legal review before public reliance.
- Contact backend, analytics, consent/cookie behavior, and CMS are still future phases.
- Final launch QA should be repeated against the deployed production URL before public announcement.

## Recommended Next Phase

Proceed to final pre-deployment readiness only after approval:

- Production domain confirmation
- Environment variable review
- Analytics and consent planning
- Deployed URL smoke test
- Search Console/Bing submission plan
- Final performance and accessibility pass on production hosting
