export type WorkProject = {
  slug: string;
  title: string;
  category: string;
  problem: string;
  status: string;
  cta: string;
  headline: string;
  context: string;
  services: string[];
  challenge: string;
  objectives: string[];
  strategy: string[];
  solution: string[];
  execution: string[];
  lessons: string[];
  metadata: {
    title: string;
    description: string;
  };
};

export const workFilters = ["All", "Software", "AI", "Mobile Apps", "Web", "Cloud", "Branding", "Marketing"];

export const proofPrinciples = [
  {
    title: "Context before visuals",
    body: "A strong case study starts by explaining the business situation, user needs, and constraints around the work.",
  },
  {
    title: "Strategy before execution",
    body: "The decisions behind the build matter as much as the final interface, workflow, or system.",
  },
  {
    title: "Outcomes before decoration",
    body: "Visual polish only matters when it supports clarity, usefulness, performance, and business movement.",
  },
  {
    title: "Honest proof only",
    body: "Metrics, clients, logos, screenshots, and results should appear only when approved and verified.",
  },
];

export const measurementExamples = [
  "Conversion path clarity",
  "Page performance",
  "Workflow completion",
  "Search visibility",
  "Enquiry quality",
  "Operational efficiency",
];

export const workProjects: WorkProject[] = [
  {
    slug: "product-platform-system",
    title: "Product Platform System",
    category: "Software Engineering / Product Architecture",
    problem:
      "An illustrative example of how NEXORA ORBIT approaches SaaS platforms, internal tools, and scalable application foundations.",
    status: "Illustrative example",
    cta: "View Illustrative Example",
    headline: "Product Platform System: turning complex workflows into a scalable product foundation.",
    context:
      "A composite scenario based on a common starting point: an operations team running critical workflows across spreadsheets, email threads, and a handful of disconnected tools, reaching the point where the manual process is now the bottleneck on growth.",
    services: ["Software Engineering", "Product Design", "Web Development", "Cloud Engineering"],
    challenge:
      "The team already understood their workflow deeply, but that knowledge lived in habits and tribal memory rather than a system. Every new hire took weeks to become productive, every exception had to be handled by the one person who remembered the edge case, and the tools in use could not talk to each other. The task was not to digitize what existed, but to understand which parts of the process were genuinely necessary and which had only survived because nothing better existed yet.",
    objectives: [
      "Turn an undocumented, person-dependent process into a system anyone on the team could run",
      "Design a data model and permission structure that could support the next two years of growth, not just current headcount",
      "Replace three disconnected tools with one platform without losing any workflow flexibility the team actually relied on",
    ],
    strategy: [
      "Spend the first phase mapping the real workflow — including every exception and workaround — before writing a line of interface code",
      "Separate the platform into core system objects (records, permissions, state transitions) from the screens that present them, so the interface could evolve without rebuilding the data layer",
      "Design the permission and role model up front, since retrofitting access control into a live product is far more expensive than building it in from day one",
      "Prioritize the 20% of the workflow that caused 80% of the delay, rather than trying to digitize every edge case in the first release",
    ],
    solution: [
      "A modular platform architecture with a clear separation between the core system (records, workflow state, permissions) and the interface layer, so new views and workflows could be added without touching underlying logic.",
      "A role-based permission model that matched how the team actually worked — reviewer, approver, operator, admin — instead of a generic 'user' role that would have forced awkward workarounds.",
      "A dashboard-first interface that surfaced exactly what each role needed to act on next, replacing the daily ritual of checking four different tools to find out what was pending.",
      "An audit trail built into the data model from the start, so every state change was traceable without bolting on logging after the fact.",
    ],
    execution: [
      "Ran structured workflow-mapping sessions with the operations team to document every step, decision point, and exception in the current process",
      "Designed the core data model and permission structure before any interface screens, validating it against the messiest real-world cases first",
      "Built the platform in reviewable increments — core records and permissions first, then the workflow screens, then reporting — so the team could give feedback before too much was locked in",
      "Set up a staging environment mirroring production data volume so performance issues surfaced before launch, not after",
      "Delivered documentation covering system architecture, permission logic, and common operational tasks, so the team was not dependent on the people who built it",
    ],
    lessons: [
      "Mapping the real workflow — including the messy exceptions — before designing anything saves far more time than it costs.",
      "A permission model designed around actual roles prevents the awkward workarounds that generic 'admin vs. user' systems eventually force.",
      "Separating core system logic from the interface layer is what makes a platform survive its second and third year, not just its launch.",
      "Documentation handed off at delivery, not written as an afterthought, is what actually lets a team run the system independently.",
    ],
    metadata: {
      title: "Product Platform System — Illustrative Example | NEXORA ORBIT",
      description:
        "An illustrative example of how NEXORA ORBIT approaches SaaS platforms, internal tools, dashboards, and scalable application foundations.",
    },
  },
  {
    slug: "ai-workflow-architecture",
    title: "AI Workflow Architecture",
    category: "AI Solutions / Automation",
    problem:
      "An illustrative example of how NEXORA ORBIT approaches AI-enabled workflows, internal automation, and operational decision support.",
    status: "Illustrative example",
    cta: "View Illustrative Example",
    headline: "AI Workflow Architecture: shaping automation into reliable business systems.",
    context:
      "A composite scenario based on a familiar pattern: a support or operations team drowning in incoming requests that need to be read, categorized, and routed before anyone can act on them — a task that is repetitive enough to automate, but consequential enough that mistakes are expensive.",
    services: ["AI Solutions", "Automation Workflows", "Software Engineering", "Technology Consulting"],
    challenge:
      "The team wanted 'AI' in the abstract, but the real problem was more specific: incoming requests were inconsistent in format, the correct routing decision depended on context that was not always written down, and a wrong classification meant a delayed response to a customer or an internal team. Full automation without oversight was too risky. No automation left the team buried. The right answer was somewhere in between, and finding it required understanding the workflow before touching a model.",
    objectives: [
      "Reduce the manual triage workload without removing human judgment from decisions that genuinely needed it",
      "Build a review layer so low-confidence classifications were caught before they caused a wrong routing decision",
      "Create a system the team could see inside — not a black box they had to trust blindly",
    ],
    strategy: [
      "Start by mapping the decision the team was actually making, not by picking a model first and working backward",
      "Identify which classification decisions were high-confidence and safe to automate outright, and which needed a human checkpoint",
      "Design the review interface before the automation logic, since a system nobody wants to use in practice is not actually a solution",
      "Set explicit confidence thresholds that routed uncertain cases to a person instead of guessing",
    ],
    solution: [
      "A triage pipeline that classified and routed incoming requests automatically for high-confidence cases, and flagged anything below a defined confidence threshold for human review.",
      "A lightweight review interface showing the model's reasoning alongside its suggested routing, so reviewers could approve, correct, or override in seconds rather than starting from scratch.",
      "A feedback loop where reviewer corrections were logged and used to track model accuracy over time, rather than assuming performance without measurement.",
      "Clear operational documentation describing exactly what the system automated, what it flagged for review, and what it deliberately left to human judgment.",
    ],
    execution: [
      "Audited a sample of historical requests with the team to understand what made a classification 'obvious' versus genuinely ambiguous",
      "Defined the routing categories and confidence thresholds collaboratively with the people who would be accountable for the outcomes",
      "Built and tested the classification pipeline against real historical data before it touched a single live request",
      "Shipped the human review interface alongside the automation, not as a later addition, so oversight was part of the system from day one",
      "Tracked reviewer override rates after launch to confirm the confidence thresholds were calibrated correctly, and adjusted them based on real data",
    ],
    lessons: [
      "Automation is most useful when it is scoped to the specific decision a team actually struggles with, not applied broadly for its own sake.",
      "A visible review layer builds more trust in an automated system than a claim that it is 'accurate enough to skip checking.'",
      "Confidence thresholds should be set from real historical data, then adjusted based on what actually happens after launch — not fixed once and forgotten.",
      "The goal of a well-built AI workflow is not to remove people from the loop, but to spend their judgment on the cases that actually need it.",
    ],
    metadata: {
      title: "AI Workflow Architecture — Illustrative Example | NEXORA ORBIT",
      description:
        "An illustrative example of how NEXORA ORBIT approaches AI-enabled workflows, automation, human review systems, and operational intelligence.",
    },
  },
  {
    slug: "brand-web-growth-system",
    title: "Brand + Web Growth System",
    category: "Branding / Web Development / Growth",
    problem:
      "An illustrative example of how NEXORA ORBIT approaches brand clarity, conversion-ready web presence, and digital growth infrastructure together.",
    status: "Illustrative example",
    cta: "View Illustrative Example",
    headline: "Brand + Web Growth System: connecting identity, website structure, and conversion paths.",
    context:
      "A composite scenario built around a common situation: a company with real credibility in its industry, but a website that undersold it — inconsistent messaging, a homepage trying to speak to everyone at once, and no clear path from a visitor's first click to an actual enquiry.",
    services: ["Branding", "Web Development", "Digital Marketing", "SEO / CRO"],
    challenge:
      "The company's positioning lived in the founder's head, not on the page. Every service was described the same way regardless of who was actually buying it, the site's information architecture had grown page by page without an overall plan, and there was no way to tell which pages were doing any work — because nothing was being measured. Redesigning the visuals without fixing the underlying structure would have produced a better-looking version of the same problem.",
    objectives: [
      "Turn scattered positioning into a small number of clear, defensible messages tied to specific buyer types",
      "Rebuild the site's information architecture around how people actually decide, not around the org chart",
      "Put measurement in place before optimizing anything, so future decisions could be based on real behavior instead of guesses",
    ],
    strategy: [
      "Start with positioning and messaging work before any visual design, so the website had something clear to communicate",
      "Group services and content around buyer intent — 'I'm exploring' versus 'I'm ready to talk' — rather than internal department structure",
      "Design each key page around a single primary action, with secondary paths clearly subordinate to it",
      "Define what 'working' would actually look like — enquiry quality, page engagement, search visibility — before launch, not after",
    ],
    solution: [
      "A condensed brand message architecture: one clear positioning statement, three supporting pillars, and buyer-specific language for each core service.",
      "A restructured site map organized around buyer journey stages instead of internal categories, with clear, consistent calls to action on every page.",
      "A visual direction that supported trust and readability first — restrained, consistent, and fast-loading — rather than leading with decoration.",
      "An analytics and event-tracking foundation set up before launch, so real usage data was available from day one instead of months later.",
    ],
    execution: [
      "Ran positioning workshops to convert founder knowledge into written, testable messaging",
      "Audited the existing site's content and information architecture against the new buyer-journey structure to identify what to keep, merge, or cut",
      "Designed and built key pages around a single primary conversion action each, with consistent navigation and CTA patterns site-wide",
      "Implemented SEO-ready page structure — semantic headings, metadata, sitemap — alongside the visual build rather than retrofitting it afterward",
      "Set up analytics and conversion tracking prior to launch so the first real data was available to review, not estimated",
    ],
    lessons: [
      "A website redesign that skips positioning work usually just produces a better-looking version of the same confusion.",
      "Structuring a site around buyer intent, not internal org structure, is what actually shortens the path to an enquiry.",
      "Measurement set up before launch turns the first month of traffic into decision-useful data instead of a guessing exercise.",
      "Visual restraint earns more trust early in a buyer's journey than heavy persuasion does.",
    ],
    metadata: {
      title: "Brand + Web Growth System — Illustrative Example | NEXORA ORBIT",
      description:
        "An illustrative example of how NEXORA ORBIT approaches brand clarity, premium web presence, SEO-ready architecture, and conversion paths.",
    },
  },
];

export function getWorkProjectBySlug(slug: string) {
  return workProjects.find((project) => project.slug === slug);
}
