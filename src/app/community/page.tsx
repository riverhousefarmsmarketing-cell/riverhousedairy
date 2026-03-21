import type { Metadata } from "next";
import Link from "next/link";
import { FarmBureauBadge } from "@/components/layout";

export const metadata: Metadata = {
  title: "Community | RiverHouse Dairy",
  description:
    "Lewis County Farm Bureau board member, Farmers Networking Series host, and active participant in Lewis County agriculture. Christine Williams — RiverHouse Dairy, Chehalis, WA.",
};

export default function CommunityPage() {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum-200">Lewis County</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 leading-tight">
            Community Is How<br />This Farm Survived
          </h1>
          <p className="mt-5 text-lg text-cream-300 max-w-xl mx-auto leading-relaxed">
            I started farming with no network, no connections, and no idea what things should cost.
            The Lewis County Farm Bureau changed that.
          </p>
          <div className="mt-6">
            <FarmBureauBadge size="lg" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum">How It Started</p>
          <h2 className="text-3xl font-bold text-forest mt-3">I Joined Out of Pure Frustration</h2>
          <div className="mt-8 space-y-6 text-lg text-forest-600 leading-relaxed">
            <p>
              I&apos;ve lived in Lewis County for 20 years. When we started farming in 2022, I had no one
              to call. No one to ask about feed costs, no one to help me find hay, no one who had been
              through any of this before. I was figuring everything out alone — and it was expensive.
            </p>
            <p>
              In 2024 I joined the Lewis County Farm Bureau out of pure frustration. Within a few months
              it had completely changed how I operate. I met a fellow farmer who runs a pumpkin patch —
              I brought baby goats for his fall event, he got a petting zoo, I moved 11 goats. A large
              local dairy farmer added 300 lbs of pasture seed to his bulk order so I could get co-op
              pricing I couldn&apos;t access alone. I found connections for seed, feed, and hay I never
              would have found on my own.
            </p>
            <p>
              The Farm Bureau isn&apos;t just a membership. It&apos;s the community I wished I&apos;d had from day one.
            </p>
          </div>
          <div className="mt-8"><FarmBureauBadge size="lg" /></div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum">Board Membership</p>
          <h2 className="text-3xl font-bold text-forest mt-3">Lewis County Farm Bureau Board Member</h2>
          <div className="mt-8 space-y-6 text-lg text-forest-600 leading-relaxed">
            <p>
              In November 2025, I attended the annual Washington State Farm Bureau meeting and became a
              Lewis County Farm Bureau board member. I wasn&apos;t looking for a title. I was looking for
              a way to give back to something that had already given me so much.
            </p>
            <p>
              Serving on the board means being at the table where Lewis County agricultural policy gets
              discussed — and representing the small and micro-farm perspective alongside the large operations.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Policy Advocacy", text: "Representing small and micro-dairy interests at the county and state level." },
              { title: "Peer Connections", text: "Linking new farmers to experienced producers — the network I didn't have when I started." },
              { title: "Resource Access", text: "Leveraged seed buys, co-op pricing, bulk orders. Real savings for working farms." },
            ].map((p) => (
              <div key={p.title} className="rounded-xl bg-white border border-gray-100 p-6">
                <h3 className="text-base font-bold text-forest">{p.title}</h3>
                <p className="mt-2 text-sm text-forest-600 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum">Farmers Networking Series</p>
          <h2 className="text-3xl font-bold text-forest mt-3">Building the Table We Needed</h2>
          <div className="mt-8 space-y-6 text-lg text-forest-600 leading-relaxed">
            <p>
              In January 2026, I hosted the first Farmers Networking event at D9 Market in Ethel.
              The reception was incredible. Farmers came from across Lewis County — small operations,
              large operations, new farmers, veterans. Expert-led content on topics that matter,
              followed by real networking with the people in the room.
            </p>
            <p>
              These events are free for Farm Bureau members. They&apos;re practical, not political. If
              you&apos;re farming in Lewis County and you haven&apos;t been — come to the next one.
            </p>
          </div>
          <div className="mt-10 rounded-xl bg-forest text-white p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum-200">Next Event</p>
            <h3 className="text-2xl font-bold mt-2">Farmers Networking Series</h3>
            <p className="mt-3 text-cream-300 leading-relaxed">
              Lewis County, Washington. Free for Farm Bureau members. Topics rotate — livestock,
              pasture management, regulatory updates, technology for small farms.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/contact" className="rounded-lg bg-plum px-6 py-3 text-base font-bold text-white hover:bg-plum-600 transition-colors">
                Get on the Invite List →
              </Link>
              <Link href="/ask-me-about/farmers-networking-series" className="rounded-lg bg-white/15 border border-white/30 px-6 py-3 text-base font-bold text-white hover:bg-white/25 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum">Why It&apos;s Worth It</p>
          <h2 className="text-3xl font-bold text-forest mt-3">What Farm Bureau Membership Gets You</h2>
          <p className="mt-4 text-lg text-forest-600 leading-relaxed">
            Lewis County Farm Bureau membership is $65/year. Here&apos;s what I actually use it for:
          </p>
          <div className="mt-8 space-y-4">
            {[
              { label: "Leveraged Seed Buy", text: "Pool your order with other Lewis County farmers. I saved hundreds on pasture seed in my first year." },
              { label: "Farmers Networking Events", text: "Free expert-led events on soil, livestock, technology. Real networking with real Lewis County farmers." },
              { label: "Peer Connections", text: "The informal network is the most valuable part. Who has hay? Who has extra feed? Who has done this before?" },
              { label: "Insurance Discounts", text: "Member discounts on farm insurance, vehicle, home, and more through Farm Bureau's partner programs." },
              { label: "Policy Voice", text: "Your membership funds advocacy at the state level for Washington agriculture. Small farms need a seat at the table." },
              { label: "4-H Support", text: "Farm Bureau is the backbone of 4-H in Lewis County. Youth livestock projects, scholarships, and programming." },
            ].map((b) => (
              <div key={b.label} className="flex gap-4 rounded-xl bg-white border border-gray-100 p-5">
                <div className="mt-1 h-2 w-2 rounded-full bg-plum shrink-0" />
                <div>
                  <span className="font-bold text-forest">{b.label}. </span>
                  <span className="text-forest-600">{b.text}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/ask-me-about/farm-bureau-benefits" className="inline-block rounded-lg bg-plum px-6 py-3 text-base font-bold text-white hover:bg-plum-600 transition-colors">
              Full Farm Bureau Benefits Guide →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-forest">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white">Farming in Lewis County?</h2>
          <p className="mt-4 text-lg text-cream-300 max-w-lg mx-auto leading-relaxed">
            Whether you&apos;re brand new or been here for decades — the network is worth it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-lg bg-plum px-8 py-4 text-base font-bold text-white hover:bg-plum-600 transition-colors shadow-lg">
              Get in Touch
            </Link>
            <a href="https://www.lewiscountyfarmbureau.org" target="_blank" rel="noopener noreferrer"
              className="rounded-lg bg-white/15 border border-white/30 px-8 py-4 text-base font-bold text-white hover:bg-white/25 transition-colors">
              Lewis County Farm Bureau →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
