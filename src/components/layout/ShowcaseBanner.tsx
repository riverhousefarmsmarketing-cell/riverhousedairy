"use client";
import { useState } from "react";
export function ShowcaseBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="relative bg-plum text-white">
      <div className="mx-auto max-w-7xl px-4 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-medium flex-1 justify-center">
          <span className="text-plum-200">★</span>
          <span>
            We&apos;re at the{" "}
            <strong className="text-white">Lewis County Farm Bureau Showcase</strong>
            {" "}today — come find us, or{" "}
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAa__Yb9ijhURTRQSFRaREM2VDJWQTE0N0hESjZRNEJSTy4u&origin=QRCode" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-plum-200 transition-colors">
              join the raw milk waitlist
            </a>
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
