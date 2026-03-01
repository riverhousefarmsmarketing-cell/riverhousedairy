import { brand } from "@/lib/tokens";

export function FarmBureauBadge({ size = "sm" }: { size?: "sm" | "lg" }) {
  const base =
    "inline-flex items-center gap-2 rounded-full border border-forest-200 bg-forest-50 text-forest font-medium";
  const sizeClass = size === "lg" ? "px-4 py-2 text-sm" : "px-3 py-1 text-xs";

  return (
    <span className={`${base} ${sizeClass}`}>
      <svg
        className={size === "lg" ? "h-4 w-4" : "h-3 w-3"}
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8 0L10 6H16L11 9.5L13 16L8 12L3 16L5 9.5L0 6H6L8 0Z" />
      </svg>
      {brand.farmBureau}
    </span>
  );
}
