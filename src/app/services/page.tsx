import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Web Design Services for Local Victorian Businesses | BuildSpark",
  description:
    "Websites for tradies, cafes, bakeries, mechanics, bookkeepers and more. Fast builds from $490.",
  alternates: { canonical: "https://buildspark.com.au/services" },
  openGraph: {
    title: "Web Design Services for Local Victorian Businesses | BuildSpark",
    description:
      "Websites for tradies, cafes, bakeries, mechanics, bookkeepers and more. Fast builds from $490.",
    url: "https://buildspark.com.au/services",
    siteName: "BuildSpark",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://buildspark.com.au" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://buildspark.com.au/services" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ServicesClient />
    </>
  );
}
