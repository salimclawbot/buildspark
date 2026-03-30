"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function GoogleBusinessProfileClient() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-6 py-24"
      >
        {/* Hero */}
        <div className="mb-12">
          <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/20">
            Google
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            How to Set Up Google Business Profile for Your Local Business (Step by Step)
          </h1>
          <div className="flex items-center gap-4 text-zinc-400 text-sm">
            <span>BuildSpark Team</span>
            <span>&middot;</span>
            <span>17 Mar 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        {/* Article Body */}
        <article>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Why Google Business Profile Matters
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            When someone searches for a business like yours, Google Business Profile is often the first thing they see. It&apos;s the box that appears on the right side of search results or at the top of Google Maps. Without one, you&apos;re invisible to people actively looking for what you offer in your area.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            A well-optimised profile means more phone calls, more website visits, and more customers walking through your door. It&apos;s free, it&apos;s powerful, and it takes less than an hour to set up properly. Here&apos;s exactly how to do it.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Step 1: Create or Claim Your Listing
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Head to{" "}
            <span className="text-amber-400">business.google.com</span>{" "}
            and sign in with your Google account. If your business already appears on Google Maps, you&apos;ll need to claim it. If it doesn&apos;t exist yet, click &quot;Add your business&quot; and enter your business name.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Google will verify you&apos;re the real owner. This usually happens via a postcard sent to your business address, though phone or email verification is sometimes available. The postcard takes about five days. Don&apos;t skip this step &mdash; verification unlocks all the features that actually matter.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Step 2: Fill In Every Single Field
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Google rewards completeness. Businesses with fully filled-out profiles get significantly more clicks than those with half-empty ones. Go through every field: business name, address, phone number, website, hours, and attributes.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Make sure your business name matches exactly what&apos;s on your signage and other listings. Don&apos;t stuff keywords into your name &mdash; Google penalises that. Your address and phone number should be consistent with what&apos;s on your website and every other directory you&apos;re listed on.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Step 3: Choose the Right Categories
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Your primary category is the single biggest ranking factor in local search. Pick the most specific one that describes your core service. A plumber should choose &quot;Plumber,&quot; not &quot;Home Improvement.&quot; A bakery should choose &quot;Bakery,&quot; not &quot;Food Store.&quot;
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            You can add secondary categories too. If you&apos;re an electrician who also does air conditioning, add both. But don&apos;t go overboard &mdash; stick to services you genuinely provide. Each category tells Google which searches to show you for.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Step 4: Add Photos (Lots of Them)
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Businesses with photos get 42% more requests for directions and 35% more clicks to their website. Upload photos of your shopfront, your team, your work, and your products. Real photos &mdash; not stock images.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Aim for at least 10 photos to start, then add new ones regularly. Google loves fresh content. Before and after shots work brilliantly for trades. Food photos are essential for hospitality. Interior shots help people know what to expect when they visit.
          </p>

          {/* Mid-article CTA */}
          <div className="border border-amber-500/30 rounded-xl p-6 my-10 bg-amber-500/5">
            <p className="text-white font-semibold text-lg mb-2">
              Need help getting your business found online?
            </p>
            <p className="text-zinc-400 mb-4">
              BuildSpark builds fast, professional websites for local businesses &mdash; designed to work hand-in-hand with your Google Business Profile.
            </p>
            <Link href="/#pricing">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold">
                See Our Plans
              </Button>
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Step 5: Write Your Business Description
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            You get 750 characters to describe what your business does. Use them wisely. Lead with what you do and where you do it. Mention your key services and what makes you different. Write for humans, not search engines &mdash; but naturally include the terms people would search for.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Don&apos;t include URLs, phone numbers, or promotional language in the description. Google has separate fields for those. Keep it straightforward: who you are, what you do, and why someone should choose you.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Step 6: Set Your Service Area
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            If customers come to you, your address is enough. But if you go to customers &mdash; like a mobile mechanic, plumber, or cleaner &mdash; you need to set a service area. You can define this by suburb, city, or radius.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Be realistic about your service area. If you only work within 30km of your base, don&apos;t claim you service the entire state. Google uses this information to decide when to show your listing, and an accurate service area means you&apos;ll appear for the right searches.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Step 7: Start Collecting Reviews
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Reviews are the lifeblood of your Google Business Profile. They build trust with potential customers and directly influence your ranking in local search results. The businesses that show up in the top three map results almost always have strong review profiles.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Ask every happy customer to leave a review. Make it easy &mdash; send them a direct link to your review page. Respond to every review, positive or negative. A thoughtful response to a negative review often impresses potential customers more than five-star ratings alone.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            Keeping Your Profile Active
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Setting up your profile is just the beginning. Google favours businesses that stay active. Post updates at least once a week &mdash; share a recent project, a special offer, or a quick tip related to your trade. Use the Q&amp;A feature to answer common questions before people even ask them.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Keep your hours updated, especially around holidays. Add new photos regularly. Monitor your insights to see how people are finding you and what actions they&apos;re taking. This data tells you what&apos;s working and what needs adjusting.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">
            The Bottom Line
          </h2>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Google Business Profile is the single most effective free marketing tool for local businesses. It puts you in front of people who are already searching for exactly what you offer. The setup takes under an hour, but the ongoing effort &mdash; adding photos, collecting reviews, posting updates &mdash; is what separates businesses that dominate local search from those that get buried.
          </p>
          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Don&apos;t overthink it. Start with the basics, get verified, and build from there. Every small improvement compounds over time.
          </p>

          {/* End CTA */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to pair your profile with a professional website?
            </h3>
            <p className="text-zinc-400 mb-6">
              BuildSpark creates fast, mobile-friendly websites built for local businesses that want to rank higher and convert more visitors.
            </p>
            <Link href="/#pricing">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3">
                Get Started Today
              </Button>
            </Link>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-white mb-6">Related Posts</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/blog/local-seo-victoria"
                className="block border border-zinc-800 rounded-lg p-5 hover:border-zinc-700 transition-colors"
              >
                <p className="text-white font-semibold mb-1">The Complete Local SEO Guide</p>
                <p className="text-zinc-400 text-sm">
                  Practical strategies to boost your visibility in local search results.
                </p>
              </Link>
              <Link
                href="/blog/tradie-google"
                className="block border border-zinc-800 rounded-lg p-5 hover:border-zinc-700 transition-colors"
              >
                <p className="text-white font-semibold mb-1">Google for Tradies</p>
                <p className="text-zinc-400 text-sm">
                  How tradies can use Google to attract more local customers.
                </p>
              </Link>
            </div>
          </div>
        </article>
      </motion.div>

      <Footer />
    </main>
  );
}
