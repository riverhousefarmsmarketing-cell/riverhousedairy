import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nigerian Dwarf Goats | RiverHouse Dairy",
  description: "Nigerian Dwarf dairy goats at RiverHouse Dairy — history, milk production, butterfat, and why we chose this breed for our primary dairy herd.",
};

export default function NigerianDwarfPage() {
  return <BreedPage />;
}

function BreedPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-4xl px-8 sm:px-12 py-16">
          <nav className="mb-6 text-sm text-forest-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/animals" className="hover:text-white transition-colors">Our Animals</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Nigerian Dwarf</span>
          </nav>
          <span className="text-xs font-bold uppercase tracking-wider text-plum-200">Dairy Goat</span>
          <h1 className="text-5xl font-bold text-white mt-2">Nigerian Dwarf</h1>
          <p className="mt-4 text-xl text-cream-300 max-w-xl leading-relaxed">
            The richest butterfat of any dairy goat breed. Compact, prolific, and the foundation of our dairy herd.
          </p>
          <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 gap-3 max-w-lg">
            {[
              { label: "Butterfat", value: "6–10%" },
              { label: "Milk/day", value: "1–2 qts" },
              { label: "Height", value: "17–21 in" },
              { label: "Weight", value: "75 lbs" },
            ].map(s => (
              <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center">
                <p className="text-lg font-bold text-white">{s.value}</p>
                <p className="text-xs text-cream-300 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-8 sm:px-12 py-16 space-y-16">
        <section>
          {/* Hero: herd coming down the path — shows the whole operation */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
          <Image src="/images/farm/nd-herd-path.jpeg" alt="Nigerian Dwarf herd at RiverHouse Dairy" fill className="object-cover" sizes="100vw" />
        </div>
        {/* Row 2: action browsing shots */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image src="/images/farm/nd-rearing-tree.png" alt="Nigerian Dwarf goat rearing up to browse tree at RiverHouse Dairy" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image src="/images/farm/nd-browsing-bush.jpeg" alt="Nigerian Dwarf goat browsing at RiverHouse Dairy" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
        {/* Row 3: kids — the color variety is the story */}
        <div className="grid grid-cols-4 gap-3 mb-4">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/nd-kid-brown.jpeg" alt="Nigerian Dwarf kid at RiverHouse Dairy" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/nd-kid-spotted-straw.jpeg" alt="Nigerian Dwarf spotted kid at RiverHouse Dairy" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/nd-kid-pinto.jpeg" alt="Nigerian Dwarf pinto kid at RiverHouse Dairy" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/nd-kid-black-pumpkin.jpeg" alt="Nigerian Dwarf black kid at RiverHouse Dairy" fill className="object-cover" sizes="25vw" />
          </div>
        </div>
        {/* Row 4: details and character */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/nd-kid-brick-wall.jpeg" alt="Nigerian Dwarf kid by brick wall at RiverHouse Dairy" fill className="object-cover" sizes="33vw" />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/nd-dandelion.jpeg" alt="Nigerian Dwarf goat grazing dandelions at RiverHouse Dairy" fill className="object-cover" sizes="33vw" />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image src="/images/farm/nd-fence-nose.jpeg" alt="Nigerian Dwarf goats at the fence at RiverHouse Dairy" fill className="object-cover" sizes="33vw" />
          </div>
        </div>
          <h2 className="text-2xl font-bold text-forest">At RiverHouse Dairy</h2>
          <p className="mt-4 text-lg text-forest-600 leading-relaxed">
            Our Nigerian Dwarf does are the backbone of our dairy operation. We started with Relequen and Gwendolyn in Spring 2022 — two kids that couldn&apos;t produce milk yet. Within weeks we were back buying their dam, then five more goats. The herd grew fast because Nigerian Dwarfs are simply exceptional dairy animals for a small operation: manageable size, high butterfat, year-round breeding, and genuine personality.
          </p>
          <p className="mt-4 text-lg text-forest-600 leading-relaxed">
            Our first farm-born kid, Dagny, was born January 1, 2023 — daughter of Liza and our accidental precocious buckling, Popcorn. Nobody said farming was predictable.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-forest">History & Origin</h2>
          <div className="mt-4 space-y-4 text-base text-forest-600 leading-relaxed">
            <p>Nigerian Dwarf goats trace their ancestry to West Africa, where small goats adapted over thousands of years to survive in diverse climates with variable forage availability. They arrived in the United States in the mid-20th century, initially as zoo animals — their small size, colorful coats, and friendly temperament made them popular exhibition animals.</p>
            <p>Over the following decades, American breeders recognized the exceptional dairy potential hidden in the small package. Nigerian Dwarfs were developed into recognized dairy breeds by the American Dairy Goat Association and the American Goat Society. By the 1980s and 90s, they had transitioned from zoo curiosities to legitimate dairy animals, particularly suited to small farms and homesteads.</p>
            <p>Today they are one of the fastest-growing dairy goat breeds in the United States — partly for their practicality, but equally because their butterfat content is unmatched in the goat world.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-forest">Contributions to Humanity</h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              { icon: "🥛", title: "Dairy", body: "The richest butterfat of any goat breed at 6–10% makes Nigerian Dwarf milk exceptional for cheese, yogurt, soap, and drinking. Two does can supply a family with more usable dairy product than one large breed." },
              { icon: "🐾", title: "Companionship", body: "Their small size and sociable nature made them valuable companion animals in agricultural communities. They were historically kept near homes and in smaller pastures alongside other livestock." },
              { icon: "🌍", title: "Food Security", body: "In West Africa, small goats like the Nigerian Dwarf remain critical to household food security — requiring less feed and space than large breeds while providing milk and meat for families without access to large pasture." },
            ].map(c => (
              <div key={c.title} className="rounded-xl bg-gray-50 border border-gray-200 p-5">
                <div className="text-2xl mb-3">{c.icon}</div>
                <h3 className="font-bold text-forest">{c.title}</h3>
                <p className="text-sm text-forest-600 mt-2 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-forest">Milk Profile</h2>
          <div className="mt-4 space-y-3 text-base text-forest-600 leading-relaxed">
            <p><strong className="text-forest">Butterfat:</strong> 6–10% — the highest of any dairy goat breed. For comparison, Holstein cow milk averages 3.5%. This richness makes Nigerian Dwarf milk ideal for artisan cheese, soap, and yogurt.</p>
            <p><strong className="text-forest">Naturally homogenized:</strong> Like all goat milk, the fat globules are smaller than in cow milk and don&apos;t separate. No cream line forms. What you pour is what you get throughout the container.</p>
            <p><strong className="text-forest">Volume:</strong> 1–2 quarts per day — modest compared to full-size breeds, but the butterfat content means more usable solids per gallon than any other goat.</p>
            <p><strong className="text-forest">Flavor:</strong> Properly managed Nigerian Dwarf milk is sweet, mild, and noticeably different from commercial goat milk. Off-flavor comes from management failures, not the breed.</p>
          </div>
        </section>

        <BreedNav current="nigerian-dwarf" />
      </div>
    </>
  );
}

function BreedNav({ current }: { current: string }) {
  const breeds = [
    { name: "Nigerian Dwarf", slug: "nigerian-dwarf" },
    { name: "LaMancha", slug: "lamancha" },
    { name: "Mini-LaMancha", slug: "mini-lamancha" },
    { name: "Mini Nubian", slug: "mini-nubian" },
    { name: "Icelandic", slug: "icelandic" },
    { name: "Lacaune", slug: "lacaune" },
    { name: "Jersey", slug: "jersey" },
    { name: "Zebu", slug: "zebu" },
  ];
  return (
    <div className="pt-8 border-t border-gray-200">
      <p className="text-sm font-bold uppercase tracking-wider text-forest mb-4">All Breeds</p>
      <div className="flex flex-wrap gap-2">
        {breeds.map(b => (
          <Link key={b.slug} href={`/animals/${b.slug}`}
            className={`text-sm px-4 py-2 rounded-full border transition-colors ${b.slug === current ? "bg-forest text-white border-forest" : "border-gray-200 text-forest-600 hover:border-plum hover:text-plum"}`}>
            {b.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
