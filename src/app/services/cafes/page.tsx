import { Metadata } from "next";
import CafesClient from "./CafesClient";

export const metadata: Metadata = {
  title: "Cafe & Restaurant Website Design Victoria | BuildSpark",
  description:
    "Cafe and restaurant website design in Victoria from $490. Online menus, bookings, Google Maps integration, and local SEO to bring more diners through your door.",
  alternates: { canonical: "https://buildspark.com.au/services/cafes" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Website Design for Cafes & Restaurants",
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
    { "@type": "ListItem", position: 3, name: "Cafes", item: "https://buildspark.com.au/services/cafes" },
  ],
};

export default function CafesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CafesClient />
    </>
  );
}
