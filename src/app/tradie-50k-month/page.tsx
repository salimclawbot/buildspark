import type { Metadata } from "next";
import { Tradie50kMonthClient } from "./Tradie50kMonthClient";

const title = "Build Your Tradie Business Toward $50k/Month | BuildSpark";
const description =
  "A direct growth landing page for tilers, roofers, kitchen remodelers, contractors and tradies who want more leads through social media, website design and Google reviews.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "tradie marketing",
    "contractor marketing Australia",
    "tradie website design",
    "social media management for tradies",
    "Google review service",
    "roofing leads",
    "tiler marketing",
    "kitchen renovation leads",
  ],
  alternates: {
    canonical: "https://buildspark.com.au/tradie-50k-month",
  },
  openGraph: {
    title,
    description,
    url: "https://buildspark.com.au/tradie-50k-month",
    siteName: "BuildSpark",
    images: [
      {
        url: "https://buildspark.com.au/images/tradie-50k-growth-hero.png",
        width: 1680,
        height: 945,
        alt: "Australian contractor reviewing website, social media and Google review growth systems",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://buildspark.com.au/images/tradie-50k-growth-hero.png"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "BuildSpark Tradie Growth Landing Page",
  description,
  provider: {
    "@type": "ProfessionalService",
    name: "BuildSpark",
    url: "https://buildspark.com.au",
  },
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  serviceType: [
    "Website design for tradies",
    "Social media management",
    "Google review support",
    "Lead generation website strategy",
  ],
  offers: {
    "@type": "Offer",
    price: "250",
    priceCurrency: "AUD",
    category: "Marketing service",
    availability: "https://schema.org/InStock",
  },
};

export default function Tradie50kMonthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Tradie50kMonthClient />
    </>
  );
}
