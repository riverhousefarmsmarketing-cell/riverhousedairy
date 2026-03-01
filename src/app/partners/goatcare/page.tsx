import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
export const metadata: Metadata = { title: "Goatcare.com", description: "Products Christine uses for herd health." };
export default function Page() {
  return <PageShell title="Goatcare.com" description="Products Christine uses for herd health. Personal endorsement with usage story." breadcrumbs={[{ label: "Partners", href: "/partners" }, { label: "Goatcare.com", href: "/partners/goatcare" }]} />;
}
