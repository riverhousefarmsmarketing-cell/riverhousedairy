import Link from "next/link";

export function HealthComingSoon({ title }: { title: string }) {
  return (
    <>
      <section className="bg-forest">
        <div className="mx-auto max-w-4xl px-8 sm:px-12 py-14">
          <nav className="mb-6 text-sm text-forest-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/health" className="hover:text-white transition-colors">Goat Health</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{title}</span>
          </nav>
          <h1 className="text-4xl font-bold text-white">{title}</h1>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-8 sm:px-12 py-16">
        <div className="rounded-xl border-2 border-dashed border-forest-200 bg-forest-50/50 p-12 text-center">
          <p className="text-2xl font-bold text-forest">Update coming soon.</p>
          <p className="mt-3 text-base text-forest-600">
            In the meantime, see our{" "}
            <Link href="/health/guides" className="font-bold text-plum hover:text-plum-600 transition-colors">
              Care Guides
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
