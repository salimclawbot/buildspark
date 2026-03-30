import type { Metadata } from "next";
import TradeLandingPageClient from "@/components/trades/TradeLandingPageClient";
import { tradeConfigs } from "@/lib/trade-landing-data";

const cfg = tradeConfigs.painter;

export const metadata: Metadata = {
  title: cfg.seoTitle,
  description: cfg.seoDescription,
  alternates: { canonical: "/painters" },
};

export default function Page() {
  return <TradeLandingPageClient trade="painter" />;
}
