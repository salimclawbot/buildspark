import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-lg">
          <p className="text-8xl font-bold text-amber-500 mb-6">404</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Oops. This page doesn&apos;t exist.
          </h1>
          <p className="text-zinc-400 text-lg mb-8">
            But we can build you one that does.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-8 py-3 text-sm font-semibold text-black hover:bg-amber-400 transition-colors"
            >
              Start Your Free Quiz &rarr;
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-700 px-8 py-3 text-sm font-semibold text-white hover:border-zinc-500 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
