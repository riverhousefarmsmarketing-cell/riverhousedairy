import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/tokens";
import { FarmBureauBadge } from "@/components/layout";

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════
          1. HERO — What you produce + where + CTA
          ════════════════════════════════════════════ */}
      <section className="relative h-[85vh] min-h-[600px]">
        <Image
          src="/images/farm/sheep-pasture.png"
          alt="RiverHouse Dairy flock grazing in Lewis County pasture"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-2xl">
            Raw Goat Milk Year-Round.<br />
            <span className="text-cream-200">Seasonal Sheep Milk.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-md font-medium">
            Small herd. Clean protocols.<br />
            Chehalis, Washington.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-plum px-8 py-4 text-base font-bold text-white hover:bg-plum-600 transition-colors shadow-lg"
            >
              Join the Raw Milk List
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-white/15 backdrop-blur-sm border border-white/30 px-8 py-4 text-base font-bold text-white hover:bg-white/25 transition-colors"
            >
              Wholesale &amp; Creamery Inquiries
            </Link>
          </div>
          <p className="mt-6 text-sm text-cream-300">
            WA State raw milk licensing in progress · Summer 2026
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. OUR MILK — What you produce, factual
          ════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum text-center">
            What We Produce
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest text-center mt-3 mb-14">
            Our Milk
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            {/* Goat Milk */}
            <div className="rounded-xl overflow-hidden bg-white border border-gray-100">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src="/images/farm/goat-herd-path.png"
                  alt="Dairy goat herd at RiverHouse Dairy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-plum">
                  Year-Round Production
                </span>
                <h3 className="text-2xl font-bold text-forest mt-2">Raw Goat Milk</h3>
                <p className="mt-3 text-base text-forest-600 leading-relaxed">
                  Nigerian Dwarf, LaMancha, Mini-LaMancha, and Mini Nubian does.
                  Nigerian Dwarf milk averages 6–10% butterfat — the richest of any
                  goat breed. Naturally homogenized. Ideal for drinking, cheese, yogurt,
                  and soap.
                </p>
                <p className="mt-3 text-base text-forest-600 leading-relaxed">
                  Farm pickup · Retail · Bulk supply available
                </p>
              </div>
            </div>

            {/* Sheep Milk */}
            <div className="rounded-xl overflow-hidden bg-white border border-gray-100">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src="/images/farm/icelandic-rams.png"
                  alt="Icelandic sheep at RiverHouse Dairy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-plum">
                  Seasonal · Limited Quantity
                </span>
                <h3 className="text-2xl font-bold text-forest mt-2">Raw Sheep Milk</h3>
                <p className="mt-3 text-base text-forest-600 leading-relaxed">
                  Icelandic, Lacaune-cross, and East Friesian lines. We are developing
                  Lacaune and East Friesian genetics for high-butterfat sheep milk
                  suitable for artisan cheese and yogurt.
                </p>
                <p className="mt-3 text-base text-forest-600 leading-relaxed">
                  Premium pricing · Seasonal availability · Ideal for cheesemakers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3. RAW MILK STANDARDS
          ════════════════════════════════════════════ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum text-center">
            How We Operate
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest text-center mt-3 mb-12">
            Our Raw Milk Standards
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { title: "Small, Closed Herds", text: "No outside animals introduced without quarantine and health screening." },
              { title: "Individual Animal Tracking", text: "Every animal tracked daily through GoatSteward — health, milk records, breeding, FAMACHA scores." },
              { title: "Preventive Health Protocols", text: "FAMACHA scoring, fecal egg counts, targeted deworming. Data-driven decisions, not calendar schedules." },
              { title: "Clean Milking Protocols", text: "Sanitized equipment, pre- and post-milking teat care, stainless steel collection." },
              { title: "Rapid Chilling", text: "Milk chilled immediately after collection to maintain safety and quality." },
              { title: "State Licensing In Progress", text: "Washington State raw milk licensing application submitted. Operating in compliance with state regulations." },
            ].map((standard) => (
              <div key={standard.title} className="bg-white rounded-xl p-5">
                <h3 className="text-base font-bold text-forest">{standard.title}</h3>
                <p className="mt-2 text-sm text-forest-600 leading-relaxed">{standard.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          4. WHOLESALE & CREAMERY
          ════════════════════════════════════════════ */}
      <section className="bg-forest">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum-200">
            For Buyers
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Wholesale &amp; Bulk Milk
          </h2>
          <p className="mt-4 text-lg text-cream-300 leading-relaxed max-w-xl mx-auto">
            We are developing capacity to supply retail outlets, local creameries,
            and artisan cheese makers with raw goat and sheep milk.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-plum px-8 py-4 text-base font-bold text-white hover:bg-plum-600 transition-colors"
          >
            Partnership Inquiries →
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5. LICENSING & TIMELINE
          ════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum text-center">
            Timeline
          </p>
          <h2 className="text-3xl font-bold text-forest text-center mt-3 mb-12">
            Licensing &amp; What&apos;s Next
          </h2>
          <div className="space-y-6">
            {[
              {
                label: "Now",
                title: "WA Raw Milk Licensing",
                text: "Application in progress. RiverHouse Dairy will operate in accordance with Washington State raw milk regulations.",
                active: true,
              },
              {
                label: "Summer 2026",
                title: "Raw Milk Sales Launch",
                text: "Farm pickup, retail distribution, and bulk supply to local creameries. Goat milk year-round, sheep milk seasonal.",
                active: false,
              },
              {
                label: "Spring 2026",
                title: "Pure Lacaune Genetics",
                text: "10 pure Lacaune semen straws arriving from two different rams. Building foundation dairy sheep genetics for high-butterfat milk production.",
                active: false,
              },
              {
                label: "2026–2027",
                title: "Value-Added Products",
                text: "Raw milk yogurt, farmstead cheese, small-batch ice cream — made from our own goat and sheep milk.",
                active: false,
              },
              {
                label: "Future",
                title: "Agrotourism & Farm Store",
                text: "On-farm experiences and an online store at riverhousedairy.com/shop. We are building toward this deliberately.",
                active: false,
              },
            ].map((step) => (
              <div
                key={step.title}
                className={`border-l-4 pl-6 ${
                  step.active ? "border-plum" : "border-forest-100"
                }`}
              >
                <span className={`text-xs font-bold uppercase tracking-wider ${
                  step.active ? "text-plum" : "text-forest-300"
                }`}>
                  {step.label}
                </span>
                <h3 className="text-lg font-bold text-forest mt-1">{step.title}</h3>
                <p className="mt-2 text-base text-forest-600 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          6. WHAT WE RAISE — Breeds overview
          ════════════════════════════════════════════ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum text-center">
            Our Animals
          </p>
          <h2 className="text-3xl font-bold text-forest text-center mt-3 mb-12">
            What We Raise
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                name: "Dairy Goats",
                detail: "Nigerian Dwarf · LaMancha · Mini-LaMancha · Mini Nubian",
                role: "Primary milk production · Year-round",
                image: "/images/farm/goat-browsing-cedar.png",
                alt: "Goat browsing at RiverHouse Dairy",
              },
              {
                name: "Dairy Sheep",
                detail: "Icelandic · Lacaune-cross · East Friesian",
                role: "Seasonal milk · High butterfat · Breeding program",
                image: "/images/farm/sheep-flock-field.png",
                alt: "Sheep flock at RiverHouse Dairy",
              },
              {
                name: "A2/A2 Cattle",
                detail: "Jersey cows · Zebu",
                role: "Heavy cream for value-added dairy products",
                image: "/images/farm/jersey-with-sheep.jpeg",
                alt: "Jersey cow at RiverHouse Dairy",
              },
            ].map((breed) => (
              <Link
                key={breed.name}
                href="/animals"
                className="group block rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={breed.image}
                    alt={breed.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-forest group-hover:text-plum transition-colors">
                    {breed.name}
                  </h3>
                  <p className="mt-1 text-sm text-forest-600">{breed.detail}</p>
                  <p className="mt-2 text-sm text-plum font-medium">{breed.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          7. OUR STORY — Condensed, supports not leads
          ════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-56 h-56 shrink-0 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/farm/christine-with-jersey.jpeg"
                alt="Christine with a Jersey cow at RiverHouse Dairy"
                width={224}
                height={224}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum">
                Our Story
              </p>
              <h2 className="text-3xl font-bold text-forest mt-3">
                From Two Goats to a Working Dairy
              </h2>
              <p className="mt-4 text-base text-forest-600 leading-relaxed">
                We bought this property in 2020 and started with two Nigerian Dwarf kids
                in 2022. Today we manage 80+ animals across eight breeds — goats, sheep,
                and cattle — all selected for milk quality and herd health. We joined the
                Lewis County Farm Bureau in 2024 and joined the board in 2025. Those
                connections strengthened the foundation of our farm.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="/about"
                  className="rounded-lg bg-plum px-6 py-3 text-base font-bold text-white hover:bg-plum-600 transition-colors"
                >
                  Read the Full Story
                </Link>
                <FarmBureauBadge size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          8. GOAT HEALTH — Authority / SEO / funnel
          ════════════════════════════════════════════ */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum text-center">
            Free Resource
          </p>
          <h2 className="text-3xl font-bold text-forest text-center mt-3">
            Goat Health Reference
          </h2>
          <p className="mt-4 text-base text-forest-600 text-center max-w-2xl mx-auto leading-relaxed">
            Health conditions, medications, myths debunked, FAMACHA scoring, and care
            guides — from the barn at RiverHouse Dairy.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Health Conditions", href: "/health/conditions", count: "15+" },
              { label: "Medication Reference", href: "/health/medications", count: "20+" },
              { label: "Myths Debunked", href: "/health/myths", count: "14" },
              { label: "FAMACHA Guide", href: "/health/famacha", count: "Visual" },
              { label: "Care Guides", href: "/health/guides", count: "7" },
              { label: "GoatSteward App", href: "/tools/goatsteward", count: "536 functions" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center justify-between rounded-lg bg-white border border-forest-100 px-5 py-4 hover:border-plum hover:shadow-md transition-all"
              >
                <span className="text-base font-semibold text-forest group-hover:text-plum transition-colors">
                  {item.label}
                </span>
                <span className="text-sm text-forest-300 font-medium">{item.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          9. BUILT FROM THE DAIRY — Apps as infrastructure
          ════════════════════════════════════════════ */}
      <section className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum text-center">
            Built From the Dairy
          </p>
          <h2 className="text-3xl font-bold text-forest text-center mt-3">
            Our Tools
          </h2>
          <p className="mt-4 text-base text-forest-600 text-center max-w-xl mx-auto leading-relaxed">
            We built GoatSteward because small goat dairies lacked proper herd
            management tools. We use it daily to track animal health, breeding,
            and milk records.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[products.goatSteward, products.cloverTrack, products.goodOfTheOrder].map(
              (product) => (
                <Link
                  key={product.name}
                  href={product.route}
                  className="group block rounded-xl bg-gray-50 border border-gray-100 p-5 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-base font-bold text-forest group-hover:text-plum transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-forest-600 leading-relaxed">
                    {product.description}
                  </p>
                  {product.domain && (
                    <p className="mt-3 text-xs text-plum font-bold">{product.domain} →</p>
                  )}
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          10. WAITLIST CTA — Final push
          ════════════════════════════════════════════ */}
      <section className="bg-forest">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white">
            Raw Milk Coming Summer 2026
          </h2>
          <p className="mt-4 text-lg text-cream-300 max-w-lg mx-auto leading-relaxed">
            Farm pickup in Chehalis, WA. Retail and bulk supply available.
            Get on the list to be first.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-plum px-8 py-4 text-base font-bold text-white hover:bg-plum-600 transition-colors shadow-lg"
            >
              Join the Raw Milk List
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-white/15 border border-white/30 px-8 py-4 text-base font-bold text-white hover:bg-white/25 transition-colors"
            >
              Wholesale Inquiries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
