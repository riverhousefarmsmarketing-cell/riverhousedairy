import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
export const metadata: Metadata = { title: "GoatSteward: Track Your Herd" };
export default function Page() { return <PageShell title="GoatSteward: Track Your Herd" description="I built a herd management app because nothing existed for goat farmers. Now you can use it too." breadcrumbs={[{ label: "Ask Me About", href: "/ask-me-about" }, { label: "GoatSteward", href: "/ask-me-about/goatsteward-track-herd" }]} />; }
