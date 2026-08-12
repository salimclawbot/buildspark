import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Managed Website Services for Local Businesses | BuildSpark",
  description:
    "Premium managed websites for trades, clinics, hospitality, equine, professional services and local businesses. Website, care, updates and lead tracking for $250 per month.",
  alternates: { canonical: "https://buildspark.com.au/services" },
  openGraph: {
    title: "Managed Website Services for Local Businesses | BuildSpark",
    description:
      "Premium managed websites for trades, clinics, hospitality, equine, professional services and local businesses. $250 per month.",
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
