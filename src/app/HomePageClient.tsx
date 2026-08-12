"use client";

import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  Globe2,
  MousePointerClick,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";

const industries = [
  { label: "Dentists", image: "/images/service-bookkeepers.webp" },
  { label: "Surgeons", image: "/images/portfolio-hero.webp" },
  { label: "Equine", image: "/images/buildspark-home-hero.png" },
  { label: "Cafes", image: "/images/service-cafes.webp" },
  { label: "Tradies", image: "/images/service-tradies.webp" },
  { label: "Consultants", image: "/images/about-team.webp" },
  { label: "Security", image: "/images/contact-hero.webp" },
];

const included = [
  "Custom design that reflects your brand",
  "Website, hosting and launch support",
  "SEO foundations and mobile speed",
  "Monthly updates, security and backups",
  "Content improvements and article support",
  "Lead tracking for calls, clicks and forms",
];

const buildManageGrow = [
  {
    title: "Build",
    text: "We shape the message, design the site and launch it properly around your industry.",
    icon: Globe2,
  },
  {
    title: "Manage",
    text: "Hosting, changes, security, backups and updates stay looked after every month.",
    icon: ShieldCheck,
  },
  {
    title: "Grow",
    text: "We keep improving pages, content and lead tracking so the website does not sit still.",
    icon: BarChart3,
  },
];

export function HomePageClient() {
  return (
    <main className="min-h-screen bg-[#f8f3ea] text-[#111111]">
      <Navbar ctaLabel="Start your plan" ctaHref="/quiz" singleCta tone="light" />

      <section className="relative overflow-hidden border-b border-[#111]/10 bg-[#fbf7ef] pt-24 sm:pt-28">
        <div className="absolute left-0 top-0 hidden h-full w-px bg-[#111]/10 lg:left-16 lg:block" />
        <div className="absolute right-0 top-0 hidden h-full w-px bg-[#111]/10 lg:right-16 lg:block" />
        <div className="mx-auto max-w-[1580px] px-4 pb-10 sm:px-8 lg:px-16">
          <div className="border-x border-[#111]/10">
            <div className="grid min-h-[760px] lg:grid-cols-[0.46fr_0.54fr]">
              <div className="flex flex-col justify-center border-b border-[#111]/10 px-5 py-10 sm:px-8 lg:border-b-0 lg:border-r lg:px-14">
                <div className="mb-8 inline-flex w-fit items-center gap-2 border border-[#092f1f]/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#092f1f]">
                  <Sparkles className="h-4 w-4 text-[#b98b2d]" />
                  Australian managed website studio
                </div>
                <h1 className="font-serif text-[4.4rem] leading-[0.88] tracking-[-0.055em] text-[#0f0f0f] sm:text-[7rem] lg:text-[7.2rem]">
                  Websites that make businesses look{" "}
                  <span className="italic tracking-[-0.07em]">established</span>
                </h1>
                <div className="mt-8 h-px w-16 bg-[#b98b2d]" />
                <p className="mt-7 max-w-xl text-xl leading-8 text-[#111]/70">
                  We build, manage and improve premium websites for Australian businesses for{" "}
                  <strong className="text-[#111]">$250/month</strong>. No giant upfront invoice. No generic template. No neglected website.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="h-14 rounded-none bg-[#092f1f] px-8 text-base text-white hover:bg-[#111]">
                    <Link href="/quiz">
                      Start your website plan <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-14 rounded-none border-[#111]/20 bg-transparent px-8 text-base text-[#111] hover:bg-white">
                    <Link href="#work">View the standard</Link>
                  </Button>
                </div>
                <div className="mt-14 grid gap-5 border-t border-[#111]/10 pt-7 sm:grid-cols-3">
                  {[
                    ["Australian team", "Local support"],
                    ["Fixed monthly rate", "No lock-in contracts"],
                    ["Done-for-you", "We manage everything"],
                  ].map(([title, text]) => (
                    <div key={title} className="flex gap-3">
                      <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-[#092f1f]" />
                      <div>
                        <p className="font-bold">{title}</p>
                        <p className="text-sm text-[#111]/55">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[620px] bg-[#111]">
                <Image
                  src="/images/buildspark-editorial-desk-hero.png"
                  alt="BuildSpark website strategy desk with laptop, phone and premium website mockups"
                  fill
                  priority
                  className="object-cover lg:object-[58%_50%]"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/12" />
                <div className="absolute bottom-8 left-8 grid max-w-md grid-cols-[1fr_auto] overflow-hidden border border-white/20 bg-white/90 shadow-2xl backdrop-blur sm:left-10">
                  <div className="p-5">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b8642f]">Built by BuildSpark</p>
                    <p className="mt-2 text-lg font-bold leading-6 text-[#111]">Strategy, design, launch and monthly care in one plan.</p>
                  </div>
                  <div className="grid place-items-center bg-[#092f1f] px-5 text-white">
                    <span className="text-3xl font-black">$250</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="work" className="border-t border-[#111]/10 px-5 py-8 sm:px-8 lg:px-14">
              <div className="grid gap-6 lg:grid-cols-[12rem_1fr] lg:items-center">
                <h2 className="font-serif text-3xl leading-none tracking-[-0.03em]">
                  Websites for every industry
                </h2>
                <div className="grid gap-px overflow-hidden bg-[#111]/12 sm:grid-cols-2 lg:grid-cols-7">
                  {industries.map((industry) => (
                    <Link key={industry.label} href="/services" className="group relative min-h-[148px] overflow-hidden bg-[#111]">
                      <Image
                        src={industry.image}
                        alt={`${industry.label} website category`}
                        fill
                        className="object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                        sizes="(max-width: 1024px) 50vw, 12vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <span className="absolute bottom-4 left-4 font-serif text-2xl text-white">{industry.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid border-t border-[#111]/10 lg:grid-cols-[0.32fr_0.26fr_0.27fr_0.15fr]">
              <div className="border-b border-[#111]/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-12">
                <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                  We build, manage and <span className="italic">grow</span> your website.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#111]/65">
                  A complete website service for local businesses who want to look professional and win more customers.
                </p>
              </div>
              <div className="border-b border-[#111]/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-12">
                <ul className="space-y-4">
                  {included.slice(0, 4).map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-medium text-[#111]/72">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#092f1f]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-b border-[#111]/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-12">
                <p className="font-serif text-7xl leading-none text-[#b98b2d]">“</p>
                <blockquote className="font-serif text-3xl leading-tight tracking-[-0.03em]">
                  BuildSpark took care of everything. Our new website looks credible and we finally know where enquiries come from.
                </blockquote>
                <p className="mt-5 text-sm font-semibold text-[#111]/55">— Local business owner</p>
              </div>
              <div className="p-6 sm:p-8 lg:p-12">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#092f1f]">Proof</p>
                <p className="mt-5 text-4xl font-black tracking-tight">4.9/5</p>
                <p className="mt-1 text-sm text-[#111]/55">Average client rating</p>
                <p className="mt-8 text-4xl font-black tracking-tight">No lock-in</p>
                <p className="mt-1 text-sm text-[#111]/55">Cancel anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] text-white">
        <div className="mx-auto max-w-[1580px] px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.33fr_0.67fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#d9ff45]">The BuildSpark system</p>
              <h2 className="mt-5 font-serif text-5xl leading-[0.96] tracking-[-0.05em] sm:text-7xl">
                Built to launch. Managed to perform. Improved to grow.
              </h2>
              <Button asChild variant="outline" size="lg" className="mt-8 h-14 rounded-none border-white/25 bg-white/5 px-8 text-base text-white hover:bg-white/10">
                <Link href="/services">How it works <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            <div className="grid gap-px bg-white/12 md:grid-cols-3">
              {buildManageGrow.map((item, index) => (
                <div key={item.title} className="bg-[#111] p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[#d9ff45] text-sm font-black text-[#111]">
                      {index + 1}
                    </span>
                    <item.icon className="h-6 w-6 text-white/35" />
                  </div>
                  <h3 className="mt-10 text-3xl font-black">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-white/62">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#111]/10 bg-[#f8f3ea]">
        <div className="mx-auto max-w-[1580px] px-4 py-16 sm:px-8 lg:px-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b8642f]">Ready for a site that works harder?</p>
              <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl">
                Tell us about your business and we will map the plan.
              </h2>
            </div>
            <div className="border border-[#111]/10 bg-[#092f1f] p-5 text-white sm:p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {["Your name", "Business name", "Email", "Phone"].map((label) => (
                  <div key={label} className="border-b border-white/30 py-4 text-sm text-white/55">{label}</div>
                ))}
              </div>
              <Button asChild size="lg" className="mt-6 h-14 w-full rounded-none bg-[#d9ff45] px-8 text-base text-[#111] hover:bg-white">
                <Link href="/quiz">
                  Start the plan <MousePointerClick className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <p className="mt-4 text-xs text-white/55">No lock-in contracts. Cancel anytime. Best-fit projects confirmed after the quiz.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="legacy" />
    </main>
  );
}
