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
  headline: "How Much Does a Website Cost in Australia? (2026 Guide)",
  author: { "@type": "Organization", name: "BuildSpark Team" },
  datePublished: "2026-03-10",
  dateModified: "2026-03-19",
  publisher: {
    "@type": "Organization",
    name: "BuildSpark",
    url: "https://buildspark.com.au",
  },
};

const relatedPosts = [
  {
    title: "How Long Does a Website Take to Build?",
    href: "/blog/how-long-does-a-website-take",
    readTime: "5 min read",
  },
  {
    title: "Wix vs WordPress vs Custom: What\u2019s Best?",
    href: "/blog/best-website-builder-small-business",
    readTime: "5 min read",
  },
  {
    title: "Why Cheap Websites Fail (And What to Do Instead)",
    href: "/blog/why-cheap-websites-fail",
    readTime: "4 min read",
  },
  {
    title: "The Complete Local SEO Guide for Victorian Small Businesses",
    href: "/blog/local-seo-victoria",
    readTime: "5 min read",
  },
];

export default function HowMuchWebsiteCostClient() {
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
            alt="How much does a website cost in Australia"
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
            <Badge className="mb-4">Pricing</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
              How Much Does a Website Cost in Australia? (2026 Guide)
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6 text-zinc-400 text-sm">
              <span>BuildSpark Team</span>
              <span>·</span>
              <span>19 Mar 2026</span>
              <span>·</span>
              <span>12 min read</span>
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
              &ldquo;How much does a website cost?&rdquo; is the most Googled question in Australian web design. The answer you&apos;ll usually get is &ldquo;it depends&rdquo; - which is completely useless when you&apos;re trying to budget for your business. So here&apos;s the actual breakdown: every option, what you get, what you don&apos;t, and what you should realistically pay in 2026. Whether you&apos;re a tradie, a cafe owner, a professional services firm, or any other local business, this guide covers it all.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              DIY Website Builders ($0–$500)
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Platforms like Wix, Squarespace, WordPress.com, and Google Sites let you build a website yourself for little to no upfront cost. They&apos;re drag-and-drop, template-based, and marketed heavily to small business owners. Free plans are genuinely free, and paid plans typically run $15–$40 per month. You might spend an extra $20–$50 on a domain name and a few hours of your weekend getting it set up.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">The pros:</strong> They&apos;re cheap (or free on basic plans), you have full control over updates, and you can get something live within a day or two if you&apos;re tech-savvy.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">The cons:</strong> The result almost always looks like a template. SEO capabilities are limited compared to custom-built sites. You&apos;ll spend far more time than you expect dragging boxes around and fighting with layouts. And the &ldquo;free&rdquo; part disappears quickly once you need a custom domain ($15–$30/year), remove ads, add e-commerce, or unlock premium features. Expect to pay $20–$50/month for a plan that&apos;s actually usable.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">Verdict:</strong> Fine if you have plenty of time, don&apos;t care much about Google rankings, and are comfortable doing everything yourself. Not ideal if you want your website to actively bring in new customers. If you&apos;re not tech-savvy, expect to spend 20+ hours getting something that looks halfway decent - and even then, the result is often a slow, generic-looking site that doesn&apos;t rank on Google because it&apos;s missing local SEO basics.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Template-Based Freelancer Builds ($500–$3,000)
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Hiring a freelance web designer or developer is the next step up. You&apos;ll find them on platforms like Upwork, Fiverr, or Airtasker, or through local recommendations. Some will buy a premium WordPress theme and customise it for you. The price range is enormous because the quality range is enormous.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">The pros:</strong> More affordable than an agency, often more personal service, and you&apos;re dealing with one person rather than being passed between departments.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">The cons:</strong> Quality is wildly inconsistent. A $500 freelancer might deliver something worse than what you could build on Squarespace - it might look nice on day one but break on mobile, load in 8 seconds, and have zero local SEO built in. There&apos;s no guarantee of ongoing support - freelancers move on, get busy, or disappear entirely. And there&apos;s a real risk of paying someone who&apos;s still learning on your dime. You won&apos;t know the difference between a well-built site and a poorly built one until something breaks or your Google rankings never improve.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">Verdict:</strong> A gamble. Great freelancers exist, but finding them takes research. At the lower end of this range, you often get what you pay for.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Digital Agency ($3,000–$50,000+)
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              This is the &ldquo;proper&rdquo; route that most businesses default to when they have budget. Agencies offer full-service web design: strategy, custom design, development, copywriting, SEO, and ongoing support. The process typically takes 4 to 12 weeks, and you&apos;ll pay for every hour of project management, design, and development along the way.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">The pros:</strong> Professional result, comprehensive approach, dedicated project management, and a team of specialists working on your site. Fully custom design, CMS, and scalable for larger businesses.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">The cons:</strong> Expensive, slow (8–12 weeks is standard, 6 months isn&apos;t unusual), and most of the cost is overhead. Project managers, account directors, office rent, and internal meetings all get baked into your invoice. For a large enterprise or a franchise with 20 staff, this makes sense. For a local tradie, cafe, or professional services business that needs 5 pages and a contact form? It&apos;s overkill, and you&apos;re paying for complexity you don&apos;t need. You&apos;re not paying for a better website - you&apos;re paying for a bigger process.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              BuildSpark ($490–$1,290)
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              This is the sweet spot we built BuildSpark to fill. Professional quality without the agency price tag, delivered in days rather than months.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              We use modern technology (Next.js, not bloated WordPress themes) that&apos;s faster and more SEO-friendly than traditional builds. Every site comes with local SEO baked in from day one, mobile-first design, and performance that scores 90+ on Google PageSpeed. No meetings, no calls, no back-and-forth over email for weeks. You take a quiz, tell us about your business, and we build it. You only pay if you&apos;re happy with the result.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li><strong className="text-white">Starter ($490):</strong> A clean, fast, single-page site with all the essentials. Perfect for tradies, solo operators, and new businesses that need a professional online presence quickly.</li>
              <li><strong className="text-white">Growth ($790):</strong> Multi-page site with expanded content, service pages, and enhanced SEO. The most popular option for established local businesses ready to grow their online presence.</li>
              <li><strong className="text-white">Pro ($1,290):</strong> Full-featured site with advanced functionality, blog, booking integration, content strategy, and priority support. Built for businesses that want to dominate their local search results.</li>
            </ul>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              The result is a professional site that loads fast, ranks well, and actually brings in customers - without the $10,000 price tag or the three-month timeline. It&apos;s the quality of an agency site at a fraction of the cost, because we&apos;ve stripped out everything that doesn&apos;t directly make your business more visible online.
            </p>

            {/* Mid-post CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 my-10 text-center">
              <p className="text-white font-semibold text-lg mb-3">
                Find out what your website would cost. Take the 2-minute quiz.
              </p>
              <p className="text-zinc-400 text-sm mb-4">
                We&apos;ll recommend the right plan for your business and show you exactly what you&apos;d get.
              </p>
              <Button asChild size="default">
                <Link href="/quiz">Start Your Free Quiz →</Link>
              </Button>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What Actually Drives the Cost Up
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Understanding what makes websites expensive helps you avoid paying for things you don&apos;t need. Here are the biggest cost drivers:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li><strong className="text-white">Number of pages.</strong> A 5-page site costs a fraction of a 50-page site. Most local businesses need 3–7 pages. If someone is quoting you for 20+ pages, ask yourself if you really need them.</li>
              <li><strong className="text-white">E-commerce.</strong> Adding a full online store (product listings, shopping cart, payment processing) adds significant complexity. If you&apos;re selling products online, expect to pay more. If you just need a service-based site, don&apos;t pay for e-commerce features you won&apos;t use.</li>
              <li><strong className="text-white">Custom features.</strong> Booking systems, membership areas, custom calculators, client portals, or integrations with third-party software all add to the cost. Be honest about what you actually need versus what would be &ldquo;nice to have.&rdquo;</li>
              <li><strong className="text-white">Content creation.</strong> Professional copywriting and photography cost money but make a real difference. If you can provide your own photos and basic information about your business, you&apos;ll save significantly.</li>
              <li><strong className="text-white">Ongoing maintenance.</strong> Some agencies charge $100–$500/month for hosting and maintenance. Make sure you understand what you&apos;re paying for and whether you actually need it.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What You Should Actually Pay
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Let&apos;s cut through the noise. If you&apos;re a local business - a tradie, a cafe, a hairdresser, an accountant, a physio - you probably need a site with 3–7 pages: home, about, services, contact, and maybe a couple of extras. That&apos;s it.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              A site like that, built efficiently with modern tools and optimised for local SEO, is a $490–$990 job. If someone is quoting you $5,000 or more for a basic local business site in 2026, they&apos;re either using outdated technology that takes longer to build, or they&apos;re charging for overhead you don&apos;t benefit from.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Don&apos;t overpay for complexity you don&apos;t need. A fast, well-optimised 5-page site will outperform a bloated 30-page site every time - in Google rankings, in user experience, and in actually converting visitors into customers.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              And remember: the biggest hidden cost is a website that doesn&apos;t work. A $200 site that sits on page 5 of Google and converts no one is infinitely more expensive than a $900 site that brings in new customers every week.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Hidden Costs Nobody Talks About
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              The sticker price of a website is never the whole story. Here are the ongoing costs you need to budget for:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li><strong className="text-white">Domain name ($15–$50/year).</strong> Your .com.au or .com address. This is non-negotiable - you need your own domain. Renew it on time or risk losing it.</li>
              <li><strong className="text-white">Hosting ($0–$50/month).</strong> Modern platforms like Vercel and Netlify offer free hosting for most small business sites. If someone is charging you $50/month for hosting, ask what you&apos;re actually getting for that money.</li>
              <li><strong className="text-white">SSL certificate (should be free).</strong> The padlock icon in the browser bar. This should be included with any modern hosting. If someone charges extra for SSL, that&apos;s a red flag.</li>
              <li><strong className="text-white">Business email ($7–$15/month).</strong> A professional email address using your domain (hello@yourbusiness.com.au) costs around $7/month through Google Workspace or Microsoft 365.</li>
              <li><strong className="text-white">Content updates.</strong> If you can&apos;t update your own site, you&apos;ll need to pay someone each time you want to change your hours, add a new service, or update pricing. Factor this in.</li>
              <li><strong className="text-white">Plugin and theme updates.</strong> WordPress sites need regular updates or they break. Budget 1–2 hours per month or pay someone to manage it.</li>
              <li><strong className="text-white">SEO maintenance.</strong> A website isn&apos;t a set-and-forget tool. To maintain and improve your Google rankings, you&apos;ll need ongoing SEO work - whether you do it yourself or pay someone. Some agencies charge extra for local SEO setup that should be included from the start.</li>
              <li><strong className="text-white">Redesign every 3–4 years.</strong> Web standards change. A site that looked great in 2023 might look dated by 2026. Budget for a refresh down the line.</li>
            </ul>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              All up, a well-maintained small business website should cost you less than $500/year in ongoing fees after the initial build. If you&apos;re paying significantly more than that, it&apos;s worth reviewing what you&apos;re actually getting.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Website Cost for Tradies: A Closer Look
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Tradies are one of the most common groups we work with, and the advice online is often the worst for them. Whether you&apos;re an electrician, plumber, carpenter, or landscaper, the same principles apply: you don&apos;t need a $10,000 custom build. You need a site that works.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              For most tradies, the $490 range gives you everything you actually need: a fast, mobile-friendly site with local SEO baked in, a professional look that builds trust, and a click-to-call button that turns visitors into jobs. You don&apos;t need 15 pages and a blog with 50 articles. You need one clean, fast page that converts visitors into phone calls.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Regardless of which option you choose, these are the things that actually move the needle for a <a href="/services/tradies" className="text-amber-500 underline hover:text-amber-400">tradie website</a>:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li><strong className="text-white">Speed:</strong> Your site needs to load in under 3 seconds on mobile. Anything slower and you&apos;re losing visitors before they even see your number.</li>
              <li><strong className="text-white">Mobile-first design:</strong> Over 70% of local searches happen on a phone. Your site has to look and work perfectly on a small screen.</li>
              <li><strong className="text-white">Local keywords:</strong> Every page should mention your suburb and service. &ldquo;Electrician Werribee&rdquo; beats &ldquo;quality electrical services&rdquo; every time.</li>
              <li><strong className="text-white">Click-to-call:</strong> One tap and the customer is on the phone with you. No forms, no friction.</li>
              <li><strong className="text-white">Google reviews:</strong> Display your best reviews prominently. Social proof is the fastest way to build trust with someone who&apos;s never heard of you.</li>
              <li><strong className="text-white">Google Business Profile integration:</strong> Your website and your Google Business Profile should reinforce each other with consistent information.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Bottom Line
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              For most Australian small businesses, you don&apos;t need to spend $10,000 on a website. But you also shouldn&apos;t spend $200 and hope for the best. The sweet spot is a purpose-built site that&apos;s fast, mobile-friendly, optimised for local search, and designed to turn visitors into customers.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              That&apos;s exactly what we do at BuildSpark. No fluff, no upsells, no surprises. Just a website that actually works for your business.
            </p>

            {/* End CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 text-center">
              <p className="text-white font-bold text-xl mb-3">
                Ready to get a website that&apos;s worth every dollar?
              </p>
              <p className="text-zinc-400 mb-4">
                Take our free 2-minute quiz. We&apos;ll recommend the right plan for your business - no calls, no meetings, no lock-in contracts.
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
