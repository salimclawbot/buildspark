import { Metadata } from "next";
import HowMuchWebsiteCostClient from "./HowMuchWebsiteCostClient";

export const metadata: Metadata = {
  title: "Website Cost in Australia 2026 | BuildSpark",
  description:
    "Complete 2026 breakdown of website costs in Australia. DIY, freelancers, template builders, agencies, and the smart middle ground. Includes tradie-specific pricing and tips.",
  alternates: { canonical: "https://buildspark.com.au/blog/how-much-does-a-website-cost" },
  openGraph: {
    title: "Website Cost in Australia 2026 | BuildSpark",
    description: "Complete 2026 breakdown of website costs in Australia. DIY, freelancers, template builders, agencies, and the smart middle ground. Includes tradie-specific pricing and tips.",
    url: "https://buildspark.com.au/blog/how-much-does-a-website-cost",
    siteName: "BuildSpark",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How Much Does a Website Cost in Australia? (2026 Guide)",
  author: {
    "@type": "Organization",
    name: "BuildSpark Team",
  },
  datePublished: "2026-03-10",
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
    { "@type": "ListItem", position: 3, name: "Website Cost Guide", item: "https://buildspark.com.au/blog/how-much-does-a-website-cost" },
  ],
};

export default function HowMuchWebsiteCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HowMuchWebsiteCostClient />
    </>
  );
}
