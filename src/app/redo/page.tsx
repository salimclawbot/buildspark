"use client";

import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Globe2,
  MousePointerClick,
  Sparkles,
  Wand2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackLead, trackMetaStandardEvent, trackQuizEvent } from "@/lib/meta-pixel";

const TOTAL_STEPS = 4;
const quizName = "website_redesign_90_quiz";
const quizOffer = "90_minute_website_redesign";

const stepTitles = [
  "Current website",
  "Redesign goals",
  "Design notes",
  "Contact details",
];

const goalOptions = [
  "More phone calls",
  "More quote leads",
  "More bookings",
  "More online sales",
  "Look more premium",
  "Build more trust",
  "Load better on mobile",
  "Fix confusing pages",
];

const urgencyPoints = [
  "Fast redesign direction",
  "Built around calls, leads or sales",
  "No long meeting first",
];

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 240 : -240, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -240 : 240, opacity: 0 }),
};

export default function RedoPage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [designNotes, setDesignNotes] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const startedTracked = useRef(false);
  const viewedSteps = useRef(new Set<number>());

  const currentMonth = useMemo(
    () => new Intl.DateTimeFormat("en-AU", { month: "long" }).format(new Date()),
    []
  );

  const cleanWebsiteUrl = websiteUrl.trim();

  const getQuizPayload = useCallback(() => {
    return {
      quiz_name: quizName,
      quiz_offer: quizOffer,
      step_number: step,
      step_title: stepTitles[step - 1],
      total_steps: TOTAL_STEPS,
      completion_percent: Math.round((step / TOTAL_STEPS) * 100),
      website_url: cleanWebsiteUrl,
      goals: selectedGoals.join(", "),
      business_name: businessName,
      month_spot: currentMonth,
    };
  }, [businessName, cleanWebsiteUrl, currentMonth, selectedGoals, step]);

  useEffect(() => {
    if (!startedTracked.current) {
      startedTracked.current = true;
      trackQuizEvent("quiz_started", {
        quiz_name: quizName,
        quiz_offer: quizOffer,
        total_steps: TOTAL_STEPS,
        month_spot: currentMonth,
      });
    }
  }, [currentMonth]);

  useEffect(() => {
    if (viewedSteps.current.has(step)) return;
    viewedSteps.current.add(step);
    trackQuizEvent("quiz_step_viewed", getQuizPayload());
  }, [getQuizPayload, step]);

  function normaliseUrl(value: string) {
    const trimmed = value.trim();
    if (!trimmed) return "";
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    return `https://${trimmed}`;
  }

  function canProceed() {
    if (step === 1) return cleanWebsiteUrl.length > 4 && cleanWebsiteUrl.includes(".");
    if (step === 2) return selectedGoals.length > 0;
    if (step === 3) return designNotes.trim().length >= 8;
    if (step === 4) return email.trim() !== "" && phone.trim() !== "";
    return false;
  }

  function goNext() {
    if (!canProceed()) return;
    trackQuizEvent("quiz_step_completed", getQuizPayload());
    setDirection(1);
    setStep((current) => Math.min(current + 1, TOTAL_STEPS));
  }

  function goBack() {
    setDirection(-1);
    setStep((current) => Math.max(current - 1, 1));
  }

  function toggleGoal(goal: string) {
    setSelectedGoals((current) =>
      current.includes(goal) ? current.filter((item) => item !== goal) : [...current, goal]
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canProceed()) return;

    const finalWebsiteUrl = normaliseUrl(cleanWebsiteUrl);
    trackQuizEvent("quiz_step_completed", getQuizPayload());

    try {
      await fetch("https://formsubmit.co/ajax/info@buildspark.com.au", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New 90 Minute Website Redesign Lead - ${currentMonth}`,
          _captcha: "false",
          _template: "table",
          "Lead Source": "Facebook Ads - 90 Minute Website Redesign",
          "Current Website": finalWebsiteUrl,
          "Redesign Goals": selectedGoals.join(", "),
          "Design Notes": designNotes,
          "Business Name": businessName || "N/A",
          "Full Name": fullName || "N/A",
          Email: email,
          Phone: phone,
          Offer: "Website redesign in 90 minutes",
          "Month Spot": currentMonth,
          Page: typeof window !== "undefined" ? window.location.href : "/redo",
        }),
      });
    } catch {
      // Keep the ad flow moving even if the mail provider is slow.
    }

    trackLead("90 Minute Website Redesign Quiz", {
      website_url: finalWebsiteUrl,
      goals: selectedGoals.join(", "),
      business_name: businessName,
      month_spot: currentMonth,
      offer: "90_minute_website_redesign",
    });
    trackQuizEvent("quiz_completed", {
      ...getQuizPayload(),
      website_url: finalWebsiteUrl,
      lead_source: "90 Minute Website Redesign Quiz",
      offer: "90_minute_website_redesign",
      status: "submitted",
    });
    trackMetaStandardEvent("CompleteRegistration", {
      content_name: "90 Minute Website Redesign Quiz",
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
          <h1 className="text-4xl buildspark-title sm:text-5xl">We have your website.</h1>
          <p className="mt-5 text-lg leading-8 buildspark-copy">
            We will review it and send your redesign direction in 90 minutes. Keep an eye on your email and phone.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-none px-8">
            <Link href="/">Back to BuildSpark</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden buildspark-shell text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 buildspark-topbar">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-1 text-xl font-bold">
            <span>Build</span><span className="text-amber-500">Spark</span>
          </Link>
          <div className="flex items-center gap-3 text-sm font-bold text-white/60">
            <Clock3 className="h-4 w-4 text-amber-500" />
            90 minute redesign
          </div>
        </div>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl gap-8 px-4 py-6 sm:px-6 sm:py-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <aside className="order-2 lg:order-1">
          <div className="overflow-hidden border border-white/10 bg-black">
            <Image
              src="/images/redo/website-redesign-90.webp"
              alt="Business owner viewing a before and after website redesign on a laptop and phone"
              width={1680}
              height={945}
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {urgencyPoints.map((item) => (
              <div key={item} className="border border-white/10 bg-white/[0.04] p-4 text-sm font-bold text-white/72">
                <CheckCircle2 className="mb-3 h-5 w-5 text-amber-500" />
                {item}
              </div>
            ))}
          </div>
        </aside>

        <section className="order-1 lg:order-2">
          <div className="mb-6 inline-flex items-center gap-2 buildspark-eyebrow">
            <Sparkles className="h-4 w-4" />
            Facebook ad redesign offer
          </div>
          <h1 className="text-[2.55rem] buildspark-title leading-tight min-[420px]:text-5xl sm:text-6xl">
            Put your website in. See it redesigned in 90 minutes.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 buildspark-copy">
            Drop in your current website, tell us what you want more of, and we will send you a sharper redesign direction built to get more calls, leads, bookings or sales.
          </p>

          <form onSubmit={handleSubmit} aria-label="90 minute website redesign quiz" className="mt-8">
            <div className="mb-4 flex items-center justify-between text-sm font-bold text-white/55">
              <span>Step {step} of {TOTAL_STEPS}</span>
              <span>{Math.round((step / TOTAL_STEPS) * 100)}%</span>
            </div>
            <div className="mb-5 h-2 overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-amber-500"
                animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                transition={{ duration: 0.25 }}
              />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial={step === 1 ? "center" : "enter"}
                animate="center"
                exit="exit"
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="buildspark-panel p-5 sm:p-7"
              >
                {step === 1 && (
                  <QuizStep
                    icon={<Globe2 className="h-7 w-7 text-amber-500" />}
                    title="Enter your current website."
                    subtitle="This is the first thing we need. We will use it as the starting point for your redesign direction."
                  >
                    <label className="block">
                      <span className="mb-2 block text-sm font-bold text-white">Website URL *</span>
                      <input
                        value={websiteUrl}
                        onChange={(event) => setWebsiteUrl(event.target.value)}
                        placeholder="yourbusiness.com.au"
                        className="h-14 w-full buildspark-field px-4 text-lg"
                        inputMode="url"
                        autoFocus
                      />
                    </label>
                    <p className="text-sm leading-6 text-white/52">
                      Example: yourbusiness.com.au. No stress if it is old, slow or messy. That is the point.
                    </p>
                  </QuizStep>
                )}

                {step === 2 && (
                  <QuizStep
                    icon={<MousePointerClick className="h-7 w-7 text-amber-500" />}
                    title="What should the redesign improve?"
                    subtitle="Pick the outcomes that matter. We will shape the direction around this."
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      {goalOptions.map((goal) => (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => toggleGoal(goal)}
                          className={`border p-4 text-left font-semibold transition ${
                            selectedGoals.includes(goal)
                              ? "buildspark-option-selected"
                              : "buildspark-option"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span className={`h-4 w-4 border ${selectedGoals.includes(goal) ? "border-amber-500 bg-amber-500" : "border-white/30"}`} />
                            {goal}
                          </span>
                        </button>
                      ))}
                    </div>
                  </QuizStep>
                )}

                {step === 3 && (
                  <QuizStep
                    icon={<Wand2 className="h-7 w-7 text-amber-500" />}
                    title="Tell us the look you want."
                    subtitle="Keep it simple. Colours, style, competitors, things you hate, or anything specific we should know."
                  >
                    <textarea
                      value={designNotes}
                      onChange={(event) => setDesignNotes(event.target.value)}
                      placeholder="e.g. black and gold, premium but simple, more photos, clearer phone button, similar to my competitor but less cluttered."
                      rows={7}
                      className="w-full buildspark-field px-4 py-4 text-base leading-7"
                    />
                    <p className="text-sm leading-6 text-white/52">
                      Short notes are fine. We just need enough to avoid guessing.
                    </p>
                  </QuizStep>
                )}

                {step === 4 && (
                  <QuizStep
                    icon={<Clock3 className="h-7 w-7 text-amber-500" />}
                    title="Where should we send it?"
                    subtitle="We will send your redesign direction in 90 minutes."
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      <TextInput label="Business name" value={businessName} onChange={setBusinessName} placeholder="ABC Plumbing" required={false} />
                      <TextInput label="Your name" value={fullName} onChange={setFullName} placeholder="John Smith" required={false} />
                      <TextInput label="Email" value={email} onChange={setEmail} placeholder="you@example.com" type="email" />
                      <TextInput label="Mobile number" value={phone} onChange={setPhone} placeholder="0400 000 000" type="tel" />
                      <label className="block sm:col-span-2">
                        <span className="mb-2 block text-sm font-bold text-white">Current website</span>
                        <input
                          value={websiteUrl}
                          onChange={(event) => setWebsiteUrl(event.target.value)}
                          placeholder="yourbusiness.com.au"
                          className="h-12 w-full buildspark-field px-4"
                          inputMode="url"
                        />
                      </label>
                    </div>
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
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </button>
              )}
              {step < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canProceed()}
                  className="inline-flex h-12 flex-1 items-center justify-center bg-amber-500 px-5 font-bold text-black disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!canProceed()}
                  className="inline-flex h-12 flex-1 items-center justify-center bg-amber-500 px-5 font-bold text-black disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Send My 90 Minute Redesign
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              )}
            </div>
            {!canProceed() ? (
              <p className="mt-3 text-center text-sm font-semibold text-white/45">
                Answer this step to continue.
              </p>
            ) : null}
          </form>
        </section>
      </section>
    </main>
  );
}

function QuizStep({
  icon,
  title,
  subtitle,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-5 flex h-12 w-12 items-center justify-center bg-amber-500/10">
        {icon}
      </div>
      <h2 className="text-3xl buildspark-title sm:text-4xl">{title}</h2>
      <p className="mt-3 mb-6 text-base leading-7 text-white/65">{subtitle}</p>
      <div className="space-y-4">{children}</div>
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
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        className="h-12 w-full buildspark-field px-4"
      />
    </label>
  );
}
