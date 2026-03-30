import { Metadata } from "next";
import BookkeeperWebsiteClient from "./BookkeeperWebsiteClient";

export const metadata: Metadata = {
  title: "Why Bookkeepers Need a Website | BuildSpark",
  description: "Think referrals are enough? Here's why every bookkeeper still needs a website to grow their practice and win new clients.",
  alternates: { canonical: "https://buildspark.com.au/blog/bookkeeper-website" },
  openGraph: {
    title: "Why Bookkeepers Need a Website | BuildSpark",
    description: "Think referrals are enough? Here's why every bookkeeper still needs a website to grow their practice and win new clients.",
    url: "https://buildspark.com.au/blog/bookkeeper-website",
    siteName: "BuildSpark",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Why Every Bookkeeper Needs a Website (Even If You Get All Your Clients From Referrals)",
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
    { "@type": "ListItem", position: 3, name: "Bookkeeper Website", item: "https://buildspark.com.au/blog/bookkeeper-website" },
  ],
};

export default function BookkeeperWebsitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BookkeeperWebsiteClient />
    </>
  );
}
