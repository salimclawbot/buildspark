import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website Quiz | BuildSpark",
  description:
    "Answer 5 quick questions and get a custom website quote for your Victorian business. No calls. No pressure. Results in 24 hours.",
  alternates: { canonical: "https://buildspark.com.au/quiz" },
  openGraph: {
    title: "Free Website Quiz | BuildSpark",
    description:
      "5 questions. Custom quote in 24 hours. No calls.",
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
