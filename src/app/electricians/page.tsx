import type { Metadata } from "next";
import TradeLandingPageClient from "@/components/trades/TradeLandingPageClient";
import { tradeConfigs } from "@/lib/trade-landing-data";

const cfg = tradeConfigs.electrician;

export const metadata: Metadata = {
  title: cfg.seoTitle,
  description: cfg.seoDescription,
  alternates: { canonical: "/electricians" },
};

export default function Page() {
  return <TradeLandingPageClient trade="electrician" />;
}
