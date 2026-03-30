"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function BookkeeperWebsiteClient() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6 py-20"
      >
        {/* Hero */}
        <div className="mb-12">
          <Badge className="mb-4">Business</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Why Every Bookkeeper Needs a Website (Even If You Get All Your Clients From Referrals)
          </h1>
          <div className="flex items-center gap-4 text-zinc-400 text-sm">
            <span>BuildSpark Team</span>
            <span>&middot;</span>
            <span>17 Mar 2026</span>
            <span>&middot;</span>
            <span>4 min read</span>
          </div>
        </div>

        {/* Article */}
        <article>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            If you&apos;re a bookkeeper who&apos;s built a solid client base through word-of-mouth referrals, you might be wondering why you&apos;d ever need a website. After all, if the phone keeps ringing, why fix what isn&apos;t broken? The truth is, a website isn&apos;t about replacing referrals - it&apos;s about making every referral count and opening doors you didn&apos;t even know existed.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            First Impressions Matter (Even for Referrals)
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            When someone gets your name from a friend or colleague, the first thing they&apos;re going to do is search for you online. If they can&apos;t find a website, doubt creeps in. A professional website validates the recommendation they&apos;ve already received. It&apos;s your digital handshake - a chance to confirm that you&apos;re the real deal before a prospect ever picks up the phone.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Think of it this way: a referral gets someone to your door, but your website is what invites them inside. Without it, you&apos;re leaving that conversion to chance.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Credibility You Can&apos;t Get From a Facebook Page
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            A Facebook page or Instagram profile is great for staying visible, but it doesn&apos;t carry the same weight as a dedicated website. Clients trust businesses that have invested in their online presence. A <a href="/services/bookkeepers" className="text-amber-500 underline hover:text-amber-400">website with your own domain name</a> signals permanence and professionalism. It tells potential clients that you take your bookkeeping practice seriously and that you&apos;re here for the long haul.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            You also control the narrative on your own website. Social media algorithms decide who sees your posts, but your website is yours - no gatekeepers, no distractions from competitor ads showing up in the sidebar.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Passive Lead Generation While You Sleep
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Referrals are fantastic, but they&apos;re unpredictable. Some months you&apos;ll get five new leads; other months you&apos;ll get none. A website with basic SEO works around the clock, attracting people who are actively searching for a bookkeeper in your area. These are high-intent prospects - they&apos;re not browsing; they&apos;re looking to hire someone right now.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Even a simple site with a few well-written pages can start ranking for local searches like &quot;bookkeeper near me&quot; or &quot;BAS agent in [your suburb].&quot; That&apos;s new business you&apos;d never have reached through referrals alone.
          </p>

          {/* Mid-article CTA */}
          <div className="border border-amber-500/50 bg-amber-500/5 rounded-2xl p-8 my-12">
            <p className="text-white text-xl font-semibold mb-3">
              Not sure if your online presence is working for you?
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Take our free quiz to find out where your business stands and what you could improve.
            </p>
            <Link href="/#quiz">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3">
                Take the Free Quiz
              </Button>
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Showcase Your Services Properly
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Many bookkeepers offer a range of services - BAS lodgement, payroll, cloud accounting setup, financial reporting - but referrals rarely communicate the full picture. A client might tell their friend, &quot;I know a great bookkeeper,&quot; without mentioning that you also handle Xero migrations or SMSF bookkeeping.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Your website gives you the space to lay out every service you offer, explain your process, and highlight what makes you different. It&apos;s your 24/7 sales pitch, and it never forgets a talking point.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            SEO for Bookkeepers Is Surprisingly Easy
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Unlike competitive industries where ranking on Google requires months of effort, local bookkeeping is a relatively low-competition space online. Most of your competitors either don&apos;t have a website or have one that hasn&apos;t been updated since 2015. That means even a modern, well-structured site with a handful of pages can outrank established practices.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Focus on a few key pages - a homepage, a services page, an about page, and a contact page - and make sure they&apos;re optimised for your location and the services you offer. That&apos;s genuinely all it takes to start appearing in local search results.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            The Bottom Line
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Referrals will always be a cornerstone of any bookkeeping practice. But relying on them exclusively means you&apos;re capping your growth and leaving money on the table. A website doesn&apos;t replace word-of-mouth - it amplifies it. It gives referred prospects confidence, attracts new clients organically, and positions you as a professional who&apos;s serious about their business.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            The best part? Getting started doesn&apos;t have to be expensive or complicated. A clean, fast, mobile-friendly website can be up and running in days - and it&apos;ll start working for you from day one.
          </p>

          {/* End CTA */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mt-12">
            <p className="text-white text-xl font-semibold mb-3">
              Ready to build your bookkeeping website?
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              BuildSpark creates fast, professional websites for bookkeepers and small businesses. Let&apos;s chat about what you need.
            </p>
            <Link href="/#contact">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3">
                Get in Touch
              </Button>
            </Link>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-16 pt-12 border-t border-zinc-800">
          <h2 className="text-2xl font-bold text-white mb-6">Related Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/local-seo-victoria" className="block group">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 transition-colors group-hover:border-zinc-700">
                <Badge className="mb-3">SEO</Badge>
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                  The Complete Local SEO Guide
                </h3>
              </div>
            </Link>
            <Link href="/blog/how-much-does-a-website-cost" className="block group">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 transition-colors group-hover:border-zinc-700">
                <Badge className="mb-3">Business</Badge>
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                  How Much Does a Website Really Cost?
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
