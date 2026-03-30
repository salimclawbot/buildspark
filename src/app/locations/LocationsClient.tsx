"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Search } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { regions, suburbsByRegion } from "@/data/suburbs";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.4 },
  }),
};

export default function LocationsClient() {
  const [search, setSearch] = useState("");

  const filteredRegions = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return regions.map((r) => ({ region: r, suburbs: suburbsByRegion[r] ?? [] }));

    return regions
      .map((region) => {
        const subs = (suburbsByRegion[region] ?? []).filter(
          (s) =>
            s.name.toLowerCase().includes(q) ||
            s.region.toLowerCase().includes(q)
        );
        return { region, suburbs: subs };
      })
      .filter((r) => r.suburbs.length > 0);
  }, [search]);

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
            Serving local businesses across{" "}
            <span className="text-amber-500">Victoria.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
            BuildSpark builds websites for businesses in regional and metro
            Victoria. Find your area below.
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search suburbs or regions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-zinc-700 bg-zinc-900 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors"
            />
          </div>
        </motion.div>
      </section>

      {/* Location Grid by Region */}
      <section className="pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredRegions.map(({ region, suburbs: regionSuburbs }) => {
            if (regionSuburbs.length === 0) return null;
            return (
              <div key={region}>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl sm:text-3xl font-bold mb-6"
                >
                  {region}
                </motion.h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
                  {regionSuburbs.map((location, i) => (
                    <motion.div
                      key={location.slug}
                      custom={i}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Link href={`/locations/${location.slug}`} className="block">
                        <Card className="text-center hover:border-amber-500/40 hover:scale-[1.02] transition-all cursor-pointer group">
                          <MapPin className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                          <h3 className="text-base font-semibold text-white group-hover:text-amber-500 transition-colors">
                            {location.name}
                          </h3>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}

          {filteredRegions.length === 0 && search && (
            <div className="text-center py-12">
              <p className="text-zinc-400 text-lg">
                No suburbs found for &ldquo;{search}&rdquo;
              </p>
              <p className="text-zinc-500 mt-2">
                Try a different search term, or take our quiz and we&apos;ll get back to you.
              </p>
            </div>
          )}
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
            Don&apos;t see your area?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            We serve all of Victoria. Take our quiz and we&apos;ll get back to
            you.
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
