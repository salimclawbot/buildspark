import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About BuildSpark | Victorian Web Design Team",
  description:
    "Meet the lean Victorian web team obsessed with building sites that work. Fast, affordable websites for local businesses.",
  alternates: { canonical: "https://buildspark.com.au/about" },
  openGraph: {
    title: "About BuildSpark | Victorian Web Design Team",
    description:
      "Meet the lean Victorian web team obsessed with building sites that work. Fast, affordable websites for local businesses.",
    url: "https://buildspark.com.au/about",
    siteName: "BuildSpark",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://buildspark.com.au" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://buildspark.com.au/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AboutClient />
    </>
  );
}
