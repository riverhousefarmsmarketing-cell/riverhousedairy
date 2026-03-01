import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Care Guides",
  description: "Seasonal care, nutrition by life stage, and kidding preparation guides.",
};

export default function Page() {
  return (
    <PageShell
      title="Care Guides"
      description="Seasonal care, nutrition by life stage, and kidding preparation guides."
      breadcrumbs={[
        { label: "Goat Health", href: "/health" },
        { label: "Care Guides", href: "/health/guides" },
      ]}
    />
  );
}
