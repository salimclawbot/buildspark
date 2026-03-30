import { Metadata } from "next";
import HowLongWebsiteClient from "./HowLongWebsiteClient";

export const metadata: Metadata = {
  title: "How Long Does a Website Take? | BuildSpark",
  description:
    "Honest timelines for local business websites. Traditional agencies take 8-12 weeks. BuildSpark delivers in 48 hours to 1 week. Here's why.",
  alternates: { canonical: "https://buildspark.com.au/blog/how-long-does-a-website-take" },
  openGraph: {
    title: "How Long Does a Website Take? | BuildSpark",
    description: "Honest timelines for local business websites. Traditional agencies take 8-12 weeks. BuildSpark delivers in 48 hours to 1 week. Here's why.",
    url: "https://buildspark.com.au/blog/how-long-does-a-website-take",
    siteName: "BuildSpark",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "How Long Does a Website Take? (Honest Answer for Local Businesses)",
  author: {
    "@type": "Organization",
    name: "BuildSpark Team",
  },
  datePublished: "2026-03-15",
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
    { "@type": "ListItem", position: 3, name: "How Long Does a Website Take", item: "https://buildspark.com.au/blog/how-long-does-a-website-take" },
  ],
};

export default function HowLongWebsitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HowLongWebsiteClient />
    </>
  );
}
