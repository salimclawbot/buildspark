"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const plans = [
  {
    icon: "⚡",
    name: "Starter",
    price: "$490",
    delivery: "48-hour delivery",
    badge: "Get Online Fast",
    badgeVariant: "default" as const,
    features: [
      "1–3 pages",
      "Mobile-first design",
      "Contact form",
      "Google-ready",
      "Basic SEO",
    ],
    popular: false,
  },
  {
    icon: "🔥",
    name: "Business",
    price: "$790",
    delivery: "5-day delivery",
    badge: "⭐ Most Popular",
    badgeVariant: "amber" as const,
    features: [
      "Up to 5 pages",
      "Local SEO",
      "Google Business setup",
      "1 revision round",
      "Contact & enquiry forms",
    ],
    popular: true,
  },
  {
    icon: "🚀",
    name: "Growth",
    price: "$1,290",
    delivery: "1-week delivery",
    badge: "Maximum Impact",
    badgeVariant: "default" as const,
    features: [
      "Up to 10 pages",
      "Blog setup",
      "Lead capture forms",
      "Google Analytics",
      "SEO foundations",
      "2 revision rounds",
    ],
    popular: false,
  },
];

const carePlan = {
  features: [
    "Hosting included",
    "Domain included",
    "Security updates",
    "Backups",
    "Content updates",
    "Priority support",
  ],
};

const faqs = [
  {
    q: "What is included?",
    a: "Every plan includes design, development, mobile optimisation, basic SEO, and a contact form. Higher tiers add more pages, local SEO, Google Business setup, and revision rounds.",
  },
  {
    q: "How fast is delivery?",
    a: "Our Starter plan can be delivered in as fast as 48 hours. Business plans take around 5 days, and Growth plans around 1 week. We'll confirm your timeline before we start.",
  },
  {
    q: "Do I need to provide content?",
    a: "It helps if you can provide photos and a rough idea of what you want to say. But we can write copy for you and use professional stock images if needed.",
  },
  {
    q: "Can I update the site myself?",
    a: "Yes. We can set you up with a simple content management system, or you can add a Care Plan and we'll handle all updates for you.",
  },
  {
    q: "What if I need more pages?",
    a: "No problem. Additional pages can be added at any time. We'll quote you a fair price based on complexity.",
  },
  {
    q: "Is there a refund policy?",
    a: "If we haven't started building yet, you get a full refund. Once work has begun, we'll work with you to make sure you're happy with the result.",
  },
];

const comparison = [
  {
    feature: "Price",
    buildspark: "From $490",
    agency: "$3,000–$15,000+",
    diy: "$0–$300/yr",
  },
  {
    feature: "Delivery time",
    buildspark: "48hrs – 1 week",
    agency: "4–12 weeks",
    diy: "Weeks of your time",
  },
  {
    feature: "Mobile-ready",
    buildspark: true,
    agency: true,
    diy: "Maybe",
  },
  {
    feature: "SEO included",
    buildspark: true,
    agency: "Often extra",
    diy: false,
  },
  {
    feature: "Ongoing support",
    buildspark: "$49/mo Care Plan",
    agency: "$200+/mo retainer",
    diy: "You're on your own",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function PricingClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Guarantee Banner */}
      <div className="pt-20 lg:pt-24">
        <div className="w-full bg-amber-500/10 border-b border-amber-500/30 py-3 px-4 text-center">
          <p className="text-amber-500 font-bold text-sm sm:text-base">
            Pay 50% upfront — rest only when you love it. No risk.
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-12 pb-6 sm:pt-16 sm:pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Straightforward pricing.{" "}
            <span className="text-amber-500">No surprises.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto">
            Pick your package. No hidden fees. No lock-in contracts.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full flex flex-col ${
                    plan.popular
                      ? "border-amber-500/50 shadow-lg shadow-amber-500/10 relative"
                      : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{plan.icon}</span>
                    <Badge variant={plan.badgeVariant}>{plan.badge}</Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-zinc-500 mb-4">{plan.delivery}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-zinc-500 ml-1 text-sm">one-off</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-zinc-300"
                      >
                        <Check className="w-4 h-4 text-amber-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant={plan.popular ? "default" : "ghost"}
                    size="lg"
                    className={`w-full ${
                      plan.popular ? "animate-glow-pulse" : ""
                    }`}
                  >
                    <Link href={`/quiz?plan=${plan.name.toLowerCase()}`}>Start Your Free Quiz →</Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Care Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 max-w-3xl mx-auto"
          >
            <Card className="border-zinc-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🔧</span>
                    <h3 className="text-xl font-bold text-white">Care Plan</h3>
                    <span className="text-2xl font-bold text-amber-500">
                      $49
                    </span>
                    <span className="text-zinc-500 text-sm">/month</span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-4">
                    Keep your site running. We handle it all.
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {carePlan.features.map((feature) => (
                      <span
                        key={feature}
                        className="flex items-center gap-1.5 text-sm text-zinc-300"
                      >
                        <Check className="w-3.5 h-3.5 text-amber-500" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-zinc-500 mt-3">
                    No lock-in contracts.
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="md:self-center shrink-0"
                >
                  <Link href="/quiz">Get Started →</Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 sm:py-28 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          >
            How we <span className="text-amber-500">compare.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto"
          >
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="py-4 pr-4 text-zinc-500 text-sm font-medium">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-amber-500 text-sm font-semibold">
                    BuildSpark
                  </th>
                  <th className="py-4 px-4 text-zinc-400 text-sm font-medium">
                    Traditional Agency
                  </th>
                  <th className="py-4 pl-4 text-zinc-400 text-sm font-medium">
                    DIY (Wix/Squarespace)
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-zinc-800/50">
                    <td className="py-4 pr-4 text-zinc-300 text-sm">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-sm">
                      {typeof row.buildspark === "boolean" ? (
                        row.buildspark ? (
                          <Check className="w-4 h-4 text-amber-500" />
                        ) : (
                          <X className="w-4 h-4 text-zinc-600" />
                        )
                      ) : (
                        <span className="text-amber-500 font-medium">
                          {row.buildspark}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-sm text-zinc-500">
                      {typeof row.agency === "boolean" ? (
                        row.agency ? (
                          <Check className="w-4 h-4 text-zinc-500" />
                        ) : (
                          <X className="w-4 h-4 text-zinc-600" />
                        )
                      ) : (
                        row.agency
                      )}
                    </td>
                    <td className="py-4 pl-4 text-sm text-zinc-500">
                      {typeof row.diy === "boolean" ? (
                        row.diy ? (
                          <Check className="w-4 h-4 text-zinc-500" />
                        ) : (
                          <X className="w-4 h-4 text-zinc-600" />
                        )
                      ) : (
                        row.diy
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          >
            Frequently asked <span className="text-amber-500">questions.</span>
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <Card>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">{faq.a}</p>
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
            Ready to get <span className="text-amber-500">started?</span>
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
