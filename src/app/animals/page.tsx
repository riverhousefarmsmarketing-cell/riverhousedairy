import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Our Animals",
  description: "All breeds at RiverHouse Dairy. Nigerian Dwarf, LaMancha, Mini-LaMancha & Mini Nubian goats. Icelandic sheep, Lacaune-cross & East Friesian mix dairy sheep. Jersey cows & Zebu cattle.",
};

export default function Page() {
  return (
    <PageShell
      title="Our Animals"
      description="Nigerian Dwarf, LaMancha, Mini-LaMancha & Mini Nubian goats. Icelandic sheep, Lacaune-cross & East Friesian mix dairy sheep. Jersey cows & Zebu cattle."
      breadcrumbs={[{ label: "Our Animals", href: "/animals" }]}
    />
  );
}
