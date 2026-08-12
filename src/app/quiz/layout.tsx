import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Plan Quiz | $250/Month | BuildSpark",
  description:
    "Take the BuildSpark website quiz and get the right $250/month website plan for your local business, clinic, trade, hospitality, equine, or professional service.",
  alternates: { canonical: "https://buildspark.com.au/quiz" },
  openGraph: {
    title: "Website Plan Quiz | $250/Month | BuildSpark",
    description:
      "Answer a few quick questions and get the right $250/month website plan for your business.",
    url: "https://buildspark.com.au/quiz",
    siteName: "BuildSpark",
    type: "website",
  },
};

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
