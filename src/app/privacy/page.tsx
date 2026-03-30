import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | BuildSpark",
  description:
    "BuildSpark privacy policy. How we collect, use, and protect your personal information.",
  alternates: { canonical: "https://buildspark.com.au/privacy" },
  openGraph: {
    title: "Privacy Policy | BuildSpark",
    description:
      "BuildSpark privacy policy. How we collect, use, and protect your personal information.",
    url: "https://buildspark.com.au/privacy",
    siteName: "BuildSpark",
    type: "website",
  },
};

export default function PrivacyPage() {
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

        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

        <div className="prose prose-invert prose-zinc max-w-none space-y-6 text-zinc-400 leading-relaxed">
          <p>
            BuildSpark (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your
            privacy in accordance with the Australian Privacy Act 1988 and the
            Australian Privacy Principles (APPs).
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            What we collect
          </h2>
          <p>
            When you fill out our quiz or contact form, we collect your name,
            email address, phone number, business name, and suburb. We use this
            information solely to deliver our web design services and communicate
            with you about your project.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            How we use your information
          </h2>
          <p>
            We use your personal information to build and deliver your website,
            send you project updates, and follow up on enquiries. We do not use
            your data for marketing unless you opt in.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Third parties
          </h2>
          <p>
            We do not sell, rent, or share your personal information with third
            parties. We use trusted services (hosting, email delivery) that may
            process data on our behalf, but only for the purpose of delivering
            our services to you.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Data storage and security
          </h2>
          <p>
            Your information is stored securely and access is limited to
            authorised team members. We take reasonable steps to protect your
            data from misuse, loss, and unauthorised access.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            Your rights
          </h2>
          <p>
            You can request access to, correction of, or deletion of your
            personal information at any time by emailing{" "}
            <a
              href="mailto:info@buildspark.com.au"
              className="text-amber-500 hover:underline"
            >
              info@buildspark.com.au
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">Contact</h2>
          <p>
            If you have any questions about this policy, contact us at{" "}
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
