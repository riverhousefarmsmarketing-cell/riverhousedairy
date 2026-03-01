import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
export const metadata: Metadata = { title: "The Holistic Goat", description: "Holistic approach to goat care." };
export default function Page() {
  return <PageShell title="The Holistic Goat" description="Holistic approach to goat care. A resource Christine relies on." breadcrumbs={[{ label: "Partners", href: "/partners" }, { label: "The Holistic Goat", href: "/partners/holistic-goat" }]} />;
}
