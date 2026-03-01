import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "FAMACHA Guide",
  description: "Visual eyelid scoring guide for parasite management in goats.",
};

export default function Page() {
  return (
    <PageShell
      title="FAMACHA Guide"
      description="Visual eyelid scoring guide for parasite management in goats."
      breadcrumbs={[
        { label: "Goat Health", href: "/health" },
        { label: "FAMACHA Guide", href: "/health/famacha" },
      ]}
    />
  );
}
