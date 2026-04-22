"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const TOTAL_STEPS = 6;

const businessTypes = [
  { id: "tradie", label: "Tradie", icon: "🔧" },
  { id: "electrician", label: "Electrician", icon: "⚡" },
  { id: "plumber", label: "Plumber", icon: "🔧" },
  { id: "mechanic", label: "Mechanic", icon: "🔧" },
  { id: "cafe", label: "Cafe", icon: "☕" },
  { id: "bakery", label: "Bakery", icon: "🥖" },
  { id: "bookkeeper", label: "Bookkeeper", icon: "📒" },
  { id: "other", label: "Other", icon: "✨" },
];

const customerSources = [
  { id: "google", label: "Google" },
  { id: "word_of_mouth", label: "Word of mouth" },
  { id: "facebook", label: "Facebook" },
  { id: "referrals", label: "Referrals" },
  { id: "instagram", label: "Instagram" },
  { id: "nothing_online", label: "Nothing online" },
  { id: "other", label: "Other" },
];

const goalOptions = [
  { id: "phone_calls", label: "Phone calls" },
  { id: "online_bookings", label: "Online bookings" },
  { id: "enquiry_form", label: "Enquiry form submissions" },
  { id: "more_customers", label: "More customers overall" },
];

interface RevealResult {
  headline: string;
  value: string;
  sub: string;
  ctaText: string;
}

function getRevealData(businessType: string, sources: string[]): RevealResult {
  const hasNothingOnline = sources.includes("nothing_online");
  const hasGoogleOnly = sources.length === 1 && sources.includes("google");
  const hasWordOfMouthOnly = sources.length === 1 && sources.includes("word_of_mouth");
  const trades = ["tradie", "electrician", "plumber", "mechanic"];

  // Priority 1: nothing_online → show big per-type number
  if (hasNothingOnline) {
    if (trades.includes(businessType) || businessType === "other") {
      return { headline: "Here's what you're leaving on the table...", value: "$2,400/mo", sub: "in lost jobs — every month — just from having no website.", ctaText: "See My Website Options →" };
    }
    if (businessType === "cafe" || businessType === "bakery") {
      return { headline: "Here's what you're leaving on the table...", value: "18 bookings", sub: "a week — sitting empty because no one can find you online.", ctaText: "See My Website Options →" };
    }
    if (businessType === "bookkeeper") {
      return { headline: "Here's what you're leaving on the table...", value: "$1,800/mo", sub: "in missed enquiries — just from not having a website.", ctaText: "See My Website Options →" };
    }
    return { headline: "Here's what you're leaving on the table...", value: "$2,400/mo", sub: "in missed revenue — just from not having a website.", ctaText: "See My Website Options →" };
  }

  // Priority 2: Google only → +31%
  if (hasGoogleOnly) {
    return { headline: "Here's what you're leaving on the table...", value: "+31%", sub: "more enquiries — if you had a website working with Google right now.", ctaText: "See My Website Options →" };
  }

  // Priority 3: Word of mouth only → +44%
  if (hasWordOfMouthOnly) {
    return { headline: "Here's what you're leaving on the table...", value: "+44%", sub: "more calls — if people could find you on Google when they search.", ctaText: "See My Website Options →" };
  }

  // Priority 4: fallback for any other combo
  return { headline: "Here's what you're leaving on the table...", value: "$2,400/mo", sub: "in missed revenue — if you had a website working for you right now.", ctaText: "See My Website Options →" };
}

function GA4Event(eventName: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (cmd: string, event: string, data?: Record<string, string>) => void }).gtag;
  if (gtag) gtag("event", eventName, params);
}

function AnimatedNumber({ value }: { value: string }) {
  const [display, setDisplay] = useState("0");
  const [animated, setAnimated] = useState(false);
  const isPercent = value.startsWith("+");
  const isBookings = value.includes("bookings");
  const numericPart = value.replace(/[^0-9]/g, "");
  const prefix = value.match(/^[^+0-9]*/)?.[0] ?? "";
  const suffix = value.match(/[^0-9%+]*$/)?.[0] ?? "";

  useEffect(() => {
    setAnimated(false);
    if (isPercent) {
      setDisplay(value);
      const timer = setTimeout(() => setAnimated(true), 100);
      return () => clearTimeout(timer);
    }
    const target = parseInt(numericPart, 10);
    const start = performance.now();
    const duration = 1400;
    if (isBookings) {
      setDisplay("0 " + suffix);
    } else {
      setDisplay(prefix + "0" + suffix);
    }
    let rafId: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      if (isBookings) {
        setDisplay(current + " " + suffix);
      } else {
        setDisplay(prefix + current.toLocaleString() + suffix);
      }
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setAnimated(true);
      }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [value, isPercent, isBookings, numericPart, prefix, suffix]);

  return (
    <span className={`font-black text-white transition-all duration-300 ${animated ? "text-5xl sm:text-6xl" : "text-5xl sm:text-6xl opacity-50"}`}>
      {display}
    </span>
  );
}

export default function CalculatorClient() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState("");
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [suburb, setSuburb] = useState("");
  const [email, setEmail] = useState("");
  const revealData = getRevealData(selectedBusinessType, selectedSources);

  // Fix 4: Browser back-button handling via URL step param
  useEffect(() => {
    // Restore step from URL on mount
    const params = new URLSearchParams(window.location.search);
    const urlStep = parseInt(params.get("step") ?? "1", 10);
    if (urlStep >= 1 && urlStep <= TOTAL_STEPS) {
      setStep(urlStep);
    }
  }, []);

  useEffect(() => {
    GA4Event("page_view", { page_title: "Business Revenue Calculator", page_location: window.location.href });
  }, []);

  // Update URL step when step changes (no page reload)
  useEffect(() => {
    if (step === 1) return;
    window.history.pushState({ step }, "", "?step=" + step);
  }, [step]);

  // Handle browser back/forward
  useEffect(() => {
    const onPopState = (e: PopStateEvent) => {
      const state = e.state as { step: number } | null;
      if (state && state.step >= 1 && state.step <= TOTAL_STEPS) {
        const newStep = state.step;
        const dir = newStep > step ? 1 : -1;
        setDirection(dir);
        setStep(newStep);
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [step]);

  function goNext() { setDirection(1); setStep((s) => Math.min(s + 1, TOTAL_STEPS)); }
  function goBack() { setDirection(-1); setStep((s) => Math.max(s - 1, 1)); }
  function toggleSource(id: string) {
    setSelectedSources((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  }
  function canProceed(): boolean {
    if (step === 1) return !!selectedBusinessType;
    if (step === 2) return selectedSources.length > 0;
    if (step === 3) return !!selectedGoal;
    if (step === 4) return true;
    if (step === 5) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return true;
  }

  async function handleSubmit() {
    if (!canProceed()) return;
    try {
      await fetch("https://formsubmit.co/ajax/info@buildspark.com.au", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new URLSearchParams({
          _subject: "New Revenue Calculator Lead - BuildSpark",
          _captcha: "false",
          _template: "table",
          "Business Type": selectedBusinessType,
          "Customer Sources": selectedSources.join(", "),
          "Goal": selectedGoal,
          "Suburb": suburb,
          Email: email,
          source: "fb-revenue-calc",
        }),
      });
    } catch { /* silent fail */ }
    GA4Event("form_submit", { event_category: "Calculator", event_label: "Revenue Calculator" });
    setDirection(1);
    setSubmitted(true);
  }

  function handleStartOver() {
    setStep(1); setDirection(-1); setSubmitted(false);
    setSelectedBusinessType(""); setSelectedSources([]); setSelectedGoal(""); setSuburb(""); setEmail("");
  }

  return (
    <div className="min-h-screen bg-background text-white flex flex-col">
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-zinc-800/50 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <span className="text-amber-500 font-bold text-lg tracking-tight">BuildSpark</span>
          <span className="text-zinc-400 text-sm font-medium">Calculator</span>
        </div>
      </div>

      {!submitted && (
        <div className="px-4 pt-4">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm text-zinc-400 shrink-0">Step {step} of {TOTAL_STEPS}</span>
              <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div className="h-full bg-amber-500 rounded-full" initial={{ width: "0%" }} animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }} transition={{ duration: 0.4, ease: "easeOut" }} />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col items-center justify-start px-4 pt-6 pb-32">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            {!submitted ? (
              <motion.div key={step} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3, ease: "easeInOut" }}>
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">What type of business do you run?</h2>
                    <p className="text-zinc-400 mb-6 text-base">Select the one that fits best.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {businessTypes.map((bt) => (
                        <button key={bt.id} onClick={() => { setSelectedBusinessType(bt.id); goNext(); }} className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border text-center transition-all duration-200 select-none cursor-pointer ${selectedBusinessType === bt.id ? "border-amber-500 bg-amber-500/10" : "border-zinc-800 bg-surface hover:border-zinc-600"}`}>
                          <span className="text-2xl">{bt.icon}</span>
                          <span className="text-sm font-semibold text-white leading-tight">{bt.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {step === 2 && (
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">How are customers finding you right now?</h2>
                    <p className="text-zinc-400 mb-6 text-base">Select all that apply.</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {customerSources.map((src) => (
                        <button key={src.id} onClick={() => toggleSource(src.id)} className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 cursor-pointer ${selectedSources.includes(src.id) ? "border-amber-500 bg-amber-500 text-black" : "border-zinc-700 bg-surface text-zinc-300 hover:border-zinc-500"}`}>{src.label}</button>
                      ))}
                    </div>
                  </div>
                )}
                {step === 3 && (
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">What do you want more of?</h2>
                    <p className="text-zinc-400 mb-6 text-base">Pick your main goal.</p>
                    <div className="space-y-3">
                      {goalOptions.map((goal) => (
                        <button key={goal.id} onClick={() => { setSelectedGoal(goal.id); goNext(); }} className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${selectedGoal === goal.id ? "border-amber-500 bg-amber-500/10" : "border-zinc-800 bg-surface hover:border-zinc-600"}`}>
                          <span className="text-amber-500 text-xl shrink-0 ml-1">{selectedGoal === goal.id ? "✓" : "○"}</span>
                          <span className="font-semibold text-white">{goal.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {step === 4 && (
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">What suburb are you in?</h2>
                    <p className="text-zinc-400 mb-6 text-base">Optional — helps us understand your local market.</p>
                    <input type="text" value={suburb} onChange={(e) => setSuburb(e.target.value)} placeholder="e.g. Geelong, Melbourne..." className="w-full h-14 px-4 rounded-xl border border-zinc-800 bg-surface text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors text-base" />
                  </div>
                )}
                {step === 5 && (
                  <div>
                    {/* Fix 5: removed "exactly" */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">See what you&apos;re missing out on</h2>
                    <p className="text-zinc-400 mb-6 text-base">We&apos;ll send your personalised revenue breakdown — takes 30 seconds to read.</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com.au" className="w-full h-14 px-4 rounded-xl border border-zinc-800 bg-surface text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors text-base mb-2" />
                    {/* Fix 2: helper text below email */}
                    <p className="text-zinc-500 text-sm">We&apos;ll send your results here</p>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div key="reveal" custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3, ease: "easeInOut" }} className="flex flex-col items-center text-center py-8">
                <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-4">Your Results</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">{revealData.headline}</h2>
                <div className="mb-6"><AnimatedNumber value={revealData.value} /></div>
                <p className="text-zinc-300 text-lg mb-8 max-w-sm">{revealData.sub}</p>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8 w-full max-w-sm text-left">
                  <p className="text-zinc-300 text-base mb-1">A website from <span className="text-amber-500 font-bold">$490</span> could close this gap.</p>
                  <p className="text-zinc-400 text-sm">Want to see what yours would look like?</p>
                </div>
                <a href="/quiz" className="w-full max-w-sm inline-flex items-center justify-center rounded-lg font-semibold bg-amber-500 text-black hover:bg-amber-400 h-12 text-base px-8 transition-all duration-200 shadow-lg shadow-amber-500/20 mb-4">{revealData.ctaText}</a>
                <button onClick={handleStartOver} className="text-zinc-500 text-sm hover:text-zinc-300 transition-colors">Start over</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {!submitted && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-zinc-800/50 px-4 py-4" style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom))" }}>
          <div className="max-w-2xl mx-auto flex gap-3">
            {step > 1 && step < 5 && (
              <button onClick={goBack} className="shrink-0 inline-flex items-center justify-center rounded-lg font-semibold border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white h-12 px-5 transition-all duration-200 bg-surface">← Back</button>
            )}
            <div className="flex-1">
              {step < 5 ? (
                <button onClick={goNext} disabled={!canProceed()} className="w-full inline-flex items-center justify-center rounded-lg font-semibold bg-amber-500 text-black hover:bg-amber-400 disabled:opacity-50 disabled:pointer-events-none h-12 text-base px-8 transition-all duration-200 shadow-lg shadow-amber-500/20">Continue →</button>
              ) : (
                <button onClick={handleSubmit} disabled={!canProceed()} className="w-full inline-flex items-center justify-center rounded-lg font-semibold bg-amber-500 text-black hover:bg-amber-400 disabled:opacity-50 disabled:pointer-events-none h-12 text-base px-8 transition-all duration-200 shadow-lg shadow-amber-500/20">Send My Breakdown →</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
