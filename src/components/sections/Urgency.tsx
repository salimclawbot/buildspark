"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Urgency() {
  return (
    <section className="py-14 sm:py-24 relative overflow-hidden">
      {/* Amber-tinted dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-surface to-amber-500/5" />
      <div className="absolute inset-0 bg-surface/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: urgency copy + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              We Only Take On{" "}
              <span className="text-amber-500">8 New Builds</span> Per Month.
              <br className="hidden sm:block" /> Here&apos;s Why.
            </h2>

            {/* Large number */}
            <div className="text-8xl sm:text-9xl font-bold text-amber-500/20 leading-none my-8">
              8
            </div>

            <div className="max-w-2xl space-y-5 text-zinc-300 text-base sm:text-lg leading-relaxed mb-10">
              <p>
                We&apos;re not a factory. We don&apos;t pump out hundreds of sites
                a month and hope for the best.
              </p>
              <p>
                Every site we build gets proper attention. Real strategy. Actual
                thought put into what makes your business different and how to get
                your phone ringing.
              </p>
              <p>
                That means we cap it at 8 new builds per month. No exceptions.
              </p>
              <p>
                When those spots fill up, you go on the waitlist. And right now,{" "}
                <strong className="text-white">
                  we&apos;ve got spots open for this month.
                </strong>
              </p>
              <p>
                If you&apos;ve been sitting on this for a while, thinking about
                it, meaning to get around to it - this is the nudge. Don&apos;t
                wait until your quietest month to finally sort your website out.
                Get ahead of it now while you&apos;ve still got momentum.
              </p>
            </div>

            <Button asChild size="lg" className="text-base px-10 animate-glow-pulse">
              <Link href="/quiz">Check If There&apos;s a Spot For You →</Link>
            </Button>

            <p className="text-sm text-zinc-500 mt-4">
              No commitment. No credit card. Just a quick chat to see if
              we&apos;re a good fit.
            </p>
          </motion.div>

          {/* Right: confident business owner image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative aspect-[3/4] rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-amber-500/10">
              <Image
                src="/images/business-owner-success.webp"
                alt="Confident business owner"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
