import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
export const metadata: Metadata = { title: "Building Lacaune Genetics in the PNW" };
export default function Page() { return <PageShell title="Building Lacaune Genetics in the PNW" description="Why I drove 1,157 miles to build rare dairy sheep genetics in the Pacific Northwest." breadcrumbs={[{ label: "Ask Me About", href: "/ask-me-about" }, { label: "Lacaune Genetics", href: "/ask-me-about/lacaune-genetics" }]} />; }
