import { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Website Pricing | $250/Month | BuildSpark",
  description:
    "BuildSpark websites are $250 per month with website build, hosting, security, backups, monthly changes, content updates, SEO foundations, and lead tracking.",
  alternates: { canonical: "https://buildspark.com.au/pricing" },
  openGraph: {
    title: "Website Pricing | $250/Month | BuildSpark",
    description:
      "One clear website plan: $250 per month for the website, care, content updates, and lead tracking.",
    url: "https://buildspark.com.au/pricing",
    siteName: "BuildSpark",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The $250/month plan includes website design and build, hosting, domain setup support, SSL/security basics, backups, monthly changes, monthly content or page updates, SEO foundations, and lead tracking. Final scope is confirmed after the quiz.",
      },
    },
    {
      "@type": "Question",
      name: "How fast is delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timeline depends on the site size, content, and availability for the month. BuildSpark confirms the recommended timeline after reviewing the website quiz.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to provide content?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It helps if you can provide photos and a rough idea of what you want to say. But we can write copy for you and use professional stock images if needed.",
      },
    },
    {
      "@type": "Question",
      name: "Can I update the site myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BuildSpark can handle monthly changes, content updates, hosting, backups, security basics, and support as part of the $250/month website plan.",
      },
    },
    {
      "@type": "Question",
      name: "What if I need more pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No problem. Additional pages can be added at any time. We'll quote you a fair price based on complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a refund policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If we haven't started building yet, you get a full refund. Once work has begun, we'll work with you to make sure you're happy with the result.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://buildspark.com.au" },
    { "@type": "ListItem", position: 2, name: "Pricing", item: "https://buildspark.com.au/pricing" },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PricingClient />
    </>
  );
}
