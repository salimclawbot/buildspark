"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const auditChecks = [
  {
    title: "Speed Score",
    description:
      "How fast your site loads on mobile and desktop. If it takes more than 3 seconds, you're losing over half your visitors before they even see your homepage.",
  },
  {
    title: "Mobile Experience",
    description:
      "Whether your site actually works on a phone. 73% of local searches happen on mobile. If your site is clunky, pinch-to-zoom, or broken on a small screen, those people are going to your competitor.",
  },
  {
    title: "Local SEO Setup",
    description:
      "Whether Google even knows your business exists for the search terms that matter. We check your page titles, headings, meta descriptions, and suburb targeting.",
  },
  {
    title: "Contact and Conversion Setup",
    description:
      "Whether it's easy for someone to actually get in touch. We check your forms, phone number placement, call-to-action buttons, and how many clicks it takes to make an enquiry.",
  },
  {
    title: "Google Business Profile Check",
    description:
      "Whether your listing is complete, accurate, and showing up in the map pack. This is where most local customers find you first.",
  },
];

const reportIncludes = [
  "An overall website health score out of 100",
  "Your exact page load speed on mobile and desktop, with a comparison to the industry average",
  "A screenshot showing how your site looks on a phone (you might be surprised)",
  "A list of the local search terms you should be ranking for, and whether you currently are",
  "Specific issues holding your site back, ranked by impact",
  "A prioritised list of fixes: what to do first, second, and third",
  "A plain-English summary you can actually understand (no developer jargon)",
];

const socialProof = [
  {
    quote:
      "I had no idea my site was loading in 8 seconds on mobile. No wonder nobody was calling. The report laid it all out clearly and I knew exactly what to fix.",
    author: "Ben W.",
    role: "Plumber, Melton",
  },
  {
    quote:
      "Really impressed. I expected a generic automated thing but it was clearly done by a real person. They even spotted that my phone number was wrong on my Google listing.",
    author: "Lisa D.",
    role: "Hair Salon Owner, Ballarat",
  },
  {
    quote:
      "Got the report the next morning. It was honest, specific, and actually helpful. Ended up getting a BuildSpark site because the audit made it obvious my old one was costing me.",
    author: "Ryan M.",
    role: "Landscaper, Cranbourne",
  },
];

const steps = [
  {
    step: "1",
    title: "Submit Your URL",
    description:
      "Drop your website address, business name, and email into the form below. Takes 30 seconds.",
  },
  {
    step: "2",
    title: "We Audit It",
    description:
      "Our team runs a detailed audit on your site covering speed, mobile, SEO, conversion setup, and your Google presence. We do this by hand, not just an automated scan.",
  },
  {
    step: "3",
    title: "You Get Your Report By Email",
    description:
      "Within 24 hours, you'll receive a clear, personalised report in your inbox. It tells you exactly what's working, what's not, and what to fix first. No jargon. No upsell.",
  },
];

export default function FreeAuditClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

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

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4">Breaking: Your Website Might Be Costing You Customers</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Revealed: The Hidden Problems{" "}
                <span className="text-amber-500">
                  Costing Your Website Leads Every Single Day
                </span>
              </h1>
              <p className="text-zinc-400 text-lg mb-8">
                Submit your website URL below and we&apos;ll send you a free,
                personalised audit report within 24 hours. No calls. No sales
                pitch. Just a clear breakdown of what&apos;s working, what&apos;s
                broken, and what&apos;s costing you customers.
              </p>
              <div className="space-y-3">
                {auditChecks.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                    className="flex gap-3"
                  >
                    <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold text-sm">
                        {item.title}:
                      </span>{" "}
                      <span className="text-zinc-400 text-sm">
                        {item.description}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/free-audit-hero.webp"
                alt="Free website audit"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              3 Steps. No Calls.{" "}
              <span className="text-amber-500">No Catch.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-amber-500 text-black font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 sm:py-24 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
              Your Report Will <span className="text-amber-500">Include:</span>
            </h2>
            <div className="space-y-4">
              {reportIncludes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex gap-3 items-start"
                >
                  <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-zinc-300 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-zinc-500 text-sm mt-6 text-center">
              This is the same audit we run before building any new BuildSpark
              site. It&apos;s genuinely useful whether you work with us or not.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 sm:py-24 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
          >
            What People Said{" "}
            <span className="text-amber-500">After Getting Their Audit</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {socialProof.map((sp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-xl border border-zinc-800 bg-surface p-6"
              >
                <p className="text-zinc-300 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{sp.quote}&rdquo;
                </p>
                <p className="text-white font-bold text-sm">{sp.author}</p>
                <p className="text-zinc-500 text-xs">{sp.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Form */}
      <section className="py-16 sm:py-24 border-t border-zinc-800/50">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-zinc-800 bg-surface p-8 sm:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">
              Get Your <span className="text-amber-500">Free Website Audit</span>
            </h2>
            <p className="text-zinc-400 text-sm text-center mb-8">
              Takes 30 seconds. Report in your inbox within 24 hours.
            </p>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <p className="text-white text-lg font-semibold mb-2">
                  Your audit is on its way.
                </p>
                <p className="text-zinc-400 mb-2">
                  Check your inbox within 24 hours.
                </p>
                <p className="text-zinc-500 text-sm">
                  No calls. No sales pressure. Just your audit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="_subject" value="Free Website Audit Request" />
                <input type="hidden" name="_captcha" value="false" />

                <div>
                  <label
                    htmlFor="business-name"
                    className="block text-sm font-medium text-zinc-300 mb-1.5"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business-name"
                    name="business_name"
                    required
                    className="w-full rounded-lg border border-zinc-700 bg-background px-4 py-3 text-white placeholder:text-zinc-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="website-url"
                    className="block text-sm font-medium text-zinc-300 mb-1.5"
                  >
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website-url"
                    name="website_url"
                    required
                    className="w-full rounded-lg border border-zinc-700 bg-background px-4 py-3 text-white placeholder:text-zinc-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors"
                    placeholder="https://yourbusiness.com.au"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-300 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-zinc-700 bg-background px-4 py-3 text-white placeholder:text-zinc-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 focus:outline-none transition-colors"
                    placeholder="you@email.com"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-base"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Me My Free Audit →"}
                </Button>

                <p className="text-zinc-500 text-xs text-center">
                  We&apos;ll email your personalised audit report within 24 hours.
                  No phone calls. No sales pressure. No spam. If your site is fine,
                  we&apos;ll tell you that too.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to fix everything{" "}
            <span className="text-amber-500">in one go?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Take the quiz and we&apos;ll show you what a BuildSpark site would
            look like for your business.
          </p>
          <Button asChild size="lg" className="text-base px-10">
            <Link href="/quiz">Take the 2-Minute Quiz →</Link>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
