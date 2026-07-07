import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexoraorbit.com"),
  title: {
    default: "Nexora Orbit Digital | Websites, Apps, Branding & Digital Growth",
    template: "%s | Nexora Orbit Digital",
  },
  description:
    "Nexora Orbit Digital is a digital solutions company for websites, apps, logo design, branding, Shopify website design, SEO, CRO, and online growth systems.",
  keywords: [
    "website design company",
    "app design and development",
    "logo design service",
    "branding agency",
    "digital solutions company",
    "Shopify website design",
    "SEO",
    "CRO",
    "online growth systems",
  ],
  openGraph: {
    title: "Nexora Orbit Digital",
    description:
      "Websites, Apps, Branding & Digital Growth Solutions for service-based businesses.",
    url: "https://nexoraorbit.com",
    siteName: "Nexora Orbit Digital",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white text-slate-950">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
