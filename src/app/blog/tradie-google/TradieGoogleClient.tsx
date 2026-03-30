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
  headline: "5 Reasons Your Tradie Business Isn't Showing Up on Google (And How to Fix It)",
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
    title: "The Complete Cafe Website Guide",
    href: "/blog/cafe-website-guide",
    readTime: "12 min read",
  },
  {
    title: "How a $790 Website Made a Pakenham Mechanic $60,000 in New Business",
    href: "/blog/mechanic-case-study",
    readTime: "3 min read",
  },
];

export default function TradieGoogleClient() {
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
            src="/images/tradie-getting-calls.webp"
            alt="Tradie getting calls from Google"
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
            <Badge className="mb-4">SEO</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              5 Reasons Your Tradie Business Isn&apos;t Showing Up on Google (And
              How to Fix It)
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6 text-zinc-400 text-sm">
              <span>BuildSpark Team</span>
              <span>·</span>
              <span>17 Mar 2026</span>
              <span>·</span>
              <span>5 min read</span>
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
            className="prose-invert"
          >
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              You&apos;re fully licensed. You&apos;ve got years of experience. Your
              customers leave glowing reviews. But when someone in your suburb types
              &ldquo;electrician near me&rdquo; or &ldquo;plumber Werribee&rdquo;
              into Google, you&apos;re not there.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Instead, the bloke who started last year with half your experience is
              sitting at the top of the page, getting all the calls.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              It&apos;s not because he&apos;s better at the job. It&apos;s because
              his online presence is set up properly and yours isn&apos;t.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              Here are the five most common reasons your tradie business isn&apos;t
              showing up on Google, and exactly how to fix each one.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              1. You Don&apos;t Have a Google Business Profile (Or It&apos;s Half-Done)
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              This is the single biggest reason tradies don&apos;t show up in local
              search results. Your Google Business Profile (the listing that shows up
              in the map pack when someone searches for a service near them) is often
              the first thing potential customers see.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              If you haven&apos;t claimed yours, Google doesn&apos;t know you exist.
              If you&apos;ve claimed it but left half the fields blank, Google
              doesn&apos;t trust you enough to show you.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              <strong className="text-white">Quick fix:</strong> Go to
              business.google.com and claim your listing if you haven&apos;t already.
              Fill in everything: your business name, address, phone number, service
              area, opening hours, categories, and add at least 5 photos of your
              work. Make sure your business category is specific.
              &ldquo;Electrician&rdquo; is better than &ldquo;Contractor.&rdquo;
              &ldquo;Emergency Plumber&rdquo; is better than &ldquo;Plumber.&rdquo;
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              2. Your Website Is Slow
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Google measures how fast your site loads and uses it as a ranking
              factor. If your site takes more than 3 seconds to load on a mobile
              phone, two things happen: Google pushes you down the rankings, and the
              person searching gives up and clicks someone else.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Most <a href="/services/tradies" className="text-amber-500 underline hover:text-amber-400">tradie websites</a> we audit load in 6 to 10 seconds on mobile.
              That&apos;s not slow. That&apos;s invisible.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              <strong className="text-white">Quick fix:</strong> Test your site at
              pagespeed.web.dev (it&apos;s free, from Google). If your mobile score
              is under 70, your site is hurting you. The most common culprits are
              oversized images, cheap hosting, and bloated WordPress themes. Compress
              your images, upgrade your hosting, or consider a purpose-built site
              that&apos;s fast from the start.
            </p>

            {/* Mid-post CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 my-10 text-center">
              <p className="text-white font-semibold text-lg mb-3">
                Want help with this? Take our 2-minute quiz.
              </p>
              <p className="text-zinc-400 text-sm mb-4">
                We&apos;ll show you exactly what we&apos;d build for your tradie
                business.
              </p>
              <Button asChild size="default">
                <Link href="/quiz">Start Your Free Quiz →</Link>
              </Button>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              3. You&apos;re Not Using Local Keywords
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              If your website just says &ldquo;We&apos;re a plumbing company that
              provides quality services,&rdquo; Google has no idea where you are or
              what specific jobs you do.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Google matches search queries to web pages. If someone searches
              &ldquo;blocked drain Footscray&rdquo; and your site never mentions
              &ldquo;blocked drain&rdquo; or &ldquo;Footscray,&rdquo; you won&apos;t
              show up. It&apos;s that simple.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              <strong className="text-white">Quick fix:</strong> Make a list of the
              services you offer and the suburbs you work in. Then make sure your
              website mentions those specific combinations. &ldquo;Switchboard
              upgrades in Werribee.&rdquo; &ldquo;Hot water repairs in Hoppers
              Crossing.&rdquo; &ldquo;Ceiling fan installation in Point Cook.&rdquo;
              Each service and suburb combination is a chance to rank for a search
              that a real customer is making right now.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              4. Your Site Isn&apos;t Mobile-Friendly
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Over 70% of local searches happen on a mobile phone. If your website
              was built for desktop and just sort of squishes down on a phone,
              you&apos;re giving a terrible experience to the majority of your
              potential customers.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Tiny text, buttons too small to tap, menus that don&apos;t work, images
              that overflow off the screen. We see it constantly. And Google sees it
              too. Since 2019, Google has used mobile-first indexing, which means it
              judges your site based on the mobile version, not the desktop one.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              <strong className="text-white">Quick fix:</strong> Pull up your website
              on your phone right now. Try to find your phone number and tap it to
              call. Try to fill in your contact form. If either of those things is
              difficult, your site is costing you work. A mobile-first rebuild is
              often the fastest way to fix this properly.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              5. You Have No Reviews (Or They&apos;re Buried)
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Reviews are one of the strongest local ranking signals Google uses. A
              tradie with 50 genuine Google reviews will almost always outrank one
              with 3, even if the second one has a better website.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              But even if you have great reviews, they need to be visible. If your
              reviews are only on Facebook, or only on a third-party site that Google
              doesn&apos;t index, they&apos;re not helping your Google ranking.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              <strong className="text-white">Quick fix:</strong> Start asking every
              happy customer to leave a Google review. Make it easy: send them a
              direct link to your Google review page via text after the job is done.
              You can generate this link from your Google Business Profile dashboard.
              Aim for at least 20 reviews with a 4.5+ star average. Then make sure
              those reviews are visible on your website too, because it builds trust
              with visitors and keeps them on your site longer.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Bottom Line
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              None of these five things are complicated. But together, they&apos;re
              the difference between showing up on page one and being completely
              invisible.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              If you fix even two or three of these, you&apos;ll start seeing more
              calls, more quote requests, and more jobs from people who are actively
              searching for exactly what you do, right in your area.
            </p>

            {/* End CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 text-center">
              <p className="text-white font-bold text-xl mb-3">
                Want us to fix all 5 for you?
              </p>
              <p className="text-zinc-400 mb-4">
                We build fast, local-focused websites for Victorian tradies. No
                calls, no meetings, no lock-in contracts. Take the free 2-minute
                quiz and we&apos;ll show you exactly what we&apos;d build for your
                business.
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
