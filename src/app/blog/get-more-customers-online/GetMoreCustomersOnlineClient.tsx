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
    "How to Get More Customers Online: A No-Nonsense Guide for Local Victorian Businesses",
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
    title: "The Complete Local SEO Guide for Victorian Small Businesses",
    href: "/blog/local-seo-victoria",
    readTime: "6 min read",
  },
  {
    title: "Website vs Social Media: What Does Your Business Need?",
    href: "/blog/website-vs-social-media",
    readTime: "5 min read",
  },
];

export default function GetMoreCustomersOnlineClient() {
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
            alt="Getting more customers online for local Victorian businesses"
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
              How to Get More Customers Online: A No-Nonsense Guide for Local Victorian Businesses
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6 text-zinc-400 text-sm">
              <span>BuildSpark Team</span>
              <span>&middot;</span>
              <span>17 Mar 2026</span>
              <span>&middot;</span>
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
              Every local business owner wants more customers. And in 2026, the internet is where those customers are searching. The problem? Most of the advice online is written for big companies with big budgets, marketing teams, and months to wait for results.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              This guide is different. It&apos;s specifically for small Victorian businesses&mdash;cafes, tradies, shops, service providers&mdash;who want practical, affordable strategies that actually work. No fluff, no jargon, just the steps that move the needle.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Step 1 &mdash; Get a Website That Actually Works
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Your website is the foundation of everything else on this list. It doesn&apos;t need to be fancy or expensive, but it absolutely needs to be fast, mobile-friendly, and optimised for local search. Think of it as your digital shopfront. If someone Googles your business and finds nothing, they&apos;ll go straight to your competitor who does have a site.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              A good local business website includes your services clearly listed, your location and service areas, easy-to-find contact information, and real customer reviews. That&apos;s it. You don&apos;t need animations, sliders, or a blog updated weekly. You need a site that loads fast, looks professional on a phone, and tells potential customers exactly what you do and how to reach you.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Step 2 &mdash; Set Up Google Business Profile
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Google Business Profile is free, powerful, and essential. It&apos;s what puts you on Google Maps and in local search results when someone searches &ldquo;plumber near me&rdquo; or &ldquo;best cafe in Geelong.&rdquo; If you haven&apos;t claimed yours, do it today at <span className="text-amber-400">business.google.com</span>. Once it&apos;s set up, fill out every single field. Add photos weekly. Respond to every review. Post updates about your business. Google rewards profiles that are active and complete, and it costs you nothing but a few minutes each week.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Step 3 &mdash; Collect Google Reviews (Seriously)
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Reviews are social proof for potential customers and a ranking factor for Google. They&apos;re one of the most powerful tools you have, and most local businesses aren&apos;t using them properly. Ask every happy customer to leave a review. Make it easy by sending them a direct link. Respond to every review&mdash;positive and negative&mdash;because Google notices engagement and potential customers notice how you handle feedback. Aim for 20 or more reviews with a 4.5-star average or higher. That&apos;s the threshold where you start to stand out from competitors who have three reviews and no responses.
            </p>

            {/* Mid-post CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 my-10 text-center">
              <p className="text-white font-semibold text-lg mb-3">
                Want to know what your business needs online? Take our 2-minute quiz.
              </p>
              <p className="text-zinc-400 text-sm mb-4">
                We&apos;ll show you exactly what we&apos;d build for your business&mdash;tailored to your industry and location.
              </p>
              <Button asChild size="default">
                <Link href="/quiz">Start Your Free Quiz &rarr;</Link>
              </Button>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Step 4 &mdash; Get Your Local SEO Right
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Local SEO is how you show up when people in your area search for what you offer. The basics are straightforward: use local keywords on your website like &ldquo;[your service] [your suburb]&rdquo;&mdash;for example, &ldquo;electrician Ballarat&rdquo; or &ldquo;hair salon Bendigo.&rdquo; List all the suburbs you serve on your site. Make sure your business name, address, and phone number are consistent across every platform&mdash;your website, Google Business Profile, Facebook, Yellow Pages, and any local directories. Even small inconsistencies like &ldquo;St&rdquo; versus &ldquo;Street&rdquo; can confuse search engines and hurt your rankings.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Step 5 &mdash; Use Social Media (But Don&apos;t Rely on It)
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Social media is great for staying in touch with existing customers. But it&apos;s terrible for being found by new ones. Facebook&apos;s organic reach is under 5%, which means only a fraction of your followers even see your posts. Instagram doesn&apos;t show up on Google. TikTok is entertainment, not a business directory. Use social media to support your website&mdash;share updates, post behind-the-scenes content, engage with your community&mdash;but never rely on it as your primary way to attract new customers. Your website and Google Business Profile do the heavy lifting for discovery.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Step 6 &mdash; Make It Easy to Contact You
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              This sounds obvious, but it&apos;s where so many businesses lose customers. Your website needs click-to-call on mobile so people can ring you with one tap. Your contact form needs to actually work and send you notifications. Your response time needs to be under 24 hours&mdash;ideally under a few hours. Every barrier between a potential customer and getting in touch with you costs you money. Test your own contact form. Call your own number from the website. Make sure the experience is seamless.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What NOT to Do
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Just as important as knowing what works is knowing what to avoid. Don&apos;t pay for Google Ads before fixing your website&mdash;you&apos;ll send paid traffic to a site that doesn&apos;t convert and waste your money. Don&apos;t buy followers or fake reviews; Google is increasingly good at detecting fraud and the penalties are severe. Don&apos;t ignore your Google Business Profile after setting it up&mdash;an inactive profile signals to Google that your business may not be operating.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              And don&apos;t spend $5,000 on a website when $490 would do the job. For most local businesses, a professionally built, fast, SEO-optimised site at an affordable price will outperform an expensive agency build that takes months to launch.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Bottom Line
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Getting more customers online isn&apos;t complicated. It comes down to four things: a website that works, a Google Business Profile that&apos;s active, reviews that build trust, and local SEO that puts you in front of the right people. Do those four things well and you&apos;ll be ahead of 90% of your local competition.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              You don&apos;t need a massive budget. You don&apos;t need a marketing degree. You just need to start with the fundamentals and stay consistent. The businesses that win online aren&apos;t the ones with the biggest spend&mdash;they&apos;re the ones that show up, every day, where their customers are looking.
            </p>

            {/* End CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 text-center">
              <p className="text-white font-bold text-xl mb-3">
                Ready to get more customers online?
              </p>
              <p className="text-zinc-400 mb-4">
                Take our free 2-minute quiz and we&apos;ll put together a personalised plan for your business&mdash;no obligations, no sales calls.
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
