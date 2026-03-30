import { Metadata } from "next";
import CheapWebsiteVictoriaClient from "./CheapWebsiteVictoriaClient";

export const metadata: Metadata = {
  title: "Cheap Websites in Victoria: The Truth | BuildSpark",
  description:
    "Honest comparison of cheap website options for Victorian businesses. DIY vs $490 BuildSpark vs $5000+ agency. What you actually get at each price point.",
  alternates: { canonical: "https://buildspark.com.au/blog/cheap-website-victoria" },
  openGraph: {
    title: "Cheap Websites in Victoria: The Truth | BuildSpark",
    description: "Honest comparison of cheap website options for Victorian businesses. DIY vs $490 BuildSpark vs $5000+ agency. What you actually get at each price point.",
    url: "https://buildspark.com.au/blog/cheap-website-victoria",
    siteName: "BuildSpark",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Cheap Websites for Victorian Businesses: What You Actually Get (And What to Avoid)",
  author: {
    "@type": "Organization",
    name: "BuildSpark Team",
  },
  datePublished: "2026-03-10",
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
    { "@type": "ListItem", position: 3, name: "Cheap Website Victoria", item: "https://buildspark.com.au/blog/cheap-website-victoria" },
  ],
};

export default function CheapWebsiteVictoriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CheapWebsiteVictoriaClient />
    </>
  );
}
