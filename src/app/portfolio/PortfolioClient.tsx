"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

const projects = [
  { name: "Peak Plumbing & Gas", industry: "Plumber", color: "from-blue-500/20", url: "https://demo-plumbing.buildspark.com.au", image: "/images/portfolio/portfolio-plumbing.jpg" },
  { name: "The Morning Press", industry: "Cafe", color: "from-amber-500/20", url: "https://demo-cafe.buildspark.com.au", image: "/images/portfolio/portfolio-cafe.jpg" },
  { name: "Golden Crust Bakery", industry: "Bakery", color: "from-orange-500/20", url: "https://demo-bakery.buildspark.com.au", image: "/images/portfolio/portfolio-bakery.jpg" },
  { name: "Summit Auto", industry: "Mechanic", color: "from-red-500/20", url: "https://demo-mechanic.buildspark.com.au", image: "/images/portfolio/portfolio-mechanic.jpg" },
  { name: "ClearLedger", industry: "Bookkeeper", color: "from-emerald-500/20", url: "https://demo-bookkeeper.buildspark.com.au", image: "/images/portfolio/portfolio-bookkeeper.jpg" },
  { name: "Ember & Oak", industry: "Restaurant", color: "from-purple-500/20", url: "https://demo-restaurant.buildspark.com.au", image: "/images/portfolio/portfolio-restaurant.jpg" },
  { name: "Spice Garden", industry: "Indian Restaurant", color: "from-orange-500/20", url: "https://demo-indian.buildspark.com.au", image: "/images/portfolio/portfolio-indian.jpg" },
  { name: "The Bagel Co.", industry: "Cafe & Bakery", color: "from-yellow-500/20", url: "https://demo-bagel.buildspark.com.au", image: "/images/portfolio/portfolio-bagel.jpg" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function PortfolioClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        <Image
          src="/images/portfolio-hero.webp"
          alt="BuildSpark portfolio - websites built for Victorian local businesses"
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="text-amber-500">work.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Every site we build is fast, mobile-ready, and built to convert.
          </p>
        </motion.div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:border-amber-500/40 transition-colors group">
                  <div className="aspect-video -m-6 mb-4 overflow-hidden relative">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${project.color} to-zinc-900 flex items-center justify-center`}>
                        <span className="text-4xl font-bold text-white/20">{project.name[0]}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white">
                        {project.name}
                      </h3>
                      <Badge variant="default">Live Site</Badge>
                    </div>
                    <p className="text-sm text-zinc-500 mb-3">{project.industry}</p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-amber-500 hover:text-amber-400 transition-colors"
                    >
                      View Demo →
                    </a>
                  </div>
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
            Want a site like <span className="text-amber-500">this?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Take our free quiz and get a tailored recommendation for your
            business.
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
