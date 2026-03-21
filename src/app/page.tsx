import Link from "next/link";
import Image from "next/image";
import { FarmBureauBadge } from "@/components/layout";

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════
          1. HERO — Full viewport, left-aligned
          ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center">
        <Image
          src="/images/farm/sheep-pasture.png"
          alt="RiverHouse Dairy flock grazing in Lewis County pasture"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay — darker left for text legibility, lighter right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />

        <div className="relative w-full">
          <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16 py-32">
            <div className="max-w-2xl">
              {/* Location badge */}
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/60 mb-6">
                Chehalis, Washington · Lewis County
              </p>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                Raw Goat Milk<br />
                <span className="text-cream-200">Year-Round.</span>
              </h1>
              <p className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white/70 leading-tight">
                Seasonal Sheep Milk.
              </p>

              {/* Sub-copy */}
              <p className="mt-8 text-lg text-white/80 max-w-md leading-relaxed">
                Small herd. Clean protocols. Washington State raw milk
                licensing in progress — sales open Summer 2026.
              </p>

              {/* CTA */}
              <div className="mt-10">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfmqguPYi7oULqkHjJo6mFdAPg6E7L3YHkF6tVyaizRa6SMMQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-plum px-8 py-4 text-base font-bold text-white hover:bg-plum-600 transition-colors shadow-lg"
                >
                  Join the Raw Milk Waitlist
                </a>
              </div>

              {/* Farm Bureau badge — quiet, below CTAs */}
              <div className="mt-10">
                <FarmBureauBadge size="sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. WHAT WE PRODUCE — Two columns, scannable
          ══════════════════════════════════════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-16 py-28">
          <div className="grid gap-0 lg:grid-cols-2 lg:divide-x lg:divide-gray-100">

            {/* Goat Milk */}
            <div className="pb-16 lg:pb-0 lg:pr-16">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
                <Image
                  src="/images/farm/goat-herd-path.png"
                  alt="Dairy goat herd at RiverHouse Dairy"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-plum">
                Year-Round Production
              </span>
              <h2 className="text-3xl font-bold text-forest mt-2 mb-5">
                Raw Goat Milk
              </h2>
              <ul className="space-y-3">
                {[
                  "Nigerian Dwarf · LaMancha · Mini-LaMancha · Mini Nubian",
                  "6–10% butterfat — richest of any goat breed",
                  "Naturally homogenized · Ideal for cheese, yogurt, soap",
                  "Farm pickup · Retail · Bulk supply",
                ].map((fact) => (
                  <li key={fact} className="flex gap-3 text-base text-forest-600">
                    <span className="text-plum mt-1 shrink-0">—</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sheep Milk */}
            <div className="pt-16 lg:pt-0 lg:pl-16 border-t border-gray-100 lg:border-t-0">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
                <Image
                  src="/images/farm/icelandic-rams.png"
                  alt="Icelandic sheep at RiverHouse Dairy"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-plum">
                Seasonal · Limited Quantity
              </span>
              <h2 className="text-3xl font-bold text-forest mt-2 mb-5">
                Raw Sheep Milk
              </h2>
              <ul className="space-y-3">
                {[
                  "Icelandic · Lacaune-cross · East Friesian",
                  "Pure Lacaune genetics arriving Spring 2026",
                  "High-butterfat · Ideal for artisan cheese",
                  "Premium pricing · Seasonal availability",
                ].map((fact) => (
                  <li key={fact} className="flex gap-3 text-base text-forest-600">
                    <span className="text-plum mt-1 shrink-0">—</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* A2/A2 footnote */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link
              href="/animals"
              className="group flex items-center justify-between text-base text-forest-600 hover:text-plum transition-colors"
            >
              <span>
                <strong className="text-forest">A2/A2 Jersey cattle & Zebu</strong>
                {" "}— heavy cream for value-added dairy products
              </span>
              <span className="text-plum group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. HOW WE OPERATE — 4 lines, no cards
          ══════════════════════════════════════ */}
      <section className="bg-forest">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-16 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: heading */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-plum-200 mb-4">
                How We Operate
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Clean milk starts<br />before the parlor.
              </h2>
              <p className="mt-6 text-lg text-cream-300 leading-relaxed max-w-sm">
                Every protocol we follow exists to protect the milk and the animals.
                Not because it&apos;s required — because it&apos;s right.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-block text-sm font-bold text-plum-200 hover:text-white transition-colors"
              >
                About the farm →
              </Link>
            </div>

            {/* Right: 4 tight protocol lines */}
            <div className="space-y-0 divide-y divide-white/10">
              {[
                { label: "Closed herd", detail: "No outside animals without quarantine and health screening." },
                { label: "Individual tracking", detail: "Every animal tracked daily — health, milk, breeding, FAMACHA scores." },
                { label: "Targeted protocols", detail: "Data-driven deworming and health decisions, not calendar schedules." },
                { label: "State licensed", detail: "WA raw milk license in progress. Operating in full regulatory compliance." },
              ].map(({ label, detail }) => (
                <div key={label} className="py-5 flex gap-6">
                  <span className="text-plum-200 font-bold text-sm uppercase tracking-wider w-40 shrink-0 pt-0.5">
                    {label}
                  </span>
                  <span className="text-cream-300 text-base leading-relaxed">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. CTA — Forest band, inline
          ══════════════════════════════════════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-16 py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-forest leading-tight">
                Raw milk sales<br />open Summer 2026.
              </h2>
              <p className="mt-5 text-lg text-forest-600 leading-relaxed max-w-md">
                Farm pickup in Chehalis, WA. Retail and bulk supply to local
                creameries. Get on the list now — we&apos;ll notify you when
                licensing is complete.
              </p>
              <div className="mt-8">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfmqguPYi7oULqkHjJo6mFdAPg6E7L3YHkF6tVyaizRa6SMMQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-plum px-8 py-4 text-base font-bold text-white hover:bg-plum-600 transition-colors shadow-sm"
                >
                  Join the Raw Milk Waitlist
                </a>
              </div>
            </div>

            {/* Right: stats */}
            <div className="grid grid-cols-2 gap-px bg-gray-100 rounded-2xl overflow-hidden">
              {[
                { stat: "80+", label: "Animals" },
                { stat: "8", label: "Breeds" },
                { stat: "1,157", label: "Miles for Lacaune" },
                { stat: "2026", label: "Sales Launch" },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-white px-8 py-8">
                  <p className="text-4xl font-bold text-plum">{stat}</p>
                  <p className="text-sm text-forest-600 mt-1 font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
