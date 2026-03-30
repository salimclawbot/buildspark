"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Company: [
    { label: "Free Website Quiz", href: "/quiz" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Reviews", href: "/reviews" },
    { label: "Blog", href: "/blog" },
    { label: "Free Audit", href: "/free-website-audit" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Tradies", href: "/services/tradies" },
    { label: "Cafes & Restaurants", href: "/services/cafes" },
    { label: "Bakeries", href: "/services/bakeries" },
    { label: "Mechanics", href: "/services/mechanics" },
    { label: "Bookkeepers", href: "/services/bookkeepers" },
    { label: "Plumbers", href: "/plumbers" },
    { label: "Electricians", href: "/electricians" },
    { label: "Painters", href: "/painters" },
    { label: "Builders", href: "/builders" },
  ],
  Locations: [
    { label: "View All Locations \u2192", href: "/locations" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      {/* CTA Banner */}
      <section className="py-12 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to get more{" "}
            <span className="text-amber-500">customers?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s build a website that actually works for your business. No
            fluff, no nonsense - just results.
          </p>
          <Button asChild size="lg" className="text-base px-10">
            <Link href="/quiz">Start Your Free Quiz →</Link>
          </Button>
        </motion.div>
      </section>

      {/* Footer links */}
      <div className="border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Logo column */}
            <div>
              <Link href="/" className="flex items-center gap-1 mb-4">
                <span className="text-lg font-bold text-white">Build</span>
                <span className="text-lg font-bold text-amber-500">Spark</span>
                <svg
                  className="w-4 h-4 text-amber-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </Link>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Fast, affordable websites for Victorian local businesses.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-500 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} BuildSpark. Websites that work as
              hard as you.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="/contact"
                className="text-sm text-zinc-500 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-zinc-500 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-zinc-500 hover:text-white transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
