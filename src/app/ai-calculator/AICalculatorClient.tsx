"use client";

import { useState, useEffect, useRef } from "react";
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
  { id: "cafe", label: "Cafe or Restaurant", icon: "☕" },
  { id: "bookkeeper", label: "Bookkeeper", icon: "📒" },
  { id: "agency", label: "Agency or Consultancy", icon: "💼" },
  { id: "retail", label: "Retail or Shop", icon: "🛍️" },
  { id: "other", label: "Other", icon: "✨" },
];

const timeDrains = [
  { id: "customer_enquiries", label: "Customer enquiries and replies" },
  { id: "admin_paperwork", label: "Admin and paperwork" },
  { id: "social_media", label: "Social media and content" },
  { id: "invoicing_bookkeeping", label: "Invoicing and bookkeeping" },
  { id: "scheduling", label: "Scheduling and bookings" },
  { id: "all_of_the_above", label: "All of the above" },
];

const aiUsageOptions = [
  { id: "yes", label: "Yes — some tools" },
  { id: "a_little", label: "A little" },
  { id: "no", label: "No — doing everything manually" },
];

const staffCountOptions = [
  { id: "just_me", label: "Just me" },
  { id: "1-3", label: "1–3 people" },
  { id: "4-10", label: "4–10 people" },
  { id: "10+", label: "10+" },
];

function GA4Event(eventName: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (cmd: string, event: string, data?: Record<string, string>) => void }).gtag;
  if (gtag) gtag("event", eventName, params);
}

function getHoursPerWeek(businessType: string, selectedSources: string[], aiUsage: string, staffCount: string): number {
  let base: number;

  if (selectedSources.includes("all_of_the_above")) {
    base = 15;
  } else if (staffCount === "10+" || (staffCount === "4-10" && selectedSources.includes("social_media"))) {
    base = 13;
  } else if (staffCount === "1-3" && selectedSources.includes("customer_enquiries")) {
    base = 7;
  } else if (staffCount === "just_me" || selectedSources.includes("admin_paperwork")) {
    base = 9;
  } else {
    base = 8;
  }

  let multiplier = 1;
  if (aiUsage === "yes") multiplier = 0.6;
  else if (aiUsage === "a_little") multiplier = 0.8;

  return Math.round(base * multiplier);
}

function AnimatedCounter({ target }: { target: number }) {
  const [display, setDisplay] = useState(0);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(false);
    const start = performance.now();
    const duration = 1800;
    let rafId: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplay(current);
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setDisplay(target);
        setAnimated(true);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target]);

  return (
    <span className={`font-black text-white transition-all duration-300 ${animated ? "text-5xl sm:text-7xl" : "text-5xl sm:text-7xl opacity-50"}`}>
      {display}
    </span>
  );
}

export default function AICalculatorClient() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState("");
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [aiUsage, setAiUsage] = useState("");
  const [staffCount, setStaffCount] = useState("");
  const [email, setEmail] = useState("");
  const quizRef = useRef<HTMLDivElement>(null);

  const hoursPerWeek = getHoursPerWeek(selectedBusinessType, selectedSources, aiUsage, staffCount);
  const monthlyHours = hoursPerWeek * 4.3;
  const monthlyDollars = Math.round(monthlyHours * 50);

  function scrollToQuiz() {
    quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Restore step from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlStep = parseInt(params.get("step") ?? "1", 10);
    if (urlStep >= 1 && urlStep <= TOTAL_STEPS) {
      setStep(urlStep);
    }
  }, []);

  useEffect(() => {
    GA4Event("page_view", { page_title: "AI Time Calculator", page_location: window.location.href });
  }, []);

  // Update URL step when step changes
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

  function goNext() {
    GA4Event("calc_step_started", {
      step_number: String(step + 1),
      business_type: selectedBusinessType || "not_selected",
    });
    setDirection(1);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function goBack() {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  }

  function toggleSource(id: string) {
    // If selecting "All of the above", clear everything else
    if (id === "all_of_the_above") {
      setSelectedSources(["all_of_the_above"]);
      return;
    }
    // If any other selection while "All of the above" is selected, replace
    if (selectedSources.includes("all_of_the_above")) {
      setSelectedSources([id]);
      return;
    }
    setSelectedSources((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  }

  function canProceed(): boolean {
    if (step === 1) return !!selectedBusinessType;
    if (step === 2) return selectedSources.length > 0;
    if (step === 3) return !!aiUsage;
    if (step === 4) return !!staffCount;
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
          _subject: "New AI Calculator Lead - BuildSpark",
          _captcha: "false",
          _template: "table",
          "Business Type": selectedBusinessType,
          "Time Drains": selectedSources.join(", "),
          "AI Usage": aiUsage,
          "Staff Count": staffCount,
          Email: email,
          source: "ai-calculator",
        }),
      });
    } catch { /* silent fail */ }

    GA4Event("calc_email_submitted", {
      business_type: selectedBusinessType,
      time_drains: selectedSources.join(", "),
      ai_usage: aiUsage,
      staff_count: staffCount,
    });

    GA4Event("calc_reveal_shown", {
      hours_saved: String(hoursPerWeek),
      monthly_value: String(monthlyDollars),
      business_type: selectedBusinessType,
    });

    GA4Event("form_submit", { event_category: "Calculator", event_label: "AI Calculator" });

    setDirection(1);
    setSubmitted(true);
  }

  function handleStartOver() {
    setStep(1);
    setDirection(-1);
    setSubmitted(false);
    setSelectedBusinessType("");
    setSelectedSources([]);
    setAiUsage("");
    setStaffCount("");
    setEmail("");
  }

  return (
    <div className="min-h-screen bg-background text-white flex flex-col">
      {/* Sticky top bar */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-zinc-800/50 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <span className="text-amber-500 font-bold text-lg tracking-tight">BuildSpark</span>
          <span className="text-zinc-400 text-sm font-medium">AI Calculator</span>
        </div>
      </div>

      {/* Progress bar */}
      {!submitted && (
        <div className="px-4 pt-4">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm text-zinc-400 shrink-0">Step {step} of {TOTAL_STEPS}</span>
              <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-amber-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      {!submitted && step === 1 && (
        <div className="w-full py-16 sm:py-20 px-4">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
            <span className="inline-block px-3 py-1 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-widest">
              Free Tool
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              How many hours and dollars can your business save with AI?
            </h1>
            <p className="text-zinc-400 text-lg max-w-md">
              Find out in 60 seconds — see what AI could automate for free.
            </p>
            <button
              onClick={scrollToQuiz}
              className="h-12 px-10 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg shadow-lg shadow-amber-500/20 transition-all duration-200 text-base cursor-pointer"
            >
              Calculate My Time Savings
            </button>
            <p className="text-zinc-500 text-sm">No signup required. See your results instantly.</p>
          </div>
        </div>
      )}

      <div
        ref={quizRef}
        id="quiz-start"
        className="flex-1 flex flex-col items-center justify-start px-4 pt-6 pb-32"
      >
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            {!submitted ? (
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {/* STEP 1 — Business Type */}
                {step === 1 && (
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">What type of business do you run?</h2>
                    <p className="text-zinc-400 mb-6 text-base">Select the one that fits best.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {businessTypes.map((bt) => (
                        <button
                          key={bt.id}
                          onClick={() => { setSelectedBusinessType(bt.id); goNext(); }}
                          className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border text-center transition-all duration-200 select-none cursor-pointer ${
                            selectedBusinessType === bt.id
                              ? "border-amber-500 bg-amber-500/10"
                              : "border-zinc-800 bg-surface hover:border-zinc-600"
                          }`}
                        >
                          <span className="text-2xl">{bt.icon}</span>
                          <span className="text-sm font-semibold text-white leading-tight">{bt.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2 — Time Drains (multi-select chips) */}
                {step === 2 && (
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">What&apos;s eating up most of your time?</h2>
                    <p className="text-zinc-400 mb-6 text-base">Select all that apply.</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {timeDrains.map((drain) => (
                        <button
                          key={drain.id}
                          onClick={() => toggleSource(drain.id)}
                          className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 cursor-pointer ${
                            selectedSources.includes(drain.id)
                              ? "border-amber-500 bg-amber-500 text-black"
                              : "border-zinc-700 bg-surface text-zinc-300 hover:border-zinc-500"
                          }`}
                        >
                          {drain.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 3 — AI Usage */}
                {step === 3 && (
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Are you using any AI yet?</h2>
                    <p className="text-zinc-400 mb-6 text-base">Be honest — we&apos;ll tailor your results.</p>
                    <div className="space-y-3">
                      {aiUsageOptions.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => { setAiUsage(opt.id); goNext(); }}
                          className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                            aiUsage === opt.id
                              ? "border-amber-500 bg-amber-500/10"
                              : "border-zinc-800 bg-surface hover:border-zinc-600"
                          }`}
                        >
                          <span className="text-amber-500 text-xl shrink-0 ml-1">{aiUsage === opt.id ? "✓" : "○"}</span>
                          <span className="font-semibold text-white">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 4 — Staff Count */}
                {step === 4 && (
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">How many staff?</h2>
                    <p className="text-zinc-400 mb-6 text-base">Select the option that fits.</p>
                    <div className="space-y-3">
                      {staffCountOptions.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => { setStaffCount(opt.id); goNext(); }}
                          className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                            staffCount === opt.id
                              ? "border-amber-500 bg-amber-500/10"
                              : "border-zinc-800 bg-surface hover:border-zinc-600"
                          }`}
                        >
                          <span className="text-amber-500 text-xl shrink-0 ml-1">{staffCount === opt.id ? "✓" : "○"}</span>
                          <span className="font-semibold text-white">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 5 — Email */}
                {step === 5 && (
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">See your time breakdown</h2>
                    <p className="text-zinc-400 mb-6 text-base">We&apos;ll send your personalised AI automation plan.</p>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com.au"
                      className="w-full h-14 px-4 rounded-xl border border-zinc-800 bg-surface text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors text-base mb-2"
                    />
                    <p className="text-zinc-500 text-sm">We&apos;ll send your results here</p>
                  </div>
                )}
              </motion.div>
            ) : (
              /* STEP 6 — REVEAL */
              <motion.div
                key="reveal"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col items-center text-center py-8"
              >
                <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-4">Your Results</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                  Here&apos;s how much time you&apos;re leaving on the table...
                </h2>
                <div className="mb-4">
                  <AnimatedCounter target={hoursPerWeek} />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-amber-400 mb-8">hours per week</p>
                <p className="text-zinc-300 text-lg mb-8 max-w-sm">
                  That&apos;s {Math.round(monthlyHours)} hours a month. At $50/hr that&apos;s <span className="text-amber-400 font-bold">${monthlyDollars.toLocaleString()}</span> in free time every month.
                </p>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8 w-full max-w-sm text-left">
                  <p className="text-zinc-300 text-base mb-1">
                    AI tools from <span className="text-amber-500 font-bold">$0</span> could start reclaiming this time.
                  </p>
                  <p className="text-zinc-400 text-sm">Want a personalised automation plan for your business?</p>
                </div>
                <a
                  href="/contact"
                  className="w-full max-w-sm inline-flex items-center justify-center rounded-lg font-semibold bg-amber-500 text-black hover:bg-amber-400 h-12 text-base px-8 transition-all duration-200 shadow-lg shadow-amber-500/20 mb-4"
                >
                  See How AI Could Work For Your Business →
                </a>
                <button
                  onClick={handleStartOver}
                  className="text-zinc-500 text-sm hover:text-zinc-300 transition-colors"
                >
                  Start over
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Sticky bottom CTA bar */}
      {!submitted && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-zinc-800/50 px-4 py-4"
          style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom))" }}
        >
          <div className="max-w-2xl mx-auto flex gap-3">
            {step > 1 && step < 5 && (
              <button
                onClick={goBack}
                className="shrink-0 inline-flex items-center justify-center rounded-lg font-semibold border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white h-12 px-5 transition-all duration-200 bg-surface"
              >
                ← Back
              </button>
            )}
            <div className="flex-1">
              {step < 5 ? (
                <button
                  onClick={goNext}
                  disabled={!canProceed()}
                  className="w-full inline-flex items-center justify-center rounded-lg font-semibold bg-amber-500 text-black hover:bg-amber-400 disabled:opacity-50 disabled:pointer-events-none h-12 text-base px-8 transition-all duration-200 shadow-lg shadow-amber-500/20"
                >
                  Continue →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="w-full inline-flex items-center justify-center rounded-lg font-semibold bg-amber-500 text-black hover:bg-amber-400 disabled:opacity-50 disabled:pointer-events-none h-12 text-base px-8 transition-all duration-200 shadow-lg shadow-amber-500/20"
                >
                  Send My Plan →
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
