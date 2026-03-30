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
  headline: "7 Things Every Tradie Website Must Have to Get More Jobs",
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
    title: "Local SEO for Victorian Small Businesses",
    href: "/blog/local-seo-victoria",
    readTime: "6 min read",
  },
  {
    title: "How Much Does a Website Cost in Australia?",
    href: "/blog/how-much-does-a-website-cost",
    readTime: "6 min read",
  },
];

export default function TradieWebsiteTipsClient() {
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
            alt="Tradie website tips for getting more jobs"
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
              7 Things Every Tradie Website Must Have to Get More Jobs
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
              You&apos;re a great tradie. Your work speaks for itself. But if your website doesn&apos;t have these 7 things, you&apos;re losing jobs to competitors who aren&apos;t even as good as you. The harsh reality is that customers make decisions based on what they see online before they ever pick up the phone. Here&apos;s what every tradie website needs in 2026 to actually bring in work.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              1. Clear Service Area
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              This is the number one thing we see missing on tradie websites. You need to list every suburb and region you service, clearly and prominently. Google can&apos;t rank you for &ldquo;plumber Werribee&rdquo; if the word &ldquo;Werribee&rdquo; is nowhere on your site. It&apos;s that simple.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              A dedicated service area section or page is essential. List your suburbs, your regions, and the postcodes you cover. Not only does this help Google understand where you work, it also reassures potential customers that yes, you actually come to their area.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Think about how people search: &ldquo;electrician Point Cook&rdquo;, &ldquo;roof repairs Melton&rdquo;, &ldquo;bathroom renovation Geelong&rdquo;. If those locations aren&apos;t on your website, you won&apos;t show up for those searches. Your competitors who do mention those suburbs will get the call instead.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              2. Click-to-Call and Click-to-Enquire
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              On mobile, your phone number should be tappable. One tap and they&apos;re calling you. This sounds obvious, but you&apos;d be amazed how many tradie websites have their phone number as an image or buried three pages deep.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Alongside click-to-call, add a simple enquiry form. Some people prefer to send a message rather than call, especially outside business hours. Don&apos;t make customers hunt for how to contact you. Every extra step between &ldquo;I need a tradie&rdquo; and &ldquo;I&apos;ve contacted a tradie&rdquo; loses you customers. Make it effortless.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              3. Google Business Profile Link
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Your website and your Google Business Profile work together as a team. Link them. Embed your Google Maps listing on your contact page. This helps Google verify your location and boosts your local rankings.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              When Google sees that your website address matches your Google Business Profile, and your map listing is embedded on your site, it builds confidence that your business is legitimate and located where you say it is. That confidence translates directly into higher rankings in the local map pack - the top three results that show up with the map when someone searches for a tradie in your area.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              4. Mobile-First Design
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Over 75% of people searching for tradies are on their phone. They&apos;ve got a burst pipe, a broken window, or a sparking outlet and they&apos;re standing in their kitchen Googling for help. If your site doesn&apos;t work perfectly on mobile, you&apos;re invisible to most potential customers.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Mobile-first means buttons are big enough to tap, text is readable without zooming, and the page loads quickly on a mobile connection. It also means your most important information - what you do, where you work, and how to contact you - is visible without scrolling. Test your site on your own phone right now. If it&apos;s hard to use, it&apos;s costing you jobs.
            </p>

            {/* Mid-post CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 my-10 text-center">
              <p className="text-white font-semibold text-lg mb-3">
                Want to see what we&apos;d build for your trade business?
              </p>
              <p className="text-zinc-400 text-sm mb-4">
                Take our 2-minute quiz and get a free preview tailored to your trade and location.
              </p>
              <Button asChild size="default">
                <Link href="/quiz">Take the Quiz →</Link>
              </Button>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              5. Fast Loading Speed
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Under 3 seconds or you lose them. Studies consistently show that if a page takes longer than 3 seconds to load, more than half of visitors will hit the back button and go to the next result. For tradies, that means they&apos;re calling your competitor instead.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Heavy WordPress themes with stock photo sliders are the number one speed killer on tradie sites. That flashy homepage slideshow with five massive images might look impressive on your desktop, but it takes 8 seconds to load on a phone over 4G. Ditch the sliders. Use a single strong hero image, optimised for the web, and keep your site lean and fast.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              6. Reviews and Testimonials
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              88% of people trust online reviews as much as personal recommendations. That&apos;s a staggering number, and it means your Google reviews are one of the most powerful sales tools you have. Show them on your website.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Display your Google reviews prominently on your homepage and create a dedicated testimonials page. If you don&apos;t have many reviews yet, start asking every happy customer. A simple &ldquo;Hey, would you mind leaving us a quick Google review?&rdquo; after finishing a job goes a long way. Aim for at least 20 reviews. The more you have, the more trust you build and the higher Google ranks you in local results.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              7. Clear Pricing or &ldquo;Get a Quote&rdquo;
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              You don&apos;t need exact pricing on your website. Every job is different and customers understand that. But give people an idea of what to expect. &ldquo;Hot water systems from $1,200 installed&rdquo; or &ldquo;Bathroom renovations starting from $8,000&rdquo; helps customers self-qualify and sets realistic expectations.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              If you&apos;d rather not list prices, then a prominent &ldquo;Get a Free Quote&rdquo; button is essential. Make it visible on every page. Transparency builds trust, and trust is what turns a website visitor into a paying customer. The tradies who are upfront about costs - even ballpark figures - consistently get more enquiries than those who make people guess.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Bottom Line
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Your <a href="/services/tradies" className="text-amber-500 underline hover:text-amber-400">tradie website</a> is your 24/7 salesperson. It&apos;s working for you at 10pm on a Sunday when a homeowner has an emergency. It&apos;s working for you at 7am on a Monday when someone is researching tradies before work. If it&apos;s missing any of these 7 things, it&apos;s costing you jobs every single day.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              The good news? Fixing these things is fast and affordable. You don&apos;t need to spend thousands on a fancy redesign. You need a clean, fast, mobile-friendly site that tells people what you do, where you work, and how to contact you. Get those basics right and you&apos;ll be ahead of 90% of your competition.
            </p>

            {/* End CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 text-center">
              <p className="text-white font-bold text-xl mb-3">
                Ready to get a tradie website that actually brings in jobs?
              </p>
              <p className="text-zinc-400 mb-4">
                Take our free 2-minute quiz. We&apos;ll show you exactly what we&apos;d build for your trade business - tailored to your industry and service area.
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
