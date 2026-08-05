import { Metadata } from "next";
import { notFound } from "next/navigation";
import AnalysisArticleClient from "@/components/blog/AnalysisArticleClient";
import { getAnalysisPost } from "@/lib/analysis-posts";

const post = getAnalysisPost("500-local-business-website-analysis");
const canonical = "https://buildspark.com.au/blog/500-local-business-website-analysis";
const socialImage = "https://buildspark.com.au/images/social/500-local-business-website-analysis.jpg";
const keywords = post ? [post.primaryKeyword, ...post.secondaryKeywords] : undefined;

export const metadata: Metadata = {
  title: post?.metaTitle,
  description: post?.description,
  keywords,
  alternates: { canonical },
  openGraph: {
    title: post?.metaTitle,
    description: post?.description,
    url: canonical,
    siteName: "BuildSpark",
    images: post
      ? [{ url: socialImage, width: 1200, height: 630, alt: post.heroAlt }]
      : undefined,
    locale: "en_AU",
    type: "article",
    publishedTime: post?.published,
    modifiedTime: post?.published,
    authors: ["BuildSpark Team"],
    section: post?.category,
    tags: keywords,
  },
  twitter: {
    card: "summary_large_image",
    title: post?.metaTitle,
    description: post?.description,
    images: post ? [{ url: socialImage, alt: post.heroAlt }] : undefined,
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
    image: socialImage,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <AnalysisArticleClient post={post} />
    </>
  );
}
