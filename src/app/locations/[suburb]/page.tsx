import { Metadata } from "next";
import { suburbs, suburbsBySlug } from "@/data/suburbs";
import SuburbPageClient from "./SuburbPageClient";

export function generateStaticParams() {
  return suburbs.map((s) => ({ suburb: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { suburb: string };
}): Metadata {
  const data = suburbsBySlug[params.suburb];
  const name = data?.name ?? params.suburb;
  return {
    title: `Website Design in ${name} | BuildSpark`,
    description: `BuildSpark builds fast, affordable websites for businesses in ${name}, Victoria. From $490. Tradies, cafes, mechanics and more.`,
    alternates: { canonical: `https://buildspark.com.au/locations/${params.suburb}` },
    openGraph: {
      title: `Website Design in ${name} | BuildSpark`,
      description: `BuildSpark builds fast, affordable websites for businesses in ${name}, Victoria. From $490.`,
      url: `https://buildspark.com.au/locations/${params.suburb}`,
      siteName: "BuildSpark",
      type: "website",
    },
  };
}

export default function SuburbPage({
  params,
}: {
  params: { suburb: string };
}) {
  const data = suburbsBySlug[params.suburb];
  const name = data?.name ?? params.suburb;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://buildspark.com.au",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: "https://buildspark.com.au/locations",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: name,
        item: `https://buildspark.com.au/locations/${params.suburb}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SuburbPageClient
        name={name}
        region={data?.region ?? ""}
        description={data?.description ?? ""}
        industries={data?.industries ?? []}
        suburbSlug={params.suburb}
      />
    </>
  );
}
