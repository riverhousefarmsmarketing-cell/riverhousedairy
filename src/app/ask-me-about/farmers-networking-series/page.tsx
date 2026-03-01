import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
export const metadata: Metadata = { title: "Farmers Networking Series" };
export default function Page() { return <PageShell title="Farmers Networking Series" description="Free expert-led events. Soil health, livestock, technology. Real networking with Lewis County farmers." breadcrumbs={[{ label: "Ask Me About", href: "/ask-me-about" }, { label: "Farmers Networking Series", href: "/ask-me-about/farmers-networking-series" }]} />; }
