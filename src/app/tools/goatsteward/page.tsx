import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GoatSteward — Dairy Goat Herd Management | RiverHouse Dairy",
  description: "GoatSteward is a dairy goat herd management app built by Christine Williams at RiverHouse Dairy. 536 functions covering health, FAMACHA, milk records, breeding, finances, and more.",
};

const features = [
  {
    category: "Health & Care",
    items: [
      "Health record tracking — vaccinations, treatments, vet visits, injuries",
      "FAMACHA scoring with herd-wide distribution and trend tracking",
      "\"Something's Wrong\" symptom triage — select symptoms, get matched conditions",
      "Follow-up due alerts and active withdrawal period tracking",
      "Body condition scoring and vital sign logging",
      "Medication dosing calculator with withdrawal time tracking",
    ],
  },
  {
    category: "Herd Management",
    items: [
      "Individual animal profiles — breed, age, lineage, status, photos",
      "Herd groups and pen management",
      "Multi-species support — goats, sheep, cattle in one place",
      "Status tracking — milking, dry, bred, kidding, sold, retired",
      "Livestock guardian dog records",
      "Animal certificates and registration management",
    ],
  },
  {
    category: "Milk Records",
    items: [
      "Daily milk weight logging by doe",
      "Production trends and rolling averages",
      "DHI-style records for breed association reporting",
      "Butterfat and component tracking",
      "Withheld milk tracking during withdrawal periods",
      "Seasonal production comparison",
    ],
  },
  {
    category: "Breeding",
    items: [
      "Breeding records with sire/dam tracking",
      "Gestation calculator and due date alerts",
      "Breeding planner — schedule breedings by target kidding window",
      "Kidding records — birth weight, sex, survival",
      "Heat cycle tracking",
      "Lineage and COI (coefficient of inbreeding) awareness",
    ],
  },
  {
    category: "Feed & Finances",
    items: [
      "Feed cost tracking per animal and per group",
      "Grazing rotation logging",
      "Income and expense tracking by category",
      "Cost per gallon of milk produced",
      "Vet and medication expense history",
      "Export to CSV for accounting integration",
    ],
  },
];

const builtFrom = [
  { number: "536", label: "Functions" },
  { number: "80+", label: "Animals tracked" },
  { number: "2022", label: "First animal recorded" },
  { number: "Daily", label: "Still in active use" },
];

export default function GoatStewardPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest">
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-20">
          <nav className="mb-8 text-sm text-forest-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/tools" className="hover:text-white transition-colors">Farm Tools</Link>
            <span className="mx-2">›</span>
            <span className="text-white">GoatSteward</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-plum-200 mb-4">
                by RiverHouse Dairy
              </p>
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                GoatSteward
              </h1>
              <p className="mt-4 text-xl text-cream-300 leading-relaxed">
                Dairy goat herd management built by a goat farmer, for goat farmers.
              </p>
              <p className="mt-5 text-base text-cream-300 leading-relaxed max-w-md">
                I built GoatSteward because nothing existed for small dairy goat operations. The tools out there were built for cattle — wrong breeds, wrong terminology, wrong workflows. So I built my own.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://goatsteward.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-plum px-8 py-4 text-base font-bold text-white hover:bg-plum-600 transition-colors shadow-lg"
                >
                  Visit goatsteward.com →
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
              {builtFrom.map(({ number, label }) => (
                <div key={label} className="bg-forest-dark/50 px-8 py-8 backdrop-blur-sm" style={{background: 'rgba(10,50,40,0.5)'}}>
                  <p className="text-4xl font-bold text-white">{number}</p>
                  <p className="text-sm text-cream-300 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum mb-3">The Origin</p>
            <h2 className="text-3xl font-bold text-forest">Software Built by a Steward, for Stewards</h2>
            <div className="mt-6 space-y-4 text-lg text-forest-600 leading-relaxed">
              <p>
                The app started as a spreadsheet. Then it became a mess of spreadsheets. Then it became a question: why doesn&apos;t something like this exist already?
              </p>
              <p>
                Existing herd management software was built for commercial cattle operations — minimum 500 head, designed for ranch managers, priced accordingly. Nothing for the dairy goat farmer managing 30–200 animals who needs to track individual FAMACHA scores, breeding dates, milk weights by doe, and withdrawal periods all in one place.
              </p>
              <p>
                GoatSteward is built on the same Next.js and Supabase stack as this website. I manage 80+ animals across eight breeds with it daily. It is the farm&apos;s operational backbone — not a side project that got launched, but software that gets tested in the barn every morning.
              </p>
              <p>
                The name comes from the same place as this farm&apos;s philosophy: stewardship. Responsible care for what&apos;s in your charge. <em>Software built by a steward, for stewards.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum mb-3">What It Does</p>
          <h2 className="text-3xl font-bold text-forest mb-12">536 Functions Across 5 Core Areas</h2>

          <div className="space-y-4">
            {features.map((f) => (
              <details key={f.category} className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-bold text-forest group-hover:text-plum transition-colors">
                    {f.category}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-forest-600">{f.items.length} features</span>
                    <span className="text-forest-600 group-open:rotate-180 transition-transform text-lg">↓</span>
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                  <ul className="mt-3 space-y-2">
                    {f.items.map((item) => (
                      <li key={item} className="flex gap-3 text-base text-forest-600">
                        <span className="text-plum shrink-0 mt-1">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum mb-3">Who It&apos;s For</p>
              <h2 className="text-3xl font-bold text-forest mb-6">Small Dairy Goat Operations</h2>
              <div className="space-y-3">
                {[
                  "Homesteaders milking 2–20 does",
                  "Small commercial dairies (20–200 animals)",
                  "Breeders tracking pedigree and production",
                  "4-H families managing livestock projects",
                  "Operations pursuing raw milk licensing",
                  "Anyone who needs real records, not spreadsheets",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="text-plum font-bold mt-0.5">—</span>
                    <span className="text-forest-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum mb-3">Current Status</p>
              <h2 className="text-3xl font-bold text-forest mb-6">Active / Beta</h2>
              <p className="text-forest-600 leading-relaxed mb-4">
                GoatSteward is in active development and daily use at RiverHouse Dairy. The beta is available at goatsteward.com. Features are added based on what this farm actually needs — nothing ships that hasn&apos;t been tested in real barn conditions.
              </p>
              <p className="text-forest-600 leading-relaxed mb-8">
                Future Steward-family products under development include SheepSteward, DairySteward (multi-species professional dairy), and MilkSteward (post-parlor processing).
              </p>
              <a
                href="https://goatsteward.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-plum px-6 py-3 text-base font-bold text-white hover:bg-plum-600 transition-colors"
              >
                Visit goatsteward.com →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Steward family */}
      <section className="bg-forest">
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum-200 mb-3">The Steward Family</p>
          <h2 className="text-2xl font-bold text-white mb-8">Software That Grows With the Farm</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "GoatSteward", domain: "goatsteward.com", status: "Active / Beta", statusColor: "text-green-300 bg-green-900/40" },
              { name: "SheepSteward", domain: "sheepsteward.com", status: "Planned", statusColor: "text-cream-300 bg-white/10" },
              { name: "DairySteward", domain: "dairysteward.com", status: "Planned", statusColor: "text-cream-300 bg-white/10" },
              { name: "MilkSteward", domain: "milksteward.com", status: "Concept", statusColor: "text-cream-300 bg-white/10" },
            ].map((p) => (
              <div key={p.name} className="rounded-xl bg-white/10 p-5">
                <p className="font-bold text-white">{p.name}</p>
                <p className="text-cream-300 text-sm mt-1">{p.domain}</p>
                <span className={`inline-block mt-3 text-xs font-bold px-2 py-1 rounded-full ${p.statusColor}`}>
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
