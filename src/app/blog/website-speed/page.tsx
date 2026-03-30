import { Metadata } from "next";
import WebsiteSpeedClient from "./WebsiteSpeedClient";

export const metadata: Metadata = {
  title: "Slow Websites Cost You Customers | BuildSpark",
  description: "Slow websites kill conversions and tank Google rankings. Learn the 3-second rule, Core Web Vitals, and how to fix your site speed.",
  alternates: { canonical: "https://buildspark.com.au/blog/website-speed" },
  openGraph: {
    title: "Slow Websites Cost You Customers | BuildSpark",
    description: "Slow websites kill conversions and tank Google rankings. Learn the 3-second rule, Core Web Vitals, and how to fix your site speed.",
    url: "https://buildspark.com.au/blog/website-speed",
    siteName: "BuildSpark",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Your Website Is Too Slow and It's Costing You Customers",
  author: { "@type": "Organization", name: "BuildSpark Team" },
  datePublished: "2026-03-11",
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
    { "@type": "ListItem", position: 3, name: "Website Speed", item: "https://buildspark.com.au/blog/website-speed" },
  ],
};

export default function WebsiteSpeedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <WebsiteSpeedClient />
    </>
  );
}
