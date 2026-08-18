"use client";

import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Megaphone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackLead, trackMetaStandardEvent, trackQuizEvent } from "@/lib/meta-pixel";

const TOTAL_STEPS = 6;

const stepTitles = [
  "Business type",
  "Business basics",
  "Social status and accounts",
  "Social goals",
  "Timeline and plan",
  "Contact details",
];

const businessTypes = [
  "Tradie / local service",
  "Health / beauty",
  "Cafe / retail",
  "Professional service",
  "Other business",
];

const socialStatusOptions = [
  "We barely post",
  "We post sometimes",
  "We post often, but it does not bring leads",
  "We need a full refresh",
  "We are starting from scratch",
];

const accountOptions = [
  "Facebook only",
  "Instagram only",
  "Facebook and Instagram",
  "3 accounts",
  "Not sure - recommend it",
];

const goals = [
  "Look active online",
  "Get more messages",
  "Promote offers",
  "Show recent work",
  "Need a new website too",
];

const timelineOptions = [
  "As soon as possible",
  "This month",
  "Next month",
  "Just comparing options",
];

const plans = [
  {
    name: "$250/m Social Starter",
    value: "250_social_starter",
    price: "$250/m",
    description: "For one social account. Simple, consistent posting so your business does not look quiet online.",
    bullets: ["1 social account", "Regular social post", "Basic captions", "Monthly consistency"],
  },
  {
    name: "$550/m Social + Website",
    value: "550_social_website",
    price: "$550/m",
    description: "For businesses that need socials handled across 3 accounts plus a new modern website.",
    bullets: ["3 social accounts", "New modern website", "Website + social direction", "Better trust before people enquire"],
  },
];

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 260 : -260, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -260 : 260, opacity: 0 }),
};

export default function SocialsQuizPage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [businessType, setBusinessType] = useState("");
  const [otherBusinessType, setOtherBusinessType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [location, setLocation] = useState("");
  const [socialStatus, setSocialStatus] = useState("");
  const [accounts, setAccounts] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");
  const [plan, setPlan] = useState("");
  const [notes, setNotes] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const startedTracked = useRef(false);
  const viewedSteps = useRef(new Set<number>());

  const currentMonth = useMemo(
    () => new Intl.DateTimeFormat("en-AU", { month: "long" }).format(new Date()),
    []
  );

  const selectedPlan = plans.find((item) => item.value === plan);
  const quizName = "socials_quiz";
  const quizOffer = "social_media_management";

  const getResolvedBusinessType = useCallback(() => {
    return businessType === "Other business" ? `Other: ${otherBusinessType}` : businessType;
  }, [businessType, otherBusinessType]);

  const getQuizPayload = useCallback(() => {
    return {
      quiz_name: quizName,
      quiz_offer: quizOffer,
      step_number: step,
      step_title: stepTitles[step - 1],
      total_steps: TOTAL_STEPS,
      completion_percent: Math.round((step / TOTAL_STEPS) * 100),
      business_type: getResolvedBusinessType(),
      social_status: socialStatus,
      accounts_needed: accounts,
      goals: selectedGoals.join(", "),
      timeline,
      selected_plan: plan,
      selected_plan_name: selectedPlan?.name,
      selected_plan_price: selectedPlan?.price,
      month_spot: currentMonth,
    };
  }, [
    accounts,
    currentMonth,
    getResolvedBusinessType,
    plan,
    selectedGoals,
    selectedPlan?.name,
    selectedPlan?.price,
    socialStatus,
    step,
    timeline,
  ]);

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

  function goNext() {
    if (!canProceed()) return;
    trackQuizEvent("quiz_step_completed", getQuizPayload());
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
      return businessType !== "" && (businessType !== "Other business" || otherBusinessType.trim() !== "");
    }
    if (step === 2) return businessName.trim() !== "" && location.trim() !== "";
    if (step === 3) return socialStatus !== "" && accounts !== "";
    if (step === 4) return selectedGoals.length > 0;
    if (step === 5) return timeline !== "" && plan !== "";
    if (step === 6) return fullName.trim() !== "" && email.trim() !== "" && phone.trim() !== "";
    return false;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canProceed()) return;

    trackQuizEvent("quiz_step_completed", getQuizPayload());
    const resolvedBusinessType = getResolvedBusinessType();

    try {
      await fetch("https://formsubmit.co/ajax/info@buildspark.com.au", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Social Media Management Lead - ${currentMonth}`,
          _captcha: "false",
          _template: "table",
          "Lead Source": "Facebook Ads - Social Media Management Quiz",
          "Business Type": resolvedBusinessType,
          "Business Name": businessName,
          Location: location,
          "Current Social Status": socialStatus,
          "Accounts Needed": accounts,
          Goals: selectedGoals.join(", "),
          Timeline: timeline,
          "Selected Plan": selectedPlan?.name || plan,
          Notes: notes || "N/A",
          "Full Name": fullName,
          Email: email,
          Phone: phone,
          Offer: selectedPlan?.price || "Social media management",
          "Month Spot": currentMonth,
        }),
      });
    } catch {
      // Keep the user moving even if the mail provider is slow.
    }

    trackLead("Social Media Management Quiz", {
      business_type: resolvedBusinessType,
      selected_plan: plan,
      selected_plan_name: selectedPlan?.name,
      timeline,
      month_spot: currentMonth,
      offer: "social_media_management",
    });
    trackQuizEvent("quiz_completed", {
      ...getQuizPayload(),
      business_type: resolvedBusinessType,
      lead_source: "Social Media Management Quiz",
      offer: "social_media_management",
      status: "submitted",
    });
    trackMetaStandardEvent("CompleteRegistration", {
      content_name: "Social Media Management Quiz",
      status: "submitted",
      selected_plan: plan,
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
            We have your details. We will review your socials and come back with the best next step for your business.
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

      <section className="mx-auto grid min-h-[calc(100vh-81px)] max-w-6xl gap-8 px-4 py-6 sm:px-6 sm:py-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
        <aside className="hidden lg:block">
          <div className="buildspark-panel p-8">
            <div className="mb-6 inline-flex items-center gap-2 buildspark-eyebrow">
              <Sparkles className="h-4 w-4" />
              Social media management
            </div>
            <h1 className="text-5xl buildspark-title">
              Turn quiet socials into a business asset.
            </h1>
            <p className="mt-5 buildspark-copy text-lg">
              Built for Facebook ad traffic. Quick questions, clear offer, and a simple next step for social media support from $250/month.
            </p>
            <div className="mt-8 space-y-3 text-sm font-semibold text-white/72">
              {[
                "$250/m for one social account",
                "$550/m for three accounts plus a new modern website",
                "Simple setup for busy local businesses",
              ].map((item) => (
                <div key={item} className="flex gap-2">
                  <Megaphone className="h-5 w-5 text-amber-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <form onSubmit={handleSubmit} aria-label="Social media management quiz" className="w-full">
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
                <QuizStep title="What business is this for?" subtitle="Pick the closest fit.">
                  <OptionGrid options={businessTypes} value={businessType} onChange={setBusinessType} />
                  {businessType === "Other business" && (
                    <TextInput label="What industry are you in?" value={otherBusinessType} onChange={setOtherBusinessType} placeholder="e.g. gym, roof restoration, horse trainer" />
                  )}
                </QuizStep>
              )}

              {step === 2 && (
                <QuizStep title="Business basics." subtitle="Just enough so we know who we are helping.">
                  <TextInput label="Business name" value={businessName} onChange={setBusinessName} placeholder="e.g. Valley Plumbing Co" />
                  <TextInput label="Location / service area" value={location} onChange={setLocation} placeholder="e.g. Geelong, Ballarat, Melbourne-wide" />
                </QuizStep>
              )}

              {step === 3 && (
                <QuizStep title="Where are your socials at?" subtitle="This tells us how much help you need.">
                  <GroupLabel>How active are you now?</GroupLabel>
                  <OptionGrid options={socialStatusOptions} value={socialStatus} onChange={setSocialStatus} />
                  <div className="mt-6">
                    <GroupLabel>Where do you want help?</GroupLabel>
                    <OptionGrid options={accountOptions} value={accounts} onChange={setAccounts} />
                  </div>
                </QuizStep>
              )}

              {step === 4 && (
                <QuizStep title="What do you want from socials?" subtitle="Pick what matters most.">
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
                <QuizStep title="Choose a plan." subtitle="This helps us respond with the right option.">
                  <GroupLabel>When do you want to start?</GroupLabel>
                  <OptionGrid options={timelineOptions} value={timeline} onChange={setTimeline} />
                  <div className="mt-6 grid gap-4">
                    <GroupLabel>Which offer suits you?</GroupLabel>
                    {plans.map((item) => (
                      <button
                        type="button"
                        key={item.value}
                        onClick={() => {
                          setPlan(item.value);
                          trackQuizEvent("quiz_plan_selected", {
                            quiz_name: quizName,
                            quiz_offer: quizOffer,
                            step_number: step,
                            step_title: stepTitles[step - 1],
                            total_steps: TOTAL_STEPS,
                            business_type: getResolvedBusinessType(),
                            selected_plan: item.value,
                            selected_plan_name: item.name,
                            selected_plan_price: item.price,
                            timeline,
                            month_spot: currentMonth,
                          });
                        }}
                        className={`border p-5 text-left transition ${
                          plan === item.value
                            ? "border-amber-500 bg-amber-500/10"
                            : "buildspark-option"
                        }`}
                      >
                        <span className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <span>
                            <span className="block text-2xl font-bold">{item.name}</span>
                            <span className="mt-2 block text-sm leading-6 text-white/65">{item.description}</span>
                          </span>
                          <span className="text-3xl font-bold text-amber-500">{item.price}</span>
                        </span>
                        <span className="mt-5 grid gap-2 sm:grid-cols-2">
                          {item.bullets.map((bullet) => (
                            <span key={bullet} className="flex items-center gap-2 text-sm font-semibold text-white/72">
                              <CheckCircle2 className="h-4 w-4 text-amber-500" />
                              {bullet}
                            </span>
                          ))}
                        </span>
                      </button>
                    ))}
                  </div>
                  <TextareaInput label="Anything we should know?" value={notes} onChange={setNotes} placeholder="Current social handles, offers you want promoted, photos you have, or anything that is not working." />
                </QuizStep>
              )}

              {step === 6 && (
                <QuizStep title="Where should we send it?" subtitle="We will review your answers and come back with the next step.">
                  <TextInput label="Full name" value={fullName} onChange={setFullName} placeholder="John Smith" />
                  <TextInput label="Email" value={email} onChange={setEmail} placeholder="john@example.com" type="email" />
                  <TextInput label="Phone" value={phone} onChange={setPhone} placeholder="0400 000 000" type="tel" />
                </QuizStep>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 flex gap-3 pb-4 sm:pb-0">
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
                Send My Social Plan <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            )}
          </div>
          {!canProceed() ? (
            <p className="pb-6 text-center text-sm font-semibold text-white/45 sm:pb-0">
              Answer this step to continue.
            </p>
          ) : null}
        </form>
      </section>
    </main>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-amber-500">
      {children}
    </p>
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
      <p className="mt-3 mb-6 text-base leading-7 text-white/65 sm:mb-8">{subtitle}</p>
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
