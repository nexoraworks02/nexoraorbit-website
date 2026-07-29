export type ServiceGroup = {
  label: "Build" | "Intelligence" | "Scale" | "Grow";
  description: string;
  services: string[];
};

export type ServiceDetail = {
  slug: string;
  eyebrow: string;
  title: string;
  headline: string;
  description: string;
  cta: string;
  outcomes: string[];
  capabilities: string[];
  process: string[];
  methods: string[];
  audience: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  metadata: {
    title: string;
    description: string;
  };
};

export const serviceGroups: ServiceGroup[] = [
  {
    label: "Build",
    description: "Product platforms, modern websites, and mobile applications built with durable engineering foundations.",
    services: ["Software Engineering", "Web Development", "Mobile App Development"],
  },
  {
    label: "Intelligence",
    description: "AI-enabled systems, automation workflows, and data-supported decisions shaped around practical use.",
    services: ["AI Solutions", "Automation Workflows", "Data-supported Systems"],
  },
  {
    label: "Scale",
    description: "Cloud infrastructure, technology consulting, and platform planning for systems that need to grow.",
    services: ["Cloud Engineering", "Technology Consulting", "Infrastructure Planning"],
  },
  {
    label: "Grow",
    description: "Brand and growth systems that improve clarity, search visibility, conversion, and market trust.",
    services: ["Branding", "Digital Marketing", "SEO / CRO"],
  },
];

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "software-engineering",
    eyebrow: "Software Engineering",
    title: "Software Engineering",
    headline: "Scalable software systems for products, operations, and growth.",
    description:
      "We design and engineer software foundations that support product workflows, operational systems, and growth-ready platforms without unnecessary complexity.",
    cta: "Discuss a Software Project",
    outcomes: ["Clear product architecture", "Maintainable code foundations", "Reliable workflows and integrations"],
    capabilities: ["Product platforms", "Internal tools", "API design", "System integrations", "Frontend engineering", "Technical documentation"],
    process: ["Clarify the product and operational context", "Define architecture and delivery priorities", "Build reusable, testable modules", "Prepare launch, QA, and handoff"],
    methods: ["React and Next.js implementation", "Typed data contracts", "Reusable component systems", "Performance-aware delivery"],
    audience: ["Product teams planning new platforms", "Businesses replacing manual workflows", "Founders preparing scalable product foundations"],
    faqs: [
      {
        question: "Can NEXORA ORBIT build from an early idea?",
        answer: "Yes. We can help clarify scope, system architecture, and the first practical release before production code begins.",
      },
      {
        question: "Do you work with existing systems?",
        answer: "Yes. Existing products can be assessed, stabilized, modernized, or extended depending on business priorities.",
      },
      {
        question: "Is documentation included?",
        answer: "Documentation and handoff are treated as part of the product, especially for systems that will evolve after launch.",
      },
    ],
    metadata: {
      title: "Software Engineering | NEXORA ORBIT",
      description: "Scalable software engineering for product platforms, operations, integrations, and growth-ready digital systems.",
    },
  },
  {
    slug: "ai-solutions",
    eyebrow: "AI Solutions",
    title: "AI Solutions",
    headline: "Practical AI systems for workflows, products, and business operations.",
    description:
      "We shape AI around real workflows, clear oversight, and measurable use so automation supports the business instead of becoming another disconnected tool.",
    cta: "Explore AI Solutions",
    outcomes: ["Workflow clarity before automation", "AI-assisted operations", "Structured oversight and adoption"],
    capabilities: ["AI workflow planning", "Automation architecture", "Prompt and process design", "Internal assistants", "Knowledge systems", "Operational AI prototypes"],
    process: ["Identify valuable AI use cases", "Map risks, data, and human oversight", "Prototype the workflow", "Refine for production readiness"],
    methods: ["AI workflow design", "Human-in-the-loop planning", "Data-supported system mapping", "Operational measurement"],
    audience: ["Teams exploring automation", "Companies improving internal processes", "Product teams adding intelligent features"],
    faqs: [
      {
        question: "Do you start with tools or workflows?",
        answer: "We start with workflows. The right AI approach depends on the task, risk, data, and operational context.",
      },
      {
        question: "Can AI be added to an existing product?",
        answer: "Yes. We assess the product, user journey, data flow, and oversight needs before recommending an implementation path.",
      },
      {
        question: "Do you promise full automation?",
        answer: "No. We focus on practical AI systems with appropriate review, control, and measurable business value.",
      },
    ],
    metadata: {
      title: "AI Solutions | NEXORA ORBIT",
      description: "Practical AI systems for workflows, products, operations, automation planning, and business process improvement.",
    },
  },
  {
    slug: "mobile-app-development",
    eyebrow: "Mobile App Development",
    title: "Mobile App Development",
    headline: "Mobile experiences designed for clarity, performance, and launch readiness.",
    description:
      "We plan and build mobile experiences around user goals, product constraints, performance expectations, and the operational reality behind launch.",
    cta: "Plan a Mobile App",
    outcomes: ["Clear mobile product scope", "Usable app journeys", "Launch-ready technical foundation"],
    capabilities: ["Mobile product planning", "App interface systems", "Cross-platform architecture", "API-connected experiences", "Release preparation", "Post-launch optimization planning"],
    process: ["Clarify user journeys and platform needs", "Define app architecture and content flows", "Build the core experience", "Prepare testing, release, and iteration"],
    methods: ["Responsive interface systems", "Mobile-first interaction planning", "Performance-minded implementation", "Release checklist support"],
    audience: ["Founders planning a mobile product", "Businesses extending web platforms to mobile", "Teams modernizing existing app experiences"],
    faqs: [
      {
        question: "Do you help plan the first version?",
        answer: "Yes. We help define the smallest useful release so the app can launch with clarity and improve from feedback.",
      },
      {
        question: "Can mobile apps connect with existing systems?",
        answer: "Yes. Integrations, APIs, and operational data flows are considered early in the planning process.",
      },
      {
        question: "Do you design and build?",
        answer: "Yes. The mobile work can include product structure, interface design, engineering, QA, and launch preparation.",
      },
    ],
    metadata: {
      title: "Mobile App Development | NEXORA ORBIT",
      description: "Mobile app development for clear, performant, launch-ready digital products and connected user experiences.",
    },
  },
  {
    slug: "web-development",
    eyebrow: "Web Development",
    title: "Web Development",
    headline: "Modern websites and web platforms built for trust, speed, and conversion.",
    description:
      "We build websites and web platforms that communicate clearly, perform reliably, and support qualified users from first visit to next action.",
    cta: "Discuss a Web Project",
    outcomes: ["Trust-building web presence", "Fast and structured pages", "Conversion-aware journeys"],
    capabilities: ["Marketing websites", "Web platforms", "Landing systems", "Frontend engineering", "CMS-ready structures", "Performance and accessibility foundations"],
    process: ["Define page strategy and user intent", "Shape information architecture and content", "Build reusable page systems", "Prepare SEO, QA, and launch"],
    methods: ["Next.js implementation", "Semantic page structure", "Design-system components", "SEO-aware frontend architecture"],
    audience: ["Companies modernizing their website", "Teams launching a product or service", "Businesses needing a stronger conversion path"],
    faqs: [
      {
        question: "Can you replace an existing website?",
        answer: "Yes. We can audit the current experience, preserve useful assets, and rebuild around clearer structure and performance.",
      },
      {
        question: "Is SEO considered during development?",
        answer: "Yes. Metadata, headings, page structure, internal links, and performance are considered as part of implementation.",
      },
      {
        question: "Can the site evolve after launch?",
        answer: "Yes. The system can be built with reusable sections and CMS-ready content patterns for future growth.",
      },
    ],
    metadata: {
      title: "Web Development | NEXORA ORBIT",
      description: "Modern web development for premium websites, platforms, performance, accessibility, SEO, and conversion-ready journeys.",
    },
  },
  {
    slug: "cloud-engineering",
    eyebrow: "Cloud Engineering",
    title: "Cloud Engineering",
    headline: "Cloud-ready infrastructure for reliable, scalable digital systems.",
    description:
      "We help shape cloud foundations that make products and platforms more reliable, maintainable, observable, and ready for future growth.",
    cta: "Discuss Cloud Architecture",
    outcomes: ["Reliable deployment foundations", "Scalable platform planning", "Clear operational visibility"],
    capabilities: ["Cloud architecture planning", "Deployment workflows", "Infrastructure modernization", "Observability planning", "Performance readiness", "Platform reliability review"],
    process: ["Assess system requirements and risks", "Define cloud architecture and deployment model", "Plan reliability and observability", "Document operations and handoff"],
    methods: ["Cloud readiness audits", "Infrastructure planning", "Deployment architecture", "Operational documentation"],
    audience: ["Product teams preparing to scale", "Businesses modernizing infrastructure", "Teams needing more reliable deployment processes"],
    faqs: [
      {
        question: "Can you review our current infrastructure?",
        answer: "Yes. We can assess reliability, scalability, deployment, and operational risks before recommending changes.",
      },
      {
        question: "Do you focus on one cloud provider?",
        answer: "We focus on architecture and requirements first, then align implementation with the best-fit provider or existing stack.",
      },
      {
        question: "Is cloud work only for large companies?",
        answer: "No. Clear infrastructure decisions help startups and growing businesses avoid costly rebuilds later.",
      },
    ],
    metadata: {
      title: "Cloud Engineering | NEXORA ORBIT",
      description: "Cloud engineering and architecture planning for reliable, scalable, maintainable digital products and platforms.",
    },
  },
  {
    slug: "branding",
    eyebrow: "Branding",
    title: "Branding",
    headline: "Brand systems that make technology companies clearer and more credible.",
    description:
      "We create brand foundations that help technical companies communicate with precision, earn trust, and support a stronger digital presence.",
    cta: "Plan a Brand System",
    outcomes: ["Clear positioning", "Credible visual identity", "Reusable brand language"],
    capabilities: ["Brand strategy", "Messaging systems", "Visual identity", "Design direction", "Brand guidelines", "Digital brand application"],
    process: ["Clarify business and audience context", "Define positioning and messaging", "Shape identity and design rules", "Prepare handoff and digital application"],
    methods: ["Brand workshops", "Messaging architecture", "Visual system design", "Guideline documentation"],
    audience: ["Technology companies needing clarity", "Startups preparing to launch", "Businesses modernizing their market presence"],
    faqs: [
      {
        question: "Is branding only visual design?",
        answer: "No. Brand work includes positioning, messaging, visual identity, and how the company presents itself across digital touchpoints.",
      },
      {
        question: "Can branding connect with website design?",
        answer: "Yes. Brand systems are most useful when they inform the website, product interface, content, and conversion journey.",
      },
      {
        question: "Do you create guidelines?",
        answer: "Yes. Guidelines help teams apply the brand consistently after launch.",
      },
    ],
    metadata: {
      title: "Branding | NEXORA ORBIT",
      description: "Brand strategy, messaging, identity systems, and digital brand foundations for technology companies and growing teams.",
    },
  },
  {
    slug: "digital-marketing",
    eyebrow: "Digital Marketing",
    title: "Digital Marketing",
    headline: "Growth systems built around search, conversion, content, and measurement.",
    description:
      "We structure digital growth around clear journeys, measurable signals, useful content, and conversion paths that support qualified demand.",
    cta: "Plan a Growth System",
    outcomes: ["Better search readiness", "Clearer conversion paths", "Measurable growth foundations"],
    capabilities: ["SEO planning", "Content systems", "Conversion structure", "Campaign landing pages", "Analytics planning", "Growth audits"],
    process: ["Assess audience and acquisition channels", "Define content and conversion priorities", "Build measurement-ready journeys", "Optimize from signal and feedback"],
    methods: ["SEO and CRO planning", "Content architecture", "Analytics-ready implementation", "Conversion journey mapping"],
    audience: ["Companies improving qualified demand", "Teams rebuilding digital growth foundations", "Businesses connecting brand, website, and marketing"],
    faqs: [
      {
        question: "Do you run paid ads?",
        answer: "This phase focuses on growth systems, content, search, conversion, and measurement foundations. Paid media can be evaluated later.",
      },
      {
        question: "Can marketing work connect to the website?",
        answer: "Yes. Strong growth work connects traffic sources, landing pages, content, forms, and analytics.",
      },
      {
        question: "Do you guarantee rankings or leads?",
        answer: "No. We avoid fake guarantees and focus on improving the structure, clarity, measurement, and conversion readiness of the system.",
      },
    ],
    metadata: {
      title: "Digital Marketing | NEXORA ORBIT",
      description: "Digital marketing systems for SEO, content, conversion, analytics, and measured growth foundations.",
    },
  },
  {
    slug: "technology-consulting",
    eyebrow: "Technology Consulting",
    title: "Technology Consulting",
    headline: "Technical clarity for better product, platform, and growth decisions.",
    description:
      "We help teams make better technical decisions before committing budget, roadmap time, or production effort to the wrong direction.",
    cta: "Discuss Technology Consulting",
    outcomes: ["Clearer technical priorities", "Reduced implementation risk", "Better roadmap decisions"],
    capabilities: ["Technology audits", "Roadmap planning", "Platform evaluation", "Architecture review", "Vendor and stack guidance", "Product feasibility assessment"],
    process: ["Understand business and technical context", "Identify constraints and risks", "Evaluate paths and tradeoffs", "Document recommendations and next steps"],
    methods: ["Technical discovery", "Architecture mapping", "Risk assessment", "Decision documentation"],
    audience: ["Founders before a major build", "Teams evaluating platform decisions", "Businesses modernizing legacy systems"],
    faqs: [
      {
        question: "Can consulting happen before design or development?",
        answer: "Yes. Consulting is often most valuable before execution because it clarifies the right path and reduces rework.",
      },
      {
        question: "Do you provide written recommendations?",
        answer: "Yes. Recommendations and next steps can be documented for internal alignment and implementation planning.",
      },
      {
        question: "Can you support implementation after consulting?",
        answer: "Yes. If the direction is approved, consulting can lead into design, engineering, cloud, AI, or growth work.",
      },
    ],
    metadata: {
      title: "Technology Consulting | NEXORA ORBIT",
      description: "Technology consulting for product decisions, platform planning, architecture review, audits, and roadmap clarity.",
    },
  },
];

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
