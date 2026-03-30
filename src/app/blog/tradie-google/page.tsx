import { Metadata } from "next";
import TradieGoogleClient from "./TradieGoogleClient";

export const metadata: Metadata = {
  title: "Why Your Tradie Business Isn't on Google | BuildSpark",
  description:
    "Not showing on Google? The 5 most common reasons tradies don't rank locally - and exactly how to fix each one.",
  alternates: { canonical: "https://buildspark.com.au/blog/tradie-google" },
  openGraph: {
    title: "Why Your Tradie Business Isn't on Google | BuildSpark",
    description: "Not showing on Google? The 5 most common reasons tradies don't rank locally - and exactly how to fix each one.",
    url: "https://buildspark.com.au/blog/tradie-google",
    siteName: "BuildSpark",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "5 Reasons Your Tradie Business Isn't Showing Up on Google",
  author: {
    "@type": "Organization",
    name: "BuildSpark Team",
  },
  datePublished: "2026-03-12",
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
    { "@type": "ListItem", position: 3, name: "Tradie Google Ranking", item: "https://buildspark.com.au/blog/tradie-google" },
  ],
};

export default function TradieGooglePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TradieGoogleClient />
    </>
  );
}
