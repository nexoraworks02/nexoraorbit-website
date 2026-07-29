# Phase 13A - Company Pages System Report

## Completed Scope

Phase 13A implemented the NEXORA WORKS Company pages system using the approved production shell, design system, and dark-first visual direction. The homepage, services pages, work pages, contact backend, and insights/blog pages were not redesigned or expanded.

## Routes Created

- `/company`
- `/company/about`
- `/company/process`
- `/company/careers`
- `/faq`
- `/company/service` redirects to `/services`
- `/company/services` redirects to `/services`
- `/company/faq` redirects to `/faq`

`/company` redirects to `/company/about` to keep the current route model simple and avoid a thin duplicate overview page.

## Final Routing QA

- Routing bug fixed for `/company/service`.
- Routing bug fixed for `/company/faq`.
- Protective redirect added for `/company/services`.
- Absolute link QA completed across Company components, production header, and production footer.
- Footer Company links now use explicit root paths for About, Process, Careers, FAQ, and Contact.
- No bad relative `href` values were found for `services`, `service`, `work`, `company`, `about`, `process`, `careers`, `faq`, `contact`, or `insights`.

Verified routes:

- `/company/about`: `200`
- `/company/process`: `200`
- `/company/careers`: `200`
- `/faq`: `200`
- `/services`: `200`
- `/work`: `200`
- `/contact`: `200`

Production build includes redirect routes:

- `/company/service`
- `/company/services`
- `/company/faq`

## Page Sections Completed

### About

- About Hero
- Mission / Vision
- What We Believe
- Capabilities
- Operating Principles
- Process Preview
- Global Client Readiness
- Team Placeholder
- Final CTA

### Process

- Process Hero
- Process Timeline
- How We Work
- Collaboration Standards
- Quality / QA Standards
- Handoff / Ownership
- Final CTA

### Careers

- Careers Hero
- Why Work at NEXORA WORKS
- Culture Principles
- Disciplines
- Open Roles Empty State
- Hiring Process Placeholder
- Talent CTA

### FAQ

- FAQ Hero
- Working With NEXORA WORKS
- Pricing and Scope
- Delivery
- Technology
- Ownership
- Final CTA

## Components Reused

- `Accordion`
- `Badge`
- `Card`
- `Chip`
- `Container`
- `GlassPanel`
- `Grid`
- `SectionHeader`
- Production `SiteHeader`
- Production `SiteFooter`

## Components Created

- `AboutCompanyPage`
- `ProcessCompanyPage`
- `CareersCompanyPage`
- `FaqPage`
- `CompanyCtaLink`
- `CompanySystemVisual`

## Data Created

- `beliefs`
- `operatingPrinciples`
- `companyCapabilities`
- `processSteps`
- `workStandards`
- `culturePrinciples`
- `careerDisciplines`
- `faqCategories`

## SEO Metadata Added

- `/company/about`: `About NEXORA WORKS - Premium Technology Partner`
- `/company/process`: `Process - How NEXORA WORKS Builds Intelligent Digital Systems`
- `/company/careers`: `Careers - Build with NEXORA WORKS`
- `/faq`: `FAQ - Working With NEXORA WORKS`

FAQ JSON-LD was added from the structured FAQ data.

## Accessibility Notes

- Each implemented page uses one H1.
- Sections use semantic `section` structure through the page layout.
- FAQ content uses the existing `Accordion` component with `aria-expanded`, `aria-controls`, and labelled regions.
- CTA links use design-system focus states.
- Career and team empty states are text-based and readable.
- No hover-only meaning is required to understand content or navigation.
- Browser QA confirmed no header overlap on the new Company routes.

## Responsive Notes

Browser QA checked:

- Desktop 1440px
- Laptop 1280px
- Tablet 768px
- Mobile 390px target

Checked routes:

- `/company/about`
- `/company/process`
- `/company/careers`
- `/faq`

Results:

- No horizontal overflow found.
- Hero headings start below the sticky production header.
- Cards and grids stack cleanly on tablet and mobile.
- FAQ accordions remain inside their containers.
- CTA groups stack on mobile and align on larger viewports.
- Footer readability remains controlled by the existing production footer.

## Honest Placeholder Rules

- No fake team members were added.
- No fake company history was added.
- No fake awards, locations, logos, metrics, or testimonials were added.
- The About page uses a direct team placeholder: "Leadership and team profiles will be added when approved for public presentation."
- The Careers page uses a direct empty state: "There are no open roles listed right now."
- Hiring process content is labelled as a placeholder until active roles are approved.

## Build Checks

- `npm run lint`: Passed.
- `npm run build`: Passed.
- Dedicated `npm run typecheck`: Not available in package scripts; TypeScript validation ran during `next build`.

## Remaining Risks

- `/about` remains as a legacy route outside the approved `/company/about` system and can be retired or redirected in a future cleanup phase.
- `/contact` still uses the earlier placeholder implementation because Phase 13A explicitly did not build the contact backend or redesign contact.
- `/insights` is linked in navigation but has not been implemented yet.
- Real leadership profiles, hiring details, and role pages require approval before publication.
- The compatibility redirect routes exist only to prevent stale or accidental nested Company URLs from 404ing; canonical links now point to the correct root paths.

## Next Recommended Phase

The next sensible phase is Contact page UI and enquiry flow architecture, followed by Insights/Blog structure. Legacy route cleanup can happen after those production routes are approved.

## Approval Status

Phase 13A final routing QA is ready for approval.
