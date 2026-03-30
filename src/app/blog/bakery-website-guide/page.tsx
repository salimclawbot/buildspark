import { Metadata } from "next";
import BakeryWebsiteGuideClient from "./BakeryWebsiteGuideClient";

export const metadata: Metadata = {
  title: "Bakery Website Guide for 2026 | BuildSpark",
  description:
    "The ultimate guide for Australian bakers: Google Business Profile, local SEO, stunning photos, menus with prices, online ordering, Instagram integration, and everything your bakery website needs.",
  alternates: { canonical: "https://buildspark.com.au/blog/bakery-website-guide" },
  openGraph: {
    title: "Bakery Website Guide: Get Found Online | BuildSpark",
    description: "The ultimate guide for Australian bakers: Google Business Profile, local SEO, stunning photos, menus with prices, online ordering, Instagram integration, and everything your bakery website needs.",
    url: "https://buildspark.com.au/blog/bakery-website-guide",
    siteName: "BuildSpark",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "The Complete Bakery Website Guide: Get Found Online & Turn Browsers Into Buyers",
  author: {
    "@type": "Organization",
    name: "BuildSpark Team",
  },
  datePublished: "2026-03-14",
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
    { "@type": "ListItem", position: 3, name: "Bakery Website Guide", item: "https://buildspark.com.au/blog/bakery-website-guide" },
  ],
};

export default function BakeryWebsiteGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BakeryWebsiteGuideClient />
    </>
  );
}
