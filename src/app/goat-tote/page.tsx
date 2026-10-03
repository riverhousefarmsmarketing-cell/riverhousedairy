import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Goat Tote | RiverHouse Dairy",
  description:
    "The Goat Tote is RiverHouse Dairy's mobile barn, built on a trailer to bring our goats to events like the pumpkin patch.",
};

const buildSteps = [
  {
    src: "/images/goat-tote/build-floor-frame.jpeg",
    alt: "A wall frame of fresh lumber laid out on the white-painted trailer deck next to the farm's pole barn",
    caption: "Framing the walls on the trailer deck",
  },
  {
    src: "/images/goat-tote/build-walls-dogs.jpeg",
    alt: "Two small white dogs standing on a wall frame inside the shop while the first wall goes up",
    caption: "The first walls go up (with supervisors)",
  },
  {
    src: "/images/goat-tote/build-roof-framing.jpeg",
    alt: "Roof trusses and porch posts framed over the plywood-walled stall",
    caption: "Roof trusses and the front porch",
  },
  {
    src: "/images/goat-tote/build-siding.jpeg",
    alt: "The Goat Tote with its black metal roof and white siding going on, porch framed in raw wood",
    caption: "Metal roof and siding",
  },
  {
    src: "/images/goat-tote/build-barn-doors.jpeg",
    alt: "White sliding barn doors hung on a black track across the front of the stall",
    caption: "Sliding barn doors",
  },
  {
    src: "/images/goat-tote/build-porch-finishing.jpeg",
    alt: "The porch roof trimmed out and the deck being finished outdoors, with hills behind",
    caption: "Finishing the porch",
  },
];

export default function GoatTotePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-forest">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-16 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-plum-200">
                Our Mobile Barn
              </p>
              <h1 className="mt-4 text-5xl sm:text-6xl font-bold text-white leading-[1.05] tracking-tight">
                The Goat Tote
              </h1>
              <p className="mt-6 text-lg text-cream-300 leading-relaxed max-w-md">
                We built the Goat Tote to be a barn on wheels, so our goats can
                come along to events like the pumpkin patch and have a
                comfortable home base wherever we set up.
              </p>
            </div>
            <div className="relative aspect-[4/5] max-h-[560px] w-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/goat-tote/goats-on-porch.jpeg"
                alt="Four young goats resting on the straw-covered porch of the Goat Tote at the pumpkin patch"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── What it is ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-16 py-24">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/goat-tote/at-the-pumpkin-patch.jpeg"
              alt="The Goat Tote set up in a pumpkin field with a fenced pen and a shade canopy beside it"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1150px"
            />
          </div>
          <div className="mt-14 grid gap-12 lg:grid-cols-3">
            {[
              {
                title: "Built on a trailer",
                text: "The whole barn rides on a trailer, so we can hitch up and bring the goats to wherever the event is.",
              },
              {
                title: "A real barn inside",
                text: "A covered stall with straw bedding and sliding barn doors gives the goats a quiet place to rest out of the weather.",
              },
              {
                title: "Room to visit",
                text: "A wide front porch and a fenced pen with shade let people meet the goats up close.",
              },
            ].map(({ title, text }) => (
              <div key={title}>
                <h2 className="text-xl font-bold text-forest">{title}</h2>
                <p className="mt-3 text-base text-forest-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Build story ─── */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-16 py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-plum">
              How We Built It
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-forest mt-2 leading-tight">
              From trailer deck{" "}<br className="hidden lg:inline" />to mobile barn.
            </h2>
            <p className="mt-6 text-lg text-forest-600 leading-relaxed">
              We built the Goat Tote ourselves, one wall at a time, in the shop
              here on the farm.
            </p>
          </div>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {buildSteps.map((step, i) => (
              <li key={step.src}>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={step.src}
                    alt={step.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <p className="mt-3 text-base text-forest-600">
                  <span className="font-bold text-plum mr-2">{i + 1}.</span>
                  {step.caption}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── Where to find it ─── */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-8 sm:px-12 lg:px-16 py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-plum">
              Where to Find It
            </span>
            <h2 className="text-4xl font-bold text-forest mt-2 leading-tight">
              At The Pumpkin Patch all October
            </h2>
            <p className="mt-6 text-lg text-forest-600 leading-relaxed">
              518 Goodrich Rd, Centralia, WA 98531. Every day, 10am–6pm,
              through October 31.
            </p>
            <Link
              href="/#goat-tote"
              className="mt-8 inline-block rounded-lg bg-plum px-8 py-4 text-base font-bold text-white hover:bg-plum-600 transition-colors shadow-sm"
            >
              Visit details and goat prices
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
