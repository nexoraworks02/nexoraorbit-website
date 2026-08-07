import { siteConfig } from "@/lib/site-config";

export type LegalSection = {
  title: string;
  body: string[];
};

export const legalLastUpdated = "August 8, 2026";

export const privacySections: LegalSection[] = [
  {
    title: "Overview",
    body: [
      `This Privacy Policy explains how ${siteConfig.name} ("we," "us," or "our") collects, uses, shares, and protects information in connection with ${siteConfig.domain} (the "Website").`,
      "This policy applies to information collected through the Website's contact and project enquiry forms, and through the Website's analytics. It does not apply to information exchanged separately once a project engagement begins under a written agreement — that information is governed by the terms of that agreement.",
    ],
  },
  {
    title: "Information We Collect",
    body: [
      "Information you provide directly: when you submit the project enquiry form, we collect your name, email address, and message, along with any optional details you choose to share — company name, current website, region, service area, project stage, budget range, and timeline.",
      "Information collected automatically: when you browse the Website, our analytics provider collects aggregated, non-identifying usage data such as which pages are visited, referring sources, device and browser type, and approximate geographic region (typically at the country or city level, not a precise location).",
      "We do not knowingly collect sensitive categories of personal information (such as health, financial account, or government ID data) through the Website, and we ask that you not include such information in enquiry messages.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "Enquiry information is used to respond to your message, understand your project context, ask relevant follow-up questions, and determine whether a consultation or proposal is appropriate.",
      "Analytics information is used in aggregate to understand how visitors use the Website, which pages are effective, and where to improve site structure, content, or performance. It is not used to build individual visitor profiles.",
      "We do not sell personal information, and we do not use enquiry information for unrelated marketing without your separate consent.",
    ],
  },
  {
    title: "Cookies and Analytics",
    body: [
      "The Website uses Vercel Web Analytics, a privacy-focused analytics service. As implemented on this site, it does not set persistent tracking cookies or build cross-site visitor profiles — it reports aggregated, anonymized usage statistics such as page views and traffic sources.",
      "If additional analytics, advertising, or marketing tools are added in the future that do use cookies or similar tracking technology, this section will be updated to describe them, along with any consent mechanism required for your region.",
      "Your browser lets you block or delete cookies through its settings. Doing so will not affect your ability to use the Website's core content or submit an enquiry.",
    ],
  },
  {
    title: "Third-Party Services We Use",
    body: [
      "We rely on a small number of third-party service providers to operate the Website and respond to enquiries, each acting as a data processor on our behalf:",
      "Vercel — hosts the Website and provides the Web Analytics referenced above.",
      "Resend — delivers enquiry-form submissions to our inbox by email. The content of your enquiry form submission (name, email, message, and any optional fields you complete) is transmitted through Resend to deliver that email.",
      "These providers process information only as needed to provide their service to us, and are themselves bound by their own privacy and security practices.",
    ],
  },
  {
    title: "How We Share Information",
    body: [
      "We do not sell, rent, or trade personal information to third parties for their own marketing purposes.",
      "We share information only with the service providers described above (to operate the Website and deliver enquiries), when required by law or a valid legal process, or with your explicit consent.",
      "If NEXORA ORBIT were ever involved in a merger, acquisition, or sale of business assets, enquiry information could be transferred as part of that transaction, subject to the same protections described in this policy.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "Enquiry information is retained for as long as reasonably necessary to respond to your enquiry, maintain business records of prospective client communications, and comply with any applicable legal or accounting obligations — typically no longer than a few years from your last contact with us, unless a project engagement begins, in which case retention is governed by the applicable project agreement.",
      "Aggregated analytics data, since it does not identify individual visitors, may be retained indefinitely for historical comparison of Website performance.",
      "You may request earlier deletion of your enquiry information at any time using the contact details below.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We use reasonable technical and organizational measures to protect information submitted through the Website, including transmitting form submissions over encrypted (HTTPS) connections and relying on infrastructure providers with their own security practices.",
      "No method of transmission or storage is completely secure. While we work to protect your information, we cannot guarantee absolute security, and you submit information through the Website at your own risk.",
    ],
  },
  {
    title: "International Data Transfers",
    body: [
      "Our hosting and service providers may process and store information on servers located outside your country of residence. By submitting information through the Website, you understand that it may be transferred to and processed in other countries, which may have data protection laws different from those in your jurisdiction.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "The Website is intended for business audiences and is not directed at children. We do not knowingly collect personal information from anyone under the age of 16. If you believe a child has provided us with personal information, please contact us so we can delete it.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "Depending on your location, you may have rights to access, correct, delete, or receive a copy of the personal information we hold about you, to object to or restrict certain processing, and to withdraw consent where processing is based on consent.",
      "Residents of the European Economic Area, the United Kingdom, and jurisdictions with similar data protection frameworks may have rights under laws such as the GDPR. Residents of certain U.S. states may have similar rights under applicable state privacy laws.",
      "To exercise any of these rights, contact us using the details below. We will respond within a reasonable timeframe and consistent with applicable law.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy as the Website, our tools, or applicable law change. Material changes will be reflected by updating the date below. Continued use of the Website after changes are posted constitutes acceptance of the updated policy.",
      `Last updated: ${legalLastUpdated}.`,
    ],
  },
  {
    title: "Contact",
    body: [
      `Questions about this Privacy Policy, or requests to access, correct, or delete your information, can be sent to ${siteConfig.email}.`,
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    title: "Acceptance of Terms",
    body: [
      `By accessing or using ${siteConfig.domain} (the "Website"), you agree to these Terms of Use. If you do not agree, please do not use the Website.`,
      `These terms are provided by ${siteConfig.name} ("we," "us," or "our") and apply to your use of the Website only — not to any separate written agreement covering an actual project engagement, which will govern in the event of a conflict with these terms.`,
    ],
  },
  {
    title: "Changes to the Website and These Terms",
    body: [
      "We may update the Website's content, structure, and these terms at any time as our services, positioning, and operational practices evolve. Material changes to these terms will be reflected by updating the date at the bottom of this page. Continued use of the Website after changes are posted constitutes acceptance of the updated terms.",
    ],
  },
  {
    title: "Use of the Website",
    body: [
      "The Website provides general information about our services, capabilities, process, and a way to submit a project enquiry. You agree to use the Website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use of it.",
      "You agree not to attempt to gain unauthorized access to the Website, its underlying systems, or any related infrastructure, and not to use automated means to scrape or extract content beyond normal browsing.",
    ],
  },
  {
    title: "Service Descriptions",
    body: [
      "Descriptions of services on the Website are informational and do not constitute an offer, guarantee, or commitment regarding a specific deliverable, timeline, price, or outcome.",
      "Any actual project's scope, responsibilities, fees, timeline, ownership terms, and delivery expectations will be defined separately in a written project agreement, which will take precedence over general descriptions on the Website.",
    ],
  },
  {
    title: "Enquiries and Project Discussions",
    body: [
      "Submitting the project enquiry form, or otherwise contacting us, does not create a client relationship, service agreement, confidentiality obligation, or delivery commitment.",
      "We review submitted enquiries to determine whether a consultation or next-step discussion is appropriate, and we are not obligated to respond to or accept every enquiry.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      `Unless otherwise stated, all Website content — including text, graphics, logos, the "NEXORA ORBIT" name and mark, interface design, and underlying code — is owned by ${siteConfig.name} or its licensors and is protected by applicable intellectual property laws.`,
      "You may view and share Website pages for personal, non-commercial reference. You may not reproduce, modify, distribute, or create derivative works from Website content for commercial purposes without our prior written permission.",
      "Intellectual property ownership for work delivered under an actual project engagement is governed separately by that project's written agreement.",
    ],
  },
  {
    title: "User Submissions",
    body: [
      "By submitting information through the project enquiry form or other Website communication channels, you confirm that the information is accurate and that you have the right to share it with us.",
      "Do not submit confidential, proprietary, or sensitive information through the enquiry form before a confidentiality agreement is in place. Submitting an enquiry does not establish a confidentiality obligation on our part.",
    ],
  },
  {
    title: "Third-Party Links and Services",
    body: [
      "The Website may link to third-party websites, tools, or resources for convenience or context, and relies on third-party infrastructure providers (described in our Privacy Policy) to operate.",
      "We do not control and are not responsible for the content, accuracy, or practices of third-party websites. Linking to a third-party site does not imply endorsement.",
    ],
  },
  {
    title: "Disclaimers",
    body: [
      'THE WEBSITE AND ITS CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.',
      "We do not warrant that the Website will be uninterrupted, error-free, or free of harmful components, or that any information on it is complete, accurate, or current at all times.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      `TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ${siteConfig.name.toUpperCase()} SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING FROM YOUR USE OF, OR INABILITY TO USE, THE WEBSITE.`,
      "This limitation applies regardless of the legal theory on which a claim is based, and even if we have been advised of the possibility of such damages. Some jurisdictions do not allow certain limitations of liability, so some of the above limitations may not apply to you.",
      "Nothing in these terms limits liability that cannot be limited or excluded under applicable law, including liability for our own fraud or willful misconduct.",
    ],
  },
  {
    title: "Indemnification",
    body: [
      `You agree to indemnify and hold ${siteConfig.name} harmless from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your misuse of the Website or violation of these terms.`,
    ],
  },
  {
    title: "Governing Law and Dispute Resolution",
    body: [
      "[Insert governing jurisdiction — e.g., the country or state under whose laws these terms are interpreted, and where any court proceedings would take place, once NEXORA ORBIT's registered business jurisdiction is confirmed.]",
      "Before initiating formal legal proceedings, both parties agree to attempt to resolve any dispute arising from these terms informally by contacting the other party in writing and allowing a reasonable opportunity to respond.",
    ],
  },
  {
    title: "Severability and Entire Agreement",
    body: [
      "If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full force and effect, and the unenforceable provision will be interpreted to best reflect its original intent.",
      "These terms, together with our Privacy Policy, constitute the entire agreement between you and us regarding use of the Website, superseding any prior agreements regarding the Website specifically.",
    ],
  },
  {
    title: "Changes to Terms",
    body: [
      "These website terms may be updated as the Website, our service model, or operational practices change.",
      `Last updated: ${legalLastUpdated}.`,
    ],
  },
  {
    title: "Contact",
    body: [`Questions about these terms can be sent to ${siteConfig.email}.`],
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
