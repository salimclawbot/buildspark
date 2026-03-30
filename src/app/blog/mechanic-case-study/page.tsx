import { Metadata } from "next";
import MechanicCaseStudyClient from "./MechanicCaseStudyClient";

export const metadata: Metadata = {
  title: "$790 Website Made a Mechanic $60K | BuildSpark",
  description:
    "A $790 BuildSpark website generated $63,580 in new business for a Pakenham mechanic in year one. Here's the full story.",
  alternates: { canonical: "https://buildspark.com.au/blog/mechanic-case-study" },
  openGraph: {
    title: "$790 Website Made a Mechanic $60K | BuildSpark",
    description: "A $790 BuildSpark website generated $63,580 in new business for a Pakenham mechanic in year one. Here's the full story.",
    url: "https://buildspark.com.au/blog/mechanic-case-study",
    siteName: "BuildSpark",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "How a $790 Website Made a Pakenham Mechanic $60,000",
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
    { "@type": "ListItem", position: 3, name: "Mechanic Case Study", item: "https://buildspark.com.au/blog/mechanic-case-study" },
  ],
};

export default function MechanicCaseStudyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MechanicCaseStudyClient />
    </>
  );
}
