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
  "Product showcase with mouth-watering gallery",
  "Opening hours display",
  "Online order links",
  "Google ranking optimisation",
  "Mobile-first responsive design",
  "Contact form & location map",
];

export default function BakeriesClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <Image
          src="/images/service-bakeries.webp"
          alt="Fresh baked goods on display - BuildSpark website design for bakeries in Victoria"
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
          <Badge className="mb-6">🍞 Built for Bakeries</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Show off what you bake. Get more customers{" "}
            <span className="text-amber-500">through the door.</span>
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
            Baking great products but not enough people{" "}
            <span className="text-amber-500">know it?</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-4">
            Every morning, people in your area Google &apos;bakery near me&apos;
            before they&apos;ve even left the house. If you don&apos;t show up,
            they drive straight past your shop to the one that did. No Google
            visibility means you&apos;re missing the morning rush - the biggest
            revenue window of your day.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed mb-4">
            Without a website, you can&apos;t take online orders. No pre-orders
            for birthday cakes, no catering enquiries from local businesses, no
            weekend croissant orders from families who would happily pay in
            advance. That&apos;s money left on the table every single week.
          </p>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Your competitor with a basic website and an online menu is capturing
            the customers who should be yours. Not because they bake better -             because they&apos;re easier to find.
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
            Ready to grow your <span className="text-amber-500">bakery?</span>
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
