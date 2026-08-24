import type { Metadata } from "next";
import { HospitalityMarketingLanding } from "@/components/hospitality-marketing/HospitalityMarketingLanding";

export const metadata: Metadata = {
  title: "Café & Restaurant Marketing | Social Media, Reviews & Websites",
  description:
    "Marketing for cafés and restaurants. Get help with social media, Google reviews, websites and local visibility. Request your free café marketing review.",
  alternates: { canonical: "https://buildspark.com.au/cafe-marketing" },
  openGraph: {
    title: "Café & Restaurant Marketing | BuildSpark",
    description:
      "Get your free café marketing plan. We’ll review your online presence and show you what we’d improve.",
    url: "https://buildspark.com.au/cafe-marketing",
    siteName: "BuildSpark",
    images: [{ url: "https://buildspark.com.au/images/hospitality/hospitality-hero.webp", width: 1600, height: 1000 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Café & Restaurant Marketing | BuildSpark",
    description: "Request your free café marketing review.",
    images: ["https://buildspark.com.au/images/hospitality/hospitality-hero.webp"],
  },
};

export default function CafeMarketingPage() {
  return <HospitalityMarketingLanding defaultVariant="cafe-marketing" />;
}
