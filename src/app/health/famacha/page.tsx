import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAMACHA Guide | RiverHouse Dairy",
  description: "How to use FAMACHA scoring to manage barber pole worm in goats and sheep. Visual guide, scoring thresholds, and action steps from RiverHouse Dairy.",
};

const scores = [
  { score: 1, label: "Optimal", color: "bg-red-600", textColor: "text-white", mucosal: "Deep red", action: "No treatment needed", actionColor: "text-green-700 bg-green-50 border-green-200" },
  { score: 2, label: "Acceptable", color: "bg-red-400", textColor: "text-white", mucosal: "Red-pink", action: "No treatment — monitor", actionColor: "text-green-700 bg-green-50 border-green-200" },
  { score: 3, label: "Borderline", color: "bg-pink-400", textColor: "text-white", mucosal: "Pink", action: "Recheck in 1 week. Treat if borderline or lower on recheck.", actionColor: "text-amber-700 bg-amber-50 border-amber-200" },
  { score: 4, label: "Anemic", color: "bg-pink-200", textColor: "text-gray-800", mucosal: "Pink-white", action: "Deworm immediately. Recheck in 2 weeks.", actionColor: "text-orange-700 bg-orange-50 border-orange-200" },
  { score: 5, label: "Severe Anemia", color: "bg-gray-100", textColor: "text-gray-800", mucosal: "White", action: "EMERGENCY. Deworm immediately. Supportive care. May need iron or blood transfusion.", actionColor: "text-red-700 bg-red-50 border-red-200" },
];

export default function FamachaPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-3xl px-8 sm:px-12 py-14">
          <nav className="mb-6 text-sm text-forest-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/health" className="hover:text-white transition-colors">Goat Health</Link>
            <span className="mx-2">›</span>
            <span className="text-white">FAMACHA Guide</span>
          </nav>
          <h1 className="text-4xl font-bold text-white">FAMACHA Scoring Guide</h1>
          <p className="mt-3 text-lg text-cream-300 max-w-2xl leading-relaxed">
            The most important thing you can do for your goats is check their eyelids. FAMACHA scoring saves lives and prevents dewormer resistance.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-8 sm:px-12 py-12 space-y-12">

        {/* What is FAMACHA */}
        <section>
          <h2 className="text-2xl font-bold text-forest">What Is FAMACHA?</h2>
          <div className="mt-4 space-y-4 text-base text-forest-600 leading-relaxed">
            <p>
              FAMACHA is a method for detecting anemia in goats and sheep caused by barber pole worm
              (<em>Haemonchus contortus</em>). By checking the color of the lower eyelid membrane, you can
              assess how much blood the animal is losing — without any lab equipment.
            </p>
            <p>
              Barber pole worm is the #1 killer of goats in temperate climates. It feeds on blood in the
              stomach and can kill an animal before visible signs appear. FAMACHA gives you an early
              warning system that works.
            </p>
            <p>
              The goal is <strong className="text-forest">targeted selective treatment</strong> — only deworm animals that
              need it, based on their individual score. This slows resistance development, which is the
              #1 threat to long-term flock health.
            </p>
          </div>
        </section>

        {/* How to Score */}
        <section>
          <h2 className="text-2xl font-bold text-forest">How to Score</h2>
          <div className="mt-6 space-y-4">
            {[
              { step: "1", title: "Restrain the animal", detail: "Hold the animal still with its head tilted slightly upward toward natural light. Do not use artificial light — it distorts color." },
              { step: "2", title: "Expose the lower eyelid", detail: "Use your thumb to gently pull the lower eyelid down and outward. You're looking at the conjunctival mucous membrane — the inner pink/red tissue." },
              { step: "3", title: "Compare to the FAMACHA card", detail: "Match the color of the exposed membrane to the FAMACHA scoring card (1–5). If you're between scores, round up (more conservative = safer)." },
              { step: "4", title: "Record and act", detail: "Record the score with the date. Score 1–2: no action. Score 3: recheck in 1 week. Score 4: deworm. Score 5: emergency treatment + support." },
            ].map(s => (
              <div key={s.step} className="flex gap-5">
                <div className="h-9 w-9 rounded-full bg-forest text-white font-bold flex items-center justify-center shrink-0 text-base">
                  {s.step}
                </div>
                <div className="pt-1">
                  <p className="font-bold text-forest">{s.title}</p>
                  <p className="text-forest-600 text-base mt-1 leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Score Reference */}
        <section>
          <h2 className="text-2xl font-bold text-forest mb-6">Score Reference</h2>
          <div className="space-y-3">
            {scores.map(s => (
              <div key={s.score} className="rounded-xl border border-gray-200 bg-white p-5 flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex items-center gap-4 shrink-0">
                  <div className={`h-12 w-12 rounded-full ${s.color} flex items-center justify-center font-bold text-xl ${s.textColor} border border-gray-200`}>
                    {s.score}
                  </div>
                  <div>
                    <p className="font-bold text-forest text-lg">{s.label}</p>
                    <p className="text-sm text-forest-600">{s.mucosal}</p>
                  </div>
                </div>
                <div className={`flex-1 rounded-lg border px-4 py-3 text-sm font-medium ${s.actionColor}`}>
                  {s.action}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* When to score */}
        <section>
          <h2 className="text-2xl font-bold text-forest mb-4">When to Score</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { trigger: "Every 2 weeks", context: "During peak parasite season (spring through fall in the PNW)" },
              { trigger: "After heavy rain", context: "Parasite larvae thrive in wet conditions — risk spikes immediately" },
              { trigger: "Before deworming", context: "Establish baseline. Never deworm without checking the score first." },
              { trigger: "2 weeks after deworming", context: "Confirm treatment was effective. If score unchanged, suspect resistance." },
              { trigger: "Late pregnancy", context: "Does are immune-suppressed pre-kidding. Parasite load spikes." },
              { trigger: "Any animal off feed", context: "FAMACHA is your first check for any goat showing signs of illness." },
            ].map(w => (
              <div key={w.trigger} className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="font-bold text-forest text-sm">{w.trigger}</p>
                <p className="text-sm text-forest-600 mt-1">{w.context}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAMACHA Training */}
        <section className="rounded-xl bg-gray-50 border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-forest">Get FAMACHA Certified</h2>
          <p className="mt-3 text-forest-600 leading-relaxed">
            FAMACHA certification is available through your state&apos;s Extension service. The physical
            scoring card is only available to certified producers — you must attend a training to get
            one. It&apos;s a half-day course and worth every minute.
          </p>
          <p className="mt-3 text-forest-600">
            In Washington State, contact the WSU Extension office in your county.
          </p>
        </section>

        {/* GoatSteward CTA */}
        <div className="rounded-xl bg-forest text-white p-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div>
            <p className="font-bold text-white">Track FAMACHA scores in GoatSteward</p>
            <p className="text-cream-300 text-sm mt-1">See trends across your whole herd. Catch problems early. Make data-driven deworming decisions.</p>
          </div>
          <Link href="/tools/goatsteward"
            className="shrink-0 rounded-lg bg-plum px-5 py-3 text-sm font-bold text-white hover:bg-plum-600 transition-colors">
            GoatSteward →
          </Link>
        </div>

        <div className="text-xs text-forest-600 leading-relaxed">
          <strong className="text-forest">Medical Disclaimer:</strong> This information is for educational purposes only. FAMACHA scoring is a management tool, not a veterinary diagnosis. Always consult your vet for treatment decisions.
        </div>
      </div>
    </>
  );
}
