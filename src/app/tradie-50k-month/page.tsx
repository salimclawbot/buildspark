import type { Metadata } from "next";
import { Tradie50kMonthClient } from "./Tradie50kMonthClient";

const title = "10 Checklist Items to Grow Your Trade Business Toward $50k/Month | BuildSpark";
const description =
  "A direct checklist landing page for tilers, roofers, kitchen remodelers, contractors and tradies who want more quote enquiries through better socials, website design and Google reviews.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "tradie marketing",
    "contractor marketing Australia",
    "tradie website design",
    "social media management for tradies",
    "Google review service",
    "grow trade business to 50k per month",
    "tradie lead generation checklist",
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
        alt: "Australian contractor reviewing website, social media and Google review growth checklist",
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
  name: "BuildSpark Tradie $50k Month Growth Checklist",
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
    "Tradie growth checklist",
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
