"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    icon: "🔧",
    name: "Tradies",
    description: 'Websites that rank when someone searches "near me" at 7am with a busted pipe.',
    image: "/images/tradie-getting-calls.webp",
    href: "/services/tradies",
    demoHref: "https://demo-plumbing.buildspark.com.au",
  },
  {
    icon: "☕",
    name: "Cafes & Restaurants",
    description: "Your food's incredible. Your online presence should match.",
    image: "/images/cafe-owner-results.webp",
    href: "/services/cafes",
    demoHref: "https://demo-cafe.buildspark.com.au",
  },
  {
    icon: "🥐",
    name: "Bakeries",
    description: "Make hungry people find you before they find the bakery down the road.",
    image: "/images/service-bakeries.webp",
    href: "/services/bakeries",
    demoHref: "https://demo-bakery.buildspark.com.au",
  },
  {
    icon: "🚗",
    name: "Mechanics",
    description: "Get your workshop booked out with a site that earns trust before they call.",
    image: "/images/service-mechanics.webp",
    href: "/services/mechanics",
    demoHref: "https://demo-mechanic.buildspark.com.au",
  },
  {
    icon: "📊",
    name: "Bookkeepers",
    description: "Look sharp, win clients, and let your website do the first impression.",
    image: "/images/service-bookkeepers.webp",
    href: "/services/bookkeepers",
    demoHref: "https://demo-bookkeeper.buildspark.com.au",
  },
  {
    icon: "🍽️",
    name: "Restaurants",
    description: "Full tables start with a website people actually want to visit.",
    image: "/images/service-cafes.webp",
    href: "/services/cafes",
    demoHref: "https://demo-restaurant.buildspark.com.au",
  },
  {
    icon: "🍛",
    name: "Indian Restaurants",
    description: "A stunning online presence that matches the flavours you serve.",
    image: "/images/service-cafes.webp",
    href: "/services/cafes",
    demoHref: "https://demo-indian.buildspark.com.au",
  },
  {
    icon: "🥯",
    name: "Bagel Shops",
    description: "Fresh branding for fresh bakes — get customers through the door.",
    image: "/images/cafe-owner-results.webp",
    href: "/services/cafes",
    demoHref: "https://demo-bagel.buildspark.com.au",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export function WhoWeBuildFor() {
  return (
    <section className="py-14 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Built for local businesses that{" "}
            <span className="text-amber-500">mean business.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Every site we build is designed for your industry - not a generic template.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link href={industry.href} className="block group h-full">
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                  {/* Background image */}
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Dark gradient overlay - stronger at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <span className="text-2xl mb-2">{industry.icon}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{industry.name}</h3>
                    <p className="text-sm text-zinc-300 leading-snug mb-4">{industry.description}</p>

                    {/* Buttons row */}
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-amber-400 group-hover:text-amber-300 transition-colors">
                        Learn more →
                      </span>
                      <a
                        href={industry.demoHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm font-semibold text-white/70 border border-white/30 rounded-full px-3 py-1 hover:bg-white/10 hover:text-white transition-all"
                      >
                        View Demo
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
