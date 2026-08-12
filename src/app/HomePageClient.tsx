"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  FileText,
  Globe2,
  MessageSquareText,
  RefreshCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";

const industries = [
  "Tradies",
  "Dentists",
  "Surgeons",
  "Equine & horse care",
  "Cafes",
  "Restaurants",
  "Builders",
  "Security & CCTV",
  "Excavation",
  "Clinics",
  "Mechanics",
  "Professional services",
];

const included = [
  { icon: Wrench, title: "Website design and build", text: "A sharp site built around your industry, your offer, and the enquiries you want." },
  { icon: Globe2, title: "Hosting and domain help", text: "We handle the setup, hosting, SSL, and launch details so you are not left guessing." },
  { icon: ShieldCheck, title: "Security and backups", text: "Monitoring, protection, and recovery basics are included so your site stays looked after." },
  { icon: RefreshCcw, title: "Monthly changes", text: "Need a service, photo, offer, or page section updated? Send it through and we sort it." },
  { icon: FileText, title: "Monthly article or page update", text: "Keep the site fresh with useful content, service-page improvements, or a practical local article." },
  { icon: BarChart3, title: "Lead tracking", text: "Calls, clicks, form starts, and lead submissions are tracked so you can see what is working." },
  { icon: Search, title: "SEO foundations", text: "Clean structure, local wording, metadata, sitemap, speed, and sensible pages from day one." },
  { icon: MessageSquareText, title: "Support from humans", text: "You deal with people who understand small business, not a faceless template platform." },
];

const process = [
  { title: "Take the quiz", text: "Tell us your industry, location, offer, current website, and what you want more of." },
  { title: "We map the plan", text: "We recommend the pages, messaging, colours, CTAs, and lead flow that fit your business." },
  { title: "We build it", text: "You get a modern website built for trust, mobile speed, Google, and enquiries." },
  { title: "We keep improving it", text: "Each month, we handle care, changes, and content so the website does not go stale." },
];

const trustPoints = [
  "No $3,000-$5,000 upfront website bill",
  "Built for real enquiries, not just pretty screenshots",
  "Works for service businesses, clinics, trades, hospitality, equine and more",
  "Simple $250/month offer with hosting, care, updates, and tracking",
];

export function HomePageClient() {
  return (
    <main className="min-h-screen bg-[#f7f7f4] text-zinc-950">
      <Navbar ctaLabel="Get Started" ctaHref="/quiz" singleCta />

      <section className="relative overflow-hidden bg-[#050505] pt-28 text-white sm:pt-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(245,158,11,0.22),transparent_30%),radial-gradient(circle_at_90%_0%,rgba(255,255,255,0.12),transparent_26%),linear-gradient(135deg,#050505_0%,#11100d_50%,#050505_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#f7f7f4]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:px-8 lg:pb-28">
          <motion.div
            initial={false}
            className="flex flex-col justify-center"
          >
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-amber-200 shadow-sm">
              <Sparkles className="h-4 w-4 text-amber-300" />
              Managed websites for serious operators
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Look established before they ever call.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
              BuildSpark builds, hosts, protects, updates, and improves premium websites for{" "}
              <strong className="text-white">$250 per month</strong>. No big upfront agency invoice. No neglected website. Just a polished online presence that makes the right people enquire.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-none !bg-amber-500 px-8 text-base !text-black shadow-xl shadow-amber-500/25 hover:!bg-amber-400">
                <Link href="/quiz">
                  Start the Website Quiz <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 rounded-none border-white/20 bg-white/5 px-8 text-base text-white hover:bg-white/10">
                <Link href="#work">See What We Build</Link>
              </Button>
            </div>
            <div className="mt-7 grid gap-3 text-sm font-medium text-zinc-300 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 border border-white/10 bg-white/[0.04]">
              {[
                ["$250", "per month"],
                ["8", "new builds"],
                ["GA4", "lead tracked"],
              ].map(([value, label]) => (
                <div key={label} className="border-r border-white/10 p-4 last:border-r-0">
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-500">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={false}
            className="relative"
          >
            <div className="relative overflow-hidden border border-white/15 bg-white/[0.06] p-3 shadow-2xl shadow-amber-500/10">
              <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">BuildSpark studio</span>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/images/buildspark-home-hero.png"
                alt="BuildSpark websites shown across laptop and phone for multiple industries"
                fill
                priority
                className="object-cover contrast-125 saturate-110"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              </div>
            </div>
            <div className="absolute -bottom-8 left-6 max-w-xs border border-amber-300/30 bg-[#10100d] p-5 shadow-2xl shadow-black/40">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-300">Included every month</p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">Hosting, updates, content, backups, security and conversion tracking.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-[#f7f7f4] py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-4 sm:px-6 lg:px-8">
          {industries.map((industry) => (
            <span key={industry} className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700">
              {industry}
            </span>
          ))}
        </div>
      </section>

      <section id="pricing" className="bg-zinc-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">$250 per month</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Not just a website. The full care stack.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-300">
                A cheap site usually becomes your problem after launch. BuildSpark keeps the important parts under one roof so your website keeps working while you run the business.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <div key={item.title} className="border border-white/10 bg-white/[0.04] p-5">
                  <item.icon className="h-6 w-6 text-amber-400" />
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Broader than one industry</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
              Your business should feel like the obvious choice.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              A dental clinic, a horse care business, a surgeon, a builder, and a cafe all need different words, images, sections, and proof. That is the point. We make the site fit the business.
            </p>
          </div>
          <div className="relative mt-12 aspect-[16/9] overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-900/10">
            <Image
              src="/images/buildspark-portfolio-grid.png"
              alt="Portfolio grid of different BuildSpark website styles for multiple industries"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f0eee8] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative aspect-[16/10] overflow-hidden border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10">
            <Image
              src="/images/buildspark-monthly-care.png"
              alt="Business owner reviewing website leads with monthly care features"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">Built, launched, looked after</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
              You should not need to become a website person.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-700">
              Most business owners do not want to chase hosting renewals, security problems, broken forms, page edits, SEO basics, or analytics setup. For $250 per month, we keep the core website machine moving.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Hosting", "Domain setup", "Security", "Backups", "Monthly changes", "Monthly content", "Lead tracking", "SEO basics"].map((item) => (
                <div key={item} className="flex items-center gap-3 border border-zinc-200 bg-white p-4 font-semibold text-zinc-800">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">How it works</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
                Start with the quiz. We will map the right website plan.
              </h2>
              <p className="mt-5 text-lg leading-8 text-zinc-600">
                The quiz changes the conversation. Instead of selling you a random package, we ask what business you run, what customers you want, what is broken now, and what needs to happen next.
              </p>
              <Button asChild size="lg" className="mt-8 h-14 rounded-none !bg-amber-500 px-8 text-base !text-black shadow-xl shadow-amber-500/25 hover:!bg-amber-400">
                <Link href="/quiz">
                  Start the Website Quiz <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-4">
              {process.map((step, index) => (
                <div key={step.title} className="grid gap-4 border border-zinc-200 p-5 sm:grid-cols-[4rem_1fr]">
                  <div className="text-4xl font-black text-amber-500">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <h3 className="text-xl font-black text-zinc-950">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-zinc-600">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border border-white/10 bg-white/[0.04] p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-3 flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <h2 className="text-3xl font-black sm:text-4xl">Ready for a website that looks serious and gets measured?</h2>
            <p className="mt-3 text-zinc-300">Take the quiz and we will check the best fit for this month automatically.</p>
          </div>
          <Button asChild size="lg" className="h-14 shrink-0 rounded-none !bg-amber-500 px-8 text-base !text-black shadow-xl shadow-amber-500/25 hover:!bg-amber-400">
            <Link href="/quiz">
              Get Started <Clock className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <div className="bg-zinc-950 text-white">
        <Footer />
      </div>
    </main>
  );
}
