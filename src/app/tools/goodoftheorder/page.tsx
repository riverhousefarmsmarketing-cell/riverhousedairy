import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GoodOfTheOrder — Robert's Rules Meeting Management | RiverHouse Dairy",
  description: "GoodOfTheOrder is Robert's Rules meeting management software built for agricultural boards and governance organizations. Agenda tracking, minutes, parliamentary procedure.",
};

const features = [
  {
    category: "Meeting Management",
    items: [
      "Agenda builder — create and order agenda items before the meeting",
      "Live meeting mode — run through agenda items in real time",
      "Motion tracking — record motions, seconds, votes, and outcomes",
      "Attendance tracking — quorum calculation and member records",
      "Meeting timer — keep items on track",
      "Action item assignment — who does what by when",
    ],
  },
  {
    category: "Minutes & Records",
    items: [
      "Auto-generated minutes from live meeting data",
      "Minutes review and approval workflow",
      "Historical record of all meetings and decisions",
      "Motion and vote history search",
      "Export to PDF or Word for distribution",
      "Approval tracking — which members have reviewed minutes",
    ],
  },
  {
    category: "Parliamentary Procedure",
    items: [
      "Robert's Rules guidance built into the workflow",
      "Motion types — main, subsidiary, privileged, incidental",
      "Precedence rules — what motions can be made when",
      "Voting threshold tracking — simple majority, two-thirds, unanimous",
      "Point of order and appeal handling",
      "Executive session management",
    ],
  },
  {
    category: "Board Administration",
    items: [
      "Member roster and contact management",
      "Committee tracking and assignments",
      "Officer roles and terms",
      "Recurring meeting scheduling",
      "Document storage for board materials",
      "Notification and distribution list management",
    ],
  },
];

export default function GoodOfTheOrderPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest">
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-20">
          <nav className="mb-8 text-sm text-forest-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/tools" className="hover:text-white transition-colors">Farm Tools</Link>
            <span className="mx-2">›</span>
            <span className="text-white">GoodOfTheOrder</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-plum-200 mb-4">
                by RiverHouse Dairy
              </p>
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
                GoodOf<wbr />TheOrder
              </h1>
              <p className="mt-4 text-xl text-cream-300 leading-relaxed">
                Robert&apos;s Rules meeting management for boards that actually use Robert&apos;s Rules.
              </p>
              <p className="mt-5 text-base text-cream-300 leading-relaxed max-w-md">
                Built after joining the Lewis County Farm Bureau board. Monthly board meetings needed better structure — agenda tracking, proper minutes, recorded motions and votes. So I built it.
              </p>
            </div>

            {/* Quote/context block */}
            <div className="rounded-2xl bg-white/10 p-8">
              <p className="text-cream-200 text-lg leading-relaxed italic">
                &ldquo;Good of the Order&rdquo; is the agenda item at the end of Robert&apos;s Rules meetings where any member can raise general concerns, announcements, or items for the good of the organization.
              </p>
              <p className="mt-4 text-cream-300 text-sm">
                It&apos;s the most human part of a formal meeting — the part where the governance stops and the community starts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum mb-3">The Origin</p>
            <h2 className="text-3xl font-bold text-forest">Built for the Farm Bureau Board</h2>
            <div className="mt-6 space-y-4 text-lg text-forest-600 leading-relaxed">
              <p>
                In November 2025, I became a Lewis County Farm Bureau board member. The meetings are run under Robert&apos;s Rules of Order — motions, seconds, quorum, recorded votes. Important decisions get made. Those decisions need accurate records.
              </p>
              <p>
                The tools available for this were either generic meeting software that didn&apos;t understand parliamentary procedure, or parliamentary software that was built for city councils and cost accordingly. Nothing for agricultural boards, co-ops, 4-H committees, or rural governance organizations.
              </p>
              <p>
                GoodOfTheOrder is designed for organizations where the people running the meetings aren&apos;t professional parliamentarians — they&apos;re farmers, volunteers, and board members who need the structure without the law firm pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum mb-3">What It Does</p>
          <h2 className="text-3xl font-bold text-forest mb-12">Meeting Management, Start to Finish</h2>

          <div className="space-y-4">
            {features.map((f) => (
              <details key={f.category} className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-bold text-forest group-hover:text-plum transition-colors">
                    {f.category}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-forest-600">{f.items.length} features</span>
                    <span className="text-forest-600 group-open:rotate-180 transition-transform text-lg">↓</span>
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                  <ul className="mt-3 space-y-2">
                    {f.items.map((item) => (
                      <li key={item} className="flex gap-3 text-base text-forest-600">
                        <span className="text-plum shrink-0 mt-1">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum mb-3">Who It&apos;s For</p>
              <h2 className="text-3xl font-bold text-forest mb-6">Rural Boards &amp; Governance</h2>
              <div className="space-y-3">
                {[
                  "Farm Bureau boards and committees",
                  "Agricultural co-ops and grain elevators",
                  "4-H clubs and county livestock associations",
                  "Irrigation districts and water boards",
                  "Rural fire districts and community organizations",
                  "Any organization that runs Robert's Rules meetings",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="text-plum font-bold mt-0.5">—</span>
                    <span className="text-forest-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum mb-3">Current Status</p>
              <h2 className="text-3xl font-bold text-forest mb-6">Active</h2>
              <p className="text-forest-600 leading-relaxed mb-6">
                GoodOfTheOrder is in active development and used monthly at Lewis County Farm Bureau board meetings. If you&apos;re part of an agricultural board or co-op and want to be a beta user, get in touch.
              </p>
              <Link
                href="/contact"
                className="inline-block rounded-lg bg-plum px-6 py-3 text-base font-bold text-white hover:bg-plum-600 transition-colors"
              >
                Contact About Beta Access →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The tools together */}
      <section className="bg-forest">
        <div className="mx-auto max-w-5xl px-8 sm:px-12 py-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum-200 mb-3">All Three Tools</p>
          <h2 className="text-2xl font-bold text-white mb-8">Built From Real Farm Needs</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "GoatSteward",
                desc: "Dairy goat herd management. Built because nothing existed for small dairy operations.",
                href: "/tools/goatsteward",
                status: "Active",
              },
              {
                name: "GoodOfTheOrder",
                desc: "Robert's Rules meeting management. Built after joining the Farm Bureau board.",
                href: "/tools/goodoftheorder",
                status: "Active",
                current: true,
              },
              {
                name: "CloverTrack",
                desc: "4-H digital record book. Always free for youth livestock projects.",
                href: "/tools/clovertrack",
                status: "Active",
              },
            ].map((t) => (
              <Link
                key={t.name}
                href={t.href}
                className={`rounded-xl p-5 transition-colors group ${t.current ? "bg-white/20 border border-white/30" : "bg-white/10 hover:bg-white/15"}`}
              >
                <p className="font-bold text-white group-hover:text-cream-200 transition-colors">{t.name}</p>
                <p className="text-cream-300 text-sm mt-2 leading-relaxed">{t.desc}</p>
                <span className="inline-block mt-3 text-xs font-bold text-green-300 bg-green-900/40 px-2 py-1 rounded-full">
                  {t.status}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
