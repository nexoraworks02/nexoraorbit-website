import { siteConfig } from "@/lib/site-config";

export const contactEmail = siteConfig.email;

export const contactMailtoHref = `mailto:${siteConfig.email}?subject=Project%20Enquiry%20for%20NEXORA%20ORBIT`;

export const serviceNeededOptions = [
  "Software Engineering",
  "AI Solutions",
  "Mobile App Development",
  "Web Development",
  "Cloud Engineering",
  "Branding",
  "Digital Marketing",
  "Technology Consulting",
  "Not sure yet",
].map((label) => ({ label, value: label }));

export const projectStageOptions = [
  "Idea / Discovery",
  "Planning",
  "Redesign / Rebuild",
  "Active project",
  "Scaling / Optimization",
  "Not sure yet",
].map((label) => ({ label, value: label }));

export const budgetRangeOptions = [
  "Under $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
  "Prefer to discuss",
].map((label) => ({ label, value: label }));

export const timelineOptions = [
  "As soon as possible",
  "2-4 weeks",
  "1-3 months",
  "3+ months",
  "Flexible / not sure",
].map((label) => ({ label, value: label }));

export const trustPoints = [
  "Clear project context review",
  "Practical next-step guidance",
  "Professional remote collaboration",
];

export const nextSteps = [
  "We review your enquiry.",
  "We respond with relevant questions or meeting options.",
  "A discovery conversation clarifies goals, scope, timeline, and constraints.",
  "If there is a fit, we prepare a proposal, roadmap, or recommended next step.",
];

export const contactFaqItems = [
  {
    id: "consultation-process",
    title: "How does the consultation process work?",
    content:
      "We review your enquiry first, then respond with relevant questions or meeting options. The goal is to clarify fit, priorities, and the right next step before execution.",
  },
  {
    id: "international-clients",
    title: "Do you work with international clients?",
    content:
      "Yes. NEXORA ORBIT is structured for remote and international collaboration with clear communication, documentation, and professional handoff.",
  },
  {
    id: "information-to-include",
    title: "What information should I include?",
    content:
      "Share what you want to build or improve, the service area you need, your project stage, timeline, and any important business or technical context.",
  },
  {
    id: "fixed-packages",
    title: "Do you offer fixed packages?",
    content:
      "Some work may be structured into clear scopes, but serious digital systems are usually estimated after understanding goals, requirements, and constraints.",
  },
  {
    id: "not-sure",
    title: "Can you help if I am not sure what I need?",
    content:
      "Yes. The consultation can help clarify whether you need strategy, design, engineering, AI, cloud, brand, growth, or a connected system.",
  },
];
