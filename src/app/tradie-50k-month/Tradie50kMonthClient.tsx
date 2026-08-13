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

const checklist = [
  {
    title: "Know the exact jobs you want more of",
    strong:
      "Do not market for every job. Market for the jobs that actually move the business.",
    copy:
      "A roofer might want roof restorations, not tiny repair jobs. A tiler might want bathrooms, not one broken tile. A kitchen remodeler might want full renovations, not quick patch work.",
    fix: "Pick 2-4 money jobs and make them obvious on your website, socials and Google profile.",
    image: "/images/tradie-50k-month/jobs-suburbs.webp",
    alt:
      "Before and after laptop screens showing vague services versus clear roofing jobs and suburbs",
  },
  {
    title: "Name the suburbs and service areas you want",
    strong:
      "People trust you faster when they can see you work in their area.",
    copy:
      "Generic copy like 'servicing Melbourne' is easy to ignore. Clear suburb pages and local job posts make you feel nearby, active and easier to call.",
    fix: "Show your best suburbs in headlines, service pages, job photos and review sections.",
  },
  {
    title: "Make your quote path short",
    strong:
      "If the form feels like homework, people leave and call someone else.",
    copy:
      "Busy homeowners and builders do not want a massive form. They want to know you can help, send a few details and get a call back.",
    fix: "Use name, phone, suburb, job type and one notes box. Keep the big CTA visible.",
    image: "/images/tradie-50k-month/quote-path.webp",
    alt:
      "Before and after laptop screens showing a long quote form versus a simple quick quote form",
  },
  {
    title: "Put call buttons where people decide",
    strong:
      "A good-looking page still fails if the call button is hidden.",
    copy:
      "Your phone number, quote button and next step should appear near your headline, after proof, after services and at the bottom of the page.",
    fix: "Make every key section answer: what do I do next?",
  },
  {
    title: "Show proof before people call",
    strong:
      "Customers need to trust you before they hand over their phone number.",
    copy:
      "Reviews, before-and-after photos, real jobs, locations and simple warranty notes remove doubt. Without proof, your website is asking people to believe you with no evidence.",
    fix: "Put Google reviews and job photos near quote buttons, not buried on one reviews page.",
    image: "/images/tradie-50k-month/proof-before-call.webp",
    alt:
      "Before and after laptop screens showing a generic about page versus reviews and job proof before enquiry",
  },
  {
    title: "Turn finished jobs into content",
    strong:
      "Your finished jobs are the easiest marketing content you already have.",
    copy:
      "One finished job can become a Facebook post, Google Business update, website gallery item, review request and short local proof story.",
    fix: "Capture photos, suburb, job type and customer result after every good job.",
    image: "/images/tradie-50k-month/jobs-into-content.webp",
    alt:
      "Before and after laptop screens showing an inactive social feed versus recent job content",
  },
  {
    title: "Keep your socials alive",
    strong:
      "Quiet socials make people wonder if you are still taking jobs.",
    copy:
      "You do not need to dance on camera. You need regular proof that work is happening: recent jobs, short tips, before-and-after posts and customer wins.",
    fix: "Post useful local proof every week so Facebook ad traffic sees an active business.",
  },
  {
    title: "Ask for Google reviews properly",
    strong:
      "More good reviews can lift trust before the first call.",
    copy:
      "Most businesses only ask for reviews when they remember. A simple review system turns happy customers into trust proof that keeps working.",
    fix: "Send review requests after good jobs and reuse the best reviews on key website pages.",
  },
  {
    title: "Track calls, forms and clicks",
    strong:
      "If you do not track the leads, you are guessing.",
    copy:
      "You should know which pages, buttons, forms and campaigns bring real enquiries. That is how you stop wasting money and keep improving.",
    fix: "Track phone clicks, form sends, CTA buttons and key page visits every month.",
    image: "/images/tradie-50k-month/track-leads.webp",
    alt:
      "Before and after laptop screens showing no tracking versus a simple lead dashboard",
  },
  {
    title: "Improve the system every month",
    strong:
      "$50k/month is usually built by steady improvements, not one lucky campaign.",
    copy:
      "Better pages, stronger proof, more reviews, clearer posts and sharper offers compound over time. The businesses that grow keep tightening the whole system.",
    fix: "Review leads monthly and improve one thing that helps people call, trust you or ask for a quote.",
  },
];

const services = [
  {
    icon: MessageSquareText,
    title: "$250/m social media management",
    copy:
      "Simple, regular posts built from your real work, local proof, offers and customer results. No fluff. Just activity that makes you look alive and trustworthy.",
  },
  {
    icon: Globe2,
    title: "High-converting website design",
    copy:
      "A modern website that explains what you do, where you work, why people should trust you and how to get a quote fast.",
  },
  {
    icon: Star,
    title: "Google review support",
    copy:
      "A practical review request setup plus better placement of reviews across your website so people see proof before they enquire.",
  },
];

const outcomes = [
  "More serious quote enquiries",
  "Stronger trust before the first call",
  "Better follow-up from Facebook ad traffic",
  "A website that supports revenue, not just looks pretty",
  "Clearer data on what is bringing leads",
  "Monthly improvements without you chasing developers",
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
          _subject: `New Tradie $50k Checklist Lead - ${currentMonth}`,
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
      <div className="buildspark-panel border-emerald-400/35 bg-emerald-400/10 p-6 text-white">
        <CheckCircle2 className="mb-4 h-9 w-9 text-emerald-300" />
        <h3 className="text-2xl buildspark-title">You are on the list.</h3>
        <p className="mt-2 text-sm leading-6 buildspark-copy">
          We have your details. We will look over your business and come back with a clear next step.
        </p>
      </div>
    );
  }

  return (
    <form
      id={placement === "primary" ? "growth-form" : undefined}
      aria-label={title}
      onSubmit={handleSubmit}
      className="buildspark-panel p-5 sm:p-6"
    >
      <input type="hidden" name="_subject" value={`New Tradie $50k Checklist Lead - ${currentMonth}`} />
      <div className="mb-5">
        <p className="buildspark-eyebrow">{currentMonth} growth spots</p>
        <h2 className="mt-2 text-2xl buildspark-title text-white">{title}</h2>
        <p className="mt-2 text-sm leading-6 buildspark-copy">
          Send your details. We will check your website, socials and reviews, then call you with the fastest next step.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="text-sm font-bold text-white">
          Name
          <input className="mt-2 h-12 w-full buildspark-field px-4" name="name" required />
        </label>
        <label className="text-sm font-bold text-white">
          Phone
          <input className="mt-2 h-12 w-full buildspark-field px-4" name="phone" type="tel" required />
        </label>
        <label className="text-sm font-bold text-white">
          Email
          <input className="mt-2 h-12 w-full buildspark-field px-4" name="email" type="email" required />
        </label>
        <label className="text-sm font-bold text-white">
          Business name
          <input className="mt-2 h-12 w-full buildspark-field px-4" name="businessName" required />
        </label>
        <label className="text-sm font-bold text-white sm:col-span-2">
          Notes
          <textarea
            className="mt-2 min-h-28 w-full buildspark-field px-4 py-3"
            name="notes"
            placeholder="e.g. roofer in Geelong, want more roof restoration jobs"
          />
        </label>
      </div>
      <Button type="submit" disabled={sending} className="mt-5 h-12 w-full rounded-none text-base font-bold">
        {sending ? "Sending..." : "Check my growth plan"}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <p className="mt-3 text-xs leading-5 text-white/45">No lock-in contracts. We will only call about your enquiry.</p>
    </form>
  );
}

function SectionImage({ src, alt }: { src?: string; alt?: string }) {
  if (!src || !alt) return null;

  return (
    <div className="mt-7 overflow-hidden border border-white/10 bg-black">
      <Image
        src={src}
        alt={alt}
        width={1680}
        height={945}
        sizes="(min-width: 1024px) 920px, 100vw"
        className="h-auto w-full object-cover"
      />
    </div>
  );
}

export function Tradie50kMonthClient() {
  const first = checklist[0];
  const rest = checklist.slice(1);

  return (
    <main className="min-h-screen buildspark-shell text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 buildspark-topbar">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-2xl buildspark-title">
            Build<span className="text-amber-500">Spark</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-bold uppercase tracking-[0.12em] text-white/68 md:flex">
            <a href="#checklist" className="hover:text-white">Checklist</a>
            <a href="#offer" className="hover:text-white">What we do</a>
            <a href="#growth-form" className="hover:text-white">Start</a>
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
          className="object-cover object-center opacity-42"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.94)_45%,rgba(5,5,5,0.58)_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex w-fit items-center gap-2 border border-amber-400/35 bg-amber-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
              <TrendingUp className="h-4 w-4" />
              Tradie growth checklist
            </div>
            <h1 className="text-[2.55rem] buildspark-title min-[420px]:text-5xl sm:text-6xl lg:text-7xl">
              10 checklist items to grow your trade business toward $50k/month.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-white/76">
              For tilers, roofers, kitchen remodelers, contractors and local service businesses that want more serious quote enquiries, not just more noise online.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-12 rounded-none px-6 text-base font-bold">
                <a href="#checklist">
                  Read the checklist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-none border-white/20 bg-white/5 px-6 text-base font-bold text-white hover:bg-white/10">
                <a href="#growth-form">Get my growth check</a>
              </Button>
            </div>
            <div className="mt-8 grid gap-3 text-sm font-bold text-white/74 sm:grid-cols-3">
              {["Website that converts", "$250/m social support", "Google review system"].map((item) => (
                <div key={item} className="border border-white/12 bg-white/[0.04] p-4">
                  <BadgeCheck className="mb-3 h-5 w-5 text-amber-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="checklist" className="border-b border-white/10 bg-[#0d0d0d] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="buildspark-eyebrow">Start here</p>
            <h2 className="mt-4 text-4xl buildspark-title sm:text-5xl">
              The goal is not followers. The goal is booked work.
            </h2>
            <p className="mt-5 text-lg leading-8 buildspark-copy">
              If your average job is $5,000, ten booked jobs is $50,000 revenue. If your average job is $2,500, you need twenty. This checklist helps you build the online system that gets more of the right people to enquire.
            </p>
          </div>

          <article className="mt-10 buildspark-panel p-5 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center bg-amber-500 text-xl font-bold text-black">
              1
            </div>
            <h3 className="mt-5 text-3xl buildspark-title sm:text-4xl">{first.title}</h3>
            <p className="mt-4 border-l-4 border-amber-400 pl-4 text-xl font-bold leading-8 text-white">
              {first.strong}
            </p>
            <p className="mt-4 text-lg leading-8 buildspark-copy">{first.copy}</p>
            <p className="mt-4 text-base leading-7 text-white/88">
              <span className="font-bold text-amber-300">Fix this:</span> {first.fix}
            </p>
            <SectionImage src={first.image} alt={first.alt} />
          </article>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <LeadForm placement="primary" title="Get your free growth check" />
            </div>
            <div className="space-y-8">
              {rest.map((item, index) => (
                <article key={item.title} className="buildspark-panel p-5 sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center bg-amber-500 text-xl font-bold text-black">
                    {index + 2}
                  </div>
                  <h3 className="mt-5 text-3xl buildspark-title sm:text-4xl">{item.title}</h3>
                  <p className="mt-4 border-l-4 border-amber-400 pl-4 text-xl font-bold leading-8 text-white">
                    {item.strong}
                  </p>
                  <p className="mt-4 text-lg leading-8 buildspark-copy">{item.copy}</p>
                  <p className="mt-4 text-base leading-7 text-white/88">
                    <span className="font-bold text-amber-300">Fix this:</span> {item.fix}
                  </p>
                  <SectionImage src={item.image} alt={item.alt} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="offer" className="border-b border-white/10 bg-black px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="buildspark-eyebrow">How BuildSpark helps</p>
              <h2 className="mt-4 text-4xl buildspark-title sm:text-5xl">
                We build the parts that help people trust you and ask for a quote.
              </h2>
              <p className="mt-5 text-lg leading-8 buildspark-copy">
                Most owners do not need another confusing marketing package. They need a website that works, socials that prove the business is active, and reviews that make customers feel safe calling.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {services.map((service) => (
                <div key={service.title} className="buildspark-panel p-6">
                  <service.icon className="mb-5 h-8 w-8 text-amber-400" />
                  <h3 className="text-2xl buildspark-title">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 buildspark-copy">{service.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 border border-white/10 bg-white/[0.03] p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
            <div>
              <ClipboardCheck className="mb-5 h-10 w-10 text-amber-400" />
              <h3 className="text-3xl buildspark-title">What this should lead to</h3>
              <p className="mt-3 buildspark-copy">
                Not fake hype. A cleaner online system that makes your business easier to choose.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div key={item} className="flex gap-3 text-sm font-bold text-white/76">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="buildspark-shell px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <Phone className="mb-5 h-10 w-10 text-amber-400" />
            <h2 className="text-4xl buildspark-title sm:text-5xl">Want us to check your business?</h2>
            <p className="mt-5 text-lg leading-8 buildspark-copy">
              Leave your details and we will call you with a direct plan for your trade or contracting business.
            </p>
          </div>
          <LeadForm placement="bottom" title="Check my website, socials and reviews" />
        </div>
      </section>
    </main>
  );
}
