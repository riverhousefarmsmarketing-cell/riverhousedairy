import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Goat Myths Debunked | RiverHouse Dairy",
  description: "14 common goat myths with evidence-based reality checks. From RiverHouse Dairy in Chehalis, Washington.",
};

const myths = [
  {
    myth: "Goats will eat anything.",
    reality: "Goats are browsers, not grazers — and actually quite picky.",
    detail: "Goats prefer to browse leaves, shrubs, bark, and weeds at head height. They're far more selective than cattle or sheep and will often starve before eating moldy or contaminated feed. They will investigate nearly everything, but 'investigates' ≠ 'eats.'",
  },
  {
    myth: "Goats don't need shelter.",
    reality: "Goats lack lanolin and are highly vulnerable to rain and cold.",
    detail: "Unlike sheep, goats have no waterproofing in their coat. A soaked goat in cold weather loses body temperature rapidly. Pneumonia is a leading cause of death in goats kept without adequate shelter. At minimum: a three-sided structure that keeps them dry.",
  },
  {
    myth: "Baking soda prevents bloat.",
    reality: "Free-choice baking soda actually disrupts rumen pH.",
    detail: "The rumen needs a slightly acidic pH to function properly. Offering baking soda free-choice doesn't prevent bloat — and goats may overconsume it, pushing pH too high and reducing digestive efficiency. Address the cause of bloat (diet, grazing management) instead.",
  },
  {
    myth: "Apple cider vinegar cures everything.",
    reality: "No scientific evidence supports therapeutic claims for ACV.",
    detail: "ACV may slightly encourage water intake when added to water. It does not deworm, prevent mastitis, balance pH, improve fertility, or treat disease. It's not harmful in reasonable amounts, but it's not medicine.",
  },
  {
    myth: "Deworm on a schedule (every 30–60 days).",
    reality: "Calendar deworming is the primary driver of anthelmintic resistance.",
    detail: "Treating animals that don't need it selects for resistant parasites and eliminates the susceptible refugia population. Use FAMACHA scoring + fecal egg counts to determine which animals need treatment, not the calendar.",
  },
  {
    myth: "Copper is toxic to goats.",
    reality: "Copper deficiency is the far more common problem.",
    detail: "Copper toxicity is rare in goats unless deliberately overdosed. Goats need significantly more copper than sheep. Deficiency causes faded coat, 'fish tail' (tip of tail loses hair), poor hoof quality, anemia, and reduced immune function. Feed goat-specific minerals, not sheep minerals.",
  },
  {
    myth: "Goats and sheep can share everything.",
    reality: "Goats and sheep have fundamentally different mineral and parasite needs.",
    detail: "Sheep cannot tolerate the copper levels goats require — sheep minerals will cause copper deficiency in goats, and goat minerals can cause copper toxicity in sheep. Parasite resistance and immune response also differ. They need separate mineral programs.",
  },
  {
    myth: "All goat milk tastes the same.",
    reality: "Breed, individual genetics, feed, and freshness have enormous impact.",
    detail: "Nigerian Dwarf milk averages 6–10% butterfat — rich, sweet, and creamy. Saanen milk averages 2.5–3.5% — thinner and milder. Off-flavor ('goaty') milk is almost always a management issue: bucks too close, delayed chilling, diet, or mastitis — not an inherent trait of goat milk.",
  },
  {
    myth: "Alfalfa causes urinary calculi in wethers.",
    reality: "The Ca:P ratio is the issue, not alfalfa specifically.",
    detail: "Urinary calculi form when phosphorus exceeds calcium in the diet. Alfalfa is high in calcium, which is actually protective. The real culprit is grain-heavy diets (high phosphorus) combined with inadequate water intake. Maintain 2:1 Ca:P ratio and ensure fresh water always.",
  },
  {
    myth: "Disbudding is cruel and unnecessary.",
    reality: "Horns cause serious injuries to herdmates, handlers, and fencing.",
    detail: "Horned goats injure other animals and people, often unintentionally. They get heads caught in fencing and panels. Proper disbudding done young (under 2 weeks) with appropriate anesthesia and technique is far less traumatic than managing injuries from horns for the animal's lifetime.",
  },
  {
    myth: "Goats are low-maintenance animals.",
    reality: "Goats require daily observation and active management.",
    detail: "Goats need: daily FAMACHA checks during parasite season, hoof trimming every 4–8 weeks, annual CDT vaccination, regular fecal egg counts, individual health monitoring, and a thought-out mineral program. They hide illness well — waiting until symptoms are obvious often means the animal is critically ill.",
  },
  {
    myth: "You can keep just one goat.",
    reality: "Goats are herd animals. A single goat is a stressed goat.",
    detail: "Isolation causes chronic stress, which compromises immune function, increases susceptibility to disease, and causes behavioral problems. The absolute minimum is two goats. If you have one goat and a crisis, you'll have a very difficult time getting it to cooperate with any handling.",
  },
  {
    myth: "Nigerian Dwarfs don't produce enough milk to be worth milking.",
    reality: "Nigerian Dwarfs produce 1–2 quarts daily with the highest butterfat of any dairy breed.",
    detail: "At 6–10% butterfat, Nigerian Dwarf milk makes exceptional cheese, soap, and yogurt — qualities that larger volume breeds can't match. For a home dairy, two Nigerian Dwarfs can supply more usable dairy product than one larger breed doe.",
  },
  {
    myth: "Bottle babies make better pets than dam-raised kids.",
    reality: "Bottle babies often develop behavior problems. Dam-raised kids can socialize just as well.",
    detail: "Bottle babies that aren't handled carefully become 'lap goats' — animals that have no sense of personal space, push, rear up on people, and are difficult to manage as adults. Dam-raised kids with regular gentle handling socialize just as well and have better rumen development from dam colostrum.",
  },
];

export default function MythsPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-3xl px-8 sm:px-12 py-14">
          <nav className="mb-6 text-sm text-forest-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/health" className="hover:text-white transition-colors">Goat Health</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Myths Debunked</span>
          </nav>
          <h1 className="text-4xl font-bold text-white">Goat Myths Debunked</h1>
          <p className="mt-3 text-lg text-cream-300">14 things everyone says about goats that aren&apos;t true — and what the evidence actually shows.</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-8 sm:px-12 py-12 space-y-4">
        {myths.map((m, i) => (
          <details key={i} className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
            <summary className="flex items-start gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
              <div className="mt-0.5 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <span className="text-red-600 text-xs font-bold">✕</span>
              </div>
              <div className="flex-1">
                <p className="font-bold text-forest text-base">MYTH: {m.myth}</p>
                <p className="text-plum font-semibold text-sm mt-1">REALITY: {m.reality}</p>
              </div>
              <span className="text-forest-600 group-open:rotate-180 transition-transform text-lg shrink-0">↓</span>
            </summary>
            <div className="px-6 pb-6 pt-0 border-t border-gray-100">
              <p className="text-base text-forest-600 leading-relaxed pt-4">{m.detail}</p>
            </div>
          </details>
        ))}

        <div className="mt-10 pt-6 border-t border-gray-100 text-xs text-forest-600 leading-relaxed">
          <strong className="text-forest">Note:</strong> These are general guidelines based on current best practices. Always consult with a veterinarian familiar with small ruminants for specific health decisions.
        </div>
      </div>
    </>
  );
}
