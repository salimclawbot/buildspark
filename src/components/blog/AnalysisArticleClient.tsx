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
import type { AnalysisPost } from "@/lib/analysis-posts";

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

function AuditForm({ post }: { post: AnalysisPost }) {
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
        <p className="text-xl font-bold text-white">Got it. We&apos;ll take a look.</p>
        <p className="mt-2 text-sm text-zinc-300">
          You&apos;ll get a plain-English website audit back by email. No jargon, no pressure.
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
          <p className="text-xl font-bold text-white">Want to know what your website is costing you?</p>
          <p className="mt-1 text-sm leading-relaxed text-zinc-400">
            Submit your site and we&apos;ll send a quick audit showing what to fix first.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
        <input type="hidden" name="_subject" value={`BuildSpark audit request from ${post.title}`} />
        <input type="hidden" name="article" value={post.slug} />
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
          {submitting ? "Submitting..." : "Send My Free Website Audit"}
        </Button>
      </form>
    </div>
  );
}

export default function AnalysisArticleClient({ post }: { post: AnalysisPost }) {
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

            {post.sections.map((section, index) => (
              <section key={section.title} className="mt-12">
                <p className="mb-2 text-sm font-bold uppercase text-amber-400">{section.eyebrow}</p>
                <h2 className="mb-4 text-2xl font-bold text-white">{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mb-4 text-lg leading-relaxed text-zinc-300">
                    {paragraph}
                  </p>
                ))}
                <div className="mb-6 rounded-lg border border-zinc-800 bg-zinc-900/70 p-4">
                  <p className="text-zinc-300">
                    <strong className="text-white">What to do:</strong> {section.fix}
                  </p>
                </div>
                <ComparisonImage
                  post={post}
                  sectionTitle={section.title}
                  takeaway={section.visual.takeaway}
                  index={index + 1}
                />
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
              <h2 className="text-2xl font-bold text-white">Want a website that turns visitors into enquiries?</h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-400">
                BuildSpark builds fast, local-focused websites that make the next step obvious. Submit your site above or start the quiz and we&apos;ll show you what we&apos;d fix first.
              </p>
              <Button asChild size="lg" className="mt-5">
                <Link href="/quiz">
                  Start Your Free Quiz <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
