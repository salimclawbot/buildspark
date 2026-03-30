import type { Metadata } from "next";
import TradeLandingPageClient from "@/components/trades/TradeLandingPageClient";
import { tradeConfigs } from "@/lib/trade-landing-data";

const cfg = tradeConfigs.builder;

export const metadata: Metadata = {
  title: cfg.seoTitle,
  description: cfg.seoDescription,
  alternates: { canonical: "/builders" },
};

export default function Page() {
  return <TradeLandingPageClient trade="builder" />;
}
