"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How a $790 Website Made a Pakenham Mechanic $60,000 in New Business",
  author: { "@type": "Organization", name: "BuildSpark Team" },
  datePublished: "2026-03-17",
  publisher: {
    "@type": "Organization",
    name: "BuildSpark",
    url: "https://buildspark.com.au",
  },
};

const relatedPosts = [
  {
    title: "5 Reasons Your Tradie Business Isn't Showing Up on Google",
    href: "/blog/tradie-google",
    readTime: "5 min read",
  },
  {
    title: "The Complete Cafe Website Guide",
    href: "/blog/cafe-website-guide",
    readTime: "12 min read",
  },
];

export default function MechanicCaseStudyClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/google-number-one.webp"
            alt="Mechanic ranking number one on Google"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Case Study</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              How a $790 Website Made a Pakenham Mechanic $60,000 in New Business
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6 text-zinc-400 text-sm">
              <span>BuildSpark Team</span>
              <span>·</span>
              <span>17 Mar 2026</span>
              <span>·</span>
              <span>3 min read</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article */}
      <article className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Tommo has run his workshop in Pakenham for 15 years. He&apos;s a good
              mechanic. His customers know it. He&apos;s got 47 five-star reviews on
              Google. People who find him tend to stick with him.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              The problem was that not enough people were finding him.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Problem
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Tommo&apos;s website was built about 8 years ago by a bloke who has
              since gone out of business. It was a basic five-page site with a stock
              photo of a spanner on the homepage, a paragraph about &ldquo;quality
              service,&rdquo; and a phone number buried in the footer.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              It loaded in about 9 seconds on a mobile phone. It wasn&apos;t
              mobile-friendly. It had no online booking. It didn&apos;t mention a
              single specific service. It didn&apos;t mention Pakenham, Officer,
              Berwick, or any of the suburbs Tommo actually services.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              When someone searched &ldquo;mechanic Pakenham&rdquo; on Google, Tommo
              was nowhere. Not page one. Not page two. Nowhere in the top 50 results.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              His 47 five-star Google reviews were doing nothing because nobody was
              finding his listing through his website. He was running at about 60%
              capacity most weeks and relying on a fading base of repeat customers.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              He told us he&apos;d thought about getting a new website a few times
              but figured it probably wouldn&apos;t make much difference.
              &ldquo;Websites are just digital business cards, aren&apos;t
              they?&rdquo; he said.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Solution
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Tommo filled in the BuildSpark quiz on a Sunday night. Took him about 2
              minutes. We sent him a site recommendation by email the following
              Tuesday.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              His new site had dedicated pages for each of his core services: logbook
              servicing, brake repairs, pre-purchase inspections, air conditioning
              regas, and general car servicing. Each page targeted the specific
              suburbs around his workshop: Pakenham, Officer, Berwick, Beaconsfield,
              Nar Nar Goon.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              We added an online booking form that let customers pick a service,
              choose a date, and leave their car details. It took about 30 seconds to
              fill in.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              We embedded his 47 Google reviews directly on the homepage so visitors
              could see them straight away without having to go to Google separately.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              The whole site was built to load in under 2 seconds on mobile. Clean,
              fast, and built for the way people actually search for <a href="/services/mechanics" className="text-amber-500 underline hover:text-amber-400">mechanics</a>.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              Total cost: $790. One-off. No monthly fees.
            </p>

            {/* Mid-post CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 my-10 text-center">
              <p className="text-white font-semibold text-lg mb-3">
                Want help with this? Take our 2-minute quiz.
              </p>
              <p className="text-zinc-400 text-sm mb-4">
                We&apos;ll show you what we&apos;d build for your business.
              </p>
              <Button asChild size="default">
                <Link href="/quiz">Start Your Free Quiz →</Link>
              </Button>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Result
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Within 5 weeks, Tommo&apos;s site was ranking on page one for
              &ldquo;mechanic Pakenham&rdquo; and &ldquo;car service
              Pakenham.&rdquo; By week 8, he was also showing up for &ldquo;logbook
              service Officer&rdquo; and &ldquo;pre-purchase inspection
              Berwick.&rdquo;
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              In the first month, he received 22 online bookings through the new
              form. That was 22 bookings that didn&apos;t exist before because there
              was no way for people to book.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              He went from running at 60% capacity to being fully booked for 6 weeks
              straight. He had to bring on a part-time apprentice to keep up.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Here are the numbers from the first 12 months:
            </p>
            <div className="rounded-xl border border-zinc-800 bg-surface p-6 mb-10">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-zinc-400 text-sm">Online bookings</p>
                  <p className="text-amber-500 text-2xl font-bold">247</p>
                  <p className="text-zinc-500 text-xs">(from zero)</p>
                </div>
                <div>
                  <p className="text-zinc-400 text-sm">Average job value</p>
                  <p className="text-amber-500 text-2xl font-bold">$340</p>
                </div>
                <div>
                  <p className="text-zinc-400 text-sm">New revenue from website</p>
                  <p className="text-amber-500 text-2xl font-bold">$63,580</p>
                </div>
                <div>
                  <p className="text-zinc-400 text-sm">Return on investment</p>
                  <p className="text-amber-500 text-2xl font-bold">7,948%</p>
                </div>
              </div>
            </div>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              That&apos;s not a typo. A $790 website generated over $60,000 in new
              business in its first year.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What Made the Difference
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              It wasn&apos;t magic. It wasn&apos;t a fancy design or a viral
              marketing campaign. It was three simple things:
            </p>
            <div className="space-y-4 mb-10">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  1. He showed up on Google.
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  His old site was invisible. His new site was built for local search
                  from day one. When people searched for a mechanic in his area, he
                  appeared.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  2. People could book instantly.
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  No calling during business hours. No leaving a voicemail and hoping
                  for a callback. Just pick a service, pick a date, done.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  3. His reviews were visible.
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  47 five-star reviews are incredibly persuasive. But only if people
                  can see them. Embedding them on his site turned browsers into
                  bookers.
                </p>
              </div>
            </div>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              Tommo&apos;s exact words when we checked in at the 6-month mark:
              &ldquo;I&apos;ve been here fifteen years and never had a website that
              actually did anything. This one pays for itself every single
              week.&rdquo;
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Your Turn
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              If you&apos;re a local business in Victoria and your website
              isn&apos;t bringing in new customers, it&apos;s probably not because
              your business isn&apos;t good enough. It&apos;s because your website
              isn&apos;t working hard enough.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              A website that&apos;s built for local search, loads fast, and makes it
              easy for people to take action can change your business. It changed
              Tommo&apos;s.
            </p>

            {/* End CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 text-center">
              <p className="text-white font-bold text-xl mb-3">
                Take the free 2-minute quiz
              </p>
              <p className="text-zinc-400 mb-4">
                See what we&apos;d build for your business. No calls. No meetings.
                Just a clear recommendation by email.
              </p>
              <Button asChild size="lg" className="text-base">
                <Link href="/quiz">Start Your Free Quiz →</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 sm:py-24 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8">Related Posts</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="group block rounded-xl border border-zinc-800 bg-surface p-6 hover:border-amber-500/30 transition-colors"
                >
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-zinc-500 text-sm">{post.readTime}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
