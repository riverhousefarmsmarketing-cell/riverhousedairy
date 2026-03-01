import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with RiverHouse Dairy in Chehalis, WA.",
};

export default function Page() {
  return (
    <PageShell
      title="Contact"
      description="Get in touch with RiverHouse Dairy in Chehalis, WA."
      breadcrumbs={[{ label: "Contact", href: "/contact" }]}
    />
  );
}
