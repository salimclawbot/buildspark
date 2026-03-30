import { Metadata } from "next";
import WebsiteDesignGeelongClient from "./WebsiteDesignGeelongClient";

export const metadata: Metadata = {
  title:
    "Website Design Geelong: Local Business Guide | BuildSpark",
  description:
    "Everything Geelong businesses need to know about getting a website in 2026. Local tips, realistic costs, and what actually works for Geelong businesses.",
  alternates: { canonical: "https://buildspark.com.au/blog/website-design-geelong" },
  openGraph: {
    title: "Website Design Geelong: Local Business Guide | BuildSpark",
    description: "Everything Geelong businesses need to know about getting a website in 2026. Local tips, realistic costs, and what actually works for Geelong businesses.",
    url: "https://buildspark.com.au/blog/website-design-geelong",
    siteName: "BuildSpark",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Website Design in Geelong: What Local Businesses Need to Know in 2026",
  author: {
    "@type": "Organization",
    name: "BuildSpark Team",
  },
  datePublished: "2026-03-13",
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
    { "@type": "ListItem", position: 3, name: "Website Design Geelong", item: "https://buildspark.com.au/blog/website-design-geelong" },
  ],
};

export default function WebsiteDesignGeelongPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <WebsiteDesignGeelongClient />
    </>
  );
}
