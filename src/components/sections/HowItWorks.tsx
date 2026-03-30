"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Business",
    subtitle: "You talk. We listen.",
    description:
      "Fill out our 2-minute quiz. Tell us your business type, where you are, and what you want your site to do. No calls, no meetings, no back-and-forth.",
  },
  {
    number: "02",
    title: "We Build Your Site in Days",
    subtitle: "We get to work while you get to work.",
    description:
      "Our team designs and builds your site fast. You\u2019ll see a mockup within 48 hours. Not a mood board. Not a \u201Cconcept deck.\u201D An actual website you can look at and say, \u201CYeah, that\u2019s me.\u201D",
  },
  {
    number: "03",
    title: "You Review. We Refine.",
    subtitle: "Your site. Your way.",
    description:
      "We send it over. You tell us what you love and what you\u2019d change. We make it happen. Two rounds of revisions included. No extra charges for having an opinion.",
  },
  {
    number: "04",
    title: "Go Live and Start Getting Leads",
    subtitle: "Flick the switch.",
    description:
      "Your site goes live. Google starts indexing it. Your phone starts ringing. We set up analytics so you can see exactly where your leads are coming from. Then we stick around to make sure everything keeps working.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 sm:py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-surface/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Simple process.{" "}
            <span className="text-amber-500">Fast results.</span>
          </h2>
        </motion.div>

        {/* Desktop: horizontal timeline + decorative image */}
        <div className="hidden lg:flex gap-12 items-start">
          <div className="flex-1 grid grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="absolute top-16 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-amber-500/30" />

            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="text-center relative"
              >
                <div className="text-7xl font-bold text-amber-500/20 mb-4 leading-none">
                  {step.number}
                </div>
                <div className="w-3 h-3 rounded-full bg-amber-500 mx-auto mb-6 relative z-10 shadow-lg shadow-amber-500/50" />
                <h3 className="text-lg font-semibold text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-amber-500 text-xs font-medium mb-2">
                  {step.subtitle}
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Decorative mobile preview image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="shrink-0 w-56"
          >
            <div className="relative aspect-[3/4] rounded-xl border border-white/10 overflow-hidden">
              <Image
                src="/images/website-mobile.webp"
                alt="Website displayed on a mobile phone"
                fill
                className="object-cover"
                sizes="224px"
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden space-y-12 relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-[5px] top-4 bottom-4 w-px border-l-2 border-dashed border-amber-500/30" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50" />
              <div className="text-5xl font-bold text-amber-500/20 leading-none mb-2">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {step.title}
              </h3>
              <p className="text-amber-500 text-xs font-medium mb-1">
                {step.subtitle}
              </p>
              <p className="text-sm text-zinc-400">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Google #1 result image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="relative w-full max-w-2xl mx-auto aspect-[16/9] rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-amber-500/10">
            <Image
              src="/images/google-number-one.webp"
              alt="Ranking #1 on Google search results"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="text-zinc-400 text-sm mt-4 italic">
            This is what winning on Google looks like.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
