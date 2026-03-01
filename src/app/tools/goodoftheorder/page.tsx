import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "GoodOfTheOrder",
  description: "Robert's Rules meeting management. Meeting minutes, agenda tracking, parliamentary procedure.",
};

export default function Page() {
  return (
    <PageShell
      title="GoodOfTheOrder"
      description="Robert's Rules meeting management. Meeting minutes, agenda tracking, parliamentary procedure."
      breadcrumbs={[
        { label: "Farm Tools", href: "/tools" },
        { label: "GoodOfTheOrder", href: "/tools/goodoftheorder" },
      ]}
    />
  );
}
