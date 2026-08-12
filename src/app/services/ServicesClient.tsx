"use client";

import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Camera,
  Coffee,
  Hammer,
  HeartPulse,
  Landmark,
  MonitorSmartphone,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Wheat,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";

const services = [
  ["Tradies", "Plumbers, electricians, builders, painters, landscapers and service crews that need more calls and quote requests.", "/services/tradies", Hammer],
  ["Clinics & Specialists", "Medical, dental, cosmetic, allied health and specialist practices where trust has to land before the appointment.", "/quiz", Stethoscope],
  ["Equine & Horse Businesses", "Horse trainers, agistment, breeders, therapists and rural brands that need to look established online.", "/quiz", Sparkles],
  ["Cafes & Hospitality", "Cafes, restaurants, venues and food businesses with menus, bookings, opening hours and local search needs.", "/services/cafes", Coffee],
  ["Bakeries & Food Brands", "Show products, wholesale enquiries, opening hours and the reasons customers should visit or order.", "/services/bakeries", Wheat],
  ["Mechanics & Workshops", "Make your workshop feel reliable, explain the services clearly, and make booking or calling simple.", "/services/mechanics", Building2],
  ["Professional Services", "Bookkeepers, consultants, advisors and local experts who need credibility, service pages and lead capture.", "/services/bookkeepers", Landmark],
  ["Security, CCTV & Contractors", "Commercial and residential service teams where proof, response time and trust win the enquiry.", "/blog/security-cctv-installer-websites-lead-generator", Camera],
  ["Other Local Businesses", "If your customers check you online before they call, we can build a website around that decision.", "/quiz", HeartPulse],
] as const;

const outcomes = [
  "Look established immediately",
  "Explain the offer in plain English",
  "Show proof close to the decision",
  "Make calling or enquiring obvious",
  "Track the actions that matter",
];

export default function ServicesClient() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar ctaLabel="Get Started" ctaHref="/quiz" singleCta />

      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(245,158,11,0.24),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.92),hsl(var(--background)))]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-400">
                Website systems by industry
              </p>
              <h1 className="mt-5 max-w-5xl text-6xl font-black leading-[0.9] tracking-tight sm:text-8xl">
                One price. Different playbooks.
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-8 text-zinc-400">
                The $250/month plan stays simple. The website strategy changes for the business: clinics need reassurance, tradies need speed, cafes need appetite, and specialists need authority.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-14 rounded-none px-8 text-base">
                  <Link href="/quiz">Find my website plan <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 rounded-none border-zinc-700 bg-transparent px-8 text-base text-white hover:bg-white hover:text-black">
                  <Link href="/portfolio">View work</Link>
                </Button>
              </div>
            </div>
            <div className="border border-white/10 bg-white/[0.04] p-6 text-white shadow-2xl shadow-black/30">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-400">Every BuildSpark site is built to</p>
              <div className="mt-6 grid gap-px bg-white/12">
                {outcomes.map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-background p-4">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-amber-500" />
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-black/25 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-400">Industries</p>
            <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">
              The layout should match how your buyer thinks.
            </h2>
          </div>
          <div className="mt-12 grid gap-px bg-zinc-800 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, description, href, Icon]) => (
              <Link key={title} href={href} className="group bg-background p-6 transition hover:bg-card">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-amber-500/12 ring-1 ring-amber-500/30">
                  <Icon className="h-7 w-7 text-amber-500" />
                </div>
                <h3 className="mt-10 text-3xl font-black tracking-tight">{title}</h3>
                <p className="mt-4 min-h-[112px] text-base leading-7 text-zinc-400">{description}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-amber-400">
                  Explore fit <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-400">$250/month</p>
            <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl">
              Same managed care. Different conversion path.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Every plan includes website design, hosting, domain setup support, monthly changes, content support, security, backups and lead analytics. The difference is how we shape the website around the customer you want.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [MonitorSmartphone, "Mobile-first layouts"],
              [ShieldCheck, "Trust and proof sections"],
              [MousePointerClick, "Clear enquiry paths"],
              [BadgeCheck, "SEO foundations"],
            ].map(([Icon, label]) => (
              <div key={label as string} className="border border-zinc-800 bg-card p-6">
                <Icon className="h-7 w-7 text-amber-500" />
                <p className="mt-8 text-2xl font-black">{label as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-black/35 px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-400">Start here</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
              Tell us the business. We will map the website.
            </h2>
          </div>
          <Button asChild size="lg" className="h-14 rounded-none px-8 text-base">
            <Link href="/quiz">Start the website quiz <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
