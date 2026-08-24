import type { Metadata } from "next";
import { HospitalityMarketingLanding } from "@/components/hospitality-marketing/HospitalityMarketingLanding";

export const metadata: Metadata = {
  title: "Hospitality Marketing | Social Media, Reviews & Websites",
  description:
    "Digital marketing for cafés, restaurants and hospitality businesses. Get a free review of your online presence.",
  alternates: { canonical: "https://buildspark.com.au/hospitality-marketing" },
  openGraph: {
    title: "Hospitality Marketing | BuildSpark",
    description: "Get a free review of your online presence across socials, Google reviews and your website.",
    url: "https://buildspark.com.au/hospitality-marketing",
    siteName: "BuildSpark",
    images: [{ url: "https://buildspark.com.au/images/hospitality/hospitality-hero.webp", width: 1600, height: 1000 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospitality Marketing | BuildSpark",
    description: "Request your free hospitality marketing review.",
    images: ["https://buildspark.com.au/images/hospitality/hospitality-hero.webp"],
  },
};

export default function HospitalityMarketingPage() {
  return <HospitalityMarketingLanding defaultVariant="digital-marketing" />;
}
