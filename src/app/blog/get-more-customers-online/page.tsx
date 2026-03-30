import { Metadata } from "next";
import GetMoreCustomersOnlineClient from "./GetMoreCustomersOnlineClient";

export const metadata: Metadata = {
  title: "Get More Customers Online | BuildSpark",
  description:
    "A no-nonsense guide to getting more customers online for Victorian local businesses. Website, Google Business, reviews, and local SEO strategies that work.",
  alternates: { canonical: "https://buildspark.com.au/blog/get-more-customers-online" },
  openGraph: {
    title: "Get More Customers Online | BuildSpark",
    description: "A no-nonsense guide to getting more customers online for Victorian local businesses. Website, Google Business, reviews, and local SEO strategies that work.",
    url: "https://buildspark.com.au/blog/get-more-customers-online",
    siteName: "BuildSpark",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "How to Get More Customers Online: A No-Nonsense Guide for Local Victorian Businesses",
  author: {
    "@type": "Organization",
    name: "BuildSpark Team",
  },
  datePublished: "2026-03-11",
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
    { "@type": "ListItem", position: 3, name: "Get More Customers Online", item: "https://buildspark.com.au/blog/get-more-customers-online" },
  ],
};

export default function GetMoreCustomersOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GetMoreCustomersOnlineClient />
    </>
  );
}
