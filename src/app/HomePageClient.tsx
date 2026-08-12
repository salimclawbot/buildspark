"use client";

import {
  ArrowRight,
  Check,
  MousePointerClick,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const nav = [
  ["Work", "#work"],
  ["Plan", "#plan"],
  ["Process", "#process"],
  ["FAQ", "/pricing"],
];

const proof = [
  "Australian. Local. Serious.",
  "No lock-in contracts",
  "Cancel anytime",
];

const checklist = [
  "More enquiries",
  "Better first impression",
  "Stronger service pages",
  "Ongoing improvements every month",
];

const process = [
  ["01", "Clarity", "We work out what your customer needs to see before they trust you."],
  ["02", "Trust", "We shape the proof, pages, photos and message so you stop sounding generic."],
  ["03", "Enquiries", "We make the quote path obvious and track the actions that matter."],
  ["04", "Improve", "Each month, we keep the site useful instead of letting it sit there."],
];

export function HomePageClient() {
  return (
    <main className="min-h-screen bg-[#f2eadf] font-sans text-[#090909]">
      <header className="sticky top-0 z-50 border-b-2 border-[#090909] bg-[#f2eadf]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-[1680px] items-center justify-between px-5 sm:px-8">
          <Link href="/" className="text-3xl font-black tracking-[-0.06em] sm:text-4xl">
            BuildSpark
          </Link>
          <nav className="hidden items-center gap-10 text-sm font-black uppercase tracking-[0.08em] md:flex">
            {nav.map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-[#f03a24]">
                {label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center md:flex">
            <div className="bg-[#c8ff1a] px-8 py-7 text-sm font-black uppercase tracking-[0.08em]">
              Australian. Local. Serious.
            </div>
            <Link href="/quiz" className="bg-[#090909] px-8 py-7 text-sm font-black uppercase tracking-[0.08em] text-white">
              Book a call →
            </Link>
          </div>
          <Link href="/quiz" className="bg-[#090909] px-4 py-3 text-xs font-black uppercase text-white md:hidden">
            Start
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b-2 border-[#090909]">
        <div className="mx-auto grid max-w-[1680px] lg:grid-cols-[0.42fr_0.58fr]">
          <div className="relative z-10 px-5 py-8 sm:px-8 lg:py-12">
            <h1 className="max-w-4xl rotate-[-2deg] text-[4.7rem] font-black uppercase leading-[0.75] tracking-[-0.085em] sm:text-[8.5rem] lg:text-[9.4rem] xl:text-[11rem]">
              Stop looking like everyone else online
            </h1>
            <div className="mt-4 h-3 w-[88%] rotate-[-3deg] bg-[#f03a24]" />
            <div className="mt-10 grid gap-6 sm:grid-cols-[0.8fr_1.2fr] sm:items-end">
              <p className="max-w-xs text-2xl font-black leading-tight tracking-[-0.04em]">
                Websites built, managed and improved
              </p>
              <div className="flex items-end gap-3">
                <span className="text-[7.5rem] font-black leading-[0.78] tracking-[-0.08em] text-[#f03a24] sm:text-[10rem]">$250</span>
                <span className="pb-4 text-2xl font-black text-[#f03a24]">/month</span>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-none bg-[#003cff] px-8 text-base font-black uppercase tracking-[0.08em] text-white hover:bg-[#090909]">
                <Link href="/quiz">
                  Start the plan <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 rounded-none border-2 border-[#090909] bg-transparent px-8 text-base font-black uppercase tracking-[0.08em] text-[#090909] hover:bg-white">
                <Link href="#work">See work</Link>
              </Button>
            </div>
          </div>

          <div className="relative min-h-[520px] border-t-2 border-[#090909] lg:min-h-[780px] lg:border-l-2 lg:border-t-0">
            <Image
              src="/images/buildspark-brutalist-homepage-hero.png"
              alt="BuildSpark bold website strategy desk with laptop, phone, sketches and client mockups"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute bottom-8 right-6 max-w-xs rotate-[-6deg] bg-[#f03a24] p-5 text-2xl font-black uppercase leading-none tracking-[-0.04em] shadow-2xl sm:right-12">
              Be useful. Be direct. Be different.
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-1 border-y-2 border-[#090909] bg-[#090909] text-white">
        <div className="mx-auto grid max-w-[1680px] gap-0 lg:grid-cols-[0.18fr_0.58fr_0.24fr]">
          <div className="border-b border-white/20 p-5 text-xl font-black uppercase leading-none sm:p-8 lg:border-b-0 lg:border-r">
            Ready for a website that works harder?
          </div>
          <div className="grid gap-4 border-b border-white/20 p-5 sm:grid-cols-4 sm:p-8 lg:border-b-0 lg:border-r">
            {["Your name", "Business name", "Email", "Phone"].map((label) => (
              <div key={label} className="border-b border-white/40 py-3 text-sm text-white/55">{label}</div>
            ))}
          </div>
          <div className="p-5 sm:p-8">
            <Button asChild className="h-14 w-full rounded-none bg-[#003cff] text-sm font-black uppercase tracking-[0.08em] text-white hover:bg-[#f03a24]">
              <Link href="/quiz">Start the plan <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <p className="mt-3 text-xs text-white/45">No lock-in contracts. Cancel anytime.</p>
          </div>
        </div>
      </section>

      <section id="work" className="grid border-b-2 border-[#090909] lg:grid-cols-[0.28fr_0.72fr]">
        <div className="border-b-2 border-[#090909] bg-[#f03a24] p-6 lg:border-b-0 lg:border-r-2 lg:p-10">
          <p className="text-[7rem] font-black leading-none tracking-[-0.08em] sm:text-[10rem]">98%</p>
          <p className="mt-3 max-w-xs text-xl font-black uppercase leading-tight">
            of clients stay near on year one
          </p>
          <p className="mt-4 text-sm font-bold">Because site works. And we look after it.</p>
        </div>
        <div className="grid lg:grid-cols-[0.34fr_0.28fr_0.38fr]">
          <div className="border-b-2 border-[#090909] p-6 lg:border-b-0 lg:border-r-2 lg:p-10">
            <blockquote className="text-3xl font-black leading-tight tracking-[-0.04em]">
              “Our site finally reflects the quality of our work. We’ve doubled our enquiries since launch.”
            </blockquote>
            <p className="mt-5 text-sm font-black uppercase">— Local business owner</p>
          </div>
          <div className="border-b-2 border-[#090909] p-6 lg:border-b-0 lg:border-r-2 lg:p-10">
            <p className="mb-6 text-xl font-black uppercase">Fast sites. Real results.</p>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-bold">
                  <Check className="h-5 w-5 shrink-0 text-[#7cff00]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[360px] bg-[#090909]">
            <Image
              src="/images/buildspark-home-hero.png"
              alt="BuildSpark website examples across laptop and phone"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 32vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section id="plan" className="grid border-b-2 border-[#090909] lg:grid-cols-[0.55fr_0.45fr]">
        <div className="p-6 sm:p-10 lg:p-16">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.16em] text-[#f03a24]">The plan</p>
          <h2 className="max-w-4xl text-[4rem] font-black uppercase leading-[0.78] tracking-[-0.08em] sm:text-[7rem]">
            We’re a small studio. On purpose.
          </h2>
          <p className="mt-8 max-w-xl text-xl font-bold leading-8">
            No account managers. No ticket systems. Just senior people doing great work for local businesses across Australia.
          </p>
        </div>
        <div className="relative min-h-[520px] border-t-2 border-[#090909] bg-[#090909] lg:border-l-2 lg:border-t-0">
          <Image
            src="/images/about-team.webp"
            alt="BuildSpark studio team working on websites"
            fill
            className="object-cover opacity-80"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-8 left-8 max-w-sm text-white">
            <p className="text-4xl font-black uppercase leading-none">Build Spark</p>
            <p className="mt-4 text-lg font-bold text-white/75">A managed website studio for businesses that need to look serious online.</p>
          </div>
        </div>
      </section>

      <section id="process" className="border-b-2 border-[#090909] bg-[#f2eadf] p-6 sm:p-10 lg:p-16">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#003cff]">Process</p>
            <h2 className="mt-4 text-[3.5rem] font-black uppercase leading-[0.8] tracking-[-0.08em] sm:text-[6rem]">
              Be useful. Be direct. Be different.
            </h2>
          </div>
          <div className="grid gap-px bg-[#090909] sm:grid-cols-2">
            {process.map(([number, title, text]) => (
              <div key={number} className="bg-[#f2eadf] p-6">
                <p className="text-sm font-black text-[#f03a24]">{number}</p>
                <h3 className="mt-8 text-3xl font-black uppercase">{title}</h3>
                <p className="mt-4 text-base font-semibold leading-7 text-[#090909]/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#090909] text-white">
        <div className="mx-auto grid max-w-[1680px] gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[0.55fr_0.45fr] lg:px-16">
          <div>
            <p className="text-5xl font-black tracking-[-0.06em]">BuildSpark</p>
            <h2 className="mt-10 max-w-3xl text-[3.8rem] font-black uppercase leading-[0.82] tracking-[-0.08em] sm:text-[6rem]">
              Ready to stop looking generic?
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              {proof.map((item) => (
                <span key={item} className="border border-white/25 px-4 py-2 text-sm font-black uppercase">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <Button asChild size="lg" className="h-16 rounded-none bg-[#c8ff1a] text-base font-black uppercase tracking-[0.08em] text-[#090909] hover:bg-white">
              <Link href="/quiz">
                Start the plan <MousePointerClick className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="mt-10 grid grid-cols-2 gap-6 text-sm font-black uppercase text-white/60">
              <Link href="/services">Services</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
