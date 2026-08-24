import type { Metadata } from "next";
import { Suspense } from "react";
import { HospitalityMarketingLanding } from "@/components/hospitality-marketing/HospitalityMarketingLanding";

export const metadata: Metadata = {
  title: "Get More Google Reviews for Your Café | BuildSpark",
  description:
    "Google review growth support for cafés, restaurants and hospitality businesses. Request your free café marketing plan.",
  alternates: { canonical: "https://buildspark.com.au/cafe-google-reviews" },
  openGraph: {
    title: "Get More Google Reviews for Your Café | BuildSpark",
    description: "Request a free café marketing plan with Google review growth recommendations.",
    url: "https://buildspark.com.au/cafe-google-reviews",
    siteName: "BuildSpark",
    images: [{ url: "https://buildspark.com.au/images/hospitality/hospitality-hero.webp", width: 1600, height: 1000 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get More Google Reviews for Your Café | BuildSpark",
    description: "Request your free café marketing plan.",
    images: ["https://buildspark.com.au/images/hospitality/hospitality-hero.webp"],
  },
};

export default function CafeGoogleReviewsPage() {
  return (
    <Suspense fallback={null}>
      <HospitalityMarketingLanding defaultVariant="reviews" />
    </Suspense>
  );
}
