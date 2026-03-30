"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const caseStudies = [
  {
    type: "Electrician",
    suburb: "Werribee",
    before:
      "Dave had a Facebook page and a Gumtree ad. Most of his work came from one builder who kept him busy enough. When that builder slowed down over winter, Dave\u2019s income dropped 40% in two months.",
    after:
      "Within 60 days of launching his BuildSpark site, Dave was getting 12 new enquiries a week through Google. He hired his first apprentice in March and stopped relying on a single referral source.",
    result: "Revenue up 35%",
  },
  {
    type: "Cafe",
    suburb: "Northcote",
    before:
      "Mia\u2019s cafe had an Instagram page with great photos but no website. She was paying $300/month for a Menulog listing that ate into her margins. Customers kept calling to ask for the menu and opening hours.",
    after:
      "Her new site ranks #2 for \u201Cbest cafe Northcote\u201D on Google. Online order enquiries went up 50%. She cancelled Menulog and saves $3,600 a year.",
    result: "Paid for itself in month 1",
  },
  {
    type: "Plumber",
    suburb: "Ballarat",
    before:
      "Robbo had a Wix site he built himself in 2021. It looked alright on his laptop but was nearly unusable on a phone. His Google Business profile had no link to a proper site.",
    after:
      "New mobile-first site launched on a Thursday. By Monday he had 8 new enquiries through the contact form. He now ranks in the top 3 for \u201Cemergency plumber Ballarat.\u201D",
    result: "Booked out 2 weeks in advance",
  },
  {
    type: "Bookkeeper",
    suburb: "Geelong",
    before:
      "Sarah had been running her bookkeeping business for six years on referrals alone. When her biggest client moved interstate, she lost 30% of her revenue overnight. No website, no Google presence.",
    after:
      "Her BuildSpark site went live with a sharp lead capture form and local SEO built in. In the first 90 days she landed 6 new ongoing clients purely from Google search.",
    result: "First-ever waitlist",
  },
  {
    type: "Mechanic",
    suburb: "Dandenong",
    before:
      "Tommo\u2019s workshop relied on drive-by traffic and a faded sign out front. He had zero online reviews and no website. Younger customers didn\u2019t even know he existed.",
    after:
      "His new site with integrated Google Reviews went live and he jumped from invisible to page one for \u201Cmechanic Dandenong\u201D within 8 weeks.",
    result: "Monthly bookings up 40%",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function BeforeAfter() {
  return (
    <section className="py-14 sm:py-24 relative overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <Image
          src="/images/vic-main-street.webp"
          alt="Victorian main street with local businesses"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Real Results From{" "}
            <span className="text-amber-500">Real Victorian Businesses</span>
          </h2>
        </motion.div>

        {/* Success banner image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden border border-white/10 mb-12"
        >
          <Image
            src="/images/business-owner-success.webp"
            alt="Successful Victorian business owner"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-2xl sm:text-3xl font-bold text-white text-center px-4">
              5 businesses. 5 transformations. <span className="text-amber-500">Real numbers.</span>
            </p>
          </div>
        </motion.div>

        {/* Case study cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.suburb}
              variants={cardVariants}
              className="rounded-xl border border-zinc-800 bg-surface p-6 flex flex-col"
            >
              {/* Badge */}
              <span className="inline-flex self-start items-center rounded-full bg-amber-500/10 border border-amber-500/30 px-3 py-1 text-xs font-medium text-amber-500 mb-4">
                {cs.type} - {cs.suburb}
              </span>

              {/* Before */}
              <div className="mb-4">
                <span className="inline-block text-sm font-bold text-red-400 bg-red-500/10 rounded px-2.5 py-1 mb-2">
                  BEFORE
                </span>
                <p className="text-zinc-400 text-base leading-relaxed">
                  {cs.before}
                </p>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-2" />

              {/* After */}
              <div className="mt-2 flex-1">
                <span className="inline-block text-sm font-bold text-emerald-400 bg-emerald-500/10 rounded px-2.5 py-1 mb-2">
                  AFTER
                </span>
                <p className="text-zinc-300 text-base leading-relaxed mb-3">
                  {cs.after}
                </p>
                <p className="text-3xl font-bold text-amber-400">
                  {cs.result}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
