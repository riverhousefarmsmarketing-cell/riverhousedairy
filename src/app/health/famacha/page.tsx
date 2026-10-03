import type { Metadata } from "next";
import { HealthComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = { title: "FAMACHA Guide | RiverHouse Dairy" };

export default function Page() {
  return <HealthComingSoon title="FAMACHA Guide" />;
}
