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
      "A structured preview for product platforms, SaaS systems, internal tools, and scalable application foundations.",
    status: "Preview structure only",
    cta: "View Case Study Structure",
    headline: "Product Platform System: turning complex workflows into a scalable product foundation.",
    context:
      "Designed as a structure for SaaS platforms, internal systems, marketplaces, dashboards, and product-led business tools.",
    services: ["Software Engineering", "Product Design", "Web Development", "Cloud Engineering"],
    challenge:
      "Complex product workflows need clear information architecture, durable technical foundations, and a path from early scope to maintainable release.",
    objectives: ["Clarify product workflows", "Define scalable foundations", "Prepare reusable interface and platform patterns"],
    strategy: ["Map user and operational flows", "Separate core system objects from presentation", "Prioritize foundations that can support future product expansion"],
    solution: ["A product-platform structure with system modules, interface patterns, and delivery documentation.", "Reusable architecture for dashboards, workflows, permissions, and integrations."],
    execution: ["Define product structure", "Shape interface hierarchy", "Plan platform architecture", "Prepare QA and handoff model"],
    lessons: ["Complexity should be organized before interface polish.", "Product systems need architecture, not isolated screens.", "Documentation is part of long-term product quality."],
    metadata: {
      title: "Product Platform System Case Study Structure | NEXORA ORBIT",
      description:
        "A transparent case study structure preview for product platforms, SaaS systems, internal tools, dashboards, and scalable application foundations.",
    },
  },
  {
    slug: "ai-workflow-architecture",
    title: "AI Workflow Architecture",
    category: "AI Solutions / Automation",
    problem:
      "A structured preview for AI-enabled workflows, internal automation, human review systems, and operational intelligence.",
    status: "Preview structure only",
    cta: "View Case Study Structure",
    headline: "AI Workflow Architecture: shaping automation into reliable business systems.",
    context:
      "Designed as a structure for AI-enabled workflows, internal automation, intelligent search, human-in-the-loop review, and operational decision support.",
    services: ["AI Solutions", "Automation Workflows", "Software Engineering", "Technology Consulting"],
    challenge:
      "AI workflows need business context, data boundaries, human oversight, and a clear operational purpose before implementation.",
    objectives: ["Identify practical AI use cases", "Define oversight and review paths", "Connect automation to real business workflows"],
    strategy: ["Start with workflow value instead of tool selection", "Map human-in-the-loop decision points", "Create measurable operating rules for automation"],
    solution: ["A structured AI workflow architecture with automation stages, review points, and integration planning.", "A practical model for internal intelligence without fake autonomy claims."],
    execution: ["Map workflow inputs and outputs", "Define model and data responsibilities", "Prototype review flow", "Document adoption and optimization needs"],
    lessons: ["AI is most useful when shaped around existing operational reality.", "Oversight improves trust.", "Measurement should focus on workflow quality, not novelty."],
    metadata: {
      title: "AI Workflow Architecture Case Study Structure | NEXORA ORBIT",
      description:
        "A transparent case study structure preview for AI-enabled workflows, automation, human review systems, and operational intelligence.",
    },
  },
  {
    slug: "brand-web-growth-system",
    title: "Brand + Web Growth System",
    category: "Branding / Web Development / Growth",
    problem:
      "A structured preview for companies that need brand clarity, conversion-ready web presence, and digital growth infrastructure.",
    status: "Preview structure only",
    cta: "View Case Study Structure",
    headline: "Brand + Web Growth System: connecting identity, website structure, and conversion paths.",
    context:
      "Designed as a structure for companies that need clearer positioning, premium web presence, SEO-ready architecture, and measurable enquiry paths.",
    services: ["Branding", "Web Development", "Digital Marketing", "SEO / CRO"],
    challenge:
      "Growth systems often fail when brand, website structure, content, search, and conversion paths are treated as separate tasks.",
    objectives: ["Clarify positioning", "Create a premium web structure", "Support search visibility and qualified enquiry paths"],
    strategy: ["Connect brand language to page hierarchy", "Structure journeys around qualified user intent", "Plan measurement before optimization"],
    solution: ["A connected brand and web growth system with clear messaging, page architecture, conversion paths, and measurement foundations.", "A restrained visual direction that supports trust before persuasion."],
    execution: ["Define brand and messaging rules", "Plan page and SEO architecture", "Design conversion-ready sections", "Prepare analytics and optimization handoff"],
    lessons: ["Brand clarity improves web clarity.", "Conversion depends on structure as much as visual design.", "Growth systems need measurement discipline from the beginning."],
    metadata: {
      title: "Brand + Web Growth System Case Study Structure | NEXORA ORBIT",
      description:
        "A transparent case study structure preview for brand clarity, premium web presence, SEO-ready architecture, and conversion paths.",
    },
  },
];

export function getWorkProjectBySlug(slug: string) {
  return workProjects.find((project) => project.slug === slug);
}
