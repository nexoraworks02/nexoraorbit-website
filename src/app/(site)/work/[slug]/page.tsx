import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetailPage } from "@/components/work/CaseStudyDetailPage";
import { getWorkProjectBySlug, workProjects } from "@/data/work";
import { createPageMetadata } from "@/lib/seo";

type WorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return workProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkProjectBySlug(slug);

  if (!project) {
    return {
      title: "Case Study Not Found | NEXORA ORBIT",
    };
  }

  return createPageMetadata({
    title: project.metadata.title,
    description: project.metadata.description,
    path: `/work/${project.slug}`,
    index: false,
  });
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getWorkProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyDetailPage project={project} />;
}
