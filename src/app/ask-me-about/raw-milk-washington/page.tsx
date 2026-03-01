import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
export const metadata: Metadata = { title: "Raw Milk in Washington State" };
export default function Page() { return <PageShell title="Raw Milk in Washington State" description="What you need to know about raw milk licensing, testing, and selling legally in WA." breadcrumbs={[{ label: "Ask Me About", href: "/ask-me-about" }, { label: "Raw Milk in WA", href: "/ask-me-about/raw-milk-washington" }]} />; }
