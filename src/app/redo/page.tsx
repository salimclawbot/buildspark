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
  Star,
  Wand2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  trackGAEvent,
  trackLead,
  trackMetaEvent,
  trackMetaStandardEvent,
  trackQuizEvent,
  trackRedditEvent,
} from "@/lib/meta-pixel";

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
  "Homepage redesign direction",
  "Clearer headline and CTA",
  "Lead-focused layout notes",
];

const redesignTakeaways = [
  "Better first impression",
  "Phone and quote buttons made obvious",
  "Trust proof shown where people decide",
  "Cleaner mobile flow",
];

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 240 : -240, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -240 : 240, opacity: 0 }),
};

function trackRedoFunnelEvent(
  eventName: string,
  params: Record<string, string | number | boolean | undefined>
) {
  trackGAEvent(eventName, params);
  trackMetaEvent(toMetaEventName(eventName), params);
  trackRedditEvent(toMetaEventName(eventName), params);
}

function toMetaEventName(eventName: string) {
  return eventName
    .split("_")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

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
  const [sliderValue, setSliderValue] = useState(52);
  const startedTracked = useRef(false);
  const viewedSteps = useRef(new Set<number>());
  const sliderTracked = useRef(false);
  const websiteEnteredTracked = useRef(false);
  const designNotesTracked = useRef(false);
  const contactFieldsTracked = useRef(new Set<string>());
  const startedAt = useRef(Date.now());

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
      trackRedoFunnelEvent("redo_landing_viewed", {
        quiz_name: quizName,
        quiz_offer: quizOffer,
        total_steps: TOTAL_STEPS,
        month_spot: currentMonth,
      });
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
    setSelectedGoals((current) => {
      const selected = current.includes(goal);
      const next = selected ? current.filter((item) => item !== goal) : [...current, goal];
      trackRedoFunnelEvent(selected ? "redo_goal_removed" : "redo_goal_selected", {
        quiz_name: quizName,
        quiz_offer: quizOffer,
        goal,
        selected_goal_count: next.length,
        step_number: 2,
        month_spot: currentMonth,
      });
      return next;
    });
  }

  function handleSliderChange(value: string) {
    setSliderValue(Number(value));
    if (sliderTracked.current) return;
    sliderTracked.current = true;
    trackRedoFunnelEvent("redesign_slider_used", {
      quiz_name: quizName,
      quiz_offer: quizOffer,
      interaction: "before_after_slider",
      slider_value: Number(value),
      month_spot: currentMonth,
    });
  }

  function handleWebsiteChange(value: string) {
    setWebsiteUrl(value);
    const trimmed = value.trim();
    if (websiteEnteredTracked.current || trimmed.length < 5 || !trimmed.includes(".")) return;
    websiteEnteredTracked.current = true;
    trackRedoFunnelEvent("redo_website_entered", {
      quiz_name: quizName,
      quiz_offer: quizOffer,
      step_number: 1,
      website_url: trimmed,
      month_spot: currentMonth,
    });
  }

  function handleDesignNotesChange(value: string) {
    setDesignNotes(value);
    if (designNotesTracked.current || value.trim().length < 8) return;
    designNotesTracked.current = true;
    trackRedoFunnelEvent("redo_design_notes_started", {
      quiz_name: quizName,
      quiz_offer: quizOffer,
      step_number: 3,
      note_length: value.trim().length,
      month_spot: currentMonth,
    });
  }

  function trackContactFieldStarted(fieldName: string) {
    if (contactFieldsTracked.current.has(fieldName)) return;
    contactFieldsTracked.current.add(fieldName);
    trackRedoFunnelEvent("redo_contact_field_started", {
      quiz_name: quizName,
      quiz_offer: quizOffer,
      step_number: 4,
      field_name: fieldName,
      month_spot: currentMonth,
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canProceed()) return;

    const finalWebsiteUrl = normaliseUrl(cleanWebsiteUrl);
    trackQuizEvent("quiz_step_completed", getQuizPayload());
    trackRedoFunnelEvent("redo_form_submit_attempt", {
      quiz_name: quizName,
      quiz_offer: quizOffer,
      total_steps: TOTAL_STEPS,
      selected_goal_count: selectedGoals.length,
      has_business_name: businessName.trim() !== "",
      has_design_notes: designNotes.trim() !== "",
      time_to_submit_seconds: Math.round((Date.now() - startedAt.current) / 1000),
      month_spot: currentMonth,
    });

    let formProviderStatus = "not_sent";
    let internalLeadStatus = "not_sent";

    try {
      const internalLeadResponse = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "90 Minute Website Redesign Quiz",
          businessName: businessName || "Not provided",
          websiteOrInstagram: finalWebsiteUrl,
          firstName: fullName || "Not provided",
          email,
          mobile: phone,
          helpNeeded: selectedGoals,
          challenge: "Website redesign in 90 minutes",
          businessType: "Local business",
          suburb: "",
          notes: designNotes,
          landingPageVariant: "redo",
          referrer: typeof document !== "undefined" ? document.referrer : "",
          utm: typeof window !== "undefined" ? Object.fromEntries(new URLSearchParams(window.location.search)) : {},
          honeypot: "",
        }),
      });
      internalLeadStatus = internalLeadResponse.ok ? "sent" : `error_${internalLeadResponse.status}`;
    } catch {
      internalLeadStatus = "network_error";
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@buildspark.com.au", {
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
      formProviderStatus = response.ok ? "sent" : `error_${response.status}`;
    } catch {
      // Keep the ad flow moving even if the mail provider is slow.
      formProviderStatus = "network_error";
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
    trackRedoFunnelEvent("redo_form_submit_success", {
      quiz_name: quizName,
      quiz_offer: quizOffer,
      form_provider_status: formProviderStatus,
      internal_lead_status: internalLeadStatus,
      selected_goal_count: selectedGoals.length,
      time_to_submit_seconds: Math.round((Date.now() - startedAt.current) / 1000),
      lead_source: "90 Minute Website Redesign Quiz",
      month_spot: currentMonth,
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
            We will send your redesign direction by email and text within 90 minutes. Keep an eye on both.
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

      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl gap-8 px-4 py-4 sm:px-6 sm:py-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8">
        <aside className="order-2 lg:order-1">
          <BeforeAfterSlider value={sliderValue} onChange={handleSliderChange} />
          <div className="mt-4 grid gap-3 min-[520px]:grid-cols-3">
            {urgencyPoints.map((item) => (
              <div key={item} className="border border-white/10 bg-white/[0.04] p-4 text-sm font-bold text-white/72">
                <CheckCircle2 className="mb-3 h-5 w-5 text-amber-500" />
                {item}
              </div>
            ))}
          </div>
          <div className="mt-4 border border-amber-500/25 bg-amber-500/[0.07] p-4 text-sm leading-6 text-white/75">
            <strong className="text-white">What you get back:</strong> a sharper homepage direction, clearer calls to action, trust improvements, and a practical list of what to change first.
          </div>
        </aside>

        <section className="order-1 lg:order-2">
          <div className="mb-6 inline-flex items-center gap-2 buildspark-eyebrow">
            <Sparkles className="h-4 w-4" />
            Facebook ad redesign offer
          </div>
          <h1 className="text-[2.25rem] buildspark-title leading-tight min-[420px]:text-[2.65rem] sm:text-6xl">
            Put your website in. We’ll show you what it should look like.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 buildspark-copy sm:mt-5 sm:text-lg sm:leading-8">
            Drop in your current site, pick what you want more of, and we’ll send a clearer redesign direction within 90 minutes. Calls, leads, bookings or sales. That is what we build around.
          </p>
          <div className="mt-5 hidden gap-3 sm:grid sm:grid-cols-2">
            {redesignTakeaways.map((item) => (
              <div key={item} className="flex items-center gap-3 border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-bold text-white/72">
                <Star className="h-4 w-4 shrink-0 text-amber-500" />
                {item}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} aria-label="90 minute website redesign quiz" className="mt-5 sm:mt-8">
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
                    subtitle="We’ll use it as the starting point and show you the clearer version. No stress if it is old, slow or messy. That is the point."
                  >
                    <label className="block">
                      <span className="mb-2 block text-sm font-bold text-white">Website URL *</span>
                      <input
                        value={websiteUrl}
                        onChange={(event) => handleWebsiteChange(event.target.value)}
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
                      onChange={(event) => handleDesignNotesChange(event.target.value)}
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
                    subtitle="We’ll send your redesign direction by email and text within 90 minutes."
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      <TextInput label="Business name" value={businessName} onChange={setBusinessName} onFocus={() => trackContactFieldStarted("business_name")} placeholder="ABC Plumbing" required={false} />
                      <TextInput label="Your name" value={fullName} onChange={setFullName} onFocus={() => trackContactFieldStarted("full_name")} placeholder="John Smith" required={false} />
                      <TextInput label="Email" value={email} onChange={setEmail} onFocus={() => trackContactFieldStarted("email")} placeholder="you@example.com" type="email" />
                      <TextInput label="Mobile number" value={phone} onChange={setPhone} onFocus={() => trackContactFieldStarted("phone")} placeholder="0400 000 000" type="tel" />
                      <label className="block sm:col-span-2">
                        <span className="mb-2 block text-sm font-bold text-white">Current website</span>
                        <input
                          value={websiteUrl}
                          onChange={(event) => handleWebsiteChange(event.target.value)}
                          placeholder="yourbusiness.com.au"
                          onFocus={() => trackContactFieldStarted("current_website")}
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
                  Send My Redesign Direction
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

function BeforeAfterSlider({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: string) => void;
}) {
  return (
    <div className="border border-white/10 bg-[#080808] p-3 shadow-2xl shadow-black/40 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-500">
            Drag the slider
          </p>
          <h2 className="mt-1 text-2xl buildspark-title">Old site vs 90 minute direction</h2>
        </div>
        <div className="hidden border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-amber-300 sm:block">
          Live idea
        </div>
      </div>

      <div className="relative overflow-hidden border border-zinc-700 bg-zinc-950">
        <div className="relative aspect-[1.1/1] min-[520px]:aspect-[16/10] lg:aspect-[16/10]">
          <Image
            src="/images/redo/redo-slider-before.webp"
            alt="Outdated local business website before redesign"
            fill
            sizes="(min-width: 1024px) 650px, 100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-y-0 right-0 overflow-hidden"
            style={{ width: `${100 - value}%` }}
            aria-hidden="true"
          >
            <div
              className="absolute inset-y-0 right-0"
              style={{ width: `${10000 / Math.max(100 - value, 1)}%` }}
            >
              <Image
                src="/images/redo/redo-slider-after.webp"
                alt="Modern high-converting website redesign"
                fill
                sizes="(min-width: 1024px) 650px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div
            className="absolute inset-y-0 z-20 w-0.5 bg-white shadow-[0_0_22px_rgba(255,255,255,0.85)]"
            style={{ left: `${value}%` }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white text-black shadow-2xl">
              <ArrowLeft className="h-4 w-4" />
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>

          <div className="absolute left-3 top-3 z-30 bg-red-600 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-white">
            Old site
          </div>
          <div className="absolute right-3 top-3 z-30 bg-amber-500 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-black">
            90 min redesign
          </div>
        </div>

        <label className="sr-only" htmlFor="redo-comparison-slider">
          Compare old website with 90 minute redesign
        </label>
        <input
          id="redo-comparison-slider"
          type="range"
          min="18"
          max="82"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="absolute inset-0 z-40 h-full w-full cursor-ew-resize opacity-0"
          aria-label="Compare old website with 90 minute redesign"
        />
      </div>
      <p className="mt-4 text-sm leading-6 text-white/58">
        The idea is simple: your visitor should understand what you do, trust you, and know exactly how to enquire without hunting around.
      </p>
    </div>
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
  onFocus,
  placeholder,
  type = "text",
  required = true,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
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
        onFocus={onFocus}
        placeholder={placeholder}
        required={required}
        className="h-12 w-full buildspark-field px-4"
      />
    </label>
  );
}
