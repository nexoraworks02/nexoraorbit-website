import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightArticlePage } from "@/components/insights/InsightArticlePage";
import { getInsightArticleBySlug, insightArticles } from "@/data/insights";
import { createPageMetadata } from "@/lib/seo";

type InsightPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return insightArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightArticleBySlug(slug);

  if (!article) {
    return {
      title: "Insight Not Found | NEXORA ORBIT",
    };
  }

  return createPageMetadata({
    title: article.metadata.title,
    description: article.metadata.description,
    path: `/insights/${article.slug}`,
    type: "article",
  });
}

export default async function InsightArticleRoute({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = getInsightArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <InsightArticlePage article={article} />;
}
