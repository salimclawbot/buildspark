"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";

const stats = [
  { number: "50+", label: "Sites Launched" },
  { number: "4.9", label: "Star Average" },
  { number: "48hr", label: "Delivery" },
  { number: "Victoria", label: "Wide" },
];

const testimonials = [
  {
    quote:
      "We went from zero web enquiries to 19 in our first month. I'm not exaggerating. We had literally never received a single lead through our old website in two years. BuildSpark changed that overnight.",
    name: "Dave R.",
    location: "Werribee",
    industry: "Electrician",
    result: "3 leads/week to 27 leads/week",
  },
  {
    quote:
      "The whole process was done over email and a quick quiz. No Zoom calls. No awkward sales meeting. I filled in the quiz on a Monday night and had a draft site by Thursday. Genuinely the easiest thing I've done for my business.",
    name: "Sarah M.",
    location: "Geelong",
    industry: "Bookkeeper",
    result: "12 new ongoing clients in 8 weeks",
  },
  {
    quote:
      "I'd been paying $150 a month for a website that did nothing. BuildSpark was a one-off payment, the site was ten times better, and I started getting calls within a fortnight. Wish I'd done it two years ago.",
    name: "Marco T.",
    location: "Footscray",
    industry: "Plumber",
    result: "Page 4 on Google to Top 3",
  },
  {
    quote:
      "They built a wedding cakes page that I didn't even ask for and it's now responsible for about 40% of my revenue. They understood what my customers were searching for better than I did.",
    name: "Emma L.",
    location: "Collingwood",
    industry: "Baker",
    result: "$14,200 in orders from one page",
  },
  {
    quote:
      "I'm not a tech person. At all. I run a fish and chip shop. BuildSpark made it dead simple. The site looks great, it loads fast, and people can find us on Google now. That's all I needed.",
    name: "Con P.",
    location: "Reservoir",
    industry: "Fish & Chip Shop Owner",
    result: "3x increase in weeknight orders",
  },
  {
    quote:
      "We run a small accounting firm and our old site looked like it was built in 2008 because it was. BuildSpark made us look professional again. We've had 9 new clients enquire through the site in the first 6 weeks.",
    name: "Michelle K.",
    location: "Bendigo",
    industry: "Accountant",
    result: "9 new client enquiries in 6 weeks",
  },
  {
    quote:
      "What I liked was the honesty. They told me straight up that my Google Business Profile was wrong and that was costing me more than the old site. Fixed it as part of the build. No extra charge.",
    name: "Tommo S.",
    location: "Pakenham",
    industry: "Mechanic",
    result: "Booked solid for 6 weeks straight",
  },
  {
    quote:
      "I've tried three different web designers before. One ghosted me, one charged me $4,000 for something I hated, and one gave me a template that looked like everyone else's. BuildSpark was the first one that actually delivered what they promised.",
    name: "Rachel G.",
    location: "Frankston",
    industry: "Dog Groomer",
    result: 'Page 1 for "dog groomer Frankston" in 4 weeks',
  },
  {
    quote:
      "The quiz thing sounded gimmicky but it actually worked. They asked the right questions and the site they came back with was spot on. No back and forth. No endless revisions. Just a site that works.",
    name: "James H.",
    location: "Ballarat",
    industry: "Carpenter",
    result: "14 quote requests in first month",
  },
  {
    quote:
      "I was sceptical because it seemed too cheap. $790 for a full website? But the quality is better than the $3,500 one I paid for three years ago. Way better. And it actually brings in work.",
    name: "Priya N.",
    location: "Brunswick",
    industry: "Cafe Owner",
    result: "Online orders up 340% in 60 days",
  },
  {
    quote:
      "My daughter told me I needed a website. I kept putting it off because I thought it would be a nightmare. BuildSpark made it easy. The whole thing was done in a week and I didn't have to sit through a single meeting.",
    name: "Gary W.",
    location: "Dandenong",
    industry: "Locksmith",
    result: "11 new calls per month from Google",
  },
  {
    quote:
      "They don't just build a pretty website. They build one that actually gets found. That's the difference. I'm ranking for stuff I didn't even know people searched for. Best investment I've made this year.",
    name: "Steph A.",
    location: "Geelong",
    industry: "Personal Trainer",
    result: "22 new client enquiries in 10 weeks",
  },
];

const differentiators = [
  {
    title: "No Calls, No Meetings, No Wasted Time",
    body: 'Every BuildSpark site starts with a 2-minute quiz and is delivered entirely by email. You don\'t need to take an afternoon off work to sit through a discovery call. Over 50 business owners have gone through this process and the most common feedback we get is: "That was way easier than I expected."',
  },
  {
    title: "One Price. No Monthly Fees. No Lock-In.",
    body: "You pay once and the site is yours. No $99/month hosting fees. No 12-month contracts. No surprise invoices. When we surveyed our first 50 clients, 38 of them said hidden ongoing costs were the main reason they'd avoided getting a website before.",
  },
  {
    title: "Built for Local Search, Not Just Looks",
    body: "A good-looking site that nobody finds is a waste of money. Every BuildSpark site is built from the ground up to rank for local search terms in your area. 87% of our clients rank on page one of Google for at least one target keyword within 60 days of launch.",
  },
  {
    title: "Real Humans, Real Support",
    body: "We're a small team based in Victoria. You won't get a chatbot or a ticket number. If something needs fixing, you email us and a real person sorts it out. Usually the same day. Our average response time is under 3 hours.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function ReviewsClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/reviews-hero.webp"
            alt="BuildSpark reviews"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              50+ Victorian Businesses Already Made the Switch.{" "}
              <span className="text-amber-500">Here&apos;s What They Said.</span>
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto">
              We don&apos;t do sales calls. We don&apos;t do high-pressure demos. We
              let the websites speak for themselves. And then we let the business
              owners speak for themselves too.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-zinc-800 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-amber-500">
                  {stat.number}
                </div>
                <div className="text-zinc-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-xl border border-zinc-800 bg-surface p-6 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-zinc-300 text-sm leading-relaxed flex-1 mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Result */}
                <p className="text-amber-500 text-xs font-semibold mb-3">
                  {t.result}
                </p>

                {/* Author */}
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-zinc-500 text-xs">
                    {t.location} · {t.industry}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets BuildSpark Apart */}
      <section className="py-16 sm:py-24 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why Do So Many Local Businesses Choose{" "}
              <span className="text-amber-500">BuildSpark?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-xl border border-zinc-800 bg-surface p-8"
              >
                <h3 className="text-xl font-bold text-white mb-4">{d.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-amber-500">Join Them?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            50+ Victorian businesses already have a website that actually works for
            them. No calls. No contracts. No monthly fees. Take the quiz and see what
            we&apos;d build for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="text-base px-10">
              <Link href="/quiz">Take the 2-Minute Quiz →</Link>
            </Button>
            <a
              href="mailto:hello@buildspark.com.au"
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Or email us at hello@buildspark.com.au
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
