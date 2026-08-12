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

  const isStudio = tone === "light";
  const navClass = isStudio
    ? scrolled
      ? "bg-[#f5f2e8]/92 backdrop-blur-xl border-b border-[#141414]/10 shadow-[0_18px_60px_rgba(20,20,20,0.08)]"
      : "bg-[#f5f2e8]/82 backdrop-blur-xl border-b border-[#141414]/8"
    : scrolled
      ? "bg-background/80 backdrop-blur-xl border-b border-zinc-800/50"
      : "bg-transparent";
  const logoTextClass = isStudio ? "text-[#141414]" : "text-white";
  const brandAccentClass = isStudio ? "text-[#1e49ff]" : "text-amber-500";
  const sparkClass = isStudio ? "text-[#d9ff45]" : "text-amber-500";
  const linkClass = isStudio
    ? "text-[13px] font-semibold text-[#141414]/70 hover:text-[#1e49ff] transition-colors duration-200"
    : "text-sm text-zinc-400 hover:text-white transition-colors duration-200";
  const dropdownClass = isStudio
    ? "absolute top-full left-0 mt-3 w-64 border border-[#141414]/10 bg-[#fffdf5]/96 backdrop-blur-xl p-2 shadow-[0_24px_80px_rgba(20,20,20,0.12)]"
    : "absolute top-full left-0 mt-2 w-56 rounded-xl border border-zinc-800 bg-background/95 backdrop-blur-xl p-2 shadow-xl";

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <span className={`text-xl font-black tracking-tight ${logoTextClass}`}>Build</span>
            <span className={`text-xl font-black tracking-tight ${brandAccentClass}`}>Spark</span>
            <svg
              className={`w-5 h-5 ${sparkClass} transition-transform group-hover:scale-125 group-hover:rotate-12`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
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
                              isStudio
                                ? "text-[#141414]/70 hover:text-[#1e49ff] hover:bg-[#1e49ff]/6"
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
              <Button asChild variant="outline" size="default" className={isStudio ? "rounded-full border-[#141414]/20 bg-white/40 text-[#141414] hover:bg-white" : ""}>
                <Link href="/free-website-audit">{isStudio ? "Website audit" : "Free Audit"}</Link>
              </Button>
            ) : null}
            <Button asChild size="default" className={isStudio ? "rounded-full bg-[#141414] px-5 text-white hover:bg-[#1e49ff]" : ""}>
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 ${isStudio ? "text-[#141414]" : "text-white"}`}
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
            className={isStudio
              ? "md:hidden overflow-hidden border-b border-[#141414]/10 bg-[#f5f2e8]/96 backdrop-blur-xl"
              : "md:hidden overflow-hidden border-b border-zinc-800 bg-background/95 backdrop-blur-xl"
            }
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className={isStudio
                      ? "text-lg font-semibold text-[#141414] transition-colors hover:text-[#1e49ff]"
                      : "text-lg text-zinc-300 transition-colors hover:text-white"
                    }
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
                          className={isStudio
                            ? "text-sm text-[#141414]/60 transition-colors hover:text-[#1e49ff]"
                            : "text-sm text-zinc-500 transition-colors hover:text-white"
                          }
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
                <Button asChild variant="outline" size="lg" className={isStudio ? "mt-2 w-full rounded-full border-[#141414]/20 bg-white/40 text-[#141414]" : "mt-2 w-full"}>
                  <Link href="/free-website-audit">{isStudio ? "Website audit" : "Free Audit"}</Link>
                </Button>
              ) : null}
              <Button asChild size="lg" className={isStudio ? "mt-2 w-full rounded-full bg-[#141414] text-white" : "mt-2 w-full"}>
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
