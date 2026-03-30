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
    "Website vs Social Media: What Does Your Local Business Actually Need?",
  author: {
    "@type": "Organization",
    name: "BuildSpark Team",
  },
  datePublished: "2026-03-17",
  publisher: {
    "@type": "Organization",
    name: "BuildSpark",
    url: "https://buildspark.com.au",
  },
  image: "https://buildspark.com.au/images/hero-workspace.webp",
};

const relatedPosts = [
  {
    title: "How to Get More Customers Online",
    href: "/blog/get-more-customers-online",
    readTime: "6 min read",
  },
  {
    title: "The Complete Local SEO Guide for Victorian Small Businesses",
    href: "/blog/local-seo-victoria",
    readTime: "6 min read",
  },
];

export default function WebsiteVsSocialMediaClient() {
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
              alt="Website vs social media for local businesses"
              width={1200}
              height={630}
              className="rounded-xl mb-8 w-full h-auto"
              priority
            />
            <Badge className="mb-4">Business</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              Website vs Social Media: What Does Your Local Business Actually Need?
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
              &ldquo;I have Facebook so I don&apos;t need a website.&rdquo; We hear this from local business owners
              every week. And we get it&mdash;social media is free, it&apos;s familiar, and you already have
              followers. But here&apos;s the thing: relying on social media alone is like building your business
              on rented land. The landlord can change the rules whenever they want, and you have no say in the matter.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              The real answer? You need both. But your website should be the anchor of your entire online presence.
              Let&apos;s break down why.
            </p>

            {/* What Social Media Does Well */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What Social Media Does Well
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Let&apos;s give credit where it&apos;s due. Social media is genuinely great for a few things:
              staying in touch with existing customers, sharing updates and promotions, building community
              around your brand, and showcasing your personality. It&apos;s where people go to see what
              you&apos;re up to right now. A well-run Instagram or Facebook page builds trust and keeps you
              top of mind. For engagement and brand building, social media is hard to beat.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              But engagement with people who already know you is only half the equation. The other half&mdash;the
              half that actually grows your business&mdash;is getting found by people who don&apos;t know you yet.
              And that&apos;s where social media falls short.
            </p>

            {/* What Social Media Can't Do */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What Social Media Can&apos;t Do
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Social media can&apos;t get you found by new customers searching for your service on Google.
              Social media posts rarely show up in Google search results. When someone searches
              &ldquo;plumber Geelong&rdquo; or &ldquo;cafe near me,&rdquo; Google shows websites, Google
              Business Profiles, and maps. Not your Instagram page. Not your Facebook posts.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              There&apos;s also the reach problem. Facebook organic reach is now under 5%. That means if you
              have 1,000 followers, fewer than 50 of them will see any given post&mdash;unless you pay to
              boost it. You&apos;re at the mercy of algorithm changes you can&apos;t control, on a platform
              you don&apos;t own. One update can tank your visibility overnight, and there&apos;s nothing
              you can do about it.
            </p>

            {/* What a Website Does That Social Media Can't */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What a Website Does That Social Media Can&apos;t
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              A website fills the gaps that social media leaves wide open. Here&apos;s what a website gives you
              that no social platform can:
            </p>
            <ul className="list-disc list-inside text-zinc-300 text-lg leading-relaxed mb-6 space-y-2">
              <li>Shows up on Google when people search for your service</li>
              <li>You own it&mdash;no algorithm can hide your content</li>
              <li>Professional credibility&mdash;75% of consumers judge a business&apos;s credibility by its website</li>
              <li>Works 24/7 as your digital salesperson</li>
              <li>Displays your services, pricing, reviews, and contact info in one place</li>
              <li>Captures leads through forms and calls to action</li>
              <li>Builds local SEO authority over time</li>
            </ul>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Every one of those points represents something social media either can&apos;t do or does poorly.
              Your website is the one place online where you have complete control over how your business is
              presented, and it&apos;s the only asset that compounds in value over time through search engine
              optimisation.
            </p>

            {/* Mid-post CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 my-10 text-center">
              <p className="text-white font-semibold text-lg mb-3">
                Not sure if your online presence is working? Take our 2-minute quiz.
              </p>
              <p className="text-zinc-400 text-sm mb-4">
                We&apos;ll show you exactly what we&apos;d build for your business&mdash;no calls, no pressure.
              </p>
              <Button asChild size="default">
                <Link href="/quiz">Start Your Free Quiz &rarr;</Link>
              </Button>
            </div>

            {/* The "I Have Facebook" Objection */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The &ldquo;I Have Facebook&rdquo; Objection (Debunked)
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Let&apos;s walk through a scenario. Someone new moves to your area. They need a plumber. They
              don&apos;t know your Facebook page exists&mdash;why would they? They open Google and search
              &ldquo;plumber near me.&rdquo; You don&apos;t show up because you don&apos;t have a website.
              Your competitor does. They click, they call, they book. That&apos;s a customer lost, and you
              never even knew about them.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              This happens every single day to businesses that rely solely on social media. The customers
              you&apos;re missing aren&apos;t the ones who unfollow you&mdash;they&apos;re the ones who
              never find you in the first place. Facebook is great for people who already know your name.
              But for everyone else, Google is where the journey starts.
            </p>

            {/* The Right Approach */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Right Approach: Both, With Your Website as the Anchor
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Your website is home base. Social media drives people there. Every post, every story, every
              bio link should point back to your website. That&apos;s where the conversion happens&mdash;where
              visitors become leads, enquiries, and paying customers.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Think of it this way: your website captures the lead, and social media nurtures the relationship.
              Social media keeps you visible and personable. Your website does the heavy lifting of showing up
              in search results, presenting your services professionally, and making it easy for people to take
              action. Together, they&apos;re a powerful combination. Separately, each one is missing a critical piece.
            </p>

            {/* But I Can't Afford Both */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              But I Can&apos;t Afford Both
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              You can. A professional website starts at $490. Social media is free. Total investment: $490 plus
              the time you already spend posting. That&apos;s it.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              The ROI from a single new customer who finds you on Google typically pays for the entire website.
              If you&apos;re a tradie charging $200 for a callout, you only need two or three new jobs from
              Google to break even. Everything after that is profit you wouldn&apos;t have had without a website.
              Compare that to boosting Facebook posts at $10&ndash;$50 a pop with no guarantee anyone will
              actually contact you.
            </p>

            {/* The Bottom Line */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Bottom Line
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              You need both a website and social media. But if you could only have one, choose the website.
              It&apos;s the only thing you truly own online. Social media platforms come and go, algorithms
              change, and organic reach keeps shrinking. Your website is permanent, it&apos;s yours, and it
              works for you around the clock.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              Stop building on rented land. Make your website the anchor of your online presence, use social
              media to amplify it, and watch what happens when new customers can actually find you.
            </p>

            {/* End CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 text-center">
              <p className="text-white font-bold text-xl mb-3">
                Ready to make your website the anchor?
              </p>
              <p className="text-zinc-400 mb-4">
                Take our free 2-minute quiz and we&apos;ll put together a personalised plan for your
                business&mdash;no obligations, no sales calls.
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
