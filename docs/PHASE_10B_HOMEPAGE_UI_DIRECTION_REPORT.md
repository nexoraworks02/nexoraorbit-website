# Phase 10B - Homepage UI Direction Report

Project: NEXORA WORKS  
Phase: 10B - Homepage High-Fidelity UI Direction  
Status: Ready for visual review  

## Route Created

- `/ui/homepage`
- Isolated preview route.
- Does not replace the production homepage.
- Does not create final service pages or production routing.
- Metadata is noindex/nofollow for internal review.

## Sections Created

- Hero with premium dark cinematic direction and CSS-only abstract system visual.
- Capability Snapshot / Trust Bar.
- Problem / Transformation Statement with one light editorial moment.
- Services Overview grouped by Build, Intelligence, Scale, and Grow.
- Proof / Featured Work Placeholder with honest case study placeholders.
- Process timeline with six steps: Discover, Strategize, Design, Engineer, Launch, Optimize.
- Why NEXORA WORKS.
- Client Fit / Engagement Types.
- Insights Preview with placeholder article topics.
- Final CTA.
- Footer Preview with NEXORA WORKS brand statement and columns.

## Components Reused

- `Button`
- `Card`
- `Container`
- `Grid`
- `SectionHeader`
- `GlassPanel`
- `Badge`
- `Chip`

## Components Modified

- `next.config.ts`: disabled the Next.js dev indicator so the bottom-left floating `N` does not appear during preview review.

The preview continues to use existing Phase 9 primitives directly. No design-system component API changes were required.

## Refinements Completed

- Removed the bottom-left floating `N` dev indicator from preview review by disabling Next dev indicators.
- Added section IDs and sticky-header offsets for Services, Work, Process, Why NEXORA, Client Fit, Insights, CTA, and Footer Preview.
- Reduced hero vertical padding and visual height so headline, subheadline, CTAs, and trust note are visible earlier.
- Softened the light editorial transformation section with a subtle light gradient instead of pure white.
- Added body copy to all Why NEXORA cards.
- Added body copy to all six process cards.
- Added restrained abstract system visuals to proof placeholder cards without fake clients, logos, testimonials, or metrics.
- Removed hover padding shifts from service links to reduce layout movement.
- Tightened vertical rhythm across major homepage preview sections.

## Desktop Approved

- Desktop visual direction at 1440px is approved and was preserved.
- No broad visual redesign was made during final QA.
- The premium dark-first direction, CSS-only hero system visual, restrained accents, and editorial light transformation section remain intact.

## Accessibility Notes

- One H1 is used in the hero.
- Page sections use semantic `section`, `main`, `header`, and `footer` landmarks.
- Interactive links include accessible labels where preview intent may be unclear.
- Buttons remain native keyboard-accessible controls.
- Focus styles are inherited from the Phase 9 `ds-focus-ring` system.
- Placeholder proof is text-based and does not imply fake metrics, logos, or testimonials.
- Motion is limited to existing token-driven hover transitions and respects reduced-motion rules from the design system.
- Header overlap risk is reduced through section scroll offsets.
- Responsive QA found no rendered text below 11px at the tested breakpoints.
- Card links do not rely on hover-only meaning; visible text communicates the destination or placeholder state.
- Proof cards explicitly state that they are placeholders and must be replaced with approved case studies.
- Old Nexora Orbit branding, WhatsApp, and floating widgets were not detected on `/ui/homepage`.

## Responsive Notes

- Desktop uses a premium multi-column hero and grid-based section structure.
- Tablet layouts collapse into controlled two-column grids through existing `Grid` behavior.
- Mobile stacks into a single-column reading order with early CTA visibility.
- Hero typography uses existing responsive typography reductions.
- Cards and service groups use responsive grids and token spacing.
- Checked widths: 1440, 1280, 768, and 390.
- No horizontal overflow was detected at tested widths.
- Hero CTAs remained visible inside the first viewport at tested widths, including 390px-class mobile.
- No fixed bottom-left widget was detected at tested widths after refinement.

## Mobile QA Completed

- Checked at a 390px-class viewport.
- Hero headline uses the existing mobile typography reduction and did not overflow.
- Primary and secondary CTAs remained visible early in the first viewport.
- Hero visual stacks below the copy and CTAs.
- Cards stack cleanly in a single column.
- Footer content remains readable.
- No horizontal overflow, tiny text, old branding, WhatsApp, or floating widget was detected.

## Tablet QA Completed

- Checked at a 768px-class viewport.
- Hero copy and visual stack without cramped layout.
- Services use the responsive grid behavior and avoid overflow.
- Proof placeholders remain inside the viewport.
- CTA buttons retain clear sizing and do not wrap badly.

## Known Placeholders

- Hero system visual is CSS-only and intentionally avoids WebGL, canvas, and heavy 3D.
- Featured work cards are structure previews only.
- Insight cards are placeholder topics.
- Service links are preview anchors and should be replaced with real routes later.
- Footer links are preview anchors and should be mapped to final IA later.
- Abstract proof visuals are design placeholders only and do not represent real client work.

## Remaining Design Decisions

- Whether the CSS-only hero visual becomes the final art direction or evolves into a lightweight 3D/interactive system in a later phase.
- Final case study inventory, approved client proof, outcomes, and visuals.
- Final production CTA routing and consultation form flow.
- Final service URL structure and information architecture.
- Final footer link set and legal/compliance content.

## Remaining Design Risks

- The preview still needs human visual review for art direction, perceived premium quality, and brand fit.
- Final proof quality depends on approved case studies and measurable outcomes.
- If a future production navigation is added, anchor behavior should be re-tested against that final header height.
- CTA destinations are intentionally preview-only and must be wired during production routing.

## Recommendation For Production Homepage Implementation

- Promote the approved `/ui/homepage` direction into production only after stakeholder sign-off.
- Keep the preview route available until production migration is complete for comparison.
- Convert preview anchor links into real routes and CTAs during the production homepage phase.
- Replace placeholder proof and insight content only with approved case studies, article content, and measurable outcomes.
- Re-run responsive, accessibility, SEO metadata, analytics, and performance QA after production integration.

## QA Results

- `npm.cmd run lint`: passed.
- `npm.cmd run build`: passed.
- Standalone `typecheck` script: unavailable; TypeScript was verified through `next build`.
- `/ui/homepage` HTTP check returned `200`.
- Browser responsive checks at 1440, 1280, 768, and 390 passed for overflow, tiny text, hero CTA visibility, and floating-widget detection.
- Final QA browser checks at 1440, 768, and 390 passed for one H1, hero CTA visibility, overflow, old-branding absence, WhatsApp absence, floating-widget absence, and readable text sizing.

## Approval Readiness

Phase 10B is ready for visual review. The preview establishes a premium dark-first homepage direction while preserving honest placeholders and avoiding final production homepage replacement.
