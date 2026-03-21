import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Animals | RiverHouse Dairy",
  description: "80+ animals across eight breeds at RiverHouse Dairy in Chehalis, Washington. Nigerian Dwarf, LaMancha, Mini-LaMancha, Mini Nubian goats, Icelandic sheep, Lacaune-cross dairy sheep, Jersey cows, and Zebu cattle.",
};

const breeds = [
  {
    name: "Nigerian Dwarf",
    category: "Dairy Goat",
    slug: "nigerian-dwarf",
    role: "Primary milk production · Year-round",
    tagline: "Compact, prolific, and richest butterfat of any dairy goat breed.",
    image: "/images/farm/goat-herd-path.png",
    alt: "Nigerian Dwarf goats at RiverHouse Dairy",
    stats: [
      { label: "Butterfat", value: "6–10%" },
      { label: "Milk/day", value: "1–2 qts" },
      { label: "Size", value: "17–21 in" },
    ],
  },
  {
    name: "LaMancha",
    category: "Dairy Goat",
    slug: "lamancha",
    role: "High-volume milk · Gentle temperament",
    tagline: "The earless dairy goat. Consistently calm, consistently producing.",
    image: "/images/farm/goat-browsing-cedar.png",
    alt: "LaMancha goat at RiverHouse Dairy",
    stats: [
      { label: "Butterfat", value: "3.9–4.5%" },
      { label: "Milk/day", value: "1–2 gal" },
      { label: "Origin", value: "Oregon, USA" },
    ],
  },
  {
    name: "Mini-LaMancha",
    category: "Dairy Goat",
    slug: "mini-lamancha",
    role: "Compact version · High butterfat for size",
    tagline: "LaMancha quality in a smaller, easier-to-manage package.",
    image: "/images/farm/mini-lamancha-5.jpeg",
    alt: "Mini-LaMancha goats at RiverHouse Dairy",
    stats: [
      { label: "Butterfat", value: "4.5–5.5%" },
      { label: "Size", value: "25–29 in" },
      { label: "Cross", value: "LaMancha × ND" },
    ],
  },
  {
    name: "Mini Nubian",
    category: "Dairy Goat",
    slug: "mini-nubian",
    role: "High butterfat · Dual-purpose potential",
    tagline: "Nubian richness in a compact, manageable frame.",
    image: "/images/farm/mini-nubian-herd.jpeg",
    alt: "Mini Nubian herd at RiverHouse Dairy",
    stats: [
      { label: "Butterfat", value: "5–8%" },
      { label: "Size", value: "23–29 in" },
      { label: "Cross", value: "Nubian × ND" },
    ],
  },
  {
    name: "Icelandic",
    category: "Dairy Sheep",
    slug: "icelandic",
    role: "Heritage breed · Milk, wool, and meat",
    tagline: "1,100 years of Nordic selection. Hardy, triple-purpose, and truly self-sufficient.",
    image: "/images/farm/sheep-flock-field.png",
    alt: "Icelandic sheep at RiverHouse Dairy",
    stats: [
      { label: "Butterfat", value: "6–8%" },
      { label: "Fleece", value: "4–7 lbs/yr" },
      { label: "Origin", value: "Iceland" },
    ],
  },
  {
    name: "Lacaune",
    category: "Dairy Sheep",
    slug: "lacaune",
    role: "Premier dairy sheep · Roquefort genetics",
    tagline: "The breed behind Roquefort cheese. We drove 1,157 miles to start our breeding program.",
    image: "/images/farm/sheep-pasture.png",
    alt: "Sheep flock at RiverHouse Dairy",
    stats: [
      { label: "Milk/yr", value: "200–300 L" },
      { label: "Butterfat", value: "7–8%" },
      { label: "Origin", value: "Southern France" },
    ],
  },
  {
    name: "Jersey",
    category: "Dairy Cattle",
    slug: "jersey",
    role: "A2/A2 genetics · Heavy cream",
    tagline: "The world's most efficient dairy cow. Our A2/A2 Jerseys produce cream that transforms our dairy products.",
    image: "/images/farm/jerseys-pasture.jpeg",
    alt: "Jersey cows at RiverHouse Dairy",
    stats: [
      { label: "Butterfat", value: "4.5–5.5%" },
      { label: "Protein", value: "3.8–4.0%" },
      { label: "Origin", value: "Jersey Island" },
    ],
  },
  {
    name: "Zebu",
    category: "Cattle",
    slug: "zebu",
    role: "A2/A2 · Heat tolerant · Ancient genetics",
    tagline: "One of humanity's oldest domesticated cattle. Hardy, heat-adapted, and genetically distinct.",
    image: "/images/farm/jersey-with-sheep.jpeg",
    alt: "Cattle at RiverHouse Dairy",
    stats: [
      { label: "Hump", value: "Bos indicus" },
      { label: "Origin", value: "South Asia" },
      { label: "Age", value: "8,000+ yrs" },
    ],
  },
];

const categoryColors: Record<string, string> = {
  "Dairy Goat": "bg-forest-50 text-forest border-forest-200",
  "Dairy Sheep": "bg-plum-50 text-plum border-plum-200",
  "Dairy Cattle": "bg-amber-50 text-amber-800 border-amber-200",
  "Cattle": "bg-amber-50 text-amber-800 border-amber-200",
};

export default function AnimalsPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-20">
          <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
            Our Animals
          </h1>
          <p className="mt-5 text-xl text-cream-300 max-w-2xl leading-relaxed">
            80+ animals. Eight breeds. Three species. Every animal selected for milk quality, herd health, and genetic purpose.
          </p>

          {/* Category pills */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "4 Goat Breeds", color: "bg-white/10 text-white" },
              { label: "2 Sheep Breeds", color: "bg-white/10 text-white" },
              { label: "2 Cattle Breeds", color: "bg-white/10 text-white" },
            ].map(p => (
              <span key={p.label} className={`text-sm font-medium px-4 py-1.5 rounded-full ${p.color}`}>
                {p.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Goats */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-20">
          <div className="flex items-baseline gap-4 mb-12 pb-4 border-b-2 border-forest">
            <h2 className="text-3xl font-bold text-forest">Dairy Goats</h2>
            <span className="text-forest-600">4 breeds</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {breeds.filter(b => b.category === "Dairy Goat").map(breed => (
              <BreedCard key={breed.slug} breed={breed} />
            ))}
          </div>
        </div>
      </section>

      {/* Sheep */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-20">
          <div className="flex items-baseline gap-4 mb-12 pb-4 border-b-2 border-forest">
            <h2 className="text-3xl font-bold text-forest">Dairy Sheep</h2>
            <span className="text-forest-600">2 breeds</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {breeds.filter(b => b.category === "Dairy Sheep").map(breed => (
              <BreedCard key={breed.slug} breed={breed} />
            ))}
          </div>
          {/* Lacaune story callout */}
          <div className="mt-10 rounded-xl bg-forest text-white p-7 flex flex-col sm:flex-row gap-6 items-start">
            <div className="text-3xl shrink-0">🚗</div>
            <div>
              <p className="font-bold text-white text-lg">1,157 Miles for Lacaune Genetics</p>
              <p className="text-cream-300 mt-2 leading-relaxed">
                In 2025, Christine drove from Chehalis to South Dakota to bring home four Lacaune-influenced ewes. In Spring 2026, 10 pure Lacaune semen straws arrive from France. We&apos;re building a Lacaune breeding program in the Pacific Northwest — a breed that barely exists here.
              </p>
              <Link href="/about" className="inline-block mt-3 text-sm font-bold text-plum-200 hover:text-white transition-colors">
                Read the full story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cattle */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-20">
          <div className="flex items-baseline gap-4 mb-4 pb-4 border-b-2 border-forest">
            <h2 className="text-3xl font-bold text-forest">Cattle</h2>
            <span className="text-forest-600">2 breeds · A2/A2</span>
          </div>
          <p className="text-forest-600 mb-12 leading-relaxed max-w-2xl">
            Our cattle are A2/A2 genetics — a specific beta-casein protein variant that some people with conventional dairy intolerance can consume without issue. We added cattle specifically for cream: goat and sheep milk is naturally homogenized, but cow milk separates. That cream makes our ice cream, cheese, and yogurt exceptional.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {breeds.filter(b => b.category === "Dairy Cattle" || b.category === "Cattle").map(breed => (
              <BreedCard key={breed.slug} breed={breed} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function BreedCard({ breed }: { breed: typeof breeds[0] }) {
  const catColor = categoryColors[breed.category] ?? "bg-gray-50 text-gray-700 border-gray-200";
  return (
    <Link
      href={`/animals/${breed.slug}`}
      className="group block rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-lg transition-all hover:-translate-y-0.5"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={breed.image}
          alt={breed.alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className={`absolute top-3 left-3 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${catColor}`}>
          {breed.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-forest group-hover:text-plum transition-colors">
          {breed.name}
        </h3>
        <p className="text-xs font-semibold text-plum uppercase tracking-wider mt-1">{breed.role}</p>
        <p className="text-sm text-forest-600 mt-3 leading-relaxed">{breed.tagline}</p>
        {/* Stats */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {breed.stats.map(s => (
            <div key={s.label} className="text-center bg-gray-50 rounded-lg py-2">
              <p className="text-sm font-bold text-forest">{s.value}</p>
              <p className="text-xs text-forest-600 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs font-bold text-plum group-hover:translate-x-1 transition-transform inline-block">
          Learn about this breed →
        </p>
      </div>
    </Link>
  );
}
