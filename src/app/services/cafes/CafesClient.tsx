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
  "Beautiful online menu display",
  "Booking & reservation links",
  "Google Maps integration",
  "Instagram feed integration",
  "Local SEO to rank in your area",
  "Mobile-first responsive design",
];

export default function CafesClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <Image
          src="/images/service-cafes.webp"
          alt="Cafe interior - BuildSpark website design for cafes and restaurants in Victoria"
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
          <Badge className="mb-6">☕ Built for Hospitality</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Beautiful websites for cafes, restaurants and{" "}
            <span className="text-amber-500">eateries.</span>
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
            Still invisible on <span className="text-amber-500">Google Maps?</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-4">
            Every day, hundreds of people in your area search &apos;cafe near
            me&apos; or &apos;best brunch in [your suburb]&apos;. If your cafe
            doesn&apos;t show up on Google Maps, those customers walk straight
            into your competitor&apos;s door. No website means no visibility -             and no visibility means empty tables.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed mb-4">
            Tourists and new residents rely entirely on Google to decide where to
            eat. They&apos;re not asking locals for recommendations - they&apos;re
            scrolling their phone. If you don&apos;t have a site with your menu,
            photos, and location front and centre, you simply don&apos;t exist
            to them.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Meanwhile, the cafe down the road with a half-decent website is
            taking your bookings. Not because their coffee is better - because
            they showed up first. A website built for hospitality changes that
            overnight.
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
            <p className="text-zinc-400 mb-2">Starter websites from</p>
            <p className="text-4xl font-bold text-amber-500 mb-2">$490</p>
            <p className="text-zinc-500 text-sm">One-off. No hidden fees.</p>
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
            Ready to fill more <span className="text-amber-500">tables?</span>
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
