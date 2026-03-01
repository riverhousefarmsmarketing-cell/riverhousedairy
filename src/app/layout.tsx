import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { brand } from "@/lib/tokens";
import "./globals.css";

// Fonts: Using system font stacks via CSS custom properties in globals.css.
// To use Google Fonts on Vercel, uncomment the next/font/google imports in
// this file and add the font variables to the <html> className below.
// See: https://nextjs.org/docs/app/building-your-application/optimizing/fonts

export const metadata: Metadata = {
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s | ${brand.name}`,
  },
  description:
    "Micro dairy farm in Chehalis, Washington. Nigerian Dwarf goats, LaManchas, Icelandic sheep, Lacaune-cross dairy sheep, and Jersey cows. Lewis County Farm Bureau Board Member.",
  metadataBase: new URL(`https://${brand.domain}`),
  openGraph: {
    siteName: brand.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
