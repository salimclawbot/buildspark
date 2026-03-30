import { Metadata } from "next";
import BookkeepersClient from "./BookkeepersClient";

export const metadata: Metadata = {
  title: "Bookkeeper Website Design Victoria | BuildSpark",
  description:
    "Bookkeeper website design in Victoria from $490. Professional lead capture, credentials display, and local SEO to attract more accounting clients.",
  alternates: { canonical: "https://buildspark.com.au/services/bookkeepers" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Website Design for Bookkeepers",
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
    { "@type": "ListItem", position: 3, name: "Bookkeepers", item: "https://buildspark.com.au/services/bookkeepers" },
  ],
};

export default function BookkeepersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BookkeepersClient />
    </>
  );
}
