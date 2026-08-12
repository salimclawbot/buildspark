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
    <main className="min-h-screen bg-[#f5f2e8] text-[#141414]">
      <Navbar ctaLabel="Get Started" ctaHref="/quiz" singleCta tone="light" />

      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_12%,rgba(217,255,69,0.78),transparent_22%),radial-gradient(circle_at_14%_20%,rgba(30,73,255,0.16),transparent_28%),linear-gradient(180deg,#fffdf5,#f5f2e8)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#1e49ff]">One managed website plan</p>
            <h1 className="mt-5 text-7xl font-black leading-[0.86] tracking-tight sm:text-9xl">
              $250
              <span className="block text-4xl leading-none sm:text-6xl">per month.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-[#141414]/70">
              Website, hosting, care, changes, content, SEO foundations and lead tracking. No $3,000-$5,000 upfront website bill.
            </p>
            <Button asChild size="lg" className="mt-9 h-14 rounded-full bg-[#141414] px-8 text-base text-white hover:bg-[#1e49ff]">
              <Link href="/quiz">Check if your business fits →</Link>
            </Button>
          </div>
          <div className="border border-[#141414]/12 bg-[#141414] p-6 text-white shadow-[0_24px_80px_rgba(20,20,20,0.18)]">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d9ff45]">Plain English</p>
            <h2 className="mt-5 text-4xl font-black leading-none">You are not renting a template.</h2>
            <p className="mt-5 text-base leading-7 text-white/65">
              You are paying for the website to be built, hosted, improved, protected and measured each month.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fffdf5] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px bg-[#141414]/14 sm:grid-cols-2 lg:grid-cols-4">
            {inclusions.map((item) => (
              <div key={item.label} className="bg-[#fffdf5] p-6">
                <item.icon className="h-7 w-7 text-[#1e49ff]" />
                <p className="mt-8 text-xl font-black">{item.label}</p>
                <p className="mt-3 text-sm leading-6 text-[#141414]/62">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#d8dee8] py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b8642f]">Scope stays honest</p>
            <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-tight">
              Simple plan. No pretend unlimited everything.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#141414]/70">
            Final inclusions are confirmed after the quiz so the project fits the plan. Larger builds, ecommerce, booking systems, complex integrations or heavy custom functionality may need separate scope.
          </p>
        </div>
      </section>

      <Footer variant="studio" />
    </main>
  );
}
