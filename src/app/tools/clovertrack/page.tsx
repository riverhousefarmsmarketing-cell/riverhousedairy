import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "CloverTrack",
  description: "4-H digital record book. Always free. Designed for youth livestock projects.",
};

export default function Page() {
  return (
    <PageShell
      title="CloverTrack"
      description="4-H digital record book. Always free. Designed for youth livestock projects."
      breadcrumbs={[
        { label: "Farm Tools", href: "/tools" },
        { label: "CloverTrack", href: "/tools/clovertrack" },
      ]}
    />
  );
}
