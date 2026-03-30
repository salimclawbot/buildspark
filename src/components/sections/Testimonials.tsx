"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "I was sceptical. Spent two grand on a website five years ago and got nothing from it. BuildSpark had mine done in four days and I started getting calls the next week. Genuinely wish I\u2019d done this sooner.",
    name: "Dave Mitchell",
    business: "Mitchell Electrical",
    suburb: "Werribee",
    highlight: "started getting calls the next week",
  },
  {
    quote:
      "I kept putting off getting a website because I thought it\u2019d be this massive expensive project. It wasn\u2019t. The whole thing was done before I knew it. Now people find us on Google instead of just stumbling past the door. Huge difference.",
    name: "Mia Nguyen",
    business: "Little Sparrow Cafe",
    suburb: "Northcote",
    highlight: "people find us on Google",
  },
  {
    quote:
      "The boys at BuildSpark just get it. No fancy pitches. No nonsense. They asked what I needed, built it, and it works. I\u2019m booked out two weeks straight now and I\u2019ve had to start turning down jobs. Good problem to have.",
    name: "Rob Caruso",
    business: "Caruso Plumbing",
    suburb: "Ballarat",
    highlight: "booked out two weeks straight",
  },
  {
    quote:
      "I run a one-woman show and I didn\u2019t have the time or energy to figure out a website. They made it painless. I\u2019ve picked up six new clients since it went live. The booking form alone was worth it.",
    name: "Sarah Okonkwo",
    business: "SO Bookkeeping",
    suburb: "Geelong",
    highlight: "six new clients",
  },
  {
    quote:
      "Mate, I\u2019ve been in this workshop 18 years and never had a website. My daughter kept telling me I needed one. She was right. Three months in and I\u2019m busier than I\u2019ve been in years. Can\u2019t argue with that.",
    name: "Tommo Papadopoulos",
    business: "Tom\u2019s Auto",
    suburb: "Dandenong",
    highlight: "busier than I\u2019ve been in years",
  },
  {
    quote:
      "I was paying some bloke $150 a month just to keep my old site hosted. It looked terrible and did nothing. BuildSpark built me a proper site for less than what I was paying annually. I get at least 5 new enquiries a week now. Bloody game changer.",
    name: "Jess Thornton",
    business: "Thornton Tiling",
    suburb: "Melton",
    highlight: "5 new enquiries a week",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function renderQuoteWithHighlight(quote: string, highlight: string) {
  const idx = quote.indexOf(highlight);
  if (idx === -1) return <>{quote}</>;
  return (
    <>
      {quote.slice(0, idx)}
      <strong className="text-amber-400 font-semibold">{highlight}</strong>
      {quote.slice(idx + highlight.length)}
    </>
  );
}

export function Testimonials() {
  return (
    <section id="about" className="py-14 sm:py-24 relative">
      <div className="absolute inset-0 bg-surface/30" />

      {/* Decorative Google #1 image */}
      <div className="absolute top-8 right-8 w-48 h-48 opacity-[0.06] pointer-events-none hidden lg:block">
        <Image
          src="/images/google-number-one.webp"
          alt="Google number one ranking badge"
          fill
          className="object-contain"
          sizes="192px"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Real businesses.{" "}
            <span className="text-amber-500">Real results.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={cardVariants}>
              <Card className="h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-amber-500 text-sm">
                      ★
                    </span>
                  ))}
                </div>

                <blockquote className="text-zinc-300 text-lg leading-relaxed flex-1 mb-6">
                  &ldquo;{renderQuoteWithHighlight(t.quote, t.highlight)}&rdquo;
                </blockquote>

                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-zinc-500 text-xs">
                    {t.business}, {t.suburb}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
