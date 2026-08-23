import type { Metadata } from "next";

const title = "See Your Website Redesigned in 90 Minutes | BuildSpark";
const description =
  "Enter your current website and tell BuildSpark what you want improved. We will send a sharper website redesign direction in 90 minutes.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "website redesign",
    "90 minute website redesign",
    "local business website redesign",
    "tradie website redesign",
    "website mockup",
    "small business website design",
    "BuildSpark",
  ],
  alternates: {
    canonical: "https://buildspark.com.au/redo",
  },
  openGraph: {
    title,
    description,
    url: "https://buildspark.com.au/redo",
    siteName: "BuildSpark",
    type: "website",
    images: [
      {
        url: "https://buildspark.com.au/images/redo/website-redesign-90.webp",
        width: 1680,
        height: 945,
        alt: "Business owner viewing a before and after website redesign on a laptop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://buildspark.com.au/images/redo/website-redesign-90.webp"],
  },
};

export default function RedoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
