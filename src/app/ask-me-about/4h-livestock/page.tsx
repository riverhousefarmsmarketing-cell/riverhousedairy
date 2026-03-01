import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
export const metadata: Metadata = { title: "4-H Livestock Projects for Youth" };
export default function Page() { return <PageShell title="4-H Livestock Projects for Youth" description="How kids in Lewis County can raise goats and sheep through 4-H. What parents need to know." breadcrumbs={[{ label: "Ask Me About", href: "/ask-me-about" }, { label: "4-H Projects", href: "/ask-me-about/4h-livestock" }]} />; }
