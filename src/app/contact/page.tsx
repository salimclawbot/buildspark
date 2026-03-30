import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact BuildSpark | Victorian Web Design",
  description:
    "Get in touch with BuildSpark. We reply within a few hours. Based in Victoria, Australia.",
  alternates: { canonical: "https://buildspark.com.au/contact" },
  openGraph: {
    title: "Contact BuildSpark | Victorian Web Design",
    description:
      "Get in touch with BuildSpark. We reply within a few hours. Based in Victoria, Australia.",
    url: "https://buildspark.com.au/contact",
    siteName: "BuildSpark",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://buildspark.com.au" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://buildspark.com.au/contact" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactClient />
    </>
  );
}
