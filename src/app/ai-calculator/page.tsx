import AICalculatorClient from "./AICalculatorClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Time Calculator — BuildSpark",
  description:
    "Find out how many hours a week your business is wasting on manual work. See what AI could automate — free in 60 seconds.",
  openGraph: {
    title: "AI Time Calculator — BuildSpark",
    description:
      "Find out how many hours a week your business is wasting on manual work. See what AI could automate — free in 60 seconds.",
    url: "https://buildspark.com.au/ai-calculator",
    siteName: "BuildSpark",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "AI Time Calculator by BuildSpark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Time Calculator — BuildSpark",
    description:
      "Find out how many hours a week your business is wasting on manual work. See what AI could automate — free in 60 seconds.",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop&q=80"],
    site: "@BuildSparkAU",
  },
};

export default function AICalculatorPage() {
  return <AICalculatorClient />;
}
