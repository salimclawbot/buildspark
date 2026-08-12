import type { Metadata } from "next";
import { HomePageClient } from "./HomePageClient";

export const metadata: Metadata = {
  title: "BuildSpark | Websites for Local Businesses | $250/Month",
  description:
    "Modern, high-converting websites for local businesses, clinics, trades, hospitality, equine, professional services, and more. Website, hosting, security, backups, updates, content, and lead tracking for $250 per month.",
  keywords: [
    "website design $250 per month",
    "local business websites",
    "small business website package",
    "website subscription Australia",
    "web design Victoria",
    "websites for clinics",
    "websites for tradies",
    "websites for local businesses",
  ],
  alternates: {
    canonical: "https://buildspark.com.au",
  },
  openGraph: {
    title: "BuildSpark | Websites for Local Businesses | $250/Month",
    description:
      "A world-class website, hosting, care, content updates, and lead tracking for $250 per month.",
    url: "https://buildspark.com.au",
    siteName: "BuildSpark",
    images: [
      {
        url: "https://buildspark.com.au/images/buildspark-home-hero.png",
        width: 1792,
        height: 1024,
        alt: "BuildSpark website examples across multiple industries",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildSpark | Websites for Local Businesses | $250/Month",
    description:
      "Website, hosting, care, content updates, and lead tracking for $250 per month.",
    images: ["https://buildspark.com.au/images/buildspark-home-hero.png"],
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "BuildSpark",
  url: "https://buildspark.com.au",
  description:
    "BuildSpark builds and manages high-converting websites for local businesses for $250 per month.",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  offers: {
    "@type": "Offer",
    name: "Managed local business website",
    price: "250",
    priceCurrency: "AUD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "250",
      priceCurrency: "AUD",
      unitText: "month",
    },
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HomePageClient />
    </>
  );
}
