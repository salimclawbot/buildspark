"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Lead, TradeKey, getRating, getReviews, getSuburb, getTradeLeads, tradeConfigs } from "@/lib/trade-landing-data";

gsap.registerPlugin(ScrollTrigger);

export default function TradeLandingPageClient({ trade }: { trade: TradeKey }) {
  const config = tradeConfigs[trade];
  const directoryRef = useRef<HTMLDivElement>(null);
  const painRef = useRef<HTMLDivElement>(null);

  const leads = useMemo(() => getTradeLeads(trade).slice(0, 12), [trade]);

  useEffect(() => {
    const cardNodes = directoryRef.current?.querySelectorAll(".directory-card");
    const painNodes = painRef.current?.querySelectorAll(".pain-card");

    if (cardNodes?.length) {
      gsap.from(cardNodes, {
        y: 40,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: directoryRef.current,
          start: "top 75%",
        },
      });
    }

    if (painNodes?.length) {
      gsap.from(painNodes, {
        y: 28,
        opacity: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: painRef.current,
          start: "top 78%",
        },
      });
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [trade]);

  return (
    <main className="bg-zinc-950 text-white">
      <section className="border-b border-white/10 px-4 pb-14 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <BlurFade>
            <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{config.heroTitle}</h1>
          </BlurFade>
          <BlurFade delay={0.08}>
            <p className="mt-4 max-w-3xl text-base text-zinc-300 sm:text-lg">{config.heroSubhead}</p>
          </BlurFade>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href={config.quizHref}>
              <ShimmerButton className="w-full bg-amber-500 px-7 py-3 text-sm font-semibold text-black sm:w-auto">Get My Free Website Audit -&gt;</ShimmerButton>
            </Link>
            <a href="#directory" className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3 text-sm font-medium text-white transition hover:border-white/40">
              Browse Local {config.nounPlural[0].toUpperCase() + config.nounPlural.slice(1)} ↓
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2 text-xs sm:text-sm">
            {[
              "⭐ 4.9/5 client rating",
              "✅ 200+ Melbourne businesses",
              "🚀 Live in 48 hours",
            ].map((pill) => (
              <span key={pill} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-zinc-200">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="directory" className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <BlurFade>
            <h2 className="text-2xl font-semibold sm:text-3xl">Melbourne&apos;s Best {config.nounPlural[0].toUpperCase() + config.nounPlural.slice(1)} - Rated & Reviewed</h2>
          </BlurFade>
          <div ref={directoryRef} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leads.map((lead) => (
              <BusinessCard key={lead.name} lead={lead} quizHref={config.quizHref} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-900/50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <BlurFade>
            <h2 className="text-2xl font-semibold sm:text-3xl">{config.problemHeading}</h2>
          </BlurFade>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <StatCard value={87} suffix="%" text="of Australians search online before hiring a tradie" />
            <StatCard value={34000} prefix="$" text="average annual revenue lost without a digital presence" />
            <StatCard value={3} suffix="x" text="more enquiries with a professional website" />
          </div>

          <div ref={painRef} className="mt-7 grid gap-4 md:grid-cols-3">
            {config.painPoints.map((point) => (
              <div key={point} className="pain-card rounded-2xl border border-white/10 bg-black/30 p-5 text-sm text-zinc-200">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-amber-300/20 bg-gradient-to-b from-amber-400/10 to-transparent p-6 sm:p-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">{config.pitchHeading}</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {[
              "Built in 48 hours",
              "Mobile-first, SEO-ready",
              "Includes Google Business Profile setup",
            ].map((feature) => (
              <div key={feature} className="rounded-xl border border-white/15 bg-black/30 p-4 text-sm text-zinc-200">{feature}</div>
            ))}
          </div>
          <p className="mt-6 text-lg font-semibold text-amber-200">From $490. Pay only when you love it.</p>
          <div className="mt-4">
            <Link href={config.quizHref}>
              <ShimmerButton className="bg-amber-500 px-8 py-3 text-sm font-semibold text-black">Start My Free Quiz -&gt;</ShimmerButton>
            </Link>
          </div>
          <p className="mt-3 text-sm text-zinc-300">No commitment. No contracts. Free preview first.</p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-900/40 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">What Local {config.nounPlural[0].toUpperCase() + config.nounPlural.slice(1)} Say</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {config.testimonials.map((testimonial, index) => (
              <BlurFade key={testimonial.author} delay={index * 0.05}>
                <div className="rounded-2xl border border-white/15 bg-black/30 p-5">
                  <p className="text-sm text-zinc-200">“{testimonial.quote}”</p>
                  <p className="mt-3 text-sm font-semibold text-amber-200">{testimonial.author}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">FAQ</h2>
          <div className="mt-6 space-y-4 text-sm text-zinc-200">
            <Faq q={`How much does a ${config.noun} website cost?`} a={`From $490 for a standard site, or $790 for a full pro build.`} />
            <Faq q="How long does it take?" a="You get a preview in 48 hours. Full build is usually 5 to 7 business days." />
            <Faq q="Do I need domain and hosting?" a="No. We handle it for you and include setup in the build." />
            <Faq q="Will it rank on Google?" a="Yes. Every site is SEO-ready and includes Google Business Profile setup guidance." />
            <Faq q="I already have a website. Can you improve it?" a="Yes. Start with a free audit and we will show exactly what to fix first." />
          </div>
        </div>
      </section>
    </main>
  );
}

function BusinessCard({ lead, quizHref }: { lead: Lead; quizHref: string }) {
  const hasWebsite = Boolean(lead.website && lead.website.trim());
  return (
    <div className="directory-card rounded-2xl border border-white/10 bg-zinc-900 p-5">
      <p className="text-base font-semibold leading-tight">{lead.name}</p>
      <p className="mt-1 text-sm text-zinc-400">{getSuburb(lead)}</p>
      {lead.phone ? <p className="mt-2 text-sm text-zinc-300">{lead.phone}</p> : null}

      <div className="mt-3 flex items-center gap-2 text-xs">
        <span className={hasWebsite ? "rounded-full bg-emerald-500/20 px-2.5 py-1 text-emerald-300" : "rounded-full bg-orange-500/20 px-2.5 py-1 text-orange-300"}>
          {hasWebsite ? "Has Website ✓" : "No Website Yet"}
        </span>
        <span className="text-zinc-400">⭐ {getRating(lead.name)} ({getReviews(lead.name)} reviews)</span>
      </div>

      <div className="mt-4">
        {hasWebsite ? (
          <a className="text-sm font-medium text-amber-200 hover:text-amber-100" href={(lead.website ?? "").replace(/%3F.*$/i, "").replace(/[?]utm_.*$/i, "")} target="_blank" rel="noreferrer">
            View Website -&gt;
          </a>
        ) : (
          <Link className="text-sm font-medium text-amber-200 hover:text-amber-100" href={quizHref}>
            Get Featured Here -&gt;
          </Link>
        )}
      </div>
    </div>
  );
}

function StatCard({ value, text, prefix = "", suffix = "" }: { value: number; text: string; prefix?: string; suffix?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="text-3xl font-bold text-amber-200">
        {prefix}
        <NumberTicker value={value} />
        {suffix}
      </div>
      <p className="mt-2 text-sm text-zinc-300">{text}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-4">
      <p className="font-semibold text-white">{q}</p>
      <p className="mt-1 text-zinc-300">{a}</p>
    </div>
  );
}
