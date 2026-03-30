"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const relatedPosts = [
  {
    title: "5 Reasons Your Tradie Business Isn't Showing Up on Google",
    href: "/blog/tradie-google",
    readTime: "5 min read",
  },
  {
    title: "The Complete Local SEO Guide for Victorian Small Businesses",
    href: "/blog/local-seo-victoria",
    readTime: "5 min read",
  },
];

export default function CafeWebsiteGuideClient() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-workspace.webp"
            alt="Complete cafe website guide"
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
              The Complete Cafe Website Guide: Everything You Need to Get More Customers Online (2026)
            </h1>
            <div className="flex items-center justify-center gap-4 mt-6 text-zinc-400 text-sm">
              <span>BuildSpark Team</span>
              <span>&middot;</span>
              <span>19 Mar 2026</span>
              <span>&middot;</span>
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
              Your coffee is excellent. Your food is great. Your regulars love you.
              But here&apos;s something that might sting a little: there are people
              in your suburb right now searching for a cafe, and they&apos;re
              choosing your competitor because they showed up on Google first.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Not because their coffee is better. Because their website told the
              searcher what they needed to know in 5 seconds flat. Before anyone
              walks through your door, they&apos;ve already visited your website. They
              searched &ldquo;cafe near me&rdquo; or &ldquo;best brunch [suburb],&rdquo; found your
              site, and made a decision in about 10 seconds.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              This guide covers everything your <a href="/services/cafes" className="text-amber-500 underline hover:text-amber-400">cafe website</a> needs to turn those
              searchers into customers&mdash;from the essential features every cafe site must have, to
              the common mistakes that drive people away, and exactly what it takes to get it right.
            </p>

            {/* Part 1: What Customers Search For */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What Customers Search For Before Visiting
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Most people don&apos;t just wander past a cafe and walk in anymore.
              They search first. Here&apos;s what the data actually shows:
            </p>
            <ul className="space-y-3 mb-8 ml-4">
              <li className="text-zinc-300 text-lg leading-relaxed flex gap-2">
                <span className="text-amber-500 shrink-0">&bull;</span>
                &ldquo;Cafe near me&rdquo; and &ldquo;brunch near me&rdquo; are two
                of the highest-volume local food searches in Melbourne
              </li>
              <li className="text-zinc-300 text-lg leading-relaxed flex gap-2">
                <span className="text-amber-500 shrink-0">&bull;</span>
                People search for specific things: &ldquo;cafe with outdoor
                seating,&rdquo; &ldquo;dog-friendly cafe Brunswick,&rdquo;
                &ldquo;best eggs benedict Fitzroy&rdquo;
              </li>
              <li className="text-zinc-300 text-lg leading-relaxed flex gap-2">
                <span className="text-amber-500 shrink-0">&bull;</span>
                Before visiting, most people want to see the menu, the opening
                hours, and photos of the food
              </li>
              <li className="text-zinc-300 text-lg leading-relaxed flex gap-2">
                <span className="text-amber-500 shrink-0">&bull;</span>
                If they can&apos;t find that information in a few seconds, they move
                on to the next result
              </li>
            </ul>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              This means your website isn&apos;t a luxury or a nice-to-have.
              It&apos;s the thing that determines whether someone visits you or the
              place down the road.
            </p>

            {/* Part 2: The 8 Essentials */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              The 8 Things Every Cafe Website Must Have
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              We&apos;ve looked at hundreds of cafe websites across Victoria.
              Most are missing at least four of these eight essentials. Here&apos;s
              the checklist every cafe owner should run through.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3">
              1. Your Menu (With Prices)
            </h3>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              The number one reason people visit a cafe website is to see the
              menu. If your menu is a blurry PDF from 2019,
              you&apos;re losing customers before they even walk through the
              door. Display it as clean, readable text directly on the page.
              Include prices. Update it when things change. If your specials
              rotate weekly, at least keep your core menu current. People want to
              know what they&apos;re getting and what it costs before they commit.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              PDFs can&apos;t be read properly on mobile phones. They
              require pinching and zooming. They take forever to load. And most importantly, Google
              can&apos;t index the content inside them. When someone searches &ldquo;best fish and
              chips Geelong,&rdquo; Google crawls the text on your website to decide if you&apos;re
              relevant. If your menu is trapped inside a PDF, Google can&apos;t see it. Your menu
              should be HTML text on the page&mdash;easy to read, easy to update, and fully indexable
              by search engines. This alone can be the difference between showing up on page one and
              not showing up at all.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3">
              2. Opening Hours (That Are Actually Current)
            </h3>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Sounds obvious, but we see outdated hours constantly. There&apos;s
              nothing more frustrating than driving to a cafe only to find
              it&apos;s closed because the website still shows pre-COVID hours.
              Show your opening hours prominently on every page, not buried in
              the footer in 10px font. Include holiday hours. Update them in real
              time. If you close early on Sundays, say so. If you&apos;re shut
              for a private event, put a banner up. Your opening hours should be visible without
              scrolling&mdash;if someone has to hunt for this information, they won&apos;t. They&apos;ll
              just go somewhere else.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3">
              3. Location and an Embedded Map
            </h3>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Don&apos;t just write your address in text and call it a day.
              Embed a Google Map. People need to see exactly where you are,
              especially if you&apos;re tucked down a side street or inside a
              shopping centre. A &ldquo;Get Directions&rdquo; button that opens
              in their map app is even better. Make it as easy as possible for
              someone to go from &ldquo;that looks good&rdquo; to standing at
              your counter. Include your full street address and make the phone number tappable
              on mobile so people can call with a single tap.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3">
              4. A Way to Book or Order
            </h3>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Whether it&apos;s a table booking widget, a link to your ordering
              platform, or even just a phone number with a tap-to-call button,
              make it easy for people to take action directly from your website.
              Embed your booking widget directly on the site&mdash;whether that&apos;s OpenTable,
              Quandoo, or even a simple contact form. The fewer clicks between &ldquo;I want to eat
              there&rdquo; and &ldquo;table booked,&rdquo; the more bookings you&apos;ll get.
              Every friction point loses customers.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              For takeaway and delivery, link directly to your ordering platform. If you use Uber
              Eats, Menulog, or your own ordering system, make it prominent. A big, obvious button
              that says &ldquo;Order Online&rdquo; converts far better than a text link buried in
              your navigation. If you do catering, add a simple enquiry form.
            </p>

            {/* Mid CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 my-10 text-center">
              <p className="text-white font-semibold text-lg mb-3">
                Want to see how your cafe website stacks up? Take our 2-minute quiz.
              </p>
              <p className="text-zinc-400 text-sm mb-4">
                We&apos;ll show you exactly what a BuildSpark site would look like
                for your cafe&mdash;no calls, no pressure.
              </p>
              <Button asChild size="default">
                <Link href="/quiz">Start Your Free Quiz &rarr;</Link>
              </Button>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-3">
              5. Instagram Feed or Gallery
            </h3>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Cafes are visual businesses. People don&apos;t just want to read
              about your food, they want to see it. An embedded Instagram feed
              or a curated photo gallery shows off your food, your space, and
              your vibe. It gives people a reason to visit and keeps your website
              feeling fresh without you needing to manually update it every week.
              If your Instagram is already doing well, let your website benefit
              from that effort.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3">
              6. Professional Photos of Your Space and Food
            </h3>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Stock photos of generic lattes don&apos;t cut it. People can tell
              the difference, and it makes your cafe feel impersonal. Professional food photography
              is worth every dollar you spend on it, but even good phone photos beat no photos at all.
              Show your food, your space, and your team. People eat with their eyes first, and your
              website is the appetiser.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              A few tips: use natural lighting, keep backgrounds clean, and show the food from the
              angle a customer would actually see it. You don&apos;t need a professional photographer
              for every dish. A dozen strong photos of your best sellers, your interior, and your
              coffee art will do more than fifty mediocre ones. Authenticity builds trust
              and desire. Real photos convert visitors into customers far better
              than anything you&apos;ll find on a stock photo site.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3">
              7. Mobile-Friendly Design
            </h3>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Most people finding your cafe are on their phone. They&apos;re
              probably walking around right now looking for somewhere to eat. If
              your site doesn&apos;t work perfectly on mobile&mdash;if the text
              is too small, the menu is impossible to navigate, or the page takes
              forever to load&mdash;they&apos;ll go to the cafe with the
              easier website. Over 75% of cafe searches happen on mobile devices.
              Your website needs to be built for phones first, desktops second.
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-3">
              8. Google Business Profile Integration
            </h3>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Your website and your Google Business Profile should reinforce each
              other. Same hours, same address, same phone number. Link your
              website from your GBP and link back to your Google listing from
              your site. This consistency helps you rank higher in &ldquo;cafe
              near me&rdquo; searches and makes sure customers always get
              accurate information no matter where they find you.
            </p>

            {/* Part 3: Common Mistakes */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              Common Mistakes That Drive Customers Away
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              We&apos;ve reviewed hundreds of cafe and restaurant websites across Victoria. These are
              the mistakes we see over and over again:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 text-lg mb-6">
              <li>
                <strong className="text-white">PDF menus</strong> that nobody can read on mobile
              </li>
              <li>
                <strong className="text-white">No mobile optimisation</strong> &mdash; the site looks
                broken on phones, which is where 70% of your visitors are
              </li>
              <li>
                <strong className="text-white">Slow loading</strong> caused by huge uncompressed
                photos that take 10 seconds to appear
              </li>
              <li>
                <strong className="text-white">No Google Maps embed</strong> &mdash; making people
                copy-paste your address into a separate app
              </li>
              <li>
                <strong className="text-white">Outdated information</strong> &mdash; old seasonal
                menus, wrong holiday hours, or prices that haven&apos;t been updated in a year
              </li>
              <li>
                <strong className="text-white">No link to Google reviews</strong> &mdash; missing a
                free opportunity to build trust with new visitors
              </li>
            </ul>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Every one of these mistakes costs you customers. The good news is they&apos;re all
              fixable, and fixing them doesn&apos;t require a complete website rebuild.
            </p>

            {/* Part 4: What a Bad Website Costs You */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What a Bad Cafe Website Costs You
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Here&apos;s the thing most cafe owners don&apos;t realise: a bad
              website isn&apos;t neutral. It&apos;s not just sitting there doing
              nothing. It&apos;s actively costing you money.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              A slow website that takes 6 seconds to load loses over half its
              visitors before the page even appears. That&apos;s people who searched
              for you specifically and still left.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              A website with no menu means people search for your menu, can&apos;t
              find it, and go to the cafe that does show theirs.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              A website that&apos;s broken on mobile (and over 75% of cafe searches
              happen on phones) tells potential customers you don&apos;t care about
              their experience. Before they&apos;ve even tasted your coffee.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              One cafe owner we worked with in Brunswick told us she was getting
              about 15 DMs a day on Instagram asking for her opening hours and menu.
              Fifteen. Every day. That&apos;s 15 people who couldn&apos;t find the
              info on her website because her website didn&apos;t have it. After we
              built her a proper site, those DMs dropped to about 3 a day. And her
              online delivery orders went up by 340% in two months, because people
              could finally find her through Google instead of just Instagram.
            </p>

            {/* Part 5: How to Score Yourself */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              How Many Did You Score?
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Run through the list of eight essentials above. Be honest. If you&apos;re hitting all eight,
              your website is in great shape. If you&apos;re missing one or two,
              those are quick fixes. But if you&apos;re missing four or more,
              your website is actively losing you customers every single day.
            </p>

            {/* Part 6: You Don't Need to Spend a Fortune */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              You Don&apos;t Need to Spend a Fortune
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              A good cafe website doesn&apos;t need to cost $5,000. It doesn&apos;t
              need a content management system you&apos;ll never use. It
              doesn&apos;t need monthly maintenance fees.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              It needs to be fast, look good on a phone, show your menu and hours,
              and help people find you on Google. That&apos;s it.
            </p>

            {/* Part 7: What BuildSpark Builds */}
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">
              What BuildSpark Builds for Cafes and Restaurants
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              We build fast-loading <a href="/services/cafes" className="text-amber-500 underline hover:text-amber-400">cafe and restaurant websites</a> with HTML menus that Google can actually read, beautiful
              photo galleries that load in under a second, embedded Google Maps, integrated booking
              widgets, and mobile-first design that looks great on every device. Every site we build
              includes local SEO targeting the searches that matter most&mdash;like
              &ldquo;[cuisine] + [suburb]&rdquo; keywords that bring hungry customers to your door.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-10">
              Starting from $490. Live in days, not months. No DIY drag-and-drop frustration, no
              $10,000 agency bill, and no ongoing maintenance headaches. Just a website that does
              exactly what it&apos;s supposed to do: get people through your door.
            </p>

            {/* End CTA */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 text-center">
              <p className="text-white font-bold text-xl mb-3">
                Ready to get a website your cafe deserves?
              </p>
              <p className="text-zinc-400 mb-4">
                Take our free 2-minute quiz and we&apos;ll put together a personalised plan for your
                venue&mdash;no obligations, no sales calls. Just a clear recommendation by email.
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
