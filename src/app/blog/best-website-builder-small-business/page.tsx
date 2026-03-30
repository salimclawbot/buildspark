import { Metadata } from "next";
import BestWebsiteBuilderClient from "./BestWebsiteBuilderClient";

export const metadata: Metadata = {
  title: "Wix vs WordPress vs Custom: Best for SMBs | BuildSpark",
  description:
    "Honest comparison of Wix, WordPress, Squarespace, and custom websites for Australian small businesses. Which one actually makes sense?",
  alternates: { canonical: "https://buildspark.com.au/blog/best-website-builder-small-business" },
  openGraph: {
    title: "Wix vs WordPress vs Custom: Best for SMBs | BuildSpark",
    description: "Honest comparison of Wix, WordPress, Squarespace, and custom websites for Australian small businesses. Which one actually makes sense?",
    url: "https://buildspark.com.au/blog/best-website-builder-small-business",
    siteName: "BuildSpark",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Wix vs WordPress vs Custom: What's Best for Small Business?",
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
    { "@type": "ListItem", position: 3, name: "Best Website Builder", item: "https://buildspark.com.au/blog/best-website-builder-small-business" },
  ],
};

export default function BestWebsiteBuilderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BestWebsiteBuilderClient />
    </>
  );
}
