import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
export const metadata: Metadata = { title: "Livestock Guardian Dogs" };
export default function Page() { return <PageShell title="Livestock Guardian Dogs" description="Why every Lewis County farm needs an LGD, and how Landrace LGD Rescue can help you find one." breadcrumbs={[{ label: "Ask Me About", href: "/ask-me-about" }, { label: "LGDs", href: "/ask-me-about/livestock-guardian-dogs" }]} />; }
