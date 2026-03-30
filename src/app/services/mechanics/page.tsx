import { Metadata } from "next";
import MechanicsClient from "./MechanicsClient";

export const metadata: Metadata = {
  title: "Mechanic Website Design Victoria | BuildSpark",
  description:
    "Mechanic website design in Victoria from $490. Online booking forms, services list, and local SEO to get more customers finding your workshop on Google.",
  alternates: { canonical: "https://buildspark.com.au/services/mechanics" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Website Design for Mechanics",
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
    { "@type": "ListItem", position: 3, name: "Mechanics", item: "https://buildspark.com.au/services/mechanics" },
  ],
};

export default function MechanicsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MechanicsClient />
    </>
  );
}
