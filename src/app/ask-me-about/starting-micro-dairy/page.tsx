import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
export const metadata: Metadata = { title: "Starting a Micro Dairy" };
export default function Page() { return <PageShell title="Starting a Micro Dairy" description="What I wish someone had told me before I started milking 80 animals. The real costs, the real work." breadcrumbs={[{ label: "Ask Me About", href: "/ask-me-about" }, { label: "Micro Dairy", href: "/ask-me-about/starting-micro-dairy" }]} />; }
