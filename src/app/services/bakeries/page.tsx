import { Metadata } from "next";
import BakeriesClient from "./BakeriesClient";

export const metadata: Metadata = {
  title: "Bakery Website Design Victoria | BuildSpark",
  description:
    "Bakery website design in Victoria from $490. Product showcases, opening hours, online ordering, and local SEO for your bakery.",
  alternates: { canonical: "https://buildspark.com.au/services/bakeries" },
  openGraph: {
    title: "Bakery Website Design Victoria | BuildSpark",
    description:
      "Bakery website design in Victoria from $490. Product showcases, opening hours, online ordering, and local SEO for your bakery.",
    url: "https://buildspark.com.au/services/bakeries",
    siteName: "BuildSpark",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Website Design for Bakeries",
  provider: { "@type": "ProfessionalService", name: "BuildSpark" },
  areaServed: { "@type": "State", name: "Victoria" },
  offers: { "@type": "Offer", price: "490", priceCurrency: "AUD" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://buildspark.com.au" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://buildspark.com.au/services" },
    { "@type": "ListItem", position: 3, name: "Bakeries", item: "https://buildspark.com.au/services/bakeries" },
  ],
};

export default function BakeriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BakeriesClient />
    </>
  );
}
