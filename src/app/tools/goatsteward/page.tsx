import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "GoatSteward",
  description: "Dairy goat herd management. 536 functions. Health tracking, FAMACHA scoring, milk records, breeding management. Built by a goat farmer, for goat farmers.",
};

export default function Page() {
  return (
    <PageShell
      title="GoatSteward"
      description="Dairy goat herd management. 536 functions. Health tracking, FAMACHA scoring, milk records, breeding management. Built by a goat farmer, for goat farmers."
      breadcrumbs={[
        { label: "Farm Tools", href: "/tools" },
        { label: "GoatSteward", href: "/tools/goatsteward" },
      ]}
    />
  );
}
