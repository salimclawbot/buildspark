"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PainLetter() {
  return (
    <section className="py-14 sm:py-24 relative overflow-hidden">
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 bg-surface/50" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-500 mb-8">
              Let&apos;s be honest.
            </h2>

            <div className="space-y-5 text-zinc-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
              <p>
                You didn&apos;t start your business to mess around with
                websites.
              </p>
              <p>
                You started it because you&apos;re bloody good at what you do.
                Laying tiles. Fixing cars. Running a kitchen. Whatever it is,
                you know your trade inside and out.
              </p>
              <p>
                But here&apos;s the thing nobody told you when you went out on
                your own:{" "}
                <strong className="text-white">
                  being good at your job isn&apos;t enough anymore.
                </strong>
              </p>
              <p>
                Your competitor down the road? The one who does half the quality
                work you do? He&apos;s ranking on Google. He&apos;s getting the
                calls. His phone&apos;s{" "}
                <span className="text-amber-400 font-semibold">ringing off the hook</span>.
                And you&apos;re sitting there wondering why your phone&apos;s gone quiet on a
                Tuesday.
              </p>

              {/* Pull quote */}
              <div className="border-l-4 border-amber-500 pl-6 py-2 my-8">
                <p className="text-2xl font-bold text-white">
                  Every day without a proper website is a day you&apos;re{" "}
                  <span className="text-amber-400 font-semibold">invisible on Google</span>.
                </p>
              </div>

              <p>
                Maybe you built something yourself on Wix or Squarespace one
                Sunday arvo. Spent six hours on it. Looks like it, too. Or
                maybe you paid some agency two grand and waited three months for
                a website that looks like it was built in 2014.
              </p>
              <p>
                Meanwhile, you&apos;re{" "}
                <span className="text-amber-400 font-semibold">invisible on Google</span>{" "}
                to the people searching{" "}
                <em>&quot;plumber near me&quot;</em> or{" "}
                <em>&quot;best cafe in Footscray&quot;</em> right now.
              </p>
              <p>
                Most of your work still comes from{" "}
                <span className="text-amber-400 font-semibold">word of mouth</span>.
                Imagine if your website had people calling too.
              </p>
              <p>
                <strong className="text-white">
                  Those leads are going somewhere. Just not to you.
                </strong>
              </p>
              <p>
                You need something that works for you 24/7. Something that shows
                up when people search. Something that looks professional, loads
                fast on a phone, and makes it dead simple for someone to call
                you or book online.
              </p>
              <p>
                We build your site in{" "}
                <span className="text-amber-400 font-semibold">48 hours</span>.{" "}
                <span className="text-amber-400 font-semibold">50% upfront</span>,
                rest when you&apos;re happy.
              </p>
              <p className="text-white font-semibold text-xl sm:text-2xl">
                That&apos;s exactly what we build.
              </p>
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="text-base px-8">
                <Link href="/quiz">Start Your Free Quiz →</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative aspect-[3/4] rounded-2xl border border-white/10 overflow-hidden">
              <Image
                src="/images/tradie-on-job-call.webp"
                alt="Tradie taking a call on the job site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
