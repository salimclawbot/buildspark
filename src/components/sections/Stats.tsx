"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  {
    number: "50+",
    label: "Sites Launched",
    context:
      "Not templates. Not cookie-cutter pages. Real websites built for real Victorian businesses that needed results yesterday.",
  },
  {
    number: "5 Days",
    label: "Average Delivery",
    context:
      "Most web agencies take two to three months. We get your site live in days. Because your business can\u2019t afford to wait.",
  },
  {
    number: "4.9 ★",
    label: "Client Rating",
    context:
      "We don\u2019t pad this number. Every review is from a real business owner who picked up the phone more after we launched their site.",
  },
  {
    number: "3x",
    label: "More Enquiries",
    context:
      "On average, our clients see three times more leads within 90 days of going live. That\u2019s what happens when people can actually find you.",
  },
];

export function Stats() {
  return (
    <section className="py-12 sm:py-20 relative">
      {/* Full-width background image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/vic-main-street.webp"
          alt="Victorian main street with local shops and businesses"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-xl border border-zinc-800 bg-surface p-6 text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold text-amber-500 mb-2">
                {stat.number}
              </div>
              <div className="text-white font-semibold text-sm sm:text-base mb-3">
                {stat.label}
              </div>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                {stat.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
