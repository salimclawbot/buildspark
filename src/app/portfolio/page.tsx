import { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Our Work | BuildSpark Web Design Portfolio",
  description:
    "Fast, mobile-ready websites built to convert. See our work for local Victorian businesses.",
  alternates: { canonical: "https://buildspark.com.au/portfolio" },
  openGraph: {
    title: "Our Work | BuildSpark Web Design Portfolio",
    description:
      "Fast, mobile-ready websites built to convert. See our work for local Victorian businesses.",
    url: "https://buildspark.com.au/portfolio",
    siteName: "BuildSpark",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://buildspark.com.au" },
    { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://buildspark.com.au/portfolio" },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PortfolioClient />
    </>
  );
}
