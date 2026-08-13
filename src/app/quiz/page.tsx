"use client";

import { FormEvent, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackLead, trackMetaStandardEvent } from "@/lib/meta-pixel";

const TOTAL_STEPS = 6;

const businessTypes = [
  "Tradie / contractor",
  "Dental / medical clinic",
  "Surgeon / specialist",
  "Equine / horse business",
  "Cafe / restaurant",
  "Health / wellness",
  "Professional service",
  "Retail / ecommerce",
  "Security / CCTV",
  "Other local business",
];

const currentWebsiteOptions = [
  "No website yet",
  "Old website that needs replacing",
  "DIY website",
  "Good website, but not enough leads",
  "Not sure",
];

const goals = [
  "More phone calls",
  "More form enquiries",
  "More bookings",
  "Look more premium",
  "Show services clearly",
  "Rank better locally",
  "Track leads properly",
  "Replace a messy old site",
];

const timelineOptions = [
  "As soon as possible",
  "This month",
  "Next month",
  "Planning ahead",
];

const styleOptions = [
  "Premium and professional",
  "Clean and simple",
  "Warm and local",
  "Bold and high-end",
  "Not sure - recommend it",
];

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 260 : -260, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -260 : 260, opacity: 0 }),
};

export default function QuizPage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [businessType, setBusinessType] = useState("");
  const [otherBusinessType, setOtherBusinessType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [location, setLocation] = useState("");
  const [currentWebsite, setCurrentWebsite] = useState("");
  const [currentWebsiteUrl, setCurrentWebsiteUrl] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");
  const [style, setStyle] = useState("");
  const [notes, setNotes] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const currentMonth = useMemo(
    () => new Intl.DateTimeFormat("en-AU", { month: "long" }).format(new Date()),
    []
  );

  function goNext() {
    setDirection(1);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function goBack() {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  }

  function toggleGoal(goal: string) {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((item) => item !== goal) : [...prev, goal]
    );
  }

  function canProceed() {
    if (step === 1) {
      return businessType !== "" && (businessType !== "Other local business" || otherBusinessType.trim() !== "");
    }
    if (step === 2) return businessName.trim() !== "" && location.trim() !== "";
    if (step === 3) return currentWebsite !== "";
    if (step === 4) return selectedGoals.length > 0;
    if (step === 5) return timeline !== "" && style !== "";
    if (step === 6) return fullName.trim() !== "" && email.trim() !== "" && phone.trim() !== "";
    return false;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const resolvedBusinessType =
      businessType === "Other local business" ? `Other: ${otherBusinessType}` : businessType;

    try {
      await fetch("https://formsubmit.co/ajax/info@buildspark.com.au", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New $250 Website Quiz Lead - ${currentMonth}`,
          _captcha: "false",
          _template: "table",
          "Business Type": resolvedBusinessType,
          "Business Name": businessName,
          Location: location,
          "Current Website Status": currentWebsite,
          "Current Website URL": currentWebsiteUrl || "N/A",
          Goals: selectedGoals.join(", "),
          Timeline: timeline,
          "Preferred Style": style,
          Notes: notes || "N/A",
          "Full Name": fullName,
          Email: email,
          Phone: phone,
          Offer: "$250 per month website plan",
          "Month Spot": currentMonth,
        }),
      });
    } catch {
      // Keep the user moving even if the mail provider is slow.
    }

    trackLead("Website Quiz - $250 Monthly Plan", {
      business_type: resolvedBusinessType,
      timeline,
      month_spot: currentMonth,
      offer: "250_per_month",
    });
    trackMetaStandardEvent("CompleteRegistration", {
      content_name: "Website Quiz - $250 Monthly Plan",
      status: "submitted",
      month_spot: currentMonth,
    });
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center buildspark-shell px-4 text-white">
        <div className="max-w-xl text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center bg-amber-500 text-black">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="text-4xl buildspark-title sm:text-5xl">You are on the list for {currentMonth}.</h1>
          <p className="mt-5 text-lg leading-8 buildspark-copy">
            We have your details. We will review your business and come back with the right website plan for the $250/month setup.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-none px-8">
            <Link href="/">Back to BuildSpark</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen buildspark-shell text-white">
      <div className="sticky top-0 z-50 buildspark-topbar">
        <div className="mx-auto max-w-3xl px-4 py-4">
          <div className="mb-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-1 font-bold">
              <span>Build</span><span className="text-amber-500">Spark</span>
            </Link>
            <span className="text-sm font-semibold text-white/55">Step {step} of {TOTAL_STEPS}</span>
          </div>
          <div className="h-2 overflow-hidden bg-background/10">
            <motion.div
              className="h-full bg-amber-500"
              animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
              transition={{ duration: 0.25 }}
            />
          </div>
        </div>
      </div>

      <section className="mx-auto grid min-h-[calc(100vh-81px)] max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
        <aside className="hidden lg:block">
          <div className="buildspark-panel p-8">
            <div className="mb-6 inline-flex items-center gap-2 buildspark-eyebrow">
              <Sparkles className="h-4 w-4" />
              {currentMonth} website spots
            </div>
            <h1 className="text-5xl buildspark-title">
              Get your $250/month website plan.
            </h1>
            <p className="mt-5 buildspark-copy text-lg">
              Answer a few quick questions. We will work out what your business needs, what pages matter, and whether we can take it on this month.
            </p>
            <div className="mt-8 space-y-3 text-sm font-semibold text-white/72">
              {[
                "Website, hosting, care, content and tracking",
                "Built for your industry, not a generic template",
                "No $3,000-$5,000 upfront website bill",
              ].map((item) => (
                <div key={item} className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <form onSubmit={handleSubmit} className="w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial={step === 1 ? "center" : "enter"}
              animate="center"
              exit="exit"
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="buildspark-panel p-5 sm:p-8"
            >
              {step === 1 && (
                <QuizStep title="What type of business are we building this for?" subtitle="Pick the closest fit. If it is niche, that is fine. We build around the business.">
                  <OptionGrid options={businessTypes} value={businessType} onChange={setBusinessType} />
                  {businessType === "Other local business" && (
                    <TextInput label="What industry are you in?" value={otherBusinessType} onChange={setOtherBusinessType} placeholder="e.g. cosmetic surgeon, horse trainer, legal firm" />
                  )}
                </QuizStep>
              )}

              {step === 2 && (
                <QuizStep title="Tell us the business basics." subtitle="This helps us check your market, location and best page structure.">
                  <TextInput label="Business name" value={businessName} onChange={setBusinessName} placeholder="e.g. Valley Equine Care" />
                  <TextInput label="Location / service area" value={location} onChange={setLocation} placeholder="e.g. Geelong, Mornington Peninsula, Victoria-wide" />
                </QuizStep>
              )}

              {step === 3 && (
                <QuizStep title="What is happening with your website now?" subtitle="No judgement. This just tells us whether we are building from scratch or replacing something.">
                  <OptionGrid options={currentWebsiteOptions} value={currentWebsite} onChange={setCurrentWebsite} />
                  <TextInput label="Current website URL, if you have one" value={currentWebsiteUrl} onChange={setCurrentWebsiteUrl} placeholder="https://yourbusiness.com.au" required={false} />
                </QuizStep>
              )}

              {step === 4 && (
                <QuizStep title="What should the new website actually do?" subtitle="Choose every outcome that matters. We will use this to shape the website plan.">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {goals.map((goal) => (
                      <button
                        type="button"
                        key={goal}
                        onClick={() => toggleGoal(goal)}
                        className={`border p-4 text-left font-semibold transition ${
                          selectedGoals.includes(goal)
                            ? "buildspark-option-selected"
                            : "buildspark-option"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className={`h-4 w-4 border ${selectedGoals.includes(goal) ? "border-amber-500 bg-amber-500" : "border-white/30"}`} />
                          {goal}
                        </span>
                      </button>
                    ))}
                  </div>
                </QuizStep>
              )}

              {step === 5 && (
                <QuizStep title={`Are you aiming for a ${currentMonth} spot?`} subtitle="We cap new builds so the work stays sharp. This updates automatically each month.">
                  <OptionGrid options={timelineOptions} value={timeline} onChange={setTimeline} />
                  <div className="mt-6">
                    <OptionGrid options={styleOptions} value={style} onChange={setStyle} />
                  </div>
                  <TextareaInput label="Anything we should know?" value={notes} onChange={setNotes} placeholder="Services, colours, competitors, current problems, or customers you want more of." />
                </QuizStep>
              )}

              {step === 6 && (
                <QuizStep title="Where should we send your website plan?" subtitle="We will review your answers and come back with the best next step for the $250/month website plan.">
                  <TextInput label="Full name" value={fullName} onChange={setFullName} placeholder="John Smith" />
                  <TextInput label="Email" value={email} onChange={setEmail} placeholder="john@example.com" type="email" />
                  <TextInput label="Phone" value={phone} onChange={setPhone} placeholder="0400 000 000" type="tel" />
                </QuizStep>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 flex gap-3">
            {step > 1 && (
              <button
                type="button"
                onClick={goBack}
                className="inline-flex h-12 items-center justify-center border border-white/15 bg-black/40 px-5 font-bold text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </button>
            )}
            {step < TOTAL_STEPS ? (
              <button
                type="button"
                onClick={goNext}
                disabled={!canProceed()}
                className="inline-flex h-12 flex-1 items-center justify-center bg-amber-500 px-5 font-bold text-black disabled:cursor-not-allowed disabled:opacity-40"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!canProceed()}
                className="inline-flex h-12 flex-1 items-center justify-center bg-amber-500 px-5 font-bold text-black disabled:cursor-not-allowed disabled:opacity-40"
              >
                Send My Website Plan <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}

function QuizStep({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-3xl buildspark-title sm:text-4xl">{title}</h2>
      <p className="mt-3 mb-8 text-base leading-7 text-white/65">{subtitle}</p>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function OptionGrid({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => (
        <button
          type="button"
          key={option}
          onClick={() => onChange(option)}
          className={`border p-4 text-left font-semibold transition ${
            value === option
              ? "buildspark-option-selected"
              : "buildspark-option"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = true,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-white">
        {label} {required ? <span className="text-amber-500">*</span> : null}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="h-12 w-full buildspark-field px-4"
      />
    </label>
  );
}

function TextareaInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-white">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="w-full buildspark-field px-4 py-3"
      />
    </label>
  );
}
