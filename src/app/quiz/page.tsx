"use client";

import { useState, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const businessTypes = [
  "Tradie",
  "Cafe / Restaurant",
  "Bakery",
  "Mechanic",
  "Bookkeeper / Accountant",
  "Other",
];

const websiteGoals = [
  "Get more phone calls",
  "Get online bookings",
  "Get enquiry forms filled",
  "Sell products online",
  "Just look professional",
];

const styleOptions = [
  { name: "Clean & Minimal", description: "Simple, modern, lots of white space" },
  { name: "Bold & Colourful", description: "Eye-catching, vibrant, stands out" },
  { name: "Professional & Corporate", description: "Polished, trustworthy, serious" },
  { name: "Warm & Friendly", description: "Inviting, personal, approachable" },
];

const TOTAL_STEPS = 6;

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

export default function QuizPage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Step 1
  const [businessType, setBusinessType] = useState("");
  const [otherBusinessType, setOtherBusinessType] = useState("");
  // Step 2
  const [businessName, setBusinessName] = useState("");
  const [suburb, setSuburb] = useState("");
  // Step 3
  const [goals, setGoals] = useState<string[]>([]);
  // Step 4
  const [style, setStyle] = useState("");
  const [hasLogo, setHasLogo] = useState<boolean | null>(null);
  // Step 5
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentWebsite, setCurrentWebsite] = useState("");
  // Plan selection (step 6 + URL param)
  const [selectedPlan, setSelectedPlan] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    if (plan) {
      const planMap: Record<string, string> = {
        starter: "Starter — $490",
        business: "Business — $790",
        growth: "Growth — $1,290",
      };
      if (planMap[plan]) setSelectedPlan(planMap[plan]);
    }
  }, []);

  function goNext() {
    setDirection(1);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function goBack() {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  }

  function toggleGoal(goal: string) {
    setGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  }

  function canProceed(): boolean {
    switch (step) {
      case 1:
        return businessType !== "" && (businessType !== "Other" || otherBusinessType.trim() !== "");
      case 2:
        return businessName.trim() !== "" && suburb.trim() !== "";
      case 3:
        return goals.length > 0;
      case 4:
        return style !== "" && hasLogo !== null;
      case 5:
        return fullName.trim() !== "" && email.trim() !== "" && phone.trim() !== "";
      case 6:
        return selectedPlan !== "";
      default:
        return false;
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      await fetch("https://formsubmit.co/ajax/info@buildspark.com.au", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Quiz Submission - BuildSpark",
          _captcha: "false",
          _template: "table",
          "Business Type": businessType === "Other" ? `Other: ${otherBusinessType}` : businessType,
          "Business Name": businessName,
          "Suburb / Location": suburb,
          "Website Goals": goals.join(", "),
          "Preferred Style": style,
          "Has Logo": hasLogo === null ? "" : hasLogo ? "Yes" : "No",
          "Full Name": fullName,
          Email: email,
          Phone: phone,
          "Current Website": currentWebsite || "N/A",
          "Interested Plan": selectedPlan,
        }),
      });
    } catch {
      // Still show success - email may have sent
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg"
        >
          <div className="text-8xl mb-8">⚡</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            We are on it.
          </h1>
          <p className="text-lg text-zinc-400 mb-10">
            Expect your homepage preview within 24 hours. We will be in touch at{" "}
            <span className="text-amber-500">{email}</span>.
          </p>
          <Button asChild size="lg" className="text-base px-8">
            <Link href="/">Back to Home</Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Progress bar */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-zinc-400">
              Step {step} of {TOTAL_STEPS}
            </span>
            {step > 1 && (
              <button
                onClick={goBack}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                ← Back
              </button>
            )}
          </div>
          <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-amber-500 rounded-full"
              initial={false}
              animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Step content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 pb-32">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {step === 1 && (
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                    What type of business do you run?
                  </h2>
                  <div className="grid grid-cols-2 gap-2">
                    {businessTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setBusinessType(type)}
                        className={`p-3 rounded-xl border text-left text-sm font-medium transition-all duration-200 ${
                          businessType === type
                            ? "border-amber-500 bg-amber-500/10 text-amber-500"
                            : "border-zinc-800 bg-surface text-white hover:border-zinc-600"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                  {businessType === "Other" && (
                    <div className="mt-4">
                      <label className="block text-sm text-zinc-400 mb-2">What industry are you in? <span className="text-amber-500">*</span></label>
                      <input
                        type="text"
                        value={otherBusinessType}
                        onChange={(e) => setOtherBusinessType(e.target.value)}
                        placeholder="e.g. Landscaper, Photographer, Dentist..."
                        className="w-full rounded-xl border border-zinc-800 bg-surface px-4 py-3 text-white placeholder:text-zinc-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors"
                        autoFocus
                        required
                      />
                    </div>
                  )}
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                    Tell us about your business
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">
                        Business name
                      </label>
                      <input
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. Smith's Plumbing"
                        className="w-full h-12 px-4 rounded-xl border border-zinc-800 bg-surface text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">
                        Suburb / Location
                      </label>
                      <input
                        type="text"
                        value={suburb}
                        onChange={(e) => setSuburb(e.target.value)}
                        placeholder="e.g. Geelong, VIC"
                        className="w-full h-12 px-4 rounded-xl border border-zinc-800 bg-surface text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    What do you want your website to do?
                  </h2>
                  <p className="text-zinc-400 mb-8">Select all that apply</p>
                  <div className="space-y-3">
                    {websiteGoals.map((goal) => (
                      <button
                        key={goal}
                        onClick={() => toggleGoal(goal)}
                        className={`w-full p-5 rounded-xl border text-left text-lg font-medium transition-all duration-200 flex items-center gap-4 ${
                          goals.includes(goal)
                            ? "border-amber-500 bg-amber-500/10 text-amber-500"
                            : "border-zinc-800 bg-surface text-white hover:border-zinc-600"
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
                            goals.includes(goal)
                              ? "border-amber-500 bg-amber-500"
                              : "border-zinc-600"
                          }`}
                        >
                          {goals.includes(goal) && (
                            <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                        {goal}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                    What style do you like?
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {styleOptions.map((opt) => (
                      <button
                        key={opt.name}
                        onClick={() => setStyle(opt.name)}
                        className={`p-6 rounded-xl border text-left transition-all duration-200 ${
                          style === opt.name
                            ? "border-amber-500 bg-amber-500/10"
                            : "border-zinc-800 bg-surface hover:border-zinc-600"
                        }`}
                      >
                        <span className={`block text-lg font-medium mb-1 ${style === opt.name ? "text-amber-500" : "text-white"}`}>
                          {opt.name}
                        </span>
                        <span className="text-sm text-zinc-400">{opt.description}</span>
                      </button>
                    ))}
                  </div>

                  <div>
                    <p className="text-lg font-medium text-white mb-4">
                      Do you have a logo?
                    </p>
                    <div className="flex gap-4">
                      {[true, false].map((val) => (
                        <button
                          key={String(val)}
                          onClick={() => setHasLogo(val)}
                          className={`px-8 py-3 rounded-xl border text-base font-medium transition-all duration-200 ${
                            hasLogo === val
                              ? "border-amber-500 bg-amber-500/10 text-amber-500"
                              : "border-zinc-800 bg-surface text-white hover:border-zinc-600"
                          }`}
                        >
                          {val ? "Yes" : "No"}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    Almost done - where do we send your preview?
                  </h2>
                  <p className="text-zinc-400 mb-8">
                    We&apos;ll send your free homepage mockup within 24 hours.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">
                        Full name
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Smith"
                        className="w-full h-12 px-4 rounded-xl border border-zinc-800 bg-surface text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full h-12 px-4 rounded-xl border border-zinc-800 bg-surface text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0400 000 000"
                        className="w-full h-12 px-4 rounded-xl border border-zinc-800 bg-surface text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">
                        Current website (if you have one)
                      </label>
                      <input
                        type="url"
                        name="current_website"
                        value={currentWebsite}
                        onChange={(e) => setCurrentWebsite(e.target.value)}
                        placeholder="https://yourbusiness.com.au"
                        className="w-full h-12 px-4 rounded-xl border border-zinc-800 bg-surface text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              )}
              {step === 6 && (
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                    Which package are you interested in?
                  </h2>
                  <p className="text-zinc-400 mb-8">No commitment yet, just helps us prepare the right preview for you.</p>
                  <div className="space-y-3">
                    {[
                      { id: "Starter — $490", label: "Starter", price: "$490", desc: "1–3 pages · 48-hour delivery · Get online fast" },
                      { id: "Business — $790", label: "Business", price: "$790", desc: "Up to 5 pages · Local SEO · Most popular" },
                      { id: "Growth — $1,290", label: "Growth", price: "$1,290", desc: "Up to 10 pages · Blog · Maximum impact" },
                      { id: "Not sure yet", label: "Not sure yet", price: "", desc: "We will recommend the best fit for you" },
                    ].map((plan) => (
                      <button
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`w-full p-4 rounded-xl border text-left transition-all duration-200 ${
                          selectedPlan === plan.id
                            ? "border-amber-500 bg-amber-500/10"
                            : "border-zinc-800 bg-surface hover:border-zinc-600"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-semibold text-white">{plan.label}</span>
                            {plan.price && <span className="ml-2 text-amber-500 font-bold">{plan.price}</span>}
                            <p className="text-sm text-zinc-400 mt-0.5">{plan.desc}</p>
                          </div>
                          {selectedPlan === plan.id && (
                            <span className="text-amber-500 text-xl shrink-0 ml-3">✓</span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>


        </div>
      </div>

      {/* Sticky bottom button bar */}
      <div className="sticky bottom-0 z-50 bg-background/95 backdrop-blur-xl border-t border-zinc-800/50 px-4 py-4" style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom))" }}>
        <div className="max-w-2xl mx-auto">
          {step < TOTAL_STEPS ? (
            <button
              onClick={goNext}
              disabled={!canProceed()}
              className="w-full inline-flex items-center justify-center rounded-lg font-semibold bg-amber-500 text-black hover:bg-amber-400 disabled:opacity-50 disabled:pointer-events-none h-12 text-base px-10 transition-all duration-200 shadow-lg shadow-amber-500/20"
            >
              Continue →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canProceed()}
              className="w-full inline-flex items-center justify-center rounded-lg font-semibold bg-amber-500 text-black hover:bg-amber-400 disabled:opacity-50 disabled:pointer-events-none h-12 text-base px-10 transition-all duration-200 shadow-lg shadow-amber-500/20"
            >
              Get My Free Preview →
            </button>
          )}
        </div>
      </div>

    </div>
  );
}
