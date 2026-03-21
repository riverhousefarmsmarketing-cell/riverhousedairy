import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = { title: "Zebu Cattle | RiverHouse Dairy", description: "Zebu cattle at RiverHouse Dairy — one of humanity's oldest domesticated animals, A2/A2 genetics, heat-tolerant, and genetically distinct from European cattle." };
function BreedNav({ current }: { current: string }) {
  const b = [["Nigerian Dwarf","nigerian-dwarf"],["LaMancha","lamancha"],["Mini-LaMancha","mini-lamancha"],["Mini Nubian","mini-nubian"],["Icelandic","icelandic"],["Lacaune","lacaune"],["Jersey","jersey"],["Zebu","zebu"]];
  return (<div className="pt-8 border-t border-gray-200"><p className="text-sm font-bold uppercase tracking-wider text-forest mb-4">All Breeds</p><div className="flex flex-wrap gap-2">{b.map(([n,s]) => (<Link key={s} href={`/animals/${s}`} className={`text-sm px-4 py-2 rounded-full border transition-colors ${s===current?"bg-forest text-white border-forest":"border-gray-200 text-forest-600 hover:border-plum hover:text-plum"}`}>{n}</Link>))}</div></div>);
}
export default function Page() {
  return (<>
    <section className="bg-forest"><div className="mx-auto max-w-4xl px-8 sm:px-12 py-16">
      <nav className="mb-6 text-sm text-forest-300"><Link href="/" className="hover:text-white">Home</Link><span className="mx-2">›</span><Link href="/animals" className="hover:text-white">Our Animals</Link><span className="mx-2">›</span><span className="text-white">Zebu</span></nav>
      <span className="text-xs font-bold uppercase tracking-wider text-plum-200">Cattle · A2/A2 · Ancient Breed</span>
      <h1 className="text-5xl font-bold text-white mt-2">Zebu</h1>
      <p className="mt-4 text-xl text-cream-300 max-w-xl leading-relaxed">One of humanity&apos;s oldest domesticated animals. 8,000 years of history, A2/A2 genetics, and a distinctive shoulder hump that tells the whole evolutionary story.</p>
      <div className="mt-8 grid grid-cols-4 gap-3 max-w-lg">{[{label:"Domesticated",value:"~6000 BCE"},{label:"Species",value:"Bos indicus"},{label:"Genetics",value:"A2/A2"},{label:"Hump",value:"Yes"},{label:"Origin",value:"South Asia"}].slice(0,4).map(s=>(<div key={s.label} className="bg-white/10 rounded-xl p-3 text-center"><p className="text-lg font-bold text-white">{s.value}</p><p className="text-xs text-cream-300 mt-0.5">{s.label}</p></div>))}</div>
    </div></section>
    <div className="mx-auto max-w-4xl px-8 sm:px-12 py-16 space-y-16">
      <section>
        {/* Photo gallery — Zebu cattle at RiverHouse Dairy */}
        {/* Hero: cow with twin calves in barn — shows the A2/A2 breeding program */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
          <Image src="/images/farm/zebu-cow-twin-calves.jpeg" alt="Zebu cow with twin calves at RiverHouse Dairy" fill className="object-cover" sizes="100vw" />
        </div>
        {/* Row 2: newborn moments */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/zebu-newborn-standing.jpeg" alt="Zebu newborn calf standing at RiverHouse Dairy" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/zebu-cow-newborn-barn.jpeg" alt="Zebu cow with newborn calf at RiverHouse Dairy" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
        {/* Row 3: calf portraits against mossy tree */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/zebu-calf-mossy-1.jpeg" alt="Zebu calf at RiverHouse Dairy" fill className="object-cover" sizes="33vw" />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/zebu-calf-mossy-2.jpeg" alt="Zebu calf portrait at RiverHouse Dairy" fill className="object-cover" sizes="33vw" />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/zebu-cow-nursing-coop.jpeg" alt="Zebu cow nursing calf at RiverHouse Dairy" fill className="object-cover" sizes="33vw" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-forest">At RiverHouse Dairy</h2>
        <p className="mt-4 text-lg text-forest-600 leading-relaxed">Our Zebu are part of the A2/A2 cattle component of our herd — selected for the same beta-casein genetics that drove our Jersey acquisition. Zebu carry A2/A2 genetics naturally as a species characteristic of <em>Bos indicus</em> cattle, which diverged from European cattle (<em>Bos taurus</em>) thousands of years ago and were never subject to the A1 mutation that became prevalent in modern commercial breeds.</p>
        <p className="mt-4 text-lg text-forest-600 leading-relaxed">They are distinctive animals — smaller than most cattle breeds people are familiar with, heat-tolerant, and genuinely ancient in their genetics. Having both Jersey and Zebu gives our cattle genetics program breadth across the A2 landscape.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-forest">History & Origin</h2>
        <div className="mt-4 space-y-4 text-base text-forest-600 leading-relaxed">
          <p>Zebu cattle (<em>Bos indicus</em>) were independently domesticated from wild aurochs in South Asia approximately 8,000 years ago — one of the most ancient domestication events in human history. They represent a separate domestication from European cattle (<em>Bos taurus</em>), which were domesticated from a different aurochs population in the Near East around the same time.</p>
          <p>The two species remained largely separate for millennia. Zebu adapted to the hot, humid conditions of South Asia, developing the characteristic shoulder hump (a fatty tissue deposit over enlarged cervical vertebrae), loose skin folds that help dissipate heat, and resistance to tropical parasites and diseases that devastate <em>Bos taurus</em> cattle.</p>
          <p>Zebu spread from South Asia westward into Africa (where they crossed with indigenous African cattle to create many African breeds) and eastward into Southeast Asia and eventually East Africa, reaching these regions both through human migration and independent trading routes. Today, more than 75% of the world&apos;s cattle population is <em>Bos indicus</em> or <em>Bos indicus</em>-influenced — making Zebu the dominant cattle genetics on Earth by animal count, even if European breeds dominate commercial dairy production.</p>
          <p>In the Americas, Zebu were introduced by Portuguese traders to Brazil in the 16th–17th centuries, eventually becoming the foundation of the Brahman breed and many South American beef cattle. In the United States, Brahman and other Zebu-influenced breeds became important in the Gulf Coast and Southeast for their heat and tick resistance.</p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-forest">Contributions to Humanity</h2>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">{[{icon:"🌍",title:"Foundation of Global Agriculture",body:"Zebu cattle are the primary draft animal and dairy source for over a billion people across South Asia, East Africa, and Southeast Asia. In many regions, a family's Zebu cow is their primary source of milk, draft power, and economic security — a role they have played continuously for 8,000 years."},{icon:"🧬",title:"A2 Genetics",body:"All Bos indicus cattle carry A2/A2 beta-casein genetics naturally — the A1 mutation never occurred in this lineage. This makes Zebu and Zebu-crossed cattle central to the global A2 dairy movement, particularly in countries where Zebu cattle dominate."},{icon:"💪",title:"Genetic Resilience",body:"Zebu cattle's resistance to tropical heat, humidity, ticks, and diseases like bovine tick fever and trypanosomiasis has made them indispensable for cattle production across the tropical world. Their genetic resilience is increasingly important as climate shifts expand tropical conditions globally."}].map(c=>(<div key={c.title} className="rounded-xl bg-gray-50 border border-gray-200 p-5"><div className="text-2xl mb-3">{c.icon}</div><h3 className="font-bold text-forest">{c.title}</h3><p className="text-sm text-forest-600 mt-2 leading-relaxed">{c.body}</p></div>))}</div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-forest">Milk & Genetics Profile</h2>
        <div className="mt-4 space-y-3 text-base text-forest-600 leading-relaxed">
          <p><strong className="text-forest">A2/A2 genetics:</strong> All Bos indicus cattle naturally produce A2 beta-casein only. This is a species characteristic — not a selection program — making Zebu inherently valuable for A2 dairy programs.</p>
          <p><strong className="text-forest">Milk composition:</strong> Zebu milk is typically lower in volume than European dairy breeds but higher in total solids. Traditional Zebu dairy products in South Asia — ghee, paneer, dahi — reflect a dairy culture built around concentrated, high-solid milk.</p>
          <p><strong className="text-forest">Cultural significance:</strong> In Hindu culture, the cow (predominantly Zebu in South Asia) holds sacred status. Zebu cattle have shaped religious practice, agricultural systems, and food culture across the Indian subcontinent for millennia.</p>
        </div>
      </section>
      <BreedNav current="zebu" />
    </div>
  </>);
}
