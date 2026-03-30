import { Metadata } from "next";
import TradiesClient from "./TradiesClient";

export const metadata: Metadata = {
  title: "Tradie Website Design Victoria | BuildSpark",
  description:
    "Tradie website design in Victoria from $490. Mobile-first, click-to-call, and local SEO to get your phone ringing with new customers from Google.",
  alternates: { canonical: "https://buildspark.com.au/services/tradies" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Website Design for Tradies",
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
    { "@type": "ListItem", position: 3, name: "Tradies", item: "https://buildspark.com.au/services/tradies" },
  ],
};

export default function TradiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TradiesClient />
    </>
  );
}
