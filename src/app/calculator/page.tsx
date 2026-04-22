import CalculatorClient from "./CalculatorClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Revenue Calculator — BuildSpark",
  description:
    "See exactly how much revenue your business is leaving on the table every month. Free personalised breakdown in 30 seconds.",
  openGraph: {
    title: "Business Revenue Calculator — BuildSpark",
    description:
      "It takes 60 seconds to see how much revenue your business is leaving on the table. Free tool — no signup required.",
    url: "https://buildspark.com.au/calculator",
    siteName: "BuildSpark",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Business Revenue Calculator by BuildSpark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Revenue Calculator — BuildSpark",
    description:
      "It takes 60 seconds to see how much revenue your business is leaving on the table. Free tool — no signup required.",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop&q=80"],
    site: "@BuildSparkAU",
  },
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}
