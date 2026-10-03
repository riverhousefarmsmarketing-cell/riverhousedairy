import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = { title: "Lacaune Dairy Sheep | RiverHouse Dairy", description: "Lacaune dairy sheep at RiverHouse Dairy — the French breed behind Roquefort cheese. We drove 1,157 miles and imported pure semen straws to build this genetics program in the PNW." };
function BreedNav({ current }: { current: string }) {
  const b = [["Nigerian Dwarf","nigerian-dwarf"],["LaMancha","lamancha"],["Mini-LaMancha","mini-lamancha"],["Mini Nubian","mini-nubian"],["Icelandic","icelandic"],["Lacaune","lacaune"],["Jersey","jersey"],["Zebu","zebu"]];
  return (<div className="pt-8 border-t border-gray-200"><p className="text-sm font-bold uppercase tracking-wider text-forest mb-4">All Breeds</p><div className="flex flex-wrap gap-2">{b.map(([n,s]) => (<Link key={s} href={`/animals/${s}`} className={`text-sm px-4 py-2 rounded-full border transition-colors ${s===current?"bg-forest text-white border-forest":"border-gray-200 text-forest-600 hover:border-plum hover:text-plum"}`}>{n}</Link>))}</div></div>);
}
export default function Page() {
  return (<>
    <section className="bg-forest"><div className="mx-auto max-w-4xl px-8 sm:px-12 py-16">
      <nav className="mb-6 text-sm text-forest-300"><Link href="/" className="hover:text-white">Home</Link><span className="mx-2">›</span><Link href="/animals" className="hover:text-white">Our Animals</Link><span className="mx-2">›</span><span className="text-white">Lacaune</span></nav>
      <span className="text-xs font-bold uppercase tracking-wider text-plum-200">Dairy Sheep · Featured Breed</span>
      <h1 className="text-5xl font-bold text-white mt-2">Lacaune</h1>
      <p className="mt-4 text-xl text-cream-300 max-w-xl leading-relaxed">The breed behind Roquefort. The most productive dairy sheep in the world. And the reason Christine drove 1,157 miles.</p>
      <div className="mt-8 grid grid-cols-4 gap-3 max-w-lg">{[{label:"Milk/yr",value:"200–300 L"},{label:"Butterfat",value:"7–8%"},{label:"Origin",value:"S. France"},{label:"Famous for",value:"Roquefort"}].map(s=>(<div key={s.label} className="bg-white/10 rounded-xl p-3 text-center"><p className="text-lg font-bold text-white">{s.value}</p><p className="text-xs text-cream-300 mt-0.5">{s.label}</p></div>))}</div>
    </div></section>
    <div className="mx-auto max-w-4xl px-8 sm:px-12 py-16 space-y-16">
      <section>
        {/* Photo gallery — Lacaune-cross ewes and lambs at RiverHouse Dairy */}
        {/* Hero: ewe with twin lambs — establishes the breeding program visually */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
          <Image src="/images/farm/lacaune-ewe-twins.jpeg" alt="Lacaune-cross ewe with twin lambs at RiverHouse Dairy" fill className="object-cover" sizes="100vw" />
        </div>
        {/* Second row: the birth moment + nursing shot — tells the whole story */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image src="/images/farm/lacaune-birth.jpeg" alt="Lacaune-cross ewe with newborn lamb at RiverHouse Dairy" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image src="/images/farm/lacaune-nursing.jpeg" alt="Lacaune-cross lamb nursing at RiverHouse Dairy" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
        {/* Third row: twins and sleeping lamb */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/lacaune-twins-straw.jpeg" alt="Lacaune-cross twin lambs in straw at RiverHouse Dairy" fill className="object-cover" sizes="33vw" />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/lacaune-newborn-pair.jpeg" alt="Lacaune-cross newborn lambs at RiverHouse Dairy" fill className="object-cover" sizes="33vw" />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/lacaune-ewe-sleeping.jpeg" alt="Lacaune-cross ewe with sleeping lamb at RiverHouse Dairy" fill className="object-cover" sizes="33vw" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-forest">The 1,157-Mile Trip</h2>
        <p className="mt-4 text-lg text-forest-600 leading-relaxed">In 2025, Christine drove from Chehalis, Washington to South Dakota — 1,157 miles one way — to bring home four Lacaune-influenced ewes. Pure Lacaune genetics barely exist in the Pacific Northwest. This was the only way to get started.</p>
        <p className="mt-4 text-lg text-forest-600 leading-relaxed">In Fall 2026, 10 pure Lacaune semen straws are arriving from two different French rams — sourced specifically to maximize genetic diversity in our emerging PNW Lacaune program. We are building something that doesn&apos;t exist here yet: a Lacaune foundation herd in the Pacific Northwest, bred for the high-butterfat sheep milk that makes exceptional artisan cheese and yogurt.</p>
        <div className="mt-6 flex gap-4">
          <div className="rounded-xl bg-plum text-white px-5 py-3 text-center">
            <p className="text-2xl font-bold">1,157</p>
            <p className="text-sm text-plum-200">Miles driven</p>
          </div>
          <div className="rounded-xl bg-forest text-white px-5 py-3 text-center">
            <p className="text-2xl font-bold">10</p>
            <p className="text-sm text-cream-300">Pure semen straws arriving Fall 2026</p>
          </div>
          <div className="rounded-xl bg-gray-100 text-forest px-5 py-3 text-center">
            <p className="text-2xl font-bold">2</p>
            <p className="text-sm text-forest-600">Different French rams</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-forest">History & Origin</h2>
        <div className="mt-4 space-y-4 text-base text-forest-600 leading-relaxed">
          <p>The Lacaune sheep originates from the Lacaune Mountains of southern France, in the Aveyron and Hérault departments. The breed has been selectively developed for dairy production for centuries, centered on the town of Roquefort-sur-Soulzon — home to the famous blue cheese that bears the region&apos;s name.</p>
          <p>Roquefort cheese has been produced in the natural limestone caves of Combalou since at least the 11th century, and possibly far earlier. The cheese can only be made from Lacaune ewe milk by French law (Appellation d&apos;Origine Contrôlée). This geographical and legal protection has driven centuries of intensive selective breeding for milk production in the Lacaune — making it the highest-producing dairy sheep breed in the world.</p>
          <p>Modern Lacaune ewes, selected through rigorous INRAE (French National Research Institute) programs, can produce 200–300 liters of milk per lactation — two to three times the production of most heritage dairy sheep breeds. The milk is high in fat and protein, ideally suited to cheese making.</p>
          <p>Outside France, Lacaune genetics remain rare. In the United States, the breed exists primarily in small populations maintained by dedicated dairy sheep producers. In the Pacific Northwest, they are nearly nonexistent — which is exactly why we&apos;re building this program.</p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-forest">Contributions to Humanity</h2>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">{[{icon:"🧀",title:"Roquefort & French Cheese Culture",body:"Lacaune milk is the sole legal ingredient for Roquefort — one of the world's oldest and most famous cheeses, with a documented history of over 900 years. The breed exists, in its modern form, specifically because of that cheese tradition."},{icon:"🐑",title:"Highest-Producing Dairy Sheep",body:"Through centuries of selection, the Lacaune became the most productive dairy sheep breed in the world. Modern genetics programs at INRAE continue improving the breed's production records — making Lacaune the benchmark against which all other dairy sheep are measured."},{icon:"🌍",title:"Global Sheep Dairy",body:"Lacaune genetics are exported globally to improve dairy sheep programs in Spain, Italy, South America, and increasingly North America. As sheep dairy grows worldwide, Lacaune genetics underpin most serious commercial programs."}].map(c=>(<div key={c.title} className="rounded-xl bg-gray-50 border border-gray-200 p-5"><div className="text-2xl mb-3">{c.icon}</div><h3 className="font-bold text-forest">{c.title}</h3><p className="text-sm text-forest-600 mt-2 leading-relaxed">{c.body}</p></div>))}</div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-forest">Milk Profile</h2>
        <div className="mt-4 space-y-3 text-base text-forest-600 leading-relaxed">
          <p><strong className="text-forest">Butterfat:</strong> 7–8% — exceptionally high, giving Lacaune milk its characteristic richness and making it ideal for high-fat cheeses, yogurt, and ice cream.</p>
          <p><strong className="text-forest">Protein:</strong> 5–6% — nearly double the protein of cow milk, which is why sheep milk cheeses have such complex, concentrated flavor.</p>
          <p><strong className="text-forest">Volume:</strong> 200–300 liters per lactation from a modern Lacaune ewe — far above any heritage dairy sheep breed.</p>
          <p><strong className="text-forest">Seasonality:</strong> Lacaune are seasonal milkers, producing primarily from lambing through summer. Their concentrated production season aligns with traditional cheese-making calendars.</p>
        </div>
      </section>
      <BreedNav current="lacaune" />
    </div>
  </>);
}
