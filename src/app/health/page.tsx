import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Goat Health Reference",
  description:
    "Health conditions, treatments, medication reference, myths debunked, FAMACHA guide, and care guides — from the barn at RiverHouse Dairy.",
};

const healthTabs = [
  { label: "Conditions", href: "/health/conditions", description: "15+ conditions with expandable detail cards" },
  { label: "Medications", href: "/health/medications", description: "Dewormers, antibiotics, supplements, emergency meds" },
  { label: "Myths Debunked", href: "/health/myths", description: "14 common myths with evidence-based reality" },
  { label: "FAMACHA Guide", href: "/health/famacha", description: "Visual scoring guide for parasite management" },
  { label: "Care Guides", href: "/health/guides", description: "Seasonal care, nutrition, kidding prep" },
];

export default function HealthHubPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-section-sm">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-forest-400">
        <Link href="/" className="hover:text-plum transition-colors">Home</Link>
        <span className="mx-1.5">›</span>
        <span className="text-forest">Goat Health</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-h1 text-forest font-bold">Goat Health Reference</h1>
        <p className="mt-3 text-body-lg text-forest-400 max-w-2xl">
          Health conditions, treatments, and medication reference — from the barn at RiverHouse Dairy.
        </p>
      </header>

      {/* Emergency Quick-Ref */}
      <div className="mb-10 rounded-brand border-2 border-red-300 bg-red-50 p-5">
        <p className="font-semibold text-red-800">
          🚨 Emergency? See{" "}
          <Link href="/health/conditions" className="underline hover:text-red-600">
            critical conditions
          </Link>{" "}
          for immediate action steps.
        </p>
      </div>

      {/* Search placeholder */}
      <div className="mb-10">
        <input
          type="search"
          placeholder="Search conditions, medications, symptoms..."
          className="w-full rounded-brand border border-forest-200 bg-white px-4 py-3 text-body text-forest placeholder:text-forest-300 focus:border-plum focus:ring-1 focus:ring-plum"
          disabled
          aria-label="Search health reference (coming soon)"
        />
        <p className="mt-1 text-xs text-forest-300">Full-text search — coming in build phase</p>
      </div>

      {/* Tab Navigation as Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {healthTabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className="group rounded-brand border border-forest-100 bg-white p-6 shadow-card hover:shadow-card-hover hover:border-plum-200 transition-all"
          >
            <h2 className="text-h3 text-forest group-hover:text-plum transition-colors">
              {tab.label}
            </h2>
            <p className="mt-2 text-sm text-forest-400">{tab.description}</p>
          </Link>
        ))}
      </div>

      {/* GoatSteward CTA */}
      <div className="mt-section-sm rounded-brand bg-forest-50 border border-forest-100 p-6 text-center">
        <p className="text-body text-forest">
          Track your herd&apos;s health records with{" "}
          <Link href="/tools/goatsteward" className="font-semibold text-plum hover:text-plum-700">
            GoatSteward
          </Link>{" "}
          — built by a goat farmer, for goat farmers.
        </p>
      </div>

      {/* Medical Disclaimer */}
      <div className="mt-10 rounded-brand bg-cream-200 p-5 text-xs text-forest-400 leading-relaxed">
        <p className="font-semibold text-forest mb-1">Medical Disclaimer</p>
        <p>
          This information is for educational purposes only and should not replace professional
          veterinary advice. Always consult with a licensed veterinarian for diagnosis, treatment,
          and medical care of your animals. In case of emergency or serious health concerns, seek
          immediate veterinary attention.
        </p>
      </div>
    </div>
  );
}
