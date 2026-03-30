import { Metadata } from "next";
import TradieWebsiteTipsClient from "./TradieWebsiteTipsClient";

export const metadata: Metadata = {
  title: "7 Things Every Tradie Website Must Have | BuildSpark",
  description:
    "The 7 must-have features for tradie websites that actually get jobs. Service areas, click-to-call, reviews, and more. No fluff.",
  alternates: { canonical: "https://buildspark.com.au/blog/tradie-website-tips" },
  openGraph: {
    title: "7 Things Every Tradie Website Must Have | BuildSpark",
    description: "The 7 must-have features for tradie websites that actually get jobs. Service areas, click-to-call, reviews, and more. No fluff.",
    url: "https://buildspark.com.au/blog/tradie-website-tips",
    siteName: "BuildSpark",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "7 Things Every Tradie Website Must Have to Get More Jobs",
  author: {
    "@type": "Organization",
    name: "BuildSpark Team",
  },
  datePublished: "2026-03-16",
  dateModified: "2026-03-17",
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
    { "@type": "ListItem", position: 3, name: "Tradie Website Tips", item: "https://buildspark.com.au/blog/tradie-website-tips" },
  ],
};

export default function TradieWebsiteTipsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TradieWebsiteTipsClient />
    </>
  );
}
