import { Metadata } from "next";
import WebsiteVsSocialMediaClient from "./WebsiteVsSocialMediaClient";

export const metadata: Metadata = {
  title: "Website vs Social Media for Business | BuildSpark",
  description:
    "Do you need a website if you have Facebook? Yes. Here's why your local business needs both, and why your website should be the anchor of your online presence.",
  alternates: { canonical: "https://buildspark.com.au/blog/website-vs-social-media" },
  openGraph: {
    title: "Website vs Social Media for Business | BuildSpark",
    description: "Do you need a website if you have Facebook? Yes. Here's why your local business needs both, and why your website should be the anchor of your online presence.",
    url: "https://buildspark.com.au/blog/website-vs-social-media",
    siteName: "BuildSpark",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Website vs Social Media: What Does Your Local Business Actually Need?",
  author: {
    "@type": "Organization",
    name: "BuildSpark Team",
  },
  datePublished: "2026-03-14",
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
    { "@type": "ListItem", position: 3, name: "Website vs Social Media", item: "https://buildspark.com.au/blog/website-vs-social-media" },
  ],
};

export default function WebsiteVsSocialMediaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <WebsiteVsSocialMediaClient />
    </>
  );
}
