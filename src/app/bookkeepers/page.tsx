import type { Metadata } from "next";
import TradeLandingPageClient from "@/components/trades/TradeLandingPageClient";
import { tradeConfigs } from "@/lib/trade-landing-data";

const cfg = tradeConfigs.bookkeeper;

export const metadata: Metadata = {
  title: cfg.seoTitle,
  description: cfg.seoDescription,
  alternates: { canonical: "/bookkeepers" },
};

export default function Page() {
  return <TradeLandingPageClient trade="bookkeeper" />;
}
