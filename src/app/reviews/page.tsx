import { Metadata } from "next";
import ReviewsClient from "./ReviewsClient";

export const metadata: Metadata = {
  title: "Reviews & Testimonials | BuildSpark",
  description:
    "See what 50+ Victorian business owners say about their BuildSpark websites. Real reviews from tradies, cafes, and mechanics.",
  alternates: { canonical: "https://buildspark.com.au/reviews" },
  openGraph: {
    title: "Reviews & Testimonials | BuildSpark",
    description:
      "See what 50+ Victorian business owners say about their BuildSpark websites. Real reviews from tradies, cafes, and mechanics.",
    url: "https://buildspark.com.au/reviews",
    siteName: "BuildSpark",
    type: "website",
  },
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}
