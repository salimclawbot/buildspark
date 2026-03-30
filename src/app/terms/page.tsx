import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | BuildSpark",
  description:
    "BuildSpark terms of service. Scope, payment, revisions, and intellectual property for our web design services.",
  alternates: { canonical: "https://buildspark.com.au/terms" },
  openGraph: {
    title: "Terms of Service | BuildSpark",
    description:
      "BuildSpark terms of service. Scope, payment, revisions, and intellectual property for our web design services.",
    url: "https://buildspark.com.au/terms",
    siteName: "BuildSpark",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-32 sm:py-40">
        <Link
          href="/"
          className="inline-flex items-center gap-1 mb-10 text-sm text-zinc-500 hover:text-white transition-colors"
        >
          <span className="text-lg font-bold text-white">Build</span>
          <span className="text-lg font-bold text-amber-500">Spark</span>
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-invert prose-zinc max-w-none space-y-6 text-zinc-400 leading-relaxed">
          <p>
            These terms apply to all web design services provided by BuildSpark.
            By engaging our services, you agree to the following.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Scope of work
          </h2>
          <p>
            We design and build websites as described in your selected plan
            (Starter, Business, or Growth). The scope includes design,
            development, mobile optimisation, and basic SEO as outlined on our
            pricing page.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">Payment</h2>
          <p>
            Payment is 50% upfront before work begins and 50% on delivery of the
            completed website. All prices are in Australian dollars and include
            GST where applicable.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">Revisions</h2>
          <p>
            Each plan includes revision rounds as specified (Starter: 0,
            Business: 1, Growth: 2). Additional revisions can be arranged at a
            fair hourly rate.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Intellectual property
          </h2>
          <p>
            Once final payment is received, you own the completed website design
            and all custom content created for your project. Stock images and
            third-party assets remain subject to their original licences.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Care Plan
          </h2>
          <p>
            The optional Care Plan ($49/month) covers hosting, domain, security
            updates, backups, content updates, and priority support. There are no
            lock-in contracts and you can cancel at any time.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Limitation of liability
          </h2>
          <p>
            BuildSpark provides websites on an &quot;as built&quot; basis. We are not
            liable for indirect losses, lost revenue, or damages arising from the
            use of your website. Our total liability is limited to the amount you
            paid for the service.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">Contact</h2>
          <p>
            Questions about these terms? Email us at{" "}
            <a
              href="mailto:info@buildspark.com.au"
              className="text-amber-500 hover:underline"
            >
              info@buildspark.com.au
            </a>
            .
          </p>

          <p className="text-sm text-zinc-600 mt-12">
            Last updated: March 2026
          </p>
        </div>
      </div>
    </main>
  );
}
