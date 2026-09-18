import { Globe } from "@/components/icons";
import { cx } from "@/components/primitives";

/**
 * The overlap chart. Deliberately built from real time zones rather than
 * invented statistics: each bar is a 09:00–17:00 local working day plotted on a
 * shared UTC axis, so the overlap it shows is arithmetic, not a marketing
 * claim.
 */
const AXIS_START = 6;
const AXIS_END = 23;
const SPAN = AXIS_END - AXIS_START;

const pct = (hour: number) => ((hour - AXIS_START) / SPAN) * 100;

const rows = [
  { city: "Lagos", zone: "UTC+1", startUtc: 8, endUtc: 17, accent: true },
  { city: "London", zone: "UTC+0", startUtc: 9, endUtc: 17, accent: false },
  { city: "New York", zone: "UTC−5", startUtc: 14, endUtc: 22, accent: false },
];

/** Where all three working days intersect, in UTC. */
const SHARED = { start: 14, end: 17 };

function label(hourUtc: number) {
  return `${String(hourUtc).padStart(2, "0")}:00`;
}

export function HeroVisual() {
  return (
    <div className="relative">
      {/* Ambient warmth behind the card. */}
      <div
        aria-hidden="true"
        className="animate-sheen absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_70%_30%,rgba(180,72,42,0.16),transparent_70%)] blur-2xl"
      />

      <div className="rounded-3xl border border-line bg-paper p-6 shadow-[0_1px_2px_rgba(28,25,23,0.04),0_28px_60px_-32px_rgba(28,25,23,0.28)] sm:p-8">
        <div className="flex items-center gap-2.5">
          <Globe className="size-4 text-clay" />
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-2">
            A working day, shared
          </p>
        </div>

        <p className="mt-4 font-display text-xl leading-snug text-ink">
          Africa sits between your morning and Asia&rsquo;s night.
        </p>

        <div className="mt-7 space-y-4">
          {rows.map((row) => (
            <div key={row.city}>
              <div className="flex items-baseline justify-between text-sm">
                <span className="font-medium text-ink-2">{row.city}</span>
                <span className="text-xs tabular-nums text-muted-2">
                  {row.zone}
                </span>
              </div>
              <div className="relative mt-2 h-2.5 rounded-full bg-sand">
                <div
                  className={cx(
                    "absolute inset-y-0 rounded-full",
                    row.accent ? "bg-clay" : "bg-ink/25",
                  )}
                  style={{
                    left: `${pct(row.startUtc)}%`,
                    width: `${pct(row.endUtc) - pct(row.startUtc)}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* The intersection, called out under the bars. */}
        <div className="relative mt-5 h-8">
          <div
            className="absolute inset-y-0 rounded-lg border border-dashed border-clay/45 bg-clay-soft/70"
            style={{
              left: `${pct(SHARED.start)}%`,
              width: `${pct(SHARED.end) - pct(SHARED.start)}%`,
            }}
          />
        </div>

        <div className="flex items-center justify-between text-[0.6875rem] tabular-nums text-muted-2">
          <span>{label(AXIS_START)}</span>
          <span>UTC</span>
          <span>{label(AXIS_END)}</span>
        </div>

        <p className="mt-5 border-t border-line-2 pt-5 text-sm leading-relaxed text-muted">
          Lagos overlaps the London working day almost end to end, and still
          catches the New York morning &mdash; the dashed band is where all three
          are online at once.
        </p>
      </div>

      {/* Floating chips — decorative, and the only motion on the page. */}
      <div
        aria-hidden="true"
        className="animate-drift absolute -left-4 -top-5 hidden rounded-full border border-line bg-paper px-4 py-2 text-xs font-medium text-ink-2 shadow-[0_10px_30px_-18px_rgba(28,25,23,0.5)] sm:block"
      >
        Standups, live
      </div>
      <div
        aria-hidden="true"
        className="animate-drift absolute -bottom-5 -right-3 hidden rounded-full border border-line bg-paper px-4 py-2 text-xs font-medium text-ink-2 shadow-[0_10px_30px_-18px_rgba(28,25,23,0.5)] [animation-delay:1.6s] sm:block"
      >
        Same-day answers
      </div>
    </div>
  );
}
