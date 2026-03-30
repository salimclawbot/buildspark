import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PainLetter } from "@/components/sections/PainLetter";
import { Stats } from "@/components/sections/Stats";
import { WhoWeBuildFor } from "@/components/sections/WhoWeBuildFor";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Urgency } from "@/components/sections/Urgency";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCTA } from "@/components/sections/StickyMobileCTA";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BuildSpark",
  url: "https://buildspark.com.au",
  telephone: "1300775271",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Victoria",
    addressCountry: "AU",
  },
  areaServed: {
    "@type": "State",
    name: "Victoria",
  },
  priceRange: "$490 - $1,290",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <PainLetter />
        <Stats />
        <WhoWeBuildFor />
        <BeforeAfter />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Urgency />
        <Footer />
        <StickyMobileCTA />
      </main>
    </>
  );
}
