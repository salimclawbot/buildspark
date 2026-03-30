"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const relatedPosts = [
  {
    title: "5 Reasons Your Tradie Business Isn\u2019t Showing Up on Google",
    href: "/blog/tradie-google",
    readTime: "5 min read",
  },
  {
    title: "Why Cheap Websites Fail (And What to Do Instead)",
    href: "/blog/why-cheap-websites-fail",
    readTime: "4 min read",
  },
];

export default function WebsiteSpeedClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Performance</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              Your Website Is Too Slow and It&apos;s Costing You Customers
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
              You&apos;ve invested in a website. Maybe you paid a designer, maybe you
              built it yourself, maybe a mate did it for you on the cheap. Either way,
              it&apos;s live, it looks decent, and you assumed it was doing its job.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              But here&apos;s the thing nobody told you: if your website takes more than
              three seconds to load, most visitors leave before they ever see it. They
              don&apos;t read your services. They don&apos;t see your reviews. They
              don&apos;t call you. They just hit the back button and click on your
              competitor instead.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              A slow website isn&apos;t just annoying. It&apos;s actively costing you
              money, every single day.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The 3-Second Rule
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Research from Google shows that 53% of mobile users abandon a site that
              takes longer than three seconds to load. That&apos;s not a guideline or a
              suggestion. It&apos;s a hard behavioural threshold. If your website
              doesn&apos;t load in three seconds, you&apos;re losing more than half your
              visitors before they even arrive.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Think about what that means for a small business. If you&apos;re getting
              200 visitors a month and your site takes five seconds to load, you could be
              losing over 100 of those people. That&apos;s 100 potential customers who
              never saw your phone number, never read a testimonial, never filled in
              your contact form.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              The 3-second rule isn&apos;t just about user patience. Google uses page
              speed as a ranking factor. A slow site gets pushed down in search results,
              which means fewer people find you in the first place. It&apos;s a double
              hit: less traffic and worse conversion.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What Google PageSpeed Is Really Telling You
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Google offers a free tool called PageSpeed Insights at
              pagespeed.web.dev. You type in your URL, and it gives your site a score
              out of 100 for both mobile and desktop performance. Most small business
              websites we audit score between 20 and 50 on mobile. That&apos;s not
              mediocre. That&apos;s failing.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              A score under 50 means your site has serious performance problems that are
              actively hurting your visibility and your conversions. A score between 50
              and 89 means there&apos;s room for improvement. A score of 90 or above is
              considered good. The sites we build at BuildSpark consistently score 95 or
              higher on both mobile and desktop.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              The important thing to understand is that the mobile score matters far
              more than the desktop score. Google uses mobile-first indexing, which means
              it judges and ranks your site based on the mobile experience. If your
              desktop score is 85 but your mobile score is 35, you&apos;ve got a
              problem.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Image Optimisation (The Easy Win)
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              The single biggest reason most small business websites are slow is
              unoptimised images. Someone uploads a photo straight from their phone or
              camera, and that image is 4MB. Multiply that by ten images across your
              site and you&apos;re asking visitors to download 40MB of data just to see
              your homepage.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Modern image formats like WebP and AVIF can reduce file sizes by 60-80%
              with no visible loss in quality. A 4MB JPEG becomes a 400KB WebP. Lazy
              loading ensures images below the fold don&apos;t load until the visitor
              scrolls to them. Proper sizing means you&apos;re not serving a
              3000-pixel-wide image to a 400-pixel-wide phone screen.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              These are not advanced techniques. They&apos;re standard practice for any
              competent web developer. If your current site isn&apos;t doing this,
              it&apos;s because whoever built it didn&apos;t prioritise performance.
            </p>

            {/* Mid-article CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 my-10 text-center">
              <p className="text-white font-semibold text-lg mb-3">
                Not sure how fast your site is? We&apos;ll tell you for free.
              </p>
              <p className="text-zinc-400 text-sm mb-4">
                Take our 2-minute quiz and we&apos;ll audit your current site&apos;s
                performance as part of your custom proposal.
              </p>
              <Button asChild size="default">
                <Link href="/quiz">Start Your Free Quiz &rarr;</Link>
              </Button>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Your Hosting Matters More Than You Think
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Cheap shared hosting is one of the most common performance killers for
              small business websites. When your site shares a server with hundreds of
              other websites, you&apos;re competing for resources. During peak hours,
              your site slows to a crawl.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              The location of your server matters too. If your business is in Melbourne
              but your site is hosted on a server in the United States, every visitor
              has to wait for data to travel across the Pacific Ocean and back. That
              adds hundreds of milliseconds to every single page load.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Modern hosting solutions use CDNs (Content Delivery Networks) that serve
              your site from the closest server to each visitor. Edge hosting and static
              site generation can bring load times down to under one second. The
              difference is dramatic and your visitors will feel it immediately.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Mobile Speed Is Non-Negotiable
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              More than 60% of all web traffic in Australia now comes from mobile
              devices. For local businesses, that number is even higher. When someone
              searches for a service on their phone, they&apos;re often ready to act
              right now. They want to call, get directions, or fill in a form.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              But mobile connections are typically slower than broadband. Your site
              needs to be even leaner and faster on mobile than on desktop. If
              you&apos;ve only ever tested your website on your office Wi-Fi, you have
              no idea what your customers are actually experiencing.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Test your site on your phone using mobile data, not Wi-Fi. That&apos;s
              the real experience your customers are having. If it feels slow to you,
              it feels slow to them. And they won&apos;t wait.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Core Web Vitals Explained Simply
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Google uses three specific metrics called Core Web Vitals to measure user
              experience on your site. You don&apos;t need to memorise the technical
              names, but you should know what they measure.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              The first is loading speed: how quickly does the main content of your page
              appear? The second is interactivity: how quickly does your site respond
              when someone taps a button or clicks a link? The third is visual
              stability: does the page jump around while it&apos;s loading, or does
              everything stay in place?
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              If your site fails on any of these three metrics, Google considers it a
              poor user experience and adjusts your ranking accordingly. These
              aren&apos;t optional nice-to-haves. They&apos;re ranking factors that
              directly affect where you show up in search results.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Bottom Line
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Website speed isn&apos;t a technical detail you can ignore. It&apos;s a
              business problem with a direct line to your revenue. Every second of delay
              costs you visitors, conversions, and search rankings.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              The good news is that speed is a solvable problem. With the right
              technology, proper image handling, quality hosting, and a mobile-first
              approach, your website can load in under two seconds. That&apos;s fast
              enough to keep every visitor, impress Google, and convert browsers into
              paying customers.
            </p>

            {/* End CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 text-center">
              <p className="text-white font-bold text-xl mb-3">
                Ready for a website that actually performs?
              </p>
              <p className="text-zinc-400 mb-4">
                We build lightning-fast websites for small businesses across Victoria.
                No lock-in contracts, no bloated code, no excuses. Take the free
                2-minute quiz and we&apos;ll show you exactly what we&apos;d build for
                your business.
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
