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
  { icon: Wrench, label: "Website design and build", text: "A polished site shaped around your services, locations, proof and enquiry path." },
  { icon: Globe2, label: "Hosting and launch", text: "Hosting, SSL, redirects and domain setup support handled properly." },
  { icon: Lock, label: "Security basics", text: "Protection, monitoring-minded setup and sensible technical care." },
  { icon: ShieldCheck, label: "Backups and recovery", text: "A safer setup so your website is not left exposed after launch." },
  { icon: RefreshCcw, label: "Monthly changes", text: "Page edits, section updates, image swaps and practical improvements." },
  { icon: FileText, label: "Monthly content lift", text: "An article, service page improvement or useful local SEO update." },
  { icon: BarChart3, label: "Lead tracking", text: "GA4, Meta Pixel, form submissions, calls and button clicks tracked." },
  { icon: CheckCircle2, label: "SEO foundations", text: "Clean structure, metadata, sitemap, speed and local search basics." },
];

export default function PricingClient() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar ctaLabel="Get Started" ctaHref="/quiz" singleCta />

      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_12%,rgba(245,158,11,0.24),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.92),hsl(var(--background)))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-400">One managed website plan</p>
            <h1 className="mt-5 text-7xl font-black leading-[0.86] tracking-tight sm:text-9xl">
              $250
              <span className="block text-4xl leading-none text-amber-500 sm:text-6xl">per month.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-zinc-400">
              Website, hosting, care, changes, content, SEO foundations and lead tracking. No $3,000-$5,000 upfront website bill.
            </p>
            <Button asChild size="lg" className="mt-9 h-14 rounded-none px-8 text-base">
              <Link href="/quiz">Check if your business fits →</Link>
            </Button>
          </div>
          <div className="border border-white/10 bg-white/[0.04] p-6 text-white shadow-2xl shadow-black/30">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-400">Plain English</p>
            <h2 className="mt-5 text-4xl font-black leading-none">You are not renting a template.</h2>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              You are paying for the website to be built, hosted, improved, protected and measured each month.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-black/25 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4">
            {inclusions.map((item) => (
              <div key={item.label} className="bg-background p-6">
                <item.icon className="h-7 w-7 text-amber-500" />
                <p className="mt-8 text-xl font-black">{item.label}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-400">Scope stays honest</p>
            <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-tight">
              Simple plan. No pretend unlimited everything.
            </h2>
          </div>
          <p className="text-lg leading-8 text-zinc-400">
            Final inclusions are confirmed after the quiz so the project fits the plan. Larger builds, ecommerce, booking systems, complex integrations or heavy custom functionality may need separate scope.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
