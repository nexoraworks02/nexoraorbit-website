import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { MotionRuntime } from "@/components/motion/MotionRuntime";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white text-slate-950">
        {children}
        <MotionRuntime />
        <Analytics />
      </body>
    </html>
  );
}
