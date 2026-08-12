"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Company: [
    { label: "Website Quiz", href: "/quiz" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Reviews", href: "/reviews" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "All Services", href: "/services" },
    { label: "Tradies", href: "/services/tradies" },
    { label: "Clinics & Specialists", href: "/quiz" },
    { label: "Equine Businesses", href: "/quiz" },
    { label: "Hospitality", href: "/services/cafes" },
    { label: "Professional Services", href: "/quiz" },
    { label: "Local Business Websites", href: "/local-business-websites" },
  ],
  Resources: [
    { label: "$250/month pricing", href: "/pricing" },
    { label: "Free Website Audit", href: "/free-website-audit" },
    { label: "Locations", href: "/locations" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707] text-white">
      <section className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(245,158,11,0.22),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto grid max-w-7xl gap-8 border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-amber-300">
              <Sparkles className="h-4 w-4" />
              Website, hosting, care, content and tracking
            </div>
            <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              Ready for a website that makes your business look like the obvious choice?
            </h2>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-zinc-300">
              {["$250 per month", "No huge upfront bill", "Monthly changes", "Lead tracking"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <Button asChild size="lg" className="h-14 rounded-none !bg-amber-500 px-8 text-base !text-black shadow-xl shadow-amber-500/20 hover:!bg-amber-400">
            <Link href="/quiz">
              Start the Website Quiz <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </section>

      <div className="border-t border-white/10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-1">
              <span className="text-xl font-black text-white">Build</span>
              <span className="text-xl font-black text-amber-500">Spark</span>
              <span className="text-amber-500">⚡</span>
            </Link>
            <p className="max-w-sm text-sm leading-6 text-zinc-400">
              Premium managed websites for local businesses that need more trust,
              better enquiries, and a site that stays looked after.
            </p>
            <p className="mt-5 text-sm font-bold text-amber-300">$250 per month. Straight up.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-white">{title}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={`${title}-${link.href}-${link.label}`}>
                      <Link href={link.href} className="text-sm text-zinc-500 transition hover:text-white">
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

      <div className="border-t border-white/10 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BuildSpark. Managed websites for serious local businesses.</p>
          <div className="flex gap-5">
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
