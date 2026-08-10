import { Metadata } from "next";
import { notFound } from "next/navigation";
import AnalysisArticleClient from "@/components/blog/AnalysisArticleClient";
import { analysisPosts, getAnalysisPost } from "@/lib/analysis-posts";

type PageProps = {
  params: { slug: string };
};

const BASE_URL = "https://buildspark.com.au";

export function generateStaticParams() {
  return analysisPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getAnalysisPost(params.slug);

  if (!post) {
    return {};
  }

  const canonical = `${BASE_URL}/blog/${post.slug}`;
  const socialImage = `${BASE_URL}/images/blog-comparisons/${post.slug}-point-1.webp`;
  const keywords = [post.primaryKeyword, ...post.secondaryKeywords];

  return {
    title: post.metaTitle,
    description: post.description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: post.metaTitle,
      description: post.description,
      url: canonical,
      siteName: "BuildSpark",
      images: [{ url: socialImage, width: 1200, height: 1200, alt: post.heroAlt }],
      locale: "en_AU",
      type: "article",
      publishedTime: post.published,
      modifiedTime: post.published,
      authors: ["BuildSpark Team"],
      section: post.category,
      tags: keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.description,
      images: [{ url: socialImage, alt: post.heroAlt }],
    },
  };
}

export default function Page({ params }: PageProps) {
  const post = getAnalysisPost(params.slug);
  if (!post) notFound();

  const canonical = `${BASE_URL}/blog/${post.slug}`;
  const socialImage = `${BASE_URL}/images/blog-comparisons/${post.slug}-point-1.webp`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: "BuildSpark Team" },
    datePublished: post.published,
    dateModified: post.published,
    publisher: { "@type": "Organization", name: "BuildSpark", url: BASE_URL },
    mainEntityOfPage: canonical,
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
