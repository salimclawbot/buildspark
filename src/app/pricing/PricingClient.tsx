"use client";

import {
  BarChart3,
  CheckCircle2,
  FileText,
  Globe2,
  Lock,
  RefreshCcw,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";

const inclusions = [
  { icon: Wrench, label: "Website design and build" },
  { icon: Globe2, label: "Hosting and domain setup support" },
  { icon: Lock, label: "SSL, security and protection basics" },
  { icon: ShieldCheck, label: "Backups and recovery care" },
  { icon: RefreshCcw, label: "Monthly changes and revisions" },
  { icon: FileText, label: "Monthly article or page update" },
  { icon: BarChart3, label: "GA4, Meta Pixel and lead tracking" },
  { icon: CheckCircle2, label: "SEO foundations and mobile speed" },
];

export default function PricingClient() {
  return (
    <main className="min-h-screen bg-[#f7f7f4] text-zinc-950">
      <Navbar ctaLabel="Get Started" ctaHref="/quiz" singleCta tone="light" />
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(245,158,11,0.22),transparent_30%),linear-gradient(180deg,#fff,#f7f7f4)]" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-600">
            One clear website plan
          </p>
          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">
            $250 per month.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-zinc-700">
            Your website, hosting, care, changes, content, SEO foundations, and lead tracking in one managed plan. No $3,000-$5,000 upfront website bill.
          </p>
          <Button asChild size="lg" className="mt-8 h-14 rounded-none px-9 text-base">
            <Link href="/quiz">Start the Website Quiz →</Link>
          </Button>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {inclusions.map((item) => (
              <div key={item.label} className="border border-zinc-200 p-5">
                <item.icon className="h-6 w-6 text-amber-600" />
                <p className="mt-4 text-base font-bold text-zinc-900">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-zinc-500">
            Final inclusions are confirmed after the quiz so we can check the size and fit of the project. Larger builds, ecommerce, booking systems, complex integrations, or heavy custom functionality may need a separate scope.
          </p>
        </div>
      </section>

      <div className="bg-zinc-950 text-white">
        <Footer />
      </div>
    </main>
  );
}
