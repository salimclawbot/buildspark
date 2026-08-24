import type { Metadata } from "next";
import { HospitalityMarketingLanding } from "@/components/hospitality-marketing/HospitalityMarketingLanding";

export const metadata: Metadata = {
  title: "Restaurant Social Media Marketing | BuildSpark",
  description:
    "Social media marketing for restaurants and hospitality businesses. Request a free personalised marketing review.",
  alternates: { canonical: "https://buildspark.com.au/restaurant-social-media-marketing" },
  openGraph: {
    title: "Restaurant Social Media Marketing | BuildSpark",
    description: "Get a free personalised restaurant marketing review.",
    url: "https://buildspark.com.au/restaurant-social-media-marketing",
    siteName: "BuildSpark",
    images: [{ url: "https://buildspark.com.au/images/hospitality/hospitality-hero.webp", width: 1600, height: 1000 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Social Media Marketing | BuildSpark",
    description: "Request your free hospitality marketing review.",
    images: ["https://buildspark.com.au/images/hospitality/hospitality-hero.webp"],
  },
};

export default function RestaurantSocialMediaMarketingPage() {
  return <HospitalityMarketingLanding defaultVariant="social-media" />;
}
