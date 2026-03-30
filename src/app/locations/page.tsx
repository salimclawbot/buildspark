import { Metadata } from "next";
import LocationsClient from "./LocationsClient";

export const metadata: Metadata = {
  title: "Website Design Across Victoria | BuildSpark",
  description:
    "Serving 128+ suburbs across Victoria. Melbourne metro, Gippsland, Ballarat, Bendigo, Geelong and more. Websites from $490.",
  alternates: { canonical: "https://buildspark.com.au/locations" },
  openGraph: {
    title: "Website Design Across Victoria | BuildSpark",
    description:
      "Serving 128+ suburbs across Victoria. Melbourne metro, Gippsland, Ballarat, Bendigo, Geelong and more. Websites from $490.",
    url: "https://buildspark.com.au/locations",
    siteName: "BuildSpark",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://buildspark.com.au" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://buildspark.com.au/locations" },
  ],
};

export default function LocationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LocationsClient />
    </>
  );
}
