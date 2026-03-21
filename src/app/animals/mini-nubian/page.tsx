import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = { title: "Mini Nubian Goats | RiverHouse Dairy", description: "Mini Nubian dairy goats at RiverHouse Dairy — Nubian richness and personality in a compact frame." };
function BreedNav({ current }: { current: string }) {
  const b = [["Nigerian Dwarf","nigerian-dwarf"],["LaMancha","lamancha"],["Mini-LaMancha","mini-lamancha"],["Mini Nubian","mini-nubian"],["Icelandic","icelandic"],["Lacaune","lacaune"],["Jersey","jersey"],["Zebu","zebu"]];
  return (<div className="pt-8 border-t border-gray-200"><p className="text-sm font-bold uppercase tracking-wider text-forest mb-4">All Breeds</p><div className="flex flex-wrap gap-2">{b.map(([n,s]) => (<Link key={s} href={`/animals/${s}`} className={`text-sm px-4 py-2 rounded-full border transition-colors ${s===current?"bg-forest text-white border-forest":"border-gray-200 text-forest-600 hover:border-plum hover:text-plum"}`}>{n}</Link>))}</div></div>);
}
export default function Page() {
  return (<>
    <section className="bg-forest"><div className="mx-auto max-w-4xl px-8 sm:px-12 py-16">
      <nav className="mb-6 text-sm text-forest-300"><Link href="/" className="hover:text-white">Home</Link><span className="mx-2">›</span><Link href="/animals" className="hover:text-white">Our Animals</Link><span className="mx-2">›</span><span className="text-white">Mini Nubian</span></nav>
      <span className="text-xs font-bold uppercase tracking-wider text-plum-200">Dairy Goat</span>
      <h1 className="text-5xl font-bold text-white mt-2">Mini Nubian</h1>
      <p className="mt-4 text-xl text-cream-300 max-w-xl leading-relaxed">High-butterfat Nubian genetics in a manageable size. Personality plus production.</p>
      <div className="mt-8 grid grid-cols-4 gap-3 max-w-lg">{[{label:"Butterfat",value:"5–8%"},{label:"Size",value:"23–29 in"},{label:"Cross",value:"Nubian × ND"},{label:"Ears",value:"Pendant"},{label:"Origin",value:"Multi-continent"}].slice(0,4).map(s=>(<div key={s.label} className="bg-white/10 rounded-xl p-3 text-center"><p className="text-lg font-bold text-white">{s.value}</p><p className="text-xs text-cream-300 mt-0.5">{s.label}</p></div>))}</div>
    </div></section>
    <div className="mx-auto max-w-4xl px-8 sm:px-12 py-16 space-y-16">
      <section>
        {/* Photo gallery — real Mini Nubian photos from RiverHouse Dairy */}
        {/* Hero: doe with kid resting — shows the pendant ears clearly */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image src="/images/farm/mini-nubian-standing.jpeg" alt="Mini Nubian kid at RiverHouse Dairy" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image src="/images/farm/mini-nubian-doe-kid.jpeg" alt="Mini Nubian doe and kid at RiverHouse Dairy" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
        {/* Row 2: nursing + newborn — dairy purpose */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/mini-nubian-nursing.jpeg" alt="Mini Nubian kid nursing at RiverHouse Dairy" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/mini-nubian-newborn.jpeg" alt="Mini Nubian newborn kid at RiverHouse Dairy" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
        {/* Row 3: close-up ear/face portraits — shows the Nubian ear distinctly */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/mini-nubian-chew-1.jpeg" alt="Mini Nubian kid portrait at RiverHouse Dairy" fill className="object-cover" sizes="33vw" />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/mini-nubian-chew-2.jpeg" alt="Mini Nubian kid portrait at RiverHouse Dairy" fill className="object-cover" sizes="33vw" />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/mini-nubian-chew-3.jpeg" alt="Mini Nubian kid portrait at RiverHouse Dairy" fill className="object-cover" sizes="33vw" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-forest">At RiverHouse Dairy</h2>
        <p className="mt-4 text-lg text-forest-600 leading-relaxed">Mini Nubians bring a distinctive personality to our herd — vocal, curious, opinionated, and genuinely endearing. The Nubian bloodline adds the richest butterfat of the full-size dairy goats, and the Nigerian Dwarf cross brings it down to a manageable size. Our Mini Nubians are among the most people-focused animals on the farm.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-forest">History & Origin</h2>
        <div className="mt-4 space-y-4 text-base text-forest-600 leading-relaxed">
          <p>The Nubian goat (Anglo-Nubian in the UK) has some of the most geographically diverse ancestry of any goat breed. British breeders in the 19th century crossed native English does with bucks imported from Africa, India, and the Middle East — particularly the long-eared, Roman-nosed types from Nubia (present-day Sudan and Egypt) and Sind (Pakistan). The result was a large, pendulous-eared breed with exceptional butterfat.</p>
          <p>Nubians arrived in the United States in the early 20th century and quickly became one of the country's most popular dairy breeds. Their high butterfat — up to 5% in full-size does — made them valuable for cheese and cream production.</p>
          <p>The Mini Nubian emerged through the same miniaturization movement as other mini dairy breeds: intentional crossing with Nigerian Dwarfs to produce a compact animal with the Nubian's dairy qualities. After four or more generations of selective breeding, Mini Nubians are now recognized by the MDGA with established breed standards.</p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-forest">Contributions to Humanity</h2>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">{[{icon:"🌍",title:"Ancient Dairy Heritage",body:"The Nubian's African and Middle Eastern ancestors were among the first goats domesticated for dairy — breeds that sustained nomadic and agricultural communities across the Sahel and Levant for thousands of years."},{icon:"🥛",title:"Premium Dairy Fat",body:"Nubian milk's butterfat content — among the highest of full-size dairy breeds — has made it valued for artisan dairy production worldwide, particularly for soaps, ice cream, and high-fat cheeses."},{icon:"🤝",title:"Dual Purpose in the Global South",body:"Nubian-type goats remain among the most important livestock animals in sub-Saharan Africa and South Asia, providing milk, meat, and hides to rural communities across some of the world's most food-insecure regions."}].map(c=>(<div key={c.title} className="rounded-xl bg-gray-50 border border-gray-200 p-5"><div className="text-2xl mb-3">{c.icon}</div><h3 className="font-bold text-forest">{c.title}</h3><p className="text-sm text-forest-600 mt-2 leading-relaxed">{c.body}</p></div>))}</div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-forest">Milk Profile</h2>
        <div className="mt-4 space-y-3 text-base text-forest-600 leading-relaxed">
          <p><strong className="text-forest">Butterfat:</strong> 5–8% — the highest of any mini dairy breed, rivaling Nigerian Dwarfs. Rich, creamy, and exceptional for artisan dairy.</p>
          <p><strong className="text-forest">Volume:</strong> More than Nigerian Dwarfs, comparable to other mini breeds. A productive Mini Nubian doe can supply a small family.</p>
          <p><strong className="text-forest">Flavor:</strong> Nubian influence gives the milk a distinctive richness. Well-managed Mini Nubian milk is noticeably creamy.</p>
        </div>
      </section>
      <BreedNav current="mini-nubian" />
    </div>
  </>);
}
