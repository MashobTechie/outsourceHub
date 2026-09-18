"use client";

import type { ReactNode } from "react";

import { useReveal } from "@/hooks/useReveal";
import { cx } from "@/components/primitives";

/**
 * Wraps a landing-page section and wires up its scroll reveals. Children are
 * still rendered on the server — only the observer lives on the client.
 */
export function Section({
  id,
  className,
  children,
  as: Tag = "section",
  labelledBy,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  as?: "section" | "div" | "footer";
  labelledBy?: string;
}) {
  const ref = useReveal<HTMLElement>();

  return (
    <Tag
      id={id}
      ref={ref as React.Ref<never>}
      aria-labelledby={labelledBy}
      className={cx("section", className)}
    >
      {children}
    </Tag>
  );
}
