"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function WhyCheapWebsitesFailClient() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 sm:py-32 bg-zinc-950">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Badge variant="outline" className="mb-4 border-amber-500/30 text-amber-400">
            Business
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Why $99 Websites Always Fail (And What to Do Instead)
          </h1>
          <p className="text-zinc-400 text-sm">
            BuildSpark Team &middot; 17 Mar 2026 &middot; 4 min read
          </p>
        </div>
      </section>

      {/* Article */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl px-6 pb-24"
      >
        <article>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            You&apos;ve seen the ads. &ldquo;Get a professional website for just $99!&rdquo; It sounds like a dream
            deal&mdash;especially when you&apos;re a small business owner watching every dollar. But here&apos;s what
            those ads don&apos;t tell you: ultra-cheap websites almost always cost you more in the long run.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            We&apos;ve seen it play out dozens of times. A business owner pays next to nothing for a website, launches
            it, and wonders why the phone never rings. Six months later they&apos;re back to square one, having wasted
            both time and money. Let&apos;s break down exactly why this happens.
          </p>

          {/* The $99 Promise */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            The $99 Promise
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            At this price point, you&apos;re not getting a custom-built website. You&apos;re getting a pre-made template
            with your logo slapped on top and some stock photos thrown in. The provider spends maybe an hour on your
            site&mdash;because that&apos;s all the budget allows. There&apos;s no discovery call, no brand strategy, no
            thought given to how your customers actually find and use your site. It&apos;s a factory line, not a service.
          </p>

          {/* Template Limitations */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Template Limitations
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Cookie-cutter templates make every business look the same. Your plumbing company ends up looking like a yoga
            studio that ends up looking like a dog groomer. Visitors can&apos;t tell what makes you different because the
            site doesn&apos;t communicate anything unique about your business. Worse, these templates are often bloated
            with unnecessary code that slows your site to a crawl. When a potential customer has to wait five seconds for
            your page to load, they leave&mdash;and they don&apos;t come back.
          </p>

          {/* Zero SEO */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Zero SEO
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            A website that nobody can find is a website that doesn&apos;t exist. Cheap providers skip search engine
            optimisation entirely. There are no meta descriptions, no keyword strategy, no structured data, and no
            thought given to how Google indexes your pages. Your site ends up buried on page ten of search results where
            no customer will ever see it. You might as well not have a website at all.
          </p>

          {/* No Support When Things Break */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            No Support When Things Break
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            And things will break. Plugins need updating. Security patches need applying. Contact forms stop working.
            SSL certificates expire. With a $99 website, support is either non-existent or costs extra per incident.
            You&apos;re left Googling error messages at midnight when your site goes down the week you&apos;re running a
            promotion. It&apos;s stressful, unprofessional, and completely avoidable.
          </p>

          {/* Mid-article CTA */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 my-10 text-center">
            <p className="text-white font-semibold text-lg mb-3">Wondering what a proper website actually costs?</p>
            <p className="text-zinc-400 text-sm mb-4">Take our free 2-minute quiz and get a personalised recommendation for your business.</p>
            <Button asChild size="default">
              <Link href="/quiz">Start Your Free Quiz &rarr;</Link>
            </Button>
          </div>

          {/* Hidden Costs Add Up */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Hidden Costs Add Up
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            That $99 price tag rarely stays at $99. Need a contact form? Extra. Want more than three pages? Extra. Need
            your site to work properly on mobile? You guessed it&mdash;extra. By the time you&apos;ve added the basics
            that any functional business website needs, you&apos;ve spent $500 to $800 on something that still
            underperforms. You&apos;ve paid near-professional prices for an amateur result.
          </p>

          {/* What to Do Instead */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            What to Do Instead
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            You don&apos;t need to spend $10,000 at a big agency to get a website that works. The smart middle ground is
            a professionally built site that&apos;s designed for your specific business, optimised for search engines,
            fast on every device, and backed by real support. That&apos;s exactly what BuildSpark delivers&mdash;starting
            from just $490. You get a site that&apos;s custom-designed, lightning fast, SEO-ready, and built to actually
            bring in customers. No templates, no hidden fees, no crossing your fingers and hoping for the best.
          </p>

          {/* The Bottom Line */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            The Bottom Line
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Your website is often the first impression a potential customer has of your business. A cheap, generic site
            tells them you&apos;re not serious. A fast, professional site tells them you&apos;re the real deal. The
            difference between the two isn&apos;t thousands of dollars&mdash;it&apos;s making the right choice about
            where to invest. Skip the $99 gamble. Invest in something that actually works.
          </p>
        </article>

        {/* End CTA */}
        <section className="mt-16 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 sm:p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Get a Website That Actually Works?
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Take our free 2-minute quiz and we&apos;ll put together a personalised plan for your business&mdash;no
            obligations, no sales calls.
          </p>
          <Button asChild size="lg">
            <Link href="/quiz">Take the Free Quiz &rarr;</Link>
          </Button>
        </section>

        {/* Related Posts */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8">Related Posts</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Link
              href="/blog/how-much-does-a-website-cost"
              className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-amber-500/30"
            >
              <p className="text-white font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                How Much Does a Website Cost in Australia?
              </p>
              <p className="text-zinc-400 text-sm">
                A no-nonsense breakdown of website costs in Australia for 2026.
              </p>
            </Link>
            <Link
              href="/blog/website-speed"
              className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-amber-500/30"
            >
              <p className="text-white font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                Why Website Speed Matters for Small Businesses
              </p>
              <p className="text-zinc-400 text-sm">
                How a slow website costs you customers and what to do about it.
              </p>
            </Link>
          </div>
        </section>
      </motion.div>

      <Footer />
    </main>
  );
}
