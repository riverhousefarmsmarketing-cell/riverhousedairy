import type { Metadata } from "next";
import Link from "next/link";
import { characters, brand } from "@/lib/tokens";

export const metadata: Metadata = {
  title: "Animals of RiverHouse Dairy",
  description: "Meet the RiverHouse Dairy Crew — coloring book characters based on real farm animals.",
};

export default function CharactersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-section-sm">
      <nav className="mb-6 text-sm text-forest-400">
        <Link href="/" className="hover:text-plum transition-colors">Home</Link>
        <span className="mx-1.5">›</span>
        <span className="text-forest">Characters</span>
      </nav>

      <header className="mb-10">
        <h1 className="text-h1 text-forest font-bold">Meet the RiverHouse Dairy Crew</h1>
        <p className="mt-3 text-body-lg text-forest-400 max-w-2xl">
          Each character is based on a real RiverHouse Dairy animal. {brand.hashtag}
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {characters.map((char) => (
          <div
            key={char.name}
            className="rounded-brand border border-forest-100 bg-white p-5 shadow-card"
          >
            <div className="aspect-square rounded bg-forest-50 mb-4 flex items-center justify-center text-forest-300 text-sm">
              Character art
            </div>
            <h2 className="text-h3 text-forest">{char.name}</h2>
            <p className="text-xs text-plum font-medium mt-1">{char.breed}</p>
            <p className="text-sm text-forest-400 mt-2">{char.personality}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
