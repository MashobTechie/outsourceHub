import { Mark } from "@/components/Mark";
import { cx } from "@/components/primitives";

export function Logo({
  tone = "light",
  className,
}: {
  /** "light" = for light surfaces. "dark" = for the ink bands. */
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span className={cx("inline-flex items-center gap-2.5", className)}>
      <Mark className={cx("size-7 shrink-0", tone === "dark" ? "text-clay-lit" : "text-clay")} />
      <span
        className={cx(
          "font-display text-[1.0625rem] font-semibold tracking-[-0.02em]",
          tone === "dark" ? "text-bone" : "text-ink",
        )}
      >
        outsource
        <span className={tone === "dark" ? "text-clay-lit" : "text-clay"}>.</span>
        hub
      </span>
    </span>
  );
}
