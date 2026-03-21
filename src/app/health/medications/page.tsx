import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Goat Medication Reference | RiverHouse Dairy",
  description: "Dewormers, antibiotics, emergency medications for goats — with dosing, routes, and withdrawal times. From RiverHouse Dairy in Chehalis, Washington.",
};

const dewormers = [
  { generic: "Ivermectin", brand: "Ivomec", route: "Oral 0.4mg/kg", meatWD: "11 days", milkWD: "9 days", note: "Widespread resistance in many regions. Use FAMACHA first." },
  { generic: "Moxidectin", brand: "Cydectin", route: "Oral 0.4mg/kg", meatWD: "14 days", milkWD: "8 days", note: "More effective than ivermectin in resistant populations." },
  { generic: "Levamisole", brand: "Prohibit", route: "Oral 12mg/kg", meatWD: "3 days", milkWD: "3 days", note: "Narrow safety margin — do NOT overdose. Fast-acting." },
  { generic: "Albendazole", brand: "Valbazen", route: "Oral 10mg/kg", meatWD: "7 days", milkWD: "4 days", note: "NOT safe in does during first 45 days of pregnancy." },
  { generic: "Fenbendazole", brand: "SafeGuard", route: "Oral 10mg/kg", meatWD: "8 days", milkWD: "4 days", note: "Use 3x the cattle dose for goats. 3-day treatment protocol." },
];

const antibiotics = [
  { generic: "Oxytetracycline", brand: "LA-200", route: "IM/SQ 9mg/kg", meatWD: "28 days", milkWD: "96 hrs", note: "Long-acting. Inject in neck muscle. Broad spectrum." },
  { generic: "Penicillin G", brand: "Pen G", route: "IM/SQ 22,000 IU/kg", meatWD: "10 days", milkWD: "48 hrs", note: "Twice daily minimum. 5-day treatment course." },
  { generic: "Florfenicol", brand: "Nuflor", route: "IM 20mg/kg", meatWD: "28 days", milkWD: "36 hrs", note: "Respiratory infections. Single-injection option available." },
  { generic: "Tulathromycin", brand: "Draxxin", route: "SQ 2.5mg/kg", meatWD: "18 days", milkWD: "Check label", note: "Single dose, long-acting. Respiratory disease." },
  { generic: "Trimethoprim-Sulfa", brand: "SMZ-TMP", route: "Oral/IM", meatWD: "10 days", milkWD: "4 days", note: "Coccidiosis treatment. Broad-spectrum bacteriostatic." },
];

const emergency = [
  { med: "CD Antitoxin", use: "Enterotoxemia treatment", notes: "Give IMMEDIATELY if enterotoxemia suspected. Often fatal despite treatment. CDT vaccine prevents it." },
  { med: "Epinephrine 1:1000", use: "Anaphylaxis", notes: "1mL per 100 lbs IM or SQ. Keep on hand ANY time you give injections. Have it drawn and ready." },
  { med: "Thiamine HCl 500mg/mL", use: "Goat polio (polioencephalomalacia)", notes: "10mg/kg every 6 hours. Must be 500mg/mL concentration — standard B Complex is NOT enough." },
  { med: "Calcium Gluconate 23%", use: "Milk fever (hypocalcemia)", notes: "Warm to body temp. Give slowly SQ or diluted IV. Response usually rapid. Down doe can die quickly." },
  { med: "Propylene Glycol", use: "Pregnancy toxemia/ketosis", notes: "60mL twice daily orally. Start at first signs — sweet breath, weakness in late-pregnant does." },
  { med: "Activated Charcoal", use: "Poisoning", notes: "1–3 g/kg mixed with water. Must be given within 1–2 hours of toxin ingestion to be effective." },
  { med: "Ammonium Chloride", use: "Urinary calculi prevention/treatment", notes: "Acidifies urine. Add to feed/minerals for at-risk males. Both treatment and long-term prevention." },
  { med: "Banamine (Flunixin)", use: "Pain, fever, inflammation", notes: "Anti-inflammatory and pain relief. Colic, fever, musculoskeletal pain. Prescription required." },
  { med: "Dexamethasone", use: "Inflammation, brain swelling, labor induction", notes: "Use with thiamine for goat polio. Also induces labor in late pregnancy. Rx required." },
  { med: "CMPK / Calcium Gel", use: "Oral calcium supplementation", notes: "Oral calcium drench as follow-up to injectable calcium. Prevention in high-risk does at freshening." },
];

const supplements = [
  { name: "BoSe (Selenium + Vit E)", use: "White muscle disease prevention", notes: "PNW soils are selenium-deficient. Inject does pre-breeding and pre-kidding. Overdose is toxic." },
  { name: "Vitamin B Complex", use: "Stress support, appetite stimulation", notes: "NOT a treatment for goat polio — not enough thiamine concentration. Supportive use only." },
  { name: "Nutrdrench / Nutri-Boost", use: "Kidding support, weak kids", notes: "Oral energy drench for kids and does. Glucose, electrolytes, vitamins." },
  { name: "Probios / Probiotics", use: "Rumen support after antibiotics", notes: "Restore rumen flora after antibiotic treatment or off-feed episodes." },
  { name: "Electrolytes", use: "Dehydration from scours or illness", notes: "Oral or IV depending on severity. Kids with diarrhea dehydrate rapidly." },
];

export default function MedicationsPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-14">
          <nav className="mb-6 text-sm text-forest-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/health" className="hover:text-white transition-colors">Goat Health</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Medications</span>
          </nav>
          <h1 className="text-4xl font-bold text-white">Medication Reference</h1>
          <p className="mt-3 text-lg text-cream-300 max-w-2xl">
            Dosing, routes, and withdrawal times for goats. Note: goats are often extra-label — dosing differs from cattle labels.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-8 sm:px-12 py-12 space-y-14">

        {/* Dewormers */}
        <section>
          <h2 className="text-2xl font-bold text-forest mb-2">Dewormers</h2>
          <p className="text-forest-600 mb-6">Use FAMACHA scoring + fecal egg counts to determine need. Calendar deworming creates resistance.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-forest text-white">
                <tr>
                  {["Generic", "Brand", "Route/Dose", "Meat WD", "Milk WD", "Key Note"].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {dewormers.map((d, i) => (
                  <tr key={d.generic} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-forest">{d.generic}</td>
                    <td className="px-4 py-3 text-forest-600 italic">{d.brand}</td>
                    <td className="px-4 py-3 text-forest-600 font-mono text-xs">{d.route}</td>
                    <td className="px-4 py-3 text-forest-600">{d.meatWD}</td>
                    <td className="px-4 py-3 text-forest-600">{d.milkWD}</td>
                    <td className="px-4 py-3 text-forest-600 text-xs">{d.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Antibiotics */}
        <section>
          <h2 className="text-2xl font-bold text-forest mb-2">Antibiotics</h2>
          <p className="text-forest-600 mb-6">All are extra-label in goats. Consult your vet for appropriate selection and dosing for your situation.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-forest text-white">
                <tr>
                  {["Generic", "Brand", "Route/Dose", "Meat WD", "Milk WD", "Key Note"].map(h => (
                    <th key={h} className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {antibiotics.map((d, i) => (
                  <tr key={d.generic} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-forest">{d.generic}</td>
                    <td className="px-4 py-3 text-forest-600 italic">{d.brand}</td>
                    <td className="px-4 py-3 text-forest-600 font-mono text-xs">{d.route}</td>
                    <td className="px-4 py-3 text-forest-600">{d.meatWD}</td>
                    <td className="px-4 py-3 text-forest-600">{d.milkWD}</td>
                    <td className="px-4 py-3 text-forest-600 text-xs">{d.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Emergency Medications */}
        <section>
          <h2 className="text-2xl font-bold text-forest mb-2">Emergency &amp; Supportive Medications</h2>
          <p className="text-forest-600 mb-6">Keep these on hand. You will need them without warning.</p>
          <div className="space-y-3">
            {emergency.map(e => (
              <div key={e.med} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-48 shrink-0">
                    <p className="font-bold text-forest">{e.med}</p>
                    <p className="text-xs text-plum font-semibold mt-0.5">{e.use}</p>
                  </div>
                  <p className="text-sm text-forest-600 leading-relaxed">{e.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Supplements */}
        <section>
          <h2 className="text-2xl font-bold text-forest mb-6">Supplements &amp; Supportive Care</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {supplements.map(s => (
              <div key={s.name} className="rounded-xl border border-gray-200 bg-white p-5">
                <p className="font-bold text-forest">{s.name}</p>
                <p className="text-xs text-plum font-semibold mt-0.5">{s.use}</p>
                <p className="text-sm text-forest-600 mt-2 leading-relaxed">{s.notes}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-4 border-t border-gray-100 text-xs text-forest-600 leading-relaxed">
          <strong className="text-forest">Medical Disclaimer:</strong> This information is for educational purposes only. All medications should be used under veterinary guidance. Withdrawal times are guidelines — consult your vet and the product label for your specific situation.
        </div>
      </div>
    </>
  );
}
