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
  headline: "Website Design in Geelong: What Local Businesses Need to Know in 2026",
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
    title: "How Much Does a Website Actually Cost in Australia?",
    href: "/blog/how-much-does-a-website-cost",
    readTime: "5 min read",
  },
  {
    title: "The Complete Local SEO Guide for Victorian Small Businesses",
    href: "/blog/local-seo-victoria",
    readTime: "6 min read",
  },
];

export default function WebsiteDesignGeelongClient() {
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
            src="/images/hero-workspace.webp"
            alt="Website design for Geelong businesses"
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
            <Badge className="mb-4">Web Design</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              Website Design in Geelong: What Local Businesses Need to Know in 2026
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6 text-zinc-400 text-sm">
              <span>BuildSpark Team</span>
              <span>·</span>
              <span>17 Mar 2026</span>
              <span>·</span>
              <span>6 min read</span>
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
              Geelong has changed. What was once Melbourne&apos;s quiet neighbour is now one of Australia&apos;s fastest-growing regional cities. New suburbs, new businesses, new families moving in every week. If you&apos;re running a local business in Geelong, the Bellarine, or the Surf Coast, the question isn&apos;t whether you need a website. It&apos;s whether the one you have (or don&apos;t have) is actually helping you grow.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              In this guide, we&apos;ll cover what Geelong businesses specifically need from a website in 2026, what it should cost, and how to avoid the mistakes we see every day.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Why Geelong Businesses Need a Website Now More Than Ever
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Geelong&apos;s population hit 300,000 in 2025 and is projected to keep climbing. That means thousands of new residents who don&apos;t know the local businesses yet. They&apos;re not asking neighbours for recommendations. They&apos;re Googling &ldquo;plumber <a href="/locations/geelong" className="text-amber-500 underline hover:text-amber-400">Geelong</a>&rdquo; or &ldquo;best cafe <a href="/locations/belmont" className="text-amber-500 underline hover:text-amber-400">Belmont</a>&rdquo; from their phones.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              If you don&apos;t have a website, or your site looks like it was built in 2015, you&apos;re invisible to these people. And your competitors who do have a decent online presence? They&apos;re picking up the customers you should be getting.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              The Geelong region also has unique advantages for local SEO. Competition for local keywords is lower than Melbourne, which means a well-optimised website can get you to page one of Google much faster and for much less money than in the city.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What a Good Geelong Business Website Includes
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              A website for a local Geelong business doesn&apos;t need to be complicated. But it does need to do a few things really well:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li><strong className="text-white">Local keywords baked in.</strong> Your site should mention Geelong, your specific suburb, and the surrounding areas you serve. &ldquo;Electrician Geelong West&rdquo; and &ldquo;plumber <a href="/locations/ocean-grove" className="text-amber-500 underline hover:text-amber-400">Ocean Grove</a>&rdquo; are the searches that bring in paying customers.</li>
              <li><strong className="text-white">Mobile-first design.</strong> Over 70% of local searches in Geelong happen on mobile. Your site must look great and load fast on a phone.</li>
              <li><strong className="text-white">Google Maps integration.</strong> Show people exactly where you are. A map embed with your Google Business Profile listing builds trust and helps with local SEO.</li>
              <li><strong className="text-white">Clear calls to action.</strong> Phone number, contact form, or booking link above the fold. Don&apos;t make people scroll to find out how to reach you.</li>
              <li><strong className="text-white">Fast loading speed.</strong> Under 3 seconds. Anything slower and Google penalises you, and visitors leave.</li>
              <li><strong className="text-white">Real photos.</strong> Stock photos of smiling people in suits don&apos;t build trust with Geelong locals. Use real photos of your team, your work, your shopfront.</li>
              <li><strong className="text-white">Google reviews displayed.</strong> If you&apos;ve got good reviews (and you should be actively collecting them), show them on your site.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              How Much Does a Website Cost in Geelong?
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Website pricing in Geelong varies wildly, and most of the pricing you&apos;ll see doesn&apos;t make sense for a small local business. Here&apos;s the realistic breakdown:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li><strong className="text-white">Free DIY (Wix, Squarespace):</strong> $0 upfront but you&apos;re doing everything yourself. Looks generic, slow to load, and won&apos;t rank well on Google without serious SEO work.</li>
              <li><strong className="text-white">Budget template site:</strong> $490–$990. A professionally built site using modern tools. Fast, mobile-friendly, and optimised for local search. This is the sweet spot for most Geelong small businesses.</li>
              <li><strong className="text-white">Custom agency build:</strong> $5,000–$15,000+. Full custom design, multiple rounds of revisions, project managers. Makes sense for large businesses but is overkill for a tradie, cafe, or local service provider.</li>
            </ul>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              For most Geelong businesses, spending $490 on a properly built, fast, SEO-optimised site will deliver a better return than a $10,000 agency build that takes three months to launch.
            </p>

            {/* Mid-post CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 my-10 text-center">
              <p className="text-white font-semibold text-lg mb-3">
                Geelong business owner? Take our 2-minute quiz.
              </p>
              <p className="text-zinc-400 text-sm mb-4">
                We&apos;ll show you exactly what we&apos;d build for your business - tailored to your industry and location.
              </p>
              <Button asChild size="default">
                <Link href="/quiz">Start Your Free Quiz →</Link>
              </Button>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The BuildSpark Approach for Geelong Businesses
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              We&apos;ve built websites for dozens of Victorian local businesses, and here&apos;s what we&apos;ve learned: Geelong businesses don&apos;t need flashy. They need fast, local, and effective.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Every BuildSpark site comes with local SEO built in from day one. We research the specific keywords people in your area are searching for, optimise your site for those terms, and make sure Google knows exactly where you are and what you do.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Our sites are built with modern technology that loads in under 2 seconds on mobile. No bloated WordPress themes, no page builders that add 15 unnecessary scripts. Just clean, fast code that Google loves and your customers can actually use.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              And we do it all asynchronously. No awkward sales calls, no meetings, no waiting around for someone to get back to you. Take the quiz, tell us about your business, and we&apos;ll show you exactly what we&apos;d build.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Common Mistakes Geelong Businesses Make With Their Websites
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              After auditing hundreds of local business websites across the Geelong region, these are the mistakes we see over and over:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li><strong className="text-white">No suburb mentions.</strong> Your site says &ldquo;Geelong&rdquo; once in the footer and never mentions the specific suburbs you serve. Google can&apos;t rank you for &ldquo;plumber Lara&rdquo; if the word &ldquo;Lara&rdquo; is nowhere on your site.</li>
              <li><strong className="text-white">Paying for hosting they don&apos;t need.</strong> We see businesses paying $50/month for hosting when modern platforms offer free or near-free hosting that&apos;s actually faster.</li>
              <li><strong className="text-white">No Google Business Profile.</strong> Your website and your Google Business Profile work together. If you only have one, you&apos;re leaving money on the table.</li>
              <li><strong className="text-white">Set and forget.</strong> A website isn&apos;t a brochure you print once. It needs fresh content, updated information, and regular review to keep performing.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Bottom Line
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Geelong is growing fast, and the businesses that have a strong online presence now are the ones that will capture the new customers moving into the region. A well-built, locally optimised website isn&apos;t a luxury. For Geelong businesses in 2026, it&apos;s the bare minimum.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              The good news is that it doesn&apos;t have to cost a fortune or take months. A smart, focused site built for your specific business and location can be live in days, not weeks, and start bringing in customers from Google almost immediately.
            </p>

            {/* End CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 text-center">
              <p className="text-white font-bold text-xl mb-3">
                Ready to get your Geelong business online properly?
              </p>
              <p className="text-zinc-400 mb-4">
                Take our free 2-minute quiz. We&apos;ll show you exactly what we&apos;d build for your business - optimised for Geelong and the surrounding areas.
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
