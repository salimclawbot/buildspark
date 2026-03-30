import { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Client Results | BuildSpark Case Studies",
  description:
    "Real results from real Victorian businesses. See how BuildSpark websites help tradies, cafes, and service businesses get more leads.",
  alternates: { canonical: "https://buildspark.com.au/case-studies" },
  openGraph: {
    title: "Client Results | BuildSpark Case Studies",
    description:
      "Real results from real Victorian businesses. See how BuildSpark websites help tradies, cafes, and service businesses get more leads.",
    url: "https://buildspark.com.au/case-studies",
    siteName: "BuildSpark",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
