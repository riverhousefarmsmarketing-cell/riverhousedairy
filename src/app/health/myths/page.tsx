import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Myths Debunked",
  description: "14 common goat health myths with evidence-based reality checks.",
};

export default function Page() {
  return (
    <PageShell
      title="Myths Debunked"
      description="14 common goat health myths with evidence-based reality checks."
      breadcrumbs={[
        { label: "Goat Health", href: "/health" },
        { label: "Myths Debunked", href: "/health/myths" },
      ]}
    />
  );
}
