"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const plans = [
  {
    icon: "⚡",
    name: "Managed Website",
    price: "$250",
    delivery: "per month",
    badge: "Website + care",
    badgeVariant: "amber" as const,
    features: [
      "Website design and build",
      "Hosting and domain setup support",
      "SSL, security and backups",
      "Monthly changes",
      "Monthly article or page update",
      "Lead tracking and SEO foundations",
    ],
    popular: true,
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

export function Pricing() {
  return (
    <section id="pricing" className="py-14 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            One clear plan.{" "}
            <span className="text-amber-500">$250 per month.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Website, hosting, security, backups, changes, content, SEO basics and lead tracking.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 max-w-xl mx-auto gap-6 lg:gap-8 mt-16">
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
                  <span className="text-zinc-500 ml-1 text-sm">/month</span>
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
                  <Link href="/quiz">Start the Website Quiz →</Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Scope note */}
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
                  <h3 className="text-xl font-bold text-white">Included every month</h3>
                </div>
                <p className="text-zinc-400 text-sm mb-4">
                  Final inclusions are confirmed after the quiz so the scope is clear before anything starts.
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {[
                    "Hosting",
                    "Domain setup support",
                    "Security",
                    "Backups",
                    "Content updates",
                    "Lead tracking",
                  ].map((feature) => (
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
                  Larger builds, ecommerce, booking systems, or complex integrations may need separate scope.
                </p>
              </div>
              <Button asChild variant="outline" size="lg" className="md:self-center shrink-0">
                <Link href="/quiz">Get Started →</Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
