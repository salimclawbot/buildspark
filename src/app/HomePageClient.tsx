"use client";

import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  FileText,
  Globe2,
  Layers3,
  MousePointerClick,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";

const industries = [
  "Dentists",
  "Surgeons",
  "Equine",
  "Builders",
  "Cafes",
  "Security",
  "Clinics",
  "Consultants",
  "Tradies",
  "Restaurants",
  "Workshops",
  "Local brands",
];

const inclusions = [
  { icon: Layers3, title: "A custom website system", text: "Homepage, service structure, calls-to-action, trust sections and mobile layouts built around how your customer decides." },
  { icon: Globe2, title: "Hosting and launch handled", text: "Domain setup support, SSL, hosting, redirects and launch checks are looked after so you are not left in the weeds." },
  { icon: RefreshCcw, title: "Monthly changes", text: "New service? New photos? Updated wording? Send it through and we keep the website current." },
  { icon: FileText, title: "Monthly content lift", text: "A practical article, service-page improvement, local SEO update, or useful page refresh each month." },
  { icon: ShieldCheck, title: "Security and backups", text: "Basic protection, uptime-minded hosting, backups and recovery care so your site is not neglected after launch." },
  { icon: BarChart3, title: "Lead tracking", text: "GA4, Meta Pixel, form submissions, button clicks and lead actions tracked so the website is measurable." },
];

const proof = [
  "No $3,000-$5,000 upfront bill",
  "$250/month website, hosting, care and tracking",
  "Built for serious local businesses, not one industry only",
  "Designed to make visitors trust you before they enquire",
];

const process = [
  ["01", "Tell us the business", "Industry, location, offer, photos, current website and what you want more of."],
  ["02", "We design the buying path", "The pages, sections, CTAs, proof and wording your visitor needs before they contact you."],
  ["03", "We build and launch", "A polished, fast, mobile-ready site with tracking and SEO foundations set up."],
  ["04", "We keep it alive", "Monthly improvements, changes, care and content so the site does not go stale."],
];

export function HomePageClient() {
  return (
    <main className="min-h-screen bg-[#f5f2e8] text-[#141414]">
      <Navbar ctaLabel="Get Started" ctaHref="/quiz" singleCta tone="light" />

      <section className="relative overflow-hidden pt-28 sm:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_16%,rgba(217,255,69,0.8),transparent_22%),radial-gradient(circle_at_12%_12%,rgba(30,73,255,0.16),transparent_28%),linear-gradient(180deg,#fffdf5,#f5f2e8)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1e49ff]/20 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#1e49ff]">
                <Sparkles className="h-4 w-4" />
                Managed websites for ambitious local businesses
              </div>
              <h1 className="mt-7 max-w-4xl text-[4rem] font-black leading-[0.86] tracking-tight sm:text-[6.5rem] lg:text-[7.3rem]">
                Be the business they trust first.
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-8 text-[#141414]/72">
                BuildSpark designs, builds and looks after premium websites for{" "}
                <strong className="font-black text-[#141414]">$250 per month</strong>. Clear offer. Serious presentation. Tracking, hosting, security, changes and content included.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-14 rounded-full bg-[#141414] px-8 text-base text-white shadow-[0_18px_45px_rgba(20,20,20,0.18)] hover:bg-[#1e49ff]">
                  <Link href="/quiz">
                    Start your website plan <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 rounded-full border-[#141414]/20 bg-white/60 px-8 text-base text-[#141414] hover:bg-white">
                  <Link href="#portfolio-system">See the standard</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-8 -top-8 hidden h-48 w-48 rounded-full bg-[#d9ff45] blur-2xl lg:block" />
              <div className="relative border border-[#141414]/12 bg-[#141414] p-4 shadow-[0_30px_90px_rgba(20,20,20,0.22)]">
                <div className="mb-4 flex items-center justify-between text-white/50">
                  <span className="text-xs font-black uppercase tracking-[0.18em]">BuildSpark control room</span>
                  <span className="h-3 w-3 rounded-full bg-[#d9ff45]" />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                  <Image
                    src="/images/buildspark-home-hero.png"
                    alt="BuildSpark websites shown on laptop and phone"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
                <div className="grid gap-px bg-white/10 sm:grid-cols-3">
                  {[
                    ["$250", "per month"],
                    ["GA4", "lead tracking"],
                    ["Care", "included"],
                  ].map(([value, label]) => (
                    <div key={label} className="bg-[#141414] p-4">
                      <div className="text-2xl font-black text-white">{value}</div>
                      <div className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-8 left-4 max-w-sm border border-[#141414]/10 bg-[#d9ff45] p-5 shadow-[0_20px_50px_rgba(20,20,20,0.12)]">
                <p className="text-sm font-black uppercase tracking-[0.16em]">The promise</p>
                <p className="mt-2 text-base font-bold leading-6">A website that looks premium, explains fast and gets measured.</p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {proof.map((item) => (
              <div key={item} className="flex items-start gap-3 border border-[#141414]/10 bg-white/55 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1e49ff]" />
                <span className="font-semibold leading-6 text-[#141414]/75">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#141414]/10 bg-[#141414] py-5 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-4 sm:px-6 lg:px-8">
          {industries.map((industry) => (
            <span key={industry} className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/75">
              {industry}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-[#fffdf5] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b8642f]">$250 per month</p>
            <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">
              One monthly website department.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#141414]/65">
              Not a disposable template. Not an agency bill. A proper website, plus the ongoing care that keeps it useful.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {inclusions.map((item) => (
              <div key={item.title} className="border border-[#141414]/10 bg-[#f5f2e8] p-6">
                <item.icon className="h-7 w-7 text-[#1e49ff]" />
                <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#141414]/62">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio-system" className="overflow-hidden bg-[#d8dee8] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#1e49ff]">Not one-template-fits-all</p>
              <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">
                Different industries should not look the same.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#141414]/68">
                A surgeon, a cafe, a horse business and a builder need different proof, tone, photography and buying paths. We build the website around that reality.
              </p>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden border border-[#141414]/12 bg-white shadow-[0_30px_90px_rgba(20,20,20,0.16)]">
              <Image
                src="/images/buildspark-portfolio-grid.png"
                alt="Portfolio grid showing different BuildSpark website directions"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2e8] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative aspect-[16/11] overflow-hidden border border-[#141414]/12 bg-white shadow-[0_28px_80px_rgba(20,20,20,0.12)]">
            <Image
              src="/images/buildspark-monthly-care.png"
              alt="Business owner viewing website leads and monthly care"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#b8642f]">Built, launched, looked after</p>
            <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">
              You should not need to become a website person.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#141414]/68">
              You run the business. We keep the website moving: hosting, updates, security, backups, monthly changes, content and tracking.
            </p>
            <Button asChild size="lg" className="mt-8 h-14 rounded-full bg-[#1e49ff] px-8 text-base text-white hover:bg-[#141414]">
              <Link href="/pricing">
                See what is included <CircleDollarSign className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#141414] py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#d9ff45]">How it works</p>
            <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">
              Four decisions, then we build the thing properly.
            </h2>
          </div>
          <div className="mt-12 grid gap-px bg-white/14 lg:grid-cols-4">
            {process.map(([number, title, text]) => (
              <div key={number} className="bg-[#141414] p-6">
                <div className="text-sm font-black text-[#d9ff45]">{number}</div>
                <h3 className="mt-8 text-2xl font-black">{title}</h3>
                <p className="mt-4 text-base leading-7 text-white/62">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-14 rounded-full bg-[#d9ff45] px-8 text-base text-[#141414] hover:bg-white">
              <Link href="/quiz">
                Get started <MousePointerClick className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 rounded-full border-white/20 bg-white/5 px-8 text-base text-white hover:bg-white/10">
              <Link href="/services">Explore industries</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer variant="studio" />
    </main>
  );
}
