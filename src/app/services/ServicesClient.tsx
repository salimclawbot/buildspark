"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  Coffee,
  Hammer,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Utensils,
} from "lucide-react";

const services = [
  {
    title: "Tradies",
    description: "Plumbers, electricians, builders, painters, landscapers and service crews that need more calls and quote requests.",
    href: "/services/tradies",
    icon: Hammer,
    accent: "from-amber-500 to-orange-600",
  },
  {
    title: "Clinics & Specialists",
    description: "Medical, dental, cosmetic, allied health and specialist practices that need trust before the first appointment.",
    href: "/quiz",
    icon: Stethoscope,
    accent: "from-cyan-500 to-blue-600",
  },
  {
    title: "Equine & Horse Businesses",
    description: "Horse trainers, agistment, equine therapy, breeders and rural brands that need to look established online.",
    href: "/quiz",
    icon: Sparkles,
    accent: "from-lime-500 to-emerald-600",
  },
  {
    title: "Cafes & Hospitality",
    description: "Cafes, restaurants, venues and food businesses with menus, bookings, local search and a stronger first impression.",
    href: "/services/cafes",
    icon: Coffee,
    accent: "from-rose-500 to-red-600",
  },
  {
    title: "Bakeries & Food Brands",
    description: "Showcase products, opening hours, wholesale enquiries and the reasons customers should visit or order.",
    href: "/services/bakeries",
    icon: Utensils,
    accent: "from-yellow-500 to-amber-600",
  },
  {
    title: "Mechanics & Workshops",
    description: "Make your workshop look reliable, show your services clearly, and make booking or calling simple.",
    href: "/services/mechanics",
    icon: Building2,
    accent: "from-zinc-500 to-zinc-800",
  },
  {
    title: "Professional Services",
    description: "Bookkeepers, consultants, advisors and local experts who need credibility, clean service pages and lead capture.",
    href: "/services/bookkeepers",
    icon: ShieldCheck,
    accent: "from-violet-500 to-indigo-600",
  },
  {
    title: "Security, CCTV & Contractors",
    description: "Commercial and residential service businesses where trust, response time and proof win the enquiry.",
    href: "/quiz",
    icon: Camera,
    accent: "from-emerald-500 to-teal-700",
  },
  {
    title: "Other Local Business",
    description: "If your customers check you online before they call, we can build a website around that decision.",
    href: "/quiz",
    icon: HeartPulse,
    accent: "from-fuchsia-500 to-pink-700",
  },
];

const inclusions = [
  "Website design and build",
  "Hosting and domain setup support",
  "Monthly changes and page updates",
  "Security, SSL and backups",
  "Monthly article or content improvement",
  "GA4, Meta Pixel and lead tracking",
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function ServicesClient() {
  return (
    <main className="min-h-screen bg-[#f7f7f4] text-zinc-950">
      <Navbar ctaLabel="Get Started" ctaHref="/quiz" singleCta tone="light" />

      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(245,158,11,0.24),transparent_32%),radial-gradient(circle_at_90%_20%,rgba(15,23,42,0.12),transparent_28%),linear-gradient(180deg,#fff,#f7f7f4)]" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <motion.div
          initial={false}
          className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-600">
                Premium managed websites
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight sm:text-7xl">
                Built for the business your customers are checking out.
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-700">
                Trades, clinics, cafes, equine brands, professional services and local businesses. One sharp website plan: $250 per month with hosting, care, updates and lead tracking included.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-14 rounded-none px-8 text-base">
                  <Link href="/quiz">Get Started →</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 rounded-none border-zinc-300 bg-white/70 px-8 text-base text-zinc-950 hover:bg-white">
                  <Link href="/portfolio">View Recent Work</Link>
                </Button>
              </div>
            </div>
            <div className="border border-zinc-200 bg-zinc-950 p-6 text-white shadow-2xl shadow-zinc-950/10">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-400">
                What every site is designed to do
              </p>
              <div className="mt-6 grid gap-4">
                {["Make you look established", "Explain what you do quickly", "Build trust before the call", "Track real leads and enquiries"].map((item) => (
                  <div key={item} className="flex items-center gap-3 border border-white/10 bg-white/[0.04] p-4">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-400" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-600">
                Industries
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-5xl">
                Different businesses. Same goal: more trust, better enquiries.
              </h2>
            </div>
            <p className="max-w-md text-zinc-600">
              Each site is shaped around how your customer decides: proof, location, service clarity, speed, and the next step.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial={false}
                viewport={{ once: true }}
              >
                <Link href={service.href} className="block h-full">
                  <div className="group relative flex h-full min-h-[270px] flex-col overflow-hidden border border-zinc-200 bg-[#f7f7f4] p-6 transition-all hover:-translate-y-1 hover:border-zinc-950 hover:shadow-2xl hover:shadow-zinc-950/10">
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.accent}`} />
                    <div className="mb-8 flex items-center justify-between">
                      <div className="grid h-12 w-12 place-items-center bg-zinc-950 text-white">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-black text-zinc-950 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-zinc-600 leading-7">{service.description}</p>
                    <span className="mt-auto pt-8 text-sm font-black uppercase tracking-[0.16em] text-amber-600">
                      See fit
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-16 text-white sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-400">
              $250/month plan
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Built, hosted, protected, updated and tracked.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-300">
              This is not just a page online. It is the website system your business uses to look better, explain faster, and capture more real enquiries.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {inclusions.map((item) => (
              <div key={item} className="border border-white/10 bg-white/[0.04] p-5">
                <CheckCircle2 className="h-5 w-5 text-amber-400" />
                <p className="mt-4 font-bold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f4] py-16 sm:py-24">
        <motion.div
          initial={false}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl px-4 text-center"
        >
          <h2 className="text-4xl font-black sm:text-5xl">
            Not sure where your business fits?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            Start with the quiz. We&apos;ll use your industry, services, location and goals to shape the right website structure.
          </p>
          <Button asChild size="lg" className="mt-8 h-14 rounded-none px-10 text-base">
            <Link href="/quiz">Start the Website Quiz →</Link>
          </Button>
        </motion.div>
      </section>

      <div className="bg-zinc-950 text-white">
        <Footer />
      </div>
    </main>
  );
}
