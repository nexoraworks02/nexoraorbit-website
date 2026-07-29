import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  website: string;
  region: string;
  service: string;
  stage: string;
  budget: string;
  timeline: string;
  message: string;
};

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  const service = (body.service ?? "").trim();

  if (!name || !email || !message || !service || !validateEmail(email)) {
    return NextResponse.json({ error: "Missing or invalid required fields." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured — contact form cannot deliver enquiries.");
    return NextResponse.json({ error: "Form is not yet connected. Please try again later." }, { status: 503 });
  }

  const resend = new Resend(apiKey);

  const fields: Array<[string, string]> = [
    ["Name", name],
    ["Email", email],
    ["Company", (body.company ?? "").trim() || "—"],
    ["Website", (body.website ?? "").trim() || "—"],
    ["Region", (body.region ?? "").trim() || "—"],
    ["Service Needed", service],
    ["Project Stage", (body.stage ?? "").trim() || "—"],
    ["Budget Range", (body.budget ?? "").trim() || "—"],
    ["Timeline", (body.timeline ?? "").trim() || "—"],
  ];

  const textBody = [...fields.map(([label, value]) => `${label}: ${value}`), "", "Message:", message].join("\n");

  const htmlBody = `
    <div style="font-family: sans-serif; font-size: 14px; color: #0f172a;">
      <h2 style="margin: 0 0 16px;">New project enquiry — NEXORA ORBIT</h2>
      <table cellpadding="6" cellspacing="0">
        ${fields
          .map(
            ([label, value]) =>
              `<tr><td style="font-weight: 600; vertical-align: top;">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`,
          )
          .join("")}
      </table>
      <p style="font-weight: 600; margin-top: 16px;">Message</p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "NEXORA ORBIT Enquiries <onboarding@resend.dev>",
      to: siteConfig.email,
      replyTo: email,
      subject: `Project Enquiry — ${name}${service ? ` (${service})` : ""}`,
      text: textBody,
      html: htmlBody,
    });

    if (error) {
      console.error("Resend failed to send contact enquiry:", error);
      return NextResponse.json({ error: "Failed to send enquiry. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error sending contact enquiry:", err);
    return NextResponse.json({ error: "Failed to send enquiry. Please try again." }, { status: 500 });
  }
}
