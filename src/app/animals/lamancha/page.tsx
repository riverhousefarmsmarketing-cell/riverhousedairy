import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "LaMancha Goats | RiverHouse Dairy", description: "LaMancha dairy goats at RiverHouse Dairy — the earless American breed known for high milk volume, gentle temperament, and consistent production." };

function BreedNav({ current }: { current: string }) {
  const breeds = [{ name: "Nigerian Dwarf", slug: "nigerian-dwarf" },{ name: "LaMancha", slug: "lamancha" },{ name: "Mini-LaMancha", slug: "mini-lamancha" },{ name: "Mini Nubian", slug: "mini-nubian" },{ name: "Icelandic", slug: "icelandic" },{ name: "Lacaune", slug: "lacaune" },{ name: "Jersey", slug: "jersey" },{ name: "Zebu", slug: "zebu" }];
  return (<div className="pt-8 border-t border-gray-200"><p className="text-sm font-bold uppercase tracking-wider text-forest mb-4">All Breeds</p><div className="flex flex-wrap gap-2">{breeds.map(b => (<Link key={b.slug} href={`/animals/${b.slug}`} className={`text-sm px-4 py-2 rounded-full border transition-colors ${b.slug === current ? "bg-forest text-white border-forest" : "border-gray-200 text-forest-600 hover:border-plum hover:text-plum"}`}>{b.name}</Link>))}</div></div>);
}

export default function Page() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-4xl px-8 sm:px-12 py-16">
          <nav className="mb-6 text-sm text-forest-300"><Link href="/" className="hover:text-white transition-colors">Home</Link><span className="mx-2">›</span><Link href="/animals" className="hover:text-white transition-colors">Our Animals</Link><span className="mx-2">›</span><span className="text-white">LaMancha</span></nav>
          <span className="text-xs font-bold uppercase tracking-wider text-plum-200">Dairy Goat</span>
          <h1 className="text-5xl font-bold text-white mt-2">LaMancha</h1>
          <p className="mt-4 text-xl text-cream-300 max-w-xl leading-relaxed">The only dairy goat breed developed in the United States. Earless, calm, and a consistent high-volume producer.</p>
          <div className="mt-8 grid grid-cols-4 gap-3 max-w-lg">
            {[{ label: "Butterfat", value: "3.9–4.5%" },{ label: "Milk/day", value: "1–2 gal" },{ label: "Height", value: "28–30 in" },{ label: "Origin", value: "Oregon" }].map(s => (<div key={s.label} className="bg-white/10 rounded-xl p-3 text-center"><p className="text-lg font-bold text-white">{s.value}</p><p className="text-xs text-cream-300 mt-0.5">{s.label}</p></div>))}
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-4xl px-8 sm:px-12 py-16 space-y-16">
        <section>
          {/* Photo gallery — real LaMancha photos from RiverHouse Dairy */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image src="/images/farm/lamancha-barn-1.jpeg" alt="LaMancha doe in the barn at RiverHouse Dairy" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative flex-1 rounded-xl overflow-hidden" style={{minHeight: "200px"}}>
              <Image src="/images/farm/lamancha-fence.jpeg" alt="LaMancha goat at the fence at RiverHouse Dairy" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="relative flex-1 rounded-xl overflow-hidden" style={{minHeight: "200px"}}>
              <Image src="/images/farm/lamancha-barn-2.jpeg" alt="LaMancha doe up close at RiverHouse Dairy" fill className="object-cover" sizes="50vw" />
            </div>
          </div>
        </div>
          <h2 className="text-2xl font-bold text-forest">At RiverHouse Dairy</h2>
          <p className="mt-4 text-lg text-forest-600 leading-relaxed">Our LaManchas are the gentle giants of the goat barn. They're bigger than our Nigerian Dwarfs, producing more milk volume but with slightly lower butterfat. Their temperament is genuinely distinctive — calm, inquisitive, and easy to work with on the milk stand. In a mixed-breed herd, LaManchas tend to establish themselves as mid-tier herd leaders without the drama.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-forest">History & Origin</h2>
          <div className="mt-4 space-y-4 text-base text-forest-600 leading-relaxed">
            <p>The LaMancha is the only goat breed developed entirely in the United States, originating in Oregon in the 1930s. Eula Fay Frey, a California goat breeder, is credited with developing the breed through crosses of short-eared Spanish goats with Swiss and Nubian breeds. The ADGA registered LaMancha as an official breed in 1958.</p>
            <p>The breed's defining characteristic — its extremely small ears (gopher ear: maximum 1 inch, or elf ear: maximum 2 inches) — is a genetic trait that causes no health issues. LaManchas hear perfectly well despite appearances. The ear trait is dominant and passes reliably to offspring.</p>
            <p>LaManchas spread throughout the American Pacific Northwest and quickly became valued commercial dairy animals for their combination of high production, calm temperament, and adaptability to the cool, wet climate of Washington and Oregon.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-forest">Contributions to Humanity</h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[{ icon: "🥛", title: "Commercial Dairy", body: "LaManchas are among the top dairy goat breeds in the U.S. for commercial production. Their high volume and consistent milk composition make them reliable for small creameries and farm dairies." },{ icon: "🧀", title: "Artisan Cheese", body: "LaMancha milk's solid protein content and moderate butterfat make it particularly well-suited to fresh chèvre, feta-style, and aged goat cheeses." },{ icon: "🌎", title: "Breed Development", body: "As the only American-developed goat breed, LaManchas represent a century of purposeful breed development for specific climate and production goals — a distinctly American contribution to global dairy genetics." }].map(c => (<div key={c.title} className="rounded-xl bg-gray-50 border border-gray-200 p-5"><div className="text-2xl mb-3">{c.icon}</div><h3 className="font-bold text-forest">{c.title}</h3><p className="text-sm text-forest-600 mt-2 leading-relaxed">{c.body}</p></div>))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-forest">Milk Profile</h2>
          <div className="mt-4 space-y-3 text-base text-forest-600 leading-relaxed">
            <p><strong className="text-forest">Butterfat:</strong> 3.9–4.5% — higher than Saanen or Alpine, lower than Nubian or Nigerian Dwarf. Solid middle-ground for drinking milk and fresh cheeses.</p>
            <p><strong className="text-forest">Volume:</strong> 1–2 gallons per day from a productive doe — among the highest milk volumes in the goat world.</p>
            <p><strong className="text-forest">Flavor:</strong> Mild and clean. LaManchas are known for consistently palatable milk with minimal "goaty" flavor when properly managed and chilled quickly.</p>
          </div>
        </section>
        <BreedNav current="lamancha" />
      </div>
    </>
  );
}
