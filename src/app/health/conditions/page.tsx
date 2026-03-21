import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Goat Health Conditions | RiverHouse Dairy",
  description: "15+ goat health conditions with symptoms, treatment protocols, emergency flags, and prevention — from RiverHouse Dairy in Chehalis, Washington.",
};

const conditions = [
  {
    name: "Barber Pole Worm (Haemonchus contortus)",
    category: "Parasitic",
    severity: "emergency",
    emergency: true,
    emergencyText: "FAMACHA scores 4–5 require immediate deworming. May need blood transfusion.",
    symptoms: ["Pale white eyelids (FAMACHA 4–5)", "Lethargy, weakness", "Bottle jaw (fluid under chin)", "Weight loss", "Rough coat", "Death if untreated"],
    description: "The #1 killer of goats in warm climates. A blood-sucking stomach worm that causes severe anemia. Invisible from the outside until the animal is critically ill.",
    treatment: "FAMACHA score 4: deworm immediately. Score 5: deworm + supportive care, consider iron supplementation or transfusion. Use targeted selective treatment based on FAMACHA, not calendar schedules.",
    prevention: "FAMACHA scoring every 2 weeks during peak season. Rotational grazing. Fecal egg counts. Do not rotate dewormers on a schedule.",
    medications: ["Moxidectin (Cydectin)", "Levamisole (Prohibit)", "Albendazole (Valbazen)"],
    vetRequired: true,
  },
  {
    name: "Enterotoxemia (Overeating Disease)",
    category: "Bacterial",
    severity: "emergency",
    emergency: true,
    emergencyText: "Often fatal before treatment is possible. CDT vaccine is essential prevention.",
    symptoms: ["Sudden death in well-fed animals", "Bloating", "Convulsions", "Crying out in pain", "Diarrhea (sometimes bloody)", "Found dead with no prior signs"],
    description: "Caused by Clostridium perfringens types C & D. Triggered by sudden diet changes, overeating grain, or lush pasture. Toxins overwhelm the system rapidly.",
    treatment: "CD Antitoxin immediately if suspected. Supportive care. Treatment is often too late — prevention is everything.",
    prevention: "CDT vaccination is mandatory. Gradual diet transitions. Never sudden access to grain or lush pasture.",
    medications: ["CD Antitoxin (treatment)", "CDT Vaccine (prevention)"],
    vetRequired: true,
  },
  {
    name: "Bloat",
    category: "Digestive",
    severity: "emergency",
    emergency: true,
    emergencyText: "Left side tight like a drum = emergency. Fatal within hours without treatment.",
    symptoms: ["Left side visibly distended and tight", "Goat in obvious distress", "Reluctance to move", "Teeth grinding", "Kicking at belly", "Labored breathing"],
    description: "Trapped gas in the rumen that cannot be released naturally. Frothy bloat (legumes, lush grass) is most common. Free gas bloat from obstruction is also possible.",
    treatment: "Walk the animal. Drench with 60–90ml vegetable or mineral oil to break up froth. Stomach tube if possible. Trocar as absolute last resort. Keep head elevated.",
    prevention: "Avoid sudden access to lush legume pasture. Fill with dry hay before turnout. Gradual pasture transitions.",
    medications: ["Mineral oil (drench)", "Simethicone", "Bloat release products"],
    vetRequired: true,
  },
  {
    name: "Pregnancy Toxemia (Ketosis)",
    category: "Metabolic",
    severity: "emergency",
    emergency: true,
    emergencyText: "Late-pregnancy does with multiples. Sweet breath, weakness = act now.",
    symptoms: ["Sweet/acetone smell on breath", "Progressive weakness", "Reluctance to eat", "Separation from herd", "Muscle tremors", "Blindness in severe cases"],
    description: "Energy deficit in late pregnancy, most common in does carrying triplets or quads. Body breaks down fat faster than it can process it, leading to toxic ketone buildup.",
    treatment: "Propylene glycol 60ml orally twice daily. Dextrose IV in severe cases. Increase energy density of feed. May require emergency C-section if unresponsive.",
    prevention: "Adequate calories in final 6 weeks of pregnancy. Body condition score management. Ultrasound to know how many fetuses the doe is carrying.",
    medications: ["Propylene glycol", "Dextrose (IV)"],
    vetRequired: true,
  },
  {
    name: "Hypocalcemia (Milk Fever)",
    category: "Metabolic",
    severity: "emergency",
    emergency: true,
    emergencyText: "Heavy milkers in early lactation. Down doe with cold ears — act immediately.",
    symptoms: ["Weakness, wobbly gait", "Down and unable to rise", "Cold extremities", "Muscle tremors", "Decreased rumen sounds", "Glazed expression"],
    description: "Sudden calcium drop at peak lactation demand. More common in heavy producers and older does. Milk production pulls calcium faster than the body can mobilize it.",
    treatment: "Calcium gluconate — warm to body temperature, give slowly SQ or diluted IV. Oral calcium gel as follow-up. Response is usually rapid.",
    prevention: "DCAD diet in late dry period. Avoid excess calcium before freshening. Monitor high producers closely in early lactation.",
    medications: ["Calcium gluconate (injectable)", "Oral calcium gel (CMPK)"],
    vetRequired: true,
  },
  {
    name: "Polioencephalomalacia (Goat Polio)",
    category: "Nutritional",
    severity: "emergency",
    emergency: true,
    emergencyText: "Stargazing, circling, blindness = thiamine injection NOW. B Complex alone is NOT enough.",
    symptoms: ["Stargazing (head tilted back)", "Circling", "Blindness", "Seizures", "Pressing head against wall", "Apparent blindness in bright light"],
    description: "Thiamine (B1) deficiency causing brain swelling. Often triggered by grain overload, sulfur excess, or thiaminase-producing feed. Can be confused with Listeriosis.",
    treatment: "Thiamine injectable 10mg/kg every 6 hours. Must use high-concentration thiamine (500mg/mL) — standard B Complex does not contain enough. Dexamethasone for brain swelling.",
    prevention: "Maintain healthy rumen function. Avoid sudden high-grain diets. Ensure adequate thiamine in diet.",
    medications: ["Thiamine HCl 500mg/mL (injectable)", "Dexamethasone"],
    vetRequired: true,
  },
  {
    name: "Urinary Calculi",
    category: "Metabolic",
    severity: "emergency",
    emergency: true,
    emergencyText: "Wethers and bucks only. Complete blockage is fatal in 24–48 hours.",
    symptoms: ["Straining to urinate with little/no output", "Crying, kicking at belly", "Distended abdomen", "Dribbling urine or bloody discharge", "Signs of pain"],
    description: "Mineral stones blocking the urethra. Almost exclusively males. Caused by high-phosphorus diets, improper Ca:P ratio, insufficient water intake.",
    treatment: "Ammonium chloride to acidify urine. Muscle relaxants. Surgery for complete blockage. Perineal urethrostomy in severe cases.",
    prevention: "Maintain 2:1 Ca:P ratio in all male feeds. Ammonium chloride preventively in wether diets. Fresh water always available. Avoid all-alfalfa diets for males.",
    medications: ["Ammonium chloride", "Muscle relaxants (Rx)"],
    vetRequired: true,
  },
  {
    name: "Coccidiosis",
    category: "Parasitic",
    severity: "high",
    emergency: false,
    symptoms: ["Watery or bloody diarrhea in kids", "Weight loss", "Dehydration", "Weakness", "Death in severe cases"],
    description: "Eimeria protozoa. Deadly in kids 3 weeks to 5 months. Adults are carriers but rarely show signs. Spreads rapidly in wet, crowded conditions.",
    treatment: "Corid (amprolium) or sulfa drugs (SMZ-TMP). Supportive electrolytes for dehydration. Treat entire group, not just sick kids.",
    prevention: "Clean, dry bedding. Avoid overcrowding. Prophylactic treatment of kids at high-risk times. Do not mix age groups.",
    medications: ["Corid (amprolium)", "Sulfa drugs (SMZ-TMP)"],
    vetRequired: false,
  },
  {
    name: "Mastitis",
    category: "Bacterial",
    severity: "high",
    emergency: false,
    symptoms: ["Hot, swollen, hard udder", "Off-color or clotted milk", "Milk with chunks or blood", "Doe reluctant to be milked", "Fever"],
    description: "Udder infection. Subclinical mastitis (invisible) reduces milk quality and production. Clinical mastitis requires immediate treatment. Gangrenous mastitis is a medical emergency.",
    treatment: "Intramammary antibiotics at each milking. Frequent stripping. California Mastitis Test to monitor. Gangrenous requires aggressive systemic antibiotics + possible teat amputation.",
    prevention: "Pre- and post-milking teat dip. Sanitized equipment. Dry cow therapy at end of lactation. California Mastitis Test monthly on milkers.",
    medications: ["Intramammary tubes (ToMORROW, Today)", "Systemic antibiotics for gangrenous"],
    vetRequired: false,
  },
  {
    name: "Pneumonia",
    category: "Respiratory",
    severity: "high",
    emergency: false,
    symptoms: ["Coughing", "Nasal discharge (clear to purulent)", "Fever (>104°F)", "Labored breathing", "Off feed", "Depression"],
    description: "Bacterial or viral lung infection. Common in kids and animals under stress. Poor ventilation is the #1 contributing factor.",
    treatment: "LA-200, Nuflor, or Draxxin based on severity. NSAIDs for fever/inflammation. Supportive care. Catch early — pneumonia progresses fast.",
    prevention: "Good ventilation (draft-free, not airtight). Reduce stress. Colostrum management in kids. Avoid wet bedding.",
    medications: ["LA-200 (oxytetracycline)", "Nuflor (florfenicol)", "Draxxin (tulathromycin)", "Banamine"],
    vetRequired: false,
  },
  {
    name: "CL (Caseous Lymphadenitis)",
    category: "Bacterial",
    severity: "moderate",
    emergency: false,
    symptoms: ["Firm abscesses at lymph nodes (jaw, shoulder, flank)", "Abscesses that rupture with thick white/green pus", "No other signs of illness"],
    description: "Corynebacterium pseudotuberculosis. Chronic, highly contagious. Spreads when abscesses rupture. Cannot be cured — can only be managed. Internal abscesses on organs are not visible.",
    treatment: "Isolate immediately. Lance and flush with iodine — do NOT let pus contaminate the environment. Dispose of materials. No cure exists.",
    prevention: "Test new animals before introduction. Consider CL vaccine (CaseBac) in endemic herds. Cull heavily infected animals.",
    medications: ["CaseBac vaccine (prevention)"],
    vetRequired: false,
  },
  {
    name: "CAE (Caprine Arthritis Encephalitis)",
    category: "Viral",
    severity: "moderate",
    emergency: false,
    symptoms: ["Swollen, hot joints (especially knees)", "Progressive arthritis", "Wasting despite eating", "Encephalitis in kids under 6 months", "Reduced milk production"],
    description: "Retrovirus. No cure. Spreads primarily through colostrum/milk from infected does to kids. Also spreads through shared needles and body fluids.",
    treatment: "No cure. Manage pain with NSAIDs. Cull positive animals that are suffering or spreading disease.",
    prevention: "Test annually. Pasteurize colostrum. Pull kids at birth and raise on pasteurized or commercial milk. Do not share needles.",
    medications: ["NSAIDs for pain management"],
    vetRequired: false,
  },
  {
    name: "Foot Rot",
    category: "Bacterial",
    severity: "moderate",
    emergency: false,
    symptoms: ["Severe lameness", "Foul odor from hoof", "Soft, wet tissue between toes", "Hoof wall separation in severe cases"],
    description: "Dichelobacter nodosus + Fusobacterium necrophorum combination. Extremely contagious. Spreads in wet conditions. Distinct from foot scald.",
    treatment: "Aggressive hoof trimming to expose infected tissue. Zinc sulfate or copper sulfate foot bath. Injectable antibiotics (penicillin, LA-200) in severe cases.",
    prevention: "Dry housing and pasture conditions. Zinc sulfate foot bath for new animals. Quarantine any limping animals immediately.",
    medications: ["Zinc sulfate foot bath", "Copper sulfate foot bath", "Penicillin", "LA-200"],
    vetRequired: false,
  },
  {
    name: "Lice & Mites",
    category: "Parasitic",
    severity: "low",
    emergency: false,
    symptoms: ["Excessive scratching and rubbing", "Hair loss in patches", "Rough, dull coat", "Skin thickening (mange mites)", "Visible lice or eggs at base of hair"],
    description: "Multiple species of lice and mites affect goats. Lice are host-specific and don't spread to humans. Mites (mange) burrow into skin and cause intense irritation.",
    treatment: "Permethrin pour-on or spray. Cylence pour-on. Injectable ivermectin for mange mites. Treat entire herd — not just symptomatic animals.",
    prevention: "Quarantine new animals and treat before integration. Regular coat inspection. Keep bedding dry.",
    medications: ["Permethrin (topical)", "Cylence pour-on", "Ivermectin (injectable for mites)"],
    vetRequired: false,
  },
  {
    name: "Johne's Disease",
    category: "Bacterial",
    severity: "high",
    emergency: false,
    symptoms: ["Chronic watery diarrhea (not responsive to treatment)", "Progressive weight loss despite good appetite", "Bottle jaw (late stage)", "Decreased milk production"],
    description: "Mycobacterium avium subspecies paratuberculosis. Infects young animals, symptoms appear years later. No cure. Animals shed bacteria before showing signs.",
    treatment: "No cure. Cull positive animals. Supportive care for quality of life until humane euthanasia.",
    prevention: "Test before purchase. Annual flock testing. Do not buy from herds with known Johne's. Remove kids from dams immediately in positive herds.",
    medications: ["None effective"],
    vetRequired: false,
  },
];

const severityConfig = {
  emergency: { label: "Emergency", bg: "bg-red-100", text: "text-red-800", border: "border-red-300", dot: "bg-red-500" },
  high: { label: "High Priority", bg: "bg-orange-100", text: "text-orange-800", border: "border-orange-300", dot: "bg-orange-500" },
  moderate: { label: "Moderate", bg: "bg-yellow-100", text: "text-yellow-800", border: "border-yellow-300", dot: "bg-yellow-500" },
  low: { label: "Low", bg: "bg-green-100", text: "text-green-800", border: "border-green-300", dot: "bg-green-500" },
};

export default function ConditionsPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-4xl px-8 sm:px-12 py-14">
          <nav className="mb-6 text-sm text-forest-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/health" className="hover:text-white transition-colors">Goat Health</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Conditions</span>
          </nav>
          <h1 className="text-4xl font-bold text-white">Health Conditions</h1>
          <p className="mt-3 text-lg text-cream-300">15 conditions. Emergency flags, symptoms, treatment, prevention.</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-8 sm:px-12 py-12 space-y-4">
        {/* Emergency quick-links */}
        <div className="rounded-xl bg-red-50 border border-red-200 p-5 mb-8">
          <p className="font-bold text-red-800 mb-3">🚨 Emergency Conditions</p>
          <div className="flex flex-wrap gap-2">
            {conditions.filter(c => c.emergency).map(c => (
              <a key={c.name} href={`#${c.name.replace(/\s+/g, '-').toLowerCase()}`}
                className="text-sm text-red-700 bg-red-100 border border-red-200 rounded-full px-3 py-1 hover:bg-red-200 transition-colors">
                {c.name.split(' (')[0]}
              </a>
            ))}
          </div>
        </div>

        {conditions.map((c) => {
          const sev = severityConfig[c.severity as keyof typeof severityConfig];
          return (
            <details
              key={c.name}
              id={c.name.replace(/\s+/g, '-').toLowerCase()}
              className={`group rounded-xl border ${c.emergency ? 'border-red-300' : 'border-gray-200'} bg-white overflow-hidden`}
            >
              <summary className={`flex items-center justify-between px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors ${c.emergency ? 'bg-red-50/50' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className={`h-2.5 w-2.5 rounded-full shrink-0 ${sev.dot}`} />
                  <div>
                    <h2 className="text-lg font-bold text-forest">{c.name}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-forest-600">{c.category}</span>
                      {c.emergency && (
                        <span className="text-xs font-bold text-red-700 bg-red-100 border border-red-200 px-2 py-0.5 rounded-full">
                          EMERGENCY
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <span className="text-forest-600 group-open:rotate-180 transition-transform text-lg">↓</span>
              </summary>

              <div className="px-6 pb-6 pt-2 space-y-5 border-t border-gray-100">
                {c.emergency && c.emergencyText && (
                  <div className="rounded-lg bg-red-50 border border-red-200 p-4">
                    <p className="font-bold text-red-800 text-sm">🚨 {c.emergencyText}</p>
                  </div>
                )}

                <p className="text-base text-forest-600 leading-relaxed">{c.description}</p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-forest mb-2">Symptoms</h3>
                    <ul className="space-y-1">
                      {c.symptoms.map(s => (
                        <li key={s} className="flex gap-2 text-sm text-forest-600">
                          <span className="text-plum shrink-0 mt-0.5">—</span>{s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-forest mb-2">Treatment</h3>
                      <p className="text-sm text-forest-600 leading-relaxed">{c.treatment}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-forest mb-2">Prevention</h3>
                      <p className="text-sm text-forest-600 leading-relaxed">{c.prevention}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {c.medications.map(m => (
                      <span key={m} className="text-xs bg-forest-50 border border-forest-200 text-forest px-2 py-1 rounded-full">{m}</span>
                    ))}
                  </div>
                  {c.vetRequired && (
                    <span className="ml-auto text-xs font-bold text-plum bg-plum-50 border border-plum-200 px-3 py-1 rounded-full">
                      Vet Required
                    </span>
                  )}
                </div>
              </div>
            </details>
          );
        })}

        <div className="mt-10 pt-8 border-t border-gray-100 text-xs text-forest-600 leading-relaxed">
          <strong className="text-forest">Medical Disclaimer:</strong> This information is for educational purposes only. Always consult a licensed veterinarian for diagnosis, treatment, and medical care of your animals. In emergencies, call your vet immediately.
        </div>
      </div>
    </>
  );
}
