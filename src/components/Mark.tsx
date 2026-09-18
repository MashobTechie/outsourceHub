import type { SVGProps } from "react";

/**
 * Brand glyph: a hub — one centre node with four satellites wired to it.
 * The satellite at top-right is filled, standing in for the dot in
 * "outsource.hub".
 */
export function Mark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <g
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        opacity={0.55}
      >
        <path d="M16 16 7 7.5M16 16l9-8.5M16 16l-9 8.5M16 16l9 8.5" />
      </g>
      <circle cx="16" cy="16" r="4.4" fill="currentColor" />
      <circle cx="25" cy="7.5" r="3.1" fill="currentColor" />
      <g stroke="currentColor" strokeWidth={1.7} fill="none">
        <circle cx="7" cy="7.5" r="2.4" />
        <circle cx="7" cy="24.5" r="2.4" />
        <circle cx="25" cy="24.5" r="2.4" />
      </g>
    </svg>
  );
}
