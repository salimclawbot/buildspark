import type { Metadata } from "next";
import { HospitalityMarketingLanding } from "@/components/hospitality-marketing/HospitalityMarketingLanding";

export const metadata: Metadata = {
  title: "Restaurant Marketing | Social Media, Reviews & Websites",
  description:
    "Restaurant marketing for Australian hospitality businesses. Get help with social media, Google reviews, websites and local visibility.",
  alternates: { canonical: "https://buildspark.com.au/restaurant-marketing" },
  openGraph: {
    title: "Restaurant Marketing That Gets You Discovered | BuildSpark",
    description: "Get your free restaurant marketing plan.",
    url: "https://buildspark.com.au/restaurant-marketing",
    siteName: "BuildSpark",
    images: [{ url: "https://buildspark.com.au/images/hospitality/hospitality-hero.webp", width: 1600, height: 1000 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Marketing | BuildSpark",
    description: "Request your free hospitality marketing review.",
    images: ["https://buildspark.com.au/images/hospitality/hospitality-hero.webp"],
  },
};

export default function RestaurantMarketingPage() {
  return <HospitalityMarketingLanding defaultVariant="restaurant-marketing" />;
}
