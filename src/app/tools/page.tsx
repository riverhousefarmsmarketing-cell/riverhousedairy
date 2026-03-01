import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Farm Tools",
  description: "Software built by a steward, for stewards. GoatSteward, CloverTrack, GoodOfTheOrder.",
};

const activeProducts = [products.goatSteward, products.cloverTrack, products.goodOfTheOrder];

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-section-sm">
      <nav className="mb-6 text-sm text-forest-400">
        <Link href="/" className="hover:text-plum transition-colors">Home</Link>
        <span className="mx-1.5">›</span>
        <span className="text-forest">Farm Tools</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-h1 text-forest font-bold">Farm Tools</h1>
        <p className="mt-3 text-body-lg text-forest-400 max-w-2xl">
          Software built by a steward, for stewards. Thoughtful technology for the working farm.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {activeProducts.map((product) => (
          <Link
            key={product.name}
            href={product.route}
            className="group rounded-brand border border-forest-100 bg-white p-6 shadow-card hover:shadow-card-hover transition-all"
          >
            <h2 className="text-h3 text-forest group-hover:text-plum transition-colors">
              {product.name}
            </h2>
            <p className="mt-2 text-sm text-forest-400">{product.description}</p>
            {product.domain && (
              <p className="mt-3 text-xs text-plum font-medium">{product.domain}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
