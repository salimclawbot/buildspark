import { Metadata } from "next";
import LocalSeoVictoriaClient from "./LocalSeoVictoriaClient";

export const metadata: Metadata = {
  title: "Local SEO for Victorian Businesses | BuildSpark",
  description:
    "Everything Victorian small businesses need to know about local SEO. Google Business Profile, keywords, reviews, citations, backlinks, schema markup, and more.",
  alternates: { canonical: "https://buildspark.com.au/blog/local-seo-victoria" },
  openGraph: {
    title: "Local SEO for Victorian Businesses | BuildSpark",
    description: "Everything Victorian small businesses need to know about local SEO. Google Business Profile, keywords, reviews, citations, backlinks, schema markup, and more.",
    url: "https://buildspark.com.au/blog/local-seo-victoria",
    siteName: "BuildSpark",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "The Complete Local SEO Guide for Victorian Small Businesses",
  author: {
    "@type": "Organization",
    name: "BuildSpark Team",
  },
  datePublished: "2026-03-15",
  dateModified: "2026-03-19",
  publisher: {
    "@type": "Organization",
    name: "BuildSpark",
    url: "https://buildspark.com.au",
  },
  image: "https://buildspark.com.au/images/hero-workspace.webp",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://buildspark.com.au" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://buildspark.com.au/blog" },
    { "@type": "ListItem", position: 3, name: "Local SEO Victoria", item: "https://buildspark.com.au/blog/local-seo-victoria" },
  ],
};

export default function LocalSeoVictoriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LocalSeoVictoriaClient />
    </>
  );
}
