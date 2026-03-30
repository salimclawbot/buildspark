"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    title:
      "5 Reasons Your Tradie Business Isn't Showing Up on Google (And How to Fix It)",
    excerpt:
      "You're good at your job. Your customers love you. But when someone searches \"electrician near me,\" you're nowhere. Here's why and what to do about it.",
    readTime: "5 min read",
    date: "17 Mar 2026",
    category: "SEO",
    href: "/blog/tradie-google",
  },
  {
    title:
      "The Complete Cafe Website Guide: Everything You Need to Get More Customers Online (2026)",
    excerpt:
      "Everything your cafe website needs: menu, hours, photos, booking, Google Maps, mobile design, local SEO, and the common mistakes that drive customers away.",
    readTime: "12 min read",
    date: "19 Mar 2026",
    category: "Web Design",
    href: "/blog/cafe-website-guide",
  },
  {
    title:
      "How a $790 Website Made a Pakenham Mechanic $60,000 in New Business",
    excerpt:
      "Tommo had been running his workshop for 15 years. His website hadn't been updated in 8. Here's what happened when he finally got a site that worked.",
    readTime: "3 min read",
    date: "17 Mar 2026",
    category: "Case Study",
    href: "/blog/mechanic-case-study",
  },
  {
    title: "How Much Does a Website Actually Cost in Australia? (2026 Guide)",
    excerpt:
      "A no-nonsense breakdown of website costs in Australia. DIY, templates, agencies, and the smart middle ground. Find out what you should actually pay.",
    readTime: "5 min read",
    date: "17 Mar 2026",
    category: "Pricing",
    href: "/blog/how-much-does-a-website-cost",
  },
  {
    title:
      "Why Every Bookkeeper Needs a Website (Even If You Get All Your Clients From Referrals)",
    excerpt:
      "Think you don't need a website because all your clients come from referrals? Here's why a website is still your best investment for growing your practice.",
    readTime: "4 min read",
    date: "17 Mar 2026",
    category: "Business",
    href: "/blog/bookkeeper-website",
  },
  {
    title: "Your Website Is Too Slow and It's Costing You Customers",
    excerpt:
      "Slow websites kill conversions and tank your Google ranking. Learn about the 3-second rule, Core Web Vitals, image optimisation, and how to fix your site speed.",
    readTime: "5 min read",
    date: "17 Mar 2026",
    category: "Performance",
    href: "/blog/website-speed",
  },
  {
    title:
      "How to Set Up Google Business Profile for Your Local Business (Step by Step)",
    excerpt:
      "A practical step-by-step guide to setting up Google Business Profile. Get found on Google Maps and local search results. No fluff, just actionable steps.",
    readTime: "6 min read",
    date: "17 Mar 2026",
    category: "Google",
    href: "/blog/google-business-profile",
  },
  {
    title: "Why $99 Websites Always Fail (And What to Do Instead)",
    excerpt:
      "Tempted by a $99 website deal? Here's why ultra-cheap websites always fail small businesses, and what to invest in instead for real results.",
    readTime: "4 min read",
    date: "17 Mar 2026",
    category: "Business",
    href: "/blog/why-cheap-websites-fail",
  },
  {
    title:
      "Website Design in Geelong: What Local Businesses Need to Know in 2026",
    excerpt:
      "Everything Geelong businesses need to know about getting a website in 2026. Local tips, realistic costs, and what actually works for Geelong businesses.",
    readTime: "6 min read",
    date: "17 Mar 2026",
    category: "Web Design",
    href: "/blog/website-design-geelong",
  },
  {
    title:
      "Cheap Websites for Victorian Businesses: What You Actually Get (And What to Avoid)",
    excerpt:
      "Honest comparison of cheap website options for Victorian businesses. DIY vs $490 BuildSpark vs $5000+ agency. What you actually get at each price point.",
    readTime: "6 min read",
    date: "17 Mar 2026",
    category: "Pricing",
    href: "/blog/cheap-website-victoria",
  },
  {
    title:
      "How to Get More Customers Online: A No-Nonsense Guide for Local Victorian Businesses",
    excerpt:
      "Practical steps to get more customers online. Website, Google Business, reviews, and local SEO strategies that actually work for Victorian businesses.",
    readTime: "6 min read",
    date: "17 Mar 2026",
    category: "Business",
    href: "/blog/get-more-customers-online",
  },
  {
    title:
      "Website vs Social Media: What Does Your Local Business Actually Need?",
    excerpt:
      "Do you need a website if you have Facebook? Yes. Here's why your local business needs both, and why your website should be the anchor.",
    readTime: "5 min read",
    date: "17 Mar 2026",
    category: "Business",
    href: "/blog/website-vs-social-media",
  },
  {
    title:
      "The Complete Bakery Website Guide: Get Found Online & Turn Browsers Into Buyers",
    excerpt:
      "The ultimate guide for Australian bakers: Google Business Profile, local SEO, stunning photos, menus with prices, online ordering, Instagram integration, and everything your bakery website needs.",
    readTime: "10 min read",
    date: "19 Mar 2026",
    category: "Web Design",
    href: "/blog/bakery-website-guide",
  },
  {
    title: "How Long Does a Website Take? (Honest Answer for Local Businesses)",
    excerpt:
      "Honest timelines for local business websites. Traditional agencies take 8-12 weeks. BuildSpark delivers in 48 hours to 1 week. Here's why.",
    readTime: "5 min read",
    date: "17 Mar 2026",
    category: "Business",
    href: "/blog/how-long-does-a-website-take",
  },
  {
    title: "Website Design in Ballarat for Local Businesses",
    excerpt:
      "Everything Ballarat businesses need to know about getting a website in 2026. Sturt Street to the CBD - local tips and realistic costs.",
    readTime: "5 min read",
    date: "17 Mar 2026",
    category: "Web Design",
    href: "/blog/website-design-ballarat",
  },
  {
    title: "7 Things Every Tradie Website Must Have to Get More Jobs",
    excerpt:
      "The 7 must-have features for tradie websites that actually get jobs. Service areas, click-to-call, reviews, and more. No fluff.",
    readTime: "5 min read",
    date: "17 Mar 2026",
    category: "Web Design",
    href: "/blog/tradie-website-tips",
  },
  {
    title: "The Complete Local SEO Guide for Victorian Small Businesses",
    excerpt:
      "Everything Victorian small businesses need to know about local SEO. Google Business Profile, keywords, reviews, citations, backlinks, schema markup, and more.",
    readTime: "14 min read",
    date: "17 Mar 2026",
    category: "SEO",
    href: "/blog/local-seo-victoria",
  },
  {
    title: "Wix vs WordPress vs Custom: What's Best for Small Business?",
    excerpt:
      "Honest comparison of Wix, WordPress, Squarespace, and custom websites for Australian small businesses. Which one actually makes sense?",
    readTime: "5 min read",
    date: "17 Mar 2026",
    category: "Business",
    href: "/blog/best-website-builder-small-business",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function BlogIndexClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              The Build<span className="text-amber-500">Spark</span> Blog
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Straight-talking advice for Victorian local businesses who want more
              customers from Google. No jargon. No waffle. Just stuff that actually
              works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link
                  href={post.href}
                  className="group block rounded-xl border border-zinc-800 bg-surface p-6 h-full hover:border-amber-500/30 transition-colors"
                >
                  <Badge variant="outline" className="mb-4">
                    {post.category}
                  </Badge>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-500 text-sm font-semibold">
                      Read More &rarr;
                    </span>
                    <span className="text-zinc-600 text-xs">
                      {post.date} &middot; {post.readTime}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Want us to handle the{" "}
            <span className="text-amber-500">website side?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Take the quiz and we&apos;ll show you exactly what we&apos;d build for
            your business.
          </p>
          <Button asChild size="lg" className="text-base px-10">
            <Link href="/quiz">Start Your Quiz &rarr;</Link>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
