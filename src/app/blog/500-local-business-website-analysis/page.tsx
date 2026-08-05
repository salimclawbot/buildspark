import { Metadata } from "next";
import { notFound } from "next/navigation";
import AnalysisArticleClient from "@/components/blog/AnalysisArticleClient";
import { getAnalysisPost } from "@/lib/analysis-posts";

const post = getAnalysisPost("500-local-business-website-analysis");

export const metadata: Metadata = {
  title: post?.metaTitle,
  description: post?.description,
  keywords: post ? [post.primaryKeyword, ...post.secondaryKeywords] : undefined,
  alternates: { canonical: "https://buildspark.com.au/blog/500-local-business-website-analysis" },
  openGraph: {
    title: post?.metaTitle,
    description: post?.description,
    url: "https://buildspark.com.au/blog/500-local-business-website-analysis",
    siteName: "BuildSpark",
    type: "article",
  },
};

export default function Page() {
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: "BuildSpark Team" },
    datePublished: post.published,
    dateModified: post.published,
    publisher: { "@type": "Organization", name: "BuildSpark", url: "https://buildspark.com.au" },
    image: `https://buildspark.com.au${post.hero}`,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <AnalysisArticleClient post={post} />
    </>
  );
}
