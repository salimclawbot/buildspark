"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Palette,
  PhoneCall,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const inclusions = [
  "Custom website built for your trade and service area",
  "Mobile-first design with tap-to-call buttons",
  "Clear service sections for the jobs you want more of",
  "Quote form connected to your inbox",
  "Trust proof sections for reviews, licences, photos, and guarantees",
  "Basic local SEO structure so Google understands what you do",
];

const conversionPoints = [
  {
    icon: PhoneCall,
    title: "Calls are obvious",
    text: "Your phone number, quote button, and service area are placed where customers actually look.",
  },
  {
    icon: ShieldCheck,
    title: "Trust is built early",
    text: "Reviews, real job photos, licences, guarantees, and response times sit near the enquiry points.",
  },
  {
    icon: Search,
    title: "Google gets clear signals",
    text: "We write pages around your trade, suburbs, and services instead of vague lines like 'quality solutions'.",
  },
];

const qualityItems = [
  {
    icon: Palette,
    title: "Clean colours",
    text: "We use a sharp, trade-friendly colour system that makes buttons, proof, and key offers stand out.",
  },
  {
    icon: Sparkles,
    title: "Proper landing pages",
    text: "No cluttered template mess. Each page has a job: explain, prove, and get the enquiry.",
  },
  {
    icon: Clock,
    title: "Fast, simple pages",
    text: "The site is made for busy people on phones. Short sections, strong headings, and no dead weight.",
  },
];

const pages = [
  "Home page",
  "Service pages",
  "Suburb/service area sections",
  "Review and proof sections",
  "Gallery or recent work section",
  "Contact and quote form",
];

function ArticleImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={1254}
        height={1254}
        className="h-auto w-full rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/30"
        sizes="(min-width: 1024px) 768px, 100vw"
      />
      <figcaption className="mt-3 text-sm leading-relaxed text-zinc-400">
        <strong className="text-amber-400">Visual:</strong> {caption}
      </figcaption>
    </figure>
  );
}

function StartForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);

    try {
      await fetch("https://formsubmit.co/ajax/info@buildspark.com.au", {
        method: "POST",
        body: formData,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
        <CheckCircle className="mx-auto mb-3 h-8 w-8 text-emerald-400" />
        <p className="text-xl font-bold text-white">Got it. We&apos;ll check your August spot.</p>
        <p className="mt-2 text-sm text-zinc-300">
          We&apos;ll reply with the next step for a brand new trade website from $150/m*.
        </p>
      </div>
    );
  }

  return (
    <div id="get-started" className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 sm:p-7">
      <div className="mb-5 flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-black">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div>
          <p className="text-2xl font-bold text-white">Check if your trade is available for August</p>
          <p className="mt-1 text-sm leading-relaxed text-zinc-400">
            Limited onboarding spots. Send your details and we&apos;ll confirm fit, price, and next steps.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
        <input type="hidden" name="_subject" value="BuildSpark $150/m tradie website enquiry" />
        <input type="hidden" name="offer" value="Brand new trade website from $150/m - August spots" />
        <input
          name="business"
          required
          placeholder="Business name"
          className="rounded-lg border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-amber-500"
        />
        <input
          name="trade"
          required
          placeholder="Trade, e.g. plumber"
          className="rounded-lg border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-amber-500"
        />
        <input
          name="area"
          required
          placeholder="Main service area"
          className="rounded-lg border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-amber-500"
        />
        <input
          name="website"
          placeholder="Current website, if you have one"
          className="rounded-lg border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-amber-500"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="rounded-lg border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-amber-500"
        />
        <input
          name="phone"
          required
          placeholder="Phone"
          className="rounded-lg border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-amber-500"
        />
        <Button type="submit" disabled={submitting} className="sm:col-span-2">
          {submitting ? "Submitting..." : "Check My August Spot"}
        </Button>
      </form>
      <p className="mt-3 text-xs leading-relaxed text-zinc-500">
        *$150/m applies to eligible monthly website plans. Final inclusions confirmed before you start.
      </p>
    </div>
  );
}

export default function TradieWebsites150Client() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0">
          <Image
            src="/images/tradie-getting-calls.webp"
            alt="Tradie getting more calls from a new website"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <Badge className="mb-4">Tradie Websites</Badge>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              More leads. More trust. More jobs. For $150/m.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-200 sm:text-xl">
              We build high-converting websites for plumbers, electricians, builders, landscapers and every other trade, without the $5,000+ upfront cost.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#get-started">
                  Check My August Spot <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm font-semibold text-amber-300">
              Limited spots remaining for August.
            </p>
          </motion.div>
        </div>
      </section>

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <p className="border-l-4 border-amber-500 pl-4 text-xl font-semibold leading-relaxed text-white">
              If your website does not make people call, trust you, or ask for a quote, it is not doing its job.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-300">
              BuildSpark gives tradies a proper website without the huge upfront invoice. You get a sharp site built around your trade, your suburbs, and the jobs you actually want.
            </p>
            <ArticleImage
              src="/images/tradie-websites-150/hero-offer.webp"
              alt="Laptop showing a trade website offer for more leads, trust and jobs from $150 per month"
              caption="The offer in plain English: a proper trade website designed to win more calls and quote requests."
            />

            <section className="mt-14">
              <p className="mb-2 text-sm font-bold uppercase text-amber-400">The offer</p>
              <h2 className="mb-5 text-3xl font-bold text-white">What you get for $150/m*</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {inclusions.map((item) => (
                  <div key={item} className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-4">
                    <CheckCircle className="mb-3 h-5 w-5 text-amber-500" />
                    <p className="font-semibold leading-relaxed text-white">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                *Exact setup depends on your trade, content, pages, and plan fit. We confirm everything before you start.
              </p>
              <ArticleImage
                src="/images/tradie-websites-150/inclusions.webp"
                alt="Laptop showing six inclusions in a $150 per month tradie website package"
                caption="What is included: mobile design, service sections, quote form, proof, and local SEO setup."
              />
            </section>

            <section className="mt-14">
              <p className="mb-2 text-sm font-bold uppercase text-amber-400">Conversion</p>
              <h2 className="mb-5 text-3xl font-bold text-white">Built to turn visitors into enquiries</h2>
              <p className="mb-6 text-xl font-semibold leading-relaxed text-white">
                Pretty is not enough. A trade website needs to make the next step obvious.
              </p>
              <div className="space-y-4">
                {conversionPoints.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4 rounded-lg border border-zinc-800 bg-surface p-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-black">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="mt-1 leading-relaxed text-zinc-300">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <ArticleImage
                src="/images/tradie-websites-150/conversion.webp"
                alt="Before and after laptop screens showing a weak trade website and a high converting trade website"
                caption="The difference that matters: a generic page versus a page with calls, proof, service area, and quote buttons."
              />
            </section>

            <section className="mt-14">
              <p className="mb-2 text-sm font-bold uppercase text-amber-400">Design quality</p>
              <h2 className="mb-5 text-3xl font-bold text-white">It will look professional, not cheap</h2>
              <p className="mb-6 text-xl font-semibold leading-relaxed text-white">
                We care about layout, colours, spacing, headings, photos, mobile flow, and how each section helps win the job.
              </p>
              <div className="grid gap-4">
                {qualityItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-5">
                      <div className="mb-3 flex items-center gap-3">
                        <Icon className="h-5 w-5 text-amber-300" />
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </div>
                      <p className="leading-relaxed text-zinc-200">{item.text}</p>
                    </div>
                  );
                })}
              </div>
              <ArticleImage
                src="/images/tradie-websites-150/design-quality.webp"
                alt="Laptop and phone showing a professional trade website design with clean colours and mobile layout"
                caption="A trade website should look sharp on desktop and mobile, with clear colours, headings, trust sections, and quote flow."
              />
            </section>

            <section className="mt-14">
              <p className="mb-2 text-sm font-bold uppercase text-amber-400">Pages</p>
              <h2 className="mb-5 text-3xl font-bold text-white">The pages and sections we usually build</h2>
              <p className="mb-6 text-lg leading-relaxed text-zinc-300">
                Most tradies do not need a giant website. They need the right pages, written clearly, with the right proof and calls to action.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {pages.map((item) => (
                  <p key={item} className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-4 text-lg font-semibold text-white">
                    {item}
                  </p>
                ))}
              </div>
              <ArticleImage
                src="/images/tradie-websites-150/pages.webp"
                alt="Laptop showing the pages BuildSpark builds for tradie websites"
                caption="Most tradies need clear pages and sections, not a bloated website nobody reads."
              />
            </section>

            <section className="mt-14">
              <p className="mb-2 text-sm font-bold uppercase text-amber-400">Getting started</p>
              <h2 className="mb-5 text-3xl font-bold text-white">No long brief. No agency runaround.</h2>
              <div className="space-y-4">
                <p className="text-xl font-semibold leading-relaxed text-white">
                  Send your trade, suburb, and contact details. We check fit, confirm your $150/m* option, then map the site.
                </p>
                <p className="text-lg leading-relaxed text-zinc-300">
                  From there, we handle the structure, wording, design, build, and launch. You give feedback. We keep it simple.
                </p>
              </div>
              <ArticleImage
                src="/images/tradie-websites-150/get-started.webp"
                alt="Laptop showing the three step process to get started with a tradie website"
                caption="Getting started should be simple: send your details, map the website, launch and get enquiries."
              />
            </section>

            <div className="mt-10">
              <StartForm />
            </div>

            <section className="mt-14">
              <h2 className="mb-6 text-3xl font-bold text-white">Frequently Asked Questions</h2>
              <div className="space-y-5">
                <div className="rounded-lg border border-zinc-800 bg-surface p-5">
                  <h3 className="mb-2 text-lg font-bold text-white">Is the $150/m website for every trade?</h3>
                  <p className="leading-relaxed text-zinc-300">
                    It is built for plumbers, electricians, builders, landscapers, painters, cleaners, mechanics, and other service trades. We confirm fit before you start.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-surface p-5">
                  <h3 className="mb-2 text-lg font-bold text-white">Will it help me get more enquiries?</h3>
                  <p className="leading-relaxed text-zinc-300">
                    That is the point. We build around clear calls, trust proof, local service wording, fast mobile pages, and quote forms that are easy to finish.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-surface p-5">
                  <h3 className="mb-2 text-lg font-bold text-white">Do I need to write the website myself?</h3>
                  <p className="leading-relaxed text-zinc-300">
                    No. We ask for the basics, then handle the wording and structure. You review it before it goes live.
                  </p>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </article>

      <section className="border-t border-zinc-800/50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Ready to stop losing leads?</h2>
          <p className="mx-auto mt-3 max-w-xl text-zinc-400">
            Check your August spot and we&apos;ll tell you the next step. Straight answer, no pressure.
          </p>
          <Button asChild size="lg" className="mt-6">
            <a href="#get-started">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
