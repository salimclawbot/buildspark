import type { Metadata } from "next";
import { HospitalityMarketingLanding } from "@/components/hospitality-marketing/HospitalityMarketingLanding";

export const metadata: Metadata = {
  title: "Hospitality Social Media Management | BuildSpark",
  description:
    "Social media management for cafés, restaurants and hospitality businesses in Australia.",
  alternates: { canonical: "https://buildspark.com.au/hospitality-social-media-management" },
  openGraph: {
    title: "Hospitality Social Media Management | BuildSpark",
    description: "Social media, review and website support for cafés, restaurants and hospitality businesses.",
    url: "https://buildspark.com.au/hospitality-social-media-management",
    siteName: "BuildSpark",
    images: [{ url: "https://buildspark.com.au/images/hospitality/hospitality-hero.webp", width: 1600, height: 1000 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospitality Social Media Management | BuildSpark",
    description: "Request your free hospitality marketing review.",
    images: ["https://buildspark.com.au/images/hospitality/hospitality-hero.webp"],
  },
};

export default function HospitalitySocialMediaManagementPage() {
  return <HospitalityMarketingLanding defaultVariant="social-media" />;
}
