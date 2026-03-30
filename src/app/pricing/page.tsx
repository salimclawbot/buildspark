import { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Website Pricing | From $490 | BuildSpark",
  description:
    "Straightforward pricing for Victorian local business websites. No hidden fees. No lock-in contracts.",
  alternates: { canonical: "https://buildspark.com.au/pricing" },
  openGraph: {
    title: "Website Pricing | From $490 | BuildSpark",
    description:
      "Straightforward pricing for Victorian local business websites. No hidden fees. No lock-in contracts.",
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
        text: "Every plan includes design, development, mobile optimisation, basic SEO, and a contact form. Higher tiers add more pages, local SEO, Google Business setup, and revision rounds.",
      },
    },
    {
      "@type": "Question",
      name: "How fast is delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Starter plan can be delivered in as fast as 48 hours. Business plans take around 5 days, and Growth plans around 1 week. We'll confirm your timeline before we start.",
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
        text: "Yes. We can set you up with a simple content management system, or you can add a Care Plan and we'll handle all updates for you.",
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
