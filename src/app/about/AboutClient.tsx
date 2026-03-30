"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const values = [
  {
    icon: "⚡",
    title: "Move Fast",
    description:
      "We don't sit on projects for weeks. Most sites launch within days, not months.",
  },
  {
    icon: "🎯",
    title: "No Fluff",
    description:
      "No jargon, no upsells, no bloated proposals. You get exactly what you need.",
  },
  {
    icon: "📍",
    title: "Local First",
    description:
      "We're Victorian. We understand local business because we are local business.",
  },
];

const stats = [
  { value: "50+", label: "Sites launched" },
  { value: "48hr", label: "Fastest delivery" },
  { value: "100%", label: "Remote team" },
  { value: "5★", label: "Client rated" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function AboutClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <Image
          src="/images/about-team.webp"
          alt="The BuildSpark team - Victorian web design specialists"
          fill
          priority
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            We are <span className="text-amber-500">BuildSpark.</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto">
            A lean Victorian web team obsessed with building sites that work.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4 sm:px-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Our <span className="text-amber-500">story.</span>
          </h2>
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              BuildSpark started because we saw a problem. Local businesses in
              Victoria were getting ripped off - paying thousands for slow,
              overcomplicated websites from agencies that didn&apos;t understand
              what a tradie or a cafe actually needs.
            </p>
            <p>
              We&apos;re not a big agency. We&apos;re a tight crew of designers
              and developers who care about one thing: building websites that
              actually get your phone ringing. No fluff, no six-week timelines,
              no mystery invoices.
            </p>
            <p>
              Every site we build is fast, mobile-ready, and optimised for local
              search. Because that&apos;s what matters when you&apos;re running a
              business - not fancy animations or buzzwords. Just results.
            </p>
          </div>
        </motion.div>
      </section>

      {/* What We Stand For */}
      <section className="py-20 sm:py-28 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          >
            What we <span className="text-amber-500">stand for.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:border-amber-500/40 transition-colors">
                  <span className="text-4xl mb-4 block">{value.icon}</span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-zinc-400">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20 sm:py-28 border-t border-zinc-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          >
            By the <span className="text-amber-500">numbers.</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-amber-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 sm:py-28 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          >
            Meet the <span className="text-amber-500">team.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { name: "Matt", role: "Founder & Lead Developer", initial: "M" },
              { name: "Oz", role: "Design & Strategy", initial: "O" },
              { name: "The BuildSpark Crew", role: "Web Specialists", initial: "BS" },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:border-amber-500/40 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-amber-500/10 border-2 border-amber-500/30 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-amber-500">{member.initial}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-zinc-400">{member.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
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
            Ready to <span className="text-amber-500">build?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Take our free quiz and get a tailored website recommendation in
            minutes.
          </p>
          <Button asChild size="lg" className="text-base px-10">
            <Link href="/quiz">Start Your Free Quiz →</Link>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
