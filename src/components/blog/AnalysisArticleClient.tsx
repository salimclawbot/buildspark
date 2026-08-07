"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, PhoneCall, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { AnalysisPost, ComparisonVisual } from "@/lib/analysis-posts";
import { trackLead } from "@/lib/meta-pixel";

const directOfferArticleSlugs = new Set([
  "plumber-website-analysis-top-5-percent",
  "why-73-percent-website-visitors-never-contact-you",
  "why-top-dental-practices-get-more-enquiries",
  "500-local-business-website-analysis",
  "local-businesses-3x-more-enquiries",
]);

function usesDirectOfferTemplate(post: AnalysisPost) {
  return directOfferArticleSlugs.has(post.slug);
}

function getWebsiteOfferLabel(post: AnalysisPost) {
  if (post.slug === "plumber-website-analysis-top-5-percent") {
    return "plumber website";
  }

  if (post.slug === "why-top-dental-practices-get-more-enquiries") {
    return "dental practice website";
  }

  return "website";
}

function ComparisonImage({
  post,
  sectionTitle,
  takeaway,
  index,
}: {
  post: AnalysisPost;
  sectionTitle: string;
  takeaway: string;
  index: number;
}) {
  return (
    <figure className="my-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/blog-comparisons/${post.slug}-point-${index}.webp`}
        alt={`${sectionTitle}: comparison showing what business owners do wrong and what to do instead`}
        className="h-auto w-full rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/30"
        loading="lazy"
      />
      <figcaption className="mt-3 text-sm leading-relaxed text-zinc-400">
        <strong className="text-amber-400">Image {index}:</strong> {takeaway}
      </figcaption>
    </figure>
  );
}

function ComparisonPanel({
  visual,
  fix,
}: {
  visual: ComparisonVisual;
  fix: string;
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/25">
      <div className="border-b border-zinc-800 bg-zinc-900/80 px-5 py-4">
        <h3 className="text-xl font-bold text-white">
          What the visitor sees vs what helps them enquire
        </h3>
      </div>
      <div className="grid sm:grid-cols-2">
        <div className="border-b border-zinc-800 bg-red-950/20 p-5 sm:border-b-0 sm:border-r">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-red-300">
            Not enough to win the job
          </p>
          <div className="space-y-3">
            {visual.badItems.map((item, itemIndex) => (
              <div key={item} className="rounded-lg border border-red-500/30 bg-black/25 p-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500/25 text-sm font-bold text-red-200">
                    {itemIndex + 1}
                  </span>
                  <div>
                    <p className="font-bold text-white">{item}</p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                      The customer has to guess, wait, or trust you without proof.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-emerald-950/20 p-5">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-emerald-300">
            Better way to set it up
          </p>
          <div className="space-y-3">
            {visual.goodItems.map((item, itemIndex) => (
              <div key={item} className="rounded-lg border border-emerald-500/30 bg-black/25 p-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/25 text-sm font-bold text-emerald-200">
                    {itemIndex + 1}
                  </span>
                  <div>
                    <p className="font-bold text-white">{item}</p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                      The customer knows what to do and why they should pick you.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <figcaption className="border-t border-zinc-800 bg-zinc-900/70 px-5 py-4 text-sm leading-relaxed text-zinc-300">
        <strong className="text-white">Do this on your site:</strong> {fix}
      </figcaption>
    </figure>
  );
}

function AuditForm({ post }: { post: AnalysisPost }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const isDirectOffer = usesDirectOfferTemplate(post);
  const websiteOfferLabel = getWebsiteOfferLabel(post);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);

    try {
      await fetch("https://formsubmit.co/ajax/info@buildspark.com.au", {
        method: "POST",
        body: formData,
      });
      trackLead("Analysis Article CTA", {
        article: post.slug,
        offer_type: isDirectOffer ? "150_month_website" : "website_audit",
      });
      setSubmitted(true);
    } catch {
      trackLead("Analysis Article CTA", {
        article: post.slug,
        offer_type: isDirectOffer ? "150_month_website" : "website_audit",
      });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
        <CheckCircle className="mx-auto mb-3 h-8 w-8 text-emerald-400" />
        <p className="text-xl font-bold text-white">
          {isDirectOffer ? "Got it. We'll check August availability." : "Got it. We'll take a look."}
        </p>
        <p className="mt-2 text-sm text-zinc-300">
          {isDirectOffer
            ? `We'll send you the next step for a brand new ${websiteOfferLabel} from $150/m*. No jargon, no pressure.`
            : "You'll get a plain-English website audit back by email. No jargon, no pressure."}
        </p>
      </div>
    );
  }

  return (
    <div className="my-10 rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 sm:p-7">
      <div className="mb-5 flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-black">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <div>
          <p className="text-xl font-bold text-white">
            {isDirectOffer
              ? `Want a brand new ${websiteOfferLabel} from $150/m*?`
              : "Want to know what your website is costing you?"}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-zinc-400">
            {isDirectOffer
              ? "Limited August spots remaining. Send your details and we'll confirm if your area is still available."
              : "Submit your site and we'll send a quick audit showing what to fix first."}
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
        <input
          type="hidden"
          name="_subject"
          value={
            isDirectOffer
              ? `BuildSpark $150/m ${websiteOfferLabel} enquiry from ${post.title}`
              : `BuildSpark audit request from ${post.title}`
          }
        />
        <input type="hidden" name="article" value={post.slug} />
        {isDirectOffer ? <input type="hidden" name="offer" value="Brand new website from $150/m - August spots" /> : null}
        <input
          name="business"
          required
          placeholder="Business name"
          className="rounded-lg border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-amber-500"
        />
        <input
          name="website"
          required
          placeholder="Website URL"
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
          placeholder="Phone (optional)"
          className="rounded-lg border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-amber-500"
        />
        <Button type="submit" disabled={submitting} className="sm:col-span-2">
          {submitting
            ? "Submitting..."
            : isDirectOffer
              ? "Check If I Can Get a $150/m Website"
              : "Send My Free Website Audit"}
        </Button>
      </form>
      {isDirectOffer ? (
        <p className="mt-3 text-xs leading-relaxed text-zinc-500">
          *$150/m website offer is for eligible BuildSpark monthly website plans. Limited August onboarding spots.
        </p>
      ) : null}
    </div>
  );
}

export default function AnalysisArticleClient({ post }: { post: AnalysisPost }) {
  const isDirectOffer = usesDirectOfferTemplate(post);
  const websiteOfferLabel = getWebsiteOfferLabel(post);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0">
          <Image src={post.hero} alt={post.heroAlt} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{post.title}</h1>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-400">
              <span>BuildSpark Team</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            {post.intro.map((paragraph) => (
              <p key={paragraph} className="mb-6 text-lg leading-relaxed text-zinc-300">
                {paragraph}
              </p>
            ))}

            {!isDirectOffer ? (
              <>
                <div className="my-9 rounded-xl border border-zinc-800 bg-surface p-5">
                  <p className="mb-4 text-sm font-bold uppercase text-amber-400">Quick wins</p>
                  <ul className="space-y-3">
                    {post.quickWins.map((win) => (
                      <li key={win} className="flex gap-3 text-zinc-300">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                        {win}
                      </li>
                    ))}
                  </ul>
                </div>

                <AuditForm post={post} />
              </>
            ) : null}

            {post.sections.map((section, index) => (
              <section key={section.title} className={isDirectOffer ? "mt-14" : "mt-12"}>
                <p className="mb-2 text-sm font-bold uppercase text-amber-400">{section.eyebrow}</p>
                <h2 className={isDirectOffer ? "mb-5 text-3xl font-bold text-white" : "mb-4 text-2xl font-bold text-white"}>{section.title}</h2>
                {section.body.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraph}
                    className={
                      isDirectOffer && paragraphIndex === 0
                        ? "mb-4 border-l-4 border-amber-500 pl-4 text-xl font-semibold leading-relaxed text-white"
                        : "mb-4 text-lg leading-relaxed text-zinc-300"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
                <div
                  className={
                    isDirectOffer
                      ? "mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 p-5"
                      : "mb-6 rounded-lg border border-zinc-800 bg-zinc-900/70 p-4"
                  }
                >
                  <p className={isDirectOffer ? "text-lg leading-relaxed text-zinc-100" : "text-zinc-300"}>
                    <strong className={isDirectOffer ? "text-xl text-amber-300" : "text-white"}>
                      {isDirectOffer ? "Fix this:" : "What to do:"}
                    </strong>{" "}
                    {section.fix}
                  </p>
                </div>
                <ComparisonImage
                  post={post}
                  sectionTitle={section.title}
                  takeaway={section.visual.takeaway}
                  index={index + 1}
                />
                {!isDirectOffer ? <ComparisonPanel visual={section.visual} fix={section.fix} /> : null}
              </section>
            ))}

            <AuditForm post={post} />

            <section className="mt-12">
              <h2 className="mb-6 text-2xl font-bold text-white">Frequently Asked Questions</h2>
              <div className="space-y-5">
                {post.faq.map((item) => (
                  <div key={item.question} className="rounded-lg border border-zinc-800 bg-surface p-5">
                    <h3 className="mb-2 text-lg font-bold text-white">{item.question}</h3>
                    <p className="leading-relaxed text-zinc-300">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-12 rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 text-center sm:p-8">
              <PhoneCall className="mx-auto mb-4 h-9 w-9 text-amber-500" />
              <h2 className="text-2xl font-bold text-white">
                {isDirectOffer
                  ? `Want this fixed with a brand new ${websiteOfferLabel} from $150/m*?`
                  : "Want a website that turns visitors into enquiries?"}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-400">
                {isDirectOffer
                  ? `BuildSpark builds fast, local-focused ${websiteOfferLabel}s that make calls, bookings, and quote requests obvious. Limited August spots remaining.`
                  : "BuildSpark builds fast, local-focused websites that make the next step obvious. Submit your site above or start the quiz and we'll show you what we'd fix first."}
              </p>
              <Button asChild size="lg" className="mt-5">
                <Link href="/quiz">
                  {isDirectOffer ? "Start My $150/m Website" : "Start Your Free Quiz"} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {isDirectOffer ? (
                <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-zinc-500">
                  *For eligible monthly website plans. Final inclusions confirmed before you start.
                </p>
              ) : null}
            </div>
          </motion.div>
        </div>
      </article>

      <section className="border-t border-zinc-800/50 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-white">Related Posts</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {post.related.map((item) => (
              <Link key={item.href} href={item.href} className="group block rounded-xl border border-zinc-800 bg-surface p-6 transition-colors hover:border-amber-500/30">
                <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-amber-500">{item.title}</h3>
                <span className="text-sm text-zinc-500">{item.readTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
