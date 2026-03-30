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
  headline: "The Complete Local SEO Guide for Victorian Small Businesses",
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
    title: "7 Things Every Tradie Website Must Have",
    href: "/blog/tradie-website-tips",
    readTime: "5 min read",
  },
  {
    title: "Website Design in Geelong for Local Businesses",
    href: "/blog/website-design-geelong",
    readTime: "6 min read",
  },
];

export default function LocalSeoVictoriaClient() {
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
            alt="Complete local SEO guide for Victorian small businesses"
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
              The Complete Local SEO Guide for Victorian Small Businesses
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6 text-zinc-400 text-sm">
              <span>BuildSpark Team</span>
              <span>·</span>
              <span>17 Mar 2026</span>
              <span>·</span>
              <span>14 min read</span>
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
              Local SEO sounds technical. It&apos;s not. It&apos;s just making sure that when someone in your area searches for what you do, Google shows them your business instead of your competitor down the road. Here&apos;s how it works in plain English for Victorian small businesses - no jargon, no fluff, just the stuff that actually matters.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What Local SEO Actually Is
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              When someone searches &ldquo;electrician Bendigo&rdquo; or &ldquo;best cafe Footscray&rdquo;, Google shows local results. You&apos;ve seen them - the map with three businesses pinned on it, followed by a list of local websites. Local SEO is what determines whether your business shows up in those results or gets buried on page five where nobody looks.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              It comes down to three things: location, relevance, and trust. Google needs to know where you are, what you do, and whether other people think you&apos;re any good. Get those three right and you&apos;ll show up when it matters. Get them wrong and you&apos;re invisible to the people actively searching for exactly what you offer.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Here&apos;s the stat that matters: 46% of all Google searches have local intent. That means nearly half the people searching right now are looking for something nearby. If your business isn&apos;t optimised for local search, you&apos;re invisible to almost half your potential customers.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Google Business Profile: The Foundation
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              If you do one thing after reading this article, let it be this: claim and complete your Google Business Profile. It&apos;s free, it takes about 30 minutes to set up properly, and it&apos;s the single most impactful thing you can do for your local visibility. If you haven&apos;t claimed yours yet, go to <span className="text-amber-400">business.google.com</span> and do it today.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Here&apos;s what &ldquo;complete&rdquo; means:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li><strong className="text-white">Fill in every field.</strong> Business name, address, phone, hours, services, description. Choose the right primary and secondary categories. Don&apos;t leave anything blank. Google rewards completeness. Businesses with fully optimised profiles are 2.7 times more likely to be considered reputable by searchers.</li>
              <li><strong className="text-white">Add photos weekly.</strong> Photos of your work, your team, your shopfront. Businesses with photos get 42% more requests for directions and 35% more clicks to their website.</li>
              <li><strong className="text-white">Post updates regularly.</strong> Google Business Profile has a posts feature. Use it. Share offers, news, or tips. It signals to Google that your business is active.</li>
              <li><strong className="text-white">Respond to every review.</strong> Good ones and bad ones. This shows Google (and customers) that you&apos;re engaged and care about your reputation.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Your Website: The Other Half
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Google Business Profile gets you on the map. Your website seals the deal. When someone clicks through from your Google listing to your site, that&apos;s your chance to convert them into a customer. But your website also feeds back into your Google rankings. A good website makes your Google Business Profile rank higher, and vice versa.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Key elements your website needs for local SEO:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li><strong className="text-white">Location keywords in titles and headings.</strong> &ldquo;Plumber in Geelong&rdquo; as a page title tells Google exactly what you do and where. If you&apos;re an electrician in Werribee, your homepage heading shouldn&apos;t just say &ldquo;Electrical Services&rdquo;&mdash;it should say &ldquo;Licensed Electrician in Werribee.&rdquo;</li>
              <li><strong className="text-white">Dedicated service area pages.</strong> If you serve multiple suburbs or regions, create a page for each one. &ldquo;Plumbing Services Werribee&rdquo;, &ldquo;Plumbing Services Point Cook&rdquo;, and so on. Each page gives Google specific content to match against specific searches.</li>
              <li><strong className="text-white">NAP consistency.</strong> NAP stands for Name, Address, Phone. These must be identical on your website, your Google Business Profile, and every other listing. Even small differences like &ldquo;St&rdquo; vs &ldquo;Street&rdquo; can confuse Google.</li>
              <li><strong className="text-white">Fast loading and mobile friendly.</strong> Google uses page speed and mobile usability as ranking factors. If your site is slow or broken on mobile, your rankings suffer.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              NAP Consistency: Get It Right Everywhere
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              NAP consistency deserves its own focus because it&apos;s one of the most common mistakes small businesses make. Your Name, Address, and Phone number must be identical everywhere they appear&mdash;your website, GBP, Yellow Pages, True Local, and any industry directory you&apos;re listed on. Even small differences like &ldquo;St&rdquo; versus &ldquo;Street&rdquo; can cause problems. Do an audit of your listings and fix any mismatches. Pick one format and stick with it everywhere.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Keywords That Matter for Victorian Businesses
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              The formula is simple: [service] + [location]. &ldquo;Plumber Geelong&rdquo;, &ldquo;accountant Ballarat&rdquo;, &ldquo;cafe Brunswick&rdquo;, &ldquo;electrician Bendigo&rdquo;. These are the searches that bring in paying customers, and they&apos;re the keywords you need on your website.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Use these naturally in your page titles, headings, and content. The key word there is &ldquo;naturally&rdquo;. Don&apos;t stuff your page with &ldquo;plumber Geelong plumber Geelong plumber Geelong&rdquo; - Google is smarter than that and will actually penalise you for it. Write for humans first, then make sure the important location keywords appear in the right places.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              For Victorian businesses specifically, think about the <a href="/locations" className="text-amber-500 underline hover:text-amber-400">suburbs and regions</a> around you too. A plumber in Geelong should also target &ldquo;plumber Belmont&rdquo;, &ldquo;plumber Highton&rdquo;, &ldquo;plumber Ocean Grove&rdquo;, and &ldquo;plumber Torquay&rdquo;. Each of these is a separate search that potential customers are making every day.
            </p>

            {/* Mid-post CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 my-10 text-center">
              <p className="text-white font-semibold text-lg mb-3">
                Want us to handle the SEO for you?
              </p>
              <p className="text-zinc-400 text-sm mb-4">
                Take our 2-minute quiz and we&apos;ll show you exactly how we&apos;d optimise your site for local search.
              </p>
              <Button asChild size="default">
                <Link href="/quiz">Take the Quiz →</Link>
              </Button>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Reviews: Your Secret Weapon
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Google counts reviews as trust signals. More reviews with higher ratings equals higher rankings. It&apos;s one of the strongest factors in local SEO, and it&apos;s completely within your control.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Ask every happy customer to leave a Google review. Make it easy - send them a direct link to your review page after the job is done. Most people are happy to help, they just need a gentle nudge. Aim for consistency rather than a sudden burst&mdash;Google prefers a steady stream.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Respond to every review, yes, even the bad ones. A professional, calm response to a negative review actually builds more trust than having no negative reviews at all. It shows you care and that you handle problems like a professional. Aim for 20 or more reviews on Google with a 4.5+ average, and you&apos;ll be in strong shape for most local markets.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Citations: Getting Listed Everywhere
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Citations are mentions of your business name, address, and phone number on other websites. Think Yellow Pages, True Local, Yelp, Hotfrog, and industry-specific directories. Each citation is like a vote of confidence that tells Google your business is real and located where you say it is.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Consistency is the key here. Your business name, address, and phone number must be exactly the same on every single listing. If your website says &ldquo;123 High Street, Ballarat&rdquo; but Yellow Pages says &ldquo;123 High St, Ballarat VIC&rdquo;, that inconsistency can actually hurt your rankings. Pick one format and stick with it everywhere.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Start with the big Australian directories: Yellow Pages, True Local, Yelp Australia, and Hotfrog. Then look for industry-specific directories relevant to your trade or profession. A plumber might get listed on HiPages and ServiceSeeking. A cafe might get listed on Zomato and TripAdvisor. Every consistent listing strengthens your local SEO.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Make Your Site Lightning Fast
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Google uses page speed as a ranking factor, and it matters even more for local search on mobile. More than 60% of local searches happen on mobile devices. If your site takes longer than three seconds to load on a phone, visitors bounce&mdash;and Google notices. Compress your images, use modern formats like WebP, enable caching, avoid bloated website themes, and choose hosting that doesn&apos;t cut corners on performance.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Test your site at <span className="text-amber-400">Google PageSpeed Insights</span> and aim for a score above 90 on mobile. Make sure buttons and text are easy to tap and read on small screens. This single improvement can make a noticeable difference in both your rankings and your conversion rate.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Build Local Backlinks
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Backlinks from local sources carry serious weight. Partner with other local businesses for cross-promotion. Sponsor a community event, sports team, or charity. Get listed in your local chamber of commerce directory. Write a guest post for a local blog or news outlet. Each of these creates a relevant, geographically tied link back to your site that tells Google you&apos;re a legitimate local business.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Create Local Content
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Blog about local topics. Write posts like &ldquo;Best cafes in [suburb]&rdquo; or &ldquo;Common plumbing problems in [area].&rdquo; This builds topical authority and attracts local backlinks. It also gives Google more content to associate with your location and services. You don&apos;t need to publish every week&mdash;one solid local post per month is enough to start building momentum.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Add Local Business Schema Markup
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Schema markup is a snippet of structured data you add to your website&apos;s code. It helps search engines understand exactly what your business does, where it&apos;s located, and when it&apos;s open. Adding <span className="text-amber-400">LocalBusiness</span> schema can improve how your site appears in search results&mdash;including rich snippets with star ratings, hours, and contact info. You don&apos;t need to be a developer; tools like Google&apos;s Structured Data Markup Helper make it straightforward.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What NOT to Waste Money On
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Not everything that sounds like good SEO actually is. Here&apos;s what to avoid:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li>Paid directory listings that promise &ldquo;guaranteed&rdquo; rankings&mdash;they don&apos;t work</li>
              <li>SEO agencies charging $2,000/month for a small local business&mdash;you don&apos;t need that</li>
              <li>Buying backlinks from shady websites&mdash;Google penalises this</li>
              <li>Keyword stuffing your pages with unnatural repetition&mdash;it hurts more than it helps</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What BuildSpark Does For You
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Every site we build comes with local SEO baked in from day one. We don&apos;t treat SEO as an add-on or an afterthought. It&apos;s built into the foundation of every page we create.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              We research your specific keywords - the actual searches people in your area are making for businesses like yours. We optimise your pages for those terms, set up your schema markup so Google can read your site properly, and make sure your NAP details are consistent everywhere.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              We also build your site with modern technology that loads fast and works perfectly on mobile - two things that directly impact your Google rankings. No bloated WordPress themes, no slow page builders. Just clean, fast code that Google loves and your customers can actually use. You focus on running your business. We handle the Google side.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Bottom Line
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Local SEO isn&apos;t magic and it isn&apos;t rocket science. It&apos;s a set of straightforward steps that tell Google who you are, where you are, and why people should trust you. For Victorian small businesses, the opportunity is massive - local keyword competition outside Melbourne is still relatively low, which means a properly optimised website can get you to page one faster than you might think.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              You don&apos;t need to tackle everything at once. Start with your Google Business Profile, make sure your website mentions your location and services clearly, and collect reviews. These three steps alone will put you ahead of 80% of local businesses. Then add page speed, local content, backlinks, and schema markup over time to build a foundation that keeps paying off month after month.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              The businesses that show up consistently in local search are the ones that commit to the basics and keep improving. Start small, stay consistent, and you&apos;ll start seeing results within weeks, not months.
            </p>

            {/* End CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 text-center">
              <p className="text-white font-bold text-xl mb-3">
                Ready to get found on Google?
              </p>
              <p className="text-zinc-400 mb-4">
                Take our free 2-minute quiz. We&apos;ll build you a site with local SEO baked in - optimised for your location and industry from day one.
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
