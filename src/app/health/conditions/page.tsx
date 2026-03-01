import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Health Conditions",
  description: "15+ goat health conditions with severity ratings, symptoms, treatments, and emergency flags.",
};

export default function Page() {
  return (
    <PageShell
      title="Health Conditions"
      description="15+ goat health conditions with severity ratings, symptoms, treatments, and emergency flags."
      breadcrumbs={[
        { label: "Goat Health", href: "/health" },
        { label: "Conditions", href: "/health/conditions" },
      ]}
    />
  );
}
