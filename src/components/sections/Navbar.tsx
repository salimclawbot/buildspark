"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Tradies", href: "/services/tradies" },
      { label: "Clinics & Specialists", href: "/quiz" },
      { label: "Equine & Horse Businesses", href: "/quiz" },
      { label: "Security & CCTV", href: "/blog/security-cctv-installer-websites-lead-generator" },
      { label: "Cafes & Restaurants", href: "/services/cafes" },
      { label: "Bakeries", href: "/services/bakeries" },
      { label: "Mechanics", href: "/services/mechanics" },
      { label: "Bookkeepers", href: "/services/bookkeepers" },
    ],
  },
  { label: "Locations", href: "/locations" },
  { label: "Results", href: "/case-studies" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "$250/month", href: "/pricing" },
];

type NavbarProps = {
  ctaLabel?: string;
  ctaHref?: string;
  singleCta?: boolean;
  tone?: "dark" | "light";
};

export function Navbar({
  ctaLabel = "Get Started",
  ctaHref = "/quiz",
  singleCta = false,
  tone = "dark",
}: NavbarProps = {}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  const isLight = tone === "light";
  const navClass = scrolled
    ? isLight
      ? "bg-white/90 backdrop-blur-xl border-b border-zinc-200 shadow-sm"
      : "bg-background/80 backdrop-blur-xl border-b border-zinc-800/50"
    : isLight
      ? "bg-white/85 backdrop-blur-xl border-b border-zinc-200/70"
      : "bg-transparent";
  const logoTextClass = isLight ? "text-zinc-950" : "text-white";
  const linkClass = isLight
    ? "text-sm text-zinc-700 hover:text-zinc-950 transition-colors duration-200"
    : "text-sm text-zinc-400 hover:text-white transition-colors duration-200";
  const dropdownClass = isLight
    ? "absolute top-full left-0 mt-2 w-56 rounded-xl border border-zinc-200 bg-white/95 backdrop-blur-xl p-2 shadow-xl"
    : "absolute top-full left-0 mt-2 w-56 rounded-xl border border-zinc-800 bg-background/95 backdrop-blur-xl p-2 shadow-xl";

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className={`text-xl font-bold ${logoTextClass}`}>Build</span>
            <span className="text-xl font-bold text-amber-500">Spark</span>
            <svg
              className="w-5 h-5 text-amber-500 transition-transform group-hover:scale-125 group-hover:rotate-12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`${linkClass} flex items-center gap-1`}
                  >
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
                  </Link>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className={dropdownClass}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                              isLight
                                ? "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
                                : "text-zinc-400 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={linkClass}
                >
                  {link.label}
                </Link>
              )
            )}
            {!singleCta ? (
              <Button asChild variant="outline" size="default">
                <Link href="/free-website-audit">Free Audit</Link>
              </Button>
            ) : null}
            <Button asChild size="default">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 ${isLight ? "text-zinc-950" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden overflow-hidden backdrop-blur-xl border-b ${
              isLight ? "bg-white/95 border-zinc-200" : "bg-background/95 border-zinc-800"
            }`}
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-lg transition-colors ${
                      isLight ? "text-zinc-800 hover:text-zinc-950" : "text-zinc-300 hover:text-white"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`text-sm transition-colors ${
                            isLight ? "text-zinc-500 hover:text-zinc-950" : "text-zinc-500 hover:text-white"
                          }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {!singleCta ? (
                <Button asChild variant="outline" size="lg" className="mt-2 w-full">
                  <Link href="/free-website-audit">Free Audit</Link>
                </Button>
              ) : null}
              <Button asChild size="lg" className="mt-2 w-full">
                <Link href={ctaHref} onClick={() => setMobileOpen(false)}>
                  {ctaLabel}
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
