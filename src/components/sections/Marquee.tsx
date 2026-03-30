"use client";

import { motion } from "framer-motion";

const items = [
  "Websites that get tradies booked out",
  "Live in 5 days, not 5 months",
  "From $490. Seriously.",
  "Built for cafes that want full tables",
  "No contracts. No lock-in.",
  "Google-ready from day one",
  "Your phone. Ringing. More.",
  "Mechanics who rank on page one",
  "Bakeries people can actually find",
  "50+ Victorian businesses trust us",
  "Mobile-first. Always.",
  "Stop losing leads to your competitors",
];

const marqueeContent = items.map((item, i) => (
  <span key={i} className="flex items-center gap-4 whitespace-nowrap">
    <span className="text-lg font-semibold text-zinc-300">{item}</span>
    <span className="text-amber-500 text-sm">⚡</span>
  </span>
));

export function Marquee() {
  return (
    <section className="py-6 bg-surface/50 border-y border-zinc-800/50 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {/* Double the content for seamless loop */}
          <div className="flex gap-8 shrink-0">
            {marqueeContent}
          </div>
          <div className="flex gap-8 shrink-0">
            {marqueeContent}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
