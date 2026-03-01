import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
export const metadata: Metadata = { title: "Leveraged Seed Buy Through Farm Bureau" };
export default function Page() { return <PageShell title="Leveraged Seed Buy Through Farm Bureau" description="I saved hundreds on pasture seed by pooling orders with other Lewis County farmers." breadcrumbs={[{ label: "Ask Me About", href: "/ask-me-about" }, { label: "Leveraged Seed Buy", href: "/ask-me-about/leveraged-seed-buy" }]} />; }
