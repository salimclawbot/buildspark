"use client";

import { FormEvent, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  MessageSquareText,
  Phone,
  Star,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackLead, trackMetaStandardEvent } from "@/lib/meta-pixel";

const services = [
  {
    icon: MessageSquareText,
    title: "Social posts that prove you are active",
    copy: "Recent jobs, before-and-after photos, short offers and local proof so people see you are working and worth calling.",
  },
  {
    icon: Globe2,
    title: "A website built to turn visits into quote requests",
    copy: "Clear services, suburbs, trust proof, phone calls and short forms. No confusing pages that make customers think too hard.",
  },
  {
    icon: Star,
    title: "Google reviews that build trust before the call",
    copy: "A simple review request system, better review placement and stronger proof around the spots where people decide to enquire.",
  },
];

const steps = [
  {
    title: "Know the number",
    copy: "If your average job is $5,000, ten booked jobs is $50,000 revenue. If your average job is $2,500, you need twenty. The plan changes based on your business.",
  },
  {
    title: "Show the work people already want",
    copy: "Roof repairs, bathroom tiling, kitchen renovations, excavation, fencing, concreting. Your website and socials need to name the jobs you actually want more of.",
  },
  {
    title: "Make trust obvious",
    copy: "Photos, real reviews, service areas, clear pricing cues, warranty notes and fast response messages remove doubt before the customer calls.",
  },
  {
    title: "Make the next step easy",
    copy: "Short forms, click-to-call buttons and a clear offer beat a pretty website that hides the quote button.",
  },
];

const inclusions = [
  "Social media management from $250/month",
  "Modern website design that looks serious on mobile",
  "Google review request and trust-building setup",
  "Landing pages for the services and suburbs you want",
  "Lead forms, call buttons and tracking installed",
  "Monthly improvements based on what people click",
];

function LeadForm({ placement, title }: { placement: string; title: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const currentMonth = useMemo(
    () => new Intl.DateTimeFormat("en-AU", { month: "long" }).format(new Date()),
    []
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setSending(true);
    try {
      await fetch("https://formsubmit.co/ajax/info@buildspark.com.au", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Tradie Growth Lead - ${currentMonth}`,
          _captcha: "false",
          _template: "table",
          "Lead Source": "Tradie $50k Month Landing Page",
          Placement: placement,
          "Month Spot": currentMonth,
          "Full Name": payload.name,
          Email: payload.email,
          Phone: payload.phone,
          "Business Name": payload.businessName,
          Notes: payload.notes || "N/A",
          Page: typeof window !== "undefined" ? window.location.href : "/tradie-50k-month",
        }),
      });
    } catch {
      // Keep the lead flow moving if the mail provider is slow.
    }

    trackLead("Tradie $50k Month Landing Page", {
      form_placement: placement,
      offer: "social_website_google_reviews_growth",
      month_spot: currentMonth,
    });
    trackMetaStandardEvent("CompleteRegistration", {
      content_name: "Tradie $50k Month Landing Page",
      status: "submitted",
      form_placement: placement,
    });
    setSending(false);
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="border border-emerald-400/30 bg-emerald-400/10 p-6 text-white">
        <CheckCircle2 className="mb-4 h-9 w-9 text-emerald-300" />
        <h3 className="text-2xl font-black">You are on the list.</h3>
        <p className="mt-2 text-sm leading-6 text-white/70">
          We have your details. We will look over your business and come back with a clear next step.
        </p>
      </div>
    );
  }

  return (
    <form
      id={placement === "hero" ? "growth-form" : undefined}
      aria-label={title}
      onSubmit={handleSubmit}
      className="border border-white/12 bg-black/70 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur sm:p-6"
    >
      <input type="hidden" name="_subject" value={`New Tradie Growth Lead - ${currentMonth}`} />
      <div className="mb-5">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-400">{currentMonth} spots</p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-white">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-white/60">
          Tell us what you do. We will call you with the quickest path to more enquiries.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm font-bold text-white">
          Name
          <input className="mt-2 h-12 w-full border border-white/15 bg-white px-4 text-black placeholder:text-zinc-500 outline-none focus:border-amber-400" name="name" required />
        </label>
        <label className="text-sm font-bold text-white">
          Phone
          <input className="mt-2 h-12 w-full border border-white/15 bg-white px-4 text-black placeholder:text-zinc-500 outline-none focus:border-amber-400" name="phone" type="tel" required />
        </label>
        <label className="text-sm font-bold text-white">
          Email
          <input className="mt-2 h-12 w-full border border-white/15 bg-white px-4 text-black placeholder:text-zinc-500 outline-none focus:border-amber-400" name="email" type="email" required />
        </label>
        <label className="text-sm font-bold text-white">
          Business name
          <input className="mt-2 h-12 w-full border border-white/15 bg-white px-4 text-black placeholder:text-zinc-500 outline-none focus:border-amber-400" name="businessName" required />
        </label>
        <label className="text-sm font-bold text-white sm:col-span-2">
          Notes
          <textarea
            className="mt-2 min-h-28 w-full border border-white/15 bg-white px-4 py-3 text-black placeholder:text-zinc-500 outline-none focus:border-amber-400"
            name="notes"
            placeholder="e.g. roofer in Geelong, want more roof restoration jobs"
          />
        </label>
      </div>
      <Button type="submit" disabled={sending} className="mt-5 h-12 w-full rounded-none text-base font-black">
        {sending ? "Sending..." : "Build my growth plan"}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <p className="mt-3 text-xs leading-5 text-white/45">No lock-in contracts. We will only call about your enquiry.</p>
    </form>
  );
}

export function Tradie50kMonthClient() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-2xl font-black tracking-tight">
            Build<span className="text-amber-500">Spark</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-black uppercase tracking-[0.12em] text-white/68 md:flex">
            <a href="#system" className="hover:text-white">System</a>
            <a href="#services" className="hover:text-white">What we do</a>
            <a href="#proof" className="hover:text-white">Proof</a>
          </nav>
          <Button asChild className="rounded-none">
            <a href="#growth-form">Get started</a>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10 bg-black">
        <Image
          src="/images/tradie-50k-growth-hero.png"
          alt="Contractor reviewing marketing, website and review growth system"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-48"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.92)_34%,rgba(5,5,5,0.52)_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.96fr_1.04fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit items-center gap-2 border border-amber-400/35 bg-amber-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-amber-300">
              <TrendingUp className="h-4 w-4" />
              Tradie growth page
            </div>
            <h1 className="max-w-3xl text-[2.65rem] font-black leading-[0.95] tracking-tight min-[420px]:text-5xl sm:text-6xl lg:text-7xl">
              <span className="block">Build your trade</span>
              <span className="block">business toward</span>
              <span className="block">$50,000/month.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/76">
              Not with random posts or a pretty website that sits there. With a simple system: better socials, a sharper website and more Google reviews.
            </p>
            <div className="mt-7 grid gap-3 text-sm font-bold text-white/74 sm:grid-cols-3">
              {["For roofers, tilers, remodelers", "Social + website + reviews", "Built for more enquiries"].map((item) => (
                <div key={item} className="border border-white/12 bg-white/[0.04] p-4">
                  <BadgeCheck className="mb-3 h-5 w-5 text-amber-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <LeadForm placement="hero" title="Start with a free growth check" />
        </div>
      </section>

      <section id="system" className="border-b border-white/10 bg-[#0d0d0d] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-400">The number is not magic</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                $50k / month starts with the jobs you need to book.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/66">
                If your average job is $5,000, you need ten booked jobs. If it is $2,500, you need twenty. The point is simple: your online presence should help more of the right people trust you and ask for a quote.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div key={step.title} className="border border-white/10 bg-black p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center bg-amber-500 text-lg font-black text-black">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-black tracking-tight">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/62">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-white/10 bg-black px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-400">What we build</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Three things that make customers say yes before they call.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="border border-white/10 bg-[#0d0d0d] p-7">
                <service.icon className="mb-7 h-9 w-9 text-amber-400" />
                <h3 className="text-2xl font-black tracking-tight">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/64">{service.copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 border border-white/10 bg-white/[0.03] p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
            <div>
              <ClipboardCheck className="mb-5 h-10 w-10 text-amber-400" />
              <h3 className="text-3xl font-black tracking-tight">What can be included</h3>
              <p className="mt-3 text-white/62">
                We shape the setup around your business, your service area and the jobs that actually make money.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {inclusions.map((item) => (
                <div key={item} className="flex gap-3 text-sm font-bold text-white/76">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#101010] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-400">Get looked at properly</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              We will tell you what is blocking enquiries.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/66">
              Your website might not explain your offer. Your socials might look quiet. Your reviews might be hidden. Or your form might be too hard. We check it, then give you the next move.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-black uppercase tracking-[0.12em] text-white/58">
              <span className="border border-white/12 px-4 py-2">Website</span>
              <span className="border border-white/12 px-4 py-2">Socials</span>
              <span className="border border-white/12 px-4 py-2">Reviews</span>
              <span className="border border-white/12 px-4 py-2">Lead flow</span>
            </div>
          </div>
          <LeadForm placement="middle" title="Send me the next step" />
        </div>
      </section>

      <section id="proof" className="border-b border-white/10 bg-black px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="bg-amber-500 p-7 text-black">
              <p className="text-6xl font-black tracking-tight">$250</p>
              <p className="mt-2 font-black uppercase tracking-[0.16em]">per month starting point</p>
              <p className="mt-5 text-sm font-semibold leading-6 text-black/70">
                Straightforward support for owners who want their online presence handled properly.
              </p>
            </div>
            <div className="border border-white/10 bg-[#0d0d0d] p-7 sm:col-span-2">
              <h2 className="text-4xl font-black tracking-tight">The goal is not likes. The goal is booked work.</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/66">
                We use content, website pages and reviews to answer the questions customers already have: Can I trust you? Do you do my job? Are you local? Can I get a quote without mucking around?
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {["More trust", "More enquiries", "More jobs"].map((item) => (
                  <div key={item} className="border border-white/10 bg-black p-4 text-center text-lg font-black">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#080808] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <Phone className="mb-5 h-10 w-10 text-amber-400" />
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Ready to see what needs fixing?</h2>
            <p className="mt-5 text-lg leading-8 text-white/66">
              Leave your details and we will call you with a direct plan for your trade or contracting business.
            </p>
          </div>
          <LeadForm placement="bottom" title="Get my free growth check" />
        </div>
      </section>
    </main>
  );
}
