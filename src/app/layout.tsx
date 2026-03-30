import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#F59E0B",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://buildspark.com.au"),
  title: "BuildSpark | Victorian Web Design for Local Business",
  description:
    "Fast, sharp websites for Victorian local businesses. Tradies, cafes, bookkeepers, mechanics. More calls, more customers. From $490.",
  keywords: [
    "web design",
    "Victoria",
    "local business",
    "website builder",
    "tradies",
    "small business website",
    "SEO",
    "Melbourne",
  ],
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BuildSpark | Websites for Victorian Local Businesses",
    description:
      "Fast, affordable websites for tradies, cafes, bakeries, mechanics and bookkeepers across Victoria. From $490.",
    url: "https://buildspark.com.au",
    siteName: "BuildSpark",
    images: [
      {
        url: "https://buildspark.com.au/images/hero-workspace.webp",
        width: 1200,
        height: 630,
        alt: "BuildSpark web design for Victorian businesses",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildSpark | Websites for Victorian Local Businesses",
    description:
      "Fast, affordable websites for local Victorian businesses. From $490.",
    images: ["https://buildspark.com.au/images/hero-workspace.webp"],
  },
  verification: {
    google: "L0QRW0XHwh_BFW_ysH_Uz2onFYlS-IDGFnDcdXHOr-4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "BuildSpark",
              description:
                "Fast, affordable websites for Victorian local businesses",
              url: "https://buildspark.com.au",
              telephone: "1300775271",
              email: "info@buildspark.com.au",
              areaServed: {
                "@type": "State",
                name: "Victoria",
                containedIn: "Australia",
              },
              priceRange: "$490 - $1,290",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "50",
                bestRating: "5",
              },
              address: {
                "@type": "PostalAddress",
                addressRegion: "Victoria",
                addressCountry: "AU",
              },
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "BuildSpark",
              url: "https://buildspark.com.au",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://buildspark.com.au/locations?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-white`}>
        {children}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QDDB8YSWQ3"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QDDB8YSWQ3');
        `}
      </Script>
      </body>
    </html>
  );
}
