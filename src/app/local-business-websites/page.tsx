import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PainLetter } from "@/components/sections/PainLetter";
import { Stats } from "@/components/sections/Stats";
import { WhoWeBuildFor } from "@/components/sections/WhoWeBuildFor";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Urgency } from "@/components/sections/Urgency";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCTA } from "@/components/sections/StickyMobileCTA";

export const metadata: Metadata = {
  title: "Local Business Websites Victoria | BuildSpark",
  description:
    "BuildSpark builds fast, conversion-focused websites for Victorian local businesses. Clear service pages, local SEO, trust proof, forms, and tracking for $250 per month.",
  alternates: {
    canonical: "https://buildspark.com.au/local-business-websites",
  },
  openGraph: {
    title: "Local Business Websites Victoria | BuildSpark",
    description:
      "Fast, practical websites for Victorian local businesses that need more calls, more enquiries, and more trust.",
    url: "https://buildspark.com.au/local-business-websites",
    siteName: "BuildSpark",
    images: [
      {
        url: "https://buildspark.com.au/images/website-call-now.webp",
        width: 1200,
        height: 630,
        alt: "BuildSpark local business website example",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Business Websites Victoria | BuildSpark",
    description:
      "Fast, practical websites for Victorian local businesses. $250 per month.",
    images: ["https://buildspark.com.au/images/website-call-now.webp"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Local Business Websites Victoria",
  url: "https://buildspark.com.au/local-business-websites",
  description:
    "BuildSpark builds fast, conversion-focused websites for Victorian local businesses.",
  isPartOf: {
    "@type": "WebSite",
    name: "BuildSpark",
    url: "https://buildspark.com.au",
  },
};

export default function LocalBusinessWebsitesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <PainLetter />
        <Stats />
        <WhoWeBuildFor />
        <BeforeAfter />
        <HowItWorks />
        <Testimonials />
        <Urgency />
        <Footer />
        <StickyMobileCTA />
      </main>
    </>
  );
}
