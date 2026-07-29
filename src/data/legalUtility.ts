import { siteConfig } from "@/lib/site-config";

export type LegalSection = {
  title: string;
  body: string[];
};

export const privacySections: LegalSection[] = [
  {
    title: "Information We Collect",
    body: [
      "NEXORA ORBIT may receive information that visitors choose to submit through enquiry forms, project forms, email links, or direct communication.",
      "This may include name, email address, company context, project requirements, budget range, timeline, and any message details shared voluntarily.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "Submitted information may be used to respond to enquiries, understand project context, prepare relevant next-step questions, and improve the clarity of the website experience.",
      "NEXORA ORBIT does not use placeholder website enquiries as a substitute for a signed project agreement or formal client onboarding process.",
    ],
  },
  {
    title: "Contact Forms and Enquiries",
    body: [
      "Contact and enquiry forms are intended to help NEXORA ORBIT understand whether a project conversation is relevant.",
      "Submitting a form does not create a client relationship, service agreement, confidentiality obligation, or delivery commitment unless confirmed separately in writing.",
    ],
  },
  {
    title: "Analytics and Cookies Placeholder",
    body: [
      "Analytics, cookie, and tracking details should be confirmed before launch based on the tools that are actually implemented.",
      "This section is a placeholder for final cookie categories, consent behavior, analytics providers, retention settings, and opt-out instructions.",
    ],
  },
  {
    title: "Data Sharing",
    body: [
      "NEXORA ORBIT should only describe data sharing practices that reflect approved operational workflows and actual third-party tools.",
      "Final wording should identify any service providers, processors, or operational partners once the production stack is confirmed.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "Enquiry information should be retained only for as long as it is useful for review, response, project qualification, or business records, subject to final legal guidance.",
      "Retention periods should be reviewed and confirmed before public launch.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "Depending on location and applicable law, visitors may have rights to request access, correction, deletion, or limitation of certain personal information.",
      "Final rights language should be reviewed by a qualified legal professional for the jurisdictions where NEXORA ORBIT operates or serves clients.",
    ],
  },
  {
    title: "Contact",
    body: [
      `Privacy-related questions can be sent to ${siteConfig.email}.`,
      "Final legal contact routing should be confirmed before launch if a dedicated privacy inbox, legal representative, or data protection contact is required.",
    ],
  },
  {
    title: "Legal Review Notice",
    body: [
      "This policy should be reviewed by a qualified legal professional before final publication.",
      "This page is provided as implementation-ready website structure and placeholder-safe copy, not as legal advice.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    title: "Website Use",
    body: [
      "The NEXORA ORBIT website provides general information about services, capabilities, process, and project enquiry paths.",
      "Website content may be updated as services, positioning, policies, and operational practices evolve.",
    ],
  },
  {
    title: "Service Information",
    body: [
      "Service descriptions are informational and do not guarantee a specific deliverable, timeline, price, result, or engagement model.",
      "Any project scope, responsibilities, fees, timelines, ownership terms, and delivery expectations should be confirmed separately in a written agreement.",
    ],
  },
  {
    title: "Project Discussions",
    body: [
      "Submitting an enquiry or joining an initial project discussion does not create a formal client relationship or delivery obligation.",
      "NEXORA ORBIT may review project context before deciding whether a consultation, proposal, or next-step discussion is appropriate.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "Website text, visual systems, interface patterns, and brand materials should be treated as NEXORA ORBIT content unless otherwise stated.",
      "Final intellectual property language should be aligned with the project agreement templates and brand usage rules approved for public use.",
    ],
  },
  {
    title: "Third-Party Links",
    body: [
      "The website may include links to third-party websites, tools, platforms, or resources for convenience or context.",
      "NEXORA ORBIT should not be represented as controlling third-party websites or their policies unless a verified relationship exists.",
    ],
  },
  {
    title: "Limitation Placeholder",
    body: [
      "Any limitation of liability, warranty disclaimer, jurisdiction, or dispute resolution wording must be prepared or reviewed by a qualified legal professional.",
      "No fake jurisdiction, registration, certification, or compliance claims should be added before legal review.",
    ],
  },
  {
    title: "Changes to Terms",
    body: [
      "These website terms may be updated as the NEXORA ORBIT website, service model, or operational practices change.",
      "Final publication should include the approved approach for effective dates, update notices, and version handling if required.",
    ],
  },
  {
    title: "Contact",
    body: [
      `Questions about website terms can be sent to ${siteConfig.email}.`,
      "Legal contact details should be finalized before launch if a dedicated legal routing process is required.",
    ],
  },
  {
    title: "Legal Review Notice",
    body: [
      "These terms should be reviewed by a qualified legal professional before final publication.",
      "This page is provided as implementation-ready website structure and placeholder-safe copy, not as legal advice.",
    ],
  },
];

export const thankYouNextSteps = [
  "Review the submitted project context for fit, urgency, constraints, and required expertise.",
  "Respond with relevant questions, next-step options, or a recommendation if the enquiry is aligned.",
  "Confirm scope, timeline, budget, responsibilities, and decision process before any formal project begins.",
];

export const thankYouLinks = [
  { href: "/services", label: "Explore Services" },
  { href: "/company/process", label: "See Our Process" },
  { href: "/work", label: "View Work" },
  { href: "/", label: "Back Home" },
];
