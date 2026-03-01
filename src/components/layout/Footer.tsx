import Link from "next/link";
import { brand, primaryNav, secondaryNav } from "@/lib/tokens";
import { FarmBureauBadge } from "./FarmBureauBadge";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest text-cream-200">
      {/* ── Email capture — Phase 2: wire to email service ── */}
      <div className="border-b border-forest-400/30">
        <div className="mx-auto max-w-5xl px-6 py-10 text-center">
          <h3 className="text-xl font-bold text-white">Stay Connected</h3>
          <p className="mt-2 text-base text-cream-300">
            Farm updates, kidding announcements, and health tips — no spam, ever.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 rounded-lg bg-forest-600/50 border border-forest-400/30 px-4 py-3 text-base text-white placeholder:text-cream-400 focus:outline-none focus:border-plum-300"
              disabled
              aria-label="Email signup (coming soon)"
            />
            <button
              disabled
              className="rounded-lg bg-plum px-6 py-3 text-base font-bold text-white opacity-70 cursor-not-allowed"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-2 text-xs text-cream-400">Coming soon</p>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-white">{brand.name}</p>
            <p className="mt-2 text-sm text-cream-300 leading-relaxed">
              {brand.tagline}
            </p>
            <div className="mt-4">
              <FarmBureauBadge size="sm" />
            </div>
          </div>

          {/* The Farm */}
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              The Farm
            </p>
            <ul className="space-y-2.5">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Tools */}
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Resources
            </p>
            <ul className="space-y-2.5">
              {secondaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-cream-400 hover:text-white transition-colors"
                >
                  Shop (Coming Soon)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <p className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </p>
            <address className="not-italic text-sm text-cream-300 space-y-2.5 leading-relaxed">
              <p>{brand.location}</p>
              <p>{brand.county}, Washington</p>
            </address>
            <Link
              href="/contact"
              className="mt-4 inline-block text-sm font-bold text-plum-200 hover:text-white transition-colors"
            >
              Get in Touch →
            </Link>

            {/* Social placeholder — add real links when ready */}
            <div className="mt-6 flex gap-4">
              {["Facebook", "Instagram"].map((platform) => (
                <span
                  key={platform}
                  className="text-xs text-cream-400 border border-forest-400/30 rounded px-3 py-1"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-forest-400/30">
        <div className="mx-auto max-w-5xl px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400">
            <p>© {currentYear} {brand.name}. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/contact" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Terms
              </Link>
              <span>{brand.domain}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
