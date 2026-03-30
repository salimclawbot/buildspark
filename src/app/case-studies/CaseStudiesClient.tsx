"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    resultHeadline: "27 leads/week",
    title: "From 3 Leads a Week to 27 - Werribee Electrician",
    business: "Residential electrician",
    suburb: "Werribee",
    before:
      "Dave had been running his sparky business for 11 years, mostly off word of mouth and the odd Hipages lead that cost him $40 a pop. His website was a five-page template he built himself in 2017. It loaded in 9 seconds on mobile. He was nowhere on Google for \"electrician Werribee\" and was watching newer operators outrank him every month.",
    whatWeDid:
      "We built Dave a fast, mobile-first site targeting the exact suburbs he services. Every page was written around the jobs his customers actually search for: switchboard upgrades, safety inspections, ceiling fan installs. We set up his Google Business Profile properly, added a click-to-call button that works on every page, and built a quote request form that takes 30 seconds to fill in.",
    after:
      "Within 8 weeks, Dave's site was ranking on page one for \"electrician Werribee,\" \"emergency electrician Hoppers Crossing,\" and 14 other local terms. He went from 3 leads a week to 27. His quote requests jumped from 2 per month to 19. He stopped using Hipages entirely and saved over $600 a month in lead gen fees.",
    quote:
      "I was paying Hipages a fortune and fighting five other blokes for every job. Now they come straight to me. Best money I've spent on the business, hands down.",
    author: "Dave R., Werribee",
  },
  {
    resultHeadline: "Top 3 on Google",
    title: "Went From Page 4 on Google to the Top 3 - Footscray Plumber",
    business: "Emergency and general plumber",
    suburb: "Footscray",
    before:
      "Marco's plumbing business had a website his mate built years ago. It looked alright on a desktop but was nearly unusable on a phone. He was buried on page four of Google for \"plumber Footscray\" and was spending $1,200 a month on Google Ads just to get phone calls. Most of his work came from repeat customers and referrals, but new business had dried up.",
    whatWeDid:
      "We rebuilt Marco's site from scratch with a focus on speed and local search. Each service got its own page targeting the suburbs he works in: Footscray, Seddon, Yarraville, Maribyrnong. We added an emergency callout section front and centre with his phone number in bold. We also cleaned up his Google Business Profile, added his service areas, and got his hours and categories right.",
    after:
      "Marco hit the top 3 on Google for \"plumber Footscray\" within 6 weeks. \"Emergency plumber Seddon\" and \"blocked drain Yarraville\" both landed on page one within 10 weeks. His inbound calls went from around 8 a month to 34. He cut his Google Ads spend from $1,200 to $300 and was still getting more work than before.",
    quote:
      "I nearly didn't bother with a new site. Glad I did. I'm turning down jobs now, which is a problem I'm happy to have.",
    author: "Marco T., Footscray",
  },
  {
    resultHeadline: "Orders up 340%",
    title: "Online Orders Up 340% in 60 Days - Brunswick Cafe",
    business: "Specialty coffee and brunch cafe",
    suburb: "Brunswick",
    before:
      "Jas and Priya opened their cafe in 2022. They had an Instagram page with a decent following but no website. Customers were DMing them to ask about opening hours, the menu, and whether they could book a table. They were losing catering enquiries because people couldn't find them on Google and had no way to get in touch besides Instagram.",
    whatWeDid:
      "We built a clean, photo-forward site with their full menu, opening hours, location with embedded map, and a simple catering enquiry form. We added links to their Uber Eats and DoorDash pages, built an events page for their weekend pop-ups, and made sure the site loaded fast on mobile. We also set up their Google Business Profile with photos, hours, and a direct link to the menu.",
    after:
      "Within 60 days, online orders through their delivery partners increased by 340%. Catering enquiries went from about 1 a month to 9. They started ranking for \"brunch Brunswick\" and \"specialty coffee Brunswick\" on page one. Their Instagram DMs asking basic questions dropped by half because everything was on the site.",
    quote:
      "We were answering the same questions on Instagram twenty times a day. Now the website does that for us and we can actually focus on making coffee.",
    author: "Jas K., Brunswick",
  },
  {
    resultHeadline: "$14,200 in orders",
    title: "$14,000 in Wedding Cake Orders From One Page - Collingwood Bakery",
    business: "Artisan bakery and custom cakes",
    suburb: "Collingwood",
    before:
      "Emma had been running her bakery for three years and had built a loyal local following. But her website was a single-page Wix site with no photos of her custom cakes, no pricing guide, and no way to request a quote online. She was getting most of her custom cake enquiries through word of mouth and was missing out on the wedding and event market entirely.",
    whatWeDid:
      "We built Emma a site with a dedicated custom cakes gallery, a pricing guide for different cake sizes, and a quote request form that asked the right questions upfront (date, size, flavour, dietary needs). We created a separate wedding cakes page targeting \"wedding cake Melbourne\" and \"custom wedding cake Collingwood.\" Every page was image-heavy and designed to show off her work.",
    after:
      "The wedding cakes page started ranking on page one for \"custom wedding cake Melbourne\" within 7 weeks. Emma received 23 quote requests in the first two months, 11 of which converted into orders. Total revenue from those orders: $14,200. Her overall site traffic went from around 40 visits a month to 310.",
    quote:
      "I had no idea people were searching for wedding cakes near me and not finding me. That one page paid for the site about eighteen times over.",
    author: "Emma L., Collingwood",
  },
  {
    resultHeadline: "Booked solid 6 weeks",
    title: "Booked Solid for 6 Weeks Straight - Pakenham Mechanic",
    business: "Independent mechanic and car servicing",
    suburb: "Pakenham",
    before:
      "Tommo had run his workshop for 15 years. His old site was built by a bloke who had since gone out of business, and Tommo had no way to update it. The site had no online booking, no reviews, and no mention of the specific services he offered. He was relying on a faded Yellow Pages ad and a Facebook page he rarely updated. New customers had dropped off and he was running at about 60% capacity most weeks.",
    whatWeDid:
      "We built a fast, local-focused site with dedicated pages for each service: logbook servicing, brake repairs, pre-purchase inspections, air conditioning regas. We added a simple online booking form, embedded his Google reviews (he had 47 five-star reviews that nobody could see), and targeted suburbs within 20km of his workshop.",
    after:
      "Tommo hit page one for \"mechanic Pakenham\" and \"car service Pakenham\" within 5 weeks. Online bookings went from zero to 22 in the first month. He was booked solid for 6 weeks straight and had to bring on a part-time apprentice. His weekly revenue went up by roughly $3,800 on average.",
    quote:
      "I've been here fifteen years and never had a website that actually did anything. This one pays for itself every single week.",
    author: "Tommo S., Pakenham",
  },
  {
    resultHeadline: "12 new clients",
    title: "12 New Clients in 8 Weeks - Geelong Bookkeeper",
    business: "BAS agent and bookkeeper",
    suburb: "Geelong",
    before:
      "Sarah had been doing bookkeeping from home for six years, mostly for clients she picked up through networking events and a couple of accountant referrals. She had a basic WordPress site that she never updated. It had no clear list of services, no pricing information, and no way for someone to get started without calling her. She wanted to grow but hated cold outreach and couldn't afford big ad spend.",
    whatWeDid:
      "We built Sarah a professional, trust-focused site with clear service pages (BAS lodgement, payroll, Xero setup, end-of-year tax prep), a transparent pricing section with starting-from rates, and a \"Get Started\" form that asked three simple questions. We targeted \"bookkeeper Geelong,\" \"BAS agent Geelong,\" and \"Xero bookkeeper Geelong\" and made sure her site loaded in under 2 seconds on mobile.",
    after:
      "Sarah's site hit page one for \"bookkeeper Geelong\" within 6 weeks and \"BAS agent Geelong\" within 9 weeks. She received 18 enquiries in the first 8 weeks, 12 of which became ongoing monthly clients. That added roughly $4,800 per month in recurring revenue. She cancelled her networking group membership and now gets all her new clients through the site.",
    quote:
      "I used to dread networking mornings. Now I just check my inbox. Twelve new clients in two months, all from the website. I wish I'd done it sooner.",
    author: "Sarah M., Geelong",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function CaseStudiesClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/case-studies-hero.webp"
            alt="BuildSpark case studies"
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
            <Badge className="mb-6">Real Results From Real Victorian Businesses</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              These Victorian Businesses Were{" "}
              <span className="text-amber-500">Invisible Online.</span>
              <br />
              Then They Got a BuildSpark Site.
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
              No fluff. No vague promises. Just real local businesses, real websites,
              and the exact numbers that followed. Every result below happened within
              90 days of launch.
            </p>
            <Button asChild size="lg" className="text-base">
              <Link href="/quiz">Take the 2-Minute Quiz →</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:gap-14">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl border border-zinc-800 bg-surface overflow-hidden"
              >
                <div className="p-6 sm:p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-amber-500">
                      {cs.resultHeadline}
                    </span>
                    <Badge variant="outline">
                      {cs.business} · {cs.suburb}
                    </Badge>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                    {cs.title}
                  </h3>

                  {/* Before / What We Did / After */}
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {/* Before */}
                    <div className="rounded-xl bg-red-500/5 border border-red-500/10 p-5">
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-red-400 mb-3">
                        Before BuildSpark
                      </span>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {cs.before}
                      </p>
                    </div>

                    {/* What We Did */}
                    <div className="rounded-xl bg-zinc-800/30 border border-zinc-800 p-5">
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                        What We Did
                      </span>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {cs.whatWeDid}
                      </p>
                    </div>

                    {/* After */}
                    <div className="rounded-xl bg-green-500/5 border border-green-500/10 p-5">
                      <span className="inline-block text-xs font-semibold uppercase tracking-wider text-green-400 mb-3">
                        After BuildSpark
                      </span>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        {cs.after}
                      </p>
                      <span className="text-2xl font-bold text-amber-500">
                        {cs.resultHeadline}
                      </span>
                    </div>
                  </div>

                  {/* Quote & Rating */}
                  <blockquote className="border-l-2 border-amber-500/50 pl-5">
                    <p className="text-zinc-300 italic text-base leading-relaxed">
                      &ldquo;{cs.quote}&rdquo;
                    </p>
                    <cite className="text-sm text-zinc-500 not-italic mt-2 block">
                      - {cs.author}
                    </cite>
                    <div className="flex gap-1 mt-3">
                      {[...Array(5)].map((_, s) => (
                        <Star
                          key={s}
                          className="w-4 h-4 fill-amber-500 text-amber-500"
                        />
                      ))}
                    </div>
                  </blockquote>
                </div>
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
            Your Business Could Be{" "}
            <span className="text-amber-500">Next</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-4 max-w-2xl mx-auto">
            Every case study above started the same way: a local business with a
            rubbish website (or no website at all) losing leads to competitors who
            showed up first on Google.
          </p>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            We build fast, local-focused websites for Victorian businesses. No
            lock-in contracts. No monthly fees. No calls required.
          </p>
          <Button asChild size="lg" className="text-base px-10">
            <Link href="/quiz">
              Take the 2-Minute Quiz and See What We&apos;d Build For You →
            </Link>
          </Button>
          <p className="text-zinc-500 text-sm mt-4">
            No phone calls. No meetings. Just a quick quiz and a clear
            recommendation by email.
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
