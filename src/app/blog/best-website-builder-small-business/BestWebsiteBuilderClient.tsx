"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const relatedPosts = [
  {
    title: "How Much Does a Website Cost in Australia?",
    href: "/blog/how-much-does-a-website-cost",
    readTime: "6 min read",
  },
  {
    title: "7 Things Every Tradie Website Must Have",
    href: "/blog/tradie-website-tips",
    readTime: "5 min read",
  },
];

export default function BestWebsiteBuilderClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-workspace.webp"
            alt="Comparing website builders for small business"
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
            <Badge className="mb-4">Business</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              Wix vs WordPress vs Custom: What&apos;s Best for Small Business?
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6 text-zinc-400 text-sm">
              <span>BuildSpark Team</span>
              <span>&middot;</span>
              <span>17 Mar 2026</span>
              <span>&middot;</span>
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
              Every small business owner eventually asks the same question: &ldquo;Should I use Wix?
              WordPress? Squarespace? Or get something custom built?&rdquo; The answer depends on what
              you actually need&mdash;and most local businesses are choosing wrong. Here&apos;s the
              honest comparison, with no affiliate links and no agenda beyond helping you make the
              right call.
            </p>

            {/* Wix */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Wix: Easy But Limited
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Wix is a drag-and-drop website builder, and it&apos;s great for getting something online
              quickly. You pick a template, move things around, add your text and photos, and
              you&apos;re live. No coding required. For someone who just wants a basic web presence as
              fast as possible, it ticks the box.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li>
                <strong className="text-white">Pros:</strong> Easy to use, templates look decent out of the box,
                no technical skills needed
              </li>
              <li>
                <strong className="text-white">Cons:</strong> Slow page speeds (and Google penalises this), limited
                SEO control, you&apos;re locked into their platform, and costs add up at $20&ndash;$50 per month
              </li>
            </ul>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              The verdict: Wix is fine for a hobby site or a placeholder page, but it&apos;s not great
              for a business that actually needs Google traffic. The page speed issues alone can tank
              your search rankings, and the limited SEO tools mean you&apos;re fighting with one hand
              tied behind your back.
            </p>

            {/* WordPress */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              WordPress: Powerful But Complex
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              WordPress powers roughly 40% of the web, and for good reason. It&apos;s flexible,
              there&apos;s a plugin for almost everything, and with the right setup, it can be
              excellent for SEO. But &ldquo;with the right setup&rdquo; is doing a lot of heavy
              lifting in that sentence.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li>
                <strong className="text-white">Pros:</strong> Extremely flexible, massive plugin ecosystem,
                genuinely good SEO capabilities with the right plugins
              </li>
              <li>
                <strong className="text-white">Cons:</strong> Needs constant updates, security vulnerabilities are
                common, requires separate hosting, plugins conflict with each other, and the learning
                curve is steep
              </li>
            </ul>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Here&apos;s the reality most people don&apos;t tell you: WordPress is the
              &ldquo;free&rdquo; platform that somehow costs $50&ndash;$200 per month in hosting,
              premium plugins, security tools, and maintenance. If you&apos;re not technically minded,
              you&apos;ll spend more time managing the website than running your business. And if you
              skip the updates, you&apos;re asking to get hacked.
            </p>

            {/* Squarespace */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Squarespace: Pretty But Weak SEO
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Squarespace has some of the most beautiful templates on the market. If you&apos;re a
              photographer, designer, or creative professional, the visual appeal is hard to beat. The
              editor is intuitive, and the finished product looks polished.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li>
                <strong className="text-white">Pros:</strong> Gorgeous designs, easy-to-use editor, good for
                visual portfolios
              </li>
              <li>
                <strong className="text-white">Cons:</strong> Limited customisation beyond the templates, weaker
                SEO than WordPress, expensive for what you get at $25&ndash;$50 per month, and slow
                loading times
              </li>
            </ul>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Squarespace is best for portfolios and creatives who want something that looks stunning
              with minimal effort. But for a local business chasing Google rankings and trying to
              convert visitors into customers, the limited SEO tools and slow speeds work against you.
            </p>

            {/* Custom Agency */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Custom Agency Build: Professional But Expensive
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Going to a web development agency gets you a fully custom design built from scratch.
              Everything is tailored to your brand, your audience, and your goals. The result is
              usually excellent&mdash;if you can afford it and if you can wait for it.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li>
                <strong className="text-white">Pros:</strong> Exactly what you want, unique design, full control
                over every detail
              </li>
              <li>
                <strong className="text-white">Cons:</strong> $5K&ndash;$50K+, takes 8&ndash;12 weeks to deliver,
                and you need a developer for every single change
              </li>
            </ul>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Custom agency builds make sense for larger businesses with bigger budgets and complex
              requirements. For a local tradie, cafe owner, or small service business, it&apos;s
              overkill. You don&apos;t need a $15,000 website to show up on Google and book more jobs.
            </p>

            {/* Mid CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 my-10 text-center">
              <p className="text-white font-semibold text-lg mb-3">
                Not sure what&apos;s right for your business? Take the quiz&mdash;we&apos;ll tell you.
              </p>
              <p className="text-zinc-400 text-sm mb-4">
                Answer a few quick questions and get a personalised recommendation with zero pressure.
              </p>
              <Button asChild size="default">
                <Link href="/quiz">Start Your Free Quiz &rarr;</Link>
              </Button>
            </div>

            {/* BuildSpark */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              BuildSpark: Done-For-You, Affordable, Fast
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              BuildSpark sits in the sweet spot between DIY builders and expensive agencies. You get
              the best of custom&mdash;without the price tag. Professional sites built with modern
              technology (Next.js), optimised for speed and local SEO, and delivered in days rather
              than months. Pricing ranges from $490 to $1,290, depending on what you need.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              No DIY headaches. No agency invoices that make your eyes water. No ongoing maintenance
              burden or plugin updates to worry about. You get a site that loads fast, ranks on
              Google, and actually brings in customers. That&apos;s the whole point of having a
              website in the first place.
            </p>

            {/* Comparison Table */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Comparison at a Glance
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Here&apos;s how the options stack up across the four things that matter most:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li>
                <strong className="text-white">Speed:</strong> Wix (slow) / WordPress (varies) /
                Squarespace (slow) / Custom agency (fast) / BuildSpark (fast)
              </li>
              <li>
                <strong className="text-white">SEO:</strong> Wix (basic) / WordPress (good with plugins) /
                Squarespace (limited) / Custom agency (excellent) / BuildSpark (excellent)
              </li>
              <li>
                <strong className="text-white">Cost:</strong> Wix ($240&ndash;$600/yr) / WordPress
                ($600&ndash;$2,400/yr) / Squarespace ($300&ndash;$600/yr) / Custom agency
                ($5K&ndash;$50K) / BuildSpark ($490&ndash;$1,290 one-time)
              </li>
              <li>
                <strong className="text-white">Time to launch:</strong> Wix (days, DIY) / WordPress (weeks) /
                Squarespace (days, DIY) / Custom agency (months) / BuildSpark (days, done for you)
              </li>
            </ul>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              When you look at it side by side, the pattern is clear. DIY builders are cheap but slow
              and limited. Agencies are excellent but expensive and slow to deliver. BuildSpark gives
              you agency-quality results at a fraction of the cost, delivered in a fraction of the
              time.
            </p>

            {/* Bottom Line */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Bottom Line
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              If you&apos;re a local business that needs to show up on Google and convert visitors
              into paying customers, you need something fast, SEO-optimised, and professional.
              That&apos;s not a DIY Wix site with slow page speeds and basic SEO. And it doesn&apos;t
              need to be a $15K agency build that takes three months to deliver.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              You need something in the middle&mdash;a professional site built with modern tools,
              optimised for search, and delivered quickly at a price that makes sense for a small
              business. That&apos;s exactly what BuildSpark was built to do.
            </p>

            {/* End CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 text-center">
              <p className="text-white font-bold text-xl mb-3">
                Ready to skip the DIY and get a site that works?
              </p>
              <p className="text-zinc-400 mb-4">
                Take our free 2-minute quiz and we&apos;ll show you exactly what we&apos;d build for
                your business&mdash;no calls, no pressure.
              </p>
              <Button asChild size="lg" className="text-base">
                <Link href="/quiz">Start Your Free Quiz &rarr;</Link>
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
