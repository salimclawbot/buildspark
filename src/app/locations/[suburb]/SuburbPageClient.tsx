"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const reasons = [
  "Sites built in as fast as 48 hours",
  "Simple, transparent pricing from $490",
  "SEO-ready so customers find you on Google",
];

const industryLinks: Record<string, { href: string; emoji: string }> = {
  Trades: { href: "/services/tradies", emoji: "🔨" },
  "Cafes & Restaurants": { href: "/services/cafes", emoji: "☕" },
  Bakeries: { href: "/services/bakeries", emoji: "🍞" },
  Mechanics: { href: "/services/mechanics", emoji: "🔧" },
  Bookkeepers: { href: "/services/bookkeepers", emoji: "📊" },
  "Food & Hospitality": { href: "/services/cafes", emoji: "🍽️" },
  Hospitality: { href: "/services/cafes", emoji: "🍽️" },
  Retail: { href: "/quiz", emoji: "🛍️" },
  "Health Services": { href: "/quiz", emoji: "🏥" },
  "Professional Services": { href: "/quiz", emoji: "💼" },
  "Real Estate": { href: "/quiz", emoji: "🏠" },
  Construction: { href: "/services/tradies", emoji: "🏗️" },
  Manufacturing: { href: "/quiz", emoji: "🏭" },
  Agriculture: { href: "/quiz", emoji: "🌾" },
  Tourism: { href: "/quiz", emoji: "🗺️" },
  Accommodation: { href: "/quiz", emoji: "🛏️" },
  "Creative Services": { href: "/quiz", emoji: "🎨" },
};

const nearbySuburbs: Record<string, string[]> = {
  "warragul": ["drouin", "pakenham", "moe", "korumburra"],
  "geelong": ["belmont", "highton", "lara", "ocean-grove", "torquay"],
  "ballarat": ["wendouree", "sebastopol", "daylesford", "ararat"],
  "bendigo": ["strathdale", "castlemaine", "kyneton"],
  "traralgon": ["morwell", "moe", "warragul", "sale"],
  "shepparton": ["mooroopna", "benalla", "kyabram"],
  "wodonga": ["wangaratta", "benalla", "albury-wodonga"],
  "melton": ["melton-south", "rockbank", "sunbury", "werribee"],
  "werribee": ["hoppers-crossing", "point-cook", "tarneit", "melton"],
  "craigieburn": ["epping", "roxburgh-park", "donnybrook", "wallan"],
  "frankston": ["mornington", "langwarrin", "seaford", "cranbourne"],
  "mornington": ["frankston", "rosebud", "hastings", "dromana"],
  "ringwood": ["croydon", "ferntree-gully", "bayswater", "lilydale"],
  "dandenong": ["noble-park", "springvale", "keysborough", "cranbourne"],
  "pakenham": ["berwick", "cranbourne", "officer", "narre-warren"],
  "geelong-west": ["geelong", "newtown", "highton"],
  "torquay": ["anglesea", "lorne", "ocean-grove", "geelong"],
  "box-hill": ["doncaster", "glen-waverley", "croydon", "ringwood"],
  "brunswick": ["fitzroy", "coburg", "northcote", "moonee-ponds"],
  "footscray": ["sunshine", "werribee", "hoppers-crossing"],
  "epping": ["south-morang", "bundoora", "mill-park", "craigieburn"],
};

export default function SuburbPageClient({
  name,
  region,
  description,
  industries,
  suburbSlug,
}: {
  name: string;
  region: string;
  description: string;
  industries: string[];
  suburbSlug: string;
}) {
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
          {region && (
            <Badge variant="outline" className="mb-4 text-amber-400 border-amber-500/40 bg-amber-500/10">
              {region}
            </Badge>
          )}
          <div className="mb-6">
            <Badge>
              <MapPin className="w-3 h-3 mr-1" /> {name}, Victoria
            </Badge>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Website Design in{" "}
            <span className="text-amber-500">{name}.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            BuildSpark builds fast, affordable websites for businesses in {name}{" "}
            and across Victoria.
          </p>
          {description && (
            <p className="text-base text-zinc-500 max-w-2xl mx-auto mt-4">
              {description}
            </p>
          )}
          {industries.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {industries.map((ind) => (
                <Badge key={ind} variant="outline" className="text-sm">
                  {industryLinks[ind]?.emoji ?? "📌"} {ind}
                </Badge>
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-8"
          >
            Why {name} businesses choose{" "}
            <span className="text-amber-500">BuildSpark.</span>
          </motion.h2>

          <div className="space-y-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <Check className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-lg text-zinc-300">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 sm:py-28 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-8"
          >
            Industries we serve in{" "}
            <span className="text-amber-500">{name}.</span>
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {(industries.length > 0 ? industries : ["Trades", "Cafes & Restaurants", "Mechanics"]).map(
              (ind, i) => {
                const link = industryLinks[ind] ?? { href: "/quiz", emoji: "📌" };
                return (
                  <motion.div
                    key={ind}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <Link href={link.href}>
                      <Card className="text-center hover:border-amber-500/40 transition-colors cursor-pointer">
                        <span className="text-2xl block mb-2">{link.emoji}</span>
                        <span className="text-sm font-medium text-zinc-300">
                          {ind}
                        </span>
                      </Card>
                    </Link>
                  </motion.div>
                );
              }
            )}
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
            <p className="text-zinc-400 mb-2">Websites for {name} businesses from</p>
            <p className="text-4xl font-bold text-amber-500 mb-2">$490</p>
            <p className="text-zinc-500 text-sm">One-off. No hidden fees.</p>
          </Card>
        </motion.div>
      </section>

      {/* Nearby Suburbs */}
      {nearbySuburbs[suburbSlug] && nearbySuburbs[suburbSlug].length > 0 && (
        <section className="py-12 border-t border-white/10">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold text-white mb-4">Nearby Areas We Also Serve</h2>
            <div className="flex flex-wrap gap-3">
              {nearbySuburbs[suburbSlug].map((slug) => (
                <a
                  key={slug}
                  href={`/locations/${slug}`}
                  className="px-4 py-2 rounded-full bg-white/10 text-amber-400 hover:bg-amber-400/20 transition text-sm font-medium capitalize"
                >
                  {slug.replace(/-/g, " ")}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

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
            Ready to grow your {name}{" "}
            <span className="text-amber-500">business?</span>
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
