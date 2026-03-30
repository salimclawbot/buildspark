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
  headline:
    "The Complete Bakery Website Guide: Get Found Online & Turn Browsers Into Buyers",
  author: {
    "@type": "Organization",
    name: "BuildSpark Team",
  },
  datePublished: "2026-03-14",
  dateModified: "2026-03-19",
  publisher: {
    "@type": "Organization",
    name: "BuildSpark",
    url: "https://buildspark.com.au",
  },
  image: "https://buildspark.com.au/images/hero-workspace.webp",
};

const relatedPosts = [
  {
    title: "The Complete Cafe Website Guide",
    href: "/blog/cafe-website-guide",
    readTime: "12 min read",
  },
  {
    title: "The Complete Local SEO Guide for Victorian Small Businesses",
    href: "/blog/local-seo-victoria",
    readTime: "5 min read",
  },
];

export default function BakeryWebsiteGuideClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/hero-workspace.webp"
              alt="Bakery website design guide"
              width={1200}
              height={630}
              className="rounded-xl mb-8 w-full h-auto"
              priority
            />
            <Badge className="mb-4">Web Design</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              The Complete Bakery Website Guide: Get Found Online &amp; Turn Browsers Into Buyers
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6 text-zinc-400 text-sm">
              <span>BuildSpark Team</span>
              <span>&middot;</span>
              <span>19 Mar 2026</span>
              <span>&middot;</span>
              <span>10 min read</span>
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
              You make incredible sourdough, your cakes sell out every weekend, and your
              regulars would drive 30 minutes to get to you. But what about everyone else?
              The people in your area who don&apos;t know you exist yet? They&apos;re
              searching for &ldquo;bakery near me&rdquo; on Google right now &mdash; and
              they&apos;re finding the place down the road that has a proper website.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              This guide covers everything you need: from getting found on Google to
              building a <a href="/services/bakeries" className="text-amber-500 underline hover:text-amber-400">bakery website</a> that
              turns those visitors into customers walking through your door.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Start With Google Business Profile
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              If you haven&apos;t claimed your Google Business Profile yet, stop reading
              and do it now. It&apos;s free, and it&apos;s the single most important thing
              you can do to get found locally. When someone searches &ldquo;bakery near
              me&rdquo; or &ldquo;sourdough [your suburb]&rdquo;, Google pulls results
              from Business Profiles first. If yours isn&apos;t set up, you&apos;re
              invisible.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Claim it, then fill it out completely. Here are the bakery-specific tips
              that matter most:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li>Choose the right categories &mdash; Bakery, Cake Shop, Patisserie, or whatever fits your business best</li>
              <li>Add photos of your products weekly &mdash; Google rewards active profiles with higher rankings</li>
              <li>Update your hours especially for public holidays &mdash; nothing loses trust faster than showing up to a closed shop</li>
              <li>Enable messaging so people can ask about custom orders directly from your listing</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Mouth-Watering Photos
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              People decide whether to visit a bakery based almost entirely on how the
              food looks online. Stock photos of generic croissants won&apos;t cut it.
              You need real photos of your actual products &mdash; the golden crust on your
              sourdough, the glossy icing on your doughnuts, the messy cross-section of
              your sausage rolls. Natural light, a clean background, and your phone camera
              are all you need. Shoot in the morning when the display is full and the
              light is best. Update your photos every few months so the site stays fresh.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Menu With Prices
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              This is the single biggest mistake bakery websites make: not showing prices.
              Customers want to know what you sell and how much it costs before they walk
              through the door. A clean, scrollable menu page beats a PDF download every
              time. List your bread, pastries, cakes, and any cafe items with clear
              pricing. If your menu changes daily, show your core range and mention that
              specials rotate. People don&apos;t expect a restaurant-length menu. They
              just want to know what to expect.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What Else to Put on Your Bakery Website
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Beyond photos and a menu, your website needs to answer the questions every
              potential customer has before they visit. Here are the key pages and
              sections every bakery website needs:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li>Location with an embedded Google Map so people can get directions in one tap</li>
              <li>Opening hours prominently displayed &mdash; not buried on a contact page</li>
              <li>A story or about page &mdash; people love knowing the baker behind the bread</li>
              <li>Contact info and a custom order inquiry form</li>
              <li>Allergen information &mdash; increasingly important and builds serious trust</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Opening Hours &amp; Location Done Right
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              It sounds obvious, but a huge number of bakery websites either hide their
              hours on a contact page or show outdated times. Your opening hours should be
              visible on every page &mdash; the header, the footer, or both. If you close
              early on certain days or have different weekend hours, spell it out clearly.
              Include your full street address and make sure it matches your Google
              Business Profile exactly. Inconsistent details between your website and
              Google hurt your search rankings more than you&apos;d think.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Google Maps Embed
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              An embedded Google Map on your site does two things. First, it lets customers
              get directions with one tap. Second, it sends a trust signal to Google that
              your business is real and located where you say it is. This helps your
              search rankings, especially for &ldquo;near me&rdquo; searches. Add a map
              to your contact page or footer. If your bakery is tucked away in a side
              street or an arcade, include a short note explaining how to find you. The
              easier you make it, the more foot traffic you&apos;ll get.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Power of Local SEO for Bakeries
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Local SEO is how you tell Google exactly where you are and what you do.
              Use local keywords naturally throughout your website. Think phrases like
              &ldquo;sourdough bakery [suburb]&rdquo;, &ldquo;custom cakes [city]&rdquo;,
              and &ldquo;artisan bread [area]&rdquo;. These are the exact terms your
              customers are typing into Google.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Create content around local events, farmers&apos; markets you attend, and
              seasonal specials. A short blog post about your hot cross buns for Easter
              or your Christmas mince pies does wonders for search visibility. Get listed
              in local directories and food blogs too &mdash; every mention of your bakery
              with a link back to your site strengthens your rankings.
            </p>

            {/* Mid-article CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 my-10 text-center">
              <p className="text-white font-semibold text-lg mb-3">
                Want a website that does all this for you? Take our 2-minute quiz.
              </p>
              <p className="text-zinc-400 text-sm mb-4">
                We&apos;ll show you exactly what a BuildSpark site would look like for
                your bakery.
              </p>
              <Button asChild size="default">
                <Link href="/quiz">Start Your Free Quiz &rarr;</Link>
              </Button>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Instagram Integration Done Right
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Bakeries are inherently visual &mdash; use this to your advantage. If
              you&apos;re already posting photos of your bakes on Instagram, embedding
              your feed on your website is an easy win. It keeps your site looking fresh
              without any extra work and shows potential customers that you&apos;re active
              and that real people are buying your products. A simple grid of your latest
              posts near the bottom of your homepage is all you need.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              But don&apos;t rely on Instagram alone as your online presence. Social
              platforms control your reach, and algorithm changes can make your posts
              invisible overnight. Your Instagram bio should always link to your website.
              Post consistently with a mix of product shots, behind-the-scenes content,
              and customer features. This drives traffic both ways &mdash; website visitors
              follow your Instagram, and Instagram followers visit your site to place
              orders or check your hours.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Online Ordering &mdash; Even a Simple Version Helps
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              More and more customers want to pre-order their bread or reserve a birthday
              cake without calling. You don&apos;t need a full e-commerce setup. Even a
              simple form where people can pre-order for pickup makes a huge difference.
              A simple enquiry form for custom orders, a link to your DoorDash or Uber Eats
              listing, or even a &ldquo;call to order&rdquo; button is enough. The key is
              removing friction &mdash; every extra step between &ldquo;I want that&rdquo;
              and &ldquo;I&apos;ve ordered it&rdquo; costs you sales.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              One bakery owner we spoke to added a simple pre-order form and saw her
              Saturday morning collection orders triple within a month. Consider these
              options depending on your budget and needs:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li>A Google Form linked from your website for weekly bread orders</li>
              <li>Square Online for a simple storefront with payment processing</li>
              <li>Dedicated ordering platforms that integrate with your existing workflow</li>
              <li>For custom cakes: a detailed inquiry form that captures size, flavour, date, and budget &mdash; this saves you hours of back-and-forth messages</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Get Reviews Working for You
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Google reviews are one of the strongest ranking signals for local businesses.
              Ask happy customers to leave a review &mdash; most people are glad to help
              if you make it easy. Put a small sign at the counter with a QR code that
              links directly to your Google review page. Feature your best reviews on your
              website to build trust with first-time visitors. And respond to every single
              review, positive or negative. It shows you care, and Google rewards that
              engagement with better visibility.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Putting It All Together
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Here&apos;s your priority order as an Australian bakery owner:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li><strong className="text-white">Google Business Profile</strong> &mdash; free, immediate impact</li>
              <li><strong className="text-white">Fast, mobile-friendly website</strong> &mdash; with great photos, a menu with prices, and clear hours &mdash; from $490 with BuildSpark</li>
              <li><strong className="text-white">Google Maps embed</strong> &mdash; free, helps people find you and boosts rankings</li>
              <li><strong className="text-white">Google reviews</strong> &mdash; free, ongoing effort</li>
              <li><strong className="text-white">Instagram connected to your website</strong> &mdash; free, keeps your site fresh</li>
              <li><strong className="text-white">Local SEO</strong> &mdash; use local keywords and get listed in directories</li>
              <li><strong className="text-white">Online ordering</strong> &mdash; optional but increasingly valuable</li>
            </ul>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              The bottom line: the bakers who get found online are the ones who show up.
              A fast website with mouth-watering photos, a menu with prices, clear hours,
              an active Google profile, and genuine reviews will put you ahead of 90% of
              local bakeries. If your current site doesn&apos;t do these things, it&apos;s
              not just sitting there doing nothing &mdash; it&apos;s actively sending
              people to your competitors.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              The good news? You don&apos;t need to do everything at once &mdash; start
              with the free stuff and build from there.
            </p>

            {/* End CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 text-center">
              <p className="text-white font-bold text-xl mb-3">
                Take the free 2-minute quiz
              </p>
              <p className="text-zinc-400 mb-4">
                We&apos;ll show you exactly what a BuildSpark site would look like for
                your bakery. No calls. No meetings. Just a clear recommendation by email.
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
