import { Metadata } from "next";
import WhyCheapWebsitesFailClient from "./WhyCheapWebsitesFailClient";

export const metadata: Metadata = {
  title: "Why $99 Websites Always Fail | BuildSpark",
  description: "Tempted by a $99 website deal? Here's why ultra-cheap websites always fail small businesses, and what to invest in instead for real results.",
  alternates: { canonical: "https://buildspark.com.au/blog/why-cheap-websites-fail" },
  openGraph: {
    title: "Why $99 Websites Always Fail | BuildSpark",
    description: "Tempted by a $99 website deal? Here's why ultra-cheap websites always fail small businesses, and what to invest in instead for real results.",
    url: "https://buildspark.com.au/blog/why-cheap-websites-fail",
    siteName: "BuildSpark",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Why $99 Websites Always Fail (And What to Do Instead)",
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
    { "@type": "ListItem", position: 3, name: "Why Cheap Websites Fail", item: "https://buildspark.com.au/blog/why-cheap-websites-fail" },
  ],
};

export default function WhyCheapWebsitesFailPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <WhyCheapWebsitesFailClient />
    </>
  );
}
