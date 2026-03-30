"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "We speak plain English",
    description:
      "No jargon, no fluff. We explain everything in plain language so you always know what you\u2019re getting.",
    image: "/images/cafe-owner-laptop.webp",
    alt: "Cafe owner using a laptop to manage their website",
  },
  {
    title: "We build fast",
    description:
      "Most sites go live in 48 hours to 5 days. No months-long timelines or endless back-and-forth.",
    image: "/images/spark-launch.webp",
    alt: "Lightning bolt energy concept representing fast delivery",
  },
  {
    title: "We know local business",
    description:
      "We\u2019re based in Victoria and build specifically for Aussie local businesses. We get it.",
    image: "/images/tradie-phone.webp",
    alt: "Australian tradie talking on the phone with a customer",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export function WhyUs() {
  return (
    <section className="py-14 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why choose{" "}
            <span className="text-amber-500">BuildSpark?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 mb-6">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
