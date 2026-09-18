import type { AnchorHTMLAttributes, CSSProperties, ReactNode } from "react";

import { ArrowRight } from "@/components/icons";

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** Adds a stagger to a `.reveal` element without a bespoke class each time. */
export function revealDelay(ms: number): CSSProperties {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}

const buttonBase =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold " +
  "transition-[transform,background-color,border-color,color,box-shadow] duration-300 " +
  "ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-px";

const buttonVariants = {
  primary:
    "bg-clay text-white shadow-[0_1px_2px_rgba(28,25,23,0.10),0_12px_28px_-14px_rgba(180,72,42,0.65)] hover:bg-clay-deep",
  secondary:
    "border border-line bg-paper text-ink shadow-[0_1px_2px_rgba(28,25,23,0.04)] hover:border-clay/40 hover:text-clay",
  onDark:
    "bg-bone text-ink shadow-[0_1px_2px_rgba(0,0,0,0.20)] hover:bg-white",
  ghostDark: "border border-white/20 text-bone hover:border-white/45",
} as const;

type ButtonVariant = keyof typeof buttonVariants;

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  withArrow?: boolean;
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  withArrow = false,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      className={cx(buttonBase, buttonVariants[variant], className)}
      {...rest}
    >
      {children}
      {withArrow && (
        <ArrowRight className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
      )}
    </a>
  );
}

export function SubmitButton({
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cx(buttonBase, buttonVariants.primary, className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cx(
        "text-[0.6875rem] font-semibold uppercase tracking-[0.18em]",
        tone === "dark" ? "text-clay-lit" : "text-clay",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cx(
        "reveal max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={cx(
          "mt-3 text-3xl leading-[1.12] sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-bone" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={cx(
            "mt-5 text-lg leading-relaxed",
            tone === "dark" ? "text-bone/70" : "text-muted",
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
