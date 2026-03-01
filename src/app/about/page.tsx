import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/tokens";
import { FarmBureauBadge } from "@/components/layout";

export const metadata: Metadata = {
  title: "About RiverHouse Dairy",
  description:
    "Christine's story — from two baby goats in 2022 to an 80+ animal multi-species dairy in Lewis County, Washington. Farm Bureau board member, GoatSteward developer, and dairy farmer.",
};

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/farm/jerseys-pasture.jpeg"
          alt="Jersey cows walking through green pasture at RiverHouse Dairy"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum-200">
            Our Story
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 leading-tight">
            About RiverHouse Dairy
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-xl">
            From two baby goats to a multi-species dairy — built from scratch
            in Lewis County, Washington.
          </p>
        </div>
      </section>

      {/* ─── Intro ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="flex flex-col sm:flex-row items-center gap-10">
            <div className="w-48 h-48 shrink-0 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/farm/christine-with-jersey.jpeg"
                alt="Christine with a Jersey cow at RiverHouse Dairy"
                width={192}
                height={192}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-forest">Hi, I&apos;m Christine.</h2>
              <p className="mt-4 text-lg text-forest-400 leading-relaxed">
                I&apos;m a dairy farmer, a Lewis County Farm Bureau board member, and
                the developer behind GoatSteward. I bought this farm in 2020 with
                no farming background — I came from the gaming industry. Everything
                I know, I learned by doing it, getting it wrong, and doing it again.
              </p>
              <div className="mt-5">
                <FarmBureauBadge size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The Beginning ─── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum">
            How It Started
          </p>
          <h2 className="text-3xl font-bold text-forest mt-3">
            Two Baby Goats and a Desire for Fresh Milk
          </h2>
          <div className="mt-8 space-y-6 text-lg text-forest-400 leading-relaxed">
            <p>
              In spring of 2022 we brought home Relequen and Gwendolyn — two Nigerian
              Dwarf kids. They were adorable, but they weren&apos;t producing milk. We
              wanted milk <em>that year</em>. So we went right back and bought their
              mother, Jewel. And while we were there, we picked up Liza (a beauty queen),
              Eleanor with her baby boys Sonic and Boom, and her runt daughter Smidgen.
            </p>
            <p>
              In July I bought a baby buckling named Popcorn. He was supposed to be our
              future herd sire. What I didn&apos;t plan for was Popcorn breeding Liza
              through the fence at four months old.
            </p>
            <p>
              On January 1, 2023, our first farm-born kid arrived. We named her Dagny.
              Daughter of Liza and Popcorn. Nobody said farming was predictable.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Kids on tree photo break ─── */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/farm/kids-mossy-tree.jpeg"
          alt="Baby goat kids climbing a mossy tree at RiverHouse Dairy"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* ─── Growing the Herd ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum">
            Growth
          </p>
          <h2 className="text-3xl font-bold text-forest mt-3">
            Adding Sheep, Cattle, and Purpose
          </h2>
          <div className="mt-8 space-y-6 text-lg text-forest-400 leading-relaxed">
            <p>
              <strong className="text-forest">Summer 2023 — Sheep.</strong> I was
              looking for a milk breed with high butterfat. I ran into Icelandic sheep
              and fell in love with the heritage breed — incredible fleece, rich milk,
              and real hardiness for Pacific Northwest weather. The flock began.
            </p>
            <p>
              <strong className="text-forest">2024 — Jersey Cows &amp; Zebu.</strong> My
              niece has low-functioning autism and can&apos;t tolerate conventional cow
              milk. But A2/A2 genetics changed that. We added Jersey cows and Zebu cattle
              for heavy cream — the kind that makes our ice cream, yogurt, and cheese
              genuinely creamier. Cow milk separates the cream naturally; goat and sheep
              milk is homogenized. Together, they make incredible dairy products.
            </p>
            <p>
              <strong className="text-forest">2025 — Lacaune Genetics.</strong> I drove
              1,157 miles to South Dakota to bring home four Lacaune-influenced ewes.
              Lacaune are the breed behind Roquefort cheese in France — some of the
              richest dairy sheep genetics in the world. We&apos;re building a Lacaune
              breeding program in the Pacific Northwest, and in spring 2026, we have
              10 pure Lacaune semen straws arriving from two different rams.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Jersey cow and newborn photo break ─── */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/farm/jersey-newborn-straw.jpeg"
          alt="Jersey cow with newborn calf in golden straw at RiverHouse Dairy"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="relative h-full flex items-end px-6 pb-8">
          <p className="text-white text-base font-medium drop-shadow max-w-lg">
            A Jersey cow with her newborn calf. We added cattle for A2/A2 heavy cream —
            the missing piece for our dairy products.
          </p>
        </div>
      </section>

      {/* ─── Farm Bureau ─── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum">
            Community
          </p>
          <h2 className="text-3xl font-bold text-forest mt-3">
            Finding My People Through Farm Bureau
          </h2>
          <div className="mt-8 space-y-6 text-lg text-forest-400 leading-relaxed">
            <p>
              I&apos;ve lived in Lewis County for 20 years. I was born in Washington
              state, but way up north. When we started farming, I had no network. No
              one to call when I needed hay. No one to ask about feed costs. I was
              figuring everything out alone, and it was expensive.
            </p>
            <p>
              In 2024 I joined the Lewis County Farm Bureau out of pure frustration.
              It changed everything. I met a fellow farmer who runs a pumpkin patch —
              I brought baby goats, and we sold 11. They got a petting zoo; I moved
              goats. A large dairy farmer added 300 lbs of seed to his bulk order for
              me. I found connections for seed, feed, and hay that I never would have
              found on my own.
            </p>
            <p>
              In November 2025, I attended the annual state Farm Bureau meeting for
              the full policy review. I became a Lewis County Farm Bureau board member
              that same month. In January 2026, I hosted the first Farmers Networking
              event at D9 Market in Ethel — and the reception was incredible.
            </p>
            <p>
              The Farm Bureau isn&apos;t just a membership. It&apos;s the community
              I wished I&apos;d had from the beginning.
            </p>
          </div>
          <div className="mt-8">
            <FarmBureauBadge size="lg" />
          </div>
        </div>
      </section>

      {/* ─── Community photo break ─── */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/farm/christine-holding-kid.jpeg"
          alt="Christine holding a baby goat kid with farm visitors at RiverHouse Dairy"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </section>

      {/* ─── Technology ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum">
            Technology
          </p>
          <h2 className="text-3xl font-bold text-forest mt-3">
            Software Built by a Steward, for Stewards
          </h2>
          <div className="mt-8 space-y-6 text-lg text-forest-400 leading-relaxed">
            <p>
              I built <strong className="text-forest">GoatSteward</strong> because
              nothing existed for goat farmers. The herd management tools out there
              were built for cattle operations — wrong breeds, wrong terminology, wrong
              workflows. So I built my own. 536 functions. Health tracking, FAMACHA
              scoring, milk records, breeding management. Built on the same Next.js
              and Supabase stack as this website.
            </p>
            <p>
              I built <strong className="text-forest">GoodOfTheOrder</strong> after
              joining the Farm Bureau board. The monthly meetings needed better minute
              management, and I needed a project that solved a real problem. Robert&apos;s
              Rules meeting management — agenda tracking, parliamentary procedure, meeting
              minutes.
            </p>
            <p>
              I came from the gaming industry. I&apos;m not a trained developer. I
              learned to code by building the tools my farm needed. The tagline is real:
              <em> Family Farm. Premium Dairy. Thoughtful Technology.</em>
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/tools/goatsteward"
              className="rounded-lg bg-plum px-6 py-3 text-base font-bold text-white hover:bg-plum-600 transition-colors"
            >
              GoatSteward →
            </Link>
            <Link
              href="/tools/goodoftheorder"
              className="rounded-lg border-2 border-forest-200 px-6 py-3 text-base font-bold text-forest hover:border-plum hover:text-plum transition-colors"
            >
              GoodOfTheOrder →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Where We're Going ─── */}
      <section className="bg-forest">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum-200">
            The Road Ahead
          </p>
          <h2 className="text-3xl font-bold text-white mt-3">
            Where We&apos;re Going
          </h2>
          <p className="mt-4 text-lg text-cream-300 leading-relaxed">
            We consume our own milk, yogurt, cheese, and ice cream every day.
            The next step is sharing that with our community.
          </p>
          <div className="mt-10 space-y-8">
            {[
              {
                label: "Spring 2026",
                title: "Pure Lacaune Genetics",
                text: "10 pure Lacaune semen straws arriving — 5 each from two different rams. Building a foundation breeding program for dairy sheep in the Pacific Northwest.",
              },
              {
                label: "2026",
                title: "Licensed Organic Micro Dairy",
                text: "Working toward becoming a licensed organic micro dairy with raw milk, artisan cheese, yogurt, ice cream, and value-added body care products.",
              },
              {
                label: "2026–2027",
                title: "Farm Goods Store",
                text: "An online store at riverhousedairy.com/shop — dairy products, body care, breeding stock, coloring books, and merchandise.",
              },
              {
                label: "Future",
                title: "Agrotourism",
                text: "Farm visits, educational workshops, and agrotourism experiences. We're building toward it — but we're honest about where we are.",
              },
            ].map((goal) => (
              <div key={goal.title} className="border-l-4 border-plum-300 pl-6">
                <span className="text-xs font-bold text-plum-200 uppercase tracking-wider">
                  {goal.label}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{goal.title}</h3>
                <p className="mt-2 text-base text-cream-300 leading-relaxed">{goal.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── By the Numbers ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { value: "80+", label: "Animals" },
              { value: "8", label: "Breeds" },
              { value: "1,157", label: "Miles for Lacaune" },
              { value: "536", label: "GoatSteward Functions" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-plum">{stat.value}</p>
                <p className="text-sm text-forest-400 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-cream border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-forest">Want to Connect?</h2>
          <p className="mt-3 text-lg text-forest-400">
            Whether you&apos;re a fellow farmer, a Farm Bureau member, or just curious
            about dairy goats — I&apos;d love to hear from you.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-lg bg-plum px-6 py-3 text-base font-bold text-white hover:bg-plum-600 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/health"
              className="rounded-lg border-2 border-forest-200 px-6 py-3 text-base font-bold text-forest hover:border-plum hover:text-plum transition-colors"
            >
              Browse Health Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
