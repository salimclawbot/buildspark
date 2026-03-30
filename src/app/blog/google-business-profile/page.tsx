import { Metadata } from "next";
import GoogleBusinessProfileClient from "./GoogleBusinessProfileClient";

export const metadata: Metadata = {
  title: "Google Business Profile Setup Guide | BuildSpark",
  description: "A practical step-by-step guide to setting up Google Business Profile for your local business. Get found on Google Maps and local search results.",
  alternates: { canonical: "https://buildspark.com.au/blog/google-business-profile" },
  openGraph: {
    title: "Google Business Profile Setup Guide | BuildSpark",
    description: "A practical step-by-step guide to setting up Google Business Profile for your local business. Get found on Google Maps and local search results.",
    url: "https://buildspark.com.au/blog/google-business-profile",
    siteName: "BuildSpark",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Set Up Google Business Profile for Your Local Business (Step by Step)",
  author: { "@type": "Organization", name: "BuildSpark Team" },
  datePublished: "2026-03-12",
  dateModified: "2026-03-17",
  publisher: { "@type": "Organization", name: "BuildSpark", url: "https://buildspark.com.au" },
  image: "https://buildspark.com.au/images/hero-workspace.webp",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://buildspark.com.au" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://buildspark.com.au/blog" },
    { "@type": "ListItem", position: 3, name: "Google Business Profile", item: "https://buildspark.com.au/blog/google-business-profile" },
  ],
};

export default function GoogleBusinessProfilePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GoogleBusinessProfileClient />
    </>
  );
}
