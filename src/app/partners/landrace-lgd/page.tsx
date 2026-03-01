import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
export const metadata: Metadata = { title: "Landrace LGD Dog Rescue", description: "Livestock guardian dog rescue." };
export default function Page() {
  return <PageShell title="Landrace LGD Dog Rescue" description="Livestock guardian dog rescue. Where Christine sourced her LGDs." breadcrumbs={[{ label: "Partners", href: "/partners" }, { label: "Landrace LGD", href: "/partners/landrace-lgd" }]} />;
}
