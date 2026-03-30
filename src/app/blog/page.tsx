import { Metadata } from "next";
import BlogIndexClient from "./BlogIndexClient";

export const metadata: Metadata = {
  title: "Blog | BuildSpark - Web Design Tips for Victorian Businesses",
  description:
    "Straight-talking advice for Victorian local businesses who want more customers from Google. No jargon. No waffle. Just stuff that actually works.",
  alternates: { canonical: "https://buildspark.com.au/blog" },
  openGraph: {
    title: "Blog | BuildSpark - Web Design Tips for Victorian Businesses",
    description:
      "Straight-talking advice for Victorian local businesses who want more customers from Google. No jargon. No waffle. Just stuff that actually works.",
    url: "https://buildspark.com.au/blog",
    siteName: "BuildSpark",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://buildspark.com.au" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://buildspark.com.au/blog" },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogIndexClient />
    </>
  );
}
