import { Metadata } from "next";
import FreeAuditClient from "./FreeAuditClient";

export const metadata: Metadata = {
  title: "Free Website Audit | BuildSpark",
  description:
    "Free personalised website audit in 24 hours. We check speed, mobile, local SEO, and Google Business Profile. No calls. No pressure.",
  alternates: { canonical: "https://buildspark.com.au/free-website-audit" },
  openGraph: {
    title: "Free Website Audit | BuildSpark",
    description:
      "Free personalised website audit in 24 hours. We check speed, mobile, local SEO, and Google Business Profile. No calls. No pressure.",
    url: "https://buildspark.com.au/free-website-audit",
    siteName: "BuildSpark",
    type: "website",
  },
};

export default function FreeAuditPage() {
  return <FreeAuditClient />;
}
