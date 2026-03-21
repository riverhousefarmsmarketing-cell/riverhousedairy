import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Goat Health Reference | RiverHouse Dairy",
  description: "Health conditions, treatments, medication reference, myths debunked, FAMACHA guide, and care guides — from the barn at RiverHouse Dairy in Chehalis, Washington.",
};

const sections = [
  {
    label: "Health Conditions",
    href: "/health/conditions",
    description: "15+ conditions with symptoms, treatment protocols, and emergency flags.",
    count: "15+",
    emergency: true,
  },
  {
    label: "Medication Reference",
    href: "/health/medications",
    description: "Dewormers, antibiotics, emergency meds — with dosing, routes, and withdrawal times.",
    count: "20+",
    emergency: false,
  },
  {
    label: "Myths Debunked",
    href: "/health/myths",
    description: "14 common goat myths with evidence-based reality checks.",
    count: "14",
    emergency: false,
  },
  {
    label: "FAMACHA Guide",
    href: "/health/famacha",
    description: "Visual eyelid scoring for barber pole worm management. The most important check you can do.",
    count: "Visual",
    emergency: false,
  },
  {
    label: "Care Guides",
    href: "/health/guides",
    description: "Kidding prep, seasonal care, nutrition by life stage, new goat owner checklist.",
    count: "7",
    emergency: false,
  },
];

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
          {/* Emergency callout */}
          <div className="mt-8 flex items-start gap-3 rounded-xl bg-red-900/40 border border-red-400/40 px-5 py-4">
            <span className="text-red-300 text-lg shrink-0">🚨</span>
            <p className="text-red-200 text-sm leading-relaxed">
              <strong className="text-red-100">Emergency?</strong> Bloat, milk fever, severe anemia, urinary blockage, enterotoxemia — see{" "}
              <Link href="/health/conditions" className="underline hover:text-white">critical conditions</Link>{" "}
              for immediate action steps.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-8 sm:px-12 py-16">
          <div className="divide-y divide-gray-100">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-center justify-between py-6 hover:pl-2 transition-all"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-forest group-hover:text-plum transition-colors">
                      {s.label}
                    </h2>
                    {s.emergency && (
                      <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">
                        Includes emergencies
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-base text-forest-600 max-w-xl">{s.description}</p>
                </div>
                <div className="flex items-center gap-4 shrink-0 pl-8">
                  <span className="text-2xl font-bold text-plum">{s.count}</span>
                  <span className="text-plum group-hover:translate-x-1 transition-transform text-xl">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest">
        <div className="mx-auto max-w-4xl px-8 sm:px-12 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-plum-200">Built from this barn</p>
            <p className="text-white font-bold text-lg mt-1">
              Track your herd&apos;s health with GoatSteward
            </p>
            <p className="text-cream-300 text-sm mt-1">536 functions. FAMACHA scoring, health records, deworming decisions.</p>
          </div>
          <Link
            href="/tools/goatsteward"
            className="shrink-0 rounded-lg bg-plum px-6 py-3 text-base font-bold text-white hover:bg-plum-600 transition-colors"
          >
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
