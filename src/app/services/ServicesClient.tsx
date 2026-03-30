"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Tradies",
    description: "Get the phone ringing with a site built for your trade.",
    href: "/services/tradies",
    emoji: "🔨",
  },
  {
    title: "Cafes & Restaurants",
    description: "Beautiful sites with menus, bookings, and local SEO.",
    href: "/services/cafes",
    emoji: "☕",
  },
  {
    title: "Bakeries",
    description: "Showcase what you bake and get customers through the door.",
    href: "/services/bakeries",
    emoji: "🍞",
  },
  {
    title: "Mechanics",
    description: "More bookings for your workshop with less effort.",
    href: "/services/mechanics",
    emoji: "🔧",
  },
  {
    title: "Bookkeepers",
    description: "Win clients before you even speak to them.",
    href: "/services/bookkeepers",
    emoji: "📊",
  },
  {
    title: "Other Local Business",
    description: "Any local business that needs a site that actually works.",
    href: "/quiz",
    emoji: "🏪",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function ServicesClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Websites for every kind of{" "}
            <span className="text-amber-500">local business.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            We build fast, sharp sites tailored to your industry. Pick yours
            below.
          </p>
        </motion.div>
      </section>

      {/* Service Cards */}
      <section className="pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link href={service.href} className="block h-full">
                  <Card className="h-full hover:border-amber-500/40 hover:scale-[1.02] transition-all cursor-pointer group">
                    <span className="text-4xl mb-4 block">{service.emoji}</span>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 mb-4">{service.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-amber-500 font-medium group-hover:gap-2 transition-all">
                      See more <ArrowRight className="w-4 h-4" />
                    </span>
                  </Card>
                </Link>
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
            Not sure what you need?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Take our free quiz and we&apos;ll recommend the perfect package for
            your business.
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
