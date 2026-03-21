import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Farm Goods Shop",
  description: "Coming soon — raw dairy, value-added products, body care, merchandise, and animal sales from RiverHouse Dairy.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-section text-center">
      <h1 className="text-h1 text-forest font-bold">Farm Goods Shop</h1>
      <p className="mt-4 text-body-lg text-forest-600 max-w-lg mx-auto">
        Coming in Phase 2 — raw dairy, value-added products, body care, merchandise, coloring books, and animal sales.
      </p>
      <Link
        href="/contact"
        className="mt-8 inline-block rounded-brand bg-plum px-6 py-3 text-sm font-semibold text-white hover:bg-plum-600 transition-colors"
      >
        Contact Us in the Meantime →
      </Link>
    </div>
  );
}
