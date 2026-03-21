import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Goat Care Guides | RiverHouse Dairy",
  description: "Kidding prep, seasonal care, nutrition by life stage, new goat owner checklist — from the barn at RiverHouse Dairy in Chehalis, Washington.",
};

const guides = [
  {
    id: "new-owner",
    title: "New Goat Owner Checklist",
    subtitle: "Before you bring them home",
    content: [
      {
        heading: "Before They Arrive",
        items: [
          "Fencing: minimum 4-foot woven wire or no-climb horse fence — not just barbed wire",
          "Shelter: three-sided structure minimum, dry bedding, draft-free but ventilated",
          "Separate quarantine area: new animals must be isolated for 30 days minimum",
          "Fresh water source that cannot tip over",
          "Mineral feeder: loose goat-specific minerals, never sheep minerals",
          "Basic medical supplies: thermometer, syringes, needles, epinephrine, electrolytes",
          "Identify a vet before you need one — not all vets see goats",
        ],
      },
      {
        heading: "First-Day Health Check",
        items: [
          "Temperature: normal is 101.5–104°F. Know your baseline.",
          "Eyes: bright and clear, no discharge",
          "Hooves: check for overgrowth, rot, or softness",
          "Body condition score: you should feel ribs but not see them prominently",
          "FAMACHA score: check eyelid color and record it as your baseline",
          "Fecal egg count: send a fresh sample to a vet lab within first week",
        ],
      },
      {
        heading: "First-Month Protocol",
        items: [
          "CDT vaccination if not current (2 doses 3–4 weeks apart for unvaccinated animals)",
          "BoSe injection if selenium-deficient region (WA soils are deficient)",
          "Hoof trim if needed",
          "Hold off on introducing to main herd until quarantine period complete",
          "Observe eating, drinking, social behavior daily",
        ],
      },
    ],
  },
  {
    id: "kidding",
    title: "Kidding Preparation Guide",
    subtitle: "The 30 days before, the day of, the week after",
    content: [
      {
        heading: "Kidding Kit (Have This Ready)",
        items: [
          "OB lubricant",
          "Iodine 7% solution for navel dipping",
          "Dental floss (for tying off umbilicus if needed)",
          "Bulb syringe for clearing airways",
          "Clean towels (you will need more than you think)",
          "Heat lamp or heating pad for cold weather",
          "Colostrum — fresh from a CAE-negative doe, or commercial powdered",
          "Pritchard nipple and bottle for weak kids",
          "Propylene glycol for doe if she goes off feed post-kidding",
          "Calcium gluconate for milk fever risk does",
          "Oxytocin (Rx) — talk to your vet beforehand",
          "Your vet's emergency number written somewhere visible",
        ],
      },
      {
        heading: "Signs of Labor",
        items: [
          "Ligaments on either side of tail head soften and disappear (12–24 hours before kidding)",
          "Udder fills rapidly",
          "Discharge changes from thick white to clear/straw colored",
          "Restlessness, pawing, getting up and down repeatedly",
          "Vocalization, talking to belly",
          "Active labor: contractions visible, doe pushing",
        ],
      },
      {
        heading: "Normal vs. Intervene",
        items: [
          "NORMAL: First kid within 30 minutes of active pushing",
          "NORMAL: Water sac visible, then two front feet and nose",
          "INTERVENE: Pushing hard for 30+ minutes with no progress",
          "INTERVENE: Head back (only feet visible, no nose)",
          "INTERVENE: One leg back",
          "INTERVENE: Doe in distress or exhausted",
          "Call your vet for anything you're uncertain about — do not wait",
        ],
      },
      {
        heading: "Newborn Kid Care",
        items: [
          "Clear nose and mouth immediately — wipe, don't let doe eat membranes off face",
          "Colostrum within first 2 hours is critical — 10% of body weight in first 24 hours",
          "Dip navel in 7% iodine immediately — do not skip this",
          "Check for extra teats on does (teat defects are heritable)",
          "Check for hard palate (cleft palate = cannot nurse, will not thrive)",
          "Dry and warm if temperatures are below 50°F",
          "Record birth weight, parents, and birth date",
        ],
      },
    ],
  },
  {
    id: "seasonal-pnw",
    title: "Seasonal Care — Pacific Northwest",
    subtitle: "Lewis County and western WA specific",
    content: [
      {
        heading: "Spring (March–May) — Parasite Season Starts",
        items: [
          "Begin FAMACHA scoring every 2 weeks — barber pole worm larvae become active",
          "Do NOT deworm everything reflexively — test first with fecal egg count",
          "Watch late-pregnant does for pregnancy toxemia as they approach their due date",
          "Mud management: hooves rot in wet PNW springs. Keep bedding clean and dry.",
          "Pasture management: avoid overgrazing, especially in wet conditions",
          "Kidding season: be prepared for cold, wet nights in early spring",
        ],
      },
      {
        heading: "Summer (June–August) — Peak Production",
        items: [
          "Heat stress: goats tolerate heat poorly. Ensure shade and cool fresh water always.",
          "Peak parasite pressure: FAMACHA every 2 weeks minimum",
          "Fly control: flies spread pinkeye and mastitis. Face flies are a major problem.",
          "Hoof trimming: growth accelerates in summer",
          "Milk quality: rapid chilling becomes even more critical in summer heat",
          "Watch for signs of dehydration in hot weather — especially lactating does",
        ],
      },
      {
        heading: "Fall (September–November) — Breeding Season",
        items: [
          "Buck introductions: does cycle September–March (some breeds year-round)",
          "Pre-breeding body condition: does should be in good condition at breeding",
          "CDT boosters for does being bred if not current",
          "Begin increasing nutrition for bred does in last 6 weeks of pregnancy",
          "Parasite monitoring continues until consistent frost",
          "Prepare shelter for cold rain — fall in the PNW is wet, not just cold",
        ],
      },
      {
        heading: "Winter (December–February) — Cold Management",
        items: [
          "Shelter is non-negotiable in PNW winters — goats do not handle wet-cold",
          "Increase hay: energy needs rise 20–30% in cold weather",
          "Water: goats dramatically reduce intake when water is very cold — use a heater",
          "Bedding depth: deep dry bedding provides warmth. Wet bedding causes health problems.",
          "Watch for respiratory illness: drafty shelters + temperature swings = pneumonia",
          "Late-pregnancy doe monitoring: pregnancy toxemia risk increases",
        ],
      },
    ],
  },
  {
    id: "nutrition-lactating",
    title: "Nutrition: Lactating Does",
    subtitle: "Feeding the milking doe right",
    content: [
      {
        heading: "Core Principles",
        items: [
          "Forage first: high-quality hay is the foundation of the lactating doe's diet",
          "Energy needs peak at 3–4 weeks post-freshening — this is when deficits cause problems",
          "Grain supplementation supports production but must be introduced gradually",
          "Sudden diet changes in freshened does cause digestive upset and production drops",
          "Body condition should be maintained between 2.5–3.5 throughout lactation",
        ],
      },
      {
        heading: "Calcium Management",
        items: [
          "Heavy milkers pull calcium faster than the body can mobilize it",
          "Watch for milk fever signs: weakness, cold extremities, down doe in early lactation",
          "DCAD (dietary cation-anion difference) nutrition in late dry period helps prevent it",
          "Avoid excess calcium supplementation before freshening — it suppresses the body's mobilization response",
          "Keep CMPK or calcium gluconate on hand at all times for fresh does",
        ],
      },
      {
        heading: "Goat-Specific Minerals",
        items: [
          "Never use sheep minerals for goats — copper levels are too low",
          "Copper is often deficient in PNW — watch for fish tail, faded coat, poor hoof quality",
          "BoSe injection pre-kidding: Washington soils are selenium deficient",
          "Loose minerals always available — not block, which provides inadequate intake",
          "Zinc supports hoof quality and immune function",
        ],
      },
    ],
  },
  {
    id: "nutrition-bucks",
    title: "Nutrition: Bucks & Wethers",
    subtitle: "The urinary calculi prevention guide",
    content: [
      {
        heading: "The Single Most Important Rule",
        items: [
          "Maintain 2:1 calcium to phosphorus ratio in all male goat diets",
          "High-grain diets with high phosphorus are the #1 cause of urinary calculi",
          "Fresh water always available — dehydration dramatically increases stone risk",
          "Ammonium chloride in feed or minerals acidifies urine and prevents crystal formation",
          "Never feed males the same grain ration as milking does",
        ],
      },
      {
        heading: "Signs of Urinary Blockage (Emergency)",
        items: [
          "Straining to urinate with little or no output",
          "Crying out, kicking at belly, hunching up",
          "Dribbling urine or bloody discharge at sheath",
          "Complete blockage is fatal within 24–48 hours — call your vet immediately",
          "Do not wait to see if it resolves — it will not",
        ],
      },
      {
        heading: "Rut Season",
        items: [
          "Bucks often go off feed completely during rut — watch body condition",
          "Provide high-quality hay to maintain weight",
          "Separate bucks from does except during planned breeding — constant exposure exhausts them",
          "Urinary risk increases during rut due to reduced water intake",
        ],
      },
    ],
  },
];

export default function GuidesPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-4xl px-8 sm:px-12 py-14">
          <nav className="mb-6 text-sm text-forest-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/health" className="hover:text-white transition-colors">Goat Health</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Care Guides</span>
          </nav>
          <h1 className="text-4xl font-bold text-white">Care Guides</h1>
          <p className="mt-3 text-lg text-cream-300 max-w-2xl">Practical management from the barn at RiverHouse Dairy. Lewis County, Washington context throughout.</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-8 sm:px-12 py-12">
        {/* Guide nav */}
        <div className="flex flex-wrap gap-2 mb-12">
          {guides.map(g => (
            <a key={g.id} href={`#${g.id}`}
              className="text-sm font-medium text-forest border border-forest-200 bg-white rounded-full px-4 py-1.5 hover:bg-forest hover:text-white transition-colors">
              {g.title}
            </a>
          ))}
        </div>

        <div className="space-y-16">
          {guides.map(guide => (
            <section key={guide.id} id={guide.id} className="scroll-mt-24">
              <div className="mb-6 pb-4 border-b-2 border-forest">
                <h2 className="text-2xl font-bold text-forest">{guide.title}</h2>
                <p className="text-forest-600 mt-1">{guide.subtitle}</p>
              </div>
              <div className="space-y-8">
                {guide.content.map(section => (
                  <div key={section.heading}>
                    <h3 className="text-base font-bold text-forest mb-3 flex items-center gap-2">
                      <span className="h-1 w-4 bg-plum rounded-full" />
                      {section.heading}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-base text-forest-600 leading-relaxed">
                          <span className="text-plum shrink-0 mt-1 text-sm">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-gray-100 text-xs text-forest-600 leading-relaxed">
          <strong className="text-forest">Medical Disclaimer:</strong> These guides represent general best practices for goat management. Always consult a licensed veterinarian for medical decisions specific to your animals.
        </div>
      </div>
    </>
  );
}
