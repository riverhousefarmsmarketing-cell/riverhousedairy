import Link from "next/link";
import Image from "next/image";
import { brand, stats, products } from "@/lib/tokens";
import { FarmBureauBadge } from "@/components/layout";

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════
          1. HERO — Clear identity + primary action
          When shop launches: swap CTAs to "Shop Now" + "Start a Subscription"
          ════════════════════════════════════════════ */}
      <section className="relative h-[85vh] min-h-[600px]">
        <Image
          src="/images/farm/sheep-pasture.png"
          alt="RiverHouse Dairy sheep flock grazing in Lewis County pasture"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight max-w-3xl">
            Premium Dairy.<br />
            <span className="text-plum-200">Small Farm Values.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-lg font-medium">
            Ethically raised dairy goats, sheep, and cattle
            on a family farm in Chehalis, Washington.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/animals"
              className="rounded-lg bg-plum px-8 py-4 text-base font-bold text-white hover:bg-plum-600 transition-colors shadow-lg"
            >
              Meet Our Animals
            </Link>
            <Link
              href="/health"
              className="rounded-lg bg-white/15 backdrop-blur-sm border border-white/30 px-8 py-4 text-base font-bold text-white hover:bg-white/25 transition-colors"
            >
              Goat Health Resources
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          2. TRUST BAR — Social proof, clean and tight
          ════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-semibold text-forest">
            <span>80+ Animals</span>
            <span className="hidden sm:inline text-forest-200">·</span>
            <span>8 Breeds</span>
            <span className="hidden sm:inline text-forest-200">·</span>
            <span>Lewis County Farm Bureau Board</span>
            <span className="hidden sm:inline text-forest-200">·</span>
            <span>Est. Chehalis, WA</span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          3. WHY WE'RE DIFFERENT — Three pillars
          ════════════════════════════════════════════ */}
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum text-center">
            Why RiverHouse Dairy
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest text-center mt-3 mb-14">
            What Makes Us Different
          </h2>
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              {
                icon: "🐄",
                title: "Animal-First Care",
                text: "Every animal is known by name. We practice FAMACHA scoring, preventive health protocols, and data-driven herd management through GoatSteward.",
              },
              {
                icon: "🌱",
                title: "Rare Genetics",
                text: "We drove 1,157 miles for Lacaune dairy sheep genetics. We're building breeding programs in Nigerian Dwarf, LaMancha, Icelandic, and East Friesian lines.",
              },
              {
                icon: "🔧",
                title: "Technology That Serves",
                text: "We built GoatSteward — a 536-function herd management app — because nothing existed for small dairy farmers. Software built by a steward, for stewards.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="text-center">
                <span className="text-4xl">{pillar.icon}</span>
                <h3 className="text-lg font-bold text-forest mt-4">{pillar.title}</h3>
                <p className="mt-3 text-base text-forest-400 leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          4. BREEDS — Product-style cards
          When shop launches: these become product category links
          ════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum text-center">
            What We Raise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest text-center mt-3 mb-12">
            Our Animals
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                name: "Dairy Goats",
                note: "Nigerian Dwarf · LaMancha · Mini-LaMancha · Mini Nubian",
                image: "/images/farm/goat-herd-path.png",
                alt: "Goat herd on gravel path at RiverHouse Dairy",
              },
              {
                name: "Dairy & Fiber Sheep",
                note: "Icelandic · Lacaune-cross · East Friesian mixes",
                image: "/images/farm/icelandic-rams.png",
                alt: "Icelandic rams at RiverHouse Dairy",
              },
              {
                name: "Heritage Cattle",
                note: "Jersey cows · Zebu cattle",
                image: "/images/farm/jersey-with-sheep.jpeg",
                alt: "Jersey cow at RiverHouse Dairy",
              },
            ].map((breed) => (
              <Link
                key={breed.name}
                href="/animals"
                className="group block rounded-xl overflow-hidden bg-cream shadow-sm hover:shadow-lg transition-shadow duration-300"
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
                  <p className="mt-1 text-sm text-forest-400">{breed.note}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          5. OUR STORY — Timeline + Where We're Going
          ════════════════════════════════════════════ */}
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-20">
          {/* Intro with photo */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="w-64 h-64 shrink-0 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/farm/christine-with-jersey.jpeg"
                alt="Christine with a Jersey cow at RiverHouse Dairy"
                width={256}
                height={256}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-forest mt-3">
                The RiverHouse Dairy Story
              </h2>
              <p className="mt-4 text-lg text-forest-400 leading-relaxed max-w-lg">
                We bought this farm in 2020 with no farming background. What started
                with two baby goats and a desire for fresh milk turned into a
                multi-species dairy operation — and we&apos;re just getting started.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-plum-200 -translate-x-1/2" />

            {[
              {
                year: "2020",
                title: "The Farm",
                text: "Bought the property in Chehalis, Washington. Twenty years in Lewis County, but brand new to the farming community.",
                side: "left" as const,
              },
              {
                year: "Spring 2022",
                title: "Two Baby Goats",
                text: "Relequen and Gwendolyn — our first two Nigerian Dwarf kids. But we wanted milk that year, so we went right back for their mother Jewel, plus Liza, Eleanor and her kids. By July we added a buckling named Popcorn.",
                side: "right" as const,
              },
              {
                year: "Jan 1, 2023",
                title: "First Farm-Born Kid",
                text: "Dagny was born on New Year's Day — daughter of Liza and Popcorn, who bred through the fence at four months old. Nobody said farming was predictable.",
                side: "left" as const,
              },
              {
                year: "Summer 2023",
                title: "Sheep Arrive",
                text: "Looking for high-fat milk, we discovered Icelandic sheep — heritage breed with incredible fleece and rich milk. The flock began.",
                side: "right" as const,
              },
              {
                year: "2024",
                title: "Jersey Cows & Zebu",
                text: "My niece has low-functioning autism and can't tolerate cow milk — but A2/A2 genetics changed that. We added Jersey cows and Zebu cattle for heavy cream to make our ice cream, yogurt, and cheese even better. Cow milk separates the cream; goat and sheep milk is naturally homogenized. Together, they make incredible dairy products.",
                side: "left" as const,
              },
              {
                year: "2024",
                title: "Farm Bureau",
                text: "Frustrated by the lack of a farming network and struggling to find cost-effective feed, I joined the Lewis County Farm Bureau. A fellow farmer with a pumpkin patch invited us to bring baby goats — we sold 11. A large dairy farmer added 300 lbs of seed to his order for me. The connections changed everything.",
                side: "right" as const,
              },
              {
                year: "2025",
                title: "GoatSteward & Lacaune Genetics",
                text: "Built GoatSteward — a 536-function herd management app — because nothing existed for goat farmers. Traveled 1,157 miles to South Dakota for four Lacaune-influenced ewes to build rare dairy sheep genetics in the Pacific Northwest.",
                side: "left" as const,
              },
              {
                year: "Nov 2025",
                title: "Farm Bureau Board",
                text: "Attended the annual state Farm Bureau meeting for full policy review. Became a Lewis County Farm Bureau board member. Built GoodOfTheOrder to help manage board meeting minutes.",
                side: "right" as const,
              },
              {
                year: "Jan 2026",
                title: "Farmers Networking Series",
                text: "Hosted the first Farmers Networking event at D9 Market in Ethel. Great reception. Building the farming community we wished we'd had when we started.",
                side: "left" as const,
              },
            ].map((item, i) => (
              <div key={i} className="relative flex items-start mb-10 last:mb-0">
                {/* Dot on the line */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-plum rounded-full -translate-x-1/2 mt-1.5 ring-4 ring-cream z-10" />

                {/* Content — alternating sides on desktop, all right on mobile */}
                <div className={`ml-10 md:ml-0 md:w-1/2 ${
                  item.side === "left"
                    ? "md:pr-12 md:text-right"
                    : "md:pl-12 md:ml-auto"
                }`}>
                  <span className="inline-block text-sm font-bold text-plum bg-plum-50 px-3 py-1 rounded-full mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-forest">{item.title}</h3>
                  <p className="mt-2 text-base text-forest-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Where We're Going */}
          <div className="mt-20 rounded-xl bg-white border border-forest-100 p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum">
              Where We&apos;re Going
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-forest mt-3">
              The Road Ahead
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {[
                {
                  label: "Spring 2026",
                  title: "Pure Lacaune Genetics",
                  text: "10 pure Lacaune semen straws arriving — 5 each from two different rams. Building a foundation Lacaune dairy sheep breeding program in the PNW.",
                },
                {
                  label: "2026",
                  title: "Organic Micro Dairy",
                  text: "Working toward becoming a licensed organic micro dairy with raw milk, artisan cheese, yogurt, ice cream, and value-added products.",
                },
                {
                  label: "2026–2027",
                  title: "Farm Goods Store",
                  text: "An online store at riverhousedairy.com/shop — dairy products, body care, breeding stock, and merchandise. Real products, real prices.",
                },
                {
                  label: "Future",
                  title: "Agrotourism",
                  text: "Farm visits, educational workshops, and agrotourism experiences. We're not there yet — but it's where we're headed.",
                },
              ].map((goal) => (
                <div key={goal.title} className="border-l-4 border-plum-200 pl-5">
                  <span className="text-xs font-bold text-plum uppercase tracking-wider">
                    {goal.label}
                  </span>
                  <h4 className="text-lg font-bold text-forest mt-1">{goal.title}</h4>
                  <p className="mt-2 text-base text-forest-400 leading-relaxed">{goal.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/about"
              className="rounded-lg bg-plum px-6 py-3 text-base font-bold text-white hover:bg-plum-600 transition-colors"
            >
              Read the Full Story
            </Link>
            <FarmBureauBadge size="lg" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          6. GOAT HEALTH — Authority play / SEO driver / GoatSteward funnel
          This is the "product" section until the shop launches
          ════════════════════════════════════════════ */}
      <section className="bg-forest">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum-200 text-center">
            Free Resource
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mt-3">
            Goat Health Reference
          </h2>
          <p className="mt-4 text-lg text-cream-300 text-center max-w-2xl mx-auto leading-relaxed">
            Conditions, medications, myths debunked, FAMACHA scoring, and care guides —
            from the barn at RiverHouse Dairy.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                className="group flex items-center justify-between rounded-lg bg-forest-600/50 border border-forest-400/30 px-5 py-4 hover:bg-forest-600/70 transition-colors"
              >
                <span className="text-base font-semibold text-white group-hover:text-plum-200 transition-colors">
                  {item.label}
                </span>
                <span className="text-sm text-cream-400 font-medium">{item.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          7. ASK ME ABOUT — Community engagement
          ════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="rounded-xl bg-cream border-l-4 border-plum p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum">
              Ask Me About
            </p>
            <h3 className="text-2xl font-bold text-forest mt-3">
              Leveraged Seed Buy Through Farm Bureau
            </h3>
            <p className="mt-3 text-base text-forest-400 leading-relaxed max-w-2xl">
              I saved hundreds on pasture seed this year by pooling purchasing power
              with other Lewis County farmers. You don&apos;t have to buy a semi-load alone.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/ask-me-about/leveraged-seed-buy"
                className="rounded-lg bg-plum px-6 py-3 text-base font-bold text-white hover:bg-plum-600 transition-colors"
              >
                Learn How →
              </Link>
              <FarmBureauBadge size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          8. FARM TOOLS — Software products
          ════════════════════════════════════════════ */}
      <section className="bg-cream border-t border-gray-100">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum text-center">
            Built by a Steward, for Stewards
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest text-center mt-3 mb-12">
            Farm Tools
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[products.goatSteward, products.cloverTrack, products.goodOfTheOrder].map(
              (product) => (
                <Link
                  key={product.name}
                  href={product.route}
                  className="group block rounded-xl bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-lg font-bold text-forest group-hover:text-plum transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-base text-forest-400 leading-relaxed">
                    {product.description}
                  </p>
                  {product.domain && (
                    <p className="mt-4 text-sm text-plum font-bold">{product.domain} →</p>
                  )}
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FUTURE: SHOP SECTION (Phase 2)
          When commerce launches, insert here:
          - Featured Products with real pricing
          - "How It Works" for subscriptions
          - Subscription push with "Save 10%" CTA
          - Delivery zones
          Architecture is ready — just add the section.
          ════════════════════════════════════════════ */}
    </>
  );
}
