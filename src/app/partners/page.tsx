import type { Metadata } from "next";
import Link from "next/link";
import { partners } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Partners",
  description: "Products and services Christine personally uses and recommends.",
};

export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-section-sm">
      <nav className="mb-6 text-sm text-forest-600">
        <Link href="/" className="hover:text-plum transition-colors">Home</Link>
        <span className="mx-1.5">›</span>
        <span className="text-forest">Partners</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-h1 text-forest font-bold">Our Partners</h1>
        <p className="mt-3 text-body-lg text-forest-600 max-w-2xl">
          Products and services I personally use and believe in.
        </p>
      </header>

      <div className="rounded-brand bg-plum-50 border border-plum-100 p-4 mb-10 text-sm text-plum">
        This page contains affiliate links. RiverHouse Dairy may earn a commission on purchases
        made through these links at no additional cost to you. I only recommend products and
        services I personally use and believe in.
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {partners.map((partner) => (
          <Link
            key={partner.slug}
            href={partner.route}
            className="group rounded-brand border border-forest-100 bg-white p-6 shadow-card hover:shadow-card-hover transition-all"
          >
            <h2 className="text-h3 text-forest group-hover:text-plum transition-colors">
              {partner.name}
            </h2>
            <p className="mt-2 text-sm text-plum font-medium">Read my story →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
