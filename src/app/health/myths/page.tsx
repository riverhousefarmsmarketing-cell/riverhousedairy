import type { Metadata } from "next";
import { HealthComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "Myths Debunked | RiverHouse Dairy" };

export default function Page() {
  return <HealthComingSoon title="Myths Debunked" />;
}
