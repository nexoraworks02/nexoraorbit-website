export type WireframeItem = {
  label: string;
  note?: string;
};

export type WireframeSectionData = {
  title: string;
  purpose: string;
  hierarchy: WireframeItem[];
  cta: string;
  notes: string;
  variant?: "hero" | "standard" | "split" | "grid" | "form" | "gallery" | "cta";
  components?: string[];
};

export type WireframePageData = {
  id: string;
  eyebrow: string;
  title: string;
  purpose: string;
  responsive: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  conversion: {
    primary: string;
    secondary: string;
  };
  seo: {
    h1: string;
    h2: string[];
    faqSchema: string;
    internalLinks: string;
  };
  sections: WireframeSectionData[];
};

export const wireframePages: WireframePageData[] = [
  {
    id: "homepage",
    eyebrow: "Homepage",
    title: "Homepage Wireframe",
    purpose: "Move visitors from first-screen clarity to proof, process confidence, and consultation intent.",
    responsive: {
      desktop: "Editorial hero with supporting visual column; services, proof, and process can use multi-column grids.",
      tablet: "Hero and proof areas collapse to two-column or stacked modules with section rhythm preserved.",
      mobile: "Single-column story: clarity, trust, services, proof, process, fit, CTA. Sticky nav remains horizontally scrollable.",
    },
    conversion: {
      primary: "Book a Consultation",
      secondary: "Explore Services / View Work",
    },
    seo: {
      h1: "Homepage hero only.",
      h2: ["Problem / Transformation", "Services Overview", "Proof / Featured Work", "Process", "Why NEXORA ORBIT", "Insights", "Final CTA"],
      faqSchema: "Not required on homepage unless a visible FAQ block is added later.",
      internalLinks: "Link to services, work, process/about, contact, and insights.",
    },
    sections: [
      {
        title: "Hero",
        purpose: "Explain what NEXORA ORBIT does before any cinematic layer asks for attention.",
        hierarchy: [
          { label: "Outcome-led headline" },
          { label: "Concise engineering-first subcopy" },
          { label: "Primary consultation CTA + secondary services/work CTA" },
          { label: "Future visual placeholder for system / product / 3D environment" },
        ],
        cta: "Primary CTA below message; secondary CTA adjacent.",
        notes: "Keep content readable before motion or visuals. No final 3D in this phase.",
        variant: "hero",
      },
      {
        title: "Trust Bar / Capability Snapshot",
        purpose: "Clarify breadth without fake logos, fake metrics, or inflated proof.",
        hierarchy: [
          { label: "Capability groups: Software, AI, Cloud, Web, Mobile, Brand, Growth" },
          { label: "Operational trust notes: strategy, engineering, launch, optimization" },
        ],
        cta: "No primary CTA; link to services may appear after scan.",
        notes: "Use transparent capability labels, not invented social proof.",
        variant: "grid",
      },
      {
        title: "Problem / Transformation Statement",
        purpose: "Name the buyer problem and frame the transformation from scattered digital work to coherent systems.",
        hierarchy: [
          { label: "Problem statement" },
          { label: "Transformation promise" },
          { label: "Three friction points and their system response" },
        ],
        cta: "Inline link to process or consultation.",
        notes: "Clarity before persuasion.",
        variant: "split",
      },
      {
        title: "Services Overview",
        purpose: "Help buyers self-select the right path quickly.",
        hierarchy: [
          { label: "Build: software, web, mobile" },
          { label: "Intelligence: AI, automation, data systems" },
          { label: "Scale: cloud, platforms, infrastructure" },
          { label: "Grow: branding, digital marketing, optimization" },
        ],
        cta: "Explore services after category scan.",
        notes: "Organize by buyer intent, not internal departments.",
        variant: "grid",
      },
      {
        title: "Proof / Featured Work",
        purpose: "Introduce proof architecture without inventing results.",
        hierarchy: [
          { label: "Featured work placeholder" },
          { label: "Context, decisions, execution, outcome slots" },
          { label: "Case study CTA" },
        ],
        cta: "View work / read case study.",
        notes: "Use placeholders until approved case studies exist.",
        variant: "gallery",
      },
      {
        title: "Process",
        purpose: "Reduce uncertainty about how engagement works.",
        hierarchy: [
          { label: "Discover" },
          { label: "Architect" },
          { label: "Build" },
          { label: "Launch" },
          { label: "Optimize" },
        ],
        cta: "See process or start consultation.",
        notes: "Process should feel rigorous but not heavy.",
        variant: "grid",
      },
      {
        title: "Why NEXORA ORBIT",
        purpose: "Explain differentiation through operating principles, not slogans.",
        hierarchy: [
          { label: "Engineering discipline" },
          { label: "Brand and product thinking" },
          { label: "Scalable technical decisions" },
          { label: "Clear communication" },
        ],
        cta: "Optional About link.",
        notes: "Trust before persuasion.",
        variant: "grid",
      },
      {
        title: "Client Fit / Engagement Types",
        purpose: "Qualify ideal project contexts and reduce poor-fit leads.",
        hierarchy: [
          { label: "Startup build" },
          { label: "SME transformation" },
          { label: "Enterprise modernization" },
          { label: "Brand and growth system" },
        ],
        cta: "Find the right engagement path.",
        notes: "Make consultation feel strategic, not sales-heavy.",
        variant: "grid",
      },
      {
        title: "Insights Preview",
        purpose: "Support authority and longer research cycles.",
        hierarchy: [
          { label: "Featured article placeholder" },
          { label: "Buyer questions / technical explainers" },
          { label: "Links to related services" },
        ],
        cta: "Read insights.",
        notes: "Articles should clarify buyer questions.",
        variant: "grid",
      },
      {
        title: "Final CTA",
        purpose: "Convert trust into a low-friction consultation request.",
        hierarchy: [
          { label: "Consultation promise" },
          { label: "Project context prompt" },
          { label: "Primary CTA" },
        ],
        cta: "Book a consultation / start a project enquiry.",
        notes: "Consultation language stays premium and low pressure.",
        variant: "cta",
      },
      {
        title: "Footer",
        purpose: "Provide secondary navigation and final trust layer.",
        hierarchy: [
          { label: "Services" },
          { label: "Work and case studies" },
          { label: "Company" },
          { label: "Insights" },
          { label: "Contact and legal" },
        ],
        cta: "Footer consultation link.",
        notes: "Footer supports exploration without visual noise.",
        variant: "standard",
      },
    ],
  },
  {
    id: "services",
    eyebrow: "Services",
    title: "Services Landing Wireframe",
    purpose: "Organize solution discovery around buyer intent and capability groups.",
    responsive: {
      desktop: "Four intent groups can sit in a structured grid with service cards below.",
      tablet: "Intent groups reduce to two columns; service cards remain scannable.",
      mobile: "Intent groups and cards stack with direct labels and repeated consultation access.",
    },
    conversion: {
      primary: "Discuss a Project",
      secondary: "View Related Work",
    },
    seo: {
      h1: "Services landing hero.",
      h2: ["Service Category Groups", "Build / Intelligence / Scale / Grow", "Service Cards", "Process Preview", "CTA"],
      faqSchema: "Optional if a visible services FAQ is added later.",
      internalLinks: "Link to all service detail pages, work, process/about, and contact.",
    },
    sections: [
      {
        title: "Services Hero",
        purpose: "Frame the service ecosystem as integrated digital systems.",
        hierarchy: [{ label: "Service ecosystem headline" }, { label: "Outcome-led intro" }, { label: "Consultation CTA" }],
        cta: "Discuss your system needs.",
        notes: "Avoid a generic service directory feel.",
        variant: "hero",
      },
      {
        title: "Service Category Groups",
        purpose: "Reduce navigation uncertainty by grouping services by intent.",
        hierarchy: [{ label: "Build" }, { label: "Intelligence" }, { label: "Scale" }, { label: "Grow" }],
        cta: "Category jump links.",
        notes: "This should map to the eventual services navigation model.",
        variant: "grid",
      },
      {
        title: "Build / Intelligence / Scale / Grow",
        purpose: "Explain how groups connect into one operating system.",
        hierarchy: [{ label: "Group overview" }, { label: "Business context" }, { label: "Service path list" }],
        cta: "View relevant detail page.",
        notes: "Progressive disclosure for technical depth.",
        variant: "split",
      },
      {
        title: "Service Cards",
        purpose: "Let buyers compare services without cognitive overload.",
        hierarchy: [{ label: "Software Engineering" }, { label: "Mobile Apps" }, { label: "Web Development" }, { label: "AI Solutions" }, { label: "Cloud Engineering" }, { label: "Branding" }, { label: "Digital Marketing" }],
        cta: "Service card links.",
        notes: "Cards remain reusable, not final marketing cards.",
        variant: "grid",
      },
      {
        title: "Process Preview",
        purpose: "Show how service engagements move from strategy to launch.",
        hierarchy: [{ label: "Discovery" }, { label: "Architecture" }, { label: "Build" }, { label: "Launch" }],
        cta: "See process / start consultation.",
        notes: "Connect process to buyer confidence.",
        variant: "grid",
      },
      {
        title: "CTA",
        purpose: "Invite strategic consultation after service clarity.",
        hierarchy: [{ label: "Fit statement" }, { label: "Project prompt" }, { label: "Consultation CTA" }],
        cta: "Book a consultation.",
        notes: "No hard selling.",
        variant: "cta",
      },
    ],
  },
  {
    id: "service-detail",
    eyebrow: "Service Template",
    title: "Service Detail Wireframe",
    purpose: "Reusable page structure for every major service page.",
    responsive: {
      desktop: "Hero, problem context, methods, and related work can use split layouts with dense capability grids.",
      tablet: "Split layouts collapse to stacked pairs; capability modules remain grouped.",
      mobile: "Single-column sequence prioritizes problem, outcomes, capabilities, process, FAQ, and CTA.",
    },
    conversion: {
      primary: "Discuss a Project",
      secondary: "View Related Work",
    },
    seo: {
      h1: "Service-specific hero only.",
      h2: ["Problem Context", "Outcomes", "Capabilities", "Process", "Related Work", "Technology / Methods", "Who It Is For", "FAQ", "CTA"],
      faqSchema: "FAQ section is the schema-ready area for service pages.",
      internalLinks: "Link to related services, relevant case studies, FAQ, contact, and supporting insights.",
    },
    sections: [
      { title: "Service Hero", purpose: "Name the service, audience, and business outcome.", hierarchy: [{ label: "H1 with service outcome" }, { label: "Buyer-fit intro" }, { label: "Primary CTA" }], cta: "Discuss this service.", notes: "Template must support all service types.", variant: "hero" },
      { title: "Problem Context", purpose: "Show the problem this service solves.", hierarchy: [{ label: "Pain points" }, { label: "Operational impact" }], cta: "Optional context link.", notes: "Avoid generic claims.", variant: "split" },
      { title: "Outcomes", purpose: "Clarify measurable or observable business value.", hierarchy: [{ label: "Outcome list" }, { label: "Buyer confidence cues" }], cta: "No CTA needed.", notes: "Use outcome slots, not fake metrics.", variant: "grid" },
      { title: "Capabilities", purpose: "Show technical breadth with progressive disclosure.", hierarchy: [{ label: "Capability modules" }, { label: "Method notes" }], cta: "Link to related services.", notes: "Technical depth should not overwhelm.", variant: "grid" },
      { title: "Process", purpose: "Explain delivery steps for this service.", hierarchy: [{ label: "Discover" }, { label: "Architect" }, { label: "Build" }, { label: "Validate" }], cta: "Start service enquiry.", notes: "Make collaboration legible.", variant: "grid" },
      { title: "Related Work", purpose: "Connect service promise to proof.", hierarchy: [{ label: "Case study slots" }, { label: "Decision / execution / outcome metadata" }], cta: "View related work.", notes: "Use placeholders until approved work exists.", variant: "gallery" },
      { title: "Technology / Methods", purpose: "Support technical credibility.", hierarchy: [{ label: "Tools / platforms placeholder" }, { label: "Architecture methods" }], cta: "No primary CTA.", notes: "No logo wall until approved.", variant: "grid" },
      { title: "Who It Is For", purpose: "Qualify leads and set expectations.", hierarchy: [{ label: "Founder / SME / enterprise fit" }, { label: "When this is not the right path" }], cta: "Check fit.", notes: "Trust through honesty.", variant: "split" },
      { title: "FAQ", purpose: "Handle objections and SEO questions.", hierarchy: [{ label: "Scope" }, { label: "Timeline" }, { label: "Ownership" }, { label: "Integration" }], cta: "Contact if ready.", notes: "FAQ should be schema-ready later.", variant: "standard" },
      { title: "CTA", purpose: "Move qualified visitors into consultation.", hierarchy: [{ label: "Context-aware CTA" }, { label: "Project prompt" }], cta: "Book service consultation.", notes: "Keep premium and specific.", variant: "cta" },
    ],
  },
  {
    id: "work",
    eyebrow: "Work",
    title: "Work / Portfolio Wireframe",
    purpose: "Help visitors evaluate capability quickly through transparent proof structure.",
    responsive: {
      desktop: "Featured proof can lead with a larger case study area and gallery grid.",
      tablet: "Featured cases and gallery use two-column cards.",
      mobile: "Filters become horizontally scrollable chips; project cards stack cleanly.",
    },
    conversion: {
      primary: "View Case Study",
      secondary: "Book a Consultation",
    },
    seo: {
      h1: "Work / portfolio hero.",
      h2: ["Featured Case Studies", "Filters", "Project Gallery", "Portfolio CTA"],
      faqSchema: "Not required unless a visible work FAQ is added.",
      internalLinks: "Link to case studies, services used, about/company trust, and contact.",
    },
    sections: [
      { title: "Work Hero", purpose: "Frame proof through context and decisions.", hierarchy: [{ label: "Work positioning" }, { label: "Proof explanation" }], cta: "View case studies.", notes: "No fake client claims.", variant: "hero" },
      { title: "Featured Case Studies", purpose: "Surface highest-value proof slots.", hierarchy: [{ label: "Featured case placeholders" }, { label: "Industry / service tags" }], cta: "Read case study.", notes: "Use empty/provisional states until approved.", variant: "gallery" },
      { title: "Filters", purpose: "Allow scanning by service, industry, and project type.", hierarchy: [{ label: "Service filter" }, { label: "Industry filter" }, { label: "Platform filter" }], cta: "Filter chips.", notes: "Keyboard-friendly chips later.", variant: "standard" },
      { title: "Project Gallery", purpose: "List project previews without overclaiming.", hierarchy: [{ label: "Project cards" }, { label: "Context / scope / services" }], cta: "Open project.", notes: "No fake logos.", variant: "grid" },
      { title: "Portfolio CTA", purpose: "Convert proof interest into consultation.", hierarchy: [{ label: "Related capability prompt" }, { label: "CTA" }], cta: "Discuss similar work.", notes: "Proof before claims.", variant: "cta" },
    ],
  },
  {
    id: "case-study",
    eyebrow: "Case Study",
    title: "Case Study Wireframe",
    purpose: "Show thinking, execution, and outcomes in a transparent proof narrative.",
    responsive: {
      desktop: "Narrative sections can alternate split layouts and proof modules.",
      tablet: "Context and solution sections stack while preserving reading order.",
      mobile: "Story reads linearly: context, challenge, objectives, strategy, solution, execution, results, CTA.",
    },
    conversion: {
      primary: "View Case Study",
      secondary: "Book a Consultation",
    },
    seo: {
      h1: "Case study hero with project/result framing.",
      h2: ["Client / Context", "Challenge", "Objectives", "Strategy", "Solution", "Execution", "Results", "Technology / Services Used", "Lessons", "Related Work", "CTA"],
      faqSchema: "Usually not required; use Article or CreativeWork metadata later.",
      internalLinks: "Link to services used, related case studies, insights, and contact.",
    },
    sections: [
      { title: "Case Study Hero", purpose: "Set project context and transformation theme.", hierarchy: [{ label: "Project title placeholder" }, { label: "Business context" }, { label: "Service tags" }], cta: "Discuss a similar system.", notes: "No invented client data.", variant: "hero" },
      { title: "Client / Context", purpose: "Explain who the work served without revealing unapproved identity.", hierarchy: [{ label: "Client type" }, { label: "Market context" }], cta: "No CTA.", notes: "Respect confidentiality.", variant: "split" },
      { title: "Challenge", purpose: "Clarify the operational or product problem.", hierarchy: [{ label: "Challenge summary" }, { label: "Constraints" }], cta: "No CTA.", notes: "Specific but not final copy.", variant: "standard" },
      { title: "Objectives", purpose: "Define what success needed to mean.", hierarchy: [{ label: "Objective list" }, { label: "Decision criteria" }], cta: "No CTA.", notes: "Avoid fake metrics.", variant: "grid" },
      { title: "Strategy", purpose: "Show senior thinking before production work.", hierarchy: [{ label: "Strategic approach" }, { label: "Architecture decisions" }], cta: "No CTA.", notes: "Trust through reasoning.", variant: "split" },
      { title: "Solution", purpose: "Explain the system created.", hierarchy: [{ label: "Solution modules" }, { label: "Future visual placeholder" }], cta: "No CTA.", notes: "Placeholder for future interface/3D visuals.", variant: "gallery" },
      { title: "Execution", purpose: "Show delivery stages and collaboration.", hierarchy: [{ label: "Implementation timeline" }, { label: "Validation steps" }], cta: "No CTA.", notes: "Make process credible.", variant: "grid" },
      { title: "Results", purpose: "Reserve outcome area for approved proof.", hierarchy: [{ label: "Result slots" }, { label: "Qualitative outcome notes" }], cta: "View related service.", notes: "No fake metrics.", variant: "grid" },
      { title: "Technology / Services Used", purpose: "Connect case study to service taxonomy.", hierarchy: [{ label: "Service tags" }, { label: "Methods / platforms" }], cta: "Explore service.", notes: "No unapproved logo wall.", variant: "standard" },
      { title: "Lessons / What Made It Work", purpose: "Extract reusable thinking and authority.", hierarchy: [{ label: "Key decisions" }, { label: "Principles" }], cta: "No CTA.", notes: "Supports insights and sales enablement.", variant: "split" },
      { title: "Related Work", purpose: "Keep proof journey moving.", hierarchy: [{ label: "Related case placeholders" }], cta: "View more work.", notes: "Related links should clarify, prove, or convert.", variant: "gallery" },
      { title: "CTA", purpose: "Convert proof confidence into consultation.", hierarchy: [{ label: "Need a similar system?" }, { label: "CTA" }], cta: "Start a project conversation.", notes: "Low-pressure consultation.", variant: "cta" },
    ],
  },
  {
    id: "about",
    eyebrow: "Company",
    title: "About Wireframe",
    purpose: "Build institutional trust and clarify operating beliefs.",
    responsive: {
      desktop: "Mission, beliefs, and principles can alternate split and grid layouts.",
      tablet: "Capability and principle grids reduce to two columns.",
      mobile: "Company story stacks with trust-building order and clear CTA near the end.",
    },
    conversion: {
      primary: "Book a Consultation",
      secondary: "Explore Services / View Work",
    },
    seo: {
      h1: "About hero.",
      h2: ["Mission", "What NEXORA ORBIT Believes", "Capabilities", "Operating Principles", "Process Preview", "Global Client Readiness", "Team Placeholder", "CTA"],
      faqSchema: "Not required unless a visible company FAQ is added.",
      internalLinks: "Link to services, process, work, careers, and contact.",
    },
    sections: [
      { title: "About Hero", purpose: "Position NEXORA ORBIT as a premium technology transformation partner.", hierarchy: [{ label: "Company positioning" }, { label: "Trust intro" }], cta: "See services / contact.", notes: "Not a personality-heavy agency story.", variant: "hero" },
      { title: "Mission", purpose: "State why the company exists.", hierarchy: [{ label: "Mission statement" }, { label: "Value explanation" }], cta: "No CTA.", notes: "Concise and strategic.", variant: "split" },
      { title: "What NEXORA ORBIT Believes", purpose: "Express standards and operating philosophy.", hierarchy: [{ label: "Engineering excellence" }, { label: "Minimalism" }, { label: "Trust" }, { label: "Scalability" }], cta: "No CTA.", notes: "Beliefs should map to behavior.", variant: "grid" },
      { title: "Capabilities", purpose: "Reinforce integrated capabilities.", hierarchy: [{ label: "Engineering" }, { label: "AI" }, { label: "Cloud" }, { label: "Brand / Growth" }], cta: "Explore services.", notes: "Capability overview, not sales cards.", variant: "grid" },
      { title: "Operating Principles", purpose: "Show how the team makes decisions.", hierarchy: [{ label: "Clarity" }, { label: "Maintainability" }, { label: "Performance" }, { label: "Business fit" }], cta: "No CTA.", notes: "Trust layer.", variant: "grid" },
      { title: "Process Preview", purpose: "Connect company trust to delivery model.", hierarchy: [{ label: "Discover" }, { label: "Architect" }, { label: "Build" }, { label: "Optimize" }], cta: "See process.", notes: "No final process animation.", variant: "grid" },
      { title: "Global Client Readiness", purpose: "Address remote, enterprise, and cross-market confidence.", hierarchy: [{ label: "Communication" }, { label: "Documentation" }, { label: "Timezone readiness" }], cta: "Contact.", notes: "Support enterprise journey.", variant: "split" },
      { title: "Team Placeholder", purpose: "Reserve team/institutional credibility area.", hierarchy: [{ label: "Leadership / team slots" }, { label: "Hiring or culture link" }], cta: "Careers optional.", notes: "No fake team data.", variant: "gallery" },
      { title: "CTA", purpose: "Convert company trust into next step.", hierarchy: [{ label: "Work with a strategic technology partner" }], cta: "Book a consultation.", notes: "Consultation before hard selling.", variant: "cta" },
    ],
  },
  {
    id: "contact",
    eyebrow: "Contact",
    title: "Contact Wireframe",
    purpose: "Make contacting NEXORA ORBIT feel professional, safe, and worthwhile.",
    responsive: {
      desktop: "Form and expectation panels can sit side by side with qualification paths below.",
      tablet: "Form remains prominent; direct contact and next steps stack below.",
      mobile: "Form fields stack, touch targets stay large, and direct email remains easy to find.",
    },
    conversion: {
      primary: "Submit Project Enquiry",
      secondary: "Direct Email",
    },
    seo: {
      h1: "Contact hero.",
      h2: ["Consultation Promise", "Project Enquiry Form", "Direct Contact Options", "What Happens Next", "FAQ / Objection Handling", "Optional Qualification Paths"],
      faqSchema: "FAQ / Objection Handling is the schema-ready area.",
      internalLinks: "Link back to services, work, about/process, and privacy if needed.",
    },
    sections: [
      { title: "Contact Hero", purpose: "Set expectations and lower friction.", hierarchy: [{ label: "Strategic consultation headline" }, { label: "What to include" }], cta: "Start enquiry.", notes: "Professional, calm, no pressure.", variant: "hero" },
      { title: "Consultation Promise", purpose: "Explain what happens after contact.", hierarchy: [{ label: "Response expectation" }, { label: "Review process" }, { label: "Fit assessment" }], cta: "No CTA.", notes: "Reduce form anxiety.", variant: "grid" },
      { title: "Project Enquiry Form", purpose: "Capture enough context to qualify the project.", hierarchy: [{ label: "Name / email / company" }, { label: "Service interest" }, { label: "Project context" }, { label: "Budget/timeline optional" }], cta: "Submit project context.", notes: "Form backend later.", variant: "form" },
      { title: "Direct Contact Options", purpose: "Offer alternate paths without visual clutter.", hierarchy: [{ label: "Email placeholder" }, { label: "Region availability" }, { label: "Social links placeholder" }], cta: "Email link later.", notes: "No fake contact data.", variant: "standard" },
      { title: "What Happens Next", purpose: "Explain the consultation flow.", hierarchy: [{ label: "Review" }, { label: "Clarify" }, { label: "Recommend next step" }], cta: "No CTA.", notes: "Trust before persuasion.", variant: "grid" },
      { title: "FAQ / Objection Handling", purpose: "Answer common decision concerns.", hierarchy: [{ label: "Scope" }, { label: "Timelines" }, { label: "Ownership" }, { label: "Confidentiality" }], cta: "No CTA.", notes: "FAQ supports conversion.", variant: "standard" },
      { title: "Optional Qualification Paths", purpose: "Let users self-route by intent.", hierarchy: [{ label: "Build something new" }, { label: "Modernize existing system" }, { label: "Explore AI" }, { label: "Improve growth system" }], cta: "Choose path.", notes: "Future progressive form step.", variant: "grid" },
    ],
  },
  {
    id: "insights",
    eyebrow: "Insights",
    title: "Insights / Blog Wireframe",
    purpose: "Build authority, capture search demand, and support longer buying cycles.",
    responsive: {
      desktop: "Featured article can pair with category filters and a multi-column article grid.",
      tablet: "Article grid reduces to two columns with filters above.",
      mobile: "Filters become scrollable chips; featured article and article grid stack.",
    },
    conversion: {
      primary: "Read Article",
      secondary: "Explore Related Services",
    },
    seo: {
      h1: "Insights landing hero.",
      h2: ["Category Filters", "Featured Article", "Article Grid", "Related Services CTA", "Newsletter / Future CTA Placeholder"],
      faqSchema: "Not required on listing page; article pages may include FAQ where visible.",
      internalLinks: "Link articles to related services, case studies, and high-intent contact CTAs.",
    },
    sections: [
      { title: "Insights Hero", purpose: "Frame content as useful technical and business guidance.", hierarchy: [{ label: "Authority headline" }, { label: "Content promise" }], cta: "Browse categories.", notes: "Not thought leadership for its own sake.", variant: "hero" },
      { title: "Category Filters", purpose: "Help research-heavy buyers find relevant material.", hierarchy: [{ label: "AI" }, { label: "Software" }, { label: "Cloud" }, { label: "Growth" }, { label: "Brand" }], cta: "Filter chips.", notes: "Keyboard-friendly and direct labels.", variant: "standard" },
      { title: "Featured Article", purpose: "Lead with one high-value buyer question.", hierarchy: [{ label: "Featured article placeholder" }, { label: "Related service link" }], cta: "Read article.", notes: "No fake article claims.", variant: "split" },
      { title: "Article Grid", purpose: "Show scalable content architecture.", hierarchy: [{ label: "Article cards" }, { label: "Category / reading intent" }], cta: "Open article.", notes: "Cards should link to service clusters.", variant: "grid" },
      { title: "Related Services CTA", purpose: "Bridge research into service discovery.", hierarchy: [{ label: "Problem-specific service links" }], cta: "Explore related services.", notes: "Internal links clarify, prove, or convert.", variant: "cta" },
      { title: "Newsletter / Future CTA Placeholder", purpose: "Reserve future authority capture path.", hierarchy: [{ label: "Newsletter placeholder" }, { label: "Consent and privacy note later" }], cta: "Future signup.", notes: "Do not wire newsletter backend yet.", variant: "form" },
    ],
  },
];
