import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
export const metadata: Metadata = { title: "Farm Bureau Member Benefits" };
export default function Page() { return <PageShell title="Farm Bureau Member Benefits" description="Seed buys, insurance discounts, networking, advocacy. What your $65/year membership gets you." breadcrumbs={[{ label: "Ask Me About", href: "/ask-me-about" }, { label: "FB Benefits", href: "/ask-me-about/farm-bureau-benefits" }]} />; }
