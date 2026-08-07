export type InsightArticle = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  status: string;
  description: string;
  takeaways: string[];
  sections: Array<{
    title: string;
    body: string;
  }>;
  examples: string[];
  relatedServices: string[];
  metadata: {
    title: string;
    description: string;
  };
};

export const insightCategories = [
  "AI & Automation",
  "Software Engineering",
  "Mobile Apps",
  "Web Development",
  "Cloud & Infrastructure",
  "Digital Growth",
  "Branding & Strategy",
  "Product Thinking",
];

export const editorialStandards = [
  {
    title: "Practical before theoretical",
    body: "Articles should help teams make decisions, frame tradeoffs, and identify next steps.",
  },
  {
    title: "Buyer questions before generic thought leadership",
    body: "Insight topics should respond to real questions clients ask before investing in digital systems.",
  },
  {
    title: "Service links where useful",
    body: "Related service paths should clarify implementation options without turning articles into sales pages.",
  },
  {
    title: "No unsupported claims",
    body: "Statistics, research claims, dates, and named references require verification before publication.",
  },
];

export const insightArticles: InsightArticle[] = [
  {
    slug: "ai-workflow-planning",
    title: "How to plan an AI workflow before building it",
    category: "AI & Automation",
    excerpt:
      "A practical structure for identifying workflow friction, review points, data needs, and implementation risks before investing in AI automation.",
    status: "Guide",
    description:
      "A practical structure for identifying workflow friction, review points, data needs, and implementation risks before investing in AI automation.",
    takeaways: [
      "Start with workflow friction, not model selection.",
      "Define human review points before automation expands.",
      "Map data needs, access limits, and operational risks early.",
      "Measure usefulness by workflow quality and decision confidence.",
    ],
    sections: [
      {
        title: "Start with the workflow, not the tool",
        body: "Most AI projects go sideways because the first question asked is 'which model should we use?' instead of 'what decision are we actually trying to speed up?' Before choosing any tool, map the workflow end to end: what comes in, who currently makes the decision, what information they use to make it, and where the delay actually lives. Often the bottleneck isn't the decision itself — it's finding the information needed to make it. That distinction changes what you should build. If the problem is information scattered across five places, the fix might be a better data pipeline, not a model. If the problem is a genuinely repetitive judgment call made hundreds of times a day, that's where automation earns its cost.",
      },
      {
        title: "Define oversight before you define automation",
        body: "Decide where a human needs to review, approve, correct, or override an automated step — before you build the automation, not after something goes wrong. In practice this means setting confidence thresholds: cases the system is highly certain about can move automatically, and everything below that threshold routes to a person. This isn't a compromise on 'real' automation — it's what makes teams actually trust and adopt the system. A workflow nobody trusts enough to use isn't saving anyone time, regardless of how capable the underlying model is. Build the review interface as a first-class part of the system, not an afterthought bolted on when someone complains.",
      },
      {
        title: "Plan for data quality, access, and maintenance",
        body: "An AI workflow is only as reliable as the data feeding it, and data quality problems that were tolerable when a human was doing the work by hand become visible fast once you automate around them. Before implementation, map what data the workflow needs, where it currently lives, who has access to it, and what happens when it's incomplete or wrong. Just as important: plan who owns the system after launch. Someone needs to monitor performance, review edge cases the model handles poorly, and update the workflow as the business changes. A system with no owner degrades quietly until it's doing more harm than the manual process it replaced.",
      },
      {
        title: "Measure workflow quality, not novelty",
        body: "The right way to evaluate an AI workflow isn't 'does it feel impressive' — it's whether it improves the actual outcomes that mattered before you built it: faster response times, fewer routing errors, less time spent on repetitive triage, more consistent decisions across the team. Track override rates (how often a human corrects the system's suggestion) as a leading indicator of whether your confidence thresholds are calibrated correctly. A high override rate early on isn't a failure — it's data. Use it to adjust the system rather than treating the first version as final.",
      },
    ],
    examples: [
      "Internal review workflow",
      "Lead qualification workflow",
      "Support triage workflow",
      "Document processing workflow",
    ],
    relatedServices: ["AI Solutions", "Software Engineering", "Technology Consulting"],
    metadata: {
      title: "How to Plan an AI Workflow Before Building It | NEXORA ORBIT",
      description:
        "A practical guide to planning AI workflows around real friction points, human review, data readiness, and measurable outcomes.",
    },
  },
  {
    slug: "conversion-ready-website",
    title: "What makes a website conversion-ready",
    category: "Web Development / Digital Growth",
    excerpt:
      "A guide to the structure behind high-trust pages, clear CTAs, forms, service pathways, and measurement-ready user journeys.",
    status: "Guide",
    description:
      "A guide to the structure behind high-trust pages, clear CTAs, forms, service pathways, and measurement-ready user journeys.",
    takeaways: [
      "Conversion readiness starts with trust and clarity.",
      "Service pathways should match user intent and buying stage.",
      "Forms need enough context without creating unnecessary friction.",
      "Measurement should be planned before optimization begins.",
    ],
    sections: [
      {
        title: "Clarify the decision path before designing the page",
        body: "A website converts when a visitor can quickly answer three questions: what does this company actually do, is it relevant to my situation, and what should I do next. Most underperforming sites fail on the third question — they present information without a clear next step. Every key page should have one primary action, not three competing ones. Secondary options (read more, view pricing, see examples) should visibly support that primary path, not distract from it. This is a structural decision made before any visual design starts, not something a button color fixes afterward.",
      },
      {
        title: "Design the enquiry moment carefully",
        body: "The point where a visitor decides to submit a form or send an email is the highest-friction moment on the entire site — get it wrong and everything upstream was wasted effort. Ask for only what you need to have a useful first conversation, not everything you'll eventually want to know. Set expectations clearly: what happens after they submit, how quickly they'll hear back, what the next step actually looks like. And be explicit about how their information will be used — a short, honest line near the form does more for conversion than people expect, because it removes hesitation at exactly the moment it would otherwise cause someone to abandon the form.",
      },
      {
        title: "Structure service pages around buying stage, not org chart",
        body: "Visitors arrive at different points in their decision: some are early and exploring options, others already know what they need and are comparing who to hire. A single generic services page trying to serve both audiences usually serves neither well. Structure content so early-stage visitors can quickly understand scope and approach, while ready-to-buy visitors can find pricing signals, process detail, and a direct path to contact without digging. This is an information architecture decision, not a copywriting one — get the structure right first.",
      },
      {
        title: "Set up measurement before you optimize anything",
        body: "You can't improve what you aren't measuring, and retrofitting analytics after launch means losing the most valuable data — how visitors behaved on the very first version of the site. Before launch, decide what you'll actually track: which pages get views, where visitors drop off before reaching a CTA, how many form starts convert to submissions. Resist the temptation to track everything vaguely; track the handful of events that would actually change what you build next. The goal isn't a dashboard full of numbers — it's a small set of signals that tell you where the real friction is.",
      },
    ],
    examples: ["Service page CTA path", "Project enquiry form", "Case study pathway", "Measurement-ready landing page"],
    relatedServices: ["Web Development", "Digital Marketing", "Branding"],
    metadata: {
      title: "What Makes a Website Conversion-Ready | NEXORA ORBIT",
      description:
        "A practical guide to high-trust page structure, clear CTAs, forms, service pathways, and measurement-ready user journeys.",
    },
  },
  {
    slug: "cloud-architecture-growth",
    title: "Why cloud architecture affects product growth",
    category: "Cloud & Infrastructure",
    excerpt:
      "How infrastructure decisions influence reliability, release confidence, scalability, cost control, and product momentum.",
    status: "Guide",
    description:
      "How infrastructure decisions influence reliability, release confidence, scalability, cost control, and product momentum.",
    takeaways: [
      "Infrastructure decisions shape product reliability and release confidence.",
      "Scalability is a planning discipline, not a last-minute patch.",
      "Cost control improves when ownership and visibility are designed early.",
      "Growth depends on systems teams can maintain and improve.",
    ],
    sections: [
      {
        title: "Reliability is what lets a team move fast",
        body: "Teams with confidence in their deployment and rollback process ship more often, because a bad release is a minor incident instead of a crisis. That confidence isn't luck — it comes from specific infrastructure decisions: automated deployments instead of manual steps, monitoring that surfaces problems before customers report them, and a rollback path that's actually been tested, not just assumed to work. Teams without this foundation slow down over time, not because they got worse at building features, but because every release carries more risk than it should, so they ship less often out of caution.",
      },
      {
        title: "Scalability has to be a decision, not a scramble",
        body: "Scalability problems rarely announce themselves early — a system works fine at low volume and then degrades suddenly once usage crosses some threshold nobody planned around. Good architecture anticipates this: database queries that stay fast as data grows, caching applied where it actually matters instead of everywhere, and a clear separation between the parts of the system likely to need independent scaling. None of this means over-engineering for scale you don't have yet — it means making decisions that don't actively work against you when growth does arrive, which is a very different thing from building for a hypothetical million users on day one.",
      },
      {
        title: "Cost control needs visibility, not just discipline",
        body: "Cloud costs tend to grow quietly — a resource provisioned for a launch that never got cleaned up, a service scaled for a traffic spike that never got scaled back down. The fix isn't willpower, it's visibility: infrastructure organized so cost can actually be attributed to the part of the product driving it, and a regular review habit instead of an annual surprise when the bill arrives. This is much easier to build in from the start than to retrofit onto a system where everything already shares the same undifferentiated infrastructure.",
      },
      {
        title: "Growth depends on systems a team can actually maintain",
        body: "The most sophisticated architecture is a liability if the team responsible for it doesn't understand how it works or why it was built that way. Documentation, sensible defaults, and infrastructure that follows familiar patterns instead of clever-but-obscure ones all matter more than they get credit for. A system that's slightly less elegant but fully understood by the team maintaining it will outperform a more sophisticated one that only the original builder can safely touch — because growth requires the team to keep improving the system long after the initial build is done.",
      },
    ],
    examples: ["Deployment planning", "Cloud cost review", "Monitoring and recovery model", "Scalable platform roadmap"],
    relatedServices: ["Cloud Engineering", "Software Engineering", "Technology Consulting"],
    metadata: {
      title: "Why Cloud Architecture Affects Product Growth | NEXORA ORBIT",
      description:
        "A practical guide to how infrastructure decisions shape reliability, scalability, cost control, and product momentum.",
    },
  },
];

export function getInsightArticleBySlug(slug: string) {
  return insightArticles.find((article) => article.slug === slug);
}
