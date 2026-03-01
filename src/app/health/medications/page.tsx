import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Medication Reference",
  description: "Dewormers, antibiotics, supplements, and emergency medications with withdrawal times.",
};

export default function Page() {
  return (
    <PageShell
      title="Medication Reference"
      description="Dewormers, antibiotics, supplements, and emergency medications with withdrawal times."
      breadcrumbs={[
        { label: "Goat Health", href: "/health" },
        { label: "Medications", href: "/health/medications" },
      ]}
    />
  );
}
