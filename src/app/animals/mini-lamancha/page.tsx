import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = { title: "Mini-LaMancha Goats | RiverHouse Dairy", description: "Mini-LaMancha dairy goats at RiverHouse Dairy — LaMancha quality in a smaller frame, with elevated butterfat and easy management." };
function BreedNav({ current }: { current: string }) {
  const b = [["Nigerian Dwarf","nigerian-dwarf"],["LaMancha","lamancha"],["Mini-LaMancha","mini-lamancha"],["Mini Nubian","mini-nubian"],["Icelandic","icelandic"],["Lacaune","lacaune"],["Jersey","jersey"],["Zebu","zebu"]];
  return (<div className="pt-8 border-t border-gray-200"><p className="text-sm font-bold uppercase tracking-wider text-forest mb-4">All Breeds</p><div className="flex flex-wrap gap-2">{b.map(([n,s]) => (<Link key={s} href={`/animals/${s}`} className={`text-sm px-4 py-2 rounded-full border transition-colors ${s===current?"bg-forest text-white border-forest":"border-gray-200 text-forest-600 hover:border-plum hover:text-plum"}`}>{n}</Link>))}</div></div>);
}
export default function Page() {
  return (<>
    <section className="bg-forest"><div className="mx-auto max-w-4xl px-8 sm:px-12 py-16">
      <nav className="mb-6 text-sm text-forest-300"><Link href="/" className="hover:text-white">Home</Link><span className="mx-2">›</span><Link href="/animals" className="hover:text-white">Our Animals</Link><span className="mx-2">›</span><span className="text-white">Mini-LaMancha</span></nav>
      <span className="text-xs font-bold uppercase tracking-wider text-plum-200">Dairy Goat</span>
      <h1 className="text-5xl font-bold text-white mt-2">Mini-LaMancha</h1>
      <p className="mt-4 text-xl text-cream-300 max-w-xl leading-relaxed">LaMancha dairy quality in a compact, efficient package. Higher butterfat than full-size, easier to manage on a small farm.</p>
      <div className="mt-8 grid grid-cols-4 gap-3 max-w-lg">{[{label:"Butterfat",value:"4.5–5.5%"},{label:"Size",value:"25–29 in"},{label:"Cross",value:"LaMancha × ND"},{label:"Ears",value:"Very small"}].map(s=>(<div key={s.label} className="bg-white/10 rounded-xl p-3 text-center"><p className="text-lg font-bold text-white">{s.value}</p><p className="text-xs text-cream-300 mt-0.5">{s.label}</p></div>))}</div>
    </div></section>
    <div className="mx-auto max-w-4xl px-8 sm:px-12 py-16 space-y-16">
      <section>
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-10"><Image src="/images/farm/goat-herd-path.png" alt="Mini-LaMancha goats at RiverHouse Dairy" fill className="object-cover" sizes="100vw" /></div>
        <h2 className="text-2xl font-bold text-forest">At RiverHouse Dairy</h2>
        <p className="mt-4 text-lg text-forest-600 leading-relaxed">Mini-LaManchas give us the best of both worlds in our herd: the calm, consistent production of the LaMancha crossed with the elevated butterfat and compact size of the Nigerian Dwarf. They're easier to handle than full-size does, eat less, and take up less space — while producing milk that lands between their two parent breeds in both volume and richness.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-forest">History & Origin</h2>
        <div className="mt-4 space-y-4 text-base text-forest-600 leading-relaxed">
          <p>The Mini-LaMancha is a deliberately developed crossbreed — LaMancha does or bucks crossed with Nigerian Dwarf bucks or does — refined over multiple generations through selective breeding. The goal was a mid-sized dairy goat combining the LaMancha's high production and calm temperament with the Nigerian Dwarf's elevated butterfat and small stature.</p>
          <p>Mini-LaMancha development accelerated in the United States from the 1990s onward as the miniature dairy goat movement grew. The Miniature Dairy Goat Association (MDGA) and American Goat Society (AGS) established breed standards recognizing the Mini-LaMancha as a distinct breed once animals reached the fourth generation cross (F4) or beyond with consistent type.</p>
          <p>Today Mini-LaManchas are increasingly popular on small homesteads and micro-dairies where full-size goats are impractical but Nigerian Dwarfs alone don't produce enough volume.</p>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-forest">Contributions to Humanity</h2>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">{[{icon:"🥛",title:"Miniature Dairy Movement",body:"Mini-LaManchas represent a broader shift toward right-sized livestock for small farms — animals that produce meaningful dairy output without requiring large acreage, large hay storage, or large handling facilities."},{icon:"🧬",title:"Breed Development",body:"The Mini-LaMancha breeding program is ongoing citizen science. Small farmers across the U.S. are collaboratively developing a breed through careful selection records, demonstrating that breed improvement doesn't require corporate-scale operations."},{icon:"🏡",title:"Accessible Homestead Dairying",body:"For urban-adjacent farms with limited space, Mini-LaManchas make fresh dairy possible at a scale that works — bridging the gap between backyard chickens and full farm operations."}].map(c=>(<div key={c.title} className="rounded-xl bg-gray-50 border border-gray-200 p-5"><div className="text-2xl mb-3">{c.icon}</div><h3 className="font-bold text-forest">{c.title}</h3><p className="text-sm text-forest-600 mt-2 leading-relaxed">{c.body}</p></div>))}</div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-forest">Milk Profile</h2>
        <div className="mt-4 space-y-3 text-base text-forest-600 leading-relaxed">
          <p><strong className="text-forest">Butterfat:</strong> 4.5–5.5% — higher than full-size LaMancha, lower than Nigerian Dwarf. A middle-ground that makes excellent drinking milk and good cheese.</p>
          <p><strong className="text-forest">Volume:</strong> More than Nigerian Dwarf, less than full-size LaMancha. For a small farm, the balance is often ideal.</p>
          <p><strong className="text-forest">Temperament advantage:</strong> The LaMancha influence makes Mini-LaManchas notably calm on the milk stand — an underrated quality when you&apos;re milking twice a day every day.</p>
        </div>
      </section>
      <BreedNav current="mini-lamancha" />
    </div>
  </>);
}
