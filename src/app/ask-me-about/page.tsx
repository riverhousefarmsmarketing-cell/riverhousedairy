import type { Metadata } from "next";
import Link from "next/link";
import { askMeAboutTopics } from "@/lib/tokens";
import { FarmBureauBadge } from "@/components/layout";

export const metadata: Metadata = {
  title: "Ask Me About",
  description:
    "Farm Bureau programs, farm topics, and educational content — things Christine personally uses, participates in, or advocates for.",
};

export default function AskMeAboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-section-sm">
      <nav className="mb-6 text-sm text-forest-600">
        <Link href="/" className="hover:text-plum transition-colors">
          Home
        </Link>
        <span className="mx-1.5">›</span>
        <span className="text-forest">Ask Me About</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-h1 text-forest font-bold">Ask Me About</h1>
        <p className="mt-3 text-body-lg text-forest-600 max-w-2xl">
          Programs, benefits, and opportunities I personally use, participate in, or advocate for
          through the Lewis County Farm Bureau and RiverHouse Dairy.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {askMeAboutTopics.map((topic) => (
          <Link
            key={topic.slug}
            href={`/ask-me-about/${topic.slug}`}
            className="group flex items-start gap-4 rounded-brand border border-forest-100 bg-white p-5 shadow-card hover:shadow-card-hover hover:border-plum-200 transition-all"
          >
            <div className="flex-1">
              <h2 className="text-h3 text-forest group-hover:text-plum transition-colors text-base font-semibold">
                {topic.title}
              </h2>
              {topic.farmBureau && (
                <div className="mt-2">
                  <FarmBureauBadge size="sm" />
                </div>
              )}
            </div>
            <span className="text-forest-300 group-hover:text-plum transition-colors shrink-0">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
