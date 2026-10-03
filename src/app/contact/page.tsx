import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FarmBureauBadge } from "@/components/layout";

export const metadata: Metadata = {
  title: "Contact | RiverHouse Dairy",
  description:
    "Get in touch with RiverHouse Dairy in Chehalis, Washington. Join the raw milk waitlist, inquire about wholesale, or connect with Christine about the farm.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-forest">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum-200">Chehalis, Washington</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3">Get in Touch</h1>
          <p className="mt-4 text-lg text-cream-300 max-w-xl mx-auto leading-relaxed">
            Whether you want on the raw milk waitlist, have a wholesale inquiry,
            or just want to talk goats — we&apos;re here.
          </p>
        </div>
      </section>

      {/* ── Waitlist + QR ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left: QR code */}
            <div className="flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 p-4 bg-white">
                <Image
                  src="/images/farm/waitlist-qr.png"
                  alt="QR code to join the RiverHouse Dairy waitlist and updates signup"
                  width={280}
                  height={280}
                  className="rounded-lg"
                />
              </div>
              <p className="mt-4 text-sm text-forest-600 text-center font-medium">
                Scan to join the waitlist
              </p>
              <p className="mt-1 text-xs text-forest-600 text-center opacity-70">
                Or use the link below
              </p>
            </div>

            {/* Right: Copy */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum">
                Raw Milk Waitlist
              </p>
              <h2 className="text-3xl font-bold text-forest mt-3">
                Join the List
              </h2>
              <p className="mt-4 text-lg text-forest-600 leading-relaxed">
                Raw goat milk year-round. Seasonal sheep milk. Sales planned
                for June 2027.
              </p>
              <p className="mt-4 text-base text-forest-600 leading-relaxed">
                Sign up to get notified when products are available, receive
                updates on our dairy progress, and tell us what you&apos;re
                interested in.
              </p>

              {/* Interest tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Raw Goat Milk",
                  "Raw Sheep Milk",
                  "Yogurt",
                  "Chèvre",
                  "Value-Added Products",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full border border-forest-200 bg-gray-50 px-3 py-1 text-sm font-medium text-forest"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAa__Yb9ijhURTRQSFRaREM2VDJWQTE0N0hESjZRNEJSTy4u&origin=QRCode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-plum px-8 py-4 text-base font-bold text-white hover:bg-plum-600 transition-colors shadow-lg"
                >
                  Join the Waitlist →
                </a>
              </div>
              <p className="mt-3 text-xs text-forest-600 opacity-70">
                Opens our signup form · riverhousedairy.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="border-t border-gray-100" />

      {/* ── Wholesale ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum">
            For Buyers
          </p>
          <h2 className="text-3xl font-bold text-forest mt-3">
            Wholesale &amp; Creamery Inquiries
          </h2>
          <p className="mt-4 text-lg text-forest-600 leading-relaxed">
            We are developing capacity to supply retail outlets, local creameries,
            and artisan cheesemakers with raw goat and sheep milk. If you&apos;re
            interested in a supply relationship, let&apos;s talk now — before
            sales open.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              { title: "Raw Goat Milk", detail: "Year-round · Nigerian Dwarf, LaMancha, Mini-LaMancha, Mini Nubian · Bulk available" },
              { title: "Raw Sheep Milk", detail: "Seasonal · Icelandic, Lacaune-cross, East Friesian · Premium high-butterfat" },
            ].map((p) => (
              <div key={p.title} className="rounded-xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="font-bold text-forest">{p.title}</h3>
                <p className="mt-2 text-sm text-forest-600 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="mailto:christine@riverhousedairy.com?subject=Wholesale Inquiry — RiverHouse Dairy"
              className="inline-block rounded-lg border-2 border-forest-200 px-6 py-3 text-base font-bold text-forest hover:border-plum hover:text-plum transition-colors"
            >
              Email About Wholesale →
            </a>
          </div>
        </div>
      </section>

      {/* ── General contact ── */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-plum">
            General
          </p>
          <h2 className="text-3xl font-bold text-forest mt-3">
            Other Questions
          </h2>
          <p className="mt-4 text-lg text-forest-600 leading-relaxed">
            Fellow farmers, Farm Bureau members, 4-H families, people curious
            about dairy goats — we&apos;re happy to talk.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 rounded-xl bg-white border border-gray-100 p-5">
              <div className="h-10 w-10 rounded-full bg-forest flex items-center justify-center shrink-0">
                <span className="text-white text-sm font-bold">@</span>
              </div>
              <div>
                <p className="font-bold text-forest text-sm">Email</p>
                <a href="mailto:christine@riverhousedairy.com" className="text-plum hover:underline font-medium">
                  christine@riverhousedairy.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-white border border-gray-100 p-5">
              <div className="h-10 w-10 rounded-full bg-forest flex items-center justify-center shrink-0">
                <span className="text-white text-sm font-bold">📍</span>
              </div>
              <div>
                <p className="font-bold text-forest text-sm">Location</p>
                <p className="text-forest-600">Chehalis, Washington · Lewis County</p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-xl bg-forest p-6 text-center">
            <FarmBureauBadge size="lg" />
            <p className="mt-3 text-cream-300 text-sm leading-relaxed">
              Lewis County Farm Bureau board member. If you&apos;re a fellow member
              or considering joining — feel free to reach out directly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
