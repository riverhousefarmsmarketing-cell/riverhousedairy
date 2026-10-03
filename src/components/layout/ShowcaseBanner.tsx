"use client";
import { useState } from "react";
import Link from "next/link";
export function ShowcaseBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="relative bg-plum text-white">
      <div className="mx-auto max-w-7xl px-4 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-medium flex-1 justify-center">
          <span className="text-plum-200">★</span>
          <span>
            🎃 Our goats are at The Pumpkin Patch in Centralia, daily 10–6 through Oct 31 —{" "}
            <Link href="/#goat-tote" className="underline underline-offset-2 hover:text-plum-200 transition-colors">
              come visit The Goat Tote
            </Link>
          </span>
          <span className="text-plum-200">★</span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 text-plum-200 hover:text-white transition-colors p-1"
          aria-label="Dismiss banner"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
