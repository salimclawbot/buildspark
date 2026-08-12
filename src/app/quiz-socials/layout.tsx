import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Management Quiz | BuildSpark",
  description:
    "Answer a few quick questions and choose a BuildSpark social media management plan from $250/month.",
  alternates: {
    canonical: "https://buildspark.com.au/quiz-socials",
  },
  openGraph: {
    title: "Social Media Management Quiz | BuildSpark",
    description:
      "Simple social media management plans for local businesses from $250/month.",
    url: "https://buildspark.com.au/quiz-socials",
    siteName: "BuildSpark",
    type: "website",
    images: [
      {
        url: "https://buildspark.com.au/images/website-call-now.webp",
        width: 1200,
        height: 630,
        alt: "BuildSpark social media and website support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Management Quiz | BuildSpark",
    description:
      "Choose a simple social media management plan from $250/month.",
    images: ["https://buildspark.com.au/images/website-call-now.webp"],
  },
};

export default function QuizSocialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
