import Link from "next/link";

interface PageShellProps {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
  children?: React.ReactNode;
}

export function PageShell({ title, description, breadcrumbs, children }: PageShellProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-section-sm">
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="mb-6 text-sm text-forest-400" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-plum transition-colors">
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.href} className="flex items-center gap-1.5">
                <span aria-hidden="true">›</span>
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-forest">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-plum transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Page header */}
      <header className="mb-10">
        <h1 className="text-h1 text-forest font-bold">{title}</h1>
        {description && <p className="mt-3 text-body-lg text-forest-400 max-w-2xl">{description}</p>}
      </header>

      {/* Page content */}
      {children || (
        <div className="rounded-brand border-2 border-dashed border-forest-200 bg-forest-50/50 p-12 text-center">
          <p className="text-forest-400 text-body">Content coming soon — Phase 1 build in progress.</p>
        </div>
      )}
    </div>
  );
}
