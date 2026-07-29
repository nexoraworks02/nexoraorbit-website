# Phase 10A - Wireframe Architecture Report

Project: NEXORA WORKS  
Phase: 10A - Wireframe Architecture  
Status: Complete and ready for approval review  

## Pages Completed

- Homepage wireframe
- Services landing wireframe
- Reusable service detail template
- Work / portfolio wireframe
- Case study template
- About wireframe
- Contact wireframe
- Insights / blog wireframe

## Sections Completed

- Homepage: hero, trust snapshot, transformation statement, services overview, proof, process, why NEXORA WORKS, engagement fit, insights preview, final CTA, footer.
- Services landing: hero, category groups, Build / Intelligence / Scale / Grow, cards, process preview, CTA.
- Service detail: hero, problem context, outcomes, capabilities, process, related work, methods, audience fit, FAQ, CTA.
- Work and case study: proof-led discovery, filters, gallery, challenge, objectives, strategy, solution, execution, results, related work, CTA.
- About, contact, and insights: mission, principles, enquiry flow, objection handling, category filters, article grid, newsletter placeholder.

## Responsive Notes

- Each major page now includes desktop, tablet, and mobile behavior notes directly inside `/wireframes`.
- Desktop notes define multi-column hierarchy and proof/service scan behavior.
- Tablet notes define controlled collapse patterns and preserved section rhythm.
- Mobile notes define single-column reading order, scroll behavior, and navigation expectations.
- Mobile QA at a 390px-class viewport found no horizontal overflow, no elements wider than viewport, and no rendered text below 11px.

## Component Mapping

- Each wireframe section now shows the expected Phase 9 design-system component mapping.
- Mapped primitives include `Container`, `SectionHeader`, `Card`, `Button`, `GlassPanel`, `Grid`, `Input`, `Accordion`, `Tabs`, `Badge`, and `Chip`.
- Mapping is shown as non-interactive badges so review notes do not create unnecessary keyboard stops.

## CTA Mapping

- Homepage: primary `Book a Consultation`; secondary `Explore Services / View Work`.
- Service landing and service detail: primary `Discuss a Project`; secondary `View Related Work`.
- Work and case study: primary `View Case Study`; secondary `Book a Consultation`.
- Contact: primary `Submit Project Enquiry`; secondary `Direct Email`.
- About: primary `Book a Consultation`; secondary `Explore Services / View Work`.
- Insights: primary `Read Article`; secondary `Explore Related Services`.

## SEO Notes

- Each page template now includes H1 placement guidance.
- Each page template includes proposed main H2 sections.
- FAQ schema areas are marked where relevant, especially service detail, contact, and case study templates.
- Internal linking notes define expected links between services, work, case studies, contact, about, and insights.

## Navigation Cleanup

- `/wireframes` keeps its isolated Phase 10A shell and does not use the marketing header, footer, CTA, or WhatsApp widget.
- Page navigation now has a visible label, stronger mobile readability, horizontal scrolling on small screens, and keyboard-focusable anchor links.

## Reusable Wireframe Components

- `WireframeShell`
- `WireframePageNav`
- `WireframePage`
- `WireframeSection`
- `WireframeBlock`
- `HomepageWireframe`
- `ServicesWireframe`
- `ServiceDetailWireframe`
- `WorkWireframe`
- `CaseStudyWireframe`
- `AboutWireframe`
- `ContactWireframe`
- `InsightsWireframe`
- `wireframeData`

## QA Results

- `npm.cmd run lint`: passed.
- `npm.cmd run build`: passed.
- Standalone `typecheck` script: unavailable; TypeScript was verified through `next build`.
- `/wireframes` HTTP check returned `200`.
- Browser viewport check at 390px-class width passed for overflow, tiny text, and wide element detection.

## Remaining Risks

- Final proof inventory is still pending: case studies, project visuals, approved client names, and measurable outcomes.
- Contact form qualification fields, spam protection, and routing still need product and engineering decisions.
- Final CMS ownership model for services, work, case studies, and insights is not yet defined.
- `/wireframes` should remain internal-only or be removed before public launch.

## Approval Readiness

Phase 10A is ready for approval review. The next step should be stakeholder review of hierarchy, conversion flow, section order, SEO structure, and mobile reading order before any high-fidelity UI or production homepage work begins.
