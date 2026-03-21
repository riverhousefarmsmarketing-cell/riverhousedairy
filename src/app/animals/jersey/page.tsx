import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = { title: "Jersey Cows | RiverHouse Dairy", description: "A2/A2 Jersey cows at RiverHouse Dairy — the world's most efficient dairy breed, producing cream that transforms our dairy products." };
function BreedNav({ current }: { current: string }) {
  const b = [["Nigerian Dwarf","nigerian-dwarf"],["LaMancha","lamancha"],["Mini-LaMancha","mini-lamancha"],["Mini Nubian","mini-nubian"],["Icelandic","icelandic"],["Lacaune","lacaune"],["Jersey","jersey"],["Zebu","zebu"]];
  return (<div className="pt-8 border-t border-gray-200"><p className="text-sm font-bold uppercase tracking-wider text-forest mb-4">All Breeds</p><div className="flex flex-wrap gap-2">{b.map(([n,s]) => (<Link key={s} href={`/animals/${s}`} className={`text-sm px-4 py-2 rounded-full border transition-colors ${s===current?"bg-forest text-white border-forest":"border-gray-200 text-forest-600 hover:border-plum hover:text-plum"}`}>{n}</Link>))}</div></div>);
}
export default function Page() {
  return (<>
    <section className="bg-forest"><div className="mx-auto max-w-4xl px-8 sm:px-12 py-16">
      <nav className="mb-6 text-sm text-forest-300"><Link href="/" className="hover:text-white">Home</Link><span className="mx-2">›</span><Link href="/animals" className="hover:text-white">Our Animals</Link><span className="mx-2">›</span><span className="text-white">Jersey</span></nav>
      <span className="text-xs font-bold uppercase tracking-wider text-plum-200">Dairy Cattle · A2/A2</span>
      <h1 className="text-5xl font-bold text-white mt-2">Jersey</h1>
      <p className="mt-4 text-xl text-cream-300 max-w-xl leading-relaxed">The world&apos;s most efficient dairy breed per pound of feed. Our A2/A2 Jerseys produce the cream that makes our dairy products exceptional.</p>
      <div className="mt-8 grid grid-cols-4 gap-3 max-w-lg">{[{label:"Butterfat",value:"4.5–5.5%"},{label:"Protein",value:"3.8–4.0%"},{label:"Origin",value:"Jersey Island"},{label:"Genetics",value:"A2/A2"}].map(s=>(<div key={s.label} className="bg-white/10 rounded-xl p-3 text-center"><p className="text-lg font-bold text-white">{s.value}</p><p className="text-xs text-cream-300 mt-0.5">{s.label}</p></div>))}</div>
    </div></section>
    <div className="mx-auto max-w-4xl px-8 sm:px-12 py-16 space-y-16">
      <section>
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-10"><Image src="/images/farm/jerseys-pasture.jpeg" alt="Jersey cows at RiverHouse Dairy" fill className="object-cover" sizes="100vw" /></div>
        <h2 className="text-2xl font-bold text-forest">Why We Added Jerseys</h2>
        <p className="mt-4 text-lg text-forest-600 leading-relaxed">Christine&apos;s niece has low-functioning autism and cannot tolerate conventional dairy. A2/A2 cow milk changed that. We added A2/A2 Jersey cows and Zebu specifically for their beta-casein genetics — a protein variant that many people with conventional dairy sensitivities can consume without issue.</p>
        <p className="mt-4 text-lg text-forest-600 leading-relaxed">The other reason: cream. Goat and sheep milk is naturally homogenized — the fat doesn&apos;t separate. Cow milk separates readily, giving us heavy cream. That cream is what makes our ice cream genuinely creamy, our butter possible, and our aged cheeses richer. The Jerseys are the missing ingredient for the full range of dairy products we&apos;re building toward.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-forest">What Is A2/A2?</h2>
        <div className="mt-4 space-y-4 text-base text-forest-600 leading-relaxed">
          <p>All cattle produce milk with beta-casein protein, but there are two main variants: A1 and A2. Most modern commercial cattle — particularly Holsteins — predominantly produce A1 beta-casein. Older breeds like Jersey, Guernsey, and many heritage breeds more commonly carry A2 genetics.</p>
          <p>When A1 beta-casein is digested, it can release a peptide called BCM-7 (beta-casomorphin-7), which some research suggests may contribute to digestive discomfort in some people who believe they are lactose intolerant. A2 milk does not produce BCM-7 during digestion.</p>
          <p>A2/A2 designation means the animal carries two copies of the A2 gene — both alleles. This ensures all their milk contains only A2 beta-casein. We specifically selected A2/A2 tested animals for our herd.</p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-forest">History & Origin</h2>
        <div className="mt-4 space-y-4 text-base text-forest-600 leading-relaxed">
          <p>Jersey cattle originate from the Island of Jersey in the English Channel, where they developed in isolation over several centuries. The island&apos;s strict agricultural laws — historically prohibiting the importation of cattle — created a closed breeding population that became one of the most genetically distinct and productive dairy breeds in the world.</p>
          <p>Jersey cattle were first exported to England in the early 19th century, arriving in the United States in the 1850s. Their efficiency — producing more pounds of butterfat per pound of feed than any other breed — made them immediately valuable to American dairy farmers, particularly in the Northeast and Mid-Atlantic states.</p>
          <p>Today Jerseys are the second most common dairy breed in the United States after Holstein. They remain dominant in New Zealand (where their efficiency on pasture is unmatched), and their A2 genetics make them increasingly sought after as consumer interest in A2 milk grows globally.</p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-forest">Contributions to Humanity</h2>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">{[{icon:"🥛",title:"Most Efficient Dairy Breed",body:"Jerseys produce more milk solids — butterfat, protein, lactose — per pound of feed than any other dairy breed. On a pasture-based system, their efficiency is exceptional. This is why they dominate New Zealand's export dairy industry."},{icon:"🧈",title:"Cream & Butter Tradition",body:"Jersey milk's high butterfat (4.5–5.5%) made it the preferred breed for butter and cream production before industrial dairying standardized on Holstein volume. Jersey cream and butter remain sought after in artisan markets."},{icon:"🧬",title:"A2 Genetics",body:"As predominantly A2/A2 animals, Jerseys are central to the growing A2 dairy movement globally. Their combination of high production and A2 genetics makes them the most commercially valuable breed for dedicated A2 dairy programs."}].map(c=>(<div key={c.title} className="rounded-xl bg-gray-50 border border-gray-200 p-5"><div className="text-2xl mb-3">{c.icon}</div><h3 className="font-bold text-forest">{c.title}</h3><p className="text-sm text-forest-600 mt-2 leading-relaxed">{c.body}</p></div>))}</div>
      </section>
      <BreedNav current="jersey" />
    </div>
  </>);
}
