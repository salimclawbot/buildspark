import { Metadata } from "next";
import CafeWebsiteGuideClient from "./CafeWebsiteGuideClient";

export const metadata: Metadata = {
  title: "The Complete Cafe Website Guide for 2026 | BuildSpark",
  description:
    "Everything your cafe website needs: menu, hours, photos, booking, Google Maps, mobile design, local SEO, and the common mistakes that drive customers away.",
  alternates: { canonical: "https://buildspark.com.au/blog/cafe-website-guide" },
  openGraph: {
    title: "The Complete Cafe Website Guide for 2026 | BuildSpark",
    description: "Everything your cafe website needs: menu, hours, photos, booking, Google Maps, mobile design, local SEO, and the common mistakes that drive customers away.",
    url: "https://buildspark.com.au/blog/cafe-website-guide",
    siteName: "BuildSpark",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "The Complete Cafe Website Guide: Everything You Need to Get More Customers Online (2026)",
  author: {
    "@type": "Organization",
    name: "BuildSpark Team",
  },
  datePublished: "2026-03-19",
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
    { "@type": "ListItem", position: 3, name: "Cafe Website Guide", item: "https://buildspark.com.au/blog/cafe-website-guide" },
  ],
};

export default function CafeWebsiteGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CafeWebsiteGuideClient />
    </>
  );
}
