import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = { title: "Icelandic Sheep | RiverHouse Dairy", description: "Icelandic dairy sheep at RiverHouse Dairy — a 1,100-year-old heritage breed producing milk, wool, and meat. Triple-purpose and naturally hardy." };
function BreedNav({ current }: { current: string }) {
  const b = [["Nigerian Dwarf","nigerian-dwarf"],["LaMancha","lamancha"],["Mini-LaMancha","mini-lamancha"],["Mini Nubian","mini-nubian"],["Icelandic","icelandic"],["Lacaune","lacaune"],["Jersey","jersey"],["Zebu","zebu"]];
  return (<div className="pt-8 border-t border-gray-200"><p className="text-sm font-bold uppercase tracking-wider text-forest mb-4">All Breeds</p><div className="flex flex-wrap gap-2">{b.map(([n,s]) => (<Link key={s} href={`/animals/${s}`} className={`text-sm px-4 py-2 rounded-full border transition-colors ${s===current?"bg-forest text-white border-forest":"border-gray-200 text-forest-600 hover:border-plum hover:text-plum"}`}>{n}</Link>))}</div></div>);
}
export default function Page() {
  return (<>
    <section className="bg-forest"><div className="mx-auto max-w-4xl px-8 sm:px-12 py-16">
      <nav className="mb-6 text-sm text-forest-300"><Link href="/" className="hover:text-white">Home</Link><span className="mx-2">›</span><Link href="/animals" className="hover:text-white">Our Animals</Link><span className="mx-2">›</span><span className="text-white">Icelandic</span></nav>
      <span className="text-xs font-bold uppercase tracking-wider text-plum-200">Dairy Sheep</span>
      <h1 className="text-5xl font-bold text-white mt-2">Icelandic Sheep</h1>
      <p className="mt-4 text-xl text-cream-300 max-w-xl leading-relaxed">One of the world's oldest and purest sheep breeds. 1,100 years of isolation produced an animal uniquely hardy, triple-purpose, and genetically irreplaceable.</p>
      <div className="mt-8 grid grid-cols-4 gap-3 max-w-lg">{[{label:"Butterfat",value:"6–8%"},{label:"Fleece",value:"4–7 lbs/yr"},{label:"Origin",value:"Iceland, 874 AD"},{label:"Purpose",value:"Milk/Wool/Meat"}].map(s=>(<div key={s.label} className="bg-white/10 rounded-xl p-3 text-center"><p className="text-lg font-bold text-white">{s.value}</p><p className="text-xs text-cream-300 mt-0.5">{s.label}</p></div>))}</div>
    </div></section>
    <div className="mx-auto max-w-4xl px-8 sm:px-12 py-16 space-y-16">
      <section>
        {/* Photo gallery — real Icelandic sheep photos from RiverHouse Dairy */}
        {/* Hero: ram in the rain — shows the breed's hardy PNW character */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
          <Image src="/images/farm/icelandic-ram-pasture.jpeg" alt="Icelandic ram in Lewis County pasture at RiverHouse Dairy" fill className="object-cover" sizes="100vw" />
        </div>
        {/* Grid: lambing season shots */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/icelandic-lamb-black.jpeg" alt="Black Icelandic lamb in barn straw at RiverHouse Dairy" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/icelandic-ewe-lamb-2.jpeg" alt="Icelandic ewe with white lamb at RiverHouse Dairy" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/icelandic-ram-lamb.jpeg" alt="Icelandic ram with newborn lamb at RiverHouse Dairy" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/icelandic-ewe-lamb.jpeg" alt="Icelandic ewe with newborn lamb at RiverHouse Dairy" fill className="object-cover" sizes="25vw" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-forest">At RiverHouse Dairy</h2>
        <p className="mt-4 text-lg text-forest-600 leading-relaxed">Our Icelandic flock was our introduction to sheep. After building the goat herd, we wanted a dairy sheep with genuine hardiness for the wet PNW climate and meaningful milk production. Icelandics checked both boxes — plus fleece. They handle Lewis County winters better than most breeds, forage well, and don&apos;t require the intensive management some specialty dairy sheep demand.</p>
        <p className="mt-4 text-lg text-forest-600 leading-relaxed">The Icelandics anchor our flock while we build Lacaune genetics. Their milk contributes to our seasonal sheep milk production, and their fleece is genuinely beautiful — fine, long-staple, and prized by hand spinners.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-forest">History & Origin</h2>
        <div className="mt-4 space-y-4 text-base text-forest-600 leading-relaxed">
          <p>Icelandic sheep arrived in Iceland with Norse settlers around 874 AD, brought from Scandinavia and the British Isles. For the next 1,100 years, the breed developed in near-complete isolation on an island with no native land predators and a climate requiring extraordinary cold-hardiness and foraging ability on sparse, arctic vegetation.</p>
          <p>Iceland maintained strict quarantine laws prohibiting imported livestock for centuries — a policy that, combined with natural isolation, created one of the world's purest and oldest sheep breeds. No Icelandic sheep left the island for over a millennium, and no outside genetics entered.</p>
          <p>The result is an animal with exceptional genetic diversity within the breed (more than most "pure" breeds that have been artificially selected for a narrow production trait) and genuine triple-purpose utility: their milk is richly flavored and high in fat, their fleece is a distinctive two-layer coat (inner þel and outer tog) prized for its softness and luster, and their meat is lean and flavorful.</p>
          <p>Icelandic sheep arrived in North America in 1985 through carefully managed imports. The breed has grown steadily among heritage breed farmers, particularly those seeking animals that can thrive on pasture with minimal grain supplementation.</p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-forest">Contributions to Humanity</h2>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">{[{icon:"🧶",title:"Wool & Textiles",body:"Icelandic fleece sustained Norse culture for over a millennium. Icelandic wool — used for the distinctive lopi yarn — is still a significant cultural and economic product. The breed's fleece is one of the most diverse in fiber diameter, allowing both fine garments and durable outerwear from the same animal."},{icon:"🥛",title:"Dairy Sheep Tradition",body:"Iceland maintained a strong sheep milking tradition through the Middle Ages. Skyr — the iconic Icelandic dairy product — was historically made from sheep milk. Icelandic sheep milk's high butterfat and protein make it excellent for artisan dairy."},{icon:"❄️",title:"Genetic Conservation",body:"As one of the most genetically distinct and pure sheep breeds remaining, Icelandics represent a critical conservation resource. Their genetic diversity, adapted to extreme cold and poor pasture, may prove invaluable as climate and food systems change."}].map(c=>(<div key={c.title} className="rounded-xl bg-gray-50 border border-gray-200 p-5"><div className="text-2xl mb-3">{c.icon}</div><h3 className="font-bold text-forest">{c.title}</h3><p className="text-sm text-forest-600 mt-2 leading-relaxed">{c.body}</p></div>))}</div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-forest">Milk & Wool Profile</h2>
        <div className="mt-4 space-y-3 text-base text-forest-600 leading-relaxed">
          <p><strong className="text-forest">Milk butterfat:</strong> 6–8% — higher than most dairy sheep breeds, with exceptional flavor from their diverse pasture diet.</p>
          <p><strong className="text-forest">Lactation:</strong> Icelandics are seasonal milkers, typically producing from lambing through late summer. Not year-round producers like goats.</p>
          <p><strong className="text-forest">Fleece:</strong> 4–7 lbs per year of dual-coated wool. The inner coat (þel) is fine and soft; the outer coat (tog) is longer and lustrous. Both are used — sometimes together, sometimes separated by hand-spinners.</p>
          <p><strong className="text-forest">Meat:</strong> Lean, fine-grained, and distinctly flavored — considered a delicacy in Icelandic cuisine. Icelandic lamb raised on arctic grass and seaweed has a unique flavor profile unlike anything raised conventionally.</p>
        </div>
      </section>
      <BreedNav current="icelandic" />
    </div>
  </>);
}
