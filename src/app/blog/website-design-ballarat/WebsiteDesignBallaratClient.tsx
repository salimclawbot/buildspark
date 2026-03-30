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
  headline: "Website Design in Ballarat for Local Businesses",
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
    title: "Website Design in Geelong for Local Businesses",
    href: "/blog/website-design-geelong",
    readTime: "6 min read",
  },
  {
    title: "Local SEO for Victorian Small Businesses",
    href: "/blog/local-seo-victoria",
    readTime: "6 min read",
  },
];

export default function WebsiteDesignBallaratClient() {
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
            alt="Website design for Ballarat businesses"
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
              Website Design in Ballarat for Local Businesses
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
              Ballarat is one of Victoria&apos;s most important regional centres. From Sturt Street boutiques to tradespeople servicing the surrounding goldfields towns, local businesses in Ballarat are competing for customers who increasingly start their search on Google. If your business doesn&apos;t show up when someone searches &ldquo;plumber Ballarat&rdquo; or &ldquo;cafe near Sturt Street,&rdquo; you&apos;re handing those customers to your competitors.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              This guide covers what Ballarat businesses specifically need from a website in 2026, what it should cost, and the local SEO opportunities that most businesses in the region are completely missing.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Why Ballarat Businesses Need a Website in 2026
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Ballarat&apos;s population has been growing steadily, with new housing estates and families relocating from Melbourne for a better lifestyle. These new residents don&apos;t know the local businesses yet. They&apos;re not walking down Sturt Street and stumbling into your shop. They&apos;re searching on their phones before they leave the house.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Tourism is another massive factor. Sovereign Hill, the goldfields heritage trail, and the growing food and wine scene bring hundreds of thousands of visitors to Ballarat each year. Every one of them is searching online for where to eat, where to stay, and what services are available. If your business isn&apos;t showing up in those searches, you don&apos;t exist to them.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              There&apos;s also the competition factor. Melbourne-based businesses and franchises are increasingly targeting regional keywords like &ldquo;website design Ballarat&rdquo; and &ldquo;accountant Ballarat.&rdquo; If local businesses don&apos;t claim those search results, someone from the city will.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What a Good Ballarat Business Website Looks Like
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              A website for a Ballarat business doesn&apos;t need to be fancy. But it does need to tick specific boxes to actually bring in customers:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li><strong className="text-white">Suburb-specific keywords.</strong> Don&apos;t just mention &ldquo;Ballarat.&rdquo; Include the suburbs you actually serve: Wendouree, Sebastopol, Buninyong, Canadian, Alfredton, Delacombe. Google ranks pages for specific locations, and most of your competitors aren&apos;t doing this.</li>
              <li><strong className="text-white">Mobile-first design.</strong> Over 70% of local searches happen on mobile. If your site doesn&apos;t look great on a phone, you&apos;re losing the majority of potential customers before they even see what you offer.</li>
              <li><strong className="text-white">Google Maps integration.</strong> An embedded map showing your location builds instant trust and helps Google understand exactly where your business operates.</li>
              <li><strong className="text-white">Fast loading speed.</strong> Under 3 seconds. Regional internet connections can be slower than metro, so a lightweight site is even more important in Ballarat than it is in Melbourne.</li>
              <li><strong className="text-white">Real photos of your business.</strong> Ballarat locals can spot a stock photo from a mile away. Use real images of your team, your premises, and your work. It builds trust in a way nothing else can.</li>
              <li><strong className="text-white">Clear calls to action.</strong> Phone number, contact form, or booking link above the fold. Don&apos;t make visitors hunt for how to reach you.</li>
              <li><strong className="text-white">Google reviews displayed.</strong> Social proof matters. If you&apos;ve got good Google reviews, show them prominently on your site. If you don&apos;t have many reviews yet, start asking for them today.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Local SEO for Ballarat
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Here&apos;s the good news: local SEO in Ballarat is significantly less competitive than in Melbourne. A well-optimised website targeting &ldquo;electrician Ballarat&rdquo; can reach page one of Google far faster than someone targeting &ldquo;electrician Melbourne,&rdquo; simply because there are fewer businesses competing for those keywords.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Your Google Business Profile is absolutely essential. It&apos;s free, and it&apos;s the single most important factor in whether you show up in Google&apos;s local map pack. Make sure your name, address, and phone number are consistent across your website and your Google Business Profile.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Mention the specific areas you service. If you&apos;re a plumber who covers Ballarat, Creswick, Daylesford, and Clunes, say so on your website. Each of those towns is a search term that potential customers are using, and most of your competitors aren&apos;t targeting them. Reviews from local customers also carry extra weight in regional searches, so make collecting Google reviews a habit.
            </p>

            {/* Mid-post CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 my-10 text-center">
              <p className="text-white font-semibold text-lg mb-3">
                Ballarat business owner? Take our 2-minute quiz.
              </p>
              <p className="text-zinc-400 text-sm mb-4">
                We&apos;ll show you exactly what we&apos;d build for your business - tailored to your industry and location.
              </p>
              <Button asChild size="default">
                <Link href="/quiz">Start Your Free Quiz →</Link>
              </Button>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              How Much Should You Spend?
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Website pricing is confusing, and regional businesses often either overpay or go too cheap. Here&apos;s what the options actually look like for a Ballarat business:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li><strong className="text-white">Free DIY (Wix, Squarespace):</strong> $0 upfront, but the result looks generic, loads slowly, and won&apos;t rank on Google without serious SEO knowledge. Fine if you just need a basic online presence and don&apos;t care about attracting new customers through search.</li>
              <li><strong className="text-white">BuildSpark ($490–$990):</strong> The sweet spot for Ballarat businesses. A professionally built, fast-loading site with local SEO baked in from day one. Modern technology, no bloated code, and optimised for the keywords your customers are actually searching. You get a site that looks professional and actually brings in business.</li>
              <li><strong className="text-white">Agency ($5,000+):</strong> Full custom design with project managers, multiple revision rounds, and a timeline measured in months. This makes sense for large companies, but for a local tradie, cafe, or professional service provider in Ballarat, it&apos;s overkill. Most of the cost goes to overhead, not to making your site better.</li>
            </ul>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              For the vast majority of Ballarat businesses, spending $490–$990 on a properly optimised site will deliver a far better return than a $10,000 agency build that takes three months to go live.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Common Mistakes Ballarat Businesses Make
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li><strong className="text-white">No location pages.</strong> Your site mentions &ldquo;Ballarat&rdquo; once in the footer and nothing else. Google can&apos;t rank you for &ldquo;builder Wendouree&rdquo; if the word &ldquo;Wendouree&rdquo; appears nowhere on your site. Mention the suburbs and surrounding towns you service.</li>
              <li><strong className="text-white">Ignoring Google Business Profile.</strong> Your website and your Google Business Profile work together. Having one without the other is like opening a shop and forgetting to put up a sign. Claim it, verify it, and keep it updated.</li>
              <li><strong className="text-white">Slow WordPress sites.</strong> Many Ballarat businesses had a WordPress site built years ago and haven&apos;t touched it since. These sites are often bloated with plugins, slow to load, and vulnerable to security issues. Modern alternatives are faster, cheaper to maintain, and better for SEO.</li>
              <li><strong className="text-white">Set-and-forget mentality.</strong> A website isn&apos;t a brochure you print once. Your hours change, your services evolve, prices update. A site that still lists your 2022 menu or last year&apos;s pricing undermines trust. Keep it current.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Bottom Line
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Ballarat is growing. New residents, new businesses, and a thriving tourism industry mean more customers are searching online every day. The businesses that have a strong, locally-optimised web presence now are the ones that will capture that growth. The ones that don&apos;t will keep wondering why the phone isn&apos;t ringing.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              BuildSpark builds fast, modern, locally-optimised websites for Ballarat businesses. No bloated code, no agency pricing, no months of waiting. Just a professional site that ranks on Google and brings in customers from day one.
            </p>

            {/* End CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 text-center">
              <p className="text-white font-bold text-xl mb-3">
                Ready to get your Ballarat business online properly?
              </p>
              <p className="text-zinc-400 mb-4">
                Take our free 2-minute quiz. We&apos;ll show you exactly what we&apos;d build for your business - optimised for Ballarat and the surrounding region.
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
