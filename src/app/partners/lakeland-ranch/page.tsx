import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
export const metadata: Metadata = { title: "Lakeland Ranch Equipment", description: "Farm equipment supplier." };
export default function Page() {
  return <PageShell title="Lakeland Ranch Equipment" description="Farm equipment supplier. Christine's experience with their products." breadcrumbs={[{ label: "Partners", href: "/partners" }, { label: "Lakeland Ranch", href: "/partners/lakeland-ranch" }]} />;
}
