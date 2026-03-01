import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Community",
  description: "Farm Bureau board involvement, Farmers Networking Series, Lewis County agriculture.",
};

export default function Page() {
  return (
    <PageShell
      title="Community"
      description="Farm Bureau board involvement, Farmers Networking Series, Lewis County agriculture."
      breadcrumbs={[{ label: "Community", href: "/community" }]}
    />
  );
}
