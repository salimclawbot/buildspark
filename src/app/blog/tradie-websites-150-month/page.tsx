import { Metadata } from "next";
import TradieWebsites150Client from "./TradieWebsites150Client";

const title = "Tradie Websites From $150/m | BuildSpark";
const description =
  "High-converting websites for plumbers, electricians, builders, landscapers and other trades, without the $5,000+ upfront cost.";
const canonical = "https://buildspark.com.au/blog/tradie-websites-150-month";
const image = "https://buildspark.com.au/images/social/local-businesses-3x-more-enquiries.jpg";
const keywords = [
  "tradie websites",
  "website for tradies",
  "plumber website",
  "electrician website",
  "builder website",
  "landscaper website",
  "small business website",
];

export const metadata: Metadata = {
  title,
  description,
  keywords,
  alternates: { canonical },
  openGraph: {
    title: "More Leads. More Trust. More Jobs. For $150/m.",
    description,
    url: canonical,
    siteName: "BuildSpark",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: "Trade business owner in a workshop promoting BuildSpark websites",
      },
    ],
    locale: "en_AU",
    type: "article",
    publishedTime: "2026-08-06",
    modifiedTime: "2026-08-06",
    authors: ["BuildSpark Team"],
    section: "Tradie Websites",
    tags: keywords,
  },
  twitter: {
    card: "summary_large_image",
    title: "More Leads. More Trust. More Jobs. For $150/m.",
    description,
    images: [{ url: image, alt: "Trade business owner in a workshop promoting BuildSpark websites" }],
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "More leads. More trust. More jobs. For $150/m.",
    description,
    author: { "@type": "Organization", name: "BuildSpark Team" },
    datePublished: "2026-08-06",
    dateModified: "2026-08-06",
    publisher: { "@type": "Organization", name: "BuildSpark", url: "https://buildspark.com.au" },
    image,
    keywords: keywords.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <TradieWebsites150Client />
    </>
  );
}
