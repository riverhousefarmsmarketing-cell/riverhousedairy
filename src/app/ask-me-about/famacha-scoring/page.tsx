import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
export const metadata: Metadata = { title: "FAMACHA Scoring for Parasite Management" };
export default function Page() { return <PageShell title="FAMACHA Scoring for Parasite Management" description="The simple eyelid check that can save your goat's life." breadcrumbs={[{ label: "Ask Me About", href: "/ask-me-about" }, { label: "FAMACHA Scoring", href: "/ask-me-about/famacha-scoring" }]} />; }
