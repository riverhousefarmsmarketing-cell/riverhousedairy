"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { brand, primaryNav, secondaryNav, type NavItem } from "@/lib/tokens";
import { FarmBureauBadge } from "./FarmBureauBadge";

function NavLink({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
  const [open, setOpen] = useState(false);

  if (item.children) {
    return (
      <div className="relative group">
        {/* Desktop dropdown */}
        <div className="hidden lg:block">
          <Link
            href={item.href}
            className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-plum ${
              isActive ? "text-plum" : "text-forest"
            }`}
          >
            {item.label}
            <ChevronDown className="h-3 w-3" />
          </Link>
          <div className="absolute left-0 top-full hidden pt-1 group-hover:block z-50">
            <div className="rounded-brand border border-forest-100 bg-white py-1 shadow-card min-w-[200px]">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-forest hover:bg-gray-50 hover:text-plum transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile accordion */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className={`flex w-full items-center justify-between px-4 py-3 text-base font-medium ${
              isActive ? "text-plum" : "text-forest"
            }`}
          >
            {item.label}
            <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
          {open && (
            <div className="border-l-2 border-forest-100 ml-4">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClick}
                  className="block px-4 py-2 text-sm text-forest hover:text-plum"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Desktop */}
      <Link
        href={item.href}
        className={`hidden lg:inline-flex px-3 py-2 text-sm font-medium transition-colors hover:text-plum ${
          isActive ? "text-plum" : "text-forest"
        }`}
      >
        {item.label}
      </Link>
      {/* Mobile */}
      <Link
        href={item.href}
        onClick={onClick}
        className={`block lg:hidden px-4 py-3 text-base font-medium ${
          isActive ? "text-plum" : "text-forest"
        }`}
      >
        {item.label}
      </Link>
    </>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-gray-50/95 backdrop-blur-sm border-b border-forest-100">
      {/* Farm Bureau badge banner — above the fold */}
      <div className="bg-forest-50 border-b border-forest-100">
        <div className="mx-auto max-w-7xl px-4 py-1.5 flex justify-center">
          <FarmBureauBadge size="sm" />
        </div>
      </div>

      {/* Main nav bar */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand name */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            {/* Placeholder for illustrated dairy mark — replace with <Image> when art is ready */}
            <div className="h-9 w-9 rounded-full bg-plum flex items-center justify-center text-cream text-xs font-bold">
              RD
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-forest">RiverHouse</span>{" "}
              <span className="text-plum">Dairy</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
            {primaryNav.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
            <span className="mx-2 h-5 w-px bg-forest-200" aria-hidden="true" />
            {secondaryNav.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-forest hover:text-plum"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-forest-100 bg-gray-50" aria-label="Mobile navigation">
          <div className="py-2">
            {primaryNav.map((item) => (
              <NavLink key={item.href} item={item} onClick={closeMobile} />
            ))}
            <hr className="my-2 border-forest-100" />
            {secondaryNav.map((item) => (
              <NavLink key={item.href} item={item} onClick={closeMobile} />
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
