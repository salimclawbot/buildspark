"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const features = [
  "Clear services list & pricing display",
  "Lead capture contact form",
  "Professional credentials & qualifications showcase",
  "Local SEO to attract nearby clients",
  "Mobile-first responsive design",
  "Trust-building testimonials section",
];

export default function BookkeepersClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <Image
          src="/images/service-bookkeepers.webp"
          alt="Professional bookkeeper workspace - BuildSpark website design for bookkeepers in Victoria"
          fill
          className="object-cover pointer-events-none"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-background pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
        >
          <Badge className="mb-6">📊 Built for Bookkeepers</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            A professional website that wins clients{" "}
            <span className="text-amber-500">before you even speak to them.</span>
          </h1>
        </motion.div>
      </section>

      {/* Pain Points */}
      <section className="py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4 sm:px-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Winning clients on{" "}
            <span className="text-amber-500">first impressions?</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-4">
            Small business owners shopping for a bookkeeper do their research
            online first. When they compare your outdated website (or lack of
            one) against an accountant with a polished, professional site -             they&apos;re calling the accountant. Not because they&apos;re better,
            but because they look more credible.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed mb-4">
            In a trust-based industry like bookkeeping, your website is your
            first impression. No site means no credibility. A dated site means
            you look behind the times - not the message you want to send when
            you&apos;re managing someone&apos;s finances.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            A sharp, modern website with your qualifications, services, and
            testimonials front and centre positions you as the obvious choice
            before the conversation even starts.
          </p>
        </motion.div>
      </section>

      {/* What You Get */}
      <section className="py-20 sm:py-28 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-12"
          >
            What you <span className="text-amber-500">get.</span>
          </motion.h2>

          <div className="space-y-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <Check className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-lg text-zinc-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Callout */}
      <section className="py-16 border-t border-zinc-800/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 text-center"
        >
          <Card className="border-amber-500/30 bg-amber-500/5">
            <p className="text-zinc-400 mb-2">Websites for bookkeepers from</p>
            <p className="text-4xl font-bold text-amber-500 mb-2">$490</p>
            <p className="text-zinc-500 text-sm mb-4">One-off payment. No lock-in. Delivered in 48 hours.</p>
            <Link href="/pricing" className="text-amber-500 hover:underline text-sm font-medium">
              See full pricing →
            </Link>
          </Card>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 border-t border-zinc-800/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to win more <span className="text-amber-500">clients?</span>
          </h2>
          <Button asChild size="lg" className="text-base px-10">
            <Link href="/quiz">Start Your Free Quiz →</Link>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
