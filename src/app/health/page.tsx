import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Goat Health Reference | RiverHouse Dairy",
  description: "Goat care guides from the barn at RiverHouse Dairy in Chehalis, Washington.",
};

export default function HealthHubPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-4xl px-8 sm:px-12 py-16">
          <nav className="mb-6 text-sm text-forest-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Goat Health</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Goat Health Reference</h1>
          <p className="mt-4 text-lg text-cream-300 max-w-2xl leading-relaxed">
            From the barn at RiverHouse Dairy. Educational reference only — always consult your vet for diagnosis and treatment.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-8 sm:px-12 py-16">
          <Link
            href="/health/guides"
            className="group flex items-center justify-between py-6 border-b border-gray-100 hover:pl-2 transition-all"
          >
            <div>
              <h2 className="text-xl font-bold text-forest group-hover:text-plum transition-colors">
                Care Guides
              </h2>
              <p className="mt-1 text-base text-forest-600 max-w-xl">
                Kidding prep, seasonal care, nutrition by life stage, new goat owner checklist.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0 pl-8">
              <span className="text-2xl font-bold text-plum">7</span>
              <span className="text-plum group-hover:translate-x-1 transition-transform text-xl">→</span>
            </div>
          </Link>

          <p className="mt-10 text-sm text-forest-600">
            More health resources coming soon — conditions, medications, FAMACHA guide, and myths debunked.
          </p>
        </div>
      </section>

      <section className="bg-forest">
        <div className="mx-auto max-w-4xl px-8 sm:px-12 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-plum-200">Built from this barn</p>
            <p className="text-white font-bold text-lg mt-1">Track your herd&apos;s health with GoatSteward</p>
            <p className="text-cream-300 text-sm mt-1">536 functions. FAMACHA scoring, health records, deworming decisions.</p>
          </div>
          <Link href="/tools/goatsteward"
            className="shrink-0 rounded-lg bg-plum px-6 py-3 text-base font-bold text-white hover:bg-plum-600 transition-colors">
            GoatSteward →
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-8 sm:px-12 py-8 text-xs text-forest-600 leading-relaxed">
        <strong className="text-forest">Medical Disclaimer:</strong> This information is for educational purposes only and should not replace professional veterinary advice. Always consult with a licensed veterinarian for diagnosis, treatment, and medical care of your animals.
      </div>
    </>
  );
}
