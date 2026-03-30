"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const relatedPosts = [
  { title: "How Much Does a Website Cost in Australia?", href: "/blog/how-much-does-a-website-cost", readTime: "6 min read" },
  { title: "Website Design in Ballarat for Local Businesses", href: "/blog/website-design-ballarat", readTime: "5 min read" },
];

export default function HowLongWebsiteClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-workspace.webp" alt="How long does a website take to build" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-4">Business</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">How Long Does a Website Take? (Honest Answer for Local Businesses)</h1>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="prose-invert">
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              &ldquo;How long does a website take?&rdquo; is one of the first questions every business owner asks. The honest answer: it depends entirely on who&apos;s building it. A traditional agency will tell you 8 to 12 weeks. We&apos;ll tell you 48 hours to one week. Both answers are true, but the reasons behind them reveal everything about how the web industry works in 2026.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              If you&apos;re a local business owner who just wants a professional website live and working, this guide will give you an honest breakdown of timelines, what actually takes the time, and how to avoid waiting months for something that should take days.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Traditional Agency Timeline (8&ndash;12 Weeks)
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              If you approach a traditional web design agency, here&apos;s what the typical process looks like. First, there&apos;s a discovery call where you explain your business and what you need. Then the agency goes away for a week or two to prepare wireframes and a sitemap. After that comes the design phase, where a designer creates visual mockups of your pages. You review them, request changes, and wait for the next round. Once designs are approved, a developer builds the site, which takes another two to four weeks. Then there&apos;s a testing phase, content entry, more revisions, and finally launch. All up, you&apos;re looking at 8 to 12 weeks minimum, and that&apos;s if everything goes smoothly. Plenty of agency builds stretch to 16 weeks or longer.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Why Traditional Agencies Take So Long
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Here&apos;s the thing most people don&apos;t realise: the actual work of building a small business website doesn&apos;t take 12 weeks. The delays come from the process, not the complexity. Agencies have layers of project management, account managers, designers, and developers who all need to coordinate. Each handoff adds days or weeks of waiting.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Revision cycles are the biggest time sink. You send feedback, the designer queues your changes behind other clients, makes updates three days later, and sends it back. Another round of feedback, another wait. This back-and-forth can repeat four or five times before anyone writes a line of code. Then scope creep kicks in. &ldquo;While we&apos;re at it, can we add a blog?&rdquo; &ldquo;Actually, we need a booking form too.&rdquo; Each addition resets the timeline. None of this is because a five-page business website is technically difficult. It&apos;s because the process is built for large corporate projects and applied to small ones.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What Actually Affects Timeline
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Regardless of who builds your site, a few factors genuinely affect how long it takes:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li><strong className="text-white">Number of pages.</strong> A 5-page site for a local tradie is a completely different job to a 50-page corporate site with multiple sections and landing pages. Most local businesses need 3 to 7 pages.</li>
              <li><strong className="text-white">Custom features.</strong> Standard pages with contact forms are quick. Online booking systems, e-commerce stores, or client portals add genuine complexity and time.</li>
              <li><strong className="text-white">Content readiness.</strong> This is the number one delay on every project. If your copy, photos, and business details are ready to go, the build moves fast. If the builder is waiting two weeks for you to send your logo, that&apos;s two weeks added to the timeline.</li>
              <li><strong className="text-white">Feedback turnaround.</strong> How quickly you review and approve things matters enormously. A project that could take one week easily stretches to six if feedback takes five days each round.</li>
            </ul>

            {/* Mid-post CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 my-10 text-center">
              <p className="text-white font-semibold text-lg mb-3">
                Want to know what we&apos;d build for your business?
              </p>
              <p className="text-zinc-400 text-sm mb-4">
                Take our 2-minute quiz and we&apos;ll show you a tailored proposal. No calls, no meetings, no obligations.
              </p>
              <Button asChild size="default">
                <Link href="/quiz">Start Your Free Quiz →</Link>
              </Button>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The BuildSpark Timeline (48 Hours to 1 Week)
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Our process is built from the ground up for speed without cutting corners. Here&apos;s how it works: you take a short quiz that tells us everything we need to know about your business, your industry, and what you need from your site. We send you a tailored proposal with pricing and a preview of what we&apos;d build. Once you approve, we get to work immediately.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              There are no discovery calls, no wireframe presentations, no design mockup rounds. We use modern frameworks and proven design systems that let us build fast and build well. Most sites are live within 48 hours of approval. More complex builds with custom features take up to a week.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              The entire process is asynchronous. No meetings, no phone calls, no sitting in someone&apos;s office watching them click through a PowerPoint. You communicate on your schedule, and we build on ours. It&apos;s faster for us and far less painful for you.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Why Speed Matters for Local Businesses
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Every day without a proper website is a day your competitors are showing up in Google and you&apos;re not. Local search results don&apos;t wait for your agency to finish their discovery phase. When someone searches &ldquo;electrician near me&rdquo; tonight, the businesses with live, optimised websites get the call. You don&apos;t.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              There&apos;s also a compounding effect with SEO. Google needs time to crawl, index, and rank your site. The sooner your site is live, the sooner that clock starts ticking. A site that goes live in March and starts building authority will significantly outrank an identical site launched in June. Three months of waiting for an agency build isn&apos;t just three months of lost customers. It&apos;s three months of SEO momentum you&apos;ll never get back.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The Bottom Line
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              If you need a 50-page corporate site with custom integrations, a client portal, and multilingual support, yes, that takes months and it should. Complex projects deserve a thorough process.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              But if you&apos;re a local business that needs to show up on Google, look professional, and convert visitors into customers? That&apos;s days, not months. The technology exists to build beautiful, fast, SEO-optimised sites in a fraction of the time agencies quote. The only question is whether you want to keep waiting or get your site live this week.
            </p>

            {/* End CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 text-center">
              <p className="text-white font-bold text-xl mb-3">
                Ready to get your website live this week?
              </p>
              <p className="text-zinc-400 mb-4">
                Take our free 2-minute quiz. We&apos;ll send you a tailored proposal with honest pricing and a realistic timeline for your business.
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-bold text-white mb-8">Related Posts</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <Link key={post.href} href={post.href} className="group block rounded-xl border border-zinc-800 bg-surface p-6 hover:border-amber-500/30 transition-colors">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">{post.title}</h3>
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
