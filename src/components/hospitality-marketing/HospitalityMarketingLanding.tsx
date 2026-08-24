"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Globe2,
  Instagram,
  Loader2,
  Search,
  Sparkles,
  Star,
  Store,
  X,
} from "lucide-react";
import {
  trackGAEvent,
  trackLead,
  trackMetaEvent,
  trackMetaStandardEvent,
  trackRedditEvent,
} from "@/lib/meta-pixel";

type VariantKey =
  | "default"
  | "social-media"
  | "restaurant-marketing"
  | "cafe-marketing"
  | "digital-marketing"
  | "reviews";

type FormData = {
  entry: string;
  helpNeeded: string[];
  challenge: string;
  businessName: string;
  websiteOrInstagram: string;
  businessType: string;
  suburb: string;
  firstName: string;
  mobile: string;
  email: string;
  notes: string;
  honeypot: string;
};

type UTMData = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
};

const config = {
  agencyName: "BuildSpark",
  logo: "BuildSpark",
  phone: "",
  email: "info@buildspark.com.au",
  instagram: "",
  canonicalBase: "https://buildspark.com.au",
  formName: "Free Cafe & Restaurant Marketing Plan",
};

const variants: Record<VariantKey, { eyebrow: string; headline: string; preselect?: string }> = {
  default: {
    eyebrow: "Marketing for cafés & restaurants",
    headline: "Get More People Discovering Your Café.",
  },
  "social-media": {
    eyebrow: "Hospitality social media marketing",
    headline: "Social Media Management for Cafés & Restaurants",
    preselect: "Social Media",
  },
  "restaurant-marketing": {
    eyebrow: "Restaurant marketing",
    headline: "Restaurant Marketing That Gets You Discovered",
  },
  "cafe-marketing": {
    eyebrow: "Cafe marketing services",
    headline: "Marketing Services for Cafés",
  },
  "digital-marketing": {
    eyebrow: "Digital marketing for hospitality",
    headline: "Digital Marketing for Cafés & Restaurants",
  },
  reviews: {
    eyebrow: "Google review growth",
    headline: "Get More Google Reviews for Your Café",
    preselect: "Getting More Google Reviews",
  },
};

const helpOptions = [
  { label: "Social Media", icon: Instagram },
  { label: "Getting More Google Reviews", icon: Star },
  { label: "Website", icon: Globe2 },
  { label: "Attracting More Customers", icon: Store },
  { label: "All of the Above", icon: Sparkles },
];

const challenges = [
  "We don't post enough",
  "Our social media isn't growing",
  "We need more Google reviews",
  "Our website needs improvement",
  "We need more people discovering us",
];

const businessTypes = ["Café", "Restaurant", "Bakery", "Takeaway", "Bar", "Other Hospitality"];

const problems = [
  {
    title: "Social media gets neglected",
    copy: "You know you should post more, but running the venue comes first.",
    icon: Instagram,
  },
  {
    title: "Your Google reviews grow slowly",
    copy: "Happy customers leave without ever being asked for a review.",
    icon: Star,
  },
  {
    title: "Your website feels outdated",
    copy: "Your venue looks amazing in person but your website doesn't reflect it.",
    icon: Globe2,
  },
  {
    title: "People don't discover you",
    copy: "Potential customers nearby are choosing competitors they find first online.",
    icon: Search,
  },
];

const services = [
  {
    title: "Social Media Management",
    copy: "Consistent Instagram and Facebook content designed to keep your venue visible and give people another reason to visit.",
    cta: "Improve My Social Media",
    preselect: "Social Media",
    icon: Instagram,
    items: ["Content planning", "Professional posts", "Captions", "Scheduling", "Hashtag strategy", "Consistent branding"],
  },
  {
    title: "Google Review Growth",
    copy: "Turn more of your happy customers into Google reviews and strengthen the reputation people see when they search for you.",
    cta: "Get More Reviews",
    preselect: "Getting More Google Reviews",
    icon: Star,
    items: ["Review strategy", "QR review journey", "Customer prompts", "Reputation optimisation", "Google Business Profile guidance"],
  },
  {
    title: "Website Design & Management",
    copy: "A beautiful, mobile-first hospitality website that makes your food, venue and brand look as good online as they do in person.",
    cta: "Improve My Website",
    preselect: "Website",
    icon: Globe2,
    items: ["Mobile-first design", "Menu pages", "Opening hours", "Maps & directions", "Booking links", "Hosting & maintenance"],
  },
];

const faqs = [
  ["Is the marketing review really free?", "Yes. We'll review your public online presence and share the main opportunities we identify."],
  ["Do I need to already have a website?", "No. You can submit your Instagram, Facebook page or Google Business listing instead."],
    ["Do you only work with cafés?", "No. We specialise in cafés, restaurants, bakeries, bars and other hospitality businesses."],
  ["What happens after I submit?", "We'll review the information you provide and contact you to discuss the recommendations."],
  ["Am I locked into anything?", "Submitting the marketing review does not commit you to purchasing anything."],
];

const initialFormData: FormData = {
  entry: "",
  helpNeeded: [],
  challenge: "",
  businessName: "",
  websiteOrInstagram: "",
  businessType: "",
  suburb: "",
  firstName: "",
  mobile: "",
  email: "",
  notes: "",
  honeypot: "",
};

function getVariantFromValue(value?: string | null): VariantKey {
  if (!value) return "default";
  if (value in variants) return value as VariantKey;
  return "default";
}

function getUTM(searchParams: URLSearchParams): UTMData {
  return {
    utm_source: searchParams.get("utm_source") || undefined,
    utm_medium: searchParams.get("utm_medium") || undefined,
    utm_campaign: searchParams.get("utm_campaign") || undefined,
    utm_term: searchParams.get("utm_term") || undefined,
    utm_content: searchParams.get("utm_content") || undefined,
    gclid: searchParams.get("gclid") || undefined,
  };
}

function isLeadStepReady(step: number, data: FormData) {
  if (step === 1) return data.helpNeeded.length > 0;
  if (step === 2) return data.challenge !== "";
  if (step === 3) return Boolean(data.businessName && data.websiteOrInstagram && data.businessType && data.suburb);
  if (step === 4) return Boolean(data.firstName && data.mobile && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email));
  return false;
}

function trackHospitalityEvent(eventName: string, params: Record<string, string | number | boolean | undefined>) {
  trackGAEvent(eventName, params);
  const metaName = eventName
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  trackMetaEvent(metaName, params);
  trackRedditEvent(metaName, params);
}

export function HospitalityMarketingLanding({ defaultVariant = "default" }: { defaultVariant?: VariantKey }) {
  const searchParams = useSearchParams();
  const serviceVariant = getVariantFromValue(searchParams.get("service"));
  const activeVariant = serviceVariant === "default" ? defaultVariant : serviceVariant;
  const variant = variants[activeVariant];
  const [formOpen, setFormOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const viewed = useRef(false);
  const startedAt = useRef(Date.now());

  const utm = useMemo(() => getUTM(new URLSearchParams(searchParams.toString())), [searchParams]);

  useEffect(() => {
    if (viewed.current) return;
    viewed.current = true;
    trackHospitalityEvent("landing_page_view", {
      landing_page_variant: activeVariant,
      page_path: window.location.pathname,
      page_location: window.location.href,
      ...utm,
    });
  }, [activeVariant, utm]);

  function openForm(source: string, preselect?: string, entry?: string) {
    setFormOpen(true);
    setStatus("idle");
    setError("");
    setStep(1);
    setFormData((current) => {
      const helpNeeded = preselect
        ? Array.from(new Set([...current.helpNeeded, preselect]))
        : current.helpNeeded;
      return {
        ...current,
        entry: entry ?? current.entry,
        websiteOrInstagram: entry ?? current.websiteOrInstagram,
        helpNeeded,
      };
    });
    trackHospitalityEvent(source === "hero" ? "hero_cta_click" : "lead_form_started", {
      source,
      landing_page_variant: activeVariant,
      preselected_service: preselect,
      ...utm,
    });
  }

  function toggleHelp(label: string) {
    setFormData((current) => {
      const all = label === "All of the Above";
      const next = all
        ? helpOptions.map((option) => option.label)
        : current.helpNeeded.includes(label)
          ? current.helpNeeded.filter((item) => item !== label && item !== "All of the Above")
          : [...current.helpNeeded.filter((item) => item !== "All of the Above"), label];
      return { ...current, helpNeeded: next };
    });
  }

  function canContinue() {
    return isLeadStepReady(step, formData);
  }

  function nextStep() {
    if (!canContinue()) return;
    trackHospitalityEvent(`lead_step_${step}_complete`, {
      landing_page_variant: activeVariant,
      step,
      help_needed: formData.helpNeeded.join(", "),
      challenge: formData.challenge,
      ...utm,
    });
    setStep((current) => Math.min(current + 1, 4));
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canContinue() || status === "loading") return;

    setStatus("loading");
    setError("");
    trackHospitalityEvent("lead_step_4_complete", {
      landing_page_variant: activeVariant,
      ...utm,
    });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: config.formName,
          ...formData,
          landingPageVariant: activeVariant,
          referrer: document.referrer,
          utm,
          gclid: utm.gclid,
          timeToSubmitSeconds: Math.round((Date.now() - startedAt.current) / 1000),
        }),
      });

      if (!response.ok) throw new Error("Lead submission failed");

      trackLead(config.formName, {
        landing_page_variant: activeVariant,
        business_type: formData.businessType,
        help_needed: formData.helpNeeded.join(", "),
        challenge: formData.challenge,
      });
      trackHospitalityEvent("lead_submitted", {
        landing_page_variant: activeVariant,
        business_type: formData.businessType,
        help_needed: formData.helpNeeded.join(", "),
        challenge: formData.challenge,
        time_to_submit_seconds: Math.round((Date.now() - startedAt.current) / 1000),
        ...utm,
      });
      trackMetaStandardEvent("CompleteRegistration", {
        content_name: config.formName,
        status: "submitted",
        landing_page_variant: activeVariant,
      });
      setStatus("success");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
      trackHospitalityEvent("lead_submit_error", {
        landing_page_variant: activeVariant,
        ...utm,
      });
    }
  }

  return (
    <main className="min-h-screen bg-[#f7efe5] text-[#211812]">
      <Header onOpen={() => openForm("header", variant.preselect)} />
      <Hero
        variant={variant}
        value={formData.entry}
        onChange={(entry) => setFormData((current) => ({ ...current, entry }))}
        onSubmit={() => openForm("hero", variant.preselect, formData.entry)}
      />
      <ProblemCards onOpen={() => openForm("problem_section")} />
      <Services onOpen={(preselect) => openForm("service_card", preselect)} />
      <AuditComparison onOpen={() => openForm("audit_section")} />
      <Process />
      <Testimonials />
      <PricingTeaser onOpen={() => openForm("pricing_teaser")} />
      <FinalCTA
        value={formData.entry}
        onChange={(entry) => setFormData((current) => ({ ...current, entry }))}
        onSubmit={() => openForm("final_cta", variant.preselect, formData.entry)}
      />
      <FAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <Footer />
      <MobileStickyCTA show={!formOpen} onOpen={() => openForm("mobile_sticky")} />
      <LeadForm
        open={formOpen}
        step={step}
        data={formData}
        status={status}
        error={error}
        onClose={() => setFormOpen(false)}
        onBack={() => setStep((current) => Math.max(1, current - 1))}
        onNext={nextStep}
        onSubmit={submitLead}
        onToggleHelp={toggleHelp}
        onChange={(patch) => setFormData((current) => ({ ...current, ...patch }))}
      />
    </main>
  );
}

function Header({ onOpen }: { onOpen: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#2d1d14]/10 bg-[#f7efe5]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-black tracking-tight text-[#211812]">
          {config.logo}<span className="text-[#c65d32]">.</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="hidden text-sm font-bold text-[#6f5a4c] sm:inline">Free Marketing Plan</span>
          <button onClick={onOpen} className="rounded-full bg-[#211812] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#211812]/15 transition hover:-translate-y-0.5 hover:bg-[#3a281e]">
            Get My Free Plan
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({
  variant,
  value,
  onChange,
  onSubmit,
}: {
  variant: { eyebrow: string; headline: string };
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(198,93,50,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(111,78,55,0.14),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-16">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <p className="mb-5 inline-flex rounded-full border border-[#c65d32]/25 bg-white/55 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#a54726]">
            {variant.eyebrow}
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.96] tracking-[-0.045em] text-[#211812] sm:text-6xl lg:text-7xl">
            {variant.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6f5a4c]">
            Social media, Google reviews and websites designed to help hospitality businesses get discovered, look better online and turn more locals into customers.
          </p>
          <div className="mt-5 grid gap-3 text-sm font-bold text-[#4d3b30] sm:grid-cols-3">
            {["Hospitality specialists", "Free personalised review", "No obligation"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#c65d32]" />
                {item}
              </span>
            ))}
          </div>
          <LeadStarter value={value} onChange={onChange} onSubmit={onSubmit} className="mt-7" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.08 }} className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white p-2 shadow-2xl shadow-[#6f4e37]/20">
            <Image src="/images/hospitality/hospitality-hero.webp" alt="Australian hospitality business with marketing previews for social media, Google reviews and website" width={1600} height={1000} priority className="aspect-[16/10] rounded-[1.55rem] object-cover" />
          </div>
          <div className="absolute -bottom-5 left-5 rounded-3xl bg-[#211812] p-4 text-white shadow-xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f3a36b]">Mini review</p>
            <p className="mt-1 text-sm font-semibold">Website, socials, reviews and local visibility.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LeadStarter({ value, onChange, onSubmit, className = "" }: { value: string; onChange: (value: string) => void; onSubmit: () => void; className?: string }) {
  return (
    <form
      className={`rounded-[1.75rem] border border-[#ead8c4] bg-white p-4 shadow-2xl shadow-[#6f4e37]/10 ${className}`}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <h2 className="text-2xl font-black tracking-tight text-[#211812]">Get Your Free Café & Restaurant Marketing Plan</h2>
      <p className="mt-1 text-base leading-7 text-[#7b6353]">Enter your website or Instagram and we’ll show you what we’d improve.</p>
      <div className="mt-4 flex flex-col gap-3 xl:flex-row">
        <label className="flex-1">
          <span className="sr-only">Website or Instagram</span>
          <input
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="yourcafe.com.au or @yourcafe"
            className="h-14 w-full rounded-full border border-[#e6d3bf] bg-[#fffaf3] px-5 text-base font-semibold text-[#211812] outline-none transition focus:border-[#c65d32] focus:ring-4 focus:ring-[#c65d32]/15"
          />
        </label>
        <button className="inline-flex h-14 items-center justify-center rounded-full bg-[#c65d32] px-6 text-base font-black text-white shadow-lg shadow-[#c65d32]/20 transition hover:-translate-y-0.5 hover:bg-[#a94927]">
          Show Me What You&apos;d Improve
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
      <p className="mt-3 text-sm font-semibold text-[#8a7463]">Free • Takes around 60 seconds • No obligation</p>
    </form>
  );
}

function SectionShell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20 ${className}`}>{children}</section>;
}

function ProblemCards({ onOpen }: { onOpen: () => void }) {
  return (
    <SectionShell>
      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c65d32]">Your venue deserves better marketing</p>
      <div className="mt-4 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <h2 className="text-4xl font-black tracking-tight text-[#211812] sm:text-5xl">Great venues shouldn&apos;t be invisible online.</h2>
          <p className="mt-4 text-lg leading-8 text-[#6f5a4c]">Hospitality owners are busy running the floor, training staff, ordering stock and keeping customers happy. Marketing often becomes inconsistent, even when the venue is brilliant.</p>
          <button onClick={onOpen} className="mt-6 inline-flex items-center rounded-full bg-[#211812] px-6 py-3 font-black text-white transition hover:-translate-y-0.5">
            We help fix that
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.04 }} className="rounded-[1.5rem] border border-[#ead8c4] bg-white/70 p-6 shadow-lg shadow-[#6f4e37]/5">
                <Icon className="h-7 w-7 text-[#c65d32]" />
                <h3 className="mt-5 text-xl font-black text-[#211812]">{item.title}</h3>
                <p className="mt-2 text-base leading-7 text-[#725f51]">{item.copy}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}

function Services({ onOpen }: { onOpen: (preselect: string) => void }) {
  return (
    <SectionShell className="bg-[#fffaf3]">
      <div className="text-center">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c65d32]">Everything you need</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight text-[#211812] sm:text-5xl">Your marketing, handled.</h2>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article key={service.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex rounded-[1.6rem] border border-[#ead8c4] bg-[#f7efe5] p-6 shadow-xl shadow-[#6f4e37]/8">
              <div className="flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c65d32] text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-black text-[#211812]">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#6f5a4c]">{service.copy}</p>
                <ul className="mt-5 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm font-semibold text-[#4d3b30]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#c65d32]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button onClick={() => onOpen(service.preselect)} className="mt-6 inline-flex items-center justify-center rounded-full border border-[#211812]/15 bg-white px-5 py-3 font-black text-[#211812] transition hover:-translate-y-0.5 hover:border-[#c65d32]">
                  {service.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}

function AuditComparison({ onOpen }: { onOpen: () => void }) {
  return (
    <SectionShell>
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c65d32]">Mini audit preview</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#211812] sm:text-5xl">What could we improve for your venue?</h2>
          <p className="mt-4 text-lg leading-8 text-[#6f5a4c]">We look at the public pieces customers already see: your website, social media, reviews, opening hours, directions and the ease of taking the next step.</p>
          <button onClick={onOpen} className="mt-6 inline-flex items-center rounded-full bg-[#c65d32] px-6 py-3 font-black text-white transition hover:-translate-y-0.5">
            Get My Free Marketing Plan
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        <div className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-2 shadow-2xl shadow-[#6f4e37]/12">
          <Image src="/images/hospitality/hospitality-audit-comparison.webp" alt="Before and after hospitality marketing audit showing social media, website and Google review improvements" width={1600} height={1000} className="rounded-[1.25rem] object-cover" />
        </div>
      </div>
    </SectionShell>
  );
}

function Process() {
  const steps = [
    ["01", "Tell us about your venue", "Answer a few quick questions."],
    ["02", "We review your online presence", "We look at your website, social media, reviews and local visibility."],
    ["03", "We show you the opportunities", "We'll contact you with practical recommendations and explain how we could help."],
  ];
  return (
    <SectionShell className="bg-[#211812] text-white">
      <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Simple from the start.</h2>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {steps.map(([number, title, copy]) => (
          <div key={number} className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6">
            <span className="text-sm font-black text-[#f3a36b]">{number}</span>
            <h3 className="mt-5 text-2xl font-black">{title}</h3>
            <p className="mt-3 text-base leading-7 text-white/68">{copy}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function Testimonials() {
  const trustCards = [
    ["Your first impression", "We check whether your website, Instagram and Google profile make the venue feel current, trusted and worth visiting."],
    ["Your next step", "We look for friction around bookings, calls, directions, menus, reviews and offers so customers know what to do next."],
    ["Your local visibility", "We review the basics that help locals find you: search appearance, review signals, location cues and consistency."],
  ];
  return (
    <SectionShell>
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c65d32]">What we look for</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-[#211812] sm:text-5xl">Clear, practical feedback. No fluff.</h2>
        </div>
        <div className="rounded-full border border-[#c65d32]/25 bg-white px-5 py-3 text-sm font-bold text-[#8a563e]">Built for busy hospitality operators</div>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {trustCards.map(([title, copy], index) => (
          <article key={title} className="rounded-[1.5rem] border border-[#ead8c4] bg-white/70 p-6 shadow-xl shadow-[#6f4e37]/6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#211812] text-sm font-black text-white">
              0{index + 1}
            </div>
            <h3 className="mt-5 text-2xl font-black tracking-tight text-[#211812]">{title}</h3>
            <p className="mt-3 text-base leading-7 text-[#6f5a4c]">{copy}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function PricingTeaser({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-[#211812] p-8 text-center text-white shadow-2xl shadow-[#211812]/15">
        <h2 className="text-3xl font-black tracking-tight">Straightforward marketing. No massive agency retainers.</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-white/70">Flexible marketing options designed for independent cafés and hospitality businesses.</p>
        <button onClick={onOpen} className="mt-6 rounded-full bg-[#f3a36b] px-6 py-3 font-black text-[#211812] transition hover:-translate-y-0.5">
          See What We&apos;d Recommend
        </button>
      </div>
    </section>
  );
}

function FinalCTA({ value, onChange, onSubmit }: { value: string; onChange: (value: string) => void; onSubmit: () => void }) {
  return (
    <SectionShell>
      <div className="rounded-[2rem] border border-[#ead8c4] bg-white p-6 shadow-2xl shadow-[#6f4e37]/10 sm:p-10">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c65d32]">Free hospitality marketing review</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-[#211812] sm:text-5xl">Wondering what you could be doing better?</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-[#6f5a4c]">Send us your website or Instagram. We&apos;ll review your venue&apos;s online presence and show you where we think the biggest opportunities are.</p>
        <LeadStarter value={value} onChange={onChange} onSubmit={onSubmit} className="mt-7 shadow-none" />
      </div>
    </SectionShell>
  );
}

function FAQ({ openFaq, setOpenFaq }: { openFaq: number | null; setOpenFaq: (value: number | null) => void }) {
  return (
    <SectionShell>
      <h2 className="text-4xl font-black tracking-tight text-[#211812]">FAQ</h2>
      <div className="mt-8 divide-y divide-[#ead8c4] rounded-[1.5rem] border border-[#ead8c4] bg-white">
        {faqs.map(([question, answer], index) => (
          <button key={question} className="block w-full p-5 text-left" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
            <span className="flex items-center justify-between gap-4 font-black text-[#211812]">
              {question}
              <ChevronDown className={`h-5 w-5 shrink-0 transition ${openFaq === index ? "rotate-180" : ""}`} />
            </span>
            {openFaq === index ? <p className="mt-3 text-base leading-7 text-[#6f5a4c]">{answer}</p> : null}
          </button>
        ))}
      </div>
    </SectionShell>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#ead8c4] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-black">{config.logo}<span className="text-[#c65d32]">.</span></p>
          <p className="mt-2 text-sm font-semibold text-[#7b6353]">Marketing for cafés, restaurants, bars & hospitality businesses.</p>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#a58c7a]">Australian small business</p>
        </div>
        <div className="flex gap-5 text-sm font-bold text-[#6f5a4c]">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

function MobileStickyCTA({ show, onOpen }: { show: boolean; onOpen: () => void }) {
  if (!show) return null;
  return (
    <button onClick={onOpen} className="fixed bottom-4 left-4 right-4 z-30 rounded-full bg-[#c65d32] px-5 py-4 text-base font-black text-white shadow-2xl shadow-[#c65d32]/30 sm:hidden">
      Get My Free Marketing Plan
    </button>
  );
}

function LeadForm({
  open,
  step,
  data,
  status,
  error,
  onClose,
  onBack,
  onNext,
  onSubmit,
  onToggleHelp,
  onChange,
}: {
  open: boolean;
  step: number;
  data: FormData;
  status: "idle" | "loading" | "success" | "error";
  error: string;
  onClose: () => void;
  onBack: () => void;
  onNext: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onToggleHelp: (label: string) => void;
  onChange: (patch: Partial<FormData>) => void;
}) {
  const stepReady = isLeadStepReady(step, data);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-50 bg-[#211812]/55 p-3 backdrop-blur-sm sm:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="mx-auto flex max-h-[calc(100vh-1.5rem)] max-w-2xl flex-col overflow-hidden rounded-[1.75rem] bg-[#fffaf3] shadow-2xl sm:max-h-[calc(100vh-3rem)]" initial={{ y: 28, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 28, opacity: 0 }}>
            <div className="flex items-center justify-between border-b border-[#ead8c4] p-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c65d32]">Step {step} of 4</p>
                <div className="mt-2 h-2 w-44 overflow-hidden rounded-full bg-[#ead8c4]">
                  <div className="h-full rounded-full bg-[#c65d32] transition-all" style={{ width: `${(step / 4) * 100}%` }} />
                </div>
              </div>
              <button onClick={onClose} className="rounded-full p-2 text-[#6f5a4c] transition hover:bg-[#ead8c4]">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={onSubmit} className="overflow-y-auto p-5 sm:p-7">
              <input type="text" tabIndex={-1} autoComplete="off" value={data.honeypot} onChange={(event) => onChange({ honeypot: event.target.value })} className="hidden" aria-hidden="true" />
              {status === "success" ? (
                <SuccessState />
              ) : (
                <>
                  {step === 1 ? <StepOne data={data} onToggleHelp={onToggleHelp} /> : null}
                  {step === 2 ? <StepTwo data={data} onChange={onChange} /> : null}
                  {step === 3 ? <StepThree data={data} onChange={onChange} /> : null}
                  {step === 4 ? <StepFour data={data} onChange={onChange} /> : null}
                  {error ? <p className="mt-4 rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700">{error}</p> : null}
                  <div className="mt-7 flex gap-3">
                    {step > 1 ? (
                      <button type="button" onClick={onBack} className="h-12 rounded-full border border-[#d8bfaa] px-5 font-black text-[#211812]">
                        Back
                      </button>
                    ) : null}
                    {step < 4 ? (
                      <button type="button" onClick={onNext} disabled={!stepReady} className="h-12 flex-1 rounded-full bg-[#211812] px-5 font-black text-white disabled:cursor-not-allowed disabled:opacity-40">
                        Continue <ArrowRight className="ml-2 inline h-4 w-4" />
                      </button>
                    ) : (
                      <button disabled={status === "loading" || !stepReady} className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-[#c65d32] px-5 font-black text-white disabled:cursor-not-allowed disabled:opacity-55">
                        {status === "loading" ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        Get My Free Marketing Plan <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    )}
                  </div>
                  <p className="mt-3 text-center text-sm font-semibold text-[#8a7463]">We&apos;ll review your online presence and get in touch with our recommendations. No spam.</p>
                </>
              )}
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function StepOne({ data, onToggleHelp }: { data: FormData; onToggleHelp: (label: string) => void }) {
  return (
    <div>
      <h2 className="text-3xl font-black tracking-tight">What would you like help with?</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {helpOptions.map((option) => {
          const Icon = option.icon;
          const selected = data.helpNeeded.includes(option.label);
          return (
            <button key={option.label} type="button" onClick={() => onToggleHelp(option.label)} className={`rounded-2xl border p-4 text-left font-black transition ${selected ? "border-[#c65d32] bg-[#c65d32]/10 text-[#211812]" : "border-[#ead8c4] bg-white text-[#5d493c]"}`}>
              <Icon className="mb-3 h-5 w-5 text-[#c65d32]" />
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepTwo({ data, onChange }: { data: FormData; onChange: (patch: Partial<FormData>) => void }) {
  return (
    <div>
      <h2 className="text-3xl font-black tracking-tight">What&apos;s your biggest marketing challenge?</h2>
      <div className="mt-6 space-y-3">
        {challenges.map((challenge) => (
          <button key={challenge} type="button" onClick={() => onChange({ challenge })} className={`block w-full rounded-2xl border p-4 text-left font-bold transition ${data.challenge === challenge ? "border-[#c65d32] bg-[#c65d32]/10" : "border-[#ead8c4] bg-white"}`}>
            {challenge}
          </button>
        ))}
      </div>
    </div>
  );
}

function StepThree({ data, onChange }: { data: FormData; onChange: (patch: Partial<FormData>) => void }) {
  return (
    <div>
      <h2 className="text-3xl font-black tracking-tight">Tell us about your business</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Business name" value={data.businessName} onChange={(businessName) => onChange({ businessName })} />
        <Field label="Website / Instagram" value={data.websiteOrInstagram} onChange={(websiteOrInstagram) => onChange({ websiteOrInstagram })} />
        <label className="block">
          <span className="mb-2 block text-sm font-black">Business type</span>
          <select value={data.businessType} onChange={(event) => onChange({ businessType: event.target.value })} className="h-12 w-full rounded-2xl border border-[#ead8c4] bg-white px-4 font-semibold outline-none focus:border-[#c65d32]">
            <option value="">Select...</option>
            {businessTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </label>
        <Field label="Suburb / postcode" value={data.suburb} onChange={(suburb) => onChange({ suburb })} />
      </div>
    </div>
  );
}

function StepFour({ data, onChange }: { data: FormData; onChange: (patch: Partial<FormData>) => void }) {
  return (
    <div>
      <h2 className="text-3xl font-black tracking-tight">Where should we send your recommendations?</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="First name" value={data.firstName} onChange={(firstName) => onChange({ firstName })} />
        <Field label="Mobile number" value={data.mobile} onChange={(mobile) => onChange({ mobile })} inputMode="tel" />
        <Field label="Email address" value={data.email} onChange={(email) => onChange({ email })} type="email" className="sm:col-span-2" />
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-black">Anything else we should know?</span>
          <textarea value={data.notes} onChange={(event) => onChange({ notes: event.target.value })} rows={4} className="w-full rounded-2xl border border-[#ead8c4] bg-white px-4 py-3 font-semibold outline-none focus:border-[#c65d32]" />
        </label>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", inputMode, className = "" }: { label: string; value: string; onChange: (value: string) => void; type?: string; inputMode?: "tel"; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-black">{label}</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} type={type} inputMode={inputMode} className="h-12 w-full rounded-2xl border border-[#ead8c4] bg-white px-4 font-semibold outline-none focus:border-[#c65d32] focus:ring-4 focus:ring-[#c65d32]/15" />
    </label>
  );
}

function SuccessState() {
  return (
    <div className="py-10 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#c65d32] text-white">
        <Check className="h-8 w-8" />
      </div>
      <h2 className="mt-6 text-4xl font-black tracking-tight">You&apos;re In</h2>
      <p className="mx-auto mt-4 max-w-md text-lg leading-8 text-[#6f5a4c]">We&apos;ll take a look at your venue&apos;s online presence and identify the biggest opportunities we can see.</p>
      <p className="mt-3 font-black text-[#211812]">One of our team will be in touch shortly.</p>
      <button type="button" className="mt-7 rounded-full border border-[#d8bfaa] px-5 py-3 font-black text-[#211812]">Follow us on Instagram</button>
    </div>
  );
}
