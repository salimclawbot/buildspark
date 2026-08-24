import type { Metadata } from "next";
import { Suspense } from "react";
import { HospitalityMarketingLanding } from "@/components/hospitality-marketing/HospitalityMarketingLanding";

export const metadata: Metadata = {
  title: "Cafe Social Media Marketing | BuildSpark",
  description:
    "Social media management for cafés and hospitality businesses. Request your free café marketing plan.",
  alternates: { canonical: "https://buildspark.com.au/cafe-social-media-marketing" },
  openGraph: {
    title: "Cafe Social Media Marketing | BuildSpark",
    description: "Get your free café marketing plan. We’ll review your socials, reviews and website.",
    url: "https://buildspark.com.au/cafe-social-media-marketing",
    siteName: "BuildSpark",
    images: [{ url: "https://buildspark.com.au/images/hospitality/hospitality-hero.webp", width: 1600, height: 1000 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafe Social Media Marketing | BuildSpark",
    description: "Request your free café marketing plan.",
    images: ["https://buildspark.com.au/images/hospitality/hospitality-hero.webp"],
  },
};

export default function CafeSocialMediaMarketingPage() {
  return (
    <Suspense fallback={null}>
      <HospitalityMarketingLanding defaultVariant="social-media" />
    </Suspense>
  );
}
