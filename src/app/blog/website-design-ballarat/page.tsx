import { Metadata } from "next";
import WebsiteDesignBallaratClient from "./WebsiteDesignBallaratClient";

export const metadata: Metadata = {
  title: "Website Design Ballarat: Local Business Guide | BuildSpark",
  description:
    "Everything Ballarat businesses need to know about getting a website in 2026. Sturt Street to the CBD - local tips and realistic costs.",
  alternates: { canonical: "https://buildspark.com.au/blog/website-design-ballarat" },
  openGraph: {
    title: "Website Design Ballarat: Local Business Guide | BuildSpark",
    description: "Everything Ballarat businesses need to know about getting a website in 2026. Sturt Street to the CBD - local tips and realistic costs.",
    url: "https://buildspark.com.au/blog/website-design-ballarat",
    siteName: "BuildSpark",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Website Design in Ballarat for Local Businesses",
  author: {
    "@type": "Organization",
    name: "BuildSpark Team",
  },
  datePublished: "2026-03-17",
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
    { "@type": "ListItem", position: 3, name: "Website Design Ballarat", item: "https://buildspark.com.au/blog/website-design-ballarat" },
  ],
};

export default function WebsiteDesignBallaratPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <WebsiteDesignBallaratClient />
    </>
  );
}
