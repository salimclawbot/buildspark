"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function SparkParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 6,
    duration: 4 + Math.random() * 4,
    size: 8 + Math.random() * 12,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute text-amber-500/20 select-none"
          style={{
            left: p.left,
            bottom: "-20px",
            fontSize: `${p.size}px`,
          }}
          animate={{
            y: [0, -800],
            opacity: [0, 0.4, 0.2, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ⚡
        </motion.span>
      ))}
    </div>
  );
}


const rotatingWords = [
  "Clinic",
  "Builder",
  "Cafe",
  "Equine Brand",
  "Specialist",
  "Tradie",
  "Security Team",
  "Bookkeeper",
  "Restaurant",
  "Local Brand",
];


const marqueeItems = [
  "$250 per month. Website, care, and tracking.",
  "Built for clinics, trades, hospitality and professional services",
  "No $3,000-$5,000 upfront invoice",
  "No contracts. No lock-in.",
  "SEO foundations from day one",
  "Calls, clicks and form leads tracked",
  "Designed to make people trust you faster",
];

function InlineMarquee() {
  const content = marqueeItems.map((item, i) => (
    <span key={i} className="flex items-center gap-4 whitespace-nowrap">
      <span className="text-sm font-medium text-zinc-400">{item}</span>
      <span className="text-amber-500 text-xs">⚡</span>
    </span>
  ));
  return (
    <motion.div
      className="flex gap-8"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ x: { duration: 30, repeat: Infinity, ease: "linear" } }}
    >
      <div className="flex gap-8 shrink-0">{content}</div>
      <div className="flex gap-8 shrink-0">{content}</div>
    </motion.div>
  );
}

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % rotatingWords.length);
        setFadeIn(true);
      }, 300);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-16 sm:pt-20 pb-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-background to-background pointer-events-none" />

      <SparkParticles />

      {/* Ambient gradient */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 sm:mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-500 font-medium">
                ⚡ Managed websites for $250/month
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6"
            >
              Hey{" "}
              <span
                className="text-white transition-opacity duration-300"
                style={{ opacity: fadeIn ? 1 : 0 }}
              >
                {rotatingWords[wordIndex]}.
              </span>{" "}
              <span className="text-amber-500">
                Your Website Should Make You Look Like the Obvious Choice.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg sm:text-xl text-zinc-400 max-w-xl mb-6 sm:mb-8 leading-relaxed"
            >
              We build premium managed websites for clinics, trades, hospitality,
              equine, professional services and local businesses. Website, hosting,
              care, content and lead tracking for $250 per month.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-5 sm:mb-8"
            >
              <Button asChild size="lg" className="text-base px-8">
                <Link href="/quiz">Start the Website Quiz →</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-base">
                <Link href="#how-it-works">See How It Works →</Link>
              </Button>
            </motion.div>

            {/* Star rating */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex items-center gap-2 mb-4 sm:mb-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-amber-500 text-lg">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-zinc-400">
                4.9 stars from 50+ Victorian businesses
              </span>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 mb-0"
            >
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-500">✓</span> No lock-in
                contracts
              </span>
              <span className="hidden sm:inline text-zinc-700">|</span>
              <span className="flex items-center gap-1.5">
                <span className="text-amber-500">⚡</span> Monthly updates included
              </span>
              <span className="hidden sm:inline text-zinc-700">|</span>
              <span className="flex items-center gap-1.5">
                <span className="text-emerald-500">✓</span> 100% remote - no
                meetings
              </span>
            </motion.div>

                      </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative aspect-[4/3] rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-amber-500/10">
              <Image
                src="/images/website-call-now.webp"
                alt="Professional website with click-to-call functionality"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Inline Marquee strip */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="border-t border-zinc-800/60 overflow-hidden py-3 bg-black/30 backdrop-blur-sm">
          <InlineMarquee />
        </div>
      </div>
    </section>
  );
}
