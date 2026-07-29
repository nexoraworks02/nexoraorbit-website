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
    status: "Placeholder article structure",
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
        title: "Start with the workflow",
        body: "Final editorial content should explain how to map inputs, decisions, handoffs, and exceptions before choosing tools.",
      },
      {
        title: "Define oversight",
        body: "Final editorial content should clarify where humans review, approve, correct, or override automated steps.",
      },
      {
        title: "Plan implementation risk",
        body: "Final editorial content should address data quality, adoption, security, cost, and maintenance without unsupported claims.",
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
        "A placeholder insight structure for planning AI workflows around friction, review points, data needs, and implementation risk.",
    },
  },
  {
    slug: "conversion-ready-website",
    title: "What makes a website conversion-ready",
    category: "Web Development / Digital Growth",
    excerpt:
      "A guide to the structure behind high-trust pages, clear CTAs, forms, service pathways, and measurement-ready user journeys.",
    status: "Placeholder article structure",
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
        title: "Clarify the decision path",
        body: "Final editorial content should explain how page hierarchy, service navigation, proof, and CTAs support qualified action.",
      },
      {
        title: "Design the enquiry moment",
        body: "Final editorial content should cover forms, direct contact options, expectation-setting, and privacy language.",
      },
      {
        title: "Prepare measurement",
        body: "Final editorial content should describe analytics foundations without inventing benchmarks or guaranteed outcomes.",
      },
    ],
    examples: ["Service page CTA path", "Project enquiry form", "Case study pathway", "Measurement-ready landing page"],
    relatedServices: ["Web Development", "Digital Marketing", "Branding"],
    metadata: {
      title: "What Makes a Website Conversion-Ready | NEXORA ORBIT",
      description:
        "A placeholder insight structure about high-trust page structure, clear CTAs, forms, service pathways, and measurement-ready journeys.",
    },
  },
  {
    slug: "cloud-architecture-growth",
    title: "Why cloud architecture affects product growth",
    category: "Cloud & Infrastructure",
    excerpt:
      "How infrastructure decisions influence reliability, release confidence, scalability, cost control, and product momentum.",
    status: "Placeholder article structure",
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
        title: "Reliability supports momentum",
        body: "Final editorial content should explain how deployment, monitoring, and recovery choices affect product confidence.",
      },
      {
        title: "Scalability needs ownership",
        body: "Final editorial content should connect architecture decisions to team handoff, documentation, and maintenance.",
      },
      {
        title: "Cost needs visibility",
        body: "Final editorial content should discuss cost awareness and operational review without making unverified savings claims.",
      },
    ],
    examples: ["Deployment planning", "Cloud cost review", "Monitoring and recovery model", "Scalable platform roadmap"],
    relatedServices: ["Cloud Engineering", "Software Engineering", "Technology Consulting"],
    metadata: {
      title: "Why Cloud Architecture Affects Product Growth | NEXORA ORBIT",
      description:
        "A placeholder insight structure about cloud architecture, reliability, scalability, cost control, and product momentum.",
    },
  },
];

export function getInsightArticleBySlug(slug: string) {
  return insightArticles.find((article) => article.slug === slug);
}
